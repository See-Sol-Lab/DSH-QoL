/**
 * 生活质量包的浏览器侧：「设置 → 生活质量包」里的隐私与上报开关。
 *
 * 每个开关对应一个 Host 条目，经 ctx.configForms.get(条目 id) 读写；打开 = set
 * 一个值写进用户 profile 补丁，关闭 = unset，回到本包组合层里的「关」。产物由
 * scripts/build.mjs 包成官方 client 运行时要求的 window.__ModuleLoader__ 自注册形状，
 * react 从 loader 的 require 里取。
 */

import React, { useState, useSyncExternalStore } from 'react'
import type { Context } from '@deepseek-ai/cordis'
// Type-only: ctx.locale、ctx.configForms 与 settings.section 插槽的类型合并。
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type { ConfigForm, ConfigFormSnapshot } from '@deepseek-ai/dsh-client-ui-settings/client'
import { en, zh, type QolLocaleKey } from './locales.ts'

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
  key: 'analytics' | 'sessionLog' | 'inventory' | 'feedback'
  entry: string
  field: string
  onValue: unknown
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
} satisfies Record<string, React.CSSProperties>

type T = (key: QolLocaleKey) => string

function useForm(form: ConfigForm<Values>): ConfigFormSnapshot<Values> {
  return useSyncExternalStore(listener => form.subscribe(listener), () => form.getSnapshot())
}

function Switch(props: { checked: boolean; label: string; disabled: boolean; onToggle: () => void }): React.ReactElement {
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

function ItemRow(props: { ctx: Context; t: T; item: Item; first: boolean }): React.ReactElement {
  const { ctx, t, item } = props
  const form = ctx.configForms.get<Values>(item.entry)
  const snap = useForm(form)
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)
  const label = t(`item.${item.key}`)

  let status: string
  let control: React.ReactElement | null = null
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
          const write = on ? form.unset(item.field) : form.set(item.field, item.onValue)
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

function makeSection(ctx: Context, t: T): () => React.ReactElement {
  return function QolSection() {
    return (
      <div style={S.section}>
        <div style={S.title}>{t('privacy.title')}</div>
        <div style={S.note}>{t('privacy.intro')}</div>
        <div style={S.card}>
          {ITEMS.map((item, i) => <ItemRow key={item.key} ctx={ctx} t={t} item={item} first={i === 0} />)}
        </div>
        <div style={S.note}>{t('privacy.uninstall')}</div>
      </div>
    )
  }
}

export const inject = ['slots', 'locale', 'configForms']

/**
 * 注册「生活质量包」设置分区。
 * @param ctx - 浏览器侧插件上下文。
 */
export function apply(ctx: Context): void {
  // 兜底：本包坏了只能表现为「设置里少了一个分区」，不许拖垮整个界面。
  try {
    ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-qol: dictionaries')
    const t = ctx.locale.bind(NS) as T
    const Section = makeSection(ctx, t)
    ctx.slots.inject('settings.section', () => ctx.slots.register({
      name: 'settings.section',
      id: 'dsh-qol',
      order: 45,
      label: () => t('nav'),
      locale: NS,
    }, Section))
  } catch (error) {
    console.error(`[dsh-qol] apply failed: ${error instanceof Error ? error.message : String(error)}`)
  }
}
