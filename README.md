# DSH 生活质量包（DSH QoL Pack）

给 DeepSeek Harness（DSH）官方桌面端补上一批体验细节的插件。名字借自游戏里的 Quality of Life 更新：不加大玩法，把细节补齐。

## 来历

本插件源自 [DeepSeekGUI](https://github.com/See-Sol-Lab/DeepSeekGUI)。DeepSeekGUI 是基于 DSH 的社区桌面工作台，官方推出自己的桌面端以后，DeepSeekGUI 不再整体合并官方更新，而是把官方还没有的功能搬进这个插件，让老用户换到官方客户端后体验不变，也让其他 DSH 用户可以直接装上使用。

本插件是非官方社区作品，与 DeepSeek 无隶属关系。

## 现在有什么（0.3.0）

- **隐私与上报**：设置里的「生活质量包」分区。官方桌面端默认开启的四项上报（桌面产品统计、会话日志、插件清单、反馈上传）装上本包后默认全关，由用户自己开关，当场生效。
- **助手用的 Git 与 PR 工具**：`git_status`、`git_diff`、`git_stage`、`git_unstage`、`git_revert`、`git_commit`、`git_push_preview`、`git_push`、`pr_availability`、`pr_existing`、`pr_create`。写操作需要用户审批。

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

改完代码后重新构建，再执行一次上面的命令。
