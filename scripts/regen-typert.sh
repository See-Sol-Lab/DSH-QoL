#!/usr/bin/env bash
# 重新生成 Typert 远程接口描述（src/generated/typert.*）。
#
# 官方生成器只认官方单仓库结构，所以借 DeepSeekGUI 仓库跑：临时把本包的
# workbench-inspector（含 skill-manager）放进 GUI 的 packages/api/workbench-inspector，
# 跑生成器，拷回产物并把包名换成本包，最后把 GUI 仓库还原干净。
# 用法：bash scripts/regen-typert.sh [GUI 仓库路径，默认 /e/DeepSeekGUI]
set -euo pipefail

QOL=$(cd "$(dirname "$0")/.." && pwd)
GUI=${1:-/e/DeepSeekGUI}
P=packages/api/workbench-inspector
Q=$QOL/src/host/workbench-inspector

cd "$GUI"
if [ -n "$(git status --short)" ]; then echo "GUI 仓库不干净，先处理：$GUI" >&2; exit 1; fi

restore() {
  cd "$GUI"
  git checkout -- $P/src $P/tsconfig.json packages/api/skill-manager/package.json packages/api/skill-manager/src/index.ts
  git clean -fdq -- $P/src
  # 生成器也重写了其他包（含临时改名的 skill-manager）的产物：在还原后的源码上再跑一遍。
  echo "还原 GUI 产物…"
  timeout 600 node_modules/.bin/tsx scripts/generate-typert.ts 2>&1 | tail -1
  if [ -n "$(git status --short)" ]; then echo "警告：GUI 仓库没还原干净" >&2; git status --short >&2; fi
}
trap restore EXIT

cp "$Q"/*.ts $P/src/
mkdir -p $P/src/skill-manager && cp "$Q"/skill-manager/*.ts $P/src/skill-manager/

py -I -X utf8 - "$GUI" <<'PYEOF'
import json, sys
gui = sys.argv[1].replace('/e/', 'E:/')
p = gui + '/packages/api/workbench-inspector/src/index.ts'
s = open(p, encoding='utf-8').read()
a = "import AGENTS_PROJECT_ZH from '../../../assets/AGENTS.project.zh.md'\nimport AGENTS_PROJECT_EN from '../../../assets/AGENTS.project.en.md'"
assert s.count(a) == 1
s = s.replace(a, "const AGENTS_PROJECT_ZH = ''\nconst AGENTS_PROJECT_EN = ''")
s += "\nexport { SkillManager } from './skill-manager/index.ts'\n"
open(p, 'w', encoding='utf-8', newline='\n').write(s)
p = gui + '/packages/api/workbench-inspector/tsconfig.json'
s = open(p, encoding='utf-8').read()
add = ['../../core/agent', '../../core/scope', '../../preset/agent-preset-registry', '../../skill/skill',
       '../../skill/skill-filesystem', '../../storage/storage-domain', '../../util/home-paths']
a = '    { "path": "../../workspace/workspace" }'
assert s.count(a) == 1
s = s.replace(a, a + ''.join(f',\n    {{ "path": "{x}" }}' for x in add))
open(p, 'w', encoding='utf-8', newline='\n').write(s)
# 原 skill-manager 包的远程接口会和本包合并进来的撞名：临时摘掉它的导出、改命名空间。
p = gui + '/packages/api/skill-manager/package.json'
d = json.loads(open(p, encoding='utf-8').read())
d['exports'].pop('./typert', None); d['exports'].pop('./remote', None)
open(p, 'w', encoding='utf-8', newline='\n').write(json.dumps(d, indent=2) + '\n')
p = gui + '/packages/api/skill-manager/src/index.ts'
s = open(p, encoding='utf-8').read()
a = "super(ctx, 'skillManager', { namespace: 'skillManager' })"
assert s.count(a) == 1
s = s.replace(a, "super(ctx, 'skillManagerOriginalTmp', { namespace: 'skillManagerOriginalTmp' })")
open(p, 'w', encoding='utf-8', newline='\n').write(s)
PYEOF

timeout 600 node_modules/.bin/tsx scripts/generate-typert.ts 2>&1 | tail -5

for f in typert.host.js typert.host.d.ts typert.remote-client.js typert.remote-client.d.ts; do
  sed 's#@deepseek-ai/dsh-workbench-inspector#@see-sol-lab/dsh-qol#g' $P/lib/$f > "$QOL"/src/generated/$f
done
echo "已生成到 $QOL/src/generated"
