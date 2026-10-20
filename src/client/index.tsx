/**
 * 生活质量包的浏览器侧：「设置 → 生活质量包」里的隐私与上报开关。
 *
 * 每个开关对应一个 Host 条目，经 ctx.configForms.get(条目 id) 读写；打开 = set
 * 一个值写进用户 profile 补丁，关闭 = unset，回到本包组合层里的「关」。产物由
 * scripts/build.mjs 包成官方 client 运行时要求的 window.__ModuleLoader__ 自注册形状，
 * react 从 loader 的 require 里取。
 */

import { useState, useSyncExternalStore, type CSSProperties, type ReactElement } from 'react'
import type { Context } from '@deepseek-ai/cordis'
// Type-only: ctx.locale、ctx.configForms 与 settings.section 插槽的类型合并。
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type { ConfigForm, ConfigFormSnapshot } from '@deepseek-ai/dsh-client-ui-settings/client'
import { en, zh, type QolLocaleKey } from './locales.ts'
import { applyWorkbench, workbenchInject } from './workbench/register.tsx'
import { applyNotify } from './notify/register.tsx'
import { applySkills } from './skills/register.tsx'
import { installSkin } from './skin.ts'
import { installSmoothText } from './smooth-text.tsx'
import { installSettingsIcons } from './settings-icons.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** 生活质量包的文案。 */
    'dsh.qol': QolLocaleKey
  }
}

const NS = 'dsh.qol'

type Values = Record<string, unknown>

/** 一行开关：Host 条目、字段、怎么判断「开」、打开时写什么。 */
interface Item {
  key: 'analytics' | 'sessionLog' | 'inventory' | 'feedback' | 'lowLabel' | 'workspaceAccess' | 'skin'
  entry: string
  field: string
  onValue: unknown
  /** 默认开的开关：关 = 写这个值，开 = 去掉覆盖回到默认。没有则反过来（默认关）。 */
  offValue?: unknown
  isOn: (value: Values) => boolean
}

const ITEMS: readonly Item[] = [
  { key: 'analytics', entry: 'product-analytics', field: 'enabled', onValue: true, isOn: v => v['enabled'] === true },
  { key: 'sessionLog', entry: 'session-log-deepseek', field: 'enabled', onValue: true, isOn: v => v['enabled'] === true },
  // 这两项官方不可热改：界面写本包自己的 volatile 字段，由 Host 面（src/index.ts）
  // 经 configEditor 改官方条目，官方随即重载那个组件。
  { key: 'inventory', entry: 'dsh-qol', field: 'inventory', onValue: true, isOn: v => v['inventory'] === true },
  { key: 'feedback', entry: 'dsh-qol', field: 'feedback', onValue: true, isOn: v => v['feedback'] === true },
]

/** 沙箱 Low 标签撤销：本包自己的 volatile 字段，默认开（Host 面见 src/low-label.ts）。 */
const LOW_LABEL_ITEM: Item = {
  key: 'lowLabel', entry: 'dsh-qol', field: 'revokeLowLabel', onValue: true, offValue: false,
  isOn: v => v['revokeLowLabel'] !== false,
}

/** 工作区沙箱授权自动修复：本包自己的 volatile 字段，默认开（Host 面见 src/workspace-access.ts）。 */
const WORKSPACE_ACCESS_ITEM: Item = {
  key: 'workspaceAccess', entry: 'dsh-qol', field: 'fixWorkspaceAccess', onValue: true, offValue: false,
  isOn: v => v['fixWorkspaceAccess'] !== false,
}

/** 皮肤：本包自己的 volatile 字段，默认开，浏览器侧读（见 skin.ts）。 */
const SKIN_ITEM: Item = {
  key: 'skin', entry: 'dsh-qol', field: 'skin', onValue: true, offValue: false,
  isOn: v => v['skin'] !== false,
}

