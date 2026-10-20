/**
 * 流式正文平滑显示（移植自 DeepSeekGUI B6-P4 的 SmoothedTextDisplay）。
 *
 * 模型的正文是一阵一阵到的，官方收到多少就画多少，看起来一顿一顿。这里不改数据：
 * 收到的文字照单全收，只决定这一帧画出多少前缀，按阅读速度匀速放出，落后太多就
 * 往前跳；流式一结束立刻显示完整原文。
 *
 * GUI 是改官方 ui-chat 加了个 chatTextDisplay 服务；官方桌面端没有这个口子，所以
 * 在 conversation.chat.node 的 assistant-step 格子上用更低的 priority 叠一个包装：
 * 原样带上官方条目的文案空间和 inject（子插槽声明借用官方的），渲染时调官方 AssistantNodeView，
 * 只把 node.data.blocks 里 text 块换成当前帧的前缀。包装崩了，插槽框架会让它退位，
 * 官方组件照常渲染。
 */

import { createElement, useEffect, useReducer, useRef, type ReactNode } from 'react'
import type { Context } from '@deepseek-ai/cordis'

/** Display budget for streaming assistant prose; pure presentation constants. */
interface SmoothTextConfig {
  /** Floor pace (chars per second), so a slow stream or the tail never crawls. */
  readonly charsPerSecond: number
  /** How quickly (ms) a lag error is corrected; larger is gentler. */
  readonly correctionMs: number
  /** Display pace as a share of the measured arrival rate (below 1 trails the stream a little). */
  readonly speedFactor: number
  /** Once the stream settles, the remainder flows out within about this many ms. */
  readonly drainMs: number
  /** Floor pace (chars per second) while flowing out the remainder. */
  readonly drainCharsPerSecond: number
  /** Backlog beyond which the display jumps forward (safety only). */
  readonly maxBacklogChars: number
  /** Blocks tracked at once; the oldest schedule is dropped first. */
  readonly maxBlocks: number
}

/** Default: 80% of the arrival rate, never slower than 60 chars/s; the remainder flows out within ~0.8 s at settle. */
const DEFAULT_SMOOTH_TEXT: SmoothTextConfig = {
  charsPerSecond: 60,
  correctionMs: 400,
  speedFactor: 0.8,
  drainMs: 800,
  drainCharsPerSecond: 600,
  maxBacklogChars: 20000,
  maxBlocks: 8,
}

/** One text block's authoritative state for this frame. */
interface SmoothTextInput {
  /** Stable identity of the block (session + turn + step + block index). */
  readonly key: string
  /** The authoritative text received so far. */
  readonly text: string
  /** False once the turn settled, stopped, errored, or lost its connection. */
  readonly streaming: boolean
}

interface BlockSchedule {
  /** Characters currently displayable (always a prefix of `target`). */
  shown: number
  /** The authoritative text this schedule was last advanced against. */
  target: string
  /** Timestamp of the previous advance. */
  lastMs: number
  /** Unspent release budget carried across frames, so the pace stays exact. */
  credit: number
  /** Smoothed arrival rate (chars per second) of this block's stream. */
  rate: number
  /** When the text last grew, and its length then (arrival-rate sampling). */
  grewMs: number | undefined
  grewLength: number
  /** Pace (chars per second) for flowing out the remainder after the stream settled. */
  drain?: number
}

/** UTF-16 high surrogate (first half of a non-BMP character). */
function isHighSurrogate(code: number): boolean {
  return code >= 0xD800 && code <= 0xDBFF
}

/** UTF-16 low surrogate (second half of a non-BMP character). */
function isLowSurrogate(code: number): boolean {
  return code >= 0xDC00 && code <= 0xDFFF
}

/**
 * Page-level smoother: one instance serves every streaming assistant text
 * block. Call {@link display} once per frame per block; the returned string is
 * the prefix to paint.
 */
class SmoothedTextDisplay {
  private readonly schedules = new Map<string, BlockSchedule>()

  /**
   * @param config - display budget; defaults to {@link DEFAULT_SMOOTH_TEXT}.
   * @param now - clock injection for deterministic tests; defaults to `performance.now`.
   */
  constructor(
    private readonly config: SmoothTextConfig = DEFAULT_SMOOTH_TEXT,
    private readonly now: () => number = () => performance.now(),
  ) {}

  /** Blocks currently tracked (bounded by `config.maxBlocks`). */
  get size(): number {
    return this.schedules.size
  }

