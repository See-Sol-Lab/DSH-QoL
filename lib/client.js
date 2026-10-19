// 生活质量包的浏览器侧产物。
//
// 形状是官方 client 运行时的契约：产物经 window.__ModuleLoader__ 自注册，
// factory 收到 loader 的 require，从中取 react；官方服务经 inject 注入 ctx。
// 手写产物，不接打包器。
//
// 第一项：「设置 → 生活质量包」里的隐私与上报开关。每个开关对应官方的一个
// Host 条目，经 ctx.configForms.get(条目 id) 读写；打开 = set 一个值写进用户
// profile 补丁，关闭 = unset，回到本包组合层里的「关」。
window.__ModuleLoader__.load({
  id: '@see-sol-lab/dsh-qol',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })

    var React = require('react')
    var h = React.createElement

    var NS = 'dsh.qol'

    var STRINGS = {
      zh: {
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
        'state.restartOnly': '这一项现在读不到，生活质量包的后台部分可能没有加载成功。',
        'state.readonly': '这一项被更高层的配置锁定了，这里改不了。',
        'error.save': '没存上，已恢复成之前的状态。',
      },
      en: {
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
        'state.restartOnly': 'This setting cannot be read right now; the QoL Pack background part may have failed to load.',
        'state.readonly': 'A higher configuration layer locks this one; it cannot be changed here.',
        'error.save': 'Not saved; restored the previous state.',
      },
    }

    // 每项：官方 Host 条目 id、字段、怎么判断「开」、打开时写什么。
    var ITEMS = [
      { key: 'analytics', entry: 'product-analytics', field: 'enabled', onValue: true, isOn: function (v) { return v.enabled === true } },
      { key: 'sessionLog', entry: 'session-log-deepseek', field: 'enabled', onValue: true, isOn: function (v) { return v.enabled === true } },
      // 这两项官方不可热改：界面写本包自己的 volatile 字段，由 Host 面（lib/index.js）
      // 经 configEditor 改官方条目，官方随即重载那个组件。
      { key: 'inventory', entry: 'dsh-qol', field: 'inventory', onValue: true, isOn: function (v) { return v.inventory === true } },
      { key: 'feedback', entry: 'dsh-qol', field: 'feedback', onValue: true, isOn: function (v) { return v.feedback === true } },
    ]

    var S = {
      section: { display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', lineHeight: '22px', color: 'var(--dsw-alias-label-primary)' },
      title: { fontSize: '15px', lineHeight: '22px', fontWeight: 600 },
      note: { fontSize: '12px', lineHeight: '18px', color: 'var(--dsw-alias-label-tertiary)' },
      card: { display: 'flex', flexDirection: 'column', border: '1px solid var(--dsw-alias-border-l1)', borderRadius: '16px', padding: '4px 16px' },
      row: { display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0' },
      rowDivider: { borderTop: '1px solid var(--dsw-alias-border-l1)' },
      text: { display: 'flex', flexDirection: 'column', gap: '2px', flex: '1 1 auto', minWidth: 0 },
      error: { fontSize: '12px', lineHeight: '18px', color: 'var(--dsw-alias-state-error-primary)' },
      track: { position: 'relative', flex: '0 0 auto', width: '36px', height: '20px', borderRadius: '10px', border: 'none', padding: 0, cursor: 'pointer', transition: 'background 120ms' },
      knob: { position: 'absolute', top: '2px', width: '16px', height: '16px', borderRadius: '8px', background: '#fff', transition: 'left 120ms' },
    }

    function useForm(form) {
      return React.useSyncExternalStore(
        function (listener) { return form.subscribe(listener) },
        function () { return form.getSnapshot() },
      )
    }

    function Switch(props) {
      var on = props.checked
      return h('button', {
        type: 'button',
        role: 'switch',
        'aria-checked': on,
        'aria-label': props.label,
        disabled: props.disabled,
        onClick: props.onToggle,
        style: Object.assign({}, S.track, {
          background: on ? 'var(--dsw-alias-brand-primary, #4d6bfe)' : 'var(--dsw-alias-border-l2, #c8c8cc)',
          opacity: props.disabled ? 0.45 : 1,
          cursor: props.disabled ? 'default' : 'pointer',
        }),
      }, h('span', { style: Object.assign({}, S.knob, { left: on ? '18px' : '2px' }) }))
    }

    function makeItemRow(ctx, t) {
      return function ItemRow(props) {
        var item = props.item
        var form = ctx.configForms.get(item.entry)
        var snap = useForm(form)
        var busyState = React.useState(false)
        var errorState = React.useState(false)
        var busy = busyState[0]
        var label = t('item.' + item.key)

        var status
        var control = null
        if (snap.status === 'loading') {
          status = t('state.loading')
        } else if (snap.status === 'unavailable') {
          status = t('state.restartOnly')
        } else {
          var on = snap.value !== undefined && item.isOn(snap.value)
          status = snap.writable ? (on ? t('state.on') : t('state.off')) : t('state.readonly')
          control = h(Switch, {
            checked: on,
            label: label,
            disabled: busy || !snap.writable,
            onToggle: function () {
              busyState[1](true)
              errorState[1](false)
              // 关 = 去掉用户覆盖，回到本包组合层的「关」；开 = 写一个值。
              var write = on ? form.unset(item.field) : form.set(item.field, item.onValue)
              write.then(function (ok) { if (!ok) errorState[1](true) }, function () { errorState[1](true) })
                .finally(function () { busyState[1](false) })
            },
          })
        }

        return h('div', { style: Object.assign({}, S.row, props.first ? null : S.rowDivider) },
          h('div', { style: S.text },
            h('span', null, label),
            h('span', { style: S.note }, t('item.' + item.key + '.desc')),
            h('span', { style: S.note }, status),
            errorState[0] ? h('span', { style: S.error }, t('error.save')) : null),
          control)
      }
    }

    function makeSection(ctx, t) {
      var ItemRow = makeItemRow(ctx, t)
      return function QolSection() {
        return h('div', { style: S.section },
          h('div', { style: S.title }, t('privacy.title')),
          h('div', { style: S.note }, t('privacy.intro')),
          h('div', { style: S.card }, ITEMS.map(function (item, i) {
            return h(ItemRow, { key: item.key, item: item, first: i === 0 })
          })),
          h('div', { style: S.note }, t('privacy.uninstall')))
      }
    }

    var inject = ['slots', 'locale', 'configForms']
    function apply(ctx) {
      // 兜底：本包坏了只能表现为「设置里少了一个分区」，不许拖垮整个界面。
      try {
        ctx.effect(function () { return ctx.locale.register(NS, STRINGS) }, 'dsh-qol: dictionaries')
        var t = ctx.locale.bind(NS)
        var Section = makeSection(ctx, t)
        ctx.slots.inject('settings.section', function () {
          return ctx.slots.register({
            name: 'settings.section',
            id: 'dsh-qol',
            order: 45,
            label: function () { return t('nav') },
            locale: NS,
          }, Section)
        })
      } catch (error) {
        console.error('[dsh-qol] apply failed: ' + String(error && error.message || error))
      }
    }

    exports.apply = apply
    exports.inject = inject
    return module.exports
  },
})
