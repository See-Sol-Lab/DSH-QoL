// 应用内更新的自检：node scripts/check-updater.mjs（失败时抛错）。
import assert from 'node:assert/strict'

globalThis.__DSH_QOL_VERSION__ = '1.1.0'
const store = new Map()
globalThis.localStorage = { getItem: key => store.get(key) ?? null, setItem: (key, value) => { store.set(key, value) } }
const { createUpdater, failureDetail, isNewer, parseRelease } = await import('../src/client/update/updater.ts')

const prefix = 'https://github.com/See-Sol-Lab/DSH-QoL/releases/download/'
const url = `${prefix}v1.2.0/see-sol-lab-dsh-qol-1.2.0.tgz`

assert.equal(isNewer('1.10.0', '1.9.9'), true)
assert.equal(isNewer('v1.0.1', '1.0.1'), false)
assert.equal(isNewer('1.0.0', '1.0.1'), false)
assert.equal(isNewer('nope', '1.0.0'), false)

assert.deepEqual(parseRelease({ tag_name: 'v1.2.0', assets: [{ browser_download_url: url }] }), { version: '1.2.0', url })
// 链接不在本仓库 Release 下一律不认。
assert.equal(parseRelease({ tag_name: 'v9.0.0', assets: [{ browser_download_url: 'https://evil.example/x.tgz' }] }), undefined)
assert.equal(parseRelease({ tag_name: 'v9.0.0', assets: [{ browser_download_url: `${prefix}v9/x.exe` }] }), undefined)
assert.equal(parseRelease({ tag_name: 'v9.0.0', assets: [{ browser_download_url: `${prefix}../../../evil/see-sol-lab-dsh-qol-9.0.0.tgz` }] }), undefined)
assert.equal(parseRelease({ tag_name: 'v9.0.0', assets: [{ browser_download_url: `${prefix}v9.0.0/other.tgz` }] }), undefined)
assert.equal(parseRelease(null), undefined)

assert.equal(failureDetail({ application: 'failed', packageResult: { output: '[ERROR] fetch failed\nTypeError: x\n    at a (b)\n' } }), '[ERROR] fetch failed\nTypeError: x')
assert.equal(failureDetail({ application: 'failed', error: { code: 'already-installed' } }), 'already-installed')

const remote = (bundle, install) => ({
  listBundles: async () => ({ ok: true, value: [{ name: '@see-sol-lab/dsh-qol', ...bundle }] }),
  installBundle: install ?? (async () => ({ ok: true, value: { application: 'restart-required' } })),
  waitForInstall: async () => ({ ok: true, value: null }),
})
const release = { tag_name: 'v1.2.0', assets: [{ browser_download_url: url }] }
const github = async () => new Response(JSON.stringify(release))
const released = { version: '1.1.0', source: `${prefix}v1.1.0/see-sol-lab-dsh-qol-1.1.0.tgz` }

// 开发安装不查、不更新，不能被盖掉。
let updater = createUpdater(remote({ version: '1.1.0', source: 'file:E:/DSH-QoL' }), async () => { throw new Error('must not fetch') })
await updater.start(true)
assert.equal(updater.state().phase, 'unmanaged')

// 关掉自动检查就不联网。
store.clear()
updater = createUpdater(remote(released), async () => { throw new Error('must not fetch') })
await updater.start(false)
assert.equal(updater.state().phase, 'idle')

// 发现新版本 → 安装 → 等重启。
updater = createUpdater(remote(released), github)
await updater.start(true)
assert.equal(updater.state().phase, 'available')
await updater.install(updater.state().release)
assert.deepEqual(updater.state(), { phase: 'restart', version: '1.2.0' })

// 本地缓存里的链接不可信：不合格就重新查，不会拿去安装。
store.clear()
store.set('dsh-qol.update.lastCheck', String(Date.now()))
store.set('dsh-qol.update.release', JSON.stringify({ version: '9.0.0', url: 'https://evil.example/see-sol-lab-dsh-qol-9.0.0.tgz' }))
updater = createUpdater(remote(released), github)
await updater.start(true)
assert.equal(updater.state().release.url, url)

// 磁盘上已经是新版、运行的还是旧版：提示重启。
store.clear()
updater = createUpdater(remote({ ...released, version: '1.2.0' }), github)
await updater.start(true)
assert.equal(updater.state().phase, 'restart')

// 热替换或重启之后，新版启动时对上标记：提示一次「已更新」。
store.clear()
store.set('dsh-qol.update.pending', '1.1.0')
updater = createUpdater(remote(released), github)
await updater.start(true)
assert.deepEqual(updater.state(), { phase: 'updated', version: '1.1.0' })
updater = createUpdater(remote(released), github)
await updater.start(true)
assert.notEqual(updater.state().phase, 'updated')

// 安装失败：标记清掉，可重试。
store.clear()
updater = createUpdater(remote(released, async () => ({ ok: true, value: { application: 'failed', packageResult: { output: '[ERROR] fetch failed' } } })), github)
await updater.start(true)
await updater.install(updater.state().release)
assert.equal(updater.state().phase, 'install-failed')
assert.equal(store.get('dsh-qol.update.pending'), '')

console.log('updater ok')
