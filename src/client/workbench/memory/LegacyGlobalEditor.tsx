/**
 * The global memory editor (B7-P9, moved here from the JS settings plugin):
 * the person edits `<home>/memory.md` here, and every new window reads it
 * once at its start. The text and the save go through the Host inspector
 * (DSH-QoL desk) with the text the edit started from, so a file changed
 * underneath is refused rather than overwritten; an unreadable file disables
 * saving so the original is never replaced by a blank.
 *
 * DSH-QoL：DeepSeekGUI 在这里列出「归档整理」产出的跨项目建议；归档自动整理已经
 * 不做了，建议列表一并去掉。
 */
import { useEffect, useRef, useState } from 'react'
import type { WorkbenchDesk } from '../desk.ts'
import { errorMessage, type Translate } from '../locales-memory.ts'
import { BUTTON_CLASS, caption, column, errorText, intro, mono, primaryButton, row, textarea } from './styles.ts'

/** Props of the editor. */
export interface LegacyGlobalEditorProps {
  /** DSH-QoL：全局记忆读写经 Host inspector。 */
  desk: WorkbenchDesk
  t: Translate
}

interface Loaded {
  home: string
  /** The file text; null when unreadable. */
  text: string | null
}

function separatorOf(home: string): string {
  return home.includes('/') && !home.includes('\\') ? '/' : '\\'
}

export function LegacyGlobalEditor({ desk, t }: LegacyGlobalEditorProps) {
  const [loaded, setLoaded] = useState<Loaded>()
  const [loadError, setLoadError] = useState<string>()
  const [draft, setDraft] = useState<string>()
  const [saving, setSaving] = useState(false)
  const [notice, setNotice] = useState<{ ok: true } | { ok: false; message: string }>()
  // The text the current edit started from: the save quotes it, the Host refuses a file that moved on.
  const expected = useRef<string | null>(null)
  const alive = useRef(true)

  useEffect(() => {
    alive.current = true
    desk.globalMemory().then(
      (next) => {
        if (!alive.current) return
        setLoaded(next)
        expected.current = next.text
      },
      (error: unknown) => { if (alive.current) setLoadError(errorMessage(error)) },
    )
    return () => { alive.current = false }
  }, [desk])

  const unreadable = loaded !== undefined && loaded.text === null
  const value = draft ?? loaded?.text ?? ''
  const dirty = draft !== undefined && draft !== loaded?.text
  const home = loaded?.home ?? ''
  const sep = separatorOf(home)

  const save = async (): Promise<void> => {
    if (loaded === undefined || draft === undefined) return
    const submitted = draft
    setSaving(true)
    setNotice(undefined)
    try {
      await desk.saveGlobalMemory(submitted, expected.current)
      if (!alive.current) return
      expected.current = submitted
      setLoaded({ home: loaded.home, text: submitted })
      setDraft(current => current === submitted ? undefined : current)
      setNotice({ ok: true })
    } catch (error) {
      if (alive.current) setNotice({ ok: false, message: errorMessage(error) })
    } finally {
      if (alive.current) setSaving(false)
    }
  }

  return (
    <div style={column} data-deepseekgui="memory-legacy-global">
      <p style={intro}>{t('legacy.intro')}</p>
      {loadError !== undefined && <div role="alert" style={errorText}>{t('common.failed', { message: loadError })}</div>}
      {unreadable && <div role="alert" style={errorText}>{t('legacy.unreadable')}</div>}
      <textarea
        rows={10}
        style={textarea}
        value={value}
        disabled={loaded === undefined || unreadable}
        placeholder={t('legacy.placeholder')}
        aria-label={t('nav.memory')}
        onChange={(event) => { setDraft(event.target.value); setNotice(undefined) }}
      />
      <p style={intro}>{t('legacy.note')}</p>
      <div style={row}>
        <button type="button" className={BUTTON_CLASS} style={primaryButton} disabled={unreadable || !dirty || saving} onClick={() => { void save() }} data-deepseekgui="memory-legacy-save">
          {saving ? t('legacy.saving') : t('legacy.save')}
        </button>
        {notice?.ok === true && <span role="status" style={caption}>{t('legacy.saved')}</span>}
        {notice?.ok === false && <span role="alert" style={errorText}>{t('legacy.failed', { message: notice.message })}</span>}
      </div>
      <p style={intro}>{t('legacy.kept')}</p>
      <p style={intro}>{t('legacy.projectNote')}</p>
      {home !== '' && <div style={{ ...caption, ...mono }}>{t('legacy.location', { path: `${home}${sep}memory.md` })}</div>}
      <p style={intro}>{t('legacy.agentsNote')}</p>
      {home !== '' && <div style={{ ...caption, ...mono }}>{`${home}${sep}AGENTS.md`}</div>}
    </div>
  )
}
