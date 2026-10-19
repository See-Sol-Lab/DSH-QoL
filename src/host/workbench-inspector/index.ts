/** Workbench queries（DSH-QoL：官方桌面端里不含删除会话）. */
import type { Context } from '@deepseek-ai/cordis'
import type { SessionEvent, SessionId } from '@deepseek-ai/dsh-session/types'
import type {} from '@deepseek-ai/dsh-session-query'
import type {} from '@deepseek-ai/dsh-fs'
import type { FsTarget } from '@deepseek-ai/dsh-fs'
import type {} from '@deepseek-ai/dsh-git'
import type { DiffResult, DiffScope } from '@deepseek-ai/dsh-git/types'
import Schema from '@deepseek-ai/schemastery'
import { defaultDshHome } from '@deepseek-ai/dsh-home-paths'
import { Remote, RemoteError, TypertRemoteService } from '@deepseek-ai/dsh-typert-protocol'
import { renderSessionMarkdown, untitledSessionTitle } from './session-markdown.ts'
import { existsSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import AGENTS_PROJECT_ZH from '../../../assets/AGENTS.project.zh.md'
import AGENTS_PROJECT_EN from '../../../assets/AGENTS.project.en.md'
import type {} from '@deepseek-ai/dsh-llm'
import type {} from '@deepseek-ai/dsh-workspace'
import { projectMemoryFileName, type MemoryInjection, type WorkbenchExportLanguage, type WorkbenchExportMarkdown, type WorkbenchFileText, type WorkbenchGlobalMemory, type WorkbenchLastReply, type WorkbenchMemory, type WorkbenchSeedLocale, type WorkbenchOverview, type WorkbenchRepository, type WorkbenchSandboxClean, type WorkbenchWorktree } from './types.ts'

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
    // The sandbox provider is optional and read structurally: only the local
    // provider on Windows can clean ACL marks (cleanSandboxMarks).
    ctx.inject(['sandbox'], (sandboxCtx) => {
      this.sandbox = sandboxCtx.get('sandbox')
      sandboxCtx.effect(() => () => { this.sandbox = undefined })
    })
  }

  /**
   * 这段会话每次加载时带入了哪些记忆（见 MemoryInjection；最后一条是当前这次加载在用的）。
   * 没有记录就是 null：会话还没发过第一条，或是本功能之前的老会话。
   * @param sessionId - 会话。
   * @param signal - Request cancellation.
   * @returns 带入事实，或 null。
   */
  @Remote
  memoryInjection(sessionId: SessionId, signal: AbortSignal): Promise<MemoryInjection | null> {
    return Promise.resolve().then(() => {
      signal.throwIfAborted()
      return this.readMemoryInjection(sessionId)
    })
  }

  /** The recorded memory injection for one Session, read synchronously; see {@link memoryInjection}. */
  private readMemoryInjection(sessionId: SessionId): MemoryInjection | null {
    const home = dshHome()
    if (home === undefined || !/^[A-Za-z0-9_-]{1,128}$/u.test(sessionId)) return null
    let raw: unknown
    try {
      raw = JSON.parse(readFileSync(join(home, 'deepseekgui', 'memory-injections', `${sessionId}.json`), 'utf8'))
    } catch {
      return null
    }
    if (typeof raw !== 'object' || raw === null || !('entries' in raw) || !Array.isArray(raw.entries)) return null
    return { sessionId, entries: raw.entries }
  }

  /** The mounted sandbox provider, when there is one. */
  private sandbox: unknown

  /**
   * Remove the Windows ACL sandbox's marks from a folder the desktop user
   * chose (DeepSeekGUI 2026-09-29): its grant, the delete deny, and the Low
   * label that make programs started there run at Low integrity. The sandbox
   * provider picks the folder that actually carries them (the chosen one or
   * the ancestor they are inherited from) and refuses while a confined
   * command runs there.
   * @param path - Absolute folder path from the desktop's folder dialog.
   * @param signal - Request cancellation.
   * @returns what was done, and on which folder.
   */
  @Remote
  async cleanSandboxMarks(path: string, signal: AbortSignal): Promise<WorkbenchSandboxClean> {
    signal.throwIfAborted()
    const sandbox = this.sandbox
    if (typeof sandbox !== 'object' || sandbox === null || !('cleanWorkspaceMarks' in sandbox) || typeof sandbox.cleanWorkspaceMarks !== 'function') {
      return { status: 'unsupported', root: path }
    }
    const result: unknown = await Promise.resolve(Reflect.apply(sandbox.cleanWorkspaceMarks, sandbox, [path]))
    if (typeof result !== 'object' || result === null || !('status' in result) || !('root' in result) || typeof result.root !== 'string') {
      throw new Error('cleanSandboxMarks: the sandbox provider answered an unexpected shape')
    }
    const { status, root } = result
    if (status !== 'cleaned' && status !== 'clean' && status !== 'busy' && status !== 'unsupported') {
      throw new Error('cleanSandboxMarks: the sandbox provider answered an unexpected status')
    }
    return { status, root }
  }

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
    const home = requiredHome()
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
    const path = join(requiredHome(), 'memory.md')
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
   * The newest assistant reply of a Session and whether its turn has ended.
   * The desktop's feedback triage (#15) prompts a hidden session and polls
   * this; reading the log through the query service keeps it off the
   * streaming follow channel the desktop has no client for.
   * @param sessionId - the session to read.
   * @param signal - Request cancellation.
   * @returns the reply text (text blocks joined) and its completeness.
   */
  @Remote
  async lastReply(sessionId: SessionId, signal: AbortSignal): Promise<WorkbenchLastReply> {
    signal.throwIfAborted()
    using observation = await this.ctx.sessionQuery.observeSession(sessionId, { signal, projectionMode: 'none' })
    const events = observation.events
    const reply = events.findLast((event): event is SessionEvent<'assistant/message'> => event.type === 'assistant/message')
    if (reply === undefined) return { text: null, complete: false }
    const ended = events.findLast(event => event.type === 'turn/end')
    const complete = ended !== undefined && ended.seq > reply.seq
    const text = reply.data.message.content
      .flatMap(block => (block.type === 'text' ? [block.text] : []))
      .join('\n')
      .trim()
    return { text: text === '' ? null : text, complete }
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
    // DSH-QoL：彻底删除依赖 DeepSeekGUI 给官方 session-controller 加的 deleteSession，
    // 官方原版没有。保留签名以对上生成的远程接口描述，调用时如实拒绝。
    void sessionId; void signature
    throw new RemoteError('workbench/unsupported', 'deleting a session is not available in the official desktop app', {})
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
function dshHome(): string | undefined {
  const home = process.env.DSH_HOME
  // DSH-QoL：官方桌面端不一定设置 DSH_HOME；没有时用官方默认位置（~/.dsh）。
  return home === undefined || home === '' ? defaultDshHome() : home
}

function requiredHome(): string {
  const home = dshHome()
  if (home === undefined) throw new Error('no DSH home is available')
  return home
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
