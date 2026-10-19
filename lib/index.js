// 生活质量包的 Host 面：两个「不可热改」上报项的开关代理。
//
// 官方设置表单只开放 volatile 字段。插件清单（plugin-package-inventory-deepseek
// 的 enabled）和反馈上传（session-telemetry-otel 的 mode）不是 volatile，界面
// 写不了。所以界面写的是本包自己的两个 volatile 字段；这里收到
// loader/volatile-update 后，用官方 configEditor 把目标条目的配置写进 profile
// 补丁，Loader 随即按普通配置变更重载那个条目，不用重启应用。
//
// 关 = 让目标条目回到组合层（本包 cordis.patch.yml 里的「关」）：configEditor
// 发现新配置等于继承值时会自己删掉 profile 里的覆盖，不留多余记录。
import z from '@deepseek-ai/schemastery'
import { AsyncResource } from 'node:async_hooks'

export const name = 'deepseekgui-qol'
export const inject = ['configEditor']

export const Config = z.object({
  inventory: z.boolean().default(false).volatile(),
  feedback: z.boolean().default(false).volatile(),
})

// 本包字段 → 官方条目、字段、开 / 关时的值。
const TARGETS = {
  inventory: { entry: 'plugin-package-inventory-deepseek', field: 'enabled', on: true, off: false },
  feedback: { entry: 'session-telemetry-otel', field: 'mode', on: 'FEEDBACK_ONLY', off: 'DISABLED' },
}

export function apply(ctx, config) {
  const logger = typeof ctx.logger === 'function' ? ctx.logger('deepseekgui-qol') : console
  let running = Promise.resolve()
  // 设置表单的写入在官方 HMR 事务里触发 volatile-update，事务标记经 AsyncLocalStorage
  // 传给后续所有异步步骤，直接 configEditor.edit 会被判成嵌套事务。apply 时（事务外）
  // 绑定一个入口，同步从这里出去，再正常排进官方的事务队列。
  const outside = AsyncResource.bind(task => { setTimeout(task, 0) })

  async function syncOne(key) {
    const target = TARGETS[key]
    const entry = ctx.configEditor.entries().find(item => item.options.id === target.entry)
    if (entry === undefined) return
    const want = config[key].get() === true ? target.on : target.off
    const current = entry.options.config === undefined ? undefined : entry.options.config[target.field]
    if (current === want) return
    await ctx.configEditor.edit(entry, current => ({ ...current, [target.field]: want }))
    logger.info(`${target.entry}.${target.field} -> ${JSON.stringify(want)}`)
  }

  function sync() {
    // 串行：两次快速切换不能并发去写同一份 profile 补丁。
    running = running.then(async () => {
      for (const key of Object.keys(TARGETS)) {
        try { await syncOne(key) }
        catch (error) { logger.warn(`sync ${key} failed: ${error && error.message || error}`) }
      }
    })
    return running
  }

  ctx.on('loader/volatile-update', () => { outside(() => { void sync() }) })
  // 启动时也对齐一次：开关与官方条目不一致时（上次同步失败、手改过配置）自动补上。
  outside(() => { void sync() })
}
