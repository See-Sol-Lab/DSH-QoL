/** Read-only Workbench response values. */
import type { CommitInfo, RemoteInfo, RepoStatus, WorktreeInfo } from '@deepseek-ai/dsh-git/types'

/**
 * The project memory file name: `<folder name>.memory.md`. The folder prefix
 * keeps it visibly distinct from the global `memory.md` under the DSH home,
 * so neither the person nor the model confuses the two; the rule is
 * deterministic so the desktop, the prompt assembly, and the Memory view
 * agree on the path without any discovery.
 * @param cwd - Session working directory.
 * @returns the file name inside that directory.
 */
export function projectMemoryFileName(cwd: string): string {
  const trimmed = cwd.replace(/[\\/]+$/u, '')
  const folder = trimmed.slice(Math.max(trimmed.lastIndexOf('/'), trimmed.lastIndexOf('\\')) + 1)
  return `${folder === '' || /^[A-Za-z]:$/u.test(trimmed) ? 'project' : folder}.memory.md`
}

/** The project memory file and the project AGENTS.md presence, read from the Session cwd. */
export interface WorkbenchMemory {
  /** Session working directory. */
  cwd: string
  /** `<folder>.memory.md`, from {@link projectMemoryFileName}. */
  fileName: string
  /** Memory text; null when the file does not exist yet. */
  text: string | null
  /** Whether `AGENTS.md` exists in the working directory. */
  agents: boolean
}

/**
 * DSH-QoL：全局记忆 `<DSH home>/memory.md`（原由 DeepSeekGUI 主进程提供）。
 * 不存在 = 空串；读不到或超过上限 = null（此时保存一律拒绝）。
 */
export interface WorkbenchGlobalMemory {
  /** 生效的 DSH home。 */
  home: string
  /** 全文；读不到或太大时为 null。 */
  text: string | null
}

/** DSH-QoL：创建项目 AGENTS.md 用的模板语言。 */
export type WorkbenchSeedLocale = 'zh' | 'en'

/** Complete bounded text from a workspace or repository file. */
export interface WorkbenchFileText {
  path: string
  text: string
}

/** Current Git facts, with the repository root distinguished from Session cwd. */
export interface WorkbenchRepository {
  root: string
  status: RepoStatus
}

/** One registered work tree, with what is changed there and whether the Session lives in it. */
export interface WorkbenchWorktree extends WorktreeInfo {
  /** A failed status read is unknown, not a clean work tree. */
  statusError?: string
  /** True when the Session's repository root is this work tree. */
  current: boolean
  /**
   * Repository-relative paths changed in that work tree (staged, unstaged,
   * untracked, conflict); empty when clean, unreadable, or bare.
   */
  changedPaths: string[]
}

/**
 * The newest assistant reply of a Session, read for the desktop's feedback
 * triage (2026-09-11 manual test #15): the desktop prompts a hidden session
 * and polls this until the turn has ended.
 */
export interface WorkbenchLastReply {
  /** Plain text of the newest assistant message (text blocks joined); null before the first reply. */
  readonly text: string | null
  /** Whether a `turn/end` follows that message, i.e. the reply is complete. */
  readonly complete: boolean
}

/** The interface language a Markdown export is written in (B8-P1). */
export type WorkbenchExportLanguage = 'zh' | 'en'

/**
 * The rendered human-readable Markdown export of one Session (B8-P1). The
 * document quotes the log verbatim and is never sanitized; the desktop owns
 * the save dialog and derives the default file name from `title`.
 */
export interface WorkbenchExportMarkdown {
  /** The Session's current display title, already resolved. */
  readonly title: string
  /** The complete document; the desktop writes it UTF-8 without BOM. */
  readonly markdown: string
}

/**
 * Repository-level facts for the Git and Worktree views in one read: the
 * current status, configured remotes, the newest commits, and every
 * registered work tree with its own changed paths.
 */
export interface WorkbenchOverview {
  root: string
  status: RepoStatus
  remotes: RemoteInfo[]
  commits: CommitInfo[]
  worktrees: WorkbenchWorktree[]
}

/**
 * What cleaning a folder's sandbox marks did (DeepSeekGUI 2026-09-29): the
 * Windows ACL sandbox's grant, deny, and Low label, which make programs
 * started from the folder run at Low integrity. `cleaned` — gone from `root`;
 * `clean` — no folder from the chosen one up carries any; `busy` — a confined
 * command is running there now; `unsupported` — this Harness does not confine
 * with Windows ACLs.
 */
