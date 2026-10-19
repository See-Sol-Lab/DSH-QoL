/**
 * 撤销官方沙箱留下的 Low 完整性标签（及同时加的能力 SID 授权、Everyone 拒绝删除子项）。
 *
 * 官方 sandbox-local 在一次运行里把「这个工作区已授权」记在内存里，运行期间撤掉会让
 * 后续命令报权限错误。所以只在官方不记得的时候撤：Host 启动时（沙箱还没跑命令），
 * 以及 Host 进程真正退出时（process 'exit'，不是插件卸载——插件被关掉或重装时 Host
 * 还在跑）。每个工作区一次 Windows PowerShell 子进程，见 assets/revoke-low-label.ps1。
 */

import { execFile, execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { EOL, tmpdir } from 'node:os'
import { join, sep } from 'node:path'
import SCRIPT from '../assets/revoke-low-label.ps1'

/**
 * 收集要检查的工作区根目录：官方注册表里的工作区、官方会话投影缓存里出现过的会话工作
 * 目录（工作区被移出注册表后也还在），以及本插件以前见过的目录（只增不减，存在
 * `<home>/deepseekgui/low-label-roots.json`）。合并后写回记录。
 * @param home - DSH home。
 * @param registered - 注册表里当前的工作区路径。
 * @returns 去重后的目录（仍存在的）。
 */
function trimSeparators(path: string): string {
  let end = path.length
  while (end > 0 && (path[end - 1] === '/' || path[end - 1] === sep)) end -= 1
  return path.slice(0, end)
}

/** 在会话投影缓存的 JSON 里找第一个字符串型的 cwd 字段（结构是官方内部的，不依赖具体层级）。 */
function findCwd(value: unknown): string | undefined {
  if (value === null || typeof value !== 'object') return undefined
  const record = value as Record<string, unknown>
  if (typeof record['cwd'] === 'string') return record['cwd']
  for (const child of Object.values(record)) {
    const found = findCwd(child)
    if (found !== undefined) return found
  }
  return undefined
}

export function collectRoots(home: string, registered: readonly string[]): string[] {
  const seen = new Map<string, string>()
  const add = (path: unknown): void => {
    if (typeof path !== 'string' || path === '') return
    const trimmed = trimSeparators(path)
    const key = trimmed.toLowerCase()
    if (!seen.has(key)) seen.set(key, trimmed)
  }
  for (const path of registered) add(path)
  const cacheDir = join(home, 'storages', 'session_projcache', 'sessions')
  try {
    for (const name of readdirSync(cacheDir)) {
      if (!name.endsWith('.json')) continue
      try {
        add(findCwd(JSON.parse(readFileSync(join(cacheDir, name), 'utf8'))))
      } catch { /* 读不了的缓存跳过 */ }
    }
  } catch { /* 还没有缓存目录 */ }
  const memory = join(home, 'deepseekgui', 'low-label-roots.json')
  try {
    const remembered: unknown = JSON.parse(readFileSync(memory, 'utf8'))
    if (Array.isArray(remembered)) for (const path of remembered) add(path)
  } catch { /* 第一次 */ }
  const all = [...seen.values()]
  try {
    mkdirSync(join(home, 'deepseekgui'), { recursive: true })
    writeFileSync(memory, `${JSON.stringify(all, null, 2)}${EOL}`, 'utf8')
  } catch { /* 记录失败不影响清理 */ }
  return all.filter(path => existsSync(path))
}

/** 一个工作区的清理结果（脚本输出的那行 JSON）。 */
export interface LowLabelResult {
  root: string
  marked: boolean
  removedSids: string[]
  denyRemoved: number
  labelReset: boolean
  backup: string | null
  error: string | null
}

const POWERSHELL = join(process.env.SystemRoot ?? 'C:\\Windows', 'System32', 'WindowsPowerShell', 'v1.0', 'powershell.exe')

function scriptPath(): string {
  const path = join(tmpdir(), 'dsh-qol-revoke-low-label.ps1')
  writeFileSync(path, SCRIPT, 'utf8')
  return path
}

function argsFor(script: string, root: string, backupDir: string): string[] {
  const stamp = new Date().toISOString().replace(/[:.]/gu, '-')
  const name = root.replace(/[\\/:]+/gu, '_').replace(/^_+|_+$/gu, '')
  return ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', script,
    '-Root', root, '-Backup', join(backupDir, `${name}-${stamp}.txt`)]
}

function parse(root: string, stdout: string, failure?: unknown): LowLabelResult {
  const line = stdout.trim().split(/\r?\n/u).at(-1) ?? ''
  try {
    return JSON.parse(line) as LowLabelResult
  } catch {
    const error = failure instanceof Error ? failure.message : (line === '' ? 'no output' : line)
    return { root, marked: false, removedSids: [], denyRemoved: 0, labelReset: false, backup: null, error }
  }
}

/** 把这一轮结果写进 `<home>/deepseekgui/low-label-cleanup.json`，方便查问题。 */
function record(home: string, reason: string, results: LowLabelResult[]): void {
  try {
    const dir = join(home, 'deepseekgui')
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'low-label-cleanup.json'), JSON.stringify({ at: new Date().toISOString(), reason, results }, null, 2) + '\n', 'utf8')
  } catch { /* 记录失败不影响清理 */ }
}

/**
 * 依次清理一组工作区（异步，用于启动时）。
 * @param roots - 工作区根目录。
 * @param home - DSH home（备份与记录放在这里）。
 * @returns 每个工作区的结果。
 */
export async function revokeLowLabels(roots: readonly string[], home: string): Promise<LowLabelResult[]> {
  const script = scriptPath()
  const backupDir = join(home, 'deepseekgui', 'acl-backups')
  const results: LowLabelResult[] = []
  for (const root of roots) {
    results.push(await new Promise<LowLabelResult>((resolve) => {
      execFile(POWERSHELL, argsFor(script, root, backupDir), { timeout: 10 * 60_000, windowsHide: true }, (error, stdout) => {
        resolve(parse(root, String(stdout), error ?? undefined))
      })
    }))
  }
  record(home, 'startup', results)
  return results
}

/**
 * 同步清理（用于进程退出时，'exit' 回调里只能做同步的事）。
 * @param roots - 工作区根目录。
 * @param home - DSH home。
 * @returns 每个工作区的结果。
 */
export function revokeLowLabelsSync(roots: readonly string[], home: string): LowLabelResult[] {
  const script = scriptPath()
  const backupDir = join(home, 'deepseekgui', 'acl-backups')
  const results = roots.map((root) => {
    try {
      return parse(root, execFileSync(POWERSHELL, argsFor(script, root, backupDir), { timeout: 2 * 60_000, windowsHide: true, encoding: 'utf8' }))
    } catch (error) {
      return parse(root, '', error)
    }
  })
  record(home, 'exit', results)
  return results
}