  /**
   * Advance one block's schedule and return the text to display now.
   * @param input - block identity, authoritative text, and streaming state.
   * @returns the prefix of `input.text` the browser should paint this frame.
   */
  display(input: SmoothTextInput): string {
    const { key, text, streaming } = input
    // Settled text is authoritative at once: no animation may outlive the
    // turn it belongs to (turn end, stop, error, reconnect).
    const nowMs = this.now()
    if (!streaming) {
      // DSH-QoL: the display deliberately trails the stream, so at settle the
      // remainder flows out quickly instead of landing in one leap. Text that
      // never streamed (history, reload) has no schedule and shows at once.
      const settling = this.schedules.get(key)
      if (settling === undefined || !text.startsWith(settling.target) || settling.shown >= text.length) {
        this.schedules.delete(key)
        return text
      }
      settling.target = text
      settling.drain ??= Math.max(this.config.drainCharsPerSecond, (text.length - settling.shown) * 1_000 / this.config.drainMs)
      const step = Math.max(1, Math.floor(settling.drain / 1_000 * Math.max(0, nowMs - settling.lastMs)))
      settling.lastMs = nowMs
      settling.shown = Math.min(text.length, settling.shown + step)
      if (settling.shown >= text.length) this.schedules.delete(key)
      return text.slice(0, settling.shown)
    }
    let schedule = this.schedules.get(key)
    if (schedule !== undefined && !text.startsWith(schedule.target)) {
      // The authority replaced this block's text (edit or regeneration):
      // show the new text whole rather than replaying a different history.
      this.schedules.set(key, { shown: text.length, target: text, lastMs: nowMs, credit: 0, rate: 0, grewMs: undefined, grewLength: text.length })
      return text
    }
    if (schedule === undefined) {
      schedule = { shown: 0, target: text, lastMs: nowMs, credit: 0, rate: 0, grewMs: undefined, grewLength: 0 }
      this.track(key, schedule)
    }
    schedule.target = text
    const elapsed = Math.max(0, nowMs - schedule.lastMs)
    schedule.lastMs = nowMs
    const backlog = text.length - schedule.shown
    if (backlog <= 0) return text
    const { charsPerSecond, correctionMs, maxBacklogChars } = this.config
    // Sample the arrival rate whenever the authoritative text grew.
    if (text.length > schedule.grewLength) {
      if (schedule.grewMs !== undefined) {
        const sample = (text.length - schedule.grewLength) / Math.max(16, nowMs - schedule.grewMs) * 1_000
        schedule.rate = schedule.rate === 0 ? sample : schedule.rate * 0.7 + sample * 0.3
      }
      schedule.grewMs = nowMs
      schedule.grewLength = text.length
    }
    // Release at the arrival rate, nudged toward a steady lag behind the
    // stream; the lag absorbs the gaps between bursts, so the flow stays even.
    // Show a little slower than the stream arrives (speedFactor), the eye
    // follows that more easily; early on, before the rate is known, steer
    // toward the lag target so the first lines do not crawl.
    const pace = schedule.rate === 0
      ? Math.max(charsPerSecond, backlog * 1_000 / correctionMs)
      : Math.max(charsPerSecond, schedule.rate * this.config.speedFactor)
    schedule.credit = Math.min(backlog, schedule.credit + pace / 1_000 * elapsed)
    const released = Math.max(1, Math.floor(schedule.credit))
    schedule.credit = Math.max(0, schedule.credit - released)
    schedule.shown = Math.min(text.length, schedule.shown + released)
    // Jump forward past the ceiling: the following tool card must not wait.
    if (text.length - schedule.shown > maxBacklogChars) {
      schedule.shown = text.length - maxBacklogChars
    }
    // Never split a surrogate pair: reveal the whole character this frame
    // (stepping back would stall the schedule forever on emoji-led text).
    if (schedule.shown > 0 && schedule.shown < text.length
      && isHighSurrogate(text.charCodeAt(schedule.shown - 1))
      && isLowSurrogate(text.charCodeAt(schedule.shown))) {
      schedule.shown += 1
    }
    return text.slice(0, schedule.shown)
  }

  /**
   * Drop one block's schedule (component unmount, Session switch).
   * @param key - the block identity passed to {@link display}.
   */
  release(key: string): void {
    this.schedules.delete(key)
  }

  /** Drop every schedule (plugin dispose, disconnect). */
  reset(): void {
    this.schedules.clear()
  }

  /** Insert with oldest-first eviction so a leak cannot grow without bound. */
  private track(key: string, schedule: BlockSchedule): void {
    this.schedules.set(key, schedule)
    while (this.schedules.size > this.config.maxBlocks) {
      const oldest = this.schedules.keys().next()
      if (oldest.done === true) return
      this.schedules.delete(oldest.value)
    }
  }
}

// ---- 包装官方 assistant-step 渲染器 ----

const SLOT = 'conversation.chat.node'
const KEY = 'assistant-step'

