/**
 * 应用内更新：查 GitHub 最新 Release，经官方 pluginManager.installBundle 换成新版本的
 * tgz 链接，重启 DSH 后生效。
 *
 * 官方的「更新」只支持按包名从插件源安装的插件，用链接装的 QoL 走不了；但 installBundle
 * 接受新链接，不用先卸载，换完返回 restart-required。官方没有开放重启接口，所以最后一步
 * 是提示用户退出后重新打开。
 *
 * 只有从本仓库 Release 链接安装的才提供更新：file: 之类的是开发安装，不能被盖掉。
 */

declare const __DSH_QOL_VERSION__: string

/** 正在运行的版本（构建时写入），和磁盘上的版本不同就是「装好了，等重启」。 */
export const RUNNING_VERSION = __DSH_QOL_VERSION__

const PACKAGE = '@see-sol-lab/dsh-qol'
const LATEST_URL = 'https://api.github.com/repos/See-Sol-Lab/DSH-QoL/releases/latest'
const RELEASE_PREFIX = 'https://github.com/See-Sol-Lab/DSH-QoL/releases/download/'
const CHECK_INTERVAL_MS = 24 * 60 * 60 * 1000
const CHECK_TIMEOUT_MS = 15_000
const LAST_CHECK_KEY = 'dsh-qol.update.lastCheck'
const KNOWN_RELEASE_KEY = 'dsh-qol.update.release'
const DISMISSED_KEY = 'dsh-qol.update.dismissed'
/** 安装前记下目标版本：新版启动时对上了，就告诉用户已经更新好了。 */
const PENDING_KEY = 'dsh-qol.update.pending'

/** 一个可安装的 Release。 */
export interface Release {
  readonly version: string
  readonly url: string
}

export type UpdateState =
  | { readonly phase: 'loading' }
  /** 不是从本仓库 Release 安装的（开发安装），不提供更新。 */
  | { readonly phase: 'unmanaged' }
  | { readonly phase: 'idle' }
  | { readonly phase: 'checking' }
  | { readonly phase: 'latest' }
  | { readonly phase: 'available'; readonly release: Release }
  | { readonly phase: 'installing'; readonly release: Release }
  | { readonly phase: 'restart'; readonly version: string }
  /** 新版已在运行：官方可能直接热替换（旧代码被卸载，来不及提示），也可能是重启后。 */
  | { readonly phase: 'updated'; readonly version: string }
  | { readonly phase: 'check-failed'; readonly detail: string }
  | { readonly phase: 'install-failed'; readonly release: Release; readonly detail: string }

/** 官方 pluginManager 远程接口里本模块用到的部分。 */
export interface PluginManagerRemote {
  listBundles(): Promise<RemoteAnswer<readonly { name: string; version?: string; source?: string }[]>>
  installBundle(spec: string, options: { enabled: boolean; requestId: string }): Promise<RemoteAnswer<InstallOutcome>>
  waitForInstall(requestId: string): Promise<RemoteAnswer<InstallOutcome | null>>
}

type RemoteAnswer<T> = { ok: true; value: T } | { ok: false; error: { message: string } }

interface InstallOutcome {
  application: 'applied' | 'restart-required' | 'overridden' | 'failed' | 'cancelled'
  error?: { code: string; diagnostic?: string }
  packageResult?: { output: string }
}

/**
 * 比较两个 x.y.z 版本（带预发布后缀的按数字部分比）。
 * @param a - 版本。
 * @param b - 版本。
 * @returns a 比 b 新时为 true；任一版本读不懂时为 false。
 */
export function isNewer(a: string, b: string): boolean {
  const parse = (version: string): number[] | undefined => {
    const match = /^v?(\d+)\.(\d+)\.(\d+)/u.exec(version)
    return match === null ? undefined : match.slice(1, 4).map(Number)
  }
  const left = parse(a)
  const right = parse(b)
  if (left === undefined || right === undefined) return false
  for (let i = 0; i < 3; i += 1) {
    if (left[i]! !== right[i]!) return left[i]! > right[i]!
  }
  return false
}

/**
 * 从 GitHub 的 Release 应答里取版本和 tgz 链接；链接不在本仓库 Release 下一律不认。
 * @param body - releases/latest 的 JSON。
 * @returns 可安装的 Release，没有符合条件的 tgz 时为 undefined。
 */
export function parseRelease(body: unknown): Release | undefined {
  const release = body as { tag_name?: unknown; assets?: readonly { browser_download_url?: unknown }[] } | null
  if (typeof release?.tag_name !== 'string') return undefined
  const version = release.tag_name.replace(/^v/u, '')
  const url = release.assets?.map(asset => asset.browser_download_url)
    .find((candidate): candidate is string => typeof candidate === 'string' && candidate.startsWith(RELEASE_PREFIX) && candidate.endsWith('.tgz'))
  return url === undefined ? undefined : { version, url }
}

/** 本地存储可能被禁用或清空，读写都不能影响更新流程。 */
function readStored(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}

function writeStored(key: string, value: string): void {
  try { localStorage.setItem(key, value) } catch { /* 下次重新查 */ }
}

function messageOf(reason: unknown): string {
  return reason instanceof Error ? reason.message : String(reason)
}

/**
 * 失败原因：pnpm 的输出很长，结尾常是堆栈；只留最后两行不是堆栈的内容。
 * @param outcome - 官方的安装结果。
 * @returns 给用户看的一两行。
 */
