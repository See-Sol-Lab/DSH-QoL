# DSH 生活质量包（DSH QoL Pack）

给 DeepSeek Harness（DSH）官方桌面端补上一批体验细节的插件。名字借自游戏里的 Quality of Life 更新：不加大玩法，把细节补齐。

## 来历

本插件源自 [DeepSeekGUI](https://github.com/See-Sol-Lab/DeepSeekGUI)。DeepSeekGUI 是基于 DSH 的社区桌面工作台，官方推出自己的桌面端以后，DeepSeekGUI 不再整体合并官方更新，而是把官方还没有的功能搬进这个插件，让老用户换到官方客户端后体验不变，也让其他 DSH 用户可以直接装上使用。

本插件是非官方社区作品，与 DeepSeek 无隶属关系。

## 现在有什么（0.6.0）

- **隐私与上报**：设置里的「生活质量包」分区。官方桌面端默认开启的四项上报（桌面产品统计、会话日志、插件清单、反馈上传）装上本包后默认全关，由用户自己开关，当场生效。
- **工作台视图**：对话、轨迹旁边多出「改动」「Git」「项目管理」「记忆」四个标签（并行工作区在 Git 里）。
- **记忆**：每次开会话把全局记忆（`<DSH home>/memory.md`）与项目记忆（工作区里的 `<文件夹名>.memory.md`）交给助手；设置里编辑全局记忆，记忆标签里编辑项目记忆、生成项目 AGENTS.md。
- **已归档会话**：设置里单独列出归档的会话，可恢复、打开。
- **会话导出**：会话菜单「导出为 Markdown」，可选是否包含工具调用与思考过程。
- **本地技能库**：设置「技能」里从文件夹、ZIP 或 Markdown 安装、卸载技能；「项目管理」标签里为这个项目选择启用哪些技能。
- **助手用的 Git 与 PR 工具**：`git_status`、`git_diff`、`git_stage`、`git_unstage`、`git_revert`、`git_commit`、`git_push_preview`、`git_push`、`pr_availability`、`pr_existing`、`pr_create`，对话里显示为结果卡片。写操作需要用户审批。

暂不可用：删除已归档会话（官方无删除接口，计划中）、在文件管理器中定位文件；技能库在另一个窗口里改动后，本窗口要手动刷新（官方不转发技能库的变化事件）。

## 远程接口描述（src/generated）

`workbenchInspector` 与 `skillManager` 的远程接口描述（合为一份）由官方 Typert 生成器产出。官方生成器只认官方单仓库结构，所以在 DeepSeekGUI 仓库里生成后拷来，包名换成 `@see-sol-lab/dsh-qol`。改了 inspector 的远程方法签名后要重新生成。

## 构建

```bash
pnpm install
pnpm run build
```

## 本地安装（开发用）

完全退出官方桌面端后，用复制方式安装。链接方式下，官方的共享包解析不到本包的子模块：

```bash
"D:\DSH官端\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add file:E:/DSH-QoL
```

改完代码后先 `pnpm run check`（类型检查加构建），再**先 remove 后 add**：版本号不变时 pnpm 认为已是最新，不会重新复制文件。

```bash
"D:\DSH官端
esources
"D:\DSH官端\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop remove @see-sol-lab/dsh-qol
```
