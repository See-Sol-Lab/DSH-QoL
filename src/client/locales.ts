/** 生活质量包的界面文案（中英同键）。 */

export const zh = {
  'nav': '生活质量包',
  'privacy.title': '隐私与上报',
  'privacy.intro': '下面四项是官方桌面端默认开启的上报。装了生活质量包后默认全部关闭，需要时自己打开。',
  'privacy.uninstall': '卸载生活质量包后，这四项会恢复官方默认（开启）。',
  'item.analytics': '桌面产品统计',
  'item.analytics.desc': '上报你在界面里的操作事件，附带设备 ID、账号 ID 和版本号。',
  'item.sessionLog': '会话日志',
  'item.sessionLog.desc': '每次请求官方模型时，附带整段会话记录，包括助手读过的文件内容和命令输出。',
  'item.inventory': '插件清单',
  'item.inventory.desc': '请求官方模型时，附带你启用了哪些插件和它们的版本。',
  'item.feedback': '反馈上传',
  'item.feedback.desc': '你点反馈或给回复打分时，上传截至当时的会话记录。',
  'state.on': '已开启',
  'state.off': '已关闭',
  'state.loading': '读取中…',
  'state.unavailable': '这一项现在读不到，生活质量包的后台部分可能没有加载成功。',
  'state.readonly': '这一项被更高层的配置锁定了，这里改不了。',
  'error.save': '没存上，已恢复成之前的状态。',
} as const

export type QolLocaleKey = keyof typeof zh

export const en: Record<QolLocaleKey, string> = {
  'nav': 'QoL Pack',
  'privacy.title': 'Privacy and reporting',
  'privacy.intro': 'The official desktop app turns these four kinds of reporting on by default. With the QoL Pack installed they are all off until you turn them on.',
  'privacy.uninstall': 'Uninstalling the QoL Pack restores the official defaults (on).',
  'item.analytics': 'Desktop product analytics',
  'item.analytics.desc': 'Reports your interface interactions with device ID, account ID and app version.',
  'item.sessionLog': 'Session log',
  'item.sessionLog.desc': 'Attaches the whole session record, including files the assistant read and command output, to every official model request.',
  'item.inventory': 'Plugin inventory',
  'item.inventory.desc': 'Attaches the names and versions of your enabled plugins to official model requests.',
  'item.feedback': 'Feedback upload',
  'item.feedback.desc': 'Uploads the session so far when you send feedback or rate a reply.',
  'state.on': 'On',
  'state.off': 'Off',
  'state.loading': 'Loading…',
  'state.unavailable': 'This setting cannot be read right now; the QoL Pack background part may have failed to load.',
  'state.readonly': 'A higher configuration layer locks this one; it cannot be changed here.',
  'error.save': 'Not saved; restored the previous state.',
}
