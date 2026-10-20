/**
 * 生活质量包皮肤（移植自 DeepSeekGUI 的 theme-plugin + workbench skin）。
 *
 * GUI 靠桌面外壳给窗口铺深海/海雾底图（另一个窗口层）；官方桌面端没有那一层，
 * 所以这里在页面最底下自己铺一层（z-index -1，挂在 body 上，不动 #root：#root
 * 一旦有 z-index 或 backdrop-filter，菜单、提示和设置弹窗的层级会乱）。然后用官方
 * ctx.theme.overrideTokens 把表面改成半透明，让底图透上来；大块的弹层加毛玻璃。
 * 不追 100% 复刻：官方没给钩子的小地方保持原样。关掉开关或卸载插件，全部撤掉。
 */

import type { Context } from '@deepseek-ai/cordis'
// Type-only: ctx.theme.
import type {} from '@deepseek-ai/dsh-client-ui-theme/client'
import SEA_DARK from '../../assets/skin/sea-dark.webp'
import SEA_LIGHT from '../../assets/skin/sea-light.webp'

const OVERRIDE_SOURCE = '@see-sol-lab/dsh-qol/skin'
const STYLE_ID = 'dsh-qol-skin'
const LAYER_ID = 'dsh-qol-skin-sea'

/** GUI 的表面 token（住户逐项实机定稿的值）。GUI 里靠改官方代码才生效的宿主钩子没搬。 */
const TOKENS = {
  // 页面底透明，底图才透得上来。整套的地基。
  '--dsw-alias-bg-base': { light: 'transparent', dark: 'transparent' },
  // 模块面板：浅底要更实，否则底图会把文字吃掉。
  '--dsw-alias-bg-module-platform': { light: 'rgba(255, 255, 255, 0.42)', dark: 'rgba(255, 255, 255, 0.10)' },
  '--dsw-alias-bg-multi-select': { light: 'rgba(255, 255, 255, 0.55)', dark: 'rgba(255, 255, 255, 0.13)' },
  // 浮层常叠在面板上，两层半透明会把下面的字透上来。
  '--dsw-alias-bg-overlay': { light: 'rgba(255, 255, 255, 0.94)', dark: 'rgba(28, 30, 34, 0.92)' },
  '--dsw-alias-bg-skeleton': { light: 'rgba(0, 0, 0, 0.04)', dark: 'rgba(255, 255, 255, 0.05)' },
  // 设置弹窗等二级表面：读字的面板要实。
  '--dsw-alias-bg-layer-2': { light: 'rgba(252, 252, 252, 0.90)', dark: 'rgba(24, 27, 33, 0.92)' },
  // 侧栏半透，玻璃感的正确开关（深 0.42 / 浅 0.38 实机定稿）。
  '--dsw-specific-sidebar-fill': { light: 'rgba(249, 248, 248, 0.38)', dark: 'rgba(16, 20, 26, 0.42)' },
  '--dsw-specific-bubble': { light: 'rgba(255, 255, 255, 0.70)', dark: 'rgba(44, 44, 46, 0.70)' },
  // 输入卡片：与设置弹窗同一档实度（「对话框不能这么透」）。
  '--dsw-specific-input-major': { light: 'rgba(255, 255, 255, 0.86)', dark: 'rgba(30, 34, 41, 0.84)' },
  '--dsw-alias-button-elevated-fill': { light: 'rgba(255, 255, 255, 0.62)', dark: 'rgba(255, 255, 255, 0.07)' },
  '--dsw-alias-bg-layer-1': { light: 'rgba(255, 255, 255, 0.72)', dark: 'rgba(255, 255, 255, 0.06)' },
  '--dsw-alias-scrollbar-bg-l1': { light: 'rgba(38, 49, 72, 0.30)', dark: 'rgba(255, 255, 255, 0.30)' },
  '--dsw-alias-scrollbar-bg-l2': { light: 'rgba(38, 49, 72, 0.30)', dark: 'rgba(255, 255, 255, 0.30)' },
  '--dsw-alias-scrollbar-hover-l1': { light: 'rgba(38, 49, 72, 0.46)', dark: 'rgba(255, 255, 255, 0.46)' },
  '--dsw-alias-scrollbar-hover-l2': { light: 'rgba(38, 49, 72, 0.46)', dark: 'rgba(255, 255, 255, 0.46)' },
  // 线条：冷灰蓝、各降一小档，退成「透出来的棱」。
  '--dsw-alias-border-l1': { light: 'rgba(38, 49, 72, 0.05)', dark: 'rgba(255, 255, 255, 0.05)' },
  '--dsw-alias-border-l2': { light: 'rgba(38, 49, 72, 0.08)', dark: 'rgba(255, 255, 255, 0.09)' },
  '--dsw-alias-border-l2-darkmode-thin': { light: 'rgba(38, 49, 72, 0.08)', dark: 'rgba(255, 255, 255, 0.05)' },
  '--dsw-alias-border-l3': { light: 'rgba(38, 49, 72, 0.10)', dark: 'rgba(255, 255, 255, 0.12)' },
  '--dsw-alias-border-l4': { light: 'rgba(38, 49, 72, 0.14)', dark: 'rgba(255, 255, 255, 0.16)' },
  '--dsw-alias-tooltip-bg': { light: 'rgb(255, 255, 255)', dark: 'rgb(40, 42, 48)' },
  '--dsw-specific-menu': { light: 'rgba(255, 255, 255, 0.84)', dark: 'rgba(46, 48, 52, 0.88)' },
}

