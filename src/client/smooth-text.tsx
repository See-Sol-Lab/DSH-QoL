/**
 * 流式正文平滑显示（移植自 DeepSeekGUI B6-P4 的 SmoothedTextDisplay）。
 *
 * 模型的正文是一阵一阵到的，官方收到多少就画多少，看起来一顿一顿。这里不改数据：
 * 收到的文字照单全收，只决定这一帧画出多少前缀，按阅读速度匀速放出，落后太多就
 * 往前跳；流式一结束立刻显示完整原文。
 *
 * GUI 是改官方 ui-chat 加了个 chatTextDisplay 服务；官方桌面端没有这个口子，所以
 * 在 conversation.chat.node 的 assistant-step 格子上用更低的 priority 叠一个包装：
 * 原样带上官方条目的文案空间、子插槽声明和 inject，渲染时调官方 AssistantNodeView，
 * 只把 node.data.blocks 里 text 块换成当前帧的前缀。包装崩了，插槽框架会让它退位，
 * 官方组件照常渲染。
 */

import { createElement, useEffect, useReducer, useRef, type ReactNode } from 'react'
import type { Context } from '@deepseek-ai/cordis'

/** Display budget for streaming assistant prose; pure presentation constants. */
interface SmoothTextConfig {
  /** Characters released per second at the comfortable reading pace. */
  readonly charsPerSecond: number
  /** Hard per-frame ceiling (high-refresh displays). */
  readonly maxCharsPerFrame: number
  /** Backlog beyond which the display jumps forward instead of catching up. */
  readonly maxBacklogChars: number
  /** Blocks tracked at once; the oldest schedule is dropped first. */
  readonly maxBlocks: number
}

/** Default budget: ~220 chars/s, at most 24 chars per frame, 600-char ceiling. */
const DEFAULT_SMOOTH_TEXT: SmoothTextConfig = {
  charsPerSecond: 220,
  maxCharsPerFrame: 24,
  maxBacklogChars: 600,
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
    if (!streaming) {
      this.schedules.delete(key)
      return text
    }
    const nowMs = this.now()
    let schedule = this.schedules.get(key)
    if (schedule !== undefined && !text.startsWith(schedule.target)) {
      // The authority replaced this block's text (edit or regeneration):
      // show the new text whole rather than replaying a different history.
      this.schedules.set(key, { shown: text.length, target: text, lastMs: nowMs, credit: 0 })
      return text
    }
    if (schedule === undefined) {
      schedule = { shown: 0, target: text, lastMs: nowMs, credit: 0 }
      this.track(key, schedule)
    }
    schedule.target = text
    const elapsed = Math.max(0, nowMs - schedule.lastMs)
    schedule.lastMs = nowMs
    const backlog = text.length - schedule.shown
    if (backlog <= 0) return text
    const { charsPerSecond, maxCharsPerFrame, maxBacklogChars } = this.config
    // Reading pace, capped per frame so a high-refresh display cannot outrun
    // it; at least one character per call keeps progress monotone. Unspent
    // budget carries over, so the average rate does not lose a fraction each
    // frame and a long reply still lands on a predictable schedule.
    schedule.credit = Math.min(maxBacklogChars, schedule.credit + (charsPerSecond / 1_000) * elapsed)
    const released = Math.max(1, Math.min(maxCharsPerFrame, Math.floor(schedule.credit)))
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
}

interface AssistantBlock { kind: string; text?: string }
interface AssistantNode {
  key: string
  data: { status: string; blocks: readonly AssistantBlock[] }
}

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
  const host = ctx.slots as unknown as { entriesOf(key: string): readonly StoredEntry[] }
  let self: unknown
  /** 官方（被我们压住的）那一条：同格子里除自己以外 priority 最低的。 */
  const original = (): StoredEntry | undefined => host.entriesOf(SLOT)
    .filter(entry => entry.options.key === KEY && entry.component !== self)
    .sort((a, b) => (a.options.priority ?? 0) - (b.options.priority ?? 0))[0]

  function SmoothAssistantStep(props: Record<string, unknown>): ReactNode {
    const entry = original()
    const node = props['node'] as AssistantNode
    const streaming = node.data.status === 'running'
    const behind = useRef(false)
    useFrameTick(streaming, behind)
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

  const register = ctx.slots.register as unknown as (options: Record<string, unknown>, component: unknown) => () => void
  return ctx.slots.inject(SLOT as never, () => register({
    name: SLOT,
    key: KEY,
    priority: -1,
    // 与官方条目相同：文案空间、两个子插槽、inject（hooks.presentation）。
    locale: 'chat',
    children: {
      'conversation.chat.reasoning.body': { kind: 'single', scope: 'session' },
      'conversation.chat.message.images': { kind: 'single', scope: 'session' },
    },
    inject: (...args: never[]) => original()?.inject?.(...args) ?? {},
  }, SmoothAssistantStep)) as unknown as () => void
}