export function failureDetail(outcome: InstallOutcome): string {
  const lines = outcome.packageResult?.output.split(/\r?\n/u)
    .map(line => line.trim())
    .filter(line => line !== '' && !line.startsWith('at ')) ?? []
  if (lines.length > 0) return lines.slice(-2).join('\n').slice(0, 300)
  return outcome.error?.diagnostic ?? outcome.error?.code ?? outcome.application
}

export interface Updater {
  subscribe(listener: () => void): () => void
  state(): UpdateState
  /** 这个版本的提示是否被「稍后」收起了（设置页里的入口不受影响）。 */
  dismissed(version: string): boolean
  dismiss(version: string): void
  /** 收起「已更新」提示。 */
  acknowledge(): void
  /** 启动时调用；autoCheck 决定要不要联网查，距上次不到一天就用上次的结果。 */
  start(autoCheck: boolean): Promise<void>
  check(): Promise<void>
  install(release: Release): Promise<void>
}

/**
 * 创建更新状态机。
 * @param remote - 官方 pluginManager 远程接口。
 * @param request - fetch（测试可替换）。
 * @returns 更新器。
 */
export function createUpdater(remote: PluginManagerRemote, request: typeof fetch = fetch.bind(globalThis)): Updater {
  let current: UpdateState = { phase: 'loading' }
  const listeners = new Set<() => void>()
  const set = (next: UpdateState): void => {
    current = next
    for (const listener of listeners) listener()
  }

  const installedVersion = async (): Promise<{ version?: string; source?: string } | undefined> => {
    const answer = await remote.listBundles()
    if (!answer.ok) throw new Error(answer.error.message)
    return answer.value.find(bundle => bundle.name === PACKAGE)
  }

  const offer = (release: Release): void => {
    set(isNewer(release.version, RUNNING_VERSION) ? { phase: 'available', release } : { phase: 'latest' })
  }

  const check = async (): Promise<void> => {
    set({ phase: 'checking' })
    try {
      const response = await request(LATEST_URL, {
        headers: { Accept: 'application/vnd.github+json' },
        signal: AbortSignal.timeout(CHECK_TIMEOUT_MS),
      })
      if (!response.ok) throw new Error(`GitHub HTTP ${String(response.status)}`)
      const release = parseRelease(await response.json())
      if (release === undefined) throw new Error('no installable package in the latest release')
      writeStored(LAST_CHECK_KEY, String(Date.now()))
      writeStored(KNOWN_RELEASE_KEY, JSON.stringify(release))
      offer(release)
    } catch (reason) {
      set({ phase: 'check-failed', detail: messageOf(reason) })
    }
  }

  return {
    subscribe(listener) {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
    state: () => current,
    dismissed: version => readStored(DISMISSED_KEY) === version,
    dismiss(version) {
      writeStored(DISMISSED_KEY, version)
      for (const listener of listeners) listener()
    },
    acknowledge() { set({ phase: 'latest' }) },
    async start(autoCheck) {
      let bundle
      try {
        bundle = await installedVersion()
      } catch (reason) {
        set({ phase: 'check-failed', detail: messageOf(reason) })
        return
      }
      if (bundle?.source?.startsWith(RELEASE_PREFIX) !== true) {
        set({ phase: 'unmanaged' })
        return
      }
      if (bundle.version !== undefined && isNewer(bundle.version, RUNNING_VERSION)) {
        set({ phase: 'restart', version: bundle.version })
        return
      }
      if (readStored(PENDING_KEY) === RUNNING_VERSION) {
        writeStored(PENDING_KEY, '')
        set({ phase: 'updated', version: RUNNING_VERSION })
        return
      }
      set({ phase: 'idle' })
      if (!autoCheck) return
      const last = Number(readStored(LAST_CHECK_KEY))
      const known = readStored(KNOWN_RELEASE_KEY)
      if (Number.isFinite(last) && Date.now() - last < CHECK_INTERVAL_MS && known !== null) {
        try {
          const release = JSON.parse(known) as Release
          offer(release)
          return
        } catch { /* 存坏了就重新查 */ }
      }
      await check()
    },
    check,
    async install(release) {
      set({ phase: 'installing', release })
      writeStored(PENDING_KEY, release.version)
      const requestId = crypto.randomUUID()
      const failed = (detail: string): void => {
        writeStored(PENDING_KEY, '')
        set({ phase: 'install-failed', release, detail })
      }
      try {
        let answer = await remote.installBundle(release.url, { enabled: true, requestId })
        // 应答丢了（比如连接重连）不等于没装上：向官方要这次安装的结果。
        if (!answer.ok) {
          const recovered = await remote.waitForInstall(requestId)
          if (recovered.ok && recovered.value !== null) answer = { ok: true, value: recovered.value }
        }
        if (answer.ok) {
          const { application } = answer.value
          if (application === 'failed' || application === 'cancelled' || application === 'overridden') failed(failureDetail(answer.value))
          else set({ phase: 'restart', version: release.version })
          return
        }
        // 结果也要不到：以磁盘上实际的版本为准。
        const bundle = await installedVersion()
        if (bundle?.version === release.version) set({ phase: 'restart', version: release.version })
        else failed(answer.error.message)
      } catch (reason) {
        failed(messageOf(reason))
      }
    },
  }
}
