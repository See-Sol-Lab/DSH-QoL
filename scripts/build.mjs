// 把 src 下的 TypeScript 打成官方运行时能直接加载的产物。
//
// Host 面（Node）：官方的 @deepseek-ai/* 包一律 external，运行时用官方桌面端自带
// 的（核对过都在 app.asar 里）；我们自己从 DeepSeekGUI 搬来、官方没有的几个包
// （OWN 里列的）打进产物。多个入口共用的代码由 splitting 拆进 lib/chunks。
//
// 浏览器面：官方 client 运行时只认 window.__ModuleLoader__.load({ id, factory }) 的
// 自注册形状，factory 拿到 loader 的 require。所以先打成 CommonJS（react 外置，
// 留成 require('react')），再包上这层外壳写进 lib/client.js。
import { build } from 'esbuild'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'src')
const host = join(src, 'host')
const pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'))

// 包名（含子路径）→ 本仓库源码。源码里沿用 DeepSeekGUI 的包名，搬运时不用改 import。
const OWN = {
  '@deepseek-ai/dsh-git': join(host, 'git', 'index.ts'),
  '@deepseek-ai/dsh-git/types': join(host, 'git', 'types.ts'),
  '@deepseek-ai/dsh-pull-request': join(host, 'pull-request', 'index.ts'),
  '@deepseek-ai/dsh-pull-request/types': join(host, 'pull-request', 'types.ts'),
}

const resolveOwn = {
  name: 'own-or-external',
  setup(b) {
    b.onResolve({ filter: /^@deepseek-ai\// }, args => OWN[args.path] !== undefined
      ? { path: OWN[args.path] }
      : { path: args.path, external: true })
  },
}

await build({
  absWorkingDir: root,
  entryPoints: {
    'index': join(src, 'index.ts'),
    'host/git-local': join(host, 'git-local', 'index.ts'),
    'host/pull-request-gh': join(host, 'pull-request-gh', 'index.ts'),
    'host/coding-tools': join(host, 'coding-tools', 'index.ts'),
    'host/workbench-inspector': join(host, 'workbench-inspector', 'index.ts'),
    'host/memory': join(host, 'memory', 'index.ts'),
  },
  outdir: join(root, 'lib'),
  chunkNames: 'chunks/[name]-[hash]',
  bundle: true,
  splitting: true,
  format: 'esm',
  platform: 'node',
  target: 'node22',
  external: ['zod'],
  loader: { '.md': 'text' },
  plugins: [resolveOwn],
  logLevel: 'info',
})

// Typert 远程接口描述：由 DeepSeekGUI 仓库里的官方生成器产出、包名换成本包后放在
// src/generated（官方生成器只认官方单仓库结构）。官方 typert-loader 从本包的
// ./typert 导出登记 workbenchInspector 的远程方法；浏览器面把 remote-client 打进 client.js。
for (const name of ['typert.host.js', 'typert.host.d.ts']) {
  await writeFile(join(root, 'lib', name), await readFile(join(src, 'generated', name)))
}

const client = await build({
  absWorkingDir: root,
  entryPoints: [join(src, 'client', 'index.tsx')],
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'browser',
  target: 'es2022',
  jsx: 'transform',
  external: ['react', '@deepseek-ai/*'],
  logLevel: 'info',
})
const body = client.outputFiles[0].text
await writeFile(join(root, 'lib', 'client.js'), [
  '// 构建产物，勿手改：源码在 src/client，由 scripts/build.mjs 生成。',
  'window.__ModuleLoader__.load({',
  `  id: ${JSON.stringify(pkg.name)},`,
  '  factory: (require) => {',
  '    var module = { exports: {} }',
  '    var exports = module.exports',
  body,
  "    Object.defineProperty(module.exports, Symbol.toStringTag, { value: 'Module' })",
  '    return module.exports',
  '  },',
  '})',
  '',
].join('\n'))
console.log('  lib/client.js  ' + (body.length / 1024).toFixed(1) + 'kb (wrapped)')
