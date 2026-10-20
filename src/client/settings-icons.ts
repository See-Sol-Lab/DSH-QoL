/**
 * 设置导航里本包各分区的图标（GUI 的对应关系：全局记忆=思考、已归档=归档、用量=仪表盘、
 * 技能=技能；生活质量包本身用「插件风车」）。
 *
 * 官方设置页按分区 id 写死图标，未知 id 一律画齿轮，也不接受插件传图标（GUI 当年是改
 * 官方 SettingsRoot 的 navIcon）。这里不碰官方 React 管的节点内容：认出我们那几行后只
 * 给按钮打一个 data 属性，样式把官方齿轮藏起来，用 ::before 按官方图标的形状画一个。
 * 图标形状取自官方图标组件本身（运行时调用、转成 SVG），和官方图标库一致。
 */

import type { Context } from '@deepseek-ai/cordis'
import {
  IconArchiveOutlineMedium,
  IconPluginPinwheelOutlineMedium,
  IconGaugeOutlineMedium,
  IconSkillOutlineMedium,
  IconThinkOutlineMedium,
} from '@deepseek-ai/dsh-client-ui-primitives'

const STYLE_ID = 'dsh-qol-settings-icons'
const ATTR = 'data-dsh-qol-icon'

/** 图标名 → 官方图标组件；分区由它的导航文字认出（文字随界面语言，每次现取）。 */
const ICONS: Record<string, { component: unknown; label: (ctx: Context) => string }> = {
  pinwheel: { component: IconPluginPinwheelOutlineMedium, label: ctx => ctx.locale.bind('dsh.qol')('nav') },
  archive: { component: IconArchiveOutlineMedium, label: ctx => ctx.locale.bind('dsh.qol.workbench')('archived.nav') },
  skill: { component: IconSkillOutlineMedium, label: ctx => ctx.locale.bind('dsh.qol.skills')('nav.skills') },
  gauge: { component: IconGaugeOutlineMedium, label: ctx => ctx.locale.bind('dsh.qol.usage')('nav') },
  think: { component: IconThinkOutlineMedium, label: ctx => ctx.locale.bind('dsh.qol.memory')('nav.memory') },
}

type Element = { type: unknown; props: Record<string, unknown> } | string | number | boolean | null | undefined | Element[]

const escapeXml = (text: string): string => text.replace(/[&<>"]/gu, ch => `&#${ch.charCodeAt(0)};`)

/** 把官方图标组件返回的元素树转成 SVG 文本（函数组件递归调用，属性名转成 SVG 写法）。 */
function toSvg(element: Element): string {
  if (element === null || element === undefined || typeof element === 'boolean') return ''
  if (typeof element === 'string' || typeof element === 'number') return escapeXml(String(element))
  if (Array.isArray(element)) return element.map(toSvg).join('')
  const { type, props } = element
  if (typeof type === 'function') return toSvg((type as (p: Record<string, unknown>) => Element)(props))
  if (typeof type !== 'string') return ''
  const attrs = Object.entries(props)
    .filter(([name, value]) => name !== 'children' && name !== 'className' && value !== undefined && value !== null && typeof value !== 'object')
    .map(([name, value]) => `${name === 'viewBox' ? name : name.replace(/[A-Z]/gu, ch => `-${ch.toLowerCase()}`)}="${escapeXml(String(value))}"`)
    .join(' ')
  return `<${type} ${attrs}>${toSvg(props['children'] as Element)}</${type}>`
}

function iconCss(): string {
  let css = `
[${ATTR}] > svg { display: none; }
[${ATTR}]::before {
  content: '';
  flex: none;
  width: 16px;
  height: 16px;
  background-color: currentColor;
  -webkit-mask: var(--dsh-qol-icon) center / 16px 16px no-repeat;
  mask: var(--dsh-qol-icon) center / 16px 16px no-repeat;
}
`
  for (const [name, { component }] of Object.entries(ICONS)) {
    // currentColor 在蒙版图片里没有意义，换成实色；蒙版只看不透明度。
    const svg = toSvg({ type: component, props: { size: 16 } }).replaceAll('currentColor', '#000')
    css += `[${ATTR}="${name}"] { --dsh-qol-icon: url("data:image/svg+xml,${encodeURIComponent(svg)}"); }\n`
  }
  return css
}

/**
 * 装上设置导航图标：样式一次写好，设置弹窗出现时给我们那几行按钮打标记。
 * @param ctx - 带 locale 的浏览器侧上下文。
 * @returns 撤掉的函数。
 */
export function installSettingsIcons(ctx: Context): () => void {
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = iconCss()
  document.head.appendChild(style)

  let frame = 0
  const tag = (): void => {
    frame = 0
    const buttons = document.querySelectorAll<HTMLButtonElement>('[data-shortcut-modal="settings"] nav button')
    if (buttons.length === 0) return
    const byLabel = new Map(Object.entries(ICONS).map(([name, icon]) => [icon.label(ctx), name]))
    for (const button of Array.from(buttons)) {
      const name = byLabel.get(button.textContent?.trim() ?? '')
      if (name === undefined) button.removeAttribute(ATTR)
      else if (button.getAttribute(ATTR) !== name) button.setAttribute(ATTR, name)
    }
  }
  // 对话流式时 DOM 变动很多：只排一帧，且设置弹窗不在时立即返回。
  const observer = new MutationObserver(() => { if (frame === 0) frame = requestAnimationFrame(tag) })
  observer.observe(document.body, { childList: true, subtree: true })
  tag()
  return () => {
    observer.disconnect()
    if (frame !== 0) cancelAnimationFrame(frame)
    style.remove()
    for (const button of Array.from(document.querySelectorAll(`[${ATTR}]`))) button.removeAttribute(ATTR)
  }
}
