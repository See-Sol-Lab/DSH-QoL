// 把 src/host 下的 TypeScript 打成官方运行时能直接加载的 ESM。
//
// 规则只有一条：官方的 @deepseek-ai/* 包一律 external，运行时用官方桌面端自带的
// （核对过都在 app.asar 里）；我们自己从 DeepSeekGUI 搬来、官方没有的几个包
// （OWN 里列的）打进产物。多个入口共用的代码由 splitting 拆成公共 chunk，
// 保证 git / pull-request 的服务定义只有一份。
import { build } from 'esbuild'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const host = join(root, 'src', 'host')

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
    'git-local': join(host, 'git-local', 'index.ts'),
    'pull-request-gh': join(host, 'pull-request-gh', 'index.ts'),
    'coding-tools': join(host, 'coding-tools', 'index.ts'),
  },
  outdir: join(root, 'lib', 'host'),
  bundle: true,
  splitting: true,
  format: 'esm',
  platform: 'node',
  target: 'node22',
  plugins: [resolveOwn],
  logLevel: 'info',
})