const DARK = ':is(html, body)[data-ds-dark-theme]'
const SIDEBAR = '[data-slot="sidebar"]'
const COMPOSER_CARD = '[data-composer-card]'
const GLASS_BLUR = 'blur(24px) saturate(140%)'
const FROST_FILTER_ID = 'dsh-qol-frost-filter'
const GLASS_FROST = `url(#${FROST_FILTER_ID}-f)`

const CSS = `
/* 底图层：GUI backdrop.html 原样——两张同时挂、只切透明度，切主题时不用现加载。
   遮罩压暗深色（长对话读久了累），上浅下深。 */
#${LAYER_ID}, #${LAYER_ID} > div {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
#${LAYER_ID} { z-index: -1; background: #f9f8f8; }
${DARK} #${LAYER_ID} { background: #0a0a0a; }
#${LAYER_ID} > div {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 60ms linear;
}
#${LAYER_ID} > [data-sea="dark"] {
  opacity: 0;
  background-image: linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.68)), url("${SEA_DARK}");
}
#${LAYER_ID} > [data-sea="light"] {
  background-image: linear-gradient(rgba(249, 248, 248, 0.42), rgba(249, 248, 248, 0.58)), url("${SEA_LIGHT}");
}
${DARK} #${LAYER_ID} > [data-sea="dark"] { opacity: 1; }
${DARK} #${LAYER_ID} > [data-sea="light"] { opacity: 0; }

/* Windows 官方桌面端给最外层框和标题栏拖拽条刷了一层侧栏色，会整片盖住底图
   （dsh-ui-appearance #31 同款处理）。 */
[data-windows-titlebar] [class*="_frame"],
[data-windows-titlebar] [class*="_frame"]::before {
  background: transparent !important;
}

/* 输入框下面的统计行（官方 [data-composer-dock]：统计小块 + 上下文圆环）是透明的，
   长回复滚到它后面会透字。GUI 做法：整行收成一个半透明胶囊，居中。 */
[data-composer-dock] {
  width: fit-content;
  margin-inline: auto;
  margin-top: 4px;
  padding: 3px 14px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-overlay);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
${DARK} [data-composer-dock] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
${SIDEBAR} [role="treeitem"],
${SIDEBAR} button {
  transition: background-color 150ms ease, box-shadow 150ms ease, border-color 150ms ease;
}
${COMPOSER_CARD} {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.06);
  transition: box-shadow 180ms ease;
}
${COMPOSER_CARD}:focus-within {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(77, 107, 254, 0.32), 0 0 0 3px rgba(77, 107, 254, 0.05), 0 12px 32px rgba(0, 0, 0, 0.06);
}
${DARK} ${COMPOSER_CARD} {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.10), 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 12px 32px rgba(0, 0, 0, 0.32);
}
${DARK} ${COMPOSER_CARD}:focus-within {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.10), 0 0 0 1px rgba(103, 153, 254, 0.38), 0 0 0 3px rgba(103, 153, 254, 0.06), 0 12px 32px rgba(0, 0, 0, 0.32);
}
::-webkit-scrollbar-thumb { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.38); }
${DARK} ::-webkit-scrollbar-thumb { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.10); }
[role="tooltip"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 0.5px rgba(38, 49, 72, 0.10), 0 8px 24px rgba(38, 49, 72, 0.10);
}
${DARK} [role="tooltip"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.40);
}
/* 菜单用磨砂（实底+模糊），0.84 的底单纯模糊会透字；对话框普通模糊就够。 */
[role="menu"] {
  -webkit-backdrop-filter: ${GLASS_FROST};
  backdrop-filter: ${GLASS_FROST};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 0.5px rgba(38, 49, 72, 0.08), 0 12px 32px rgba(38, 49, 72, 0.10);
  animation: dsh-qol-pop-in 120ms ease-out;
}
${DARK} [role="menu"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 12px 32px rgba(0, 0, 0, 0.45);
}
[role="dialog"] {
  -webkit-backdrop-filter: ${GLASS_BLUR};
  backdrop-filter: ${GLASS_BLUR};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 0 0 0.5px rgba(38, 49, 72, 0.08), 0 24px 64px rgba(38, 49, 72, 0.14);
  animation: dsh-qol-pop-in 140ms ease-out;
}
${DARK} [role="dialog"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 24px 64px rgba(0, 0, 0, 0.5);
}
:focus-visible { outline-color: rgba(77, 107, 254, 0.55) !important; }
${DARK} :focus-visible { outline-color: rgba(103, 153, 254, 0.60) !important; }
@keyframes dsh-qol-pop-in {
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  [role="menu"], [role="dialog"] { animation: none; }
}
/* 磨砂的实底色，贴近卡片后面那块底图的色调。 */
body { --dsh-qol-frost-ground: rgb(238, 243, 250); }
${DARK} { --dsh-qol-frost-ground: rgb(20, 24, 32); }
`

