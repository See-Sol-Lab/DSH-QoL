/**
 * 工作区沙箱授权自动修复（移植 DeepSeekGUI 172c348eff 的修法）。
 *
 * 官方沙箱第一次授权工作区时要给文件夹打 Low 标签，这需要当前用户对它有「更改所有者」
 * 权限。非系统盘（D:、E: …）下的文件夹默认只继承到「修改」，于是授权报 Win32 5、
 * 沙箱命令全部失败，官方只能让用户手动跑诊断修复。GUI 当年在官方授权代码里补了
 * 「被拒就先给用户完全控制再试」；插件改不了官方代码，所以提前做：DSH 启动时检查
 * 注册表里的全部工作区，之后发现新工作区再查，缺完全控制的给当前用户补上（继承到子项）。
 * 每个工作区一次 Windows PowerShell 子进程，见 assets/grant-workspace-access.ps1。
 */

import { execFile } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, parse, resolve } from 'node:path'
import SCRIPT from '../assets/grant-workspace-access.ps1'
import { lastJsonLine, POWERSHELL, psArgs } from './low-label.ts'

/** 一个工作区的修复结果（脚本输出的那行 JSON）。 */
export interface WorkspaceAccessResult {
  root: string
  changed: boolean
  error: string | null
}

/** 不存在的目录、盘符根目录和系统目录不碰：给整个盘或系统目录补完全控制太重了。 */
function skipped(root: string): boolean {
  if (!existsSync(root)) return true
  const full = resolve(root).toLowerCase()
  if (full === parse(full).root) return true
  const system = [process.env.SystemRoot, process.env.ProgramFiles, process.env['ProgramFiles(x86)'], process.env.ProgramData]
  return system.some(dir => dir !== undefined && dir !== '' && (full + '\\').startsWith(resolve(dir).toLowerCase() + '\\'))
}

function runOne(root: string): Promise<WorkspaceAccessResult> {
  return new Promise((done) => {
    execFile(POWERSHELL, psArgs('dsh-qol-grant-workspace-access.ps1', SCRIPT, ['-Root', root]),
      { timeout: 10 * 60_000, windowsHide: true }, (error, stdout) => {
        const parsed = lastJsonLine<WorkspaceAccessResult>(String(stdout), error ?? undefined)
        done('value' in parsed ? parsed.value : { root, changed: false, error: parsed.error })
      })
  })
}

/**
 * 依次检查并修复一组工作区（异步，大文件夹首次补权限要传播一会儿）。
 * @param roots - 工作区根目录。
 * @param home - DSH home（结果记在 `<home>/deepseekgui/workspace-access.json`）。
 * @returns 每个工作区的结果。
 */
export async function fixWorkspaceAccess(roots: readonly string[], home: string): Promise<WorkspaceAccessResult[]> {
  const results: WorkspaceAccessResult[] = []
  for (const root of roots) if (!skipped(root)) results.push(await runOne(root))
  if (results.length === 0) return results
  try {
    const dir = join(home, 'deepseekgui')
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'workspace-access.json'), JSON.stringify({ at: new Date().toISOString(), results }, null, 2) + '\n', 'utf8')
  } catch { /* 记录失败不影响修复 */ }
  return results
}
