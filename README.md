# DeepSeekGUI 生活质量包

给 DeepSeek Harness 官方桌面端补上 DeepSeekGUI 的体验细节，作为 DeepSeekGUI 老用户换到官方客户端后的过渡，以后也长期维护。

## 0.2.0

- 设置里新增「生活质量包」分区：四项官方上报（桌面产品统计、会话日志、插件清单、反馈上传）默认全关，由用户自己打开。
- 四项都能当场开关。桌面产品统计、会话日志官方支持热改；插件清单、反馈上传由本包后台经官方 configEditor 改配置，官方随即重载那个组件，不用重启。

## 本地安装（开发用）

完全退出官方桌面端后：

```bash
dsh plugin --profile desktop add link:E:/DeepSeekGUI-QoL
```

或者在官方桌面端的「插件」页用本地路径安装。
