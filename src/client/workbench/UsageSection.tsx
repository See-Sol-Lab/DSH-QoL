/**
 * 设置「用量与余额」（移植自 DeepSeekGUI 设置插件的用量分区）。
 *
 * 数据由 Host 的 workbenchInspector.accountUsage 带官方账号令牌去开放平台取、聚合
 * 好再给过来，这里只画聚合值，不做本地统计。打开本页读一次，🔄 再读；Host 5 秒内
 * 的重复请求直接给上一份。金额是十进制字符串，只截不算。官方账号页没有扩展位，
 * 所以单独一个分区，不在余额卡片下面。
 */
import { useCallback, useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type { UsageMoney, WorkbenchUsage } from '@see-sol-lab/dsh-qol/types'
import { button, caption, card, column, intro, row } from './memory/styles.ts'

export const NS_USAGE = 'dsh.qol.usage'

export const zh = {
  'nav': '用量与余额',
  'intro': '数据来自 DeepSeek 开放平台（用你在本机登录的官方账号读取），和官网用量页是同一份账单。',
  'balance': '余额',
  'total-cost': '累计消费',
  'bonus': '赠金：',
  'period.today': '今天',
  'period.7d': '7 天',
  'period.30d': '30 天',
  'stat.cost': '消费金额',
  'stat.requests': '请求数',
  'stat.tokens': 'Token 总数',
  'stat.cache': '缓存命中率',
  'heatmap.title': '最近 60 天',
  'heatmap.tokens': 'Token',
  'heatmap.less': '少',
  'heatmap.more': '多',
  'refresh': '刷新',
  'refreshing': '刷新中…',
  'fetched-at': '上次刷新：',
  'loading': '正在读取账户数据…',
  'signed-out': '没有登录官方账号，或登录已失效。在「账号」里登录后再刷新。',
  'unavailable.network': '暂时连不上开放平台，稍后再试。',
  'unavailable.timeout': '读取账户数据超时，稍后再试。',
  'unavailable.format': '开放平台的数据格式变了，本页暂时读不出来；官网页面照常可看。',
  'unavailable.blocked': '开放平台暂时拦下了请求（短时间内请求太多时会这样），过几分钟再点刷新。',
  'unavailable.no-session': '暂时拿不到账号登录信息，稍后再试。',
  'error': '读取失败：',
  'more': '更多详情跳转官网查看 ↗',
  'no-data': '—',
} as const

export type UsageKey = keyof typeof zh

export const en: Record<UsageKey, string> = {
  'nav': 'Usage and balance',
  'intro': 'Read from the DeepSeek open platform with the official account signed in on this machine; the same bill as the official usage page.',
  'balance': 'Balance',
  'total-cost': 'Total spent',
  'bonus': 'Bonus: ',
  'period.today': 'Today',
  'period.7d': '7 days',
  'period.30d': '30 days',
  'stat.cost': 'Spent',
  'stat.requests': 'Requests',
  'stat.tokens': 'Total tokens',
  'stat.cache': 'Cache hit rate',
  'heatmap.title': 'Last 60 days',
  'heatmap.tokens': 'tokens',
  'heatmap.less': 'Less',
  'heatmap.more': 'More',
  'refresh': 'Refresh',
  'refreshing': 'Refreshing…',
  'fetched-at': 'Last refreshed: ',
  'loading': 'Reading account data…',
  'signed-out': 'No official account is signed in, or the sign-in expired. Sign in under Account, then refresh.',
  'unavailable.network': 'The open platform is unreachable right now. Try again later.',
  'unavailable.timeout': 'Reading account data timed out. Try again later.',
  'unavailable.format': 'The open platform changed its data format, so this page cannot read it for now. The official page still works.',
  'unavailable.blocked': 'The open platform is refusing requests for now (this happens when too many arrive at once). Refresh again in a few minutes.',
  'unavailable.no-session': 'The account sign-in is not available right now. Try again later.',
  'error': 'Could not read: ',
  'more': 'See more details on the official site ↗',
  'no-data': '—',
}

/** 本包注入的取数面。 */
export interface UsageInjected {
  load: () => Promise<WorkbenchUsage>
}

export type UsageSectionProps = PropsRuntime<'settings.section'> & PropsLocale<'dsh.qol.usage'> & UsageInjected

/** 十进制字符串按小数位截断（不四舍五入——余额宁可少显示一分，不多显示）。 */
export function truncateDecimal(text: string, places: number): string {
  const dot = text.indexOf('.')
  if (dot === -1) return places > 0 ? `${text}.${'0'.repeat(places)}` : text
  const fraction = text.slice(dot + 1, dot + 1 + places).padEnd(places, '0')
  return text.slice(0, dot) + (places > 0 ? `.${fraction}` : '')
}

const CURRENCY_SYMBOL: Record<string, string> = { CNY: '¥', USD: '$' }

function moneyList(list: readonly UsageMoney[], empty: string): string {
  if (list.length === 0) return empty
  return list.map((money) => {
    const symbol = CURRENCY_SYMBOL[money.currency]
    const amount = truncateDecimal(money.amount, 2)
    return symbol === undefined ? `${money.currency} ${amount}` : symbol + amount
  }).join(' · ')
}

function rateText(rate: number | null, empty: string): string {
  return rate === null ? empty : `${(Math.round(rate * 1000) / 10).toFixed(1)}%`
}

/** 热力图色阶：0 为底色，其余按与最大值的比例落进四档。 */
const HEAT_LEVELS = ['transparent', 'rgba(77,107,254,0.22)', 'rgba(77,107,254,0.45)', 'rgba(77,107,254,0.7)', 'rgba(77,107,254,1)']
function heatLevel(tokens: number, max: number): number {
  if (tokens <= 0 || max <= 0) return 0
  return Math.max(1, Math.min(4, Math.ceil((tokens / max) * 4)))
}

const bigNumber: CSSProperties = { fontSize: 26, lineHeight: '34px', fontWeight: 600, fontVariantNumeric: 'tabular-nums', overflowWrap: 'anywhere' }
const statNumber: CSSProperties = { fontSize: 18, lineHeight: '26px', fontWeight: 600, fontVariantNumeric: 'tabular-nums', overflowWrap: 'anywhere' }
const flexCard: CSSProperties = { ...card, flex: '1 1 0', minWidth: 120 }
const active: CSSProperties = { ...button, border: '1px solid var(--dsw-alias-brand-primary)' }

type Period = 'today' | '7d' | '30d'

/**
 * 用量与余额分区。
 * @param props - 运行时座位、文案与取数面。
 * @returns 分区内容。
 */
export function UsageSection(props: UsageSectionProps): ReactNode {
  const { t, load } = props
  const [usage, setUsage] = useState<WorkbenchUsage | null>(null)
  const [loading, setLoading] = useState(false)
  const [failure, setFailure] = useState<string | null>(null)
  const [period, setPeriod] = useState<Period>('30d')

  const refresh = useCallback(() => {
    setLoading(true)
    setFailure(null)
    load().then(setUsage, (reason: unknown) => {
      setUsage(null)
      setFailure(reason instanceof Error ? reason.message : String(reason))
    }).finally(() => { setLoading(false) })
  }, [load])
  useEffect(refresh, [refresh])

  const empty = t('no-data')
  const header = (
    <div style={{ ...row, justifyContent: 'space-between' }}>
      <span style={caption}>
        {loading ? t('refreshing') : usage !== null ? t('fetched-at') + new Date(usage.fetchedAt).toLocaleString() : ''}
      </span>
      <button type="button" style={button} disabled={loading} onClick={refresh}>
        {loading ? t('refreshing') : `🔄 ${t('refresh')}`}
      </button>
    </div>
  )
  const footer = (
    <div style={{ ...row, justifyContent: 'flex-end' }}>
      <a style={caption} href={usage?.usagePageUrl ?? 'https://platform.deepseek.com/usage'} target="_blank" rel="noreferrer">{t('more')}</a>
    </div>
  )
  const frame = (body: ReactNode): ReactNode => (
    <div style={{ ...column, gap: 12, opacity: loading && usage !== null ? 0.7 : 1 }}>
      <p style={intro}>{t('intro')}</p>
      {header}
      {body}
      {footer}
    </div>
  )

  if (failure !== null) return frame(<div style={card}>{t('error') + failure}</div>)
  if (usage === null) return frame(<div style={caption}>{t('loading')}</div>)
  if (usage.status === 'signed-out') return frame(<div style={card}>{t('signed-out')}</div>)
  if (usage.status === 'unavailable' || usage.data === null) {
    return frame(<div style={card}>{t(`unavailable.${usage.reason ?? 'network'}`)}</div>)
  }

  const data = usage.data
  const slice = period === 'today' ? data.today : period === '7d' ? data.days7 : data.days30
  const max = Math.max(0, ...data.heatmap.map(day => day.tokens))
  const stats: [UsageKey, string][] = [
    ['stat.cost', moneyList(slice.costs, empty)],
    ['stat.requests', slice.requests.toLocaleString()],
    ['stat.tokens', slice.tokens.toLocaleString()],
    ['stat.cache', rateText(slice.cacheHitRate, empty)],
  ]
  return frame(
    <>
      <div style={{ ...row, alignItems: 'stretch' }}>
        <div style={flexCard}>
          <div style={caption}>{t('balance')}</div>
          <div style={bigNumber}>{moneyList(data.balances, empty)}</div>
          {data.bonus.length > 0 ? <div style={caption}>{t('bonus') + moneyList(data.bonus, empty)}</div> : null}
        </div>
        <div style={flexCard}>
          <div style={caption}>{t('total-cost')}</div>
          <div style={bigNumber}>{moneyList(data.totalCosts, empty)}</div>
        </div>
      </div>
      <div style={row}>
        {(['today', '7d', '30d'] as const).map(key => (
          <button key={key} type="button" style={period === key ? active : button} onClick={() => { setPeriod(key) }}>
            {t(`period.${key}`)}
          </button>
        ))}
      </div>
      <div style={{ ...row, alignItems: 'stretch' }}>
        {stats.map(([key, value]) => (
          <div key={key} style={flexCard}>
            <div style={caption}>{t(key)}</div>
            <div style={statNumber}>{value}</div>
          </div>
        ))}
      </div>
      <div style={column}>
        <div style={caption}>{t('heatmap.title')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 5, maxWidth: 420 }}>
          {data.heatmap.map((day) => {
            const level = heatLevel(day.tokens, max)
            return (
              <div
                key={day.date}
                title={`${day.date} · ${day.tokens.toLocaleString()} ${t('heatmap.tokens')}`}
                style={{ aspectRatio: '1 / 1', borderRadius: 5, border: '1px solid var(--dsw-alias-border-l1)', background: HEAT_LEVELS[level] }}
              />
            )
          })}
        </div>
        <div style={{ ...row, gap: 4, maxWidth: 420, justifyContent: 'flex-end' }}>
          <span style={caption}>{t('heatmap.less')}</span>
          {HEAT_LEVELS.map(color => (
            <span key={color} style={{ width: 12, height: 12, borderRadius: 3, border: '1px solid var(--dsw-alias-border-l1)', background: color }} />
          ))}
          <span style={caption}>{t('heatmap.more')}</span>
        </div>
      </div>
    </>,
  )
}
