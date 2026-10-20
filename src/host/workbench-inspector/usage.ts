/**
 * 用量与余额（移植自 DeepSeekGUI usage-service）：取数计划、官方响应判定、聚合，
 * 以及插件后台带官方账号令牌直接请求开放平台（令牌只在 Host 里，不进界面）。
 * @module @see-sol-lab/dsh-qol/workbench-inspector/usage
 */

import type { UsageData, UsageHeatmapDay, UsageMoney, UsageUnavailableReason, UsageWindowView, WorkbenchUsage } from './types.ts'

/** 开放平台 origin。 */
export const USAGE_ORIGIN = 'https://platform.deepseek.com'
/** 官方用量页（页面底部「更多详情」的目标，交给系统浏览器）。 */
export const USAGE_PAGE_URL = `${USAGE_ORIGIN}/usage`
/** 接口路径前缀（相对 origin）。 */
export const USAGE_API_PREFIX = '/api/v0/'
/** 热力图覆盖的天数（含今天）。 */
export const USAGE_HEATMAP_DAYS = 60
/** 单个响应正文的上限（字符）；接口异常时绝不把整页 HTML 读进来。 */
export const USAGE_BODY_MAX = 2_000_000
/** 每个请求的超时（毫秒）。 */
export const USAGE_FETCH_TIMEOUT_MS = 15_000

const SECONDS_PER_DAY = 86_400

/** 一次刷新里的请求键：五个请求各一键，聚合按键取值。 */
export type UsageRequestKey = 'summary' | 'amount30' | 'cost30' | 'amountPrev' | 'amountToday'

/** 一个时间窗（unix 秒，闭区间由官方接口解释）。 */
export interface UsageWindow {
  readonly start: number
  readonly end: number
}

/** 一次刷新的取数计划：窗口全部在主进程算好，页内脚本只照单发请求。 */
export interface UsageFetchPlan {
  /** 时区偏移（秒），官方接口用它对齐日界；本地日界也按它算。 */
  readonly tz: number
  /** 计划生成时刻（unix 秒）。 */
  readonly now: number
  /** 今天 0 点（unix 秒）。 */
  readonly todayStart: number
  /** 最近 30 天（含今天）——消费情况的唯一数据源，7 天/今天由它切片。 */
  readonly window30: UsageWindow
  /** 热力图第二页：第 31–60 天，紧接 window30 之前、不重叠。 */
  readonly windowPrev: UsageWindow
  /** 今天：start/end 同一天时官方自动按小时分桶，给今天更精确的值。 */
  readonly windowToday: UsageWindow
}

/** 页内脚本带回的单个响应：HTTP 状态 + 原文（超限截断）。 */
export interface UsageRawResponse {
  readonly status: number
  readonly body: string | null
}

/** 一轮取数的原始响应（网络层失败的键缺省）。 */
export type UsageResponses = Partial<Record<UsageRequestKey, UsageRawResponse>>

/** 一次刷新的结论。 */
export type UsageOutcome =
  | { readonly kind: 'ready'; readonly data: UsageData }
  /** 没登录 / token 失效（40002 或 HTTP 401）。 */
  | { readonly kind: 'signed-out' }
  | { readonly kind: 'unavailable'; readonly reason: UsageUnavailableReason }

/**
 * 按 tz 取某时刻所在天的 0 点（unix 秒）。
 * @param seconds - unix 秒。
 * @param tz - 时区偏移（秒）。
 * @returns 当天 0 点。
 */
export function dayStartOf(seconds: number, tz: number): number {
  return Math.floor((seconds + tz) / SECONDS_PER_DAY) * SECONDS_PER_DAY - tz
}

/**
 * 按 tz 把 unix 秒格式化成 `YYYY-MM-DD`。
 * @param seconds - unix 秒。
 * @param tz - 时区偏移（秒）。
 * @returns 本地日期。
 */
export function localDateOf(seconds: number, tz: number): string {
  return new Date((seconds + tz) * 1000).toISOString().slice(0, 10)
}

