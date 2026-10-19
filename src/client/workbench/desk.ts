/**
 * DSH-QoL：工作台的写入面。
 *
 * DeepSeekGUI 里这几件事经本机控制通道交给 Electron 主进程；官方桌面端没有那条
 * 通道，改由 Host 的 workbenchInspector 远程方法完成。「在文件管理器中定位」「用系统
 * 程序打开」这类只有桌面外壳能做的动作不在这里，界面上相应按钮不显示。
 */

import type { SessionId } from '@deepseek-ai/dsh-session/types'
import type { InspectorRemote as InspectorClient } from './views/shared.tsx'

/** 记忆读写与项目 AGENTS.md 生成。 */
export interface WorkbenchDesk {
  /** 读全局记忆：home 与全文（读不到或太大为 null）。 */
  globalMemory(): Promise<{ home: string; text: string | null }>
  /** 存全局记忆；文件在编辑期间被改过时拒绝。 */
  saveGlobalMemory(content: string, expected: string | null): Promise<void>
  /** 存项目记忆；文件在编辑期间被改过时拒绝。 */
  saveProjectMemory(sessionId: string, content: string, expected: string): Promise<void>
  /** 用随包模板生成项目 AGENTS.md，已存在则原样保留。 */
  createProjectAgents(sessionId: string, locale: 'zh' | 'en'): Promise<void>
}

/** 远程调用的结果信封：ok 时取值，失败时抛出带原文的错误。 */
function unwrap<T>(result: { ok: true; value: T } | { ok: false; error: { message: string } }): T {
  if (!result.ok) throw new Error(result.error.message)
  return result.value
}

/**
 * 用已挂载的 inspector 远程客户端实现写入面。
 * @param inspector - workbenchInspector 远程客户端。
 * @returns 工作台写入面。
 */
export function createWorkbenchDesk(inspector: InspectorClient): WorkbenchDesk {
  const signal = (): AbortSignal => new AbortController().signal
  return {
    async globalMemory() {
      return unwrap(await inspector.globalMemory(signal()))
    },
    async saveGlobalMemory(content, expected) {
      // 读不到的文件（null）不允许覆盖：拿一个永远对不上的值去比，让 Host 拒绝。
      unwrap(await inspector.saveGlobalMemory(content, expected ?? '\u0000unreadable', signal()))
    },
    async saveProjectMemory(sessionId, content, expected) {
      unwrap(await inspector.saveProjectMemory(sessionId as SessionId, content, expected, signal()))
    },
    async createProjectAgents(sessionId, locale) {
      unwrap(await inspector.createProjectAgents(sessionId as SessionId, locale, signal()))
    },
  }
}
