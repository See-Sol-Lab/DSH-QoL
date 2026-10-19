# DeepSeekGUI 生活质量包

给 DeepSeek Harness 官方桌面端补上 DeepSeekGUI 的体验细节，作为 DeepSeekGUI 老用户换到官方客户端后的过渡，以后也长期维护。

## 0.1.0（原型）

- 设置里新增「生活质量包」分区：四项官方上报（桌面产品统计、会话日志、插件清单、反馈上传）默认全关，由用户自己打开。
- 桌面产品统计和会话日志可以当场开关；插件清单和反馈上传改了要重启，本版先保持关闭。

## 本地安装（开发用）

完全退出官方桌面端后：

```bash
dsh plugin --profile desktop add link:E:/DeepSeekGUI-QoL
```

或者在官方桌面端的「插件」页用本地路径安装。
