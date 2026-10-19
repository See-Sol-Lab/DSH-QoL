/**
 * 删除会话（住户 2026-09-22 定）：官方 0.1.7 把归档收回侧边栏的「视图选项 →
 * 显示已归档」，行菜单只有置顶 / 重命名 / 分叉 / 归档——**没有删除**。我们
 * 退役了自己的归档设置页，这条能力就得回到官方的那条行菜单上。
 *
 * 只对已归档的会话出现：归档是「我不要它了」的那一步，删除是同一条路的
 * 终点；没归档的会话误点一下就没了不合适。
 *
 * 官方 harness 从持久化到 RPC 都没有会话删除，所以真正动盘的是 DeepSeekGUI
 * 主进程的回环控制桥（session-delete 命令：先让 Harness 从列表里忘掉它、
 * 再删文件）。桥的地址和一次性凭证在页面 URL 的 query 里，所以：
 *
 * - 这一项只在 DeepSeekGUI 自己开的窗口里存在。用外部浏览器连同一个
 *   harness，归档照看照恢复，但没有删除入口——删盘上的数据是桌面宿主的
 *   权限，不是任何能连上 harness 的页面的权限。
 * - 行消失是因为会话离开了会话列表（主进程先广播 api-session/removed），
 *   不是这个组件把它藏起来。组件自己不记「删过谁」，所以不会留幽灵行
 *   （2026-09-11 人工测试 #20 / #21 的教训）。
 *
 * 菜单项点完菜单就没了，确认对话框因此挂在 shell.overlay 上：它要活得比
 * 它所在的那个菜单久。两者之间靠这个模块里的一个待确认槽位通信。
 */
import { useState, useSyncExternalStore } from 'react'
import {
  Button, IconTrashOutlineRegular, MenuItemButton, Modal,
} from '@deepseek-ai/dsh-client-ui-primitives'
import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type { SessionId } from '@deepseek-ai/dsh-session/types'
import type { InspectorRemote } from './views/shared.tsx'

/** 一次删除请求：对话框要显示标题，所以和 id 一起带上。 */
interface PendingDelete {
  sessionId: SessionId
  title: string
}

let pending: PendingDelete | null = null
const listeners = new Set<() => void>()

/** 待确认槽位：菜单项写、对话框读，同一个页面里只会有一个。 */
const pendingStore = {
  subscribe(listener: () => void): () => void {
    listeners.add(listener)
    return () => { listeners.delete(listener) }
  },
  snapshot(): PendingDelete | null { return pending },
  set(next: PendingDelete | null): void {
    pending = next
    for (const listener of listeners) listener()
  },
}

/**
 * 删除通道：解析成功就能删，失败抛错——调用方要能看见失败。
 * @param sessionId - 要删除的会话 id。
 * @returns 删除完成。
 */
export type SessionDeleter = (sessionId: string) => Promise<void>

/**
 * DSH-QoL：用 Host inspector 的 deleteSession 删除（只删已归档、没在加载的会话）。
 * DeepSeekGUI 原来经桌面控制通道交给主进程。
 * @param inspector - workbenchInspector 远程客户端。
 * @returns 删除函数。
 */
export function createSessionDeleter(inspector: InspectorRemote): SessionDeleter {
  return async (sessionId: string): Promise<void> => {
    const result = await inspector.deleteSession(sessionId as SessionId, 'dsh-qol')
    if (!result.ok) throw new Error(result.error.message)
  }
}

/** 注入面：删除通道本身。默认从页面 URL 读桥，测试可以塞一个假的。 */
export interface DeleteSessionInjected {
  /** 删除一个会话的数据；null = 这个页面删不了（不是 DeepSeekGUI 窗口）。 */
  deleteSession: SessionDeleter | null
}

/** 行菜单项的 props。 */
export type DeleteSessionMenuItemProps =
  PropsRuntime<'sidebar.workspaces.session.menu.item'>
  & PropsLocale<'dsh.qol.workbench'>
  & DeleteSessionInjected

/**
 * 行菜单项（order 500，排在归档之后）：只对已归档的行出现。
 * @param props - 行的 owner 份额、菜单开合状态、文案座位与删除通道。
 * @returns 菜单里的一行；不适用时不渲染。
 */
export function DeleteSessionMenuItem({
  sessionId, displayTitle, useMenuOpenState, useWorkspaces, deleteSession, t,
}: DeleteSessionMenuItemProps) {
  const [, setMenuOpen] = useMenuOpenState()
  // DSH-QoL：官方 hook 的类型链引用了不在 npm 上的 dsh-client-runtime，这里标出所需形状。
  const archived = useWorkspaces((state: { archivedSessionIds: readonly SessionId[] }) => state.archivedSessionIds.includes(sessionId as SessionId))
  if (deleteSession === null || !archived) return null
  return (
    <MenuItemButton
      icon={<IconTrashOutlineRegular size={14} />}
      onSelect={() => {
        setMenuOpen(false)
        pendingStore.set({ sessionId, title: displayTitle })
      }}
    >
      {t('sessionDelete.menu')}
    </MenuItemButton>
  )
}

/** 确认对话框的 props。 */
export type DeleteSessionDialogProps =
  PropsRuntime<'shell.overlay'>
  & PropsLocale<'dsh.qol.workbench'>
  & DeleteSessionInjected

/**
 * shell.overlay 上的确认框：没有待确认的删除时什么都不渲染。
 * @param props - 文案座位与删除通道。
 * @returns 打开的对话框，或 null。
 */
export function DeleteSessionDialog({ deleteSession, t }: DeleteSessionDialogProps) {
  const request = useSyncExternalStore(pendingStore.subscribe, pendingStore.snapshot, pendingStore.snapshot)
  if (request === null || deleteSession === null) return null
  return <DeleteConfirmForm key={request.sessionId} request={request} deleteSession={deleteSession} t={t} />
}

/** 一次请求的对话框：进行中与失败状态随它一起消失。 */
function DeleteConfirmForm({ request, deleteSession, t }: {
  request: PendingDelete
  deleteSession: SessionDeleter
  t: DeleteSessionDialogProps['t']
}) {
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const close = () => {
    if (deleting) return
    pendingStore.set(null)
  }
  const confirm = () => {
    setDeleting(true)
    setError(null)
    // 成功时行随会话列表一起消失（主进程先广播移除），这里只负责收起对话框。
    deleteSession(request.sessionId).then(() => {
      setDeleting(false)
      pendingStore.set(null)
    }).catch((reason: unknown) => {
      // 删了个空的必须看得见：对话框留着，原因写在上面，不只进 console。
      setDeleting(false)
      setError(reason instanceof Error ? reason.message : String(reason))
    })
  }
  return (
    <Modal
      open
      onClose={close}
      closeLabel={t('sessionDelete.close')}
      title={t('sessionDelete.title')}
      description={t('sessionDelete.desc', { title: request.title })}
      footer={(
        <>
          <Button variant="outline" disabled={deleting} onClick={close}>{t('sessionDelete.cancel')}</Button>
          {/* 危险动作用官方的错误色，和官方归档确认里的删除按钮同一语义。 */}
          <Button
            variant="outline"
            style={{ color: 'var(--dsw-alias-state-error-primary)' }}
            disabled={deleting}
            onClick={confirm}
          >
            {t('sessionDelete.action')}
          </Button>
        </>
      )}
    >
      <div>{t('sessionDelete.warning')}</div>
      {deleting && <div role="status">{t('sessionDelete.pending')}</div>}
      {error !== null && <div role="alert">{error}</div>}
    </Modal>
  )
}