const S = {
  section: { display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', lineHeight: '22px', color: 'var(--dsw-alias-label-primary)' },
  title: { fontSize: '15px', lineHeight: '22px', fontWeight: 600 },
  note: { fontSize: '12px', lineHeight: '18px', color: 'var(--dsw-alias-label-tertiary)' },
  card: { display: 'flex', flexDirection: 'column', border: '1px solid var(--dsw-alias-border-l1)', borderRadius: '16px', padding: '4px 16px' },
  row: { display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0' },
  rowDivider: { borderTop: '1px solid var(--dsw-alias-border-l1)' },
  text: { display: 'flex', flexDirection: 'column', gap: '2px', flex: '1 1 auto', minWidth: 0 },
  error: { fontSize: '12px', lineHeight: '18px', color: 'var(--dsw-alias-state-error-primary)' },
  track: { position: 'relative', flex: '0 0 auto', width: '36px', height: '20px', borderRadius: '10px', border: 'none', padding: 0, transition: 'background 120ms' },
  knob: { position: 'absolute', top: '2px', width: '16px', height: '16px', borderRadius: '8px', background: '#fff', transition: 'left 120ms' },
} satisfies Record<string, CSSProperties>

type T = (key: QolLocaleKey) => string

function useForm(form: ConfigForm<Values>): ConfigFormSnapshot<Values> {
  return useSyncExternalStore(listener => form.subscribe(listener), () => form.getSnapshot())
}

function Switch(props: { checked: boolean; label: string; disabled: boolean; onToggle: () => void }): ReactElement {
  const { checked, disabled } = props
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={props.label}
      disabled={disabled}
      onClick={props.onToggle}
      style={{
        ...S.track,
        background: checked ? 'var(--dsw-alias-brand-primary, #4d6bfe)' : 'var(--dsw-alias-border-l2, #c8c8cc)',
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      <span style={{ ...S.knob, left: checked ? '18px' : '2px' }} />
    </button>
  )
}

function ItemRow(props: { ctx: Context; t: T; item: Item; first: boolean }): ReactElement {
  const { ctx, t, item } = props
  const form = ctx.configForms.get<Values>(item.entry)
  const snap = useForm(form)
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)
  const label = t(`item.${item.key}`)

  let status: string
  let control: ReactElement | null = null
  if (snap.status === 'loading') status = t('state.loading')
  else if (snap.status === 'unavailable') status = t('state.unavailable')
  else {
    const on = snap.value !== undefined && item.isOn(snap.value)
    status = snap.writable ? t(on ? 'state.on' : 'state.off') : t('state.readonly')
    control = (
      <Switch
        checked={on}
        label={label}
        disabled={busy || !snap.writable}
        onToggle={() => {
          setBusy(true)
          setFailed(false)
          // 关 = 去掉用户覆盖，回到本包组合层的「关」；开 = 写一个值。
          const write = item.offValue === undefined
            ? (on ? form.unset(item.field) : form.set(item.field, item.onValue))
            : (on ? form.set(item.field, item.offValue) : form.unset(item.field))
          write.then(ok => { if (!ok) setFailed(true) }, () => { setFailed(true) })
            .finally(() => { setBusy(false) })
        }}
      />
    )
  }

  return (
    <div style={{ ...S.row, ...(props.first ? {} : S.rowDivider) }}>
      <div style={S.text}>
        <span>{label}</span>
        <span style={S.note}>{t(`item.${item.key}.desc`)}</span>
        <span style={S.note}>{status}</span>
        {failed ? <span style={S.error}>{t('error.save')}</span> : null}
      </div>
      {control}
    </div>
  )
}

function makeSection(ctx: Context, t: T): () => ReactElement {
  return function QolSection() {
    return (
      <div style={S.section}>
        <div style={S.title}>{t('privacy.title')}</div>
        <div style={S.note}>{t('privacy.intro')}</div>
        <div style={S.card}>
          {ITEMS.map((item, i) => <ItemRow key={item.key} ctx={ctx} t={t} item={item} first={i === 0} />)}
        </div>
        <div style={S.note}>{t('privacy.uninstall')}</div>
        <div style={{ ...S.title, marginTop: 12 }}>{t('skin.title')}</div>
        <div style={S.note}>{t('skin.intro')}</div>
        <div style={S.card}>
          <ItemRow ctx={ctx} t={t} item={SKIN_ITEM} first />
        </div>
        <div style={{ ...S.title, marginTop: 12 }}>{t('lowLabel.title')}</div>
        <div style={S.note}>{t('lowLabel.intro1')}</div>
        <div style={S.note}>{t('lowLabel.intro2')}</div>
        <div style={S.card}>
          <ItemRow ctx={ctx} t={t} item={LOW_LABEL_ITEM} first />
          <ItemRow ctx={ctx} t={t} item={WORKSPACE_ACCESS_ITEM} first={false} />
        </div>
      </div>
    )
  }
}

export const inject = [...new Set(['slots', 'locale', 'configForms', ...workbenchInject])]

/**
 * 注册「生活质量包」设置分区。
 * @param ctx - 浏览器侧插件上下文。
 */
export async function apply(ctx: Context): Promise<void> {
  // 兜底：本包坏了只能表现为「设置里少了一个分区」，不许拖垮整个界面。
  try {
    ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-qol: dictionaries')
    const t = ctx.locale.bind(NS) as T
    const Section = makeSection(ctx, t)
    ctx.slots.inject('settings.section', () => ctx.slots.register({
      name: 'settings.section',
      id: 'dsh-qol',
      // 本包分区排在官方分区（最大 20）之后、本包其他分区（30 起）之前。
      order: 25,
      label: () => t('nav'),
      locale: NS,
    }, Section))
  } catch (error) {
    console.error(`[dsh-qol] privacy section failed: ${error instanceof Error ? error.message : String(error)}`)
  }
  // 设置导航里本包各分区的图标（官方只认自己的 id，其余画齿轮）。
  try {
    ctx.inject(['locale'], (scoped) => { scoped.effect(() => installSettingsIcons(scoped), 'dsh-qol: settings icons') })
  } catch (error) {
    console.error(`[dsh-qol] settings icons failed: ${error instanceof Error ? error.message : String(error)}`)
  }
  // 流式正文平滑显示：叠在官方助手正文渲染器上，包装出错时官方照常渲染。
  try {
    ctx.inject(['slots'], (scoped) => { scoped.effect(() => installSmoothText(scoped), 'dsh-qol: smooth text') })
  } catch (error) {
    console.error(`[dsh-qol] smooth text failed: ${error instanceof Error ? error.message : String(error)}`)
  }
  // 皮肤：跟着开关装上或撤掉；官方主题服务缺席时什么都不做。
  try {
    applySkin(ctx)
  } catch (error) {
    console.error(`[dsh-qol] skin failed: ${error instanceof Error ? error.message : String(error)}`)
  }
  // 工作台（三个标签、全局记忆、工具卡片）。同样兜底：坏了只少这部分，不拖垮界面。
  try {
    await applyWorkbench(ctx)
  } catch (error) {
    console.error(`[dsh-qol] workbench failed: ${error instanceof Error ? error.message : String(error)}`)
  }
  // 系统通知：待审批、助手提问、后台工作完成或失败。
  try {
    applyNotify(ctx)
  } catch (error) {
    console.error(`[dsh-qol] notify failed: ${error instanceof Error ? error.message : String(error)}`)
  }
  // 技能库：远程接口由上面的工作台挂载（同一份描述），所以排在它之后。
  try {
    await applySkills(ctx)
  } catch (error) {
    console.error(`[dsh-qol] skills failed: ${error instanceof Error ? error.message : String(error)}`)
  }
}

/** 皮肤开关：读本包 skin 字段（默认开），变了就装上或撤掉。 */
function applySkin(ctx: Context): void {
  ctx.inject(['theme', 'configForms'], (scoped) => {
    const form = scoped.configForms.get<Values>('dsh-qol')
    let dispose: (() => void) | undefined
    const sync = (): void => {
      const snap = form.getSnapshot()
      // 读不到配置（加载中、后台没起来）时按默认开。
      const want = snap.status !== 'ready' || snap.value?.['skin'] !== false
      if (want && dispose === undefined) dispose = installSkin(scoped)
      else if (!want && dispose !== undefined) { dispose(); dispose = undefined }
    }
    sync()
    const unsubscribe = form.subscribe(sync)
    scoped.effect(() => () => { unsubscribe(); dispose?.(); dispose = undefined }, 'dsh-qol: skin')
  })
}
