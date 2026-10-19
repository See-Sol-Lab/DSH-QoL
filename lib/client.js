// 构建产物，勿手改：源码在 src/client，由 scripts/build.mjs 生成。
window.__ModuleLoader__.load({
  id: "@see-sol-lab/dsh-qol",
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_react = __toESM(require("react"), 1);

// src/client/locales.ts
var zh = {
  "nav": "\u751F\u6D3B\u8D28\u91CF\u5305",
  "privacy.title": "\u9690\u79C1\u4E0E\u4E0A\u62A5",
  "privacy.intro": "\u4E0B\u9762\u56DB\u9879\u662F\u5B98\u65B9\u684C\u9762\u7AEF\u9ED8\u8BA4\u5F00\u542F\u7684\u4E0A\u62A5\u3002\u88C5\u4E86\u751F\u6D3B\u8D28\u91CF\u5305\u540E\u9ED8\u8BA4\u5168\u90E8\u5173\u95ED\uFF0C\u9700\u8981\u65F6\u81EA\u5DF1\u6253\u5F00\u3002",
  "privacy.uninstall": "\u5378\u8F7D\u751F\u6D3B\u8D28\u91CF\u5305\u540E\uFF0C\u8FD9\u56DB\u9879\u4F1A\u6062\u590D\u5B98\u65B9\u9ED8\u8BA4\uFF08\u5F00\u542F\uFF09\u3002",
  "item.analytics": "\u684C\u9762\u4EA7\u54C1\u7EDF\u8BA1",
  "item.analytics.desc": "\u4E0A\u62A5\u4F60\u5728\u754C\u9762\u91CC\u7684\u64CD\u4F5C\u4E8B\u4EF6\uFF0C\u9644\u5E26\u8BBE\u5907 ID\u3001\u8D26\u53F7 ID \u548C\u7248\u672C\u53F7\u3002",
  "item.sessionLog": "\u4F1A\u8BDD\u65E5\u5FD7",
  "item.sessionLog.desc": "\u6BCF\u6B21\u8BF7\u6C42\u5B98\u65B9\u6A21\u578B\u65F6\uFF0C\u9644\u5E26\u6574\u6BB5\u4F1A\u8BDD\u8BB0\u5F55\uFF0C\u5305\u62EC\u52A9\u624B\u8BFB\u8FC7\u7684\u6587\u4EF6\u5185\u5BB9\u548C\u547D\u4EE4\u8F93\u51FA\u3002",
  "item.inventory": "\u63D2\u4EF6\u6E05\u5355",
  "item.inventory.desc": "\u8BF7\u6C42\u5B98\u65B9\u6A21\u578B\u65F6\uFF0C\u9644\u5E26\u4F60\u542F\u7528\u4E86\u54EA\u4E9B\u63D2\u4EF6\u548C\u5B83\u4EEC\u7684\u7248\u672C\u3002",
  "item.feedback": "\u53CD\u9988\u4E0A\u4F20",
  "item.feedback.desc": "\u4F60\u70B9\u53CD\u9988\u6216\u7ED9\u56DE\u590D\u6253\u5206\u65F6\uFF0C\u4E0A\u4F20\u622A\u81F3\u5F53\u65F6\u7684\u4F1A\u8BDD\u8BB0\u5F55\u3002",
  "state.on": "\u5DF2\u5F00\u542F",
  "state.off": "\u5DF2\u5173\u95ED",
  "state.loading": "\u8BFB\u53D6\u4E2D\u2026",
  "state.unavailable": "\u8FD9\u4E00\u9879\u73B0\u5728\u8BFB\u4E0D\u5230\uFF0C\u751F\u6D3B\u8D28\u91CF\u5305\u7684\u540E\u53F0\u90E8\u5206\u53EF\u80FD\u6CA1\u6709\u52A0\u8F7D\u6210\u529F\u3002",
  "state.readonly": "\u8FD9\u4E00\u9879\u88AB\u66F4\u9AD8\u5C42\u7684\u914D\u7F6E\u9501\u5B9A\u4E86\uFF0C\u8FD9\u91CC\u6539\u4E0D\u4E86\u3002",
  "error.save": "\u6CA1\u5B58\u4E0A\uFF0C\u5DF2\u6062\u590D\u6210\u4E4B\u524D\u7684\u72B6\u6001\u3002"
};
var en = {
  "nav": "QoL Pack",
  "privacy.title": "Privacy and reporting",
  "privacy.intro": "The official desktop app turns these four kinds of reporting on by default. With the QoL Pack installed they are all off until you turn them on.",
  "privacy.uninstall": "Uninstalling the QoL Pack restores the official defaults (on).",
  "item.analytics": "Desktop product analytics",
  "item.analytics.desc": "Reports your interface interactions with device ID, account ID and app version.",
  "item.sessionLog": "Session log",
  "item.sessionLog.desc": "Attaches the whole session record, including files the assistant read and command output, to every official model request.",
  "item.inventory": "Plugin inventory",
  "item.inventory.desc": "Attaches the names and versions of your enabled plugins to official model requests.",
  "item.feedback": "Feedback upload",
  "item.feedback.desc": "Uploads the session so far when you send feedback or rate a reply.",
  "state.on": "On",
  "state.off": "Off",
  "state.loading": "Loading\u2026",
  "state.unavailable": "This setting cannot be read right now; the QoL Pack background part may have failed to load.",
  "state.readonly": "A higher configuration layer locks this one; it cannot be changed here.",
  "error.save": "Not saved; restored the previous state."
};

// src/client/index.tsx
var NS = "dsh.qol";
var ITEMS = [
  { key: "analytics", entry: "product-analytics", field: "enabled", onValue: true, isOn: (v) => v["enabled"] === true },
  { key: "sessionLog", entry: "session-log-deepseek", field: "enabled", onValue: true, isOn: (v) => v["enabled"] === true },
  // 这两项官方不可热改：界面写本包自己的 volatile 字段，由 Host 面（src/index.ts）
  // 经 configEditor 改官方条目，官方随即重载那个组件。
  { key: "inventory", entry: "dsh-qol", field: "inventory", onValue: true, isOn: (v) => v["inventory"] === true },
  { key: "feedback", entry: "dsh-qol", field: "feedback", onValue: true, isOn: (v) => v["feedback"] === true }
];
var S = {
  section: { display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px", lineHeight: "22px", color: "var(--dsw-alias-label-primary)" },
  title: { fontSize: "15px", lineHeight: "22px", fontWeight: 600 },
  note: { fontSize: "12px", lineHeight: "18px", color: "var(--dsw-alias-label-tertiary)" },
  card: { display: "flex", flexDirection: "column", border: "1px solid var(--dsw-alias-border-l1)", borderRadius: "16px", padding: "4px 16px" },
  row: { display: "flex", alignItems: "center", gap: "16px", padding: "12px 0" },
  rowDivider: { borderTop: "1px solid var(--dsw-alias-border-l1)" },
  text: { display: "flex", flexDirection: "column", gap: "2px", flex: "1 1 auto", minWidth: 0 },
  error: { fontSize: "12px", lineHeight: "18px", color: "var(--dsw-alias-state-error-primary)" },
  track: { position: "relative", flex: "0 0 auto", width: "36px", height: "20px", borderRadius: "10px", border: "none", padding: 0, transition: "background 120ms" },
  knob: { position: "absolute", top: "2px", width: "16px", height: "16px", borderRadius: "8px", background: "#fff", transition: "left 120ms" }
};
function useForm(form) {
  return (0, import_react.useSyncExternalStore)((listener) => form.subscribe(listener), () => form.getSnapshot());
}
function Switch(props) {
  const { checked, disabled } = props;
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      "aria-label": props.label,
      disabled,
      onClick: props.onToggle,
      style: {
        ...S.track,
        background: checked ? "var(--dsw-alias-brand-primary, #4d6bfe)" : "var(--dsw-alias-border-l2, #c8c8cc)",
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? "default" : "pointer"
      }
    },
    /* @__PURE__ */ import_react.default.createElement("span", { style: { ...S.knob, left: checked ? "18px" : "2px" } })
  );
}
function ItemRow(props) {
  const { ctx, t, item } = props;
  const form = ctx.configForms.get(item.entry);
  const snap = useForm(form);
  const [busy, setBusy] = (0, import_react.useState)(false);
  const [failed, setFailed] = (0, import_react.useState)(false);
  const label = t(`item.${item.key}`);
  let status;
  let control = null;
  if (snap.status === "loading") status = t("state.loading");
  else if (snap.status === "unavailable") status = t("state.unavailable");
  else {
    const on = snap.value !== void 0 && item.isOn(snap.value);
    status = snap.writable ? t(on ? "state.on" : "state.off") : t("state.readonly");
    control = /* @__PURE__ */ import_react.default.createElement(
      Switch,
      {
        checked: on,
        label,
        disabled: busy || !snap.writable,
        onToggle: () => {
          setBusy(true);
          setFailed(false);
          const write = on ? form.unset(item.field) : form.set(item.field, item.onValue);
          write.then((ok) => {
            if (!ok) setFailed(true);
          }, () => {
            setFailed(true);
          }).finally(() => {
            setBusy(false);
          });
        }
      }
    );
  }
  return /* @__PURE__ */ import_react.default.createElement("div", { style: { ...S.row, ...props.first ? {} : S.rowDivider } }, /* @__PURE__ */ import_react.default.createElement("div", { style: S.text }, /* @__PURE__ */ import_react.default.createElement("span", null, label), /* @__PURE__ */ import_react.default.createElement("span", { style: S.note }, t(`item.${item.key}.desc`)), /* @__PURE__ */ import_react.default.createElement("span", { style: S.note }, status), failed ? /* @__PURE__ */ import_react.default.createElement("span", { style: S.error }, t("error.save")) : null), control);
}
function makeSection(ctx, t) {
  return function QolSection() {
    return /* @__PURE__ */ import_react.default.createElement("div", { style: S.section }, /* @__PURE__ */ import_react.default.createElement("div", { style: S.title }, t("privacy.title")), /* @__PURE__ */ import_react.default.createElement("div", { style: S.note }, t("privacy.intro")), /* @__PURE__ */ import_react.default.createElement("div", { style: S.card }, ITEMS.map((item, i) => /* @__PURE__ */ import_react.default.createElement(ItemRow, { key: item.key, ctx, t, item, first: i === 0 }))), /* @__PURE__ */ import_react.default.createElement("div", { style: S.note }, t("privacy.uninstall")));
  };
}
var inject = ["slots", "locale", "configForms"];
function apply(ctx) {
  try {
    ctx.effect(() => ctx.locale.register(NS, { zh, en }), "dsh-qol: dictionaries");
    const t = ctx.locale.bind(NS);
    const Section = makeSection(ctx, t);
    ctx.slots.inject("settings.section", () => ctx.slots.register({
      name: "settings.section",
      id: "dsh-qol",
      order: 45,
      label: () => t("nav"),
      locale: NS
    }, Section));
  } catch (error) {
    console.error(`[dsh-qol] apply failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

    Object.defineProperty(module.exports, Symbol.toStringTag, { value: 'Module' })
    return module.exports
  },
})