/**
 * 生成一次刷新的取数计划：30 天（含今天）一窗、之前 30 天一窗（两窗相接、
 * 不重叠、各 ≤ 31 天），再加今天一窗（小时级）。
 *
 * 官方接口要求 `start`/`end` 都落在按 tz 对齐的日界上——`end` 用当前时刻
 * 会整条拒绝为 INVALID_PARAM（2026-09-13 真实登录态实测）；区间按半开
 * `[start, end)` 解释，所以「含今天」的窗口 end 是明天 0 点，相邻两窗共享
 * 端点也不会重复计入。
 * @param nowMs - 当前时刻（毫秒）。
 * @param tz - 时区偏移（秒）。
 * @returns 计划。
 */
export function planUsageFetch(nowMs: number, tz: number): UsageFetchPlan {
  const now = Math.floor(nowMs / 1000)
  const todayStart = dayStartOf(now, tz)
  const tomorrowStart = todayStart + SECONDS_PER_DAY
  const start30 = todayStart - 29 * SECONDS_PER_DAY
  const startPrev = todayStart - (USAGE_HEATMAP_DAYS - 1) * SECONDS_PER_DAY
  return {
    tz,
    now,
    todayStart,
    window30: { start: start30, end: tomorrowStart },
    windowPrev: { start: startPrev, end: start30 },
    windowToday: { start: todayStart, end: tomorrowStart },
  }
}

/**
 * 计划里每个请求的路径（相对 origin，含查询串）。
 * @param plan - 取数计划。
 * @returns 键 → 路径。
 */
export function usageRequestPaths(plan: UsageFetchPlan): Record<UsageRequestKey, string> {
  const query = (window: UsageWindow): string => `?start=${String(window.start)}&end=${String(window.end)}&tz=${String(plan.tz)}`
  return {
    summary: `${USAGE_API_PREFIX}users/get_user_summary`,
    amount30: `${USAGE_API_PREFIX}usage/by_api_key/amount${query(plan.window30)}`,
    cost30: `${USAGE_API_PREFIX}usage/by_api_key/cost${query(plan.window30)}`,
    amountPrev: `${USAGE_API_PREFIX}usage/by_api_key/amount${query(plan.windowPrev)}`,
    amountToday: `${USAGE_API_PREFIX}usage/by_api_key/amount${query(plan.windowToday)}`,
  }
}

// ---- 官方响应判定 ----

/** 官方包裹：`{code, msg, data:{biz_code, biz_msg, biz_data}}`；错误也可能 HTTP 200 + code:0 + msg:INVALID_PARAM——只认 biz_data。 */
type Envelope = { code?: unknown; msg?: unknown; data?: { biz_code?: unknown; biz_msg?: unknown; biz_data?: unknown } | null }

/** 单个响应的判定结果。 */
export type UsageResponseVerdict =
  | { readonly kind: 'ok'; readonly bizData: unknown }
  | { readonly kind: 'signed-out' }
  | { readonly kind: 'format' }
  | { readonly kind: 'blocked' }
  | { readonly kind: 'missing' }

/**
 * 平台防护拦请求时回的状态码。2026-09-26 实测：一次登录连发十几个请求后，接口一律回
 * 202、正文不是 JSON，几分钟后自己恢复（上游讨论 deepseek-harness#7931）。
 */
const BLOCKED_STATUS = new Set([202, 403, 429])

/** 官方「缺 token / token 失效」业务码。 */
const CODE_MISSING_TOKEN = 40002

/**
 * 判定一个原始响应：401 或业务码 40002 → 未登录；HTTP 200 + code 0 且
 * `data.biz_data` 存在 → 成功；202 / 403 / 429 或回来一页 HTML → blocked（防护暂时拦下）；
 * 其余（含 INVALID_PARAM、非 JSON、改版）→ format。
 * @param raw - 页内带回的响应；缺省表示网络层失败。
 * @returns 判定。
 */
