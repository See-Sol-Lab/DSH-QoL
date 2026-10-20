import { defaultDshHome } from '@deepseek-ai/dsh-home-paths'

/** 生效的 DSH home：官方桌面端不一定设置 DSH_HOME，没有时用官方默认位置（~/.dsh）。 */
export function dshHome(): string {
  const home = process.env.DSH_HOME
  return home === undefined || home === '' ? defaultDshHome() : home
}