/** 磨砂滤镜：先铺一层实底，再叠模糊——普通 blur 在透明页面上会把清晰的字透出来。 */
function installFrostFilter(): () => void {
  const holder = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  holder.id = FROST_FILTER_ID
  holder.setAttribute('aria-hidden', 'true')
  holder.setAttribute('width', '0')
  holder.setAttribute('height', '0')
  holder.style.position = 'absolute'
  holder.innerHTML = `<filter id="${FROST_FILTER_ID}-f" filterUnits="userSpaceOnUse" x="-10000" y="-10000"`
    + ' width="20000" height="20000" color-interpolation-filters="sRGB">'
    + '<feFlood style="flood-color: var(--dsh-qol-frost-ground)" result="ground"/>'
    + '<feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"/>'
    + '<feColorMatrix in="blur" type="saturate" values="1.4" result="frosted"/>'
    + '<feMerge><feMergeNode in="ground"/><feMergeNode in="frosted"/></feMerge></filter>'
  document.body.appendChild(holder)
  return () => { holder.remove() }
}

/**
 * 输入卡片的磨砂背板：卡片在官方 sticky 座里，Chromium 给 sticky 元素的
 * backdrop 采样错位，所以另放一个 fixed 层逐帧跟着卡片（只在对话进行中的卡片后面）。
 */
function installComposerFrost(): () => void {
  const frost = document.createElement('div')
  frost.setAttribute('aria-hidden', 'true')
  frost.style.cssText = 'position:fixed;pointer-events:none;z-index:1;display:none;'
    + `-webkit-backdrop-filter:${GLASS_FROST};backdrop-filter:${GLASS_FROST}`
  document.body.appendChild(frost)
  let last = ''
  let frame = 0
  const tick = (): void => {
    frame = requestAnimationFrame(tick)
    const card = document.querySelector<HTMLElement>(COMPOSER_CARD)
    const docked = card?.closest('[data-phase="active"], [data-content-phase="active"]') != null
    const rect = docked ? card?.getBoundingClientRect() : undefined
    const radius = card === null || card === undefined ? '' : getComputedStyle(card).borderRadius
    const key = rect === undefined || rect.height === 0 ? 'hidden' : `${rect.left},${rect.top},${rect.width},${rect.height},${radius}`
    if (key === last) return
    last = key
    if (rect === undefined || rect.height === 0) { frost.style.display = 'none'; return }
    Object.assign(frost.style, {
      display: 'block', left: `${rect.left}px`, top: `${rect.top}px`,
      width: `${rect.width}px`, height: `${rect.height}px`, borderRadius: radius,
    })
  }
  frame = requestAnimationFrame(tick)
  return () => { cancelAnimationFrame(frame); frost.remove() }
}

/**
 * 装上皮肤：底图层、token 覆盖、样式与磨砂。
 * @param ctx - 带 theme 服务的浏览器侧上下文。
 * @returns 撤掉全部的函数。
 */
export function installSkin(ctx: Context): () => void {
  document.getElementById(LAYER_ID)?.remove()
  document.getElementById(STYLE_ID)?.remove()
  const layer = document.createElement('div')
  layer.id = LAYER_ID
  layer.setAttribute('aria-hidden', 'true')
  layer.innerHTML = '<div data-sea="light"></div><div data-sea="dark"></div>'
  document.body.prepend(layer)
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = CSS
  document.head.appendChild(style)
  const disposeTokens = ctx.theme.overrideTokens(OVERRIDE_SOURCE, TOKENS)
  const disposeFilter = installFrostFilter()
  const disposeFrost = installComposerFrost()
  return () => {
    disposeFrost()
    disposeFilter()
    disposeTokens()
    style.remove()
    layer.remove()
  }
}
