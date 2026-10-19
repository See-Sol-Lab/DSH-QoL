/** 系统通知的浏览器侧注册：侧栏底部挂一个不显示的监听组件。 */
import type { Context } from '@deepseek-ai/cordis'
import type { SessionId } from '@deepseek-ai/dsh-session/types'
// Type-only: ctx.uiWorkspace 与 sidebar.footer.action 插槽。
import type {} from '@deepseek-ai/dsh-client-ui-workspace/client'
import type {} from '@deepseek-ai/dsh-client-ui-layout/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import type {} from '@deepseek-ai/dsh-api-job-controller/client'
import { NotificationWatcher, type NotificationWatcherProps } from './NotificationWatcher.tsx'
import { NS_NOTIFY, en, zh, type NotifyKey } from './locales.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    'dsh.qol.notify': NotifyKey
  }
}

/**
 * 挂上通知监听。后台工作列表来自官方 jobs 服务，按可选依赖取：缺了就不挂，不拖累其他功能。
 * @param ctx - 浏览器侧插件上下文。
 */
export function applyNotify(ctx: Context): void {
  ctx.effect(() => ctx.locale.register(NS_NOTIFY, { zh, en }), 'dsh-qol: notify dictionaries')
  ctx.inject(['jobs', 'slots', 'uiWorkspace'], (scoped) => {
    const jobs = (scoped.get('jobs') as { state: NotificationWatcherProps['jobs'] }).state
    scoped.slots.inject('sidebar.footer.action', () =>
      scoped.slots.register({
        name: 'sidebar.footer.action',
        id: 'dsh-qol-notify',
        order: 20,
        locale: NS_NOTIFY,
        inject: () => ({ jobs, openSession: (sessionId: SessionId): void => { scoped.uiWorkspace.openSession(sessionId) } }),
      }, NotificationWatcher))
  })
}