export interface WorkbenchSandboxClean {
  readonly status: 'cleaned' | 'clean' | 'busy' | 'unsupported'
  /** The folder the marks were on: the chosen one, or the ancestor they are inherited from. */
  readonly root: string
}


/**
 * 项目记忆里自动整理区的起止标记（HTML 注释，Markdown 里看不见，整体仍是可读可改的 Markdown）。
 * 归档整理写在两者之间；记忆注入保证这一区在预算内整段带入（见 workbench 插件的 session-memory）。
 */
export const AREA_BEGIN = '<!-- deepseekgui:archive-notes:begin -->'
export const AREA_END = '<!-- deepseekgui:archive-notes:end -->'

/** 一个记忆文件在一次组装中被带入时的事实。 */
export interface MemoryInjectionFile {
  readonly path: string
  readonly status: 'present' | 'absent' | 'empty' | 'truncated' | 'unreadable'
  /** 实际带入的 UTF-8 字节数与字符数（code points）。 */
  readonly bytes: number
  readonly chars: number
  /** 实际带入文本的 SHA-256：同样长度、不同内容也分得开。 */
  readonly sha256: string
  /** 自动整理区是否整段带入（项目记忆超出上限时，它优先于人写内容的尾部）。 */
  readonly autoArea?: 'included' | 'absent'
}

/** 一次加载时带入的记忆（会话第一次组装请求，或重启后重新加载时各记一条）。 */
export interface MemoryInjectionEntry {
  readonly at: string
  /** 每个文件的读取上限（字节）。 */
  readonly capBytes: number
  readonly global: MemoryInjectionFile
  readonly project: MemoryInjectionFile
}

/**
 * 一段会话每次加载时带入了什么（`<DSH_HOME>/deepseekgui/memory-injections/<sessionId>.json`）。
 * 每次加载追加一条（保留最近 20 条），不覆盖历史；最后一条就是当前这次加载在用的那一份。
 */
export interface MemoryInjection {
  readonly sessionId: string
  readonly entries: readonly MemoryInjectionEntry[]
}

// DSH-QoL：技能库的类型一并从 @see-sol-lab/dsh-qol/types 导出（远程接口描述按这个路径引用）。
// ---- 用量与余额（移植自 DeepSeekGUI usage-service） ----

/** 一笔金额：币种 + 十进制字符串，原样来自官方，绝不经浮点。 */
export interface UsageMoney {
  readonly currency: string
  readonly amount: string
}

/** 一个时段的消费情况。 */
export interface UsageWindowView {
  /** 该时段消费金额，按币种分列（十进制字符串相加，保留原有小数位）。 */
  readonly costs: readonly UsageMoney[]
  readonly requests: number
  /** Token 总数 = 缓存命中 + 缓存未命中 + 输出。 */
  readonly tokens: number
  /** 缓存命中率 = 命中 / (命中 + 未命中)；没有输入 token 时为 null。 */
  readonly cacheHitRate: number | null
}

/** 热力图一格：本地日期与当天 token 总数。 */
export interface UsageHeatmapDay {
  /** `YYYY-MM-DD`（按计划的 tz）。 */
  readonly date: string
  readonly tokens: number
}

/** 聚合后的展示值（设置页只拿这个）。 */
export interface UsageData {
  /** 充值余额，可多币种。 */
  readonly balances: readonly UsageMoney[]
  /** 赠金余额，只保留 > 0 的钱包。 */
  readonly bonus: readonly UsageMoney[]
  /** 累计消费，按币种。 */
  readonly totalCosts: readonly UsageMoney[]
  readonly today: UsageWindowView
  readonly days7: UsageWindowView
  readonly days30: UsageWindowView
  /** 60 格，最早的一天在前。 */
  readonly heatmap: readonly UsageHeatmapDay[]
}

/**
 * 取不到数据时的原因（面板按原因给不同提示，都不显示旧值）。blocked：平台前面的防护
 * 暂时拒绝了请求（202 / 403 / 429 或回来一页 HTML），过几分钟会自己好，不是改版。
 */
export type UsageUnavailableReason = 'network' | 'timeout' | 'format' | 'no-session' | 'blocked'

/** 一次读取用量的结果。ready 之外不带数据：不把旧值当实时值显示。 */
export interface WorkbenchUsage {
  readonly status: 'ready' | 'signed-out' | 'unavailable'
  /** unavailable 时的原因；其余为 null。 */
  readonly reason: UsageUnavailableReason | null
  /** 这份数据取到的时刻（ISO）。 */
  readonly fetchedAt: string
  /** ready 时存在。 */
  readonly data: UsageData | null
  /** 官方用量页。 */
  readonly usagePageUrl: string
}

export type * from './skill-manager/types.ts'
