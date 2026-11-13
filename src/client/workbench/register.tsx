/**
 * 工作台的浏览器侧注册（从 DeepSeekGUI 搬来）：
 * - 对话 / 轨迹旁边的「改动」「Git」「记忆」三个标签（并行工作区在 Git 里）；
 * - 设置里的「全局记忆」分区；
 * - git_* / pr_* 工具在对话里的结果卡片。
 * 数据与写入都经 Host 的 workbenchInspector 远程方法（见 desk.ts）。
 */

import type { Context } from '@deepseek-ai/cordis'
import type { SessionId } from '@deepseek-ai/dsh-session/types'
import type { WorkbenchUsage } from '@see-sol-lab/dsh-qol/types'
// Type-only: ctx.remote、ctx.sessions、ctx.conversation 与各插槽的类型合并。
import type {} from '@deepseek-ai/dsh-api-remotes/client'
import type {} from '@deepseek-ai/dsh-client-ui-tool/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import inspectorRemote from '@see-sol-lab/dsh-qol/remote'
import { ChangesView } from './views/ChangesView.tsx'
import { GitView } from './views/GitView.tsx'
import { MemoryView } from './views/MemoryView.tsx'
import { MemorySettingsSection } from './memory/MemorySettingsSection.tsx'
import { GitPrToolRow } from './cards/tool-rows.tsx'
import { instructionSender } from './instructions.ts'
import { createWorkbenchDesk } from './desk.ts'
import { NS_TOOLS, en as toolsEn, zh as toolsZh, type ToolsKey } from './locales-tools.ts'
import { NS_INSPECTOR, en as inspectorEn, zh as inspectorZh, type InspectorKey } from './locales-inspector.ts'
import { NS_MEMORY, en as memoryEn, zh as memoryZh, type MemoryKey } from './locales-memory.ts'
import { en as workbenchEn, zh as workbenchZh, type WorkbenchKey } from './locales-workbench.ts'
import { ArchivedSessionsSection } from './ArchivedSessionsSection.tsx'
import { NS_USAGE, UsageSection, en as usageEn, zh as usageZh, type UsageKey } from './UsageSection.tsx'
import { createSessionDeleter, DeleteSessionDialog, DeleteSessionMenuItem } from './session-delete.tsx'
// Type-only: ctx.uiWorkspace（恢复与打开会话）and the session menu slot.
import type {} from '@deepseek-ai/dsh-client-ui-workspace/client'
// Type-only: the shell.overlay slot.
import type {} from '@deepseek-ai/dsh-client-ui-layout/client'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    'dsh.qol.tools': ToolsKey
    'dsh.qol.inspector': InspectorKey
    'dsh.qol.memory': MemoryKey
    'dsh.qol.workbench': WorkbenchKey
    'dsh.qol.usage': UsageKey
  }
}

/** 本包接管结果卡片的工具名。 */
const GIT_PR_TOOL_KEYS = [
  'git_status', 'git_diff', 'git_stage', 'git_unstage', 'git_revert',
  'git_commit', 'git_push_preview', 'git_push',
  'pr_availability', 'pr_existing', 'pr_create',
] as const

/** 对话 / 轨迹旁边的标签，按顺序。 */
const VIEWS = [
  { id: 'dsh-qol-changes', order: 20, label: 'view.changes', component: ChangesView },
  { id: 'dsh-qol-git', order: 21, label: 'view.git', component: GitView },
] as const

const MEMORY_VIEW_ORDER = 23
const MEMORY_SECTION_ORDER = 46
/** 用量分区：生活质量包（45）之前。 */
const USAGE_SECTION_ORDER = 44
/** 已归档会话分区：排在官方分区之后、我们其他分区之前。 */
const ARCHIVED_SECTION_ORDER = 30
/** 会话菜单里「删除」的位置（只对已归档的行出现）。 */
const DELETE_MENU_ORDER = 500

/** 工作台需要的官方服务。 */
export const workbenchInject = ['slots', 'locale', 'remote', 'sessions', 'conversation', 'uiWorkspace'] as const

/**
 * 挂上工作台：远程客户端、文案、三个标签、全局记忆分区与工具卡片。
 * @param ctx - 浏览器侧插件上下文。
 */
