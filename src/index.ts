/**
 * 生活质量包的 Host 面：两个「不可热改」上报项的开关代理。
 *
 * 官方设置表单只开放 volatile 字段。插件清单（plugin-package-inventory-deepseek
 * 的 enabled）和反馈上传（session-telemetry-otel 的 mode）不是 volatile，界面
 * 写不了。所以界面写的是本包自己的两个 volatile 字段；这里收到
 * loader/volatile-update 后，用官方 configEditor 把目标条目的配置写进 profile
 * 补丁，Loader 随即按普通配置变更重载那个条目，不用重启应用。
 *
 * 关 = 让目标条目回到组合层（本包 cordis.patch.yml 里的「关」）：configEditor
 * 发现新配置等于继承值时会自己删掉 profile 里的覆盖，不留多余记录。
 * @module @see-sol-lab/dsh-qol
 */

import type { Context, Volatile } from '@deepseek-ai/cordis'
import z from '@deepseek-ai/schemastery'
import { AsyncResource } from 'node:async_hooks'
// Type-only: the ctx.configEditor merge.
import type {} from '@deepseek-ai/dsh-config-editor'
// Type-only: the ctx.workspaceRegistry merge.
import type {} from '@deepseek-ai/dsh-workspace'
import { defaultDshHome } from '@deepseek-ai/dsh-home-paths'
import { revokeLowLabels, revokeLowLabelsSync } from './low-label.ts'

export const name = 'dsh-qol'
export const inject = ['configEditor']

/** 本包自己的开关字段；volatile 才会出现在官方设置表单里。 */
export interface Config {
  inventory: Volatile<boolean>
  feedback: Volatile<boolean>
  /** DSH 启动与退出时撤掉官方沙箱留在工作区上的 Low 标签。默认开。 */
  revokeLowLabel: Volatile<boolean>
}

export const Config = z.object({
  inventory: z.boolean().default(false).volatile(),
  feedback: z.boolean().default(false).volatile(),
  revokeLowLabel: z.boolean().default(true).volatile(),
})

type Key = 'inventory' | 'feedback'

/** 本包字段 → 官方条目、字段、开 / 关时的值。 */
const TARGETS: Record<Key, { entry: string; field: string; on: unknown; off: unknown }> = {
  inventory: { entry: 'plugin-package-inventory-deepseek', field: 'enabled', on: true, off: false },
  feedback: { entry: 'session-telemetry-otel', field: 'mode', on: 'FEEDBACK_ONLY', off: 'DISABLED' },
}

/**
 * 挂上开关同步：收到 volatile 变更、以及启动时，把本包开关对齐到官方条目。
 * @param ctx - 插件上下文，带 configEditor。
 * @param config - 本包配置，两个 volatile 开关。
 */
export function apply(ctx: Context, config: Config): void {
  let running: Promise<void> = Promise.resolve()
  // 设置表单的写入在官方 HMR 事务里触发 volatile-update，事务标记经 AsyncLocalStorage
  // 传给后续所有异步步骤，直接 configEditor.edit 会被判成嵌套事务。apply 时（事务外）
  // 绑定一个入口，同步从这里出去，再正常排进官方的事务队列。
  const outside = AsyncResource.bind((task: () => void) => { setTimeout(task, 0) })

  async function syncOne(key: Key): Promise<void> {
    const target = TARGETS[key]
    const entry = ctx.configEditor.entries().find(item => item.options.id === target.entry)
    if (entry === undefined) return
    const want = config[key].get() === true ? target.on : target.off
    const current = (entry.options.config as Record<string, unknown> | undefined)?.[target.field]
    if (current === want) return
    await ctx.configEditor.edit(entry, raw => ({ ...raw, [target.field]: want }))
    console.info(`[dsh-qol] ${target.entry}.${target.field} -> ${JSON.stringify(want)}`)
  }

  function sync(): void {
    // 串行：两次快速切换不能并发去写同一份 profile 补丁。
    running = running.then(async () => {
      for (const key of Object.keys(TARGETS) as Key[]) {
        try { await syncOne(key) }
        catch (error) { console.warn(`[dsh-qol] sync ${key} failed: ${error instanceof Error ? error.message : String(error)}`) }
      }
    })
  }

  ctx.on('loader/volatile-update', () => { outside(sync) })
  // 启动时也对齐一次：开关与官方条目不一致时（上次同步失败、手改过配置）自动补上。
  outside(sync)

  if (process.platform === 'win32') applyLowLabelRevoke(ctx, config)
}

/** 进程级的退出清理状态：每次 apply 刷新，退出钩子只注册一次。 */
interface ExitState { enabled: () => boolean; roots: () => readonly string[]; home: string }
const EXIT_STATE = Symbol.for('dsh-qol.low-label.exit')
type GlobalWithExit = typeof globalThis & { [EXIT_STATE]?: ExitState }

function dshHome(): string {
  const home = process.env.DSH_HOME
  return home === undefined || home === '' ? defaultDshHome() : home
}

/**
 * Low 标签撤销：Host 启动时清一遍已登记的工作区；Host 进程真正退出时再清一遍。
 * 退出钩子挂在 process 'exit' 上而不是插件卸载上：Host 关闭时会先卸载插件、后退出
 * 进程，而插件在运行中被关掉或重装时 Host 还在跑——那时撤掉，官方沙箱内存里以为
 * 授权还在，后续命令会报权限错误。
 * @param ctx - 插件上下文。
 * @param config - 本包配置（revokeLowLabel 开关）。
 */
function applyLowLabelRevoke(ctx: Context, config: Config): void {
  ctx.inject(['workspaceRegistry'], (scoped) => {
    const roots = (): string[] => scoped.workspaceRegistry.list().map(workspace => workspace.path)
    const home = dshHome()
    const state = globalThis as GlobalWithExit
    const first = state[EXIT_STATE] === undefined
    // 记下最后一次看到的工作区列表：退出时注册表可能已经卸载了。
    let lastRoots: readonly string[] = roots()
    state[EXIT_STATE] = { enabled: () => config.revokeLowLabel.get() !== false, roots: () => { try { lastRoots = roots() } catch { /* 已卸载 */ } return lastRoots }, home }
    if (first) {
      process.once('exit', () => {
        const current = (globalThis as GlobalWithExit)[EXIT_STATE]
        if (current === undefined || !current.enabled()) return
        revokeLowLabelsSync(current.roots(), current.home)
      })
    }
    if (config.revokeLowLabel.get() === false) return
    void revokeLowLabels(roots(), home).then((results) => {
      const changed = results.filter(result => result.marked)
      if (changed.length > 0) console.info(`[dsh-qol] revoked sandbox Low labels on ${changed.map(result => result.root).join(', ')}`)
      for (const result of results) if (result.error !== null) console.warn(`[dsh-qol] Low label revoke failed for ${result.root}: ${result.error}`)
    })
  })
}
