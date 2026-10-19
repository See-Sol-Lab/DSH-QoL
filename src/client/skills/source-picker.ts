/**
 * DSH-QoL：技能来源的系统选择框。
 *
 * DeepSeekGUI 由桌面主进程弹系统对话框并回传路径；官方桌面端在页面上暴露了两个
 * 现成接口，直接用：
 * - `__DSH_DIRECTORY_PICKER__.pick()`：系统文件夹选择框，返回本机路径；
 * - `__DSH_HOST_PATHS__.pathFor(file)`：网页文件选择框选中的文件对应的本机路径。
 * 两者都不在（普通浏览器里打开）时返回 null，界面退回「直接输入路径」。
 */

interface DesktopPickers {
  __DSH_DIRECTORY_PICKER__?: { pick(): Promise<string | null> }
  __DSH_HOST_PATHS__?: { pathFor(file: File): string }
}

/** 选一个技能来源：文件夹，或 ZIP / Markdown 文件。 */
export interface SourcePicker {
  pick(kind: 'directory' | 'file'): Promise<string | null>
}

/**
 * 读出当前页面能用的选择框。
 * @returns 选择器；页面上没有官方桌面接口时为 null。
 */
export function readSourcePicker(): SourcePicker | null {
  const pickers = window as unknown as DesktopPickers
  const directory = pickers.__DSH_DIRECTORY_PICKER__
  const paths = pickers.__DSH_HOST_PATHS__
  if (directory === undefined && paths === undefined) return null
  return {
    async pick(kind) {
      if (kind === 'directory') return directory === undefined ? null : await directory.pick()
      if (paths === undefined) return null
      return await new Promise<string | null>((resolve) => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.zip,.md,.markdown'
        input.addEventListener('change', () => {
          const file = input.files?.[0]
          const path = file === undefined ? '' : paths.pathFor(file)
          resolve(path === '' ? null : path)
        })
        input.addEventListener('cancel', () => { resolve(null) })
        input.click()
      })
    },
  }
}
