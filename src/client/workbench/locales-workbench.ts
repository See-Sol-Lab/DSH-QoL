/** `dsh.qol.workbench` namespace dictionaries: session delete. */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  'sessionDelete.menu': '删除会话',
  'sessionDelete.title': '删除这个会话？',
  'sessionDelete.desc': '「{title}」的对话记录和日志会从磁盘上删除。',
  'sessionDelete.warning': '删除后无法恢复。',
  'sessionDelete.action': '删除',
  'sessionDelete.cancel': '取消',
  'sessionDelete.close': '关闭',
  'sessionDelete.pending': '正在删除…',
  'sessionDelete.busy': '这个会话这次运行时打开过，还在加载中。重启 DSH 后再删除。',
} as const

/** The workbench namespace key union. */
export type WorkbenchKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'sessionDelete.menu': 'Delete session',
  'sessionDelete.title': 'Delete this session?',
  'sessionDelete.desc': 'The conversation and logs of “{title}” are erased from disk.',
  'sessionDelete.warning': 'This cannot be undone.',
  'sessionDelete.action': 'Delete',
  'sessionDelete.cancel': 'Cancel',
  'sessionDelete.close': 'Close',
  'sessionDelete.pending': 'Deleting…',
  'sessionDelete.busy': 'This session was opened during this run and is still loaded. Restart DSH, then delete it.',
} satisfies Record<WorkbenchKey, string>
