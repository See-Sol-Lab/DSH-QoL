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
// Type-only: the ctx.systemPrompt merge.
import type {} from '@deepseek-ai/dsh-system-prompt'
// Type-only: the ctx.llm merge.
import type {} from '@deepseek-ai/dsh-llm'
import { registerModelSight } from './host/model-sight.ts'
import { defaultDshHome } from '@deepseek-ai/dsh-home-paths'
import { collectRoots, revokeLowLabels, revokeLowLabelsSync } from './low-label.ts'
import { fixWorkspaceAccess } from './workspace-access.ts'
import { EOL } from 'node:os'
import SANDBOX_REVOKE_TEXT from '../assets/qol-sandbox-revoke.md'
import SANDBOX_RULES_TEXT from '../assets/qol-sandbox-rules.md'
import SANDBOX_ACCESS_TEXT from '../assets/qol-sandbox-access.md'

export const name = 'dsh-qol'
export const inject = ['configEditor']

/** 本包自己的开关字段；volatile 才会出现在官方设置表单里。 */
export interface Config {
  inventory: Volatile<boolean>
  feedback: Volatile<boolean>
  /** DSH 启动与退出时撤掉官方沙箱留在工作区上的 Low 标签。默认开。 */
  revokeLowLabel: Volatile<boolean>
  /** 生活质量包皮肤（底图 + 半透明 + 毛玻璃，浏览器侧读）。默认开。 */
  skin: Volatile<boolean>
  /** 给当前用户补上工作区的完全控制，让官方沙箱在非系统盘也能首次授权。默认开。 */
  fixWorkspaceAccess: Volatile<boolean>
}

export const Config = z.object({
  inventory: z.boolean().default(false).volatile(),
  feedback: z.boolean().default(false).volatile(),
  revokeLowLabel: z.boolean().default(true).volatile(),
  skin: z.boolean().default(true).volatile(),
  fixWorkspaceAccess: z.boolean().default(true).volatile(),
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

  // 每步告诉助手当前模型能不能看图（换成纯文本模型后别反复截图）。
  ctx.inject(['llm'], (scoped) => { registerModelSight(scoped, scoped.llm) })

  if (process.platform === 'win32') {
    applyLowLabelRevoke(ctx, config)
    applyWorkspaceAccess(ctx, config)
    applySandboxNote(ctx, config)
  }
}

/** 给助手的沙箱说明：开关开着时说明插件会撤标签；不论开关，碰到权限报错都先停下问用户。 */
const SANDBOX_NOTE_REVOKE = SANDBOX_REVOKE_TEXT.trimEnd()
const SANDBOX_NOTE_RULES = SANDBOX_RULES_TEXT.trimEnd()
const SANDBOX_NOTE_ACCESS = SANDBOX_ACCESS_TEXT.trimEnd()

/**
 * 每次组装系统提示时，按开关给出沙箱说明（新会话 / 新窗口生效）。
 * @param ctx - 插件上下文。
 * @param config - 本包配置。
 */
function applySandboxNote(ctx: Context, config: Config): void {
  ctx.inject(['systemPrompt'], (scoped) => {
    const systemPrompt = (scoped as unknown as { systemPrompt: {
      variable(name: string, provider: () => string): () => void
      context(section: { name: string; order: number; text: string }): () => void
    } }).systemPrompt
    scoped.effect(() => {
      const disposeVariable = systemPrompt.variable('dsh_qol_sandbox_note', () => [
        config.revokeLowLabel.get() === false ? undefined : SANDBOX_NOTE_REVOKE,
        config.fixWorkspaceAccess.get() === false ? undefined : SANDBOX_NOTE_ACCESS,
        SANDBOX_NOTE_RULES,
      ].filter(part => part !== undefined).join(EOL))
      // 排在生活质量包说明（999_999）之前、记忆（1_000_000）之前。
      const disposeSection = systemPrompt.context({ name: 'dsh-qol:sandbox', order: 999_998, text: '{{dsh_qol_sandbox_note}}' })
      return () => { disposeSection(); disposeVariable() }
    }, 'dsh-qol: sandbox note')
  })
}

/**
 * 工作区沙箱授权自动修复：启动时查全部工作区，之后每 5 秒看注册表有没有新工作区
 * （官方注册表没有变化通知）。开关关着时不查，打开后下一轮补上。
 * @param ctx - 插件上下文。
 * @param config - 本包配置（fixWorkspaceAccess 开关）。
 */
function applyWorkspaceAccess(ctx: Context, config: Config): void {
  ctx.inject(['workspaceRegistry'], (scoped) => {
    const home = dshHome()
    const done = new Set<string>()
    let running: Promise<void> = Promise.resolve()
    const check = (roots: readonly string[]): void => {
      if (config.fixWorkspaceAccess.get() === false) return
      const fresh = roots.filter(root => !done.has(root.toLowerCase()))
      if (fresh.length === 0) return
      for (const root of fresh) done.add(root.toLowerCase())
      running = running.then(async () => {
        for (const result of await fixWorkspaceAccess(fresh, home)) {
          if (result.changed) console.info(`[dsh-qol] granted Full control on ${result.root} for the sandbox`)
          // 失败不在本次运行里重试（原因多半一直在，重试只会每 5 秒起一个进程）；下次启动再查。
          if (result.error !== null) console.warn(`[dsh-qol] workspace access fix failed for ${result.root}: ${result.error}`)
        }
      })
    }
    const registered = (): string[] => scoped.workspaceRegistry.list().map(workspace => workspace.path)
    check(collectRoots(home, registered()))
    const timer = setInterval(() => { try { check(registered()) } catch { /* 注册表已卸载 */ } }, 5_000)
    scoped.effect(() => () => { clearInterval(timer) }, 'dsh-qol: workspace access watch')
  })
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
    const home = dshHome()
    const roots = (): string[] => collectRoots(home, scoped.workspaceRegistry.list().map(workspace => workspace.path))
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