export async function applyWorkbench(ctx: Context): Promise<void> {
  const unmountInspector = await ctx.remote.$mount(inspectorRemote)
  ctx.effect(() => () => { void unmountInspector() }, 'dsh-qol: inspector remote')
  ctx.effect(() => ctx.locale.register(NS_TOOLS, { zh: toolsZh, en: toolsEn }), 'dsh-qol: tool dictionaries')
  ctx.effect(() => ctx.locale.register(NS_INSPECTOR, { zh: inspectorZh, en: inspectorEn }), 'dsh-qol: inspector dictionaries')
  ctx.effect(() => ctx.locale.register(NS_MEMORY, { zh: memoryZh, en: memoryEn }), 'dsh-qol: memory dictionaries')
  ctx.effect(() => ctx.locale.register('dsh.qol.workbench', { zh: workbenchZh, en: workbenchEn }), 'dsh-qol: workbench dictionaries')
  ctx.effect(() => ctx.locale.register(NS_USAGE, { zh: usageZh, en: usageEn }), 'dsh-qol: usage dictionaries')
  const t = ctx.locale.bind(NS_INSPECTOR)
  const tm = ctx.locale.bind(NS_MEMORY)
  // 插槽回调给的是普通字符串的会话 ID；发指令要带品牌的 SessionId。
  const instructions = (sessionId: string) => ({ submitInstruction: instructionSender(ctx, sessionId as SessionId) })

  // 工具结果卡片：每个接管的工具名一行。
  ctx.slots.inject('tool.call.toolview', function* () {
    for (const key of GIT_PR_TOOL_KEYS) {
      yield ctx.slots.register({ name: 'tool.call.toolview', key, locale: NS_TOOLS, inject: instructions }, GitPrToolRow)
    }
  })

  // 标签与设置分区要拿到 remote.workbenchInspector 子服务：Cordis 只把它交给声明了
  // 它的作用域，而挂载发生在 apply 里，所以在这里开一个子作用域。
  await ctx.inject(['slots', 'remote.workbenchInspector'], (scoped) => {
    const inspector = scoped.remote.workbenchInspector
    const desk = createWorkbenchDesk(inspector)
    scoped.slots.inject('conversation.view', function* () {
      for (const entry of VIEWS) {
        yield scoped.slots.register({
          name: 'conversation.view',
          id: entry.id,
          order: entry.order,
          locale: NS_INSPECTOR,
          label: () => t(entry.label),
          inject: (sessionId: string) => ({ ...instructions(sessionId), inspector, desk }),
        }, entry.component)
      }
      yield scoped.slots.register({
        name: 'conversation.view',
        id: 'dsh-qol-memory',
        order: MEMORY_VIEW_ORDER,
        locale: NS_INSPECTOR,
        label: () => t('view.memory'),
        inject: (sessionId: string) => ({ ...instructions(sessionId), inspector, desk, tm }),
      }, MemoryView)
    })
    scoped.slots.inject('settings.section', () =>
      scoped.slots.register({
        name: 'settings.section',
        id: 'dsh-qol-memory',
        order: MEMORY_SECTION_ORDER,
        locale: NS_MEMORY,
        label: () => tm('nav.memory'),
        inject: () => ({ desk }),
      }, MemorySettingsSection))

    // 用量：Host 带官方账号令牌取数，这里只拿聚合值。语言跟界面。
    const tu = ctx.locale.bind(NS_USAGE)
    const loadUsage = async (): Promise<WorkbenchUsage> => {
      const result = await inspector.accountUsage(/[一-鿿]/u.test(tu('nav')) ? 'zh' : 'en', new AbortController().signal)
      if (!result.ok) throw new Error(result.error.message)
      return result.value
    }
    scoped.slots.inject('settings.section', () =>
      scoped.slots.register({
        name: 'settings.section',
        id: 'dsh-qol-usage',
        order: USAGE_SECTION_ORDER,
        locale: NS_USAGE,
        label: () => tu('nav'),
        inject: () => ({ load: loadUsage }),
      }, UsageSection))

    // 已归档的会话：官方只在侧栏「视图选项」筛选里混着显示，也不能删除。设置里单列一页，每行可恢复并
    // 打开、可删除；会话菜单的「删除」只对已归档的行出现。删除先确认，由 Host inspector 完成，只删已归档
    // 且没在加载的会话。
    const deleteSession = createSessionDeleter(inspector, () => ctx.locale.bind('dsh.qol.workbench')('sessionDelete.busy'))
    scoped.slots.inject('settings.section', () =>
      scoped.slots.register({
        name: 'settings.section',
        id: 'dsh-qol-archived',
        order: ARCHIVED_SECTION_ORDER,
        locale: 'dsh.qol.workbench',
        label: () => ctx.locale.bind('dsh.qol.workbench')('archived.nav'),
        inject: () => ({
          restore: (sessionId: SessionId) => ctx.uiWorkspace.unarchiveSession(sessionId),
          open: (sessionId: SessionId): void => { ctx.uiWorkspace.openSession(sessionId) },
          deleteSession,
        }),
      }, ArchivedSessionsSection))
    scoped.slots.inject('sidebar.workspaces.session.menu.item', () =>
      scoped.slots.register({
        name: 'sidebar.workspaces.session.menu.item',
        id: 'dsh-qol-delete',
        locale: 'dsh.qol.workbench',
        order: DELETE_MENU_ORDER,
      }, DeleteSessionMenuItem))
    scoped.slots.inject('shell.overlay', () =>
      scoped.slots.register({
        name: 'shell.overlay',
        id: 'dsh-qol-session-delete',
        locale: 'dsh.qol.workbench',
        inject: () => ({ deleteSession }),
      }, DeleteSessionDialog))
  })
}