interface StoredEntry {
  component: unknown
  options: { key?: string; priority?: number }
  inject?: ((...args: never[]) => Record<string, unknown>) | undefined
  children?: Readonly<Record<string, unknown>> | undefined
}

interface AssistantBlock { kind: string; text?: string }
interface AssistantNode {
  key: string
  data: { status: string; blocks: readonly AssistantBlock[] }
}

/** 诊断：控制台里看 window.__dshQolSmooth（是否注册上、注册失败原因、包装渲染次数）。 */
const diag = { registered: false, error: null as string | null, renders: 0, borrowed: false }
;(globalThis as { __dshQolSmooth?: typeof diag }).__dshQolSmooth = diag

/** 全页一个调度器，所有正在流式的正文块共用。 */
const smoother = new SmoothedTextDisplay()

/** 流式期间、有块还没追上时，每帧重画一次。 */
function useFrameTick(active: boolean, behind: { current: boolean }): void {
  const [, bump] = useReducer((n: number) => n + 1, 0)
  useEffect(() => {
    if (!active) return undefined
    let frame = requestAnimationFrame(function tick() {
      if (behind.current) bump()
      frame = requestAnimationFrame(tick)
    })
    return () => { cancelAnimationFrame(frame) }
  }, [active, behind])
}

/**
 * 在 assistant-step 格子上叠一层平滑包装。
 * @param ctx - 浏览器侧上下文（slots）。
 * @returns 撤掉包装的函数。
 */
export function installSmoothText(ctx: Context): () => void {
  const host = ctx.slots as unknown as { entries(key: string): readonly StoredEntry[] }
  let self: unknown
  /** 官方（被我们压住的）那一条：同格子里除自己以外 priority 最低的。 */
  const original = (): StoredEntry | undefined => host.entries(SLOT)
    .filter(entry => entry.options.key === KEY && entry.component !== self)
    .sort((a, b) => (a.options.priority ?? 0) - (b.options.priority ?? 0))[0]

  /**
   * 子插槽（思考过程正文、消息图片）只能有一个声明者，官方条目已经声明，我们再声明
   * 会注册失败；可官方组件经我们条目的 renderSlot 渲染它们，而 renderSlot 调用时检查
   * 的是我们条目的 children。所以不在注册时声明，渲染前把官方条目的声明挂到我们条目上。
   */
  const borrowChildren = (entry: StoredEntry): void => {
    const mine = host.entries(SLOT).find(candidate => candidate.component === self)
    if (mine === undefined || mine.children !== undefined || entry.children === undefined) return
    try { mine.children = entry.children; diag.borrowed = true } catch { /* 改不了就让官方组件报错退位，官方照常渲染 */ }
  }

  function SmoothAssistantStep(props: Record<string, unknown>): ReactNode {
    const entry = original()
    if (entry !== undefined) borrowChildren(entry)
    diag.renders += 1
    const node = props['node'] as AssistantNode
    const streaming = node.data.status === 'running'
    const behind = useRef(false)
    // 流式结束后若还有没放完的字，继续逐帧放完。
    useFrameTick(streaming || behind.current, behind)
    const keys = useRef<string[]>([])
    useEffect(() => () => { for (const key of keys.current) smoother.release(key) }, [])
    let catchingUp = false
    const blocks = node.data.blocks.map((block, i) => {
      if (block.kind !== 'text' || typeof block.text !== 'string') return block
      const key = `${node.key}:${String(i)}`
      if (!keys.current.includes(key)) keys.current.push(key)
      const shown = smoother.display({ key, text: block.text, streaming })
      if (shown !== block.text) catchingUp = true
      return shown === block.text ? block : { ...block, text: shown }
    })
    behind.current = catchingUp
    if (entry === undefined) return null
    return createElement(entry.component as (p: Record<string, unknown>) => ReactNode, {
      ...props,
      node: { ...node, data: { ...node.data, blocks } },
    })
  }
  self = SmoothAssistantStep

  // 要绑定 ctx.slots：register 内部用 this（单独取出来调用会丢掉 this）。
  const register = (ctx.slots.register as unknown as (options: Record<string, unknown>, component: unknown) => () => void).bind(ctx.slots)
  return ctx.slots.inject(SLOT as never, () => {
    try {
      const dispose = register({
        name: SLOT,
        key: KEY,
        priority: -1,
        // 与官方条目相同的文案空间与 inject（hooks.presentation）；子插槽见 borrowChildren。
        locale: 'chat',
        inject: (...args: never[]) => original()?.inject?.(...args) ?? {},
      }, SmoothAssistantStep)
      diag.registered = true
      return dispose
    } catch (error) {
      diag.error = error instanceof Error ? error.message : String(error)
      throw error
    }
  }) as unknown as () => void
}
