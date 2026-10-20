/** Workbench queries（DSH-QoL：官方桌面端里不含删除会话）. */
import type { Context } from '@deepseek-ai/cordis'
import type { SessionId } from '@deepseek-ai/dsh-session/types'
import type {} from '@deepseek-ai/dsh-session-query'
import type {} from '@deepseek-ai/dsh-fs'
import type { FsTarget } from '@deepseek-ai/dsh-fs'
import type {} from '@deepseek-ai/dsh-git'
import type { DiffResult, DiffScope } from '@deepseek-ai/dsh-git/types'
import Schema from '@deepseek-ai/schemastery'
import { dshHome } from '../home.ts'
import { Remote, RemoteError, TypertRemoteService } from '@deepseek-ai/dsh-typert-protocol'
import { renderSessionMarkdown, untitledSessionTitle } from './session-markdown.ts'
import { fetchAccountUsage, type UsageCredentials } from './usage.ts'
import { existsSync, lstatSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { isAbsolute, join, relative } from 'node:path'
import AGENTS_PROJECT_ZH from '../../../assets/AGENTS.project.zh.md'
import AGENTS_PROJECT_EN from '../../../assets/AGENTS.project.en.md'
import type {} from '@deepseek-ai/dsh-llm'
import type {} from '@deepseek-ai/dsh-workspace'
// Type-only: the api-session/removed event.
import type {} from '@deepseek-ai/dsh-api-session-controller'
import { projectMemoryFileName, type WorkbenchExportLanguage, type WorkbenchExportMarkdown, type WorkbenchFileText, type WorkbenchGlobalMemory, type WorkbenchMemory, type WorkbenchSeedLocale, type WorkbenchOverview, type WorkbenchRepository, type WorkbenchUsage, type WorkbenchWorktree } from './types.ts'

export type * from './types.ts'
export { projectMemoryFileName } from './types.ts'

/** Deployment bounds for inspection responses. */
export interface Config {
  /** Newest commits returned by the overview. */
  logLimit: number
  /** Inclusive UTF-8 byte limit for file text and Git patches. */
  maxTextBytes: number
  /** Inclusive UTF-8 byte limit for a rendered Markdown export. */
  maxExportBytes: number
}

/** Whether two git-reported paths name the same directory (git prints forward slashes; Windows is case-insensitive). */
function samePath(left: string, right: string): boolean {
  const norm = (value: string): string => {
    const slashes = value.replace(/\\/gu, '/').replace(/\/+$/u, '')
    return process.platform === 'win32' ? slashes.toLowerCase() : slashes
  }
  return norm(left) === norm(right)
}

declare module '@deepseek-ai/cordis' {
  interface Context {
    /** Current read-only workspace and repository queries. */
    workbenchInspector: WorkbenchInspector
  }
}

declare module '@deepseek-ai/dsh-typert-protocol' {
  interface RemoteErrorDetailsMap {
    /**
     * The Session's working directory is an ordinary folder, not inside a Git
     * repository. A normal state for the Changes and Git views, told apart
     * from a failed read by this code.
     */
    'workbench/not-a-repository': { readonly cwd: string }
    /** DSH-QoL：功能依赖 DeepSeekGUI 对官方的改动，官方桌面端里不可用。 */
    'workbench/unsupported': Record<string, never>
    /** DSH-QoL：保存记忆时文件已被别处改过（助手或其他编辑器），需刷新后再改。 */
    'workbench/memory-changed': { readonly path: string }
    /** DSH-QoL：会话还在加载中，不能删。 */
    'workbench/session-busy': Record<string, never>
  }
}

/** Read-only workspace inspection plus desktop-authorized Session deletion. */
export class WorkbenchInspector extends TypertRemoteService {
  static inject = ['fs', 'git', 'typert', 'sessionQuery']
  static Config: Schema<Config> = Schema.object({
    logLimit: Schema.natural().min(1).default(30),
    maxTextBytes: Schema.natural().min(1).default(512 * 1024),
    maxExportBytes: Schema.natural().min(1).default(20 * 1024 * 1024),
  })

  /**
   * @param ctx - Composed host providers.
   * @param config - Validated response bounds.
   */
  constructor(ctx: Context, private readonly config: Config) {
    super(ctx, 'workbenchInspector', { namespace: 'workbenchInspector' })
    // DSH-QoL：删除已归档会话要看归档集合与当前加载的会话；都按可选依赖读，缺了就拒绝删除。
    ctx.inject(['workspaceRegistry'], (registryCtx) => {
      this.registry = registryCtx.workspaceRegistry
      registryCtx.effect(() => () => { this.registry = undefined })
    })
    // DSH-QoL：用量页读官方账号插件存的平台令牌；没有 credentials 服务就当未登录。
    ctx.inject(['credentials'], (credentialsCtx) => {
      this.credentials = credentialsCtx.get('credentials') as unknown as UsageCredentials
      credentialsCtx.effect(() => () => { this.credentials = undefined })
    })
    ctx.inject(['sessions'], (sessionsCtx) => {
      // 前后端在同一个类型检查程序里，ctx.sessions 被前端的 ISessions 合并覆盖；Host 这里是会话注册表。
      this.liveSessions = sessionsCtx.get('sessions') as unknown as { get(id: SessionId): unknown }
      sessionsCtx.effect(() => () => { this.liveSessions = undefined })
    })
  }

  /** DSH-QoL：官方凭据服务（读平台令牌）。 */
  private credentials: UsageCredentials | undefined
  /** DSH-QoL：最近一次用量结果；5 秒内再问直接给它，连点刷新不会连发请求。 */
  private lastUsage: { at: number; value: Promise<WorkbenchUsage> } | undefined

  /**
   * 账户用量与余额：插件后台带官方账号的平台令牌请求开放平台，只返回聚合值。
   * @param locale - 界面语言。
   * @param signal - Request cancellation.
   * @returns 用量结果；没登录为 signed-out。
   */
  @Remote
  async accountUsage(locale: WorkbenchSeedLocale, signal: AbortSignal): Promise<WorkbenchUsage> {
    const now = Date.now()
    if (this.lastUsage !== undefined && now - this.lastUsage.at < 5_000) return this.lastUsage.value
    const credentials = this.credentials
    const value = credentials === undefined
      ? Promise.resolve<WorkbenchUsage>({ status: 'signed-out', reason: null, fetchedAt: new Date(now).toISOString(), data: null, usagePageUrl: 'https://platform.deepseek.com/usage' })
      : fetchAccountUsage(credentials, locale, signal, now)
    this.lastUsage = { at: now, value }
    value.catch(() => { if (this.lastUsage?.value === value) this.lastUsage = undefined })
    return value
  }

  /** DSH-QoL：官方工作区注册表（归档集合）。 */
  private registry: Context['workspaceRegistry'] | undefined
  /** DSH-QoL：Host 里当前加载着的会话。 */
  private liveSessions: { get(id: SessionId): unknown } | undefined

  private async cwd(sessionId: SessionId, signal: AbortSignal): Promise<string> {
    using observation = await this.ctx.sessionQuery.observeSession(sessionId, { signal, projectionMode: 'none' })
    const cwd = observation.header.cwd
    if (cwd === undefined) throw new Error('inspection requires a Session working directory')
    // B6-3: a deleted workspace must read as "the folder is gone", never as
    // a Git failure or a confusing downstream "not found" on some subpath.
    const root = await this.ctx.fs.resolve(cwd, { signal })
    if (await this.ctx.fs.stat(root, signal) === undefined) {
      throw new Error(`workspace directory does not exist: ${cwd}`)
    }
    return cwd
  }

  /**
   * The Git identity of a Session folder. Only the confirmed "not inside a
   * repository" answer becomes the `workbench/not-a-repository` failure;
   * a missing git, a broken repository, or a permission error keep their own
   * message. Matched by error name because the class crosses package copies.
   * @param cwd - The Session working directory.
   * @returns the repository identity.
   */
  private async repoIdentity(cwd: string): ReturnType<Context['git']['repoIdentity']> {
    try {
      return await this.ctx.git.repoIdentity(cwd)
    } catch (error) {
      if (error instanceof Error && error.name === 'GitNotARepositoryError') {
        throw new RemoteError('workbench/not-a-repository', error.message, { cwd })
      }
      throw error
    }
  }

  private async target(rootPath: string, path: string, signal: AbortSignal): Promise<FsTarget> {
    const root = await this.ctx.fs.resolve(rootPath, { signal })
    const target = await this.ctx.fs.resolve(path, { cwd: rootPath, signal })
    if (!this.ctx.fs.contains(root, target)) throw new Error('inspection path is outside the selected root')
    return target
  }

  /**
   * Read complete bounded text using provider-owned decoding and binary rejection.
   * @param sessionId - Session whose recorded cwd anchors the read.
   * @param path - File relative to the selected root.
   * @param repository - Select the Session's Git root instead of cwd.
   * @param signal - Request cancellation.
   * @returns the file text; oversized or binary files fail explicitly.
   */
  @Remote
  async text(sessionId: SessionId, path: string, repository: boolean, signal: AbortSignal): Promise<WorkbenchFileText> {
    const cwd = await this.cwd(sessionId, signal)
    const root = repository ? (await this.repoIdentity(cwd)).root : cwd
    return { path, text: await this.readText(await this.target(root, path, signal), signal) }
  }

  private async readText(target: FsTarget, signal: AbortSignal): Promise<string> {
    let text = ''
    let bytes = 0
    for await (const chunk of await this.ctx.fs.streamText(target, signal)) {
      bytes += Buffer.byteLength(chunk)
      if (bytes > this.config.maxTextBytes) throw new Error('file exceeds the configured text inspection limit')
      text += chunk
    }
    return text
  }

  /**
   * Read the project memory file (`<folder>.memory.md` in the Session cwd)
   * and whether the project has an AGENTS.md. A missing memory file is a
   * normal state ("no memory yet"), not a failure.
   * @param sessionId - Session whose recorded cwd anchors the read.
   * @param signal - Request cancellation.
   * @returns the cwd, the memory file name, its text or null, and the AGENTS.md presence.
   */
  @Remote
  async memory(sessionId: SessionId, signal: AbortSignal): Promise<WorkbenchMemory> {
    const cwd = await this.cwd(sessionId, signal)
    const fileName = projectMemoryFileName(cwd)
    const memoryTarget = await this.target(cwd, fileName, signal)
    const text = await this.ctx.fs.stat(memoryTarget, signal) === undefined ? null : await this.readText(memoryTarget, signal)
    const agents = await this.ctx.fs.stat(await this.target(cwd, 'AGENTS.md', signal), signal) !== undefined
    return { cwd, fileName, text, agents }
  }

  // DSH-QoL：下面四个方法原由 DeepSeekGUI 主进程经控制通道完成，官方桌面端没有那条
  // 通道，搬到这里。路径一律由 Host 从权威事实推出（DSH home、会话记录的 cwd），不接受
  // 调用方传来的任意路径；这是用户在面板上的主动保存，不经助手的沙箱权限门。

  /**
   * Read the global memory `<DSH home>/memory.md`.
   * @param signal - Request cancellation.
   * @returns the home and its text ('' when absent, null when unreadable or too large).
   */
  @Remote
  async globalMemory(signal: AbortSignal): Promise<WorkbenchGlobalMemory> {
    signal.throwIfAborted()
    const home = dshHome()
    return { home, text: readMemoryText(join(home, 'memory.md')) }
  }

  /**
   * Save the global memory, refusing when the file moved on since the edit began.
   * @param content - New full text.
   * @param expected - The text the edit started from.
   * @param signal - Request cancellation.
   * @returns completion after the atomic write.
   */
  @Remote
  async saveGlobalMemory(content: string, expected: string, signal: AbortSignal): Promise<void> {
    signal.throwIfAborted()
    const path = join(dshHome(), 'memory.md')
    if (readMemoryText(path) !== expected) {
      throw new RemoteError('workbench/memory-changed', 'The global memory file changed. Reopen it before saving.', { path })
    }
    atomicWriteText(path, content)
  }

  /**
   * Save the project memory `<folder>.memory.md` in the Session cwd, refusing
   * when the file moved on since the edit began.
   * @param sessionId - Session whose recorded cwd anchors the write.
   * @param content - New full text.
   * @param expected - The text the edit started from ('' for a file that did not exist).
   * @param signal - Request cancellation.
   * @returns completion after the atomic write.
   */
  @Remote
  async saveProjectMemory(sessionId: SessionId, content: string, expected: string, signal: AbortSignal): Promise<void> {
    const cwd = await this.cwd(sessionId, signal)
    const path = join(cwd, projectMemoryFileName(cwd))
    if (readMemoryText(path) !== expected) {
      throw new RemoteError('workbench/memory-changed', 'The project memory file changed. Refresh before saving.', { path })
    }
    atomicWriteText(path, content)
  }

  /**
   * Create the project AGENTS.md from the bundled template once; an existing file is kept.
   * @param sessionId - Session whose recorded cwd anchors the write.
   * @param locale - Template language.
   * @param signal - Request cancellation.
   * @returns whether the file was created or already existed.
   */
  @Remote
  async createProjectAgents(sessionId: SessionId, locale: WorkbenchSeedLocale, signal: AbortSignal): Promise<'created' | 'exists'> {
    const cwd = await this.cwd(sessionId, signal)
    const path = join(cwd, 'AGENTS.md')
    if (existsSync(path)) return 'exists'
    try {
      writeFileSync(path, locale === 'zh' ? AGENTS_PROJECT_ZH : AGENTS_PROJECT_EN, { encoding: 'utf8', flag: 'wx' })
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'EEXIST') return 'exists'
      throw error
    }
    return 'created'
  }

  /**
   * Read current repository status without running a model or tool.
   * @param sessionId - Session whose recorded cwd anchors the read.
   * @param signal - Request cancellation.
   * @returns canonical Git status and root.
   */
  @Remote
  async status(sessionId: SessionId, signal: AbortSignal): Promise<WorkbenchRepository> {
    signal.throwIfAborted()
    const identity = await this.repoIdentity(await this.cwd(sessionId, signal))
    const status = await this.ctx.git.status(identity.root)
    signal.throwIfAborted()
    return { root: identity.root, status }
  }

  /**
   * Read the current patch for one path or the complete selected scope.
   * @param sessionId - Session whose recorded cwd anchors the read.
   * @param scope - Index or unstaged changes.
   * @param path - Repository-relative file; empty selects all changes.
   * @param signal - Request cancellation.
   * @returns the bounded provider diff; truncation is never silent.
   */
  @Remote
  async diff(sessionId: SessionId, scope: DiffScope, path: string, signal: AbortSignal): Promise<DiffResult> {
    signal.throwIfAborted()
    const root = (await this.repoIdentity(await this.cwd(sessionId, signal))).root
    if (path !== '') await this.target(root, path, signal)
    const value = await this.ctx.git.diff(root, scope, path === '' ? undefined : path, true, this.config.maxTextBytes)
    signal.throwIfAborted()
    return value
  }

  /**
   * Render one Session as a human-readable Markdown document (B8-P1). The
   * log is read through the query service — a running turn's newest events
   * may not be on disk yet — and folded by the pure renderer; no model is
   * called and nothing is sanitized. Compaction markers ride the raw log,
   * so pre-compaction messages are quoted as they happened.
   * @param sessionId - Session selected by the desktop user.
   * @param includeDetails - Whether tool calls and reasoning blocks ride along.
   * @param language - The desktop UI language for headings and labels.
   * @param signal - Request cancellation.
   * @returns the display title and the rendered document.
   * @throws when the rendered document exceeds `maxExportBytes`; the message
   * is the product's fixed user-facing sentence.
   */
  @Remote
  async exportMarkdown(
    sessionId: SessionId,
    includeDetails: boolean,
    language: WorkbenchExportLanguage,
    signal: AbortSignal,
  ): Promise<WorkbenchExportMarkdown> {
    signal.throwIfAborted()
    using observation = await this.ctx.sessionQuery.observeSession(sessionId, { signal, projectionMode: 'none' })
    const snapshot = await this.ctx.sessionQuery.readTitle(sessionId, signal)
    const title = snapshot?.title ?? untitledSessionTitle(language)
    const markdown = renderSessionMarkdown({
      title,
      ...observation.header.cwd === undefined ? {} : { cwd: observation.header.cwd },
      sessionId,
      events: observation.events,
      includeDetails,
      language,
      exportedAt: Date.now(),
    })
    if (Buffer.byteLength(markdown, 'utf8') > this.config.maxExportBytes) {
      // The desktop shows this message verbatim, in the export's language.
      throw new Error(language === 'zh'
        ? '会话过大，暂不支持导出为 Markdown，可改用官方的会话日志导出'
        : 'This session is too large to export as Markdown; use the official session log download instead')
    }
    return { title, markdown }
  }

  /**
   * Delegate authorized deletion to the Session owner, waiting for active work.
   * @param sessionId - Session selected by the desktop user.
   * @param signature - Desktop authorization bound to Home and Session ID.
   * @returns Completion of content deletion and its client announcement.
   */
  @Remote
  async deleteSession(sessionId: SessionId, signature: string): Promise<void> {
    // DSH-QoL：DeepSeekGUI 的删除改在官方 session-controller / 持久化层里，官方原版没有
    // 删除接口。这里只做最窄的一条路：只删「已归档、当前没被加载」的会话，在会话存储里
    // 精确找到以会话 id 命名的目录后整个删掉，再发官方的 api-session/removed 让浏览器的
    // 会话列表移除它；官方搜索索引下次与磁盘比对时自己清掉条目。signature 不再使用
    // （GUI 用它做桌面授权），保留是为对上生成的远程接口描述。
    void signature
    const registry = this.registry
    if (registry === undefined || !registry.archivedSessionIds.includes(sessionId)) {
      throw new RemoteError('workbench/unsupported', 'only an archived session can be deleted', {})
    }
    if (this.liveSessions === undefined || this.liveSessions.get(sessionId) !== undefined) {
      throw new RemoteError('workbench/session-busy', 'the session is still loaded; restart the app and try again', {})
    }
    const home = dshHome()
    const directory = findSessionDirectory(join(home, 'sessions'), sessionId)
    // 先从官方归档集合里拿掉（官方没有「忘掉某个 id」，取消归档是唯一的写法）；失败不挡删除。
    try { await registry.unarchiveSession(sessionId) } catch { /* 留在归档集合里也无害：读不到会话就跳过 */ }
    rmSync(directory, { recursive: true, force: false })
    // 官方会话投影缓存里这个会话的那一份（只读缓存，删掉无害）。
    rmSync(join(home, 'storages', 'session_projcache', 'sessions', `${sessionId}.json`), { force: true })
    this.ctx.emit('api-session/removed', sessionId)
  }

  /**
   * Repository-level facts for the Git and Worktree views in one read:
   * status, configured remotes, the newest commits, and every registered
   * work tree with its own changed paths. Nothing is written; a work tree
   * whose status cannot be read reports no changed paths.
   * @param sessionId - Session whose recorded cwd anchors the read.
   * @param signal - Request cancellation.
   * @returns the read-only repository overview.
   */
  @Remote
  async overview(sessionId: SessionId, signal: AbortSignal): Promise<WorkbenchOverview> {
    signal.throwIfAborted()
    const identity = await this.repoIdentity(await this.cwd(sessionId, signal))
    const [status, remotes, commits, trees] = await Promise.all([
      this.ctx.git.status(identity.root),
      this.ctx.git.remotes(identity.root),
      this.ctx.git.log(identity.root, this.config.logLimit),
      this.ctx.git.worktrees(identity.root),
    ])
    signal.throwIfAborted()
    const worktrees: WorkbenchWorktree[] = []
    for (const tree of trees) {
      const current = samePath(tree.path, identity.root)
      let changedPaths: string[] = []
      let statusError: string | undefined
      if (current) {
        changedPaths = status.entries.map(entry => entry.path)
      } else if (!tree.bare) {
        const other = await this.ctx.git.status(tree.path).catch((error: unknown) => {
          statusError = error instanceof Error ? error.message : String(error)
          return undefined
        })
        changedPaths = other?.entries.map(entry => entry.path) ?? []
      }
      signal.throwIfAborted()
      worktrees.push({ ...tree, current, changedPaths, ...(statusError === undefined ? {} : { statusError }) })
    }
    return { root: identity.root, status, remotes, commits, worktrees }
  }
}

