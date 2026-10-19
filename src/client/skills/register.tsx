/**
 * 技能库的浏览器侧注册（从 DeepSeekGUI 搬来）：设置里的「技能」分区，与对话旁的
 * 「项目管理」标签（这个项目启用哪些技能）。数据走 Host 的 skillManager 远程方法；
 * 远程接口描述与工作台共用一份，挂载由工作台完成，这里不重复挂。
 */

import type { Context } from '@deepseek-ai/cordis'
// Type-only: ctx.remote.
import type {} from '@deepseek-ai/dsh-api-remotes/client'
import type {} from '@see-sol-lab/dsh-qol/remote'
import { SkillsSection } from './SkillsSection.tsx'
import { ProjectView } from './ProjectView.tsx'
import { readSourcePicker } from './source-picker.ts'
import { en, NS_SKILLS, zh, type SkillsKey } from './locales.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    'dsh.qol.skills': SkillsKey
  }
}

/** 设置里技能分区的位置：已归档会话（30）之后。 */
const SKILLS_SECTION_ORDER = 31
/** 「项目管理」标签：Git（21）与记忆（23）之间。 */
const PROJECT_VIEW_ORDER = 22

/**
 * 挂上技能库界面。需在远程接口挂载之后调用。
 * @param ctx - 浏览器侧插件上下文。
 */
export async function applySkills(ctx: Context): Promise<void> {
  ctx.effect(() => ctx.locale.register(NS_SKILLS, { zh, en }), 'dsh-qol: skills dictionaries')
  const t = ctx.locale.bind(NS_SKILLS)
  const picker = readSourcePicker()
  // 一个 Host 订阅分发给所有打开的页面；页面按自己的生命周期订阅、退订。
  const listeners = new Set<() => void>()
  const onChange = (listener: () => void): () => void => {
    listeners.add(listener)
    return () => { listeners.delete(listener) }
  }
  const notify = (): void => { for (const listener of [...listeners]) listener() }
  await ctx.inject(['slots', 'remote.skillManager'], (scoped) => {
    // DSH-QoL：DeepSeekGUI 把 Host 的 skill-manager/change 事件加进了官方的转发白名单，
    // 官方原版没有，事件到不了浏览器。这个事件只在安装、卸载、改项目选择之后发，而这
    // 三个操作都从本界面发起，所以在这里包一层：调用成功后本地通知各页面刷新。
    // 代价：另一个窗口不会自动刷新。
    const remote = scoped.remote.skillManager
    const MUTATING = new Set(['applyImport', 'uninstall', 'setProjectSelection'])
    const skills = new Proxy(remote, {
      get(target, key, receiver) {
        const value: unknown = Reflect.get(target, key, receiver)
        if (typeof key !== 'string' || !MUTATING.has(key) || typeof value !== 'function') return value
        return async (...args: unknown[]) => {
          const result = await (value as (...a: unknown[]) => Promise<{ ok: boolean }>).apply(target, args)
          if (result.ok) notify()
          return result
        }
      },
    })
    scoped.slots.inject('settings.section', () =>
      scoped.slots.register({
        name: 'settings.section',
        id: 'dsh-qol-skills',
        order: SKILLS_SECTION_ORDER,
        locale: NS_SKILLS,
        label: () => t('nav.skills'),
        inject: () => ({ skills, picker, onChange }),
      }, SkillsSection))
    scoped.slots.inject('conversation.view', () =>
      scoped.slots.register({
        name: 'conversation.view',
        id: 'dsh-qol-skills-project',
        order: PROJECT_VIEW_ORDER,
        locale: NS_SKILLS,
        label: () => t('view.project'),
        inject: (_sessionId: string) => ({ skills, onChange }),
      }, ProjectView))
  })
}
