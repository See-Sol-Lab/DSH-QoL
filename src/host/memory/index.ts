/**
 * 记忆注入（从 DeepSeekGUI 搬来）：每次开会话窗口时，经官方 system-prompt 注入
 * 一份生活质量包说明和两份记忆——全局 `<DSH home>/memory.md`（用户编辑、助手只读）
 * 与项目 `<文件夹名>.memory.md`（助手用普通读写工具维护），内容随会话日志可追溯。
 * 注册逻辑与纯文本构建见 session-memory.ts。
 * @module @see-sol-lab/dsh-qol/memory
 */

import type { Context } from '@deepseek-ai/cordis'
// Type-only: the ctx.systemPrompt merge.
import type {} from '@deepseek-ai/dsh-system-prompt'
import { registerMemoryContext } from './session-memory.ts'

export const name = 'qol-memory'
export const inject = ['systemPrompt']

/**
 * 注册说明与记忆两个上下文段。
 * @param ctx - 插件上下文，带 systemPrompt。
 */
export function apply(ctx: Context): void {
  registerMemoryContext(ctx)
}