/** DSH_HOME（宿主进程的环境变量）。 */


/**
 * DSH-QoL：在官方会话存储里找到一个会话的目录：`<root>/<工作区编码>/<sessionId>/`。
 * 只接受恰好一个、名字与 id 完全相同、不是链接、确实在 root 之下的目录。
 * @param root - `<DSH home>/sessions`。
 * @param sessionId - 会话 id（形如 `session-…`）。
 * @returns 目录绝对路径。
 */
function findSessionDirectory(root: string, sessionId: string): string {
  if (!/^session-[A-Za-z0-9-]+$/u.test(sessionId)) throw new Error(`unexpected session id: ${sessionId}`)
  const matches: string[] = []
  for (const group of readdirSync(root, { withFileTypes: true })) {
    if (!group.isDirectory()) continue
    const candidate = join(root, group.name, sessionId)
    if (existsSync(candidate)) matches.push(candidate)
  }
  if (matches.length !== 1) throw new Error(`expected one stored directory for ${sessionId}, found ${String(matches.length)}`)
  const directory = matches[0] as string
  const stats = lstatSync(directory)
  if (stats.isSymbolicLink() || !stats.isDirectory()) throw new Error(`refusing to delete a linked or non-directory session path: ${directory}`)
  const rel = relative(root, directory)
  if (rel.startsWith('..') || isAbsolute(rel)) throw new Error(`session path is outside session storage: ${directory}`)
  return directory
}

/** DSH-QoL：全局记忆读取上限，与 DeepSeekGUI 主进程一致。 */
const MEMORY_CONTENT_MAX = 200_000

/**
 * Read a memory file the way the DeepSeekGUI desktop did: absent = '', too
 * large or unreadable = null (a save quoting null never matches, so it refuses).
 * @param path - Memory file path.
 * @returns the text, '' or null.
 */
function readMemoryText(path: string): string | null {
  try {
    if (!existsSync(path)) return ''
    if (statSync(path).size > MEMORY_CONTENT_MAX * 4) return null
    const content = readFileSync(path, 'utf8')
    return content.length > MEMORY_CONTENT_MAX ? null : content
  } catch {
    return null
  }
}

/**
 * Write through a sibling temp file and rename, so a crash never leaves half a memory file.
 * @param path - Target file.
 * @param text - Full new text.
 */
function atomicWriteText(path: string, text: string): void {
  const temp = `${path}.${process.pid}.${Date.now()}.tmp`
  try {
    writeFileSync(temp, text, 'utf8')
    renameSync(temp, path)
  } catch (error) {
    rmSync(temp, { force: true })
    throw error
  }
}

export default WorkbenchInspector