export function judgeUsageResponse(raw: UsageRawResponse | undefined): UsageResponseVerdict {
  if (raw === undefined) return { kind: 'missing' }
  if (raw.status === 401) return { kind: 'signed-out' }
  if (BLOCKED_STATUS.has(raw.status) || raw.body?.trimStart().startsWith('<') === true) return { kind: 'blocked' }
  if (raw.body === null) return { kind: 'format' }
  let parsed: unknown
  try {
    parsed = JSON.parse(raw.body)
  } catch {
    return { kind: 'format' }
  }
  if (!isRecord(parsed)) return { kind: 'format' }
  const envelope = parsed as Envelope
  if (envelope.code === CODE_MISSING_TOKEN) return { kind: 'signed-out' }
  if (raw.status !== 200 || envelope.code !== 0) return { kind: 'format' }
  const data = envelope.data
  if (!isRecord(data) || data.biz_data === undefined || data.biz_data === null) return { kind: 'format' }
  return { kind: 'ok', bizData: data.biz_data }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

// ---- 十进制字符串 ----

const DECIMAL = /^(-?)(\d+)(?:\.(\d+))?$/u

/**
 * 两个十进制字符串相加，保留两者中较长的小数位；任一非法就抛错（由调用方
 * 归为 format）。用 BigInt 做，绝不经浮点。
 * @param a - 加数。
 * @param b - 加数。
 * @returns 和。
 */
export function addDecimalStrings(a: string, b: string): string {
  const left = parseDecimal(a)
  const right = parseDecimal(b)
  const scale = Math.max(left.scale, right.scale)
  const sum = left.units * 10n ** BigInt(scale - left.scale) + right.units * 10n ** BigInt(scale - right.scale)
  return formatDecimal(sum, scale)
}

/**
 * 十进制字符串是否严格大于 0（赠金「>0 才附注」用）。
 * @param text - 十进制字符串。
 * @returns 是否为正。
 */
export function decimalIsPositive(text: string): boolean {
  return parseDecimal(text).units > 0n
}

/**
 * 十进制字符串是否合法（官方金额字段的形状检查）。
 * @param text - 候选。
 * @returns 是否匹配 `-?digits(.digits)?`。
 */
export function isDecimalString(text: unknown): text is string {
  return typeof text === 'string' && DECIMAL.test(text)
}

function parseDecimal(text: string): { units: bigint; scale: number } {
  const match = DECIMAL.exec(text)
  if (match === null) throw new UsageFormatError(`not a decimal string: ${JSON.stringify(text)}`)
  const fraction = match[3] ?? ''
  const units = BigInt(`${match[2] ?? '0'}${fraction}`) * (match[1] === '-' ? -1n : 1n)
  return { units, scale: fraction.length }
}

function formatDecimal(units: bigint, scale: number): string {
  const negative = units < 0n
  const digits = (negative ? -units : units).toString().padStart(scale + 1, '0')
  const whole = digits.slice(0, digits.length - scale)
  const fraction = digits.slice(digits.length - scale)
  return `${negative ? '-' : ''}${whole}${scale > 0 ? `.${fraction}` : ''}`
}

// ---- 聚合 ----

interface AmountBucket {
  time: number
  request: number
  hit: number
  miss: number
  response: number
}

interface CostBucket {
  time: number
  currency: string
  cost: string
}

/** 官方响应形状不符（改版、字段缺失、金额非十进制）：一律归为 unavailable/format。 */
export class UsageFormatError extends Error {}

function numberField(record: Record<string, unknown>, key: string): number {
  const value = record[key]
  if (typeof value !== 'number' || !Number.isFinite(value)) throw new UsageFormatError(`${key} is not a number`)
  return value
}

function stringField(record: Record<string, unknown>, key: string): string {
  const value = record[key]
  if (typeof value !== 'string') throw new UsageFormatError(`${key} is not a string`)
  return value
}

/** `usage/by_api_key/amount` 的 biz_data → 扁平的桶列表（跨 key、跨模型合并，首版不细分）。 */
function amountBuckets(bizData: unknown): AmountBucket[] {
  if (!isRecord(bizData) || !Array.isArray(bizData.series)) throw new UsageFormatError('amount.series missing')
  const buckets: AmountBucket[] = []
  for (const series of bizData.series) {
    if (!isRecord(series) || !Array.isArray(series.buckets)) throw new UsageFormatError('amount.series[] malformed')
    for (const bucket of series.buckets) {
      if (!isRecord(bucket) || !isRecord(bucket.usage)) throw new UsageFormatError('amount bucket malformed')
      const usage = bucket.usage
      buckets.push({
        time: numberField(bucket, 'time'),
        request: numberField(usage, 'REQUEST'),
        hit: numberField(usage, 'PROMPT_CACHE_HIT_TOKEN'),
        miss: numberField(usage, 'PROMPT_CACHE_MISS_TOKEN'),
        response: numberField(usage, 'RESPONSE_TOKEN'),
      })
    }
  }
  return buckets
}

/** `usage/by_api_key/cost` 的 biz_data → 扁平的按币种桶列表。 */
function costBuckets(bizData: unknown): CostBucket[] {
  if (!isRecord(bizData) || !Array.isArray(bizData.data)) throw new UsageFormatError('cost.data missing')
  const buckets: CostBucket[] = []
  for (const group of bizData.data) {
    if (!isRecord(group) || !Array.isArray(group.series)) throw new UsageFormatError('cost.data[] malformed')
    const currency = stringField(group, 'currency')
    for (const series of group.series) {
      if (!isRecord(series) || !Array.isArray(series.buckets)) throw new UsageFormatError('cost.series[] malformed')
      for (const bucket of series.buckets) {
        if (!isRecord(bucket)) throw new UsageFormatError('cost bucket malformed')
        const cost = stringField(bucket, 'cost')
        if (!isDecimalString(cost)) throw new UsageFormatError('cost is not a decimal string')
        buckets.push({ time: numberField(bucket, 'time'), currency, cost })
      }
    }
  }
  return buckets
}

/** `users/get_user_summary` 的 biz_data → 钱包与累计消费。 */
function summaryOf(bizData: unknown): Pick<UsageData, 'balances' | 'bonus' | 'totalCosts'> {
  if (!isRecord(bizData)) throw new UsageFormatError('summary malformed')
  const wallets = (key: string, field: 'balance' | 'amount'): UsageMoney[] => {
    const list = bizData[key]
    if (!Array.isArray(list)) throw new UsageFormatError(`summary.${key} missing`)
    return list.map((entry) => {
      if (!isRecord(entry)) throw new UsageFormatError(`summary.${key}[] malformed`)
      const currency = stringField(entry, 'currency')
      const amount = entry[field]
      if (!isDecimalString(amount)) throw new UsageFormatError(`summary.${key}[].${field} is not a decimal string`)
      return { currency, amount }
    })
  }
  return {
    balances: wallets('normal_wallets', 'balance'),
    bonus: wallets('bonus_wallets', 'balance').filter(money => decimalIsPositive(money.amount)),
    totalCosts: wallets('total_costs', 'amount'),
  }
}

/** 把落在窗口内的 amount 桶与 cost 桶聚合成一个时段的消费情况。 */
function windowView(amounts: readonly AmountBucket[], costs: readonly CostBucket[], window: UsageWindow): UsageWindowView {
  let requests = 0
  let hit = 0
  let miss = 0
  let response = 0
  for (const bucket of amounts) {
    if (bucket.time < window.start || bucket.time > window.end) continue
    requests += bucket.request
    hit += bucket.hit
    miss += bucket.miss
    response += bucket.response
  }
  const byCurrency = new Map<string, string>()
  for (const bucket of costs) {
    if (bucket.time < window.start || bucket.time > window.end) continue
    byCurrency.set(bucket.currency, addDecimalStrings(byCurrency.get(bucket.currency) ?? '0', bucket.cost))
  }
  const input = hit + miss
  return {
    costs: [...byCurrency.entries()].map(([currency, amount]) => ({ currency, amount })),
    requests,
    tokens: hit + miss + response,
    cacheHitRate: input === 0 ? null : hit / input,
  }
}

/**
 * 把一次刷新的原始响应聚合成结论。判定顺序：任一响应说未登录 → signed-out；
 * summary / amount30 / cost30 / amountPrev 任一缺失或格式不对 → unavailable；
 * amountToday 可缺（缺了就用 30 天桶里今天那一桶）。
 * @param plan - 生成这些响应的计划（切片窗口从它来）。
 * @param responses - 各请求的原始响应。
 * @returns 结论。
 */
export function interpretUsageResult(plan: UsageFetchPlan, responses: UsageResponses): UsageOutcome {
  const verdicts = {
    summary: judgeUsageResponse(responses.summary),
    amount30: judgeUsageResponse(responses.amount30),
    cost30: judgeUsageResponse(responses.cost30),
    amountPrev: judgeUsageResponse(responses.amountPrev),
    amountToday: judgeUsageResponse(responses.amountToday),
  }
  if (Object.values(verdicts).some(verdict => verdict.kind === 'signed-out')) return { kind: 'signed-out' }
  const required = [verdicts.summary, verdicts.amount30, verdicts.cost30, verdicts.amountPrev]
  if (required.some(verdict => verdict.kind === 'missing')) return { kind: 'unavailable', reason: 'network' }
  if (required.some(verdict => verdict.kind === 'blocked')) return { kind: 'unavailable', reason: 'blocked' }
  if (required.some(verdict => verdict.kind === 'format')) return { kind: 'unavailable', reason: 'format' }
  try {
    const summary = summaryOf(bizDataOf(verdicts.summary))
    const amount30 = amountBuckets(bizDataOf(verdicts.amount30))
    const cost30 = costBuckets(bizDataOf(verdicts.cost30))
    const amountPrev = amountBuckets(bizDataOf(verdicts.amountPrev))
    const amountToday = verdicts.amountToday.kind === 'ok' ? amountBuckets(verdicts.amountToday.bizData) : null
    const days7: UsageWindow = { start: plan.todayStart - 6 * SECONDS_PER_DAY, end: plan.now }
    const todayFromDays = windowView(amount30, cost30, plan.windowToday)
    // 今天：小时级请求成功就用它的请求数 / token（更精确），费用仍来自 30 天的 cost 桶。
    const today: UsageWindowView = amountToday === null
      ? todayFromDays
      : { ...windowView(amountToday, [], plan.windowToday), costs: todayFromDays.costs }
    return {
      kind: 'ready',
      data: {
        ...summary,
        today,
        days7: windowView(amount30, cost30, days7),
        days30: windowView(amount30, cost30, plan.window30),
        heatmap: heatmapOf(plan, amount30, amountPrev),
      },
    }
  } catch (error) {
    if (error instanceof UsageFormatError) return { kind: 'unavailable', reason: 'format' }
    throw error
  }
}

function bizDataOf(verdict: UsageResponseVerdict): unknown {
  // interpretUsageResult 已保证必需项都是 ok；这里只做类型收窄。
  return verdict.kind === 'ok' ? verdict.bizData : undefined
}

/**
 * 60 格热力图：按本地日期归并两页 amount 桶（同一天出现在两页时以 30 天页为准），
 * 没有桶的日子记 0；固定 60 项、最早在前。
 * @param plan - 计划（决定日期范围与 tz）。
 * @param amount30 - 最近 30 天的桶。
 * @param amountPrev - 之前 30 天的桶。
 * @returns 60 格。
 */
export function heatmapOf(plan: UsageFetchPlan, amount30: readonly AmountBucket[], amountPrev: readonly AmountBucket[]): UsageHeatmapDay[] {
  const tokensByDate = new Map<string, number>()
  const fold = (buckets: readonly AmountBucket[], overwrite: boolean): void => {
    const seen = new Map<string, number>()
    for (const bucket of buckets) {
      const date = localDateOf(bucket.time, plan.tz)
      seen.set(date, (seen.get(date) ?? 0) + bucket.hit + bucket.miss + bucket.response)
    }
    for (const [date, tokens] of seen) {
      if (overwrite || !tokensByDate.has(date)) tokensByDate.set(date, tokens)
    }
  }
  // 30 天页先入、可覆盖；第二页只补它没有的日子。
  fold(amount30, true)
  fold(amountPrev, false)
  const days: UsageHeatmapDay[] = []
  for (let offset = USAGE_HEATMAP_DAYS - 1; offset >= 0; offset -= 1) {
    const date = localDateOf(plan.todayStart - offset * SECONDS_PER_DAY, plan.tz)
    days.push({ date, tokens: tokensByDate.get(date) ?? 0 })
  }
  return days
}

// ---- 取数（DSH-QoL：插件后台带官方账号令牌直接请求） ----

/** 官方账号插件存放平台令牌的凭据记录：`{ version: 1, token, issuer }`，issuer 是平台 origin。 */
export const PLATFORM_GRANT_KEY = 'deepseek-account-platform/default'

/** 本模块读凭据要用的那一点官方 credentials 服务。 */
export interface UsageCredentials {
  readRecord(key: never): Promise<{ readonly kind: string; readonly payload: unknown } | undefined>
}

/** 读出官方账号的平台令牌；没登录或形状不对为 null。 */
async function readGrant(credentials: UsageCredentials): Promise<{ token: string; origin: string } | null> {
  const record = await credentials.readRecord(PLATFORM_GRANT_KEY as never)
  if (record?.kind !== 'grant' || !isRecord(record.payload)) return null
  const { token, issuer } = record.payload
  if (typeof token !== 'string' || token === '' || typeof issuer !== 'string') return null
  try {
    const origin = new URL(issuer)
    if (origin.protocol !== 'https:') return null
    return { token, origin: origin.origin }
  } catch {
    return null
  }
}

/**
 * 读一轮用量：五个请求、聚合成展示值。令牌只在这里用，返回值里没有它。
 * 平台回 401 只报「未登录」，不像官方账号插件那样删除凭据——那是官方的事。
 * @param credentials - 官方 credentials 服务。
 * @param locale - 界面语言（zh / en）。
 * @param signal - 调用方的中止信号。
 * @param nowMs - 当前时刻（测试注入）。
 * @returns 结果。
 */
export async function fetchAccountUsage(
  credentials: UsageCredentials, locale: 'zh' | 'en', signal: AbortSignal, nowMs = Date.now(),
): Promise<WorkbenchUsage> {
  const tz = -new Date(nowMs).getTimezoneOffset() * 60
  const plan = planUsageFetch(nowMs, tz)
  const fetchedAt = new Date(nowMs).toISOString()
  const grant = await readGrant(credentials)
  const outcome = grant === null ? { kind: 'signed-out' as const } : interpretUsageResult(plan, await requestAll(grant, plan, locale, signal))
  return {
    status: outcome.kind,
    reason: outcome.kind === 'unavailable' ? outcome.reason : null,
    fetchedAt,
    data: outcome.kind === 'ready' ? outcome.data : null,
    usagePageUrl: grant === null ? USAGE_PAGE_URL : new URL('/usage', grant.origin).href,
  }
}

async function requestAll(grant: { token: string; origin: string }, plan: UsageFetchPlan, locale: 'zh' | 'en', signal: AbortSignal): Promise<UsageResponses> {
  // 官方 platformClientHeaders 的形状（dsh-deepseek-account），与官方查余额同一身份。
  const headers: Record<string, string> = {
    accept: 'application/json',
    'x-client-bundle-id': '',
    'x-client-platform': process.platform === 'win32' ? 'desktop-win' : process.platform === 'darwin' ? 'desktop-mac' : 'web',
    'x-client-version': process.env.DSH_CLIENT_VERSION ?? '',
    'x-client-locale': locale === 'zh' ? 'zh_CN' : 'en_US',
    'x-client-timezone-offset': String(plan.tz),
    'x-dsh-auth-token': grant.token,
  }
  const paths = usageRequestPaths(plan)
  const responses: Partial<Record<UsageRequestKey, UsageRawResponse>> = {}
  for (const key of Object.keys(paths) as UsageRequestKey[]) {
    signal.throwIfAborted()
    try {
      const response = await fetch(new URL(paths[key], grant.origin), {
        method: 'GET',
        headers,
        // 带着令牌绝不跟随跳转：跳到别处等于把令牌交出去。
        redirect: 'error',
        signal: AbortSignal.any([signal, AbortSignal.timeout(USAGE_FETCH_TIMEOUT_MS)]),
      })
      let body: string | null
      try { body = (await response.text()).slice(0, USAGE_BODY_MAX) } catch { body = null }
      responses[key] = { status: response.status, body }
    } catch (error) {
      if (signal.aborted) throw error
      // 网络层失败或超时：该键缺省，由解析层按缺失判定。
    }
  }
  return responses
}
