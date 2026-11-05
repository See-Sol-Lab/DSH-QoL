/** 应用内更新的两处界面：设置页里的一行状态，和有新版本或等重启时右下角的提示。 */

import { useSyncExternalStore, type CSSProperties, type ReactElement } from 'react'
import { Button } from '@deepseek-ai/dsh-client-ui-primitives'
import type { QolLocaleKey } from '../locales.ts'
import { RUNNING_VERSION, type UpdateState, type Updater } from './updater.ts'

type T = (key: QolLocaleKey, values?: Record<string, string>) => string

const S = {
  row: { display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderTop: '1px solid var(--dsw-alias-border-l1)' },
  text: { display: 'flex', flexDirection: 'column', gap: '2px', flex: '1 1 auto', minWidth: 0 },
  note: { fontSize: '12px', lineHeight: '18px', color: 'var(--dsw-alias-label-tertiary)', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' },
  error: { fontSize: '12px', lineHeight: '18px', color: 'var(--dsw-alias-state-error-primary)', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' },
  notice: {
    position: 'fixed', right: '20px', bottom: '20px', zIndex: 900, width: '320px', display: 'flex', flexDirection: 'column', gap: '10px',
    padding: '14px 16px', borderRadius: '14px', border: '1px solid var(--dsw-alias-border-l1)',
    background: 'var(--dsw-alias-bg-layer-2, #1b1f27)', color: 'var(--dsw-alias-label-primary)', fontSize: '14px', lineHeight: '22px',
    boxShadow: '0 8px 28px rgba(0, 0, 0, 0.28)',
  },
  actions: { display: 'flex', justifyContent: 'flex-end', gap: '8px' },
} satisfies Record<string, CSSProperties>

function useUpdate(updater: Updater): UpdateState {
  return useSyncExternalStore(listener => updater.subscribe(listener), () => updater.state())
}

function statusText(state: UpdateState, t: T): string {
  switch (state.phase) {
    case 'loading': return t('update.loading')
    case 'unmanaged': return t('update.unmanaged')
    case 'idle': return t('update.idle')
    case 'checking': return t('update.checking')
    case 'latest': return t('update.latest')
    case 'available': return t('update.available', { version: state.release.version })
    case 'installing': return t('update.installing', { version: state.release.version })
    case 'restart': return t('update.restart', { version: state.version })
    case 'updated': return t('update.updated', { version: state.version })
    case 'check-failed': return t('update.checkFailed')
    case 'install-failed': return t('update.installFailed')
  }
}

/** 设置页：当前版本、状态和对应的按钮。 */
export function UpdateRow({ updater, t }: { updater: Updater; t: T }): ReactElement {
  const state = useUpdate(updater)
  let action: ReactElement | null = null
  if (state.phase === 'available' || state.phase === 'install-failed') {
    const { release } = state
    action = <Button variant="outline" onClick={() => { void updater.install(release) }}>{t(state.phase === 'available' ? 'update.action' : 'update.retry')}</Button>
  } else if (state.phase === 'idle' || state.phase === 'latest' || state.phase === 'check-failed') {
    action = <Button variant="outline" onClick={() => { void updater.check() }}>{t('update.check')}</Button>
  }
  const detail = state.phase === 'check-failed' || state.phase === 'install-failed' ? state.detail : null
  return (
    <div style={S.row}>
      <div style={S.text}>
        <span>{t('update.current', { version: RUNNING_VERSION })}</span>
        <span style={S.note}>{statusText(state, t)}</span>
        {detail === null ? null : <span style={S.error}>{detail}</span>}
      </div>
      {action}
    </div>
  )
}

/** 右下角提示：有新版本、正在安装、安装失败、等重启时出现；新版本可以按「稍后」收起。 */
export function UpdateNotice({ updater, t }: { updater: Updater; t: T }): ReactElement | null {
  const state = useUpdate(updater)
  switch (state.phase) {
    case 'available':
      if (updater.dismissed(state.release.version)) return null
      return (
        <div role="status" style={S.notice}>
          <span>{t('update.available', { version: state.release.version })}</span>
          <div style={S.actions}>
            <Button variant="outline" onClick={() => { updater.dismiss(state.release.version) }}>{t('update.later')}</Button>
            <Button variant="outline" onClick={() => { void updater.install(state.release) }}>{t('update.action')}</Button>
          </div>
        </div>
      )
    case 'installing':
      return <div role="status" style={S.notice}>{statusText(state, t)}</div>
    case 'install-failed':
      return (
        <div role="status" style={S.notice}>
          <span>{t('update.installFailed')}</span>
          <span style={S.error}>{state.detail}</span>
          <div style={S.actions}>
            <Button variant="outline" onClick={() => { updater.dismiss(state.release.version); void updater.check() }}>{t('update.later')}</Button>
            <Button variant="outline" onClick={() => { void updater.install(state.release) }}>{t('update.retry')}</Button>
          </div>
        </div>
      )
    case 'restart':
      return <div role="status" style={S.notice}>{statusText(state, t)}</div>
    case 'updated':
      return (
        <div role="status" style={S.notice}>
          <span>{statusText(state, t)}</span>
          <div style={S.actions}>
            <Button variant="outline" onClick={() => { updater.acknowledge() }}>{t('update.ok')}</Button>
          </div>
        </div>
      )
    default:
      return null
  }
}
