// 构建产物，勿手改：源码在 src/client，由 scripts/build.mjs 生成。
window.__ModuleLoader__.load({
  id: "@see-sol-lab/dsh-qol",
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.tsx
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_react16 = require("react");

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
  "error.save": "\u6CA1\u5B58\u4E0A\uFF0C\u5DF2\u6062\u590D\u6210\u4E4B\u524D\u7684\u72B6\u6001\u3002",
  "skin.title": "\u76AE\u80A4",
  "skin.intro": "\u751F\u6D3B\u8D28\u91CF\u5305\u81EA\u5E26 DeepSeekGUI \u7684\u6DF1\u6D77\uFF0F\u6D77\u96FE\u5E95\u56FE\u4E0E\u534A\u900F\u660E\u73BB\u7483\u8D28\u611F\u3002\u53EA\u6362\u5916\u89C2\uFF0C\u4E0D\u6539\u5B98\u65B9\u529F\u80FD\uFF1B\u5173\u6389\u7ACB\u523B\u56DE\u5230\u5B98\u65B9\u539F\u6837\u3002",
  "item.skin": "DeepSeekGUI \u76AE\u80A4",
  "item.skin.desc": "\u5F00\uFF1A\u5E95\u56FE\u3001\u534A\u900F\u660E\u9762\u677F\u3001\u6BDB\u73BB\u7483\u83DC\u5355\u548C\u5BF9\u8BDD\u6846\uFF1B\u5173\uFF1A\u5B98\u65B9\u539F\u7248\u5916\u89C2\u3002\u8DDF\u968F\u5B98\u65B9\u7684\u6D45\u8272\uFF0F\u6DF1\u8272\u5207\u6362\u3002",
  "lowLabel.title": "\u6C99\u7BB1",
  "lowLabel.intro1": "\u5B98\u65B9\u6C99\u7BB1\u4F1A\u7ED9\u7528\u8FC7\u7684\u5DE5\u4F5C\u533A\u6253\u4E0A Low \u5B8C\u6574\u6027\u6807\u7B7E\u5E76\u4E00\u76F4\u4FDD\u7559\uFF0C\u597D\u5904\u662F\u5927\u4ED3\u5E93\u4E0B\u6B21\u4E0D\u7528\u91CD\u65B0\u6388\u6743\u3002\u4EE3\u4EF7\u662F\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u7A0B\u5E8F\uFF08Electron\u3001\u6253\u5305\u5DE5\u5177\u3001\u81EA\u5DF1\u7F16\u8BD1\u7684\u7A0B\u5E8F\u3001\u9879\u76EE\u91CC\u7684 Python \u865A\u62DF\u73AF\u5883\uFF09\u90FD\u4F1A\u4EE5\u4F4E\u6743\u9650\u542F\u52A8\uFF0C\u5E38\u89C1\u75C7\u72B6\u662F\u8D77\u4E0D\u6765\u3001\u6253\u4E0D\u4E86\u5305\u3001\u5220\u4E0D\u6389 dist\u3002\u8BE5\u95EE\u9898\u5DF2\u7ECF\u88AB\u7528\u6237\u591A\u6B21\u62A5\u6210 BUG\uFF0C\u5F88\u5F71\u54CD\u5F00\u53D1\u3002",
  "lowLabel.intro2": "\u672C\u63D2\u4EF6\u63D0\u4F9B\u64A4\u9500 Low \u6807\u7B7E\u7684\u9009\u9879\uFF0C\u5982\u679C\u4F60\u540C\u65F6\u7528 Codex\u3001Claude Code \u7B49\u5176\u4ED6\u5DE5\u5177\uFF0C\u6216\u8005\u7ECF\u5E38\u6253\u5305\u3001\u8FD0\u884C\u684C\u9762\u7A0B\u5E8F\uFF0C\u5EFA\u8BAE\u6253\u5F00\u8BE5\u9009\u9879\u5F00\u5173\u3002\u6253\u5F00\u540E\uFF0CDSH \u6BCF\u6B21\u542F\u52A8\u548C\u9000\u51FA\u65F6\u4F1A\u64A4\u6389\u8FD9\u4E9B\u6807\u7B7E\uFF1BDSH \u8FD0\u884C\u671F\u95F4\u6807\u7B7E\u4ECD\u5728\u3002",
  "item.workspaceAccess": "\u81EA\u52A8\u4FEE\u590D\u5DE5\u4F5C\u533A\u6C99\u7BB1\u6388\u6743",
  "item.workspaceAccess.desc": "\u5B98\u65B9\u59CB\u7EC8\u6CA1\u6709\u4FEE\u590D\u8FD9\u4E2A\u95EE\u9898\uFF1A\u4E0D\u6253\u5F00\u65F6\uFF0C\u5728\u5176\u4ED6\u76D8\uFF08D \u76D8\u3001E \u76D8\u7B49\uFF09\u5F00\u5DE5\u4F5C\u533A\uFF0C\u6C99\u7BB1\u4F1A\u53CD\u590D\u62A5\u9519\u5931\u8D25\uFF0C\u8FD8\u9700\u8981\u7528\u6237\u624B\u52A8\u8BCA\u65AD\u4FEE\u590D\uFF0C\u975E\u5E38\u5F71\u54CD\u4F53\u9A8C\u3002\u6253\u5F00\u5219\u8FD0\u884C\u751F\u6D3B\u8D28\u91CF\u5305\u7684\u4FEE\u590D\uFF0C\u4F7F\u7528\u4F53\u9A8C\u548C DeepSeekGUI \u4E00\u6837\u4E1D\u6ED1\uFF1ADSH \u542F\u52A8\u65F6\u548C\u65B0\u52A0\u5DE5\u4F5C\u533A\u65F6\uFF0C\u7ED9\u4F60\u7684\u8D26\u53F7\u8865\u4E0A\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939\u7684\u5B8C\u5168\u63A7\u5236\u3002\u5982\u679C\u4ECB\u610F\uFF0C\u6216\u8005\u60F3\u8981\u5B98\u65B9\u539F\u7248\uFF0C\u53EF\u4EE5\u624B\u52A8\u5173\u6389\u3002",
  "item.lowLabel": "\u81EA\u52A8\u53BB\u9664\u6C99\u7BB1 Low \u6807\u7B7E",
  "item.lowLabel.desc": "\u5F00\uFF1ADSH \u6BCF\u6B21\u542F\u52A8\u548C\u9000\u51FA\u65F6\u81EA\u52A8\u6E05\u9664\uFF1B\u5173\uFF1A\u4FDD\u6301\u5B98\u65B9\u539F\u6837\uFF0C\u4E0D\u6E05\u9664\u3002\u53EA\u64A4\u5B98\u65B9\u6C99\u7BB1\u52A0\u7684\u4E09\u6837\uFF1A\u6C99\u7BB1\u8EAB\u4EFD\u7684\u5199\u5165\u6388\u6743\u3001Everyone \u7684\u7981\u6B62\u5220\u9664\u5B50\u9879\u3001Low \u6807\u7B7E\uFF08\u6539\u56DE Medium\uFF09\u3002\u5176\u4ED6\u6743\u9650\u4E0D\u52A8\uFF0C\u64A4\u4E4B\u524D\u5148\u5907\u4EFD\u5230 DSH \u76EE\u5F55\u4E0B\u7684 deepseekgui/acl-backups\u3002"
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
  "error.save": "Not saved; restored the previous state.",
  "skin.title": "Skin",
  "skin.intro": "The QoL Pack brings the DeepSeekGUI deep-sea / sea-mist backdrop and translucent glass look. Appearance only; turning it off restores the official look immediately.",
  "item.skin": "DeepSeekGUI skin",
  "item.skin.desc": "On: backdrop, translucent panels, frosted menus and dialogs. Off: the official look. Follows the official light / dark setting.",
  "lowLabel.title": "Sandbox",
  "lowLabel.intro1": "The official sandbox puts a Low integrity label on every workspace it has used and keeps it, so a large repository does not need to be granted again next time. The cost: programs in that folder (Electron, packaging tools, programs you compile, a Python virtual environment inside the project) start at low integrity, and typically fail to launch, fail to package, or cannot delete dist. Users have reported this as a bug many times; it gets in the way of development.",
  "lowLabel.intro2": "This plugin can remove the Low label. If you also use Codex, Claude Code or other tools, or often package or run desktop programs, turn this on. When it is on, DSH removes these marks each time it starts and exits; while DSH is running the label is still there.",
  "item.workspaceAccess": "Automatically fix workspace sandbox access",
  "item.workspaceAccess.desc": "The official app has never fixed this: with it off, a workspace on another drive (D:, E: \u2026) makes the sandbox fail again and again, and you have to run the diagnosis and repair by hand, which gets in the way badly. With it on, the QoL Pack runs the fix and things are as smooth as in DeepSeekGUI: when DSH starts and when a workspace is added, your account is given Full control of the workspace folder. If you mind, or want the official behaviour, turn it off.",
  "item.lowLabel": "Automatically remove the sandbox Low label",
  "item.lowLabel.desc": "On: cleared automatically each time DSH starts and exits. Off: left as the official sandbox sets it. Removes only the three things the official sandbox adds: the sandbox identity write grant, the Everyone deny-delete-children entry, and the Low label (back to Medium). Other permissions are untouched; a backup goes to deepseekgui/acl-backups under the DSH home first."
};

// src/generated/typert.remote-client.js
var import_zod = require("zod");

// node_modules/.pnpm/@deepseek-ai+dsh-typert-pro_eb15df33e1a8266d857327dcf9159ebe/node_modules/@deepseek-ai/dsh-typert-protocol/lib/types/remote-info.js
function createTypertRemoteInfo(spec, zod) {
  return new RemoteInfo(spec, zod);
}
var RemoteInfo = class {
  spec;
  zod;
  index;
  constructor(spec, zod) {
    this.spec = spec;
    this.zod = zod;
  }
  get package() {
    return this.spec.package;
  }
  get descriptors() {
    return this.resolve().descriptors;
  }
  get methods() {
    return this.resolve().methods;
  }
  resolve() {
    if (this.index !== void 0)
      return this.index;
    const zod = this.zod;
    const descriptors = [];
    const methods = /* @__PURE__ */ Object.create(null);
    for (const [endpoint, definition] of Object.entries(this.spec.methods)) {
      const separator = endpoint.indexOf("/");
      const namespace = endpoint.slice(0, separator);
      const method = endpoint.slice(separator + 1);
      const parameters = definition.parameters.map((parameter) => ({ ...parameter, wire: parameter.wire ?? parameter.name }));
      const descriptor = {
        ...definition,
        id: `${this.spec.package}#${endpoint}`,
        namespace,
        method,
        parameters,
        result: definition.result.description === void 0 ? definition.result : new ResultValue(definition.result)
      };
      if (definition.invocation.kind === "direct") {
        const inputs = [];
        const direct = Object.assign(descriptor, {
          input(options) {
            const strict = options?.strict === true;
            return inputs[strict ? 1 : 0] ??= new NamedInput(parameters, strict, zod);
          },
          invoke(remote, input3, signal) {
            const named = input3;
            const values = parameters.map((parameter) => named[parameter.wire]);
            if (definition.cancellation !== void 0)
              values.push(signal);
            const receiver = Reflect.get(remote, namespace);
            const call = Reflect.get(receiver, method);
            return call.apply(receiver, values);
          }
        });
        methods[endpoint] = direct;
      }
      descriptors.push(descriptor);
    }
    return this.index = { descriptors, methods };
  }
};
function optional(parameter) {
  return parameter.source === "json" && parameter.acceptsUndefined === true;
}
var NamedInput = class {
  parameters;
  strict;
  zod;
  schema;
  projection;
  constructor(parameters, strict, zod) {
    this.parameters = parameters;
    this.strict = strict;
    this.zod = zod;
  }
  codec(parameter) {
    return this.strict ? parameter.strictCodec : parameter.codec;
  }
  create = () => this.schema ??= this.zod.strictObject(Object.fromEntries(this.parameters.map((parameter) => {
    const value = this.codec(parameter).create();
    return [parameter.wire, optional(parameter) ? value.optional() : value.nonoptional()];
  })));
  get jsonSchema() {
    return this.project().jsonSchema;
  }
  get jsonSchemaError() {
    return this.project().jsonSchemaError;
  }
  project() {
    if (this.projection !== void 0)
      return this.projection;
    const unavailable = this.parameters.find((parameter) => this.codec(parameter).jsonSchema === void 0);
    if (unavailable !== void 0) {
      return this.projection = { jsonSchemaError: this.codec(unavailable).jsonSchemaError ?? `No JSON Schema for parameter ${unavailable.wire}` };
    }
    return this.projection = {
      jsonSchema: {
        type: "object",
        properties: Object.fromEntries(this.parameters.map((parameter) => [parameter.wire, {
          ...this.codec(parameter).jsonSchema,
          ...parameter.description === void 0 ? {} : { description: parameter.description }
        }])),
        required: this.parameters.filter((parameter) => !optional(parameter)).map((parameter) => parameter.wire),
        additionalProperties: false
      }
    };
  }
};
var ResultValue = class {
  spec;
  projection;
  constructor(spec) {
    this.spec = spec;
  }
  get mode() {
    return this.spec.mode;
  }
  get typeSymbol() {
    return this.spec.typeSymbol;
  }
  get create() {
    return this.spec.create;
  }
  get decode() {
    return this.spec.decode;
  }
  get encode() {
    return this.spec.encode;
  }
  get description() {
    return this.spec.description;
  }
  get jsonSchemaError() {
    return this.spec.jsonSchemaError;
  }
  get jsonSchema() {
    if (this.projection === void 0) {
      const schema = this.spec.jsonSchema;
      this.projection = { value: schema === void 0 ? void 0 : { ...schema, description: this.spec.description } };
    }
    return this.projection.value;
  }
};

// src/generated/typert.remote-client.js
var _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_parameter_0$schema$value ??= import_zod.z.object({
  "path": import_zod.z.string(),
  "selections": import_zod.z.array(import_zod.z.object({
    "key": import_zod.z.string(),
    "name": import_zod.z.string().optional().describe("Final name; defaults to the declared name, then the proposal."),
    "description": import_zod.z.string().optional().describe("Final description; defaults to the declared description, then the proposal."),
    "replaces": import_zod.z.union([import_zod.z.literal(null), import_zod.z.string()]).describe("Install to replace, confirmed by the user from the preview's `replaces`; null installs beside existing entries.")
  }))
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_result$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_result$schema$value ??= import_zod.z.object({
  "installed": import_zod.z.array(import_zod.z.object({
    "location": import_zod.z.string().describe("Absolute install directory."),
    "status": import_zod.z.union([import_zod.z.literal("ok"), import_zod.z.literal("invalid")]),
    "issue": import_zod.z.object({
      "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
      "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
      "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
      "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
    }).optional().describe("Present when `status` is `invalid`: what is wrong with the installed `SKILL.md`."),
    "schemaVersion": import_zod.z.literal(1),
    "installId": import_zod.z.string().describe("Directory name under the library; `<name>-<8 hex>`, kept across replacements."),
    "name": import_zod.z.string(),
    "description": import_zod.z.string(),
    "whenToUse": import_zod.z.string().optional(),
    "installedAt": import_zod.z.string().describe("ISO time of the first install."),
    "updatedAt": import_zod.z.string().describe("ISO time of the latest install or replacement."),
    "origin": import_zod.z.object({
      "kind": import_zod.z.union([import_zod.z.literal("directory"), import_zod.z.literal("zip"), import_zod.z.literal("markdown")]),
      "path": import_zod.z.string().describe("Absolute path of the directory, archive, or Markdown file that was imported."),
      "entry": import_zod.z.string().describe("Posix-relative path of the skill entry inside the source (`SKILL.md`, `pack/a/SKILL.md`, or the file name).")
    }),
    "files": import_zod.z.number().describe("Regular files copied into the install directory, excluding the manifest."),
    "bytes": import_zod.z.number().describe("Bytes of those files.")
  })),
  "failures": import_zod.z.array(import_zod.z.object({
    "key": import_zod.z.string(),
    "issue": import_zod.z.object({
      "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
      "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
      "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
      "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
    })
  }))
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_result$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_result$schema$value ??= import_zod.z.object({
  "installId": import_zod.z.string(),
  "projects": import_zod.z.array(import_zod.z.object({
    "key": import_zod.z.string().describe("Project key: sha256 of the canonical folder path (see `SkillProjectView.project`)."),
    "path": import_zod.z.string().describe("Canonical project folder as recorded when the selection was saved.")
  }))
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_inventory_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_inventory_result$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_inventory_result$schema$value ??= import_zod.z.object({
  "libraryDir": import_zod.z.string().describe("Absolute library directory under the active DSH home."),
  "installed": import_zod.z.array(import_zod.z.object({
    "location": import_zod.z.string().describe("Absolute install directory."),
    "status": import_zod.z.union([import_zod.z.literal("ok"), import_zod.z.literal("invalid")]),
    "issue": import_zod.z.object({
      "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
      "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
      "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
      "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
    }).optional().describe("Present when `status` is `invalid`: what is wrong with the installed `SKILL.md`."),
    "schemaVersion": import_zod.z.literal(1),
    "installId": import_zod.z.string().describe("Directory name under the library; `<name>-<8 hex>`, kept across replacements."),
    "name": import_zod.z.string(),
    "description": import_zod.z.string(),
    "whenToUse": import_zod.z.string().optional(),
    "installedAt": import_zod.z.string().describe("ISO time of the first install."),
    "updatedAt": import_zod.z.string().describe("ISO time of the latest install or replacement."),
    "origin": import_zod.z.object({
      "kind": import_zod.z.union([import_zod.z.literal("directory"), import_zod.z.literal("zip"), import_zod.z.literal("markdown")]),
      "path": import_zod.z.string().describe("Absolute path of the directory, archive, or Markdown file that was imported."),
      "entry": import_zod.z.string().describe("Posix-relative path of the skill entry inside the source (`SKILL.md`, `pack/a/SKILL.md`, or the file name).")
    }),
    "files": import_zod.z.number().describe("Regular files copied into the install directory, excluding the manifest."),
    "bytes": import_zod.z.number().describe("Bytes of those files.")
  })),
  "orphans": import_zod.z.array(import_zod.z.string()).describe("Directory names under the library without a readable manifest; never touched by uninstall."),
  "readOnly": import_zod.z.array(import_zod.z.object({
    "source": import_zod.z.union([import_zod.z.literal("user-dsh"), import_zod.z.literal("user-agents"), import_zod.z.literal("bundled")]),
    "name": import_zod.z.string(),
    "description": import_zod.z.string(),
    "location": import_zod.z.string().describe("Absolute path of the skill file.")
  }))
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_result$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_result$schema$value ??= import_zod.z.object({
  "source": import_zod.z.object({
    "kind": import_zod.z.union([import_zod.z.literal("directory"), import_zod.z.literal("zip"), import_zod.z.literal("markdown")]),
    "path": import_zod.z.string()
  }),
  "candidates": import_zod.z.array(import_zod.z.object({
    "key": import_zod.z.string().describe("Identifies the candidate within the preview; passed back in the apply request."),
    "entry": import_zod.z.string().describe("Posix-relative path of the entry inside the source."),
    "kind": import_zod.z.union([import_zod.z.literal("markdown"), import_zod.z.literal("skill")]),
    "name": import_zod.z.union([import_zod.z.literal(null), import_zod.z.string()]).describe("Name declared by the entry's frontmatter; null when missing or invalid."),
    "description": import_zod.z.union([import_zod.z.literal(null), import_zod.z.string()]).describe("Description declared by the entry's frontmatter; null when missing."),
    "whenToUse": import_zod.z.string().optional(),
    "proposed": import_zod.z.object({
      "name": import_zod.z.string().optional(),
      "description": import_zod.z.string().optional()
    }).describe("Proposed values for missing metadata; applied only to the installed copy."),
    "issues": import_zod.z.array(import_zod.z.object({
      "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
      "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
      "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
      "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
    })).describe("Problems found; blocking ones have `fixable` unset or false."),
    "files": import_zod.z.number().describe("Regular files under the candidate's directory, including the entry."),
    "bytes": import_zod.z.number(),
    "replaces": import_zod.z.union([import_zod.z.literal(null), import_zod.z.object({
      "installId": import_zod.z.string(),
      "name": import_zod.z.string(),
      "origin": import_zod.z.object({
        "kind": import_zod.z.union([import_zod.z.literal("directory"), import_zod.z.literal("zip"), import_zod.z.literal("markdown")]),
        "path": import_zod.z.string().describe("Absolute path of the directory, archive, or Markdown file that was imported."),
        "entry": import_zod.z.string().describe("Posix-relative path of the skill entry inside the source (`SKILL.md`, `pack/a/SKILL.md`, or the file name).")
      }),
      "location": import_zod.z.string()
    })]).describe("Install the candidate would replace (matched by origin first, then by name), named so the actual target is visible; null when none."),
    "installable": import_zod.z.boolean().describe("Whether the candidate can be installed as reviewed (no blocking issue, and a name plus description resolve).")
  })),
  "problems": import_zod.z.array(import_zod.z.object({
    "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
    "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
    "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
    "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
  })).describe("Problems with the source itself (unreadable, unsupported, nothing found).")
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_result$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_result$schema$value ??= import_zod.z.object({
  "sessionId": import_zod.z.string(),
  "project": import_zod.z.union([import_zod.z.literal(null), import_zod.z.object({
    "key": import_zod.z.string().describe("Project key: sha256 of the canonical folder path (see `SkillProjectView.project`)."),
    "path": import_zod.z.string().describe("Canonical project folder as recorded when the selection was saved.")
  })]).describe("The session's project folder (canonical path and its key); null when the session has none."),
  "problem": import_zod.z.union([import_zod.z.literal("no-cwd"), import_zod.z.literal("missing-folder")]).optional().describe("Why `project` is null or unusable."),
  "revision": import_zod.z.number().describe("Revision of the saved selection; 0 before the first save. Sent back with a save."),
  "entries": import_zod.z.array(import_zod.z.object({
    "installId": import_zod.z.string(),
    "name": import_zod.z.string(),
    "description": import_zod.z.string(),
    "status": import_zod.z.union([import_zod.z.literal("ok"), import_zod.z.literal("invalid")]),
    "issue": import_zod.z.object({
      "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
      "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
      "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
      "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
    }).optional().describe("Present when `status` is `invalid`."),
    "enabled": import_zod.z.boolean().describe("Whether the project's saved selection includes this install."),
    "effect": import_zod.z.union([import_zod.z.literal("active"), import_zod.z.literal("missing"), import_zod.z.literal("inactive"), import_zod.z.literal("invalid"), import_zod.z.literal("shadowed")]),
    "shadowedBy": import_zod.z.object({
      "source": import_zod.z.string(),
      "provider": import_zod.z.string()
    }).optional().describe("The winning same-name skill's source and provider when `effect` is `shadowed`.")
  })),
  "catalogComplete": import_zod.z.boolean().describe("Whether the session's real catalog could be read; false means `effect` is a best guess from the selection alone.")
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_parameter_0$schema$value ??= import_zod.z.object({
  "sessionId": import_zod.z.string(),
  "enabled": import_zod.z.array(import_zod.z.string()).describe("The complete list of install ids the project may use."),
  "revision": import_zod.z.number().describe("The revision the page was rendered from; a different stored revision refuses the save.")
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_result$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_result$schema$value ??= import_zod.z.object({
  "saved": import_zod.z.boolean(),
  "issue": import_zod.z.object({
    "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
    "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
    "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
    "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
  }).optional().describe("Present when `saved` is false."),
  "view": import_zod.z.object({
    "sessionId": import_zod.z.string(),
    "project": import_zod.z.union([import_zod.z.literal(null), import_zod.z.object({
      "key": import_zod.z.string().describe("Project key: sha256 of the canonical folder path (see `SkillProjectView.project`)."),
      "path": import_zod.z.string().describe("Canonical project folder as recorded when the selection was saved.")
    })]).describe("The session's project folder (canonical path and its key); null when the session has none."),
    "problem": import_zod.z.union([import_zod.z.literal("no-cwd"), import_zod.z.literal("missing-folder")]).optional().describe("Why `project` is null or unusable."),
    "revision": import_zod.z.number().describe("Revision of the saved selection; 0 before the first save. Sent back with a save."),
    "entries": import_zod.z.array(import_zod.z.object({
      "installId": import_zod.z.string(),
      "name": import_zod.z.string(),
      "description": import_zod.z.string(),
      "status": import_zod.z.union([import_zod.z.literal("ok"), import_zod.z.literal("invalid")]),
      "issue": import_zod.z.object({
        "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
        "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
        "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
        "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
      }).optional().describe("Present when `status` is `invalid`."),
      "enabled": import_zod.z.boolean().describe("Whether the project's saved selection includes this install."),
      "effect": import_zod.z.union([import_zod.z.literal("active"), import_zod.z.literal("missing"), import_zod.z.literal("inactive"), import_zod.z.literal("invalid"), import_zod.z.literal("shadowed")]),
      "shadowedBy": import_zod.z.object({
        "source": import_zod.z.string(),
        "provider": import_zod.z.string()
      }).optional().describe("The winning same-name skill's source and provider when `effect` is `shadowed`.")
    })),
    "catalogComplete": import_zod.z.boolean().describe("Whether the session's real catalog could be read; false means `effect` is a best guess from the selection alone.")
  }).describe("The page as it reads after the attempt (fresh on conflict, so the person sees what won).")
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_result$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_result$schema$value ??= import_zod.z.object({
  "installId": import_zod.z.string(),
  "location": import_zod.z.string().describe("Absolute directory that was (or would have been) removed."),
  "removed": import_zod.z.boolean(),
  "issue": import_zod.z.object({
    "code": import_zod.z.union([import_zod.z.literal("missing-frontmatter"), import_zod.z.literal("invalid-frontmatter"), import_zod.z.literal("missing-name"), import_zod.z.literal("invalid-name"), import_zod.z.literal("missing-description"), import_zod.z.literal("legacy-key"), import_zod.z.literal("invalid-boolean"), import_zod.z.literal("symlink-skipped"), import_zod.z.literal("unsafe-path"), import_zod.z.literal("too-many-files"), import_zod.z.literal("too-large"), import_zod.z.literal("zip-unreadable"), import_zod.z.literal("zip-too-large"), import_zod.z.literal("source-missing"), import_zod.z.literal("source-unsupported"), import_zod.z.literal("no-skill-found"), import_zod.z.literal("candidate-missing"), import_zod.z.literal("name-conflict"), import_zod.z.literal("replace-target-missing"), import_zod.z.literal("library-unwritable"), import_zod.z.literal("manifest-invalid"), import_zod.z.literal("skill-invalid"), import_zod.z.literal("not-managed"), import_zod.z.literal("io-error"), import_zod.z.literal("no-project"), import_zod.z.literal("unknown-install"), import_zod.z.literal("revision-conflict")]),
    "message": import_zod.z.string().describe("Human-readable detail in English; the client maps `code` to localized copy."),
    "path": import_zod.z.string().optional().describe("Posix-relative path inside the source or install the problem is about, when it is about one file."),
    "fixable": import_zod.z.boolean().optional().describe("Whether the review can repair it in the installed copy (name and description proposals).")
  }).optional().describe("Present when `removed` is false."),
  "affected": import_zod.z.array(import_zod.z.object({
    "key": import_zod.z.string().describe("Project key: sha256 of the canonical folder path (see `SkillProjectView.project`)."),
    "path": import_zod.z.string().describe("Canonical project folder as recorded when the selection was saved.")
  })).describe("Projects whose selection still names this install. The references stay in place as missing entries \u2014 nothing switches to another skill of the same name \u2014 until each project clears them.")
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_parameter_0$schema$value ??= import_zod.z.union([import_zod.z.literal("zh"), import_zod.z.literal("en")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_result$schema$value ??= import_zod.z.object({
  "status": import_zod.z.union([import_zod.z.literal("signed-out"), import_zod.z.literal("ready"), import_zod.z.literal("unavailable")]).readonly(),
  "reason": import_zod.z.union([import_zod.z.literal(null), import_zod.z.literal("network"), import_zod.z.literal("blocked"), import_zod.z.literal("timeout"), import_zod.z.literal("format"), import_zod.z.literal("no-session")]).readonly().describe("unavailable \u65F6\u7684\u539F\u56E0\uFF1B\u5176\u4F59\u4E3A null\u3002"),
  "fetchedAt": import_zod.z.string().readonly().describe("\u8FD9\u4EFD\u6570\u636E\u53D6\u5230\u7684\u65F6\u523B\uFF08ISO\uFF09\u3002"),
  "data": import_zod.z.union([import_zod.z.literal(null), import_zod.z.object({
    "balances": import_zod.z.array(import_zod.z.object({
      "currency": import_zod.z.string().readonly(),
      "amount": import_zod.z.string().readonly()
    })).readonly().describe("\u5145\u503C\u4F59\u989D\uFF0C\u53EF\u591A\u5E01\u79CD\u3002"),
    "bonus": import_zod.z.array(import_zod.z.object({
      "currency": import_zod.z.string().readonly(),
      "amount": import_zod.z.string().readonly()
    })).readonly().describe("\u8D60\u91D1\u4F59\u989D\uFF0C\u53EA\u4FDD\u7559 > 0 \u7684\u94B1\u5305\u3002"),
    "totalCosts": import_zod.z.array(import_zod.z.object({
      "currency": import_zod.z.string().readonly(),
      "amount": import_zod.z.string().readonly()
    })).readonly().describe("\u7D2F\u8BA1\u6D88\u8D39\uFF0C\u6309\u5E01\u79CD\u3002"),
    "today": import_zod.z.object({
      "costs": import_zod.z.array(import_zod.z.object({
        "currency": import_zod.z.string().readonly(),
        "amount": import_zod.z.string().readonly()
      })).readonly().describe("\u8BE5\u65F6\u6BB5\u6D88\u8D39\u91D1\u989D\uFF0C\u6309\u5E01\u79CD\u5206\u5217\uFF08\u5341\u8FDB\u5236\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u4FDD\u7559\u539F\u6709\u5C0F\u6570\u4F4D\uFF09\u3002"),
      "requests": import_zod.z.number().readonly(),
      "tokens": import_zod.z.number().readonly().describe("Token \u603B\u6570 = \u7F13\u5B58\u547D\u4E2D + \u7F13\u5B58\u672A\u547D\u4E2D + \u8F93\u51FA\u3002"),
      "cacheHitRate": import_zod.z.union([import_zod.z.literal(null), import_zod.z.number()]).readonly().describe("\u7F13\u5B58\u547D\u4E2D\u7387 = \u547D\u4E2D / (\u547D\u4E2D + \u672A\u547D\u4E2D)\uFF1B\u6CA1\u6709\u8F93\u5165 token \u65F6\u4E3A null\u3002")
    }).readonly(),
    "days7": import_zod.z.object({
      "costs": import_zod.z.array(import_zod.z.object({
        "currency": import_zod.z.string().readonly(),
        "amount": import_zod.z.string().readonly()
      })).readonly().describe("\u8BE5\u65F6\u6BB5\u6D88\u8D39\u91D1\u989D\uFF0C\u6309\u5E01\u79CD\u5206\u5217\uFF08\u5341\u8FDB\u5236\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u4FDD\u7559\u539F\u6709\u5C0F\u6570\u4F4D\uFF09\u3002"),
      "requests": import_zod.z.number().readonly(),
      "tokens": import_zod.z.number().readonly().describe("Token \u603B\u6570 = \u7F13\u5B58\u547D\u4E2D + \u7F13\u5B58\u672A\u547D\u4E2D + \u8F93\u51FA\u3002"),
      "cacheHitRate": import_zod.z.union([import_zod.z.literal(null), import_zod.z.number()]).readonly().describe("\u7F13\u5B58\u547D\u4E2D\u7387 = \u547D\u4E2D / (\u547D\u4E2D + \u672A\u547D\u4E2D)\uFF1B\u6CA1\u6709\u8F93\u5165 token \u65F6\u4E3A null\u3002")
    }).readonly(),
    "days30": import_zod.z.object({
      "costs": import_zod.z.array(import_zod.z.object({
        "currency": import_zod.z.string().readonly(),
        "amount": import_zod.z.string().readonly()
      })).readonly().describe("\u8BE5\u65F6\u6BB5\u6D88\u8D39\u91D1\u989D\uFF0C\u6309\u5E01\u79CD\u5206\u5217\uFF08\u5341\u8FDB\u5236\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u4FDD\u7559\u539F\u6709\u5C0F\u6570\u4F4D\uFF09\u3002"),
      "requests": import_zod.z.number().readonly(),
      "tokens": import_zod.z.number().readonly().describe("Token \u603B\u6570 = \u7F13\u5B58\u547D\u4E2D + \u7F13\u5B58\u672A\u547D\u4E2D + \u8F93\u51FA\u3002"),
      "cacheHitRate": import_zod.z.union([import_zod.z.literal(null), import_zod.z.number()]).readonly().describe("\u7F13\u5B58\u547D\u4E2D\u7387 = \u547D\u4E2D / (\u547D\u4E2D + \u672A\u547D\u4E2D)\uFF1B\u6CA1\u6709\u8F93\u5165 token \u65F6\u4E3A null\u3002")
    }).readonly(),
    "heatmap": import_zod.z.array(import_zod.z.object({
      "date": import_zod.z.string().readonly().describe("`YYYY-MM-DD`\uFF08\u6309\u8BA1\u5212\u7684 tz\uFF09\u3002"),
      "tokens": import_zod.z.number().readonly()
    })).readonly().describe("60 \u683C\uFF0C\u6700\u65E9\u7684\u4E00\u5929\u5728\u524D\u3002")
  })]).readonly().describe("ready \u65F6\u5B58\u5728\u3002"),
  "usagePageUrl": import_zod.z.string().readonly().describe("\u5B98\u65B9\u7528\u91CF\u9875\u3002")
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_result$schema$value ??= import_zod.z.object({
  "status": import_zod.z.union([import_zod.z.literal("cleaned"), import_zod.z.literal("clean"), import_zod.z.literal("busy"), import_zod.z.literal("unsupported")]).readonly(),
  "root": import_zod.z.string().readonly().describe("The folder the marks were on: the chosen one, or the ancestor they are inherited from.")
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_1$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_1$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_1$schema$value ??= import_zod.z.union([import_zod.z.literal("zh"), import_zod.z.literal("en")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_result$schema$value ??= import_zod.z.union([import_zod.z.literal("created"), import_zod.z.literal("exists")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_1$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_1$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_1$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_result$schema$value ??= import_zod.z.void();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_1$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_1$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_1$schema$value ??= import_zod.z.union([import_zod.z.literal("staged"), import_zod.z.literal("unstaged")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_2$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_2$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_2$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_result$schema$value ??= import_zod.z.object({
  "files": import_zod.z.array(import_zod.z.object({
    "path": import_zod.z.string().describe("Path relative to the repo root."),
    "origPath": import_zod.z.string().optional().describe("Original path for a rename/copy."),
    "status": import_zod.z.union([import_zod.z.literal("deleted"), import_zod.z.literal("added"), import_zod.z.literal("modified"), import_zod.z.literal("renamed"), import_zod.z.literal("copied"), import_zod.z.literal("typechange")]).describe("Letter status from the name-status vocabulary (A/M/D/R/C/T)."),
    "binary": import_zod.z.boolean().describe("True when Git reports a binary file (`-` numstat columns)."),
    "addedLines": import_zod.z.number().optional().describe("Added lines; absent for binary files."),
    "deletedLines": import_zod.z.number().optional().describe("Deleted lines; absent for binary files."),
    "score": import_zod.z.number().optional().describe("Rename/copy similarity score (`100`), when present.")
  })).describe("Every changed file in record order."),
  "patch": import_zod.z.string().optional().describe("The requested unified patch, when `wantPatch` was set and the bound held.")
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_1$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_1$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_1$schema$value ??= import_zod.z.boolean();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_2$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_2$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_2$schema$value ??= import_zod.z.union([import_zod.z.literal("zh"), import_zod.z.literal("en")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_result$schema$value ??= import_zod.z.object({
  "title": import_zod.z.string().readonly().describe("The Session's current display title, already resolved."),
  "markdown": import_zod.z.string().readonly().describe("The complete document; the desktop writes it UTF-8 without BOM.")
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_globalMemory_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_globalMemory_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_globalMemory_result$schema$value ??= import_zod.z.object({
  "home": import_zod.z.string().describe("\u751F\u6548\u7684 DSH home\u3002"),
  "text": import_zod.z.union([import_zod.z.literal(null), import_zod.z.string()]).describe("\u5168\u6587\uFF1B\u8BFB\u4E0D\u5230\u6216\u592A\u5927\u65F6\u4E3A null\u3002")
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_result$schema$value ??= import_zod.z.object({
  "text": import_zod.z.union([import_zod.z.literal(null), import_zod.z.string()]).readonly().describe("Plain text of the newest assistant message (text blocks joined); null before the first reply."),
  "complete": import_zod.z.boolean().readonly().describe("Whether a `turn/end` follows that message, i.e. the reply is complete.")
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_result$schema$value ??= import_zod.z.object({
  "cwd": import_zod.z.string().describe("Session working directory."),
  "fileName": import_zod.z.string().describe("`<folder>.memory.md`, from {@link projectMemoryFileName}."),
  "text": import_zod.z.union([import_zod.z.literal(null), import_zod.z.string()]).describe("Memory text; null when the file does not exist yet."),
  "agents": import_zod.z.boolean().describe("Whether `AGENTS.md` exists in the working directory.")
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_result$schema$value ??= import_zod.z.union([import_zod.z.literal(null), import_zod.z.object({
  "sessionId": import_zod.z.string().readonly(),
  "entries": import_zod.z.array(import_zod.z.object({
    "at": import_zod.z.string().readonly(),
    "capBytes": import_zod.z.number().readonly().describe("\u6BCF\u4E2A\u6587\u4EF6\u7684\u8BFB\u53D6\u4E0A\u9650\uFF08\u5B57\u8282\uFF09\u3002"),
    "global": import_zod.z.object({
      "path": import_zod.z.string().readonly(),
      "status": import_zod.z.union([import_zod.z.literal("absent"), import_zod.z.literal("present"), import_zod.z.literal("empty"), import_zod.z.literal("truncated"), import_zod.z.literal("unreadable")]).readonly(),
      "bytes": import_zod.z.number().readonly().describe("\u5B9E\u9645\u5E26\u5165\u7684 UTF-8 \u5B57\u8282\u6570\u4E0E\u5B57\u7B26\u6570\uFF08code points\uFF09\u3002"),
      "chars": import_zod.z.number().readonly(),
      "sha256": import_zod.z.string().readonly().describe("\u5B9E\u9645\u5E26\u5165\u6587\u672C\u7684 SHA-256\uFF1A\u540C\u6837\u957F\u5EA6\u3001\u4E0D\u540C\u5185\u5BB9\u4E5F\u5206\u5F97\u5F00\u3002"),
      "autoArea": import_zod.z.union([import_zod.z.literal("absent"), import_zod.z.literal("included")]).readonly().optional().describe("\u81EA\u52A8\u6574\u7406\u533A\u662F\u5426\u6574\u6BB5\u5E26\u5165\uFF08\u9879\u76EE\u8BB0\u5FC6\u8D85\u51FA\u4E0A\u9650\u65F6\uFF0C\u5B83\u4F18\u5148\u4E8E\u4EBA\u5199\u5185\u5BB9\u7684\u5C3E\u90E8\uFF09\u3002")
    }).readonly(),
    "project": import_zod.z.object({
      "path": import_zod.z.string().readonly(),
      "status": import_zod.z.union([import_zod.z.literal("absent"), import_zod.z.literal("present"), import_zod.z.literal("empty"), import_zod.z.literal("truncated"), import_zod.z.literal("unreadable")]).readonly(),
      "bytes": import_zod.z.number().readonly().describe("\u5B9E\u9645\u5E26\u5165\u7684 UTF-8 \u5B57\u8282\u6570\u4E0E\u5B57\u7B26\u6570\uFF08code points\uFF09\u3002"),
      "chars": import_zod.z.number().readonly(),
      "sha256": import_zod.z.string().readonly().describe("\u5B9E\u9645\u5E26\u5165\u6587\u672C\u7684 SHA-256\uFF1A\u540C\u6837\u957F\u5EA6\u3001\u4E0D\u540C\u5185\u5BB9\u4E5F\u5206\u5F97\u5F00\u3002"),
      "autoArea": import_zod.z.union([import_zod.z.literal("absent"), import_zod.z.literal("included")]).readonly().optional().describe("\u81EA\u52A8\u6574\u7406\u533A\u662F\u5426\u6574\u6BB5\u5E26\u5165\uFF08\u9879\u76EE\u8BB0\u5FC6\u8D85\u51FA\u4E0A\u9650\u65F6\uFF0C\u5B83\u4F18\u5148\u4E8E\u4EBA\u5199\u5185\u5BB9\u7684\u5C3E\u90E8\uFF09\u3002")
    }).readonly()
  })).readonly()
})]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_result$schema$value ??= import_zod.z.object({
  "root": import_zod.z.string(),
  "status": import_zod.z.object({
    "clean": import_zod.z.boolean().describe("True when the work tree matches HEAD and the index (no entries at all)."),
    "head": import_zod.z.object({
      "kind": import_zod.z.union([import_zod.z.literal("branch"), import_zod.z.literal("detached"), import_zod.z.literal("unborn")]),
      "name": import_zod.z.string(),
      "oid": import_zod.z.string().optional()
    }).describe("HEAD fact from the `# branch.*` headers."),
    "upstream": import_zod.z.object({
      "ref": import_zod.z.string(),
      "ahead": import_zod.z.number(),
      "behind": import_zod.z.number()
    }).optional().describe("Upstream ref plus ahead/behind from `# branch.upstream` / `# branch.ab`."),
    "entries": import_zod.z.array(import_zod.z.object({
      "kind": import_zod.z.union([import_zod.z.literal("staged"), import_zod.z.literal("unstaged"), import_zod.z.literal("untracked"), import_zod.z.literal("conflict")]).describe("Which surface reports the change: `conflict` for unmerged records (`u`), `untracked` for `?` records, `staged` when the index column differs from `.`, `unstaged` when only the work-tree column differs."),
      "path": import_zod.z.string().describe("Path relative to the repo root."),
      "origPath": import_zod.z.string().optional().describe("Original path for a rename/copy (the `2` record's second path)."),
      "x": import_zod.z.union([import_zod.z.literal("."), import_zod.z.literal("A"), import_zod.z.literal("M"), import_zod.z.literal("D"), import_zod.z.literal("R"), import_zod.z.literal("C"), import_zod.z.literal("U"), import_zod.z.literal("T"), import_zod.z.literal("?"), import_zod.z.literal("AM"), import_zod.z.literal("AD"), import_zod.z.literal("AU"), import_zod.z.literal("AA"), import_zod.z.literal("DD"), import_zod.z.literal("DU"), import_zod.z.literal("UA"), import_zod.z.literal("UD"), import_zod.z.literal("UU")]).describe("Index status column (`X` of `XY`)."),
      "y": import_zod.z.union([import_zod.z.literal("."), import_zod.z.literal("A"), import_zod.z.literal("M"), import_zod.z.literal("D"), import_zod.z.literal("R"), import_zod.z.literal("C"), import_zod.z.literal("U"), import_zod.z.literal("T"), import_zod.z.literal("?"), import_zod.z.literal("AM"), import_zod.z.literal("AD"), import_zod.z.literal("AU"), import_zod.z.literal("AA"), import_zod.z.literal("DD"), import_zod.z.literal("DU"), import_zod.z.literal("UA"), import_zod.z.literal("UD"), import_zod.z.literal("UU")]).describe("Work-tree status column (`Y` of `XY`)."),
      "score": import_zod.z.string().optional().describe("Rename/copy similarity score (`R100` / `C75`), when present.")
    })).describe("Every changed path, in porcelain v2 record order.")
  }),
  "remotes": import_zod.z.array(import_zod.z.object({
    "name": import_zod.z.string().describe("Remote name as configured (`origin`)."),
    "fetchUrl": import_zod.z.string().describe("The URL git fetches from."),
    "pushUrl": import_zod.z.string().optional().describe("The URL git pushes to, when it differs from the fetch URL.")
  })),
  "commits": import_zod.z.array(import_zod.z.object({
    "sha": import_zod.z.string().describe("Full commit SHA."),
    "subject": import_zod.z.string().describe("First line of the commit message."),
    "author": import_zod.z.string().describe("Author name as recorded."),
    "time": import_zod.z.number().describe("Committer timestamp in Unix milliseconds.")
  })),
  "worktrees": import_zod.z.array(import_zod.z.object({
    "statusError": import_zod.z.string().optional().describe("A failed status read is unknown, not a clean work tree."),
    "current": import_zod.z.boolean().describe("True when the Session's repository root is this work tree."),
    "changedPaths": import_zod.z.array(import_zod.z.string()).describe("Repository-relative paths changed in that work tree (staged, unstaged, untracked, conflict); empty when clean, unreadable, or bare."),
    "path": import_zod.z.string().describe("Absolute work-tree path."),
    "head": import_zod.z.string().describe("HEAD oid of that work tree."),
    "branch": import_zod.z.string().optional().describe("Branch checked out there, when not detached."),
    "detached": import_zod.z.boolean().describe("True when the work tree is detached or unborn."),
    "bare": import_zod.z.boolean().describe("True for the bare repository itself.")
  }))
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_1$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_1$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_1$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_result$schema$value ??= import_zod.z.void();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_1$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_1$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_1$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_2$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_2$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_2$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_result$schema$value ??= import_zod.z.void();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_result$schema$value ??= import_zod.z.object({
  "root": import_zod.z.string(),
  "status": import_zod.z.object({
    "clean": import_zod.z.boolean().describe("True when the work tree matches HEAD and the index (no entries at all)."),
    "head": import_zod.z.object({
      "kind": import_zod.z.union([import_zod.z.literal("branch"), import_zod.z.literal("detached"), import_zod.z.literal("unborn")]),
      "name": import_zod.z.string(),
      "oid": import_zod.z.string().optional()
    }).describe("HEAD fact from the `# branch.*` headers."),
    "upstream": import_zod.z.object({
      "ref": import_zod.z.string(),
      "ahead": import_zod.z.number(),
      "behind": import_zod.z.number()
    }).optional().describe("Upstream ref plus ahead/behind from `# branch.upstream` / `# branch.ab`."),
    "entries": import_zod.z.array(import_zod.z.object({
      "kind": import_zod.z.union([import_zod.z.literal("staged"), import_zod.z.literal("unstaged"), import_zod.z.literal("untracked"), import_zod.z.literal("conflict")]).describe("Which surface reports the change: `conflict` for unmerged records (`u`), `untracked` for `?` records, `staged` when the index column differs from `.`, `unstaged` when only the work-tree column differs."),
      "path": import_zod.z.string().describe("Path relative to the repo root."),
      "origPath": import_zod.z.string().optional().describe("Original path for a rename/copy (the `2` record's second path)."),
      "x": import_zod.z.union([import_zod.z.literal("."), import_zod.z.literal("A"), import_zod.z.literal("M"), import_zod.z.literal("D"), import_zod.z.literal("R"), import_zod.z.literal("C"), import_zod.z.literal("U"), import_zod.z.literal("T"), import_zod.z.literal("?"), import_zod.z.literal("AM"), import_zod.z.literal("AD"), import_zod.z.literal("AU"), import_zod.z.literal("AA"), import_zod.z.literal("DD"), import_zod.z.literal("DU"), import_zod.z.literal("UA"), import_zod.z.literal("UD"), import_zod.z.literal("UU")]).describe("Index status column (`X` of `XY`)."),
      "y": import_zod.z.union([import_zod.z.literal("."), import_zod.z.literal("A"), import_zod.z.literal("M"), import_zod.z.literal("D"), import_zod.z.literal("R"), import_zod.z.literal("C"), import_zod.z.literal("U"), import_zod.z.literal("T"), import_zod.z.literal("?"), import_zod.z.literal("AM"), import_zod.z.literal("AD"), import_zod.z.literal("AU"), import_zod.z.literal("AA"), import_zod.z.literal("DD"), import_zod.z.literal("DU"), import_zod.z.literal("UA"), import_zod.z.literal("UD"), import_zod.z.literal("UU")]).describe("Work-tree status column (`Y` of `XY`)."),
      "score": import_zod.z.string().optional().describe("Rename/copy similarity score (`R100` / `C75`), when present.")
    })).describe("Every changed path, in porcelain v2 record order.")
  })
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2$schema$value ??= import_zod.z.boolean();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_result$schema$value ??= import_zod.z.object({
  "path": import_zod.z.string(),
  "text": import_zod.z.string()
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_parameter_0_strict$schema$value ??= import_zod.z.strictObject({
  "path": import_zod.z.string(),
  "selections": import_zod.z.array(import_zod.z.strictObject({
    "key": import_zod.z.string(),
    "name": import_zod.z.string().optional().describe("Final name; defaults to the declared name, then the proposal."),
    "description": import_zod.z.string().optional().describe("Final description; defaults to the declared description, then the proposal."),
    "replaces": import_zod.z.union([import_zod.z.literal(null), import_zod.z.string()]).describe("Install to replace, confirmed by the user from the preview's `replaces`; null installs beside existing entries.")
  }))
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_parameter_0_strict$schema$value ??= import_zod.z.strictObject({
  "sessionId": import_zod.z.string(),
  "enabled": import_zod.z.array(import_zod.z.string()).describe("The complete list of install ids the project may use."),
  "revision": import_zod.z.number().describe("The revision the page was rendered from; a different stored revision refuses the save.")
});
var _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_parameter_0_strict$schema$value ??= import_zod.z.union([import_zod.z.literal("zh"), import_zod.z.literal("en")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_1_strict$schema$value ??= import_zod.z.union([import_zod.z.literal("zh"), import_zod.z.literal("en")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_1_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_1_strict$schema$value ??= import_zod.z.union([import_zod.z.literal("staged"), import_zod.z.literal("unstaged")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_2_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_2_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_2_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_1_strict$schema$value ??= import_zod.z.boolean();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_2_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_2_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_2_strict$schema$value ??= import_zod.z.union([import_zod.z.literal("zh"), import_zod.z.literal("en")]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_1_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_1_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_2_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_2_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_2_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2_strict$schema$value ??= import_zod.z.boolean();
var TYPERT_REMOTE = createTypertRemoteInfo({
  package: "@see-sol-lab/dsh-qol",
  methods: {
    "skillManager/applyImport": {
      service: "skillManager",
      description: "Install the reviewed selections of one source.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "request",
          description: "Source path and selections confirmed from the preview.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#SkillImportRequest",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_parameter_0$schema,
            jsonSchema: { "type": "object", "properties": { "path": { "type": "string" }, "selections": { "type": "array", "items": { "type": "object", "properties": { "key": { "type": "string" }, "name": { "type": "string", "description": "Final name; defaults to the declared name, then the proposal." }, "description": { "type": "string", "description": "Final description; defaults to the declared description, then the proposal." }, "replaces": { "oneOf": [{ "type": "null", "const": null }, { "type": "string" }], "description": "Install to replace, confirmed by the user from the preview's `replaces`; null installs beside existing entries." } }, "required": ["key", "replaces"], "additionalProperties": true } } }, "required": ["path", "selections"], "additionalProperties": true }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#SkillImportRequest",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_parameter_0_strict$schema,
            jsonSchema: { "type": "object", "properties": { "path": { "type": "string" }, "selections": { "type": "array", "items": { "type": "object", "properties": { "key": { "type": "string" }, "name": { "type": "string", "description": "Final name; defaults to the declared name, then the proposal." }, "description": { "type": "string", "description": "Final description; defaults to the declared description, then the proposal." }, "replaces": { "oneOf": [{ "type": "null", "const": null }, { "type": "string" }], "description": "Install to replace, confirmed by the user from the preview's `replaces`; null installs beside existing entries." } }, "required": ["key", "replaces"], "additionalProperties": false } } }, "required": ["path", "selections"], "additionalProperties": false }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#SkillImportOutcome",
        create: _deepseek_ai_dsh_workbench_inspector_skillManager_applyImport_result$schema,
        description: "installs and per-selection failures.",
        jsonSchema: { "type": "object", "properties": { "installed": { "type": "array", "items": { "type": "object", "properties": { "location": { "type": "string", "description": "Absolute install directory." }, "status": { "type": "string", "enum": ["ok", "invalid"] }, "issue": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true, "description": "Present when `status` is `invalid`: what is wrong with the installed `SKILL.md`." }, "schemaVersion": { "type": "number", "const": 1 }, "installId": { "type": "string", "description": "Directory name under the library; `<name>-<8 hex>`, kept across replacements." }, "name": { "type": "string" }, "description": { "type": "string" }, "whenToUse": { "type": "string" }, "installedAt": { "type": "string", "description": "ISO time of the first install." }, "updatedAt": { "type": "string", "description": "ISO time of the latest install or replacement." }, "origin": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["directory", "zip", "markdown"] }, "path": { "type": "string", "description": "Absolute path of the directory, archive, or Markdown file that was imported." }, "entry": { "type": "string", "description": "Posix-relative path of the skill entry inside the source (`SKILL.md`, `pack/a/SKILL.md`, or the file name)." } }, "required": ["kind", "path", "entry"], "additionalProperties": true }, "files": { "type": "number", "description": "Regular files copied into the install directory, excluding the manifest." }, "bytes": { "type": "number", "description": "Bytes of those files." } }, "required": ["location", "status", "schemaVersion", "installId", "name", "description", "installedAt", "updatedAt", "origin", "files", "bytes"], "additionalProperties": true } }, "failures": { "type": "array", "items": { "type": "object", "properties": { "key": { "type": "string" }, "issue": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true } }, "required": ["key", "issue"], "additionalProperties": true } } }, "required": ["installed", "failures"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/skill-manager/index.ts", "line": 208, "column": 9 }
    },
    "skillManager/installReferences": {
      service: "skillManager",
      description: "Projects whose selection references an install, for the uninstall confirmation.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "installId",
          description: "Directory name under the library.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#skillManager/installReferences:installId",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#skillManager/installReferences:installId",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#SkillInstallReferences",
        create: _deepseek_ai_dsh_workbench_inspector_skillManager_installReferences_result$schema,
        description: "the referencing projects.",
        jsonSchema: { "type": "object", "properties": { "installId": { "type": "string" }, "projects": { "type": "array", "items": { "type": "object", "properties": { "key": { "type": "string", "description": "Project key: sha256 of the canonical folder path (see `SkillProjectView.project`)." }, "path": { "type": "string", "description": "Canonical project folder as recorded when the selection was saved." } }, "required": ["key", "path"], "additionalProperties": true } } }, "required": ["installId", "projects"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/skill-manager/index.ts", "line": 237, "column": 9 }
    },
    "skillManager/inventory": {
      service: "skillManager",
      description: "List installed, orphaned and read-only skills.",
      invocation: { kind: "direct" },
      parameters: [],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#SkillInventory",
        create: _deepseek_ai_dsh_workbench_inspector_skillManager_inventory_result$schema,
        description: "the inventory.",
        jsonSchema: { "type": "object", "properties": { "libraryDir": { "type": "string", "description": "Absolute library directory under the active DSH home." }, "installed": { "type": "array", "items": { "type": "object", "properties": { "location": { "type": "string", "description": "Absolute install directory." }, "status": { "type": "string", "enum": ["ok", "invalid"] }, "issue": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true, "description": "Present when `status` is `invalid`: what is wrong with the installed `SKILL.md`." }, "schemaVersion": { "type": "number", "const": 1 }, "installId": { "type": "string", "description": "Directory name under the library; `<name>-<8 hex>`, kept across replacements." }, "name": { "type": "string" }, "description": { "type": "string" }, "whenToUse": { "type": "string" }, "installedAt": { "type": "string", "description": "ISO time of the first install." }, "updatedAt": { "type": "string", "description": "ISO time of the latest install or replacement." }, "origin": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["directory", "zip", "markdown"] }, "path": { "type": "string", "description": "Absolute path of the directory, archive, or Markdown file that was imported." }, "entry": { "type": "string", "description": "Posix-relative path of the skill entry inside the source (`SKILL.md`, `pack/a/SKILL.md`, or the file name)." } }, "required": ["kind", "path", "entry"], "additionalProperties": true }, "files": { "type": "number", "description": "Regular files copied into the install directory, excluding the manifest." }, "bytes": { "type": "number", "description": "Bytes of those files." } }, "required": ["location", "status", "schemaVersion", "installId", "name", "description", "installedAt", "updatedAt", "origin", "files", "bytes"], "additionalProperties": true } }, "orphans": { "type": "array", "items": { "type": "string" }, "description": "Directory names under the library without a readable manifest; never touched by uninstall." }, "readOnly": { "type": "array", "items": { "type": "object", "properties": { "source": { "type": "string", "enum": ["user-dsh", "user-agents", "bundled"] }, "name": { "type": "string" }, "description": { "type": "string" }, "location": { "type": "string", "description": "Absolute path of the skill file." } }, "required": ["source", "name", "description", "location"], "additionalProperties": true } } }, "required": ["libraryDir", "installed", "orphans", "readOnly"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/skill-manager/index.ts", "line": 184, "column": 9 }
    },
    "skillManager/previewImport": {
      service: "skillManager",
      description: "Review a directory, archive or Markdown file without writing anything.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "path",
          description: "Absolute source path picked by the user.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#skillManager/previewImport:path",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#skillManager/previewImport:path",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#SkillImportPreview",
        create: _deepseek_ai_dsh_workbench_inspector_skillManager_previewImport_result$schema,
        description: "candidates with their issues and proposals, plus source problems.",
        jsonSchema: { "type": "object", "properties": { "source": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["directory", "zip", "markdown"] }, "path": { "type": "string" } }, "required": ["kind", "path"], "additionalProperties": true }, "candidates": { "type": "array", "items": { "type": "object", "properties": { "key": { "type": "string", "description": "Identifies the candidate within the preview; passed back in the apply request." }, "entry": { "type": "string", "description": "Posix-relative path of the entry inside the source." }, "kind": { "type": "string", "enum": ["markdown", "skill"] }, "name": { "oneOf": [{ "type": "null", "const": null }, { "type": "string" }], "description": "Name declared by the entry's frontmatter; null when missing or invalid." }, "description": { "oneOf": [{ "type": "null", "const": null }, { "type": "string" }], "description": "Description declared by the entry's frontmatter; null when missing." }, "whenToUse": { "type": "string" }, "proposed": { "type": "object", "properties": { "name": { "type": "string" }, "description": { "type": "string" } }, "required": [], "additionalProperties": true, "description": "Proposed values for missing metadata; applied only to the installed copy." }, "issues": { "type": "array", "items": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true }, "description": "Problems found; blocking ones have `fixable` unset or false." }, "files": { "type": "number", "description": "Regular files under the candidate's directory, including the entry." }, "bytes": { "type": "number" }, "replaces": { "oneOf": [{ "type": "null", "const": null }, { "type": "object", "properties": { "installId": { "type": "string" }, "name": { "type": "string" }, "origin": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["directory", "zip", "markdown"] }, "path": { "type": "string", "description": "Absolute path of the directory, archive, or Markdown file that was imported." }, "entry": { "type": "string", "description": "Posix-relative path of the skill entry inside the source (`SKILL.md`, `pack/a/SKILL.md`, or the file name)." } }, "required": ["kind", "path", "entry"], "additionalProperties": true }, "location": { "type": "string" } }, "required": ["installId", "name", "origin", "location"], "additionalProperties": true }], "description": "Install the candidate would replace (matched by origin first, then by name), named so the actual target is visible; null when none." }, "installable": { "type": "boolean", "description": "Whether the candidate can be installed as reviewed (no blocking issue, and a name plus description resolve)." } }, "required": ["key", "entry", "kind", "name", "description", "proposed", "issues", "files", "bytes", "replaces", "installable"], "additionalProperties": true } }, "problems": { "type": "array", "items": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true }, "description": "Problems with the source itself (unreadable, unsupported, nothing found)." } }, "required": ["source", "candidates", "problems"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/skill-manager/index.ts", "line": 196, "column": 9 }
    },
    "skillManager/projectView": {
      service: "skillManager",
      description: "The project page of one session: its folder, the saved selection, and what each tick does in the session's real catalog.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session whose recorded cwd names the project.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#SkillProjectView",
        create: _deepseek_ai_dsh_workbench_inspector_skillManager_projectView_result$schema,
        description: "the page.",
        jsonSchema: { "type": "object", "properties": { "sessionId": { "type": "string" }, "project": { "oneOf": [{ "type": "null", "const": null }, { "type": "object", "properties": { "key": { "type": "string", "description": "Project key: sha256 of the canonical folder path (see `SkillProjectView.project`)." }, "path": { "type": "string", "description": "Canonical project folder as recorded when the selection was saved." } }, "required": ["key", "path"], "additionalProperties": true }], "description": "The session's project folder (canonical path and its key); null when the session has none." }, "problem": { "type": "string", "enum": ["no-cwd", "missing-folder"], "description": "Why `project` is null or unusable." }, "revision": { "type": "number", "description": "Revision of the saved selection; 0 before the first save. Sent back with a save." }, "entries": { "type": "array", "items": { "type": "object", "properties": { "installId": { "type": "string" }, "name": { "type": "string" }, "description": { "type": "string" }, "status": { "type": "string", "enum": ["ok", "invalid"] }, "issue": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true, "description": "Present when `status` is `invalid`." }, "enabled": { "type": "boolean", "description": "Whether the project's saved selection includes this install." }, "effect": { "type": "string", "enum": ["active", "missing", "inactive", "invalid", "shadowed"] }, "shadowedBy": { "type": "object", "properties": { "source": { "type": "string" }, "provider": { "type": "string" } }, "required": ["source", "provider"], "additionalProperties": true, "description": "The winning same-name skill's source and provider when `effect` is `shadowed`." } }, "required": ["installId", "name", "description", "status", "enabled", "effect"], "additionalProperties": true } }, "catalogComplete": { "type": "boolean", "description": "Whether the session's real catalog could be read; false means `effect` is a best guess from the selection alone." } }, "required": ["sessionId", "project", "revision", "entries", "catalogComplete"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/skill-manager/index.ts", "line": 251, "column": 9 }
    },
    "skillManager/setProjectSelection": {
      service: "skillManager",
      description: "Save the selection of the session's project. The registry catalog is invalidated on success, so open sessions of the folder pick the change up at their next request; already injected skill content stays in their history until a new session.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "request",
          description: "Session, complete install-id list, and the page's revision.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#SkillProjectSelectionRequest",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_parameter_0$schema,
            jsonSchema: { "type": "object", "properties": { "sessionId": { "type": "string" }, "enabled": { "type": "array", "items": { "type": "string" }, "description": "The complete list of install ids the project may use." }, "revision": { "type": "number", "description": "The revision the page was rendered from; a different stored revision refuses the save." } }, "required": ["sessionId", "enabled", "revision"], "additionalProperties": true }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#SkillProjectSelectionRequest",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_parameter_0_strict$schema,
            jsonSchema: { "type": "object", "properties": { "sessionId": { "type": "string" }, "enabled": { "type": "array", "items": { "type": "string" }, "description": "The complete list of install ids the project may use." }, "revision": { "type": "number", "description": "The revision the page was rendered from; a different stored revision refuses the save." } }, "required": ["sessionId", "enabled", "revision"], "additionalProperties": false }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#SkillProjectSelectionOutcome",
        create: _deepseek_ai_dsh_workbench_inspector_skillManager_setProjectSelection_result$schema,
        description: "whether it saved, and the page as it reads afterwards.",
        jsonSchema: { "type": "object", "properties": { "saved": { "type": "boolean" }, "issue": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true, "description": "Present when `saved` is false." }, "view": { "type": "object", "properties": { "sessionId": { "type": "string" }, "project": { "oneOf": [{ "type": "null", "const": null }, { "type": "object", "properties": { "key": { "type": "string", "description": "Project key: sha256 of the canonical folder path (see `SkillProjectView.project`)." }, "path": { "type": "string", "description": "Canonical project folder as recorded when the selection was saved." } }, "required": ["key", "path"], "additionalProperties": true }], "description": "The session's project folder (canonical path and its key); null when the session has none." }, "problem": { "type": "string", "enum": ["no-cwd", "missing-folder"], "description": "Why `project` is null or unusable." }, "revision": { "type": "number", "description": "Revision of the saved selection; 0 before the first save. Sent back with a save." }, "entries": { "type": "array", "items": { "type": "object", "properties": { "installId": { "type": "string" }, "name": { "type": "string" }, "description": { "type": "string" }, "status": { "type": "string", "enum": ["ok", "invalid"] }, "issue": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true, "description": "Present when `status` is `invalid`." }, "enabled": { "type": "boolean", "description": "Whether the project's saved selection includes this install." }, "effect": { "type": "string", "enum": ["active", "missing", "inactive", "invalid", "shadowed"] }, "shadowedBy": { "type": "object", "properties": { "source": { "type": "string" }, "provider": { "type": "string" } }, "required": ["source", "provider"], "additionalProperties": true, "description": "The winning same-name skill's source and provider when `effect` is `shadowed`." } }, "required": ["installId", "name", "description", "status", "enabled", "effect"], "additionalProperties": true } }, "catalogComplete": { "type": "boolean", "description": "Whether the session's real catalog could be read; false means `effect` is a best guess from the selection alone." } }, "required": ["sessionId", "project", "revision", "entries", "catalogComplete"], "additionalProperties": true, "description": "The page as it reads after the attempt (fresh on conflict, so the person sees what won)." } }, "required": ["saved", "view"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/skill-manager/index.ts", "line": 268, "column": 9 }
    },
    "skillManager/uninstall": {
      service: "skillManager",
      description: "Remove one managed install. Project selections that name it keep the reference as missing; the outcome lists those projects.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "installId",
          description: "Directory name under the library.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#skillManager/uninstall:installId",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#skillManager/uninstall:installId",
            create: _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#SkillUninstallOutcome",
        create: _deepseek_ai_dsh_workbench_inspector_skillManager_uninstall_result$schema,
        description: "the outcome; refusals carry an issue and remove nothing.",
        jsonSchema: { "type": "object", "properties": { "installId": { "type": "string" }, "location": { "type": "string", "description": "Absolute directory that was (or would have been) removed." }, "removed": { "type": "boolean" }, "issue": { "type": "object", "properties": { "code": { "type": "string", "enum": ["missing-frontmatter", "invalid-frontmatter", "missing-name", "invalid-name", "missing-description", "legacy-key", "invalid-boolean", "symlink-skipped", "unsafe-path", "too-many-files", "too-large", "zip-unreadable", "zip-too-large", "source-missing", "source-unsupported", "no-skill-found", "candidate-missing", "name-conflict", "replace-target-missing", "library-unwritable", "manifest-invalid", "skill-invalid", "not-managed", "io-error", "no-project", "unknown-install", "revision-conflict"] }, "message": { "type": "string", "description": "Human-readable detail in English; the client maps `code` to localized copy." }, "path": { "type": "string", "description": "Posix-relative path inside the source or install the problem is about, when it is about one file." }, "fixable": { "type": "boolean", "description": "Whether the review can repair it in the installed copy (name and description proposals)." } }, "required": ["code", "message"], "additionalProperties": true, "description": "Present when `removed` is false." }, "affected": { "type": "array", "items": { "type": "object", "properties": { "key": { "type": "string", "description": "Project key: sha256 of the canonical folder path (see `SkillProjectView.project`)." }, "path": { "type": "string", "description": "Canonical project folder as recorded when the selection was saved." } }, "required": ["key", "path"], "additionalProperties": true }, "description": "Projects whose selection still names this install. The references stay in place as missing entries \u2014 nothing switches to another skill of the same name \u2014 until each project clears them." } }, "required": ["installId", "location", "removed", "affected"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/skill-manager/index.ts", "line": 221, "column": 9 }
    },
    "workbenchInspector/accountUsage": {
      service: "workbenchInspector",
      description: "\u8D26\u6237\u7528\u91CF\u4E0E\u4F59\u989D\uFF1A\u63D2\u4EF6\u540E\u53F0\u5E26\u5B98\u65B9\u8D26\u53F7\u7684\u5E73\u53F0\u4EE4\u724C\u8BF7\u6C42\u5F00\u653E\u5E73\u53F0\uFF0C\u53EA\u8FD4\u56DE\u805A\u5408\u503C\u3002",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "locale",
          description: "\u754C\u9762\u8BED\u8A00\u3002",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchSeedLocale",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_parameter_0$schema,
            jsonSchema: { "type": "string", "enum": ["zh", "en"] }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchSeedLocale",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_parameter_0_strict$schema,
            jsonSchema: { "type": "string", "enum": ["zh", "en"] }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchUsage",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_accountUsage_result$schema,
        description: "\u7528\u91CF\u7ED3\u679C\uFF1B\u6CA1\u767B\u5F55\u4E3A signed-out\u3002",
        jsonSchema: { "type": "object", "properties": { "status": { "type": "string", "enum": ["signed-out", "ready", "unavailable"] }, "reason": { "oneOf": [{ "type": "null", "const": null }, { "type": "string", "enum": ["network", "blocked", "timeout", "format", "no-session"] }], "description": "unavailable \u65F6\u7684\u539F\u56E0\uFF1B\u5176\u4F59\u4E3A null\u3002" }, "fetchedAt": { "type": "string", "description": "\u8FD9\u4EFD\u6570\u636E\u53D6\u5230\u7684\u65F6\u523B\uFF08ISO\uFF09\u3002" }, "data": { "oneOf": [{ "type": "null", "const": null }, { "type": "object", "properties": { "balances": { "type": "array", "items": { "type": "object", "properties": { "currency": { "type": "string" }, "amount": { "type": "string" } }, "required": ["currency", "amount"], "additionalProperties": true }, "description": "\u5145\u503C\u4F59\u989D\uFF0C\u53EF\u591A\u5E01\u79CD\u3002" }, "bonus": { "type": "array", "items": { "type": "object", "properties": { "currency": { "type": "string" }, "amount": { "type": "string" } }, "required": ["currency", "amount"], "additionalProperties": true }, "description": "\u8D60\u91D1\u4F59\u989D\uFF0C\u53EA\u4FDD\u7559 > 0 \u7684\u94B1\u5305\u3002" }, "totalCosts": { "type": "array", "items": { "type": "object", "properties": { "currency": { "type": "string" }, "amount": { "type": "string" } }, "required": ["currency", "amount"], "additionalProperties": true }, "description": "\u7D2F\u8BA1\u6D88\u8D39\uFF0C\u6309\u5E01\u79CD\u3002" }, "today": { "type": "object", "properties": { "costs": { "type": "array", "items": { "type": "object", "properties": { "currency": { "type": "string" }, "amount": { "type": "string" } }, "required": ["currency", "amount"], "additionalProperties": true }, "description": "\u8BE5\u65F6\u6BB5\u6D88\u8D39\u91D1\u989D\uFF0C\u6309\u5E01\u79CD\u5206\u5217\uFF08\u5341\u8FDB\u5236\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u4FDD\u7559\u539F\u6709\u5C0F\u6570\u4F4D\uFF09\u3002" }, "requests": { "type": "number" }, "tokens": { "type": "number", "description": "Token \u603B\u6570 = \u7F13\u5B58\u547D\u4E2D + \u7F13\u5B58\u672A\u547D\u4E2D + \u8F93\u51FA\u3002" }, "cacheHitRate": { "oneOf": [{ "type": "null", "const": null }, { "type": "number" }], "description": "\u7F13\u5B58\u547D\u4E2D\u7387 = \u547D\u4E2D / (\u547D\u4E2D + \u672A\u547D\u4E2D)\uFF1B\u6CA1\u6709\u8F93\u5165 token \u65F6\u4E3A null\u3002" } }, "required": ["costs", "requests", "tokens", "cacheHitRate"], "additionalProperties": true }, "days7": { "type": "object", "properties": { "costs": { "type": "array", "items": { "type": "object", "properties": { "currency": { "type": "string" }, "amount": { "type": "string" } }, "required": ["currency", "amount"], "additionalProperties": true }, "description": "\u8BE5\u65F6\u6BB5\u6D88\u8D39\u91D1\u989D\uFF0C\u6309\u5E01\u79CD\u5206\u5217\uFF08\u5341\u8FDB\u5236\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u4FDD\u7559\u539F\u6709\u5C0F\u6570\u4F4D\uFF09\u3002" }, "requests": { "type": "number" }, "tokens": { "type": "number", "description": "Token \u603B\u6570 = \u7F13\u5B58\u547D\u4E2D + \u7F13\u5B58\u672A\u547D\u4E2D + \u8F93\u51FA\u3002" }, "cacheHitRate": { "oneOf": [{ "type": "null", "const": null }, { "type": "number" }], "description": "\u7F13\u5B58\u547D\u4E2D\u7387 = \u547D\u4E2D / (\u547D\u4E2D + \u672A\u547D\u4E2D)\uFF1B\u6CA1\u6709\u8F93\u5165 token \u65F6\u4E3A null\u3002" } }, "required": ["costs", "requests", "tokens", "cacheHitRate"], "additionalProperties": true }, "days30": { "type": "object", "properties": { "costs": { "type": "array", "items": { "type": "object", "properties": { "currency": { "type": "string" }, "amount": { "type": "string" } }, "required": ["currency", "amount"], "additionalProperties": true }, "description": "\u8BE5\u65F6\u6BB5\u6D88\u8D39\u91D1\u989D\uFF0C\u6309\u5E01\u79CD\u5206\u5217\uFF08\u5341\u8FDB\u5236\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u4FDD\u7559\u539F\u6709\u5C0F\u6570\u4F4D\uFF09\u3002" }, "requests": { "type": "number" }, "tokens": { "type": "number", "description": "Token \u603B\u6570 = \u7F13\u5B58\u547D\u4E2D + \u7F13\u5B58\u672A\u547D\u4E2D + \u8F93\u51FA\u3002" }, "cacheHitRate": { "oneOf": [{ "type": "null", "const": null }, { "type": "number" }], "description": "\u7F13\u5B58\u547D\u4E2D\u7387 = \u547D\u4E2D / (\u547D\u4E2D + \u672A\u547D\u4E2D)\uFF1B\u6CA1\u6709\u8F93\u5165 token \u65F6\u4E3A null\u3002" } }, "required": ["costs", "requests", "tokens", "cacheHitRate"], "additionalProperties": true }, "heatmap": { "type": "array", "items": { "type": "object", "properties": { "date": { "type": "string", "description": "`YYYY-MM-DD`\uFF08\u6309\u8BA1\u5212\u7684 tz\uFF09\u3002" }, "tokens": { "type": "number" } }, "required": ["date", "tokens"], "additionalProperties": true }, "description": "60 \u683C\uFF0C\u6700\u65E9\u7684\u4E00\u5929\u5728\u524D\u3002" } }, "required": ["balances", "bonus", "totalCosts", "today", "days7", "days30", "heatmap"], "additionalProperties": true }], "description": "ready \u65F6\u5B58\u5728\u3002" }, "usagePageUrl": { "type": "string", "description": "\u5B98\u65B9\u7528\u91CF\u9875\u3002" } }, "required": ["status", "reason", "fetchedAt", "data", "usagePageUrl"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 120, "column": 9 }
    },
    "workbenchInspector/cleanSandboxMarks": {
      service: "workbenchInspector",
      description: "Remove the Windows ACL sandbox's marks from a folder the desktop user chose (DeepSeekGUI 2026-09-29): its grant, the delete deny, and the Low label that make programs started there run at Low integrity. The sandbox provider picks the folder that actually carries them (the chosen one or the ancestor they are inherited from) and refuses while a confined command runs there.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "path",
          description: "Absolute folder path from the desktop's folder dialog.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/cleanSandboxMarks:path",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/cleanSandboxMarks:path",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchSandboxClean",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_cleanSandboxMarks_result$schema,
        description: "what was done, and on which folder.",
        jsonSchema: { "type": "object", "properties": { "status": { "type": "string", "enum": ["cleaned", "clean", "busy", "unsupported"] }, "root": { "type": "string", "description": "The folder the marks were on: the chosen one, or the ancestor they are inherited from." } }, "required": ["status", "root"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 181, "column": 9 }
    },
    "workbenchInspector/createProjectAgents": {
      service: "workbenchInspector",
      description: "Create the project AGENTS.md from the bundled template once; an existing file is kept.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session whose recorded cwd anchors the write.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "locale",
          description: "Template language.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchSeedLocale",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_1$schema,
            jsonSchema: { "type": "string", "enum": ["zh", "en"] }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchSeedLocale",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_parameter_1_strict$schema,
            jsonSchema: { "type": "string", "enum": ["zh", "en"] }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/createProjectAgents:result",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_createProjectAgents_result$schema,
        description: "whether the file was created or already existed.",
        jsonSchema: { "type": "string", "enum": ["created", "exists"] }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 341, "column": 9 }
    },
    "workbenchInspector/deleteSession": {
      service: "workbenchInspector",
      description: "Delegate authorized deletion to the Session owner, waiting for active work.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session selected by the desktop user.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "signature",
          description: "Desktop authorization bound to Home and Session ID.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/deleteSession:signature",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_1$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/deleteSession:signature",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_parameter_1_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/deleteSession:result",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_deleteSession_result$schema,
        description: "Completion of content deletion and its client announcement.",
        jsonSchemaError: "typert tool schema: unsupported void value"
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 462, "column": 9 }
    },
    "workbenchInspector/diff": {
      service: "workbenchInspector",
      description: "Read the current patch for one path or the complete selected scope.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session whose recorded cwd anchors the read.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "scope",
          description: "Index or unstaged changes.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-git/types#DiffScope",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_1$schema,
            jsonSchema: { "type": "string", "enum": ["staged", "unstaged"] }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-git/types#DiffScope",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_1_strict$schema,
            jsonSchema: { "type": "string", "enum": ["staged", "unstaged"] }
          }
        },
        {
          name: "path",
          description: "Repository-relative file; empty selects all changes.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/diff:path",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_2$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/diff:path",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_parameter_2_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@deepseek-ai/dsh-git/types#DiffResult",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_diff_result$schema,
        description: "the bounded provider diff; truncation is never silent.",
        jsonSchema: { "type": "object", "properties": { "files": { "type": "array", "items": { "type": "object", "properties": { "path": { "type": "string", "description": "Path relative to the repo root." }, "origPath": { "type": "string", "description": "Original path for a rename/copy." }, "status": { "type": "string", "enum": ["deleted", "added", "modified", "renamed", "copied", "typechange"], "description": "Letter status from the name-status vocabulary (A/M/D/R/C/T)." }, "binary": { "type": "boolean", "description": "True when Git reports a binary file (`-` numstat columns)." }, "addedLines": { "type": "number", "description": "Added lines; absent for binary files." }, "deletedLines": { "type": "number", "description": "Deleted lines; absent for binary files." }, "score": { "type": "number", "description": "Rename/copy similarity score (`100`), when present." } }, "required": ["path", "status", "binary"], "additionalProperties": true }, "description": "Every changed file in record order." }, "patch": { "type": "string", "description": "The requested unified patch, when `wantPatch` was set and the bound held." } }, "required": ["files"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 378, "column": 9 }
    },
    "workbenchInspector/exportMarkdown": {
      service: "workbenchInspector",
      description: "Render one Session as a human-readable Markdown document (B8-P1). The log is read through the query service \u2014 a running turn's newest events may not be on disk yet \u2014 and folded by the pure renderer; no model is called and nothing is sanitized. Compaction markers ride the raw log, so pre-compaction messages are quoted as they happened.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session selected by the desktop user.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "includeDetails",
          description: "Whether tool calls and reasoning blocks ride along.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/exportMarkdown:includeDetails",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_1$schema,
            jsonSchema: { "type": "boolean" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/exportMarkdown:includeDetails",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_1_strict$schema,
            jsonSchema: { "type": "boolean" }
          }
        },
        {
          name: "language",
          description: "The desktop UI language for headings and labels.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchExportLanguage",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_2$schema,
            jsonSchema: { "type": "string", "enum": ["zh", "en"] }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchExportLanguage",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_parameter_2_strict$schema,
            jsonSchema: { "type": "string", "enum": ["zh", "en"] }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchExportMarkdown",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_exportMarkdown_result$schema,
        description: "the display title and the rendered document.",
        jsonSchema: { "type": "object", "properties": { "title": { "type": "string", "description": "The Session's current display title, already resolved." }, "markdown": { "type": "string", "description": "The complete document; the desktop writes it UTF-8 without BOM." } }, "required": ["title", "markdown"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 427, "column": 9 }
    },
    "workbenchInspector/globalMemory": {
      service: "workbenchInspector",
      description: "Read the global memory `<DSH home>/memory.md`.",
      invocation: { kind: "direct" },
      parameters: [],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchGlobalMemory",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_globalMemory_result$schema,
        description: "the home and its text ('' when absent, null when unreadable or too large).",
        jsonSchema: { "type": "object", "properties": { "home": { "type": "string", "description": "\u751F\u6548\u7684 DSH home\u3002" }, "text": { "oneOf": [{ "type": "null", "const": null }, { "type": "string" }], "description": "\u5168\u6587\uFF1B\u8BFB\u4E0D\u5230\u6216\u592A\u5927\u65F6\u4E3A null\u3002" } }, "required": ["home", "text"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 291, "column": 9 }
    },
    "workbenchInspector/lastReply": {
      service: "workbenchInspector",
      description: "The newest assistant reply of a Session and whether its turn has ended. The desktop's feedback triage (#15) prompts a hidden session and polls this; reading the log through the query service keeps it off the streaming follow channel the desktop has no client for.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "the session to read.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchLastReply",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_lastReply_result$schema,
        description: "the reply text (text blocks joined) and its completeness.",
        jsonSchema: { "type": "object", "properties": { "text": { "oneOf": [{ "type": "null", "const": null }, { "type": "string" }], "description": "Plain text of the newest assistant message (text blocks joined); null before the first reply." }, "complete": { "type": "boolean", "description": "Whether a `turn/end` follows that message, i.e. the reply is complete." } }, "required": ["text", "complete"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 397, "column": 9 }
    },
    "workbenchInspector/memory": {
      service: "workbenchInspector",
      description: 'Read the project memory file (`<folder>.memory.md` in the Session cwd) and whether the project has an AGENTS.md. A missing memory file is a normal state ("no memory yet"), not a failure.',
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session whose recorded cwd anchors the read.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchMemory",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memory_result$schema,
        description: "the cwd, the memory file name, its text or null, and the AGENTS.md presence.",
        jsonSchema: { "type": "object", "properties": { "cwd": { "type": "string", "description": "Session working directory." }, "fileName": { "type": "string", "description": "`<folder>.memory.md`, from {@link projectMemoryFileName}." }, "text": { "oneOf": [{ "type": "null", "const": null }, { "type": "string" }], "description": "Memory text; null when the file does not exist yet." }, "agents": { "type": "boolean", "description": "Whether `AGENTS.md` exists in the working directory." } }, "required": ["cwd", "fileName", "text", "agents"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 272, "column": 9 }
    },
    "workbenchInspector/memoryInjection": {
      service: "workbenchInspector",
      description: "\u8FD9\u6BB5\u4F1A\u8BDD\u6BCF\u6B21\u52A0\u8F7D\u65F6\u5E26\u5165\u4E86\u54EA\u4E9B\u8BB0\u5FC6\uFF08\u89C1 MemoryInjection\uFF1B\u6700\u540E\u4E00\u6761\u662F\u5F53\u524D\u8FD9\u6B21\u52A0\u8F7D\u5728\u7528\u7684\uFF09\u3002 \u6CA1\u6709\u8BB0\u5F55\u5C31\u662F null\uFF1A\u4F1A\u8BDD\u8FD8\u6CA1\u53D1\u8FC7\u7B2C\u4E00\u6761\uFF0C\u6216\u662F\u672C\u529F\u80FD\u4E4B\u524D\u7684\u8001\u4F1A\u8BDD\u3002",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "\u4F1A\u8BDD\u3002",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/memoryInjection:result",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memoryInjection_result$schema,
        description: "\u5E26\u5165\u4E8B\u5B9E\uFF0C\u6216 null\u3002",
        jsonSchema: { "oneOf": [{ "type": "null", "const": null }, { "type": "object", "properties": { "sessionId": { "type": "string" }, "entries": { "type": "array", "items": { "type": "object", "properties": { "at": { "type": "string" }, "capBytes": { "type": "number", "description": "\u6BCF\u4E2A\u6587\u4EF6\u7684\u8BFB\u53D6\u4E0A\u9650\uFF08\u5B57\u8282\uFF09\u3002" }, "global": { "type": "object", "properties": { "path": { "type": "string" }, "status": { "type": "string", "enum": ["absent", "present", "empty", "truncated", "unreadable"] }, "bytes": { "type": "number", "description": "\u5B9E\u9645\u5E26\u5165\u7684 UTF-8 \u5B57\u8282\u6570\u4E0E\u5B57\u7B26\u6570\uFF08code points\uFF09\u3002" }, "chars": { "type": "number" }, "sha256": { "type": "string", "description": "\u5B9E\u9645\u5E26\u5165\u6587\u672C\u7684 SHA-256\uFF1A\u540C\u6837\u957F\u5EA6\u3001\u4E0D\u540C\u5185\u5BB9\u4E5F\u5206\u5F97\u5F00\u3002" }, "autoArea": { "type": "string", "enum": ["absent", "included"], "description": "\u81EA\u52A8\u6574\u7406\u533A\u662F\u5426\u6574\u6BB5\u5E26\u5165\uFF08\u9879\u76EE\u8BB0\u5FC6\u8D85\u51FA\u4E0A\u9650\u65F6\uFF0C\u5B83\u4F18\u5148\u4E8E\u4EBA\u5199\u5185\u5BB9\u7684\u5C3E\u90E8\uFF09\u3002" } }, "required": ["path", "status", "bytes", "chars", "sha256"], "additionalProperties": true }, "project": { "type": "object", "properties": { "path": { "type": "string" }, "status": { "type": "string", "enum": ["absent", "present", "empty", "truncated", "unreadable"] }, "bytes": { "type": "number", "description": "\u5B9E\u9645\u5E26\u5165\u7684 UTF-8 \u5B57\u8282\u6570\u4E0E\u5B57\u7B26\u6570\uFF08code points\uFF09\u3002" }, "chars": { "type": "number" }, "sha256": { "type": "string", "description": "\u5B9E\u9645\u5E26\u5165\u6587\u672C\u7684 SHA-256\uFF1A\u540C\u6837\u957F\u5EA6\u3001\u4E0D\u540C\u5185\u5BB9\u4E5F\u5206\u5F97\u5F00\u3002" }, "autoArea": { "type": "string", "enum": ["absent", "included"], "description": "\u81EA\u52A8\u6574\u7406\u533A\u662F\u5426\u6574\u6BB5\u5E26\u5165\uFF08\u9879\u76EE\u8BB0\u5FC6\u8D85\u51FA\u4E0A\u9650\u65F6\uFF0C\u5B83\u4F18\u5148\u4E8E\u4EBA\u5199\u5185\u5BB9\u7684\u5C3E\u90E8\uFF09\u3002" } }, "required": ["path", "status", "bytes", "chars", "sha256"], "additionalProperties": true } }, "required": ["at", "capBytes", "global", "project"], "additionalProperties": true } } }, "required": ["sessionId", "entries"], "additionalProperties": true }] }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 145, "column": 3 }
    },
    "workbenchInspector/overview": {
      service: "workbenchInspector",
      description: "Repository-level facts for the Git and Worktree views in one read: status, configured remotes, the newest commits, and every registered work tree with its own changed paths. Nothing is written; a work tree whose status cannot be read reports no changed paths.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session whose recorded cwd anchors the read.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchOverview",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_overview_result$schema,
        description: "the read-only repository overview.",
        jsonSchema: { "type": "object", "properties": { "root": { "type": "string" }, "status": { "type": "object", "properties": { "clean": { "type": "boolean", "description": "True when the work tree matches HEAD and the index (no entries at all)." }, "head": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["branch", "detached", "unborn"] }, "name": { "type": "string" }, "oid": { "type": "string" } }, "required": ["kind", "name"], "additionalProperties": true, "description": "HEAD fact from the `# branch.*` headers." }, "upstream": { "type": "object", "properties": { "ref": { "type": "string" }, "ahead": { "type": "number" }, "behind": { "type": "number" } }, "required": ["ref", "ahead", "behind"], "additionalProperties": true, "description": "Upstream ref plus ahead/behind from `# branch.upstream` / `# branch.ab`." }, "entries": { "type": "array", "items": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["staged", "unstaged", "untracked", "conflict"], "description": "Which surface reports the change: `conflict` for unmerged records (`u`), `untracked` for `?` records, `staged` when the index column differs from `.`, `unstaged` when only the work-tree column differs." }, "path": { "type": "string", "description": "Path relative to the repo root." }, "origPath": { "type": "string", "description": "Original path for a rename/copy (the `2` record's second path)." }, "x": { "type": "string", "enum": [".", "A", "M", "D", "R", "C", "U", "T", "?", "AM", "AD", "AU", "AA", "DD", "DU", "UA", "UD", "UU"], "description": "Index status column (`X` of `XY`)." }, "y": { "type": "string", "enum": [".", "A", "M", "D", "R", "C", "U", "T", "?", "AM", "AD", "AU", "AA", "DD", "DU", "UA", "UD", "UU"], "description": "Work-tree status column (`Y` of `XY`)." }, "score": { "type": "string", "description": "Rename/copy similarity score (`R100` / `C75`), when present." } }, "required": ["kind", "path", "x", "y"], "additionalProperties": true }, "description": "Every changed path, in porcelain v2 record order." } }, "required": ["clean", "head", "entries"], "additionalProperties": true }, "remotes": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "Remote name as configured (`origin`)." }, "fetchUrl": { "type": "string", "description": "The URL git fetches from." }, "pushUrl": { "type": "string", "description": "The URL git pushes to, when it differs from the fetch URL." } }, "required": ["name", "fetchUrl"], "additionalProperties": true } }, "commits": { "type": "array", "items": { "type": "object", "properties": { "sha": { "type": "string", "description": "Full commit SHA." }, "subject": { "type": "string", "description": "First line of the commit message." }, "author": { "type": "string", "description": "Author name as recorded." }, "time": { "type": "number", "description": "Committer timestamp in Unix milliseconds." } }, "required": ["sha", "subject", "author", "time"], "additionalProperties": true } }, "worktrees": { "type": "array", "items": { "type": "object", "properties": { "statusError": { "type": "string", "description": "A failed status read is unknown, not a clean work tree." }, "current": { "type": "boolean", "description": "True when the Session's repository root is this work tree." }, "changedPaths": { "type": "array", "items": { "type": "string" }, "description": "Repository-relative paths changed in that work tree (staged, unstaged, untracked, conflict); empty when clean, unreadable, or bare." }, "path": { "type": "string", "description": "Absolute work-tree path." }, "head": { "type": "string", "description": "HEAD oid of that work tree." }, "branch": { "type": "string", "description": "Branch checked out there, when not detached." }, "detached": { "type": "boolean", "description": "True when the work tree is detached or unborn." }, "bare": { "type": "boolean", "description": "True for the bare repository itself." } }, "required": ["current", "changedPaths", "path", "head", "detached", "bare"], "additionalProperties": true } } }, "required": ["root", "status", "remotes", "commits", "worktrees"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 496, "column": 9 }
    },
    "workbenchInspector/saveGlobalMemory": {
      service: "workbenchInspector",
      description: "Save the global memory, refusing when the file moved on since the edit began.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "content",
          description: "New full text.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveGlobalMemory:content",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveGlobalMemory:content",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "expected",
          description: "The text the edit started from.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveGlobalMemory:expected",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_1$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveGlobalMemory:expected",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_parameter_1_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveGlobalMemory:result",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveGlobalMemory_result$schema,
        description: "completion after the atomic write.",
        jsonSchemaError: "typert tool schema: unsupported void value"
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 305, "column": 9 }
    },
    "workbenchInspector/saveProjectMemory": {
      service: "workbenchInspector",
      description: "Save the project memory `<folder>.memory.md` in the Session cwd, refusing when the file moved on since the edit began.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session whose recorded cwd anchors the write.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "content",
          description: "New full text.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveProjectMemory:content",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_1$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveProjectMemory:content",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_1_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "expected",
          description: "The text the edit started from ('' for a file that did not exist).",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveProjectMemory:expected",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_2$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveProjectMemory:expected",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_parameter_2_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/saveProjectMemory:result",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_saveProjectMemory_result$schema,
        description: "completion after the atomic write.",
        jsonSchemaError: "typert tool schema: unsupported void value"
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 324, "column": 9 }
    },
    "workbenchInspector/status": {
      service: "workbenchInspector",
      description: "Read current repository status without running a model or tool.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session whose recorded cwd anchors the read.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchRepository",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_result$schema,
        description: "canonical Git status and root.",
        jsonSchema: { "type": "object", "properties": { "root": { "type": "string" }, "status": { "type": "object", "properties": { "clean": { "type": "boolean", "description": "True when the work tree matches HEAD and the index (no entries at all)." }, "head": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["branch", "detached", "unborn"] }, "name": { "type": "string" }, "oid": { "type": "string" } }, "required": ["kind", "name"], "additionalProperties": true, "description": "HEAD fact from the `# branch.*` headers." }, "upstream": { "type": "object", "properties": { "ref": { "type": "string" }, "ahead": { "type": "number" }, "behind": { "type": "number" } }, "required": ["ref", "ahead", "behind"], "additionalProperties": true, "description": "Upstream ref plus ahead/behind from `# branch.upstream` / `# branch.ab`." }, "entries": { "type": "array", "items": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["staged", "unstaged", "untracked", "conflict"], "description": "Which surface reports the change: `conflict` for unmerged records (`u`), `untracked` for `?` records, `staged` when the index column differs from `.`, `unstaged` when only the work-tree column differs." }, "path": { "type": "string", "description": "Path relative to the repo root." }, "origPath": { "type": "string", "description": "Original path for a rename/copy (the `2` record's second path)." }, "x": { "type": "string", "enum": [".", "A", "M", "D", "R", "C", "U", "T", "?", "AM", "AD", "AU", "AA", "DD", "DU", "UA", "UD", "UU"], "description": "Index status column (`X` of `XY`)." }, "y": { "type": "string", "enum": [".", "A", "M", "D", "R", "C", "U", "T", "?", "AM", "AD", "AU", "AA", "DD", "DU", "UA", "UD", "UU"], "description": "Work-tree status column (`Y` of `XY`)." }, "score": { "type": "string", "description": "Rename/copy similarity score (`R100` / `C75`), when present." } }, "required": ["kind", "path", "x", "y"], "additionalProperties": true }, "description": "Every changed path, in porcelain v2 record order." } }, "required": ["clean", "head", "entries"], "additionalProperties": true } }, "required": ["root", "status"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 361, "column": 9 }
    },
    "workbenchInspector/text": {
      service: "workbenchInspector",
      description: "Read complete bounded text using provider-owned decoding and binary rejection.",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "Session whose recorded cwd anchors the read.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "path",
          description: "File relative to the selected root.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/text:path",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/text:path",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1_strict$schema,
            jsonSchema: { "type": "string" }
          }
        },
        {
          name: "repository",
          description: "Select the Session's Git root instead of cwd.",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/text:repository",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2$schema,
            jsonSchema: { "type": "boolean" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/text:repository",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2_strict$schema,
            jsonSchema: { "type": "boolean" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchFileText",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_result$schema,
        description: "the file text; oversized or binary files fail explicitly.",
        jsonSchema: { "type": "object", "properties": { "path": { "type": "string" }, "text": { "type": "string" } }, "required": ["path", "text"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 246, "column": 9 }
    }
  }
}, import_zod.z);
var typert_remote_client_default = TYPERT_REMOTE;

// src/client/workbench/views/ChangesView.tsx
var import_react2 = require("react");

// src/client/workbench/views/shared.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var NOT_A_REPOSITORY = "workbench/not-a-repository";
function useRead(key, run, sessionId) {
  const [generation, setGeneration] = (0, import_react.useState)(0);
  const [stored, setState] = (0, import_react.useState)({ busy: true, requestKey: "" });
  const requestKey = JSON.stringify([key, sessionId, generation]);
  const state = stored.requestKey === requestKey ? stored : { busy: true };
  const runRef = (0, import_react.useRef)(run);
  runRef.current = run;
  (0, import_react.useEffect)(() => {
    if (sessionId === void 0) {
      setState({ busy: false, requestKey });
      return;
    }
    const controller = new AbortController();
    setState({ busy: true, requestKey });
    runRef.current(sessionId, controller.signal).then(
      (result) => {
        if (controller.signal.aborted) return;
        setState(result.ok ? { busy: false, requestKey, value: result.value } : { busy: false, requestKey, error: result.error.message, code: result.error.code });
      },
      (error) => {
        if (!controller.signal.aborted) setState({ busy: false, requestKey, error: error instanceof Error ? error.message : String(error) });
      }
    );
    return () => {
      controller.abort();
    };
  }, [requestKey, sessionId]);
  return { ...state, refresh: () => setGeneration((value) => value + 1) };
}
var BUTTON_CLASS = "dsg-btn";
var button = {
  font: "inherit",
  fontSize: 12,
  lineHeight: "18px",
  padding: "3px 10px",
  cursor: "pointer",
  color: "var(--dsw-alias-label-secondary)",
  background: "var(--dsg-btn-bg, transparent)",
  border: "1px solid var(--dsg-btn-border, var(--dsw-alias-border-l3))",
  borderRadius: 8,
  transition: "background-color 150ms ease, border-color 150ms ease"
};
var caption = { fontSize: 12, lineHeight: "18px", color: "var(--dsw-alias-label-caption)" };
var sectionTitle = { fontSize: 13, lineHeight: "20px", fontWeight: 600, color: "var(--dsw-alias-label-primary)", marginTop: 8 };
var mono = { fontFamily: "var(--ds-font-family-code)" };
var view = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "12px 0",
  boxSizing: "border-box",
  // 住户 2026-09-22：对话以外的标签页里，官方 composer 是绝对定位的浮层
  // （overlay 形态），内容滚到底就跑到卡片后面，从半透明的卡片里透出来。
  // 底部留出 composer 的高度（官方把它写在滚动容器的 --dsh-composer-height
  // 上）；skin.ts 只在 overlay 形态下把这个变量设起来，sticky 形态下留白
  // 仍是 12px，不会多出一段空白。
  paddingBottom: "var(--deepseekgui-view-bottom-inset, 12px)",
  width: "100%",
  maxWidth: "var(--dsh-chat-content-width, 920px)",
  margin: "0 auto",
  fontSize: 14,
  lineHeight: "22px",
  color: "var(--dsw-alias-label-primary)"
};
function clock(ms) {
  if (!Number.isFinite(ms) || ms <= 0) return "";
  return new Date(ms).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}
function dateTime(ms) {
  if (!Number.isFinite(ms) || ms <= 0) return "";
  return new Date(ms).toLocaleString(void 0, { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
}
function TextView({ text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { style: { ...mono, whiteSpace: "pre-wrap", overflowWrap: "anywhere", fontSize: 13, lineHeight: "20px", maxHeight: "60vh", overflow: "auto", margin: 0 }, children: text });
}
function ReadStatus({ state, t }) {
  if (state.busy) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { role: "status", style: caption, children: t("common.loading") });
  if (state.code === NOT_A_REPOSITORY) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { role: "status", "data-deepseekgui": "not-a-repository", style: { ...caption, padding: "20px 0", textAlign: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontSize: 14, lineHeight: "22px", color: "var(--dsw-alias-label-secondary)" }, children: t("notRepository.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: t("notRepository.hint") })
    ] });
  }
  if (state.error !== void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { role: "alert", style: { color: "var(--dsw-alias-state-error-primary)" }, children: [
    t("common.failed"),
    " ",
    state.error
  ] });
  return null;
}
function Toolbar({ t, refresh, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: BUTTON_CLASS, style: button, onClick: refresh, children: t("common.refresh") })
  ] });
}

// src/client/workbench/views/ChangesView.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var GROUPS = ["staged", "unstaged", "untracked", "conflict"];
function absolutePath(root, path) {
  const separator = root.includes("\\") ? "\\" : "/";
  return `${root.replace(/[\\/]+$/u, "")}${separator}${path.replace(/\//gu, separator)}`;
}
function ChangesView({ inspector, sessionId, t }) {
  const [selected, setSelected] = (0, import_react2.useState)(null);
  const [copied, setCopied] = (0, import_react2.useState)(null);
  const [owner, setOwner] = (0, import_react2.useState)(sessionId);
  const read = useRead(
    selected === null ? "status" : `${selected.kind}:${selected.path}`,
    async (id, signal) => selected === null ? await inspector.status(id, signal) : selected.kind === "untracked" ? await inspector.text(id, selected.path, true, signal) : await inspector.diff(id, selected.kind === "staged" ? "staged" : "unstaged", selected.path, signal),
    sessionId
  );
  const repository = read.value !== void 0 && "status" in read.value ? read.value : void 0;
  const text = read.value !== void 0 && "text" in read.value ? read.value.text : read.value !== void 0 && "files" in read.value ? read.value.patch ?? "" : void 0;
  const [root, setRoot] = (0, import_react2.useState)("");
  if (owner !== sessionId) {
    setOwner(sessionId);
    setSelected(null);
    setCopied(null);
    setRoot("");
  }
  if (repository !== void 0 && repository.root !== root) setRoot(repository.root);
  const copy = (path) => {
    void navigator.clipboard?.writeText(absolutePath(root, path)).then(() => {
      setCopied(path);
      setTimeout(() => setCopied((current) => current === path ? null : current), 1500);
    }).catch(() => void 0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("section", { style: view, "aria-label": t("view.changes"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Toolbar, { t, refresh: read.refresh, children: selected !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: BUTTON_CLASS, style: button, onClick: () => setSelected(null), children: t("changes.back") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ReadStatus, { state: read, t }),
    repository !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: caption, children: [
        t("changes.branch"),
        " ",
        repository.status.head.name || repository.status.head.kind
      ] }),
      repository.status.clean && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: 0 }, children: t("changes.clean") }),
      GROUPS.map((kind) => {
        const entries = repository.status.entries.flatMap((entry) => entry.kind === kind ? [entry] : kind === "unstaged" && entry.kind === "staged" && entry.y !== "." ? [{ ...entry, kind: "unstaged" }] : []);
        if (entries.length === 0) return null;
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { ...caption, marginTop: 6 }, children: [
            t(`changes.group.${kind}`),
            " \xB7 ",
            entries.length
          ] }),
          entries.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 6, marginTop: 4 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                type: "button",
                className: BUTTON_CLASS,
                style: { ...button, ...mono, flex: 1, textAlign: "left", color: "var(--dsw-alias-label-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
                onClick: () => setSelected(entry),
                children: [
                  entry.path,
                  entry.origPath !== void 0 ? ` \u2190 ${entry.origPath}` : ""
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: BUTTON_CLASS, style: button, onClick: () => copy(entry.path), children: copied === entry.path ? t("changes.copied") : t("changes.copyPath") })
          ] }, `${entry.kind}/${entry.path}/${index}`))
        ] }, kind);
      })
    ] }),
    selected !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { style: { ...mono, margin: 0 }, children: [
      t(`changes.group.${selected.kind}`),
      " \xB7 ",
      selected.path
    ] }),
    text !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TextView, { text: text === "" ? t("changes.noPatch") : text }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { ...caption, margin: 0 }, children: t("changes.scope") })
  ] });
}

// src/client/workbench/views/GitView.tsx
var import_react3 = require("react");

// src/client/workbench/cards/tool-models.ts
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function firstLine(text) {
  const nl = text.indexOf("\n");
  return nl === -1 ? text : text.slice(0, nl);
}
function isSettled(block) {
  return "kind" in block;
}
function rawArgs(block) {
  if (isSettled(block)) return block.call?.argsRaw ?? "";
  return block.phase === "start" ? block.argsRaw : "";
}
function callArgs(block) {
  const argsRaw = rawArgs(block);
  if (argsRaw === "") return null;
  try {
    const parsed = JSON.parse(argsRaw);
    return isRecord(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
function pickString(args, keys) {
  if (args === null) return void 0;
  for (const key of keys) {
    const value = args[key];
    if (typeof value === "string" && value.trim() !== "") return value.trim();
  }
  return void 0;
}
function contentText(node) {
  const parts = [];
  for (const item of node.content) {
    const block = item;
    parts.push(block.type === "text" && typeof block.text === "string" ? block.text : JSON.stringify(block, null, 2));
  }
  if (parts.length === 0 && node.error !== void 0) {
    parts.push(`${node.error.name}: ${node.error.code}`);
  }
  return parts.length === 0 ? null : parts.join("\n");
}
function cardState(block) {
  if (!isSettled(block)) return "running";
  if (block.error?.code === "interrupted") return "stopped";
  return block.isError ? "error" : "ok";
}
function failureLine(block) {
  if (!isSettled(block) || !block.isError) return null;
  const output = contentText(block);
  if (output !== null) {
    const first = firstLine(output);
    if (first.trim() !== "") return first;
  }
  if (block.error !== void 0) return `${block.error.name}: ${block.error.code}`;
  return null;
}
function toolCardBase(block) {
  const settled = isSettled(block);
  const argsRaw = rawArgs(block);
  return {
    state: cardState(block),
    settled,
    toolName: settled ? block.call?.name ?? "" : block.name,
    callId: block.callId,
    argsRaw: argsRaw === "" ? null : argsRaw,
    args: callArgs(block),
    time: block.time
  };
}
var NO_COUNTS = { staged: 0, unstaged: 0, untracked: 0, conflict: 0, total: 0 };
function gitSummary(_toolName, model) {
  const blank = { summary: "", entries: [], diffFiles: [], counts: null };
  if (!model.settled) {
    return { ...blank, summary: runningLabel(model.args, model.argsRaw) || "\u2026" };
  }
  const meta = isRecord(model.meta) ? model.meta : null;
  if (meta === null) {
    return { ...blank, summary: model.errorSummary ?? firstLine(model.output ?? "") };
  }
  if (meta.kind === "git-diff") {
    const files = Array.isArray(meta.files) ? meta.files.filter(isRecord) : [];
    return {
      summary: `${files.length} file(s) changed`,
      diffFiles: files.map((f) => ({
        path: String(f.path ?? ""),
        binary: f.binary === true,
        added: Number(f.added ?? 0),
        deleted: Number(f.deleted ?? 0)
      })),
      counts: null
    };
  }
  const rawCounts = isRecord(meta.counts) ? meta.counts : null;
  const counts = rawCounts === null ? NO_COUNTS : {
    staged: Number(rawCounts.staged ?? 0),
    unstaged: Number(rawCounts.unstaged ?? 0),
    untracked: Number(rawCounts.untracked ?? 0),
    conflict: Number(rawCounts.conflict ?? 0),
    total: Number(rawCounts.total ?? 0)
  };
  const head = String(meta.head ?? "");
  return {
    summary: meta.clean === true ? `clean ${head}` : `${counts.total} changed path(s), ${head}`,
    diffFiles: [],
    counts
  };
}
function runningLabel(args, argsRaw) {
  const picked = pickString(args, ["path", "remote", "head", "url", "selector", "query", "file_path"]);
  if (picked !== void 0) return firstLine(picked);
  return argsRaw === null || argsRaw === "" ? "" : firstLine(argsRaw);
}
function toolCardModel(block) {
  const base = toolCardBase(block);
  const output = isSettled(block) ? contentText(block) : null;
  const errorSummary = base.state === "error" ? failureLine(block) : null;
  const summary = errorSummary !== null ? errorSummary : base.state === "running" ? runningLabel(base.args, base.argsRaw) : firstLine(output ?? "");
  const meta = isSettled(block) ? block.meta ?? null : null;
  return { ...base, summary, errorSummary, output, meta };
}
function familyOf(toolName) {
  if (toolName === "git_status" || toolName === "git_stage" || toolName === "git_unstage" || toolName === "git_revert") return "git-status";
  if (toolName === "git_diff") return "git-diff";
  return "other";
}

// src/client/workbench/inspector/history-model.ts
var REVIEW_TOOLS = /* @__PURE__ */ new Set([
  "git_commit",
  "git_push_preview",
  "git_push",
  "pr_availability",
  "pr_existing",
  "pr_create"
]);
function toolRootOf(node) {
  if (node.kind !== "tool-call") return null;
  const data = node.data;
  if (typeof data !== "object" || data === null || data.root === void 0) return null;
  return data.root;
}
function historyOf(nodes) {
  const entries = [];
  const visit = (block, anchorSeq, nested) => {
    const model = toolCardModel(block);
    if (model.toolName !== "") {
      entries.push({
        toolName: model.toolName,
        callId: model.callId,
        time: model.time,
        // The root keeps the card's window position; a nested settled result
        // carries its own log position, which keeps sub-calls in real order.
        seq: nested && "seq" in block && typeof block.seq === "number" ? block.seq : anchorSeq,
        state: model.state,
        text: model.output,
        argsRaw: model.argsRaw,
        meta: model.meta
      });
    }
    for (const child of block.subCalls) visit(child, anchorSeq, true);
  };
  for (const node of nodes) {
    if (node.visibility !== "visible") continue;
    const root = toolRootOf(node);
    if (root === null) continue;
    visit(root, node.anchorSeq, false);
  }
  return entries;
}
function reviewHistory(entries) {
  const rows = [];
  for (const entry of entries) {
    if (!REVIEW_TOOLS.has(entry.toolName) || entry.state === "running") continue;
    rows.push({
      seq: entry.seq,
      time: entry.time,
      toolName: entry.toolName,
      summary: entry.text === null || entry.text === "" ? entry.state === "error" ? "(error)" : "" : firstLine(entry.text),
      error: entry.state === "error"
    });
  }
  return rows.sort((left, right) => right.seq - left.seq);
}

// src/client/workbench/views/WorktreeView.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function overlappingPaths(trees) {
  const seen = /* @__PURE__ */ new Map();
  for (const tree of trees) for (const path of new Set(tree.changedPaths)) seen.set(path, (seen.get(path) ?? 0) + 1);
  return [...seen.entries()].filter(([, count]) => count > 1).map(([path]) => path).sort();
}
function WorktreeSection({ worktrees, t }) {
  const trees = worktrees.filter((tree) => !tree.bare);
  const overlap = overlappingPaths(trees);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    trees.length <= 1 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { margin: 0 }, children: t("worktree.only") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { ...caption, margin: 0 }, children: t("worktree.hint") })
    ] }),
    trees.length > 1 && overlap.map((path) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { role: "alert", style: { color: "var(--dsw-alias-state-error-primary)" }, children: t("worktree.overlap", { path }) }, path)),
    trees.length > 1 && trees.map((tree) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { border: "1px solid var(--dsw-alias-border-l2)", borderRadius: 10, padding: "6px 10px", background: "var(--dsw-alias-bg-module-platform)" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", gap: 8, alignItems: "baseline", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: mono, children: tree.path }),
        tree.current && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { ...caption, color: "var(--dsw-alias-state-info-primary)" }, children: t("worktree.current") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: caption, children: [
        t("worktree.branch"),
        " \xB7 ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: mono, children: tree.branch ?? tree.head.slice(0, 7) }),
        " \xB7 ",
        tree.statusError !== void 0 ? `${t("common.failed")} ${tree.statusError}` : tree.changedPaths.length === 0 ? t("worktree.clean") : t("worktree.changed", { count: tree.changedPaths.length })
      ] }),
      tree.changedPaths.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { ...caption, ...mono, whiteSpace: "pre-wrap", overflowWrap: "anywhere" }, children: tree.changedPaths.join("\n") })
    ] }, tree.path)),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { ...caption, margin: 0 }, children: t("worktree.scope") })
  ] });
}

// src/client/workbench/views/GitView.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function GitView({ inspector, sessionId, t, useConversation }) {
  const read = useRead("overview", async (id, signal) => await inspector.overview(id, signal), sessionId);
  const overview = read.value;
  const chat = useConversation((snapshot) => snapshot.views.get("chat"));
  const rows = (0, import_react3.useMemo)(() => reviewHistory(historyOf(chat?.nodes.values() ?? [])), [chat]);
  const upstream = overview?.status.upstream;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { style: view, "aria-label": t("view.git"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Toolbar, { t, refresh: read.refresh }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ReadStatus, { state: read, t }),
    overview !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: sectionTitle, children: t("view.worktree") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WorktreeSection, { worktrees: overview.worktrees, t }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: sectionTitle, children: t("view.git") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        t("git.head"),
        " \xB7 ",
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: mono, children: overview.status.head.name }),
        overview.status.head.kind === "detached" && ` ${t("git.detached")}`,
        overview.status.head.kind === "unborn" && ` ${t("git.unborn")}`
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        t("git.upstream"),
        " \xB7 ",
        upstream === void 0 ? t("git.noUpstream") : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: mono, children: upstream.ref }),
          " \xB7 ",
          upstream.ahead === 0 && upstream.behind === 0 ? t("git.inSync") : [
            upstream.ahead > 0 ? t("git.ahead", { count: upstream.ahead }) : null,
            upstream.behind > 0 ? t("git.behind", { count: upstream.behind }) : null
          ].filter(Boolean).join(" \xB7 ")
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        t("git.remotes"),
        " \xB7 ",
        overview.remotes.length === 0 ? t("git.noRemotes") : overview.remotes.map((remote) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { style: { marginRight: 12 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: mono, children: remote.name }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: caption, children: remote.fetchUrl })
        ] }, remote.name))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: sectionTitle, children: t("git.commits") }),
      overview.commits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: caption, children: t("git.noCommits") }) : overview.commits.map((commit) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: 10, alignItems: "baseline" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { ...caption, ...mono, flex: "none" }, children: commit.sha.slice(0, 7) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: commit.subject, children: commit.subject }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { style: { ...caption, flex: "none" }, children: [
          commit.author,
          " \xB7 ",
          dateTime(commit.time)
        ] })
      ] }, commit.sha))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: sectionTitle, children: t("git.history") }),
    rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: caption, children: t("git.historyEmpty") }) : rows.map((row4) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { ...caption, ...mono, lineHeight: "14px" }, children: t("row.atTime", { tool: row4.toolName, time: clock(row4.time), seq: row4.seq }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: {
        fontSize: 13,
        lineHeight: "18px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: row4.error ? "var(--dsw-alias-state-error-primary)" : "var(--dsw-alias-label-primary)"
      }, children: row4.summary })
    ] }, `${row4.toolName}:${row4.seq}`)),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { ...caption, margin: 0 }, children: t("git.scope") })
  ] });
}

// src/client/workbench/views/MemoryView.tsx
var import_react5 = require("react");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// src/client/workbench/memory/ProjectMemoryEditor.tsx
var import_react4 = require("react");

// src/client/workbench/locales-memory.ts
var NS_MEMORY = "dsh.qol.memory";
var zh2 = {
  // Settings nav label.
  "nav.memory": "\u5168\u5C40\u8BB0\u5FC6",
  // Shared chrome.
  "common.failed": "\u8BFB\u53D6\u5931\u8D25\uFF1A{message}",
  "common.noDesktop": "\u5F53\u524D\u4E0D\u5728 DeepSeekGUI \u684C\u9762\u7A97\u53E3\u5185\uFF0C\u6587\u4EF6\u64CD\u4F5C\u4E0D\u53EF\u7528\u3002",
  // Settings → Global memory: the `<home>/memory.md` editor.
  "legacy.intro": "\u8BA9\u52A9\u624B\u5728\u4E0D\u540C\u9879\u76EE\u4E2D\u4E86\u89E3\u4F60\u7684\u80CC\u666F\uFF0C\u51CF\u5C11\u91CD\u590D\u4ECB\u7ECD\u3002\u53EF\u4EE5\u8BB0\u5F55\u4F60\u7684\u79F0\u547C\u3001\u80CC\u666F\u3001\u5DE5\u4F5C\u4E60\u60EF\u6216\u5E38\u7528\u5DE5\u5177\uFF0C\u4EE5\u53CA\u5E0C\u671B\u52A9\u624B\u4E86\u89E3\u7684\u4FE1\u606F\u3002",
  "legacy.placeholder": "\u4F8B\u5982\uFF1A\n\u6211\u662F\u4E00\u540D\u5C0F\u8BF4\u4F5C\u8005\uFF0C\u4E5F\u4F1A\u5236\u4F5C\u6F14\u793A\u6587\u7A3F\u3002\n\u6211\u719F\u6089 Python\uFF0C\u524D\u7AEF\u5F00\u53D1\u7ECF\u9A8C\u8F83\u5C11\u3002",
  "legacy.note": "\u7531\u4F60\u7F16\u8F91\u548C\u4FDD\u5B58\uFF0C\u52A9\u624B\u53EA\u8BFB\u53D6\u3002\u6BCF\u4E2A\u65B0\u4F1A\u8BDD\u5F00\u59CB\u65F6\u8BFB\u5165\u4E00\u6B21\uFF0C\u4FDD\u5B58\u540E\u5728\u65B0\u4F1A\u8BDD\u4E2D\u751F\u6548\u3002",
  "legacy.save": "\u4FDD\u5B58\u66F4\u6539",
  "legacy.saved": "\u5DF2\u4FDD\u5B58",
  "legacy.saving": "\u6B63\u5728\u4FDD\u5B58\u2026",
  "legacy.open": "\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u663E\u793A",
  "legacy.unreadable": "\u5F53\u524D\u8BFB\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF08\u53EF\u80FD\u8D85\u8FC7\u5927\u5C0F\u4E0A\u9650\uFF09\uFF0C\u4E3A\u907F\u514D\u8986\u76D6\u539F\u6587\uFF0C\u8FD9\u91CC\u4E0D\u63D0\u4F9B\u4FDD\u5B58\u3002",
  "legacy.location": "\u6587\u4EF6\u4F4D\u7F6E\uFF1A{path}",
  "legacy.failed": "\u4FDD\u5B58\u5931\u8D25\uFF1A{message}",
  "legacy.agentsNote": "AGENTS.md \u662F\u4F60\u7ED9\u52A9\u624B\u5B9A\u7684\u534F\u4F5C\u89C4\u77E9\uFF08\u6C9F\u901A\u65B9\u5F0F\u3001\u505A\u4E8B\u4E60\u60EF\uFF09\uFF0C\u6BCF\u6B21\u5BF9\u8BDD\u90FD\u4F1A\u8BFB\u53D6\uFF1B\u4E0D\u6539\u4E5F\u80FD\u6B63\u5E38\u4F7F\u7528\u3002",
  "legacy.agentsOpen": "\u6253\u5F00 AGENTS.md",
  "legacy.projectNote": "\u4EC5\u4E0E\u9879\u76EE\u6709\u5173\u7684\u4FE1\u606F\uFF0C\u8BF7\u5728\u4F1A\u8BDD\u9876\u90E8\u7684\u300C\u8BB0\u5FC6\u300D\u9762\u677F\u4E2D\u7BA1\u7406\u3002",
  "legacy.kept": "\u5378\u8F7D\u751F\u6D3B\u8D28\u91CF\u5305\u65F6\u8FD9\u4E2A\u6587\u4EF6\u548C\u5168\u5C40 AGENTS.md \u90FD\u4F1A\u4FDD\u7559\uFF1B\u8981\u6E05\u7A7A\u8BF7\u5728\u8FD9\u91CC\u5220\u6539\u3002",
  // The session's Memory view: the project `<folder>.memory.md` editor.
  "project.label": "\u9879\u76EE\u8BB0\u5FC6\u5185\u5BB9",
  "project.placeholder": "\u4F8B\u5982\uFF1A\n\u8FD9\u4E2A\u9879\u76EE\u7528 pnpm \u7BA1\u7406\u4F9D\u8D56\uFF0C\u6D4B\u8BD5\u547D\u4EE4\u662F pnpm test\u3002\n\u53D1\u5E03\u524D\u8981\u5148\u66F4\u65B0 CHANGELOG\u3002",
  "project.note": "\u6BCF\u4E2A\u65B0\u4F1A\u8BDD\u5F00\u59CB\u65F6\u8BFB\u5165\u4E00\u6B21\uFF1B\u52A9\u624B\u4E5F\u4F1A\u5728\u5BF9\u8BDD\u4E2D\u628A\u503C\u5F97\u5EF6\u7EED\u7684\u4FE1\u606F\u5199\u8FDB\u8FD9\u4E2A\u6587\u4EF6\u3002\u4FDD\u5B58\u540E\u5728\u65B0\u4F1A\u8BDD\u4E2D\u751F\u6548\u3002",
  "project.save": "\u4FDD\u5B58\u66F4\u6539",
  "project.saving": "\u6B63\u5728\u4FDD\u5B58\u2026",
  "project.saved": "\u5DF2\u4FDD\u5B58",
  "project.failed": "\u4FDD\u5B58\u5931\u8D25\uFF1A{message}",
  "project.unreadable": "\u5F53\u524D\u8BFB\u4E0D\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u4E3A\u907F\u514D\u8986\u76D6\u539F\u6587\uFF0C\u8FD9\u91CC\u4E0D\u63D0\u4F9B\u4FDD\u5B58\u3002",
  "project.tooLong": "\u6587\u4EF6\u8D85\u8FC7 {max} \u5B57\uFF0C\u8FD9\u91CC\u653E\u4E0D\u4E0B\u5168\u6587\uFF1B\u8BF7\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00\u7F16\u8F91\uFF0C\u6216\u8BA9\u52A9\u624B\u7CBE\u7B80\u3002"
};
var en2 = {
  "nav.memory": "Global memory",
  "common.failed": "Read failed: {message}",
  "common.noDesktop": "Not inside the DeepSeekGUI desktop window; file actions are unavailable.",
  "legacy.intro": "Lets the assistant know your background across projects, so you repeat yourself less. Record how to address you, your background, working habits or usual tools, and anything else the assistant should know.",
  "legacy.placeholder": "For example:\nI write novels and also make slide decks.\nI know Python well and have little front-end experience.",
  "legacy.note": "You edit and save it; the assistant only reads it. It is read once at the start of every new session, so saved changes apply to new sessions.",
  "legacy.save": "Save changes",
  "legacy.saved": "Saved",
  "legacy.saving": "Saving\u2026",
  "legacy.open": "Show in file manager",
  "legacy.unreadable": "The file cannot be read right now (it may exceed the size limit); saving is disabled so the original is never overwritten.",
  "legacy.location": "File location: {path}",
  "legacy.failed": "Save failed: {message}",
  "legacy.agentsNote": "AGENTS.md holds the collaboration rules you set for the assistant (how to communicate, how to work); it is read in every conversation and works fine unchanged.",
  "legacy.agentsOpen": "Open AGENTS.md",
  "legacy.projectNote": 'Information that belongs to one project is managed in the "Memory" panel at the top of the session.',
  "legacy.kept": "Uninstalling the QoL Pack keeps this file and the global AGENTS.md; to clear them, edit them here.",
  "project.label": "Project memory text",
  "project.placeholder": "For example:\nThis project uses pnpm; the test command is pnpm test.\nUpdate the CHANGELOG before each release.",
  "project.note": "Read once at the start of every new session; the assistant also writes what is worth carrying forward into this file. Saved changes apply to new sessions.",
  "project.save": "Save changes",
  "project.saving": "Saving\u2026",
  "project.saved": "Saved",
  "project.failed": "Save failed: {message}",
  "project.unreadable": "The file cannot be read right now; saving is disabled so the original is never overwritten.",
  "project.tooLong": "The file exceeds {max} characters, more than fits here; open it in the file manager to edit, or ask the assistant to condense it."
};
function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

// src/client/workbench/memory/styles.ts
var intro = { fontSize: 13, lineHeight: "20px", color: "var(--dsw-alias-label-secondary)", margin: 0 };
var caption2 = { fontSize: 12, lineHeight: "18px", color: "var(--dsw-alias-label-caption)" };
var mono2 = { fontFamily: "var(--ds-font-family-code)", overflowWrap: "anywhere" };
var primaryButton = { ...button, color: "var(--dsw-alias-label-primary)", border: "1px solid var(--dsw-alias-brand-primary)" };
var dangerButton = { ...button, color: "var(--dsw-alias-state-error-primary)", border: "1px solid var(--dsw-alias-state-error-secondary, var(--dsw-alias-state-error-primary))" };
var input = {
  font: "inherit",
  fontSize: 13,
  lineHeight: "20px",
  padding: "3px 8px",
  boxSizing: "border-box",
  width: "100%",
  color: "var(--dsw-alias-label-primary)",
  background: "var(--dsw-alias-bg-layer-2)",
  border: "1px solid var(--dsw-alias-border-l2)",
  borderRadius: 8
};
var textarea = { ...input, resize: "vertical", lineHeight: "22px", padding: "8px 10px" };
var card = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid var(--dsw-alias-border-l1)",
  background: "var(--dsw-alias-bg-layer-2)",
  display: "flex",
  flexDirection: "column",
  gap: 4
};
var row = { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" };
var column = { display: "flex", flexDirection: "column", gap: 8 };
var badge = { ...caption2, padding: "0 6px", borderRadius: 4, border: "1px solid var(--dsw-alias-border-l1)", whiteSpace: "nowrap" };
var errorText = { color: "var(--dsw-alias-state-error-primary)" };
var pre = { ...mono2, whiteSpace: "pre-wrap", fontSize: 13, lineHeight: "20px", margin: 0 };

// src/client/workbench/memory/ProjectMemoryEditor.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var PROJECT_MEMORY_EDIT_MAX = 2e5;
function ProjectMemoryEditor({ sessionId, memory, desk, onSaved, t }) {
  const original = memory.text ?? "";
  const [draft, setDraft] = (0, import_react4.useState)();
  const [saving, setSaving] = (0, import_react4.useState)(false);
  const [notice, setNotice] = (0, import_react4.useState)();
  const alive = (0, import_react4.useRef)(true);
  (0, import_react4.useEffect)(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);
  const tooLong = original.length > PROJECT_MEMORY_EDIT_MAX;
  const value = draft ?? original;
  const dirty = draft !== void 0 && draft !== original;
  const save = async () => {
    if (draft === void 0) return;
    const submitted = draft;
    setSaving(true);
    setNotice(void 0);
    try {
      await desk.saveProjectMemory(sessionId, submitted, original);
      if (!alive.current) return;
      setDraft(void 0);
      setNotice({ ok: true });
      onSaved();
    } catch (error) {
      if (alive.current) setNotice({ ok: false, message: errorMessage(error) });
    } finally {
      if (alive.current) setSaving(false);
    }
  };
  if (tooLong) return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { role: "note", style: intro, children: t("project.tooLong", { max: PROJECT_MEMORY_EDIT_MAX.toLocaleString() }) });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: column, "data-deepseekgui": "memory-project-editor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "textarea",
      {
        rows: 16,
        style: textarea,
        value,
        placeholder: t("project.placeholder"),
        "aria-label": t("project.label"),
        onChange: (event) => {
          setDraft(event.target.value);
          setNotice(void 0);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: intro, children: t("project.note") }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: row, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: BUTTON_CLASS, style: primaryButton, disabled: !dirty || saving, onClick: () => {
        void save();
      }, "data-deepseekgui": "memory-project-save", children: saving ? t("project.saving") : t("project.save") }),
      notice?.ok === true && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { role: "status", style: caption2, children: t("project.saved") }),
      notice?.ok === false && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { role: "alert", style: errorText, children: t("project.failed", { message: notice.message }) })
    ] })
  ] });
}

// src/client/workbench/views/MemoryView.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var reader = {
  padding: "14px 18px",
  borderRadius: 10,
  border: "1px solid var(--dsw-alias-border-l1)",
  background: "var(--dsw-alias-bg-layer-2)",
  color: "var(--dsw-alias-label-primary)",
  fontSize: 14,
  lineHeight: "22px",
  // A fixed reading window: the memory grows over time and must scroll inside
  // its own box instead of stretching the page (莉莉丝 2026-09-06).
  height: 420,
  overflow: "auto",
  boxSizing: "border-box"
};
var MEMORY_VIEW_MAX_CHARS = 2e4;
var guide = { fontSize: 13, lineHeight: "20px", color: "var(--dsw-alias-label-secondary)", margin: 0 };
var heading = { fontSize: 15, lineHeight: "22px", fontWeight: 600, color: "var(--dsw-alias-label-primary)", marginTop: 10 };
var emptyBox = { ...reader, color: "var(--dsw-alias-label-secondary)", textAlign: "center", padding: "28px 18px" };
function pathOf(memory) {
  const posix = memory.cwd.includes("/") && !memory.cwd.includes("\\");
  return `${memory.cwd}${posix ? "/" : "\\"}${memory.fileName}`;
}
function LegacyReader({ memory, fileName, t }) {
  if (memory.text === null || memory.text.trim() === "") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: emptyBox, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { fontSize: 14, fontWeight: 600 }, children: t("memory.empty") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { ...caption, marginTop: 6 }, children: t("memory.emptyHint", { file: fileName }) })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: reader, "data-deepseekgui": "memory-reader", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_dsh_client_ui_primitives.MarkdownText,
      {
        text: memory.text.slice(0, MEMORY_VIEW_MAX_CHARS),
        labels: {
          code: { copyLabel: t("markdown.copy"), copiedLabel: t("markdown.copied") },
          footnotes: t("markdown.footnotes")
        }
      }
    ),
    memory.text.length > MEMORY_VIEW_MAX_CHARS && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { role: "note", style: { ...caption, marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--dsw-alias-border-l1)" }, children: t("memory.truncated", { max: MEMORY_VIEW_MAX_CHARS.toLocaleString() }) })
  ] });
}
function MemoryView(props) {
  const { inspector, desk, sessionId, t, submitInstruction, tm } = props;
  const read = useRead("memory", async (id, signal) => await inspector.memory(id, signal), sessionId);
  const [agentsCreatedFor, setAgentsCreatedFor] = (0, import_react5.useState)();
  const legacy = read.value;
  const fileName = legacy?.fileName ?? "memory.md";
  const hasAgents = sessionId !== void 0 && agentsCreatedFor === sessionId || legacy?.agents === true;
  const desktop = sessionId !== void 0;
  const seedLocale = /[一-鿿]/u.test(t("memory.title")) ? "zh" : "en";
  const about = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("details", { style: { fontSize: 12, lineHeight: "18px", color: "var(--dsw-alias-label-secondary)" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("summary", { style: { cursor: "pointer" }, children: t("memory.aboutTitle") }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 6, marginTop: 6 }, children: [
      legacy !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { overflowWrap: "anywhere" }, children: t("memory.aboutLocation", { path: pathOf(legacy) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: t("memory.aboutRoles") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: t("memory.aboutGit") }),
      desktop && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginTop: 2 }, children: hasAgents ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: t("memory.agentsExists") }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          className: BUTTON_CLASS,
          style: button,
          title: t("memory.createAgentsTitle"),
          onClick: () => {
            void desk.createProjectAgents(sessionId, seedLocale).then(() => setAgentsCreatedFor(sessionId)).catch(() => void 0);
          },
          children: t("memory.createAgents")
        }
      ) })
    ] })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { style: view, "aria-label": t("view.memory"), "data-deepseekgui": "memory-view", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Toolbar, { t, refresh: () => {
      read.refresh();
    }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: BUTTON_CLASS, style: button, title: t("memory.askTitle"), onClick: () => {
      void submitInstruction(t("memory.prompt", { file: fileName }));
    }, children: t("memory.ask") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { ...heading, marginTop: 6 }, children: t("memory.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { style: guide, children: t("memory.guide1") }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { style: guide, children: t("memory.guide2") }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ReadStatus, { state: read, t }),
    read.error !== void 0 && /does not exist/u.test(read.error) && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { role: "note", style: { ...caption, marginTop: 4 }, children: t("memory.missingHint") }),
    legacy !== void 0 && (desktop ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ProjectMemoryEditor, { sessionId, memory: legacy, desk, onSaved: () => {
      read.refresh();
    }, t: tm }, `${sessionId}:${legacy.text ?? ""}`) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LegacyReader, { memory: legacy, fileName, t })),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { style: { ...guide, marginTop: 8 }, children: t("memory.globalNav") }),
    about
  ] });
}

// src/client/workbench/memory/LegacyGlobalEditor.tsx
var import_react6 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
function separatorOf(home) {
  return home.includes("/") && !home.includes("\\") ? "/" : "\\";
}
function LegacyGlobalEditor({ desk, t }) {
  const [loaded, setLoaded] = (0, import_react6.useState)();
  const [loadError, setLoadError] = (0, import_react6.useState)();
  const [draft, setDraft] = (0, import_react6.useState)();
  const [saving, setSaving] = (0, import_react6.useState)(false);
  const [notice, setNotice] = (0, import_react6.useState)();
  const expected = (0, import_react6.useRef)(null);
  const alive = (0, import_react6.useRef)(true);
  (0, import_react6.useEffect)(() => {
    alive.current = true;
    desk.globalMemory().then(
      (next) => {
        if (!alive.current) return;
        setLoaded(next);
        expected.current = next.text;
      },
      (error) => {
        if (alive.current) setLoadError(errorMessage(error));
      }
    );
    return () => {
      alive.current = false;
    };
  }, [desk]);
  const unreadable = loaded !== void 0 && loaded.text === null;
  const value = draft ?? loaded?.text ?? "";
  const dirty = draft !== void 0 && draft !== loaded?.text;
  const home = loaded?.home ?? "";
  const sep = separatorOf(home);
  const save = async () => {
    if (loaded === void 0 || draft === void 0) return;
    const submitted = draft;
    setSaving(true);
    setNotice(void 0);
    try {
      await desk.saveGlobalMemory(submitted, expected.current);
      if (!alive.current) return;
      expected.current = submitted;
      setLoaded({ home: loaded.home, text: submitted });
      setDraft((current) => current === submitted ? void 0 : current);
      setNotice({ ok: true });
    } catch (error) {
      if (alive.current) setNotice({ ok: false, message: errorMessage(error) });
    } finally {
      if (alive.current) setSaving(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: column, "data-deepseekgui": "memory-legacy-global", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { style: intro, children: t("legacy.intro") }),
    loadError !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { role: "alert", style: errorText, children: t("common.failed", { message: loadError }) }),
    unreadable && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { role: "alert", style: errorText, children: t("legacy.unreadable") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "textarea",
      {
        rows: 10,
        style: textarea,
        value,
        disabled: loaded === void 0 || unreadable,
        placeholder: t("legacy.placeholder"),
        "aria-label": t("nav.memory"),
        onChange: (event) => {
          setDraft(event.target.value);
          setNotice(void 0);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { style: intro, children: t("legacy.note") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: row, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", className: BUTTON_CLASS, style: primaryButton, disabled: unreadable || !dirty || saving, onClick: () => {
        void save();
      }, "data-deepseekgui": "memory-legacy-save", children: saving ? t("legacy.saving") : t("legacy.save") }),
      notice?.ok === true && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { role: "status", style: caption2, children: t("legacy.saved") }),
      notice?.ok === false && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { role: "alert", style: errorText, children: t("legacy.failed", { message: notice.message }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { style: intro, children: t("legacy.kept") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { style: intro, children: t("legacy.projectNote") }),
    home !== "" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { ...caption2, ...mono2 }, children: t("legacy.location", { path: `${home}${sep}memory.md` }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { style: intro, children: t("legacy.agentsNote") }),
    home !== "" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { ...caption2, ...mono2 }, children: `${home}${sep}AGENTS.md` })
  ] });
}

// src/client/workbench/memory/MemorySettingsSection.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function MemorySettingsSection({ desk, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { ...column, gap: 14 }, "data-deepseekgui": "memory-settings", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LegacyGlobalEditor, { desk, t }) });
}

// src/client/workbench/cards/tool-rows.tsx
var import_react7 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var STATE_COLORS = {
  running: "var(--dsw-alias-state-info-primary)",
  ok: "var(--dsw-alias-state-success-primary)",
  error: "var(--dsw-alias-state-error-primary)",
  stopped: "var(--dsw-alias-state-warning-primary)"
};
var STATE_KEYS = {
  running: "row.running",
  ok: "row.succeeded",
  error: "row.failed",
  stopped: "row.stopped"
};
var TITLE_KEYS = {
  git_status: "title.gitStatus",
  git_diff: "title.gitDiff",
  git_stage: "title.gitStage",
  git_unstage: "title.gitUnstage",
  git_revert: "title.gitRevert",
  git_commit: "title.gitCommit",
  git_push_preview: "title.gitPushPreview",
  git_push: "title.gitPush",
  pr_availability: "title.prAvailability",
  pr_existing: "title.prExisting",
  pr_create: "title.prCreate"
};
var SUMMARY_TEXT = {
  flex: "1 1 auto",
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "var(--dsh-content-font-size-secondary, 13px)",
  lineHeight: "24px",
  color: "var(--dsw-alias-label-tertiary)"
};
var ROW_STYLE = {
  header: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    width: "100%",
    border: "none",
    background: "none",
    padding: "2px 0",
    textAlign: "left",
    cursor: "pointer",
    font: "inherit",
    color: "inherit"
  },
  title: {
    flex: "none",
    maxWidth: "40%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: 13,
    lineHeight: "24px",
    color: "var(--dsw-alias-label-secondary)"
  },
  summary: SUMMARY_TEXT,
  // 错误行与 summary 行是同一种单行省略文本，只有颜色不同。
  error: { ...SUMMARY_TEXT, color: "var(--dsw-alias-state-error-primary)" },
  chevron: {
    flex: "none",
    color: "var(--dsw-alias-label-secondary)",
    fontSize: 10
  }
};
function dotStyle(color) {
  return { flex: "none", width: 8, height: 8, borderRadius: "50%", background: color };
}
function buttonStyle(primary) {
  return {
    padding: "3px 10px",
    border: primary ? "1px solid transparent" : "1px solid var(--dsw-alias-border-l3)",
    borderRadius: 8,
    background: primary ? "var(--dsw-alias-state-business-primary)" : "var(--dsw-alias-button-elevated-fill)",
    transition: "background-color 150ms ease, border-color 150ms ease",
    // Text on the brand fill uses the official inverted label, never bg-base:
    // the DeepSeekGUI skin sets bg-base to transparent so the sea backdrop
    // shows through (2026-09-05 acceptance: a blue button with no text).
    color: primary ? "var(--dsw-alias-label-primary-inverted)" : "var(--dsw-alias-label-secondary)",
    fontSize: 12,
    lineHeight: "18px",
    cursor: "pointer",
    fontFamily: "inherit"
  };
}
var labelStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  fontSize: 12,
  lineHeight: "18px",
  color: "var(--dsw-alias-label-secondary)"
};
var inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "4px 8px",
  border: "1px solid var(--dsw-alias-border-l2)",
  borderRadius: 8,
  // layer-2 stays readable under the skin (bg-base is transparent there).
  background: "var(--dsw-alias-bg-layer-2)",
  color: "var(--dsw-alias-label-primary)",
  fontSize: 12,
  lineHeight: "18px",
  fontFamily: "inherit",
  resize: "vertical"
};
var mutedStyle = {
  fontSize: 11,
  lineHeight: "16px",
  color: "var(--dsw-alias-label-caption)"
};
function CodeBlock({ text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "pre",
    {
      style: {
        margin: "6px 0 2px",
        maxHeight: "55vh",
        overflow: "auto",
        fontFamily: "var(--ds-font-family-code)",
        fontSize: 12,
        lineHeight: "18px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        color: "var(--dsw-alias-label-primary)"
      },
      children: text
    }
  );
}
function Disclosure({ summary, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("details", { style: { borderTop: "1px solid var(--dsw-alias-border-l2)", padding: "6px 0 2px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "summary",
      {
        style: {
          cursor: "pointer",
          fontSize: 12,
          lineHeight: "18px",
          color: "var(--dsw-alias-label-secondary)",
          fontFamily: "inherit"
        },
        children: summary
      }
    ),
    children
  ] });
}
function OutputAndArgs({ body, argsRaw, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Disclosure, { summary: t("section.output"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CodeBlock, { text: body ?? t("summary.noOutput") }) }),
    argsRaw !== null && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Disclosure, { summary: t("section.arguments"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CodeBlock, { text: argsRaw }) })
  ] });
}
function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea: textarea2
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { style: labelStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: label }),
    textarea2 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "textarea",
      {
        rows: 4,
        value,
        placeholder,
        onChange: (event) => onChange(event.target.value),
        style: inputStyle
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "input",
      {
        value,
        placeholder,
        onChange: (event) => onChange(event.target.value),
        style: inputStyle
      }
    )
  ] });
}
function FormShell({
  title,
  hint,
  sendLabel,
  canSend,
  onSend,
  children
}) {
  const onSubmit = (event) => {
    event.preventDefault();
    if (canSend) onSend();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "form",
    {
      onSubmit,
      style: { borderTop: "1px solid var(--dsw-alias-border-l2)", padding: "8px 0 2px", display: "flex", flexDirection: "column", gap: 6 },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { fontSize: 12, lineHeight: "18px", color: "var(--dsw-alias-label-secondary)" }, children: title }),
        children,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: mutedStyle, children: hint }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { display: "flex", gap: 8 }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "submit", disabled: !canSend, style: buttonStyle(true), children: sendLabel }) })
      ]
    }
  );
}
function sendInstruction(text, submitInstruction, done) {
  void submitInstruction(text).then((accepted) => {
    if (accepted) done();
  });
}
function CommitForm({
  t,
  submitInstruction,
  onSent
}) {
  const [message, setMessage] = (0, import_react7.useState)("");
  const canSend = message.trim() !== "";
  const send = () => {
    sendInstruction(t("instruction.commit", { message }), submitInstruction, onSent);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    FormShell,
    {
      title: t("form.commitTitle"),
      hint: t("form.sendHint"),
      sendLabel: t("form.send"),
      canSend,
      onSend: send,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        Field,
        {
          label: t("form.commitMessageLabel"),
          placeholder: t("form.commitMessagePlaceholder"),
          value: message,
          onChange: setMessage,
          textarea: true
        }
      )
    }
  );
}
function PushForm({
  t,
  submitInstruction,
  defaults,
  onSent
}) {
  const [remote, setRemote] = (0, import_react7.useState)(defaults.remote);
  const [localBranch, setLocalBranch] = (0, import_react7.useState)(defaults.localBranch);
  const [remoteBranch, setRemoteBranch] = (0, import_react7.useState)(defaults.remoteBranch);
  const canSend = remote.trim() !== "" && localBranch.trim() !== "" && remoteBranch.trim() !== "";
  const send = () => {
    sendInstruction(
      t("instruction.push", { remote, localBranch, remoteBranch }),
      submitInstruction,
      onSent
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(FormShell, { title: t("form.pushTitle"), hint: t("form.sendHint"), sendLabel: t("form.send"), canSend, onSend: send, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Field, { label: t("form.remoteLabel"), value: remote, onChange: setRemote }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Field, { label: t("form.localBranchLabel"), value: localBranch, onChange: setLocalBranch }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Field, { label: t("form.remoteBranchLabel"), value: remoteBranch, onChange: setRemoteBranch })
  ] });
}
function PrCreateForm({
  t,
  submitInstruction,
  defaults,
  onSent
}) {
  const [title, setTitle] = (0, import_react7.useState)("");
  const [body, setBody] = (0, import_react7.useState)("");
  const [base, setBase] = (0, import_react7.useState)(defaults.base);
  const [head, setHead] = (0, import_react7.useState)(defaults.head);
  const [draft, setDraft] = (0, import_react7.useState)(false);
  const canSend = title.trim() !== "" && base.trim() !== "" && head.trim() !== "";
  const send = () => {
    sendInstruction(
      t("instruction.pr", {
        title,
        body,
        base,
        head,
        draft: draft ? t("instruction.draftYes") : t("instruction.draftNo")
      }),
      submitInstruction,
      onSent
    );
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(FormShell, { title: t("form.prTitleLabel"), hint: t("form.sendHint"), sendLabel: t("form.send"), canSend, onSend: send, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Field, { label: t("form.prTitleLabel"), placeholder: t("form.prTitlePlaceholder"), value: title, onChange: setTitle }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Field, { label: t("form.prBodyLabel"), placeholder: t("form.prBodyPlaceholder"), value: body, onChange: setBody, textarea: true }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Field, { label: t("form.baseLabel"), value: base, onChange: setBase }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Field, { label: t("form.headLabel"), value: head, onChange: setHead })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { style: { ...labelStyle, flexDirection: "row", alignItems: "center", gap: 6 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "checkbox", checked: draft, onChange: (event) => setDraft(event.target.checked) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: t("form.draftLabel") })
    ] })
  ] });
}
function eligibleForm(toolName, block, model) {
  if (model.state !== "ok" || !isSettled(block)) return null;
  if (toolName === "git_status") return "commit";
  if (toolName === "git_push_preview") return "push";
  if (toolName === "pr_existing" && model.output !== null && model.output.startsWith("no existing pull request")) return "pr-create";
  return null;
}
function pushDefaults(model) {
  const meta = typeof model.meta === "object" && model.meta !== null ? model.meta : {};
  const values = { ...model.args, ...meta };
  const field = (key) => typeof values[key] === "string" ? values[key] : "";
  return { remote: field("remote"), localBranch: field("localBranch"), remoteBranch: field("remoteBranch") };
}
var FORM_ACTION_KEYS = {
  commit: "form.commitAction",
  push: "form.pushAction",
  "pr-create": "form.prAction"
};
function GitPrToolRow({ block, toolName, t, submitInstruction }) {
  const [expanded, setExpanded] = (0, import_react7.useState)(false);
  const [openForm, setOpenForm] = (0, import_react7.useState)(null);
  const model = toolCardModel(block);
  const family = familyOf(toolName);
  const presentation = family === "git-status" || family === "git-diff" ? gitSummary(toolName, model) : null;
  const counts = family === "git-status" ? presentation?.counts ?? null : null;
  const body = isSettled(block) ? contentText(block) : null;
  const titleKey = TITLE_KEYS[toolName];
  const title = titleKey === void 0 ? toolName : t(titleKey);
  let summary = model.summary;
  if (presentation !== null && presentation.summary !== "") summary = presentation.summary;
  if (family === "git-diff" && presentation !== null && presentation.diffFiles.length > 0) {
    const added = presentation.diffFiles.reduce((sum, file) => sum + file.added, 0);
    const deleted = presentation.diffFiles.reduce((sum, file) => sum + file.deleted, 0);
    summary = t("diff.stat", { files: presentation.diffFiles.length, added, deleted });
  }
  const statusCopy = t(STATE_KEYS[model.state]);
  const eligible = eligibleForm(toolName, block, model);
  const toggle = () => {
    setExpanded((value) => !value);
    setOpenForm(null);
  };
  const closeForm = () => {
    setOpenForm(null);
    setExpanded(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { "data-tool": toolName, "data-state": model.state, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "button",
      {
        type: "button",
        "aria-expanded": expanded,
        "aria-label": `${title}${summary === "" ? "" : `: ${summary}`} (${statusCopy})`,
        onClick: toggle,
        style: ROW_STYLE.header,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: dotStyle(STATE_COLORS[model.state]), "aria-hidden": true }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: ROW_STYLE.title, children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: model.errorSummary === null ? ROW_STYLE.summary : ROW_STYLE.error, children: model.errorSummary ?? summary }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { style: ROW_STYLE.chevron, "aria-hidden": true, children: expanded ? "\u25BE" : "\u25B8" })
        ]
      }
    ),
    expanded && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
      counts !== null && counts.total > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: mutedStyle, children: t("changes.counts", {
        staged: counts.staged,
        unstaged: counts.unstaged,
        untracked: counts.untracked,
        conflict: counts.conflict
      }) }),
      presentation !== null && presentation.diffFiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: mutedStyle, children: [
        presentation.diffFiles.slice(0, 10).map((file) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: [
          file.path,
          file.binary ? ` ${t("row.binary")}` : ` +${file.added} \u2212${file.deleted}`
        ] }, file.path)),
        presentation.diffFiles.length > 10 && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: t("list.more", { count: presentation.diffFiles.length - 10 }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(OutputAndArgs, { body, argsRaw: model.argsRaw, t }),
      eligible !== null && openForm === null && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { borderTop: "1px solid var(--dsw-alias-border-l2)", padding: "6px 0 2px", display: "flex", gap: 8 }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", onClick: () => setOpenForm(eligible), style: buttonStyle(false), children: t(FORM_ACTION_KEYS[eligible]) }) }),
      openForm === "commit" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CommitForm, { t, submitInstruction, onSent: closeForm }),
      openForm === "push" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        PushForm,
        {
          t,
          submitInstruction,
          defaults: pushDefaults(model),
          onSent: closeForm
        }
      ),
      openForm === "pr-create" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        PrCreateForm,
        {
          t,
          submitInstruction,
          defaults: { head: typeof model.args?.head === "string" ? model.args.head : "", base: "" },
          onSent: closeForm
        }
      )
    ] })
  ] });
}

// src/client/workbench/instructions.ts
function instructionSender(ctx, sessionId) {
  return async (text) => {
    const binding = ctx.sessions.binding(sessionId);
    if (binding === void 0) return false;
    try {
      return (await binding.session.prompt([{ type: "text", text }], "queue")).ok;
    } catch (error) {
      ctx.conversation.input.for(binding.ctx).notify("error", error instanceof Error ? error.message : String(error));
      return false;
    }
  };
}

// src/client/workbench/desk.ts
function unwrap(result) {
  if (!result.ok) throw new Error(result.error.message);
  return result.value;
}
function createWorkbenchDesk(inspector) {
  const signal = () => new AbortController().signal;
  return {
    async globalMemory() {
      return unwrap(await inspector.globalMemory(signal()));
    },
    async saveGlobalMemory(content, expected) {
      unwrap(await inspector.saveGlobalMemory(content, expected ?? "\0unreadable", signal()));
    },
    async saveProjectMemory(sessionId, content, expected) {
      unwrap(await inspector.saveProjectMemory(sessionId, content, expected, signal()));
    },
    async createProjectAgents(sessionId, locale) {
      unwrap(await inspector.createProjectAgents(sessionId, locale, signal()));
    }
  };
}

// src/client/workbench/locales-tools.ts
var zh3 = {
  // Row lifecycle states (visually hidden status copy for the color dots).
  "row.running": "\u6267\u884C\u4E2D",
  "row.succeeded": "\u6210\u529F",
  "row.failed": "\u5931\u8D25",
  "row.stopped": "\u5DF2\u4E2D\u65AD",
  // Git/pr card titles (short labels; the wire tool name stays on the row).
  "title.gitStatus": "Git \u72B6\u6001",
  "title.gitDiff": "Git \u5DEE\u5F02",
  "title.gitStage": "Git \u6682\u5B58",
  "title.gitUnstage": "Git \u53D6\u6D88\u6682\u5B58",
  "title.gitRevert": "Git \u8FD8\u539F",
  "title.gitCommit": "Git \u63D0\u4EA4",
  "title.gitPushPreview": "\u63A8\u9001\u9884\u89C8",
  "title.gitPush": "Git \u63A8\u9001",
  "title.prAvailability": "PR \u53EF\u7528\u6027",
  "title.prExisting": "PR \u67E5\u91CD",
  "title.prCreate": "\u521B\u5EFA PR",
  "title.browser": "\u6D4F\u89C8\u5668",
  // Expansion disclosure sections.
  "section.output": "\u5B8C\u6574\u8F93\u51FA",
  "section.arguments": "\u8C03\u7528\u53C2\u6570",
  "summary.noOutput": "\uFF08\u65E0\u6587\u672C\u8F93\u51FA\uFF09",
  "row.binary": "\uFF08\u4E8C\u8FDB\u5236\uFF09",
  "changes.counts": "\u5DF2\u6682\u5B58 {staged} \xB7 \u672A\u6682\u5B58 {unstaged} \xB7 \u672A\u8DDF\u8E2A {untracked} \xB7 \u51B2\u7A81 {conflict}",
  "diff.stat": "{files} \u4E2A\u6587\u4EF6 \xB7 +{added} \u2212{deleted}",
  "list.more": "\uFF08\u5176\u4F59 {count} \u9879\uFF09",
  // Human-input form labels (B5-P5): opened from the current card.
  "form.commitAction": "\u4EE5\u65B0\u6D88\u606F\u63D0\u4EA4\u5DF2\u6682\u5B58\u5185\u5BB9\u2026",
  "form.pushAction": "\u63A8\u9001\u5206\u652F\u2026",
  "form.prAction": "\u4E3A\u8BE5\u5206\u652F\u521B\u5EFA PR\u2026",
  "form.send": "\u53D1\u9001\u7ED9\u52A9\u624B",
  "form.commitTitle": "\u63D0\u4EA4\u66F4\u6539",
  "form.commitMessageLabel": "\u63D0\u4EA4\u4FE1\u606F\uFF08\u52A9\u624B\u5C06\u5148 git_stage \u5FC5\u8981\u8DEF\u5F84\u518D git_commit\uFF09",
  "form.commitMessagePlaceholder": "feat: \u63CF\u8FF0\u8FD9\u6B21\u63D0\u4EA4\u2026",
  "form.pushTitle": "\u63A8\u9001\u5206\u652F",
  "form.remoteLabel": "\u8FDC\u7AEF",
  "form.localBranchLabel": "\u672C\u5730\u5206\u652F",
  "form.remoteBranchLabel": "\u8FDC\u7AEF\u5206\u652F",
  "form.prTitleLabel": "PR \u6807\u9898",
  "form.prTitlePlaceholder": "PR \u6807\u9898\u2026",
  "form.prBodyLabel": "PR \u63CF\u8FF0",
  "form.prBodyPlaceholder": "PR \u63CF\u8FF0\u2026",
  "form.baseLabel": "\u76EE\u6807\u5206\u652F\uFF08base\uFF09",
  "form.headLabel": "\u6765\u6E90\u5206\u652F\uFF08head\uFF09",
  "form.draftLabel": "\u5148\u521B\u5EFA\u4E3A\u8349\u7A3F",
  "form.sendHint": "\u5C06\u4F5C\u4E3A\u4E00\u6761\u6D88\u606F\u53D1\u9001\u7ED9\u52A9\u624B\u6267\u884C\uFF1B\u5199\u64CD\u4F5C\u4ECD\u4F1A\u5F39\u51FA\u5B98\u65B9\u5BA1\u6279\uFF08\u5BA1\u6279\u7406\u7531\u542B\u6B64\u5904\u5185\u5BB9\uFF09\u3002",
  // Agent instructions composed by the forms (model-visible user messages).
  "instruction.commit": "\u8BF7\u63D0\u4EA4\u5F53\u524D\u66F4\u6539\uFF1A\u5148\u628A\u5FC5\u8981\u8DEF\u5F84\u52A0\u5165\u6682\u5B58\uFF08git_stage\uFF09\uFF0C\u518D\u6267\u884C git_commit\u3002\u63D0\u4EA4\u4FE1\u606F\uFF08\u7528\u6237\u5DF2\u5728\u5361\u7247\u4E0A\u786E\u8BA4\uFF09\uFF1A\n{message}",
  "instruction.push": "\u8BF7\u6267\u884C git_push\uFF1Aremote={remote}\uFF0ClocalBranch={localBranch}\uFF0CremoteBranch={remoteBranch}\u3002",
  "instruction.pr": "\u8BF7\u6267\u884C pr_create\uFF1A\ntitle={title}\nbody={body}\nbase={base}\nhead={head}\ndraft={draft}",
  "instruction.draftYes": "\u662F",
  "instruction.draftNo": "\u5426"
};
var en3 = {
  "row.running": "Running",
  "row.succeeded": "Succeeded",
  "row.failed": "Failed",
  "row.stopped": "Stopped",
  "title.gitStatus": "Git status",
  "title.gitDiff": "Git diff",
  "title.gitStage": "Git stage",
  "title.gitUnstage": "Git unstage",
  "title.gitRevert": "Git revert",
  "title.gitCommit": "Git commit",
  "title.gitPushPreview": "Push preview",
  "title.gitPush": "Git push",
  "title.prAvailability": "PR availability",
  "title.prExisting": "PR lookup",
  "title.prCreate": "Create PR",
  "title.browser": "Browser",
  "section.output": "Full output",
  "section.arguments": "Arguments",
  "summary.noOutput": "(no text output)",
  "row.binary": "(binary)",
  "changes.counts": "staged {staged} \xB7 unstaged {unstaged} \xB7 untracked {untracked} \xB7 conflict {conflict}",
  "diff.stat": "{files} files \xB7 +{added} \u2212{deleted}",
  "list.more": "(+{count} more)",
  "form.commitAction": "Commit the staged content with a new message\u2026",
  "form.pushAction": "Push a branch\u2026",
  "form.prAction": "Create a PR for this branch\u2026",
  "form.send": "Send to assistant",
  "form.commitTitle": "Commit changes",
  "form.commitMessageLabel": "Commit message (the assistant stages the needed paths with git_stage, then runs git_commit)",
  "form.commitMessagePlaceholder": "feat: describe this commit\u2026",
  "form.pushTitle": "Push branch",
  "form.remoteLabel": "Remote",
  "form.localBranchLabel": "Local branch",
  "form.remoteBranchLabel": "Remote branch",
  "form.prTitleLabel": "PR title",
  "form.prTitlePlaceholder": "PR title\u2026",
  "form.prBodyLabel": "PR body",
  "form.prBodyPlaceholder": "PR body\u2026",
  "form.baseLabel": "Base branch",
  "form.headLabel": "Head branch",
  "form.draftLabel": "Create as draft first",
  "form.sendHint": "Sent to the assistant as one message; writes still raise the official approval prompt (its reason carries this content).",
  "instruction.commit": "Commit the current changes: first stage the needed paths with git_stage, then run git_commit. Commit message (confirmed by the user on the card):\n{message}",
  "instruction.push": "Run git_push: remote={remote}, localBranch={localBranch}, remoteBranch={remoteBranch}.",
  "instruction.pr": "Run pr_create:\ntitle={title}\nbody={body}\nbase={base}\nhead={head}\ndraft={draft}",
  "instruction.draftYes": "yes",
  "instruction.draftNo": "no"
};
var NS_TOOLS = "dsh.qol.tools";

// src/client/workbench/locales-inspector.ts
var zh4 = {
  // View tab labels beside 对话 / 轨迹.
  "view.changes": "\u6539\u52A8",
  "view.git": "Git",
  "view.worktree": "\u5E76\u884C\u5DE5\u4F5C\u533A",
  "view.memory": "\u8BB0\u5FC6",
  // Shared chrome.
  "common.refresh": "\u5237\u65B0",
  "common.loading": "\u6B63\u5728\u8BFB\u53D6\u2026",
  "common.failed": "\u8BFB\u53D6\u5931\u8D25\uFF1A",
  "notRepository.title": "\u5F53\u524D\u5DE5\u4F5C\u533A\u4E0D\u662F Git \u4ED3\u5E93",
  "notRepository.hint": "\u8FD9\u91CC\u6CA1\u6709\u6539\u52A8\u548C\u5206\u652F\u4FE1\u606F\u53EF\u663E\u793A\uFF1B\u4F1A\u8BDD\u4E0E\u5176\u4ED6\u529F\u80FD\u4E0D\u53D7\u5F71\u54CD\u3002\u5728\u9879\u76EE\u6587\u4EF6\u5939\u91CC\u7528 git init \u5EFA\u7ACB\u4ED3\u5E93\u540E\uFF0C\u70B9\u300C\u5237\u65B0\u300D\u5373\u53EF\u67E5\u770B\u3002",
  // Changes view (file level, this workspace).
  "changes.branch": "\u5206\u652F",
  "changes.clean": "\u5DE5\u4F5C\u533A\u5E72\u51C0\uFF0C\u52A9\u624B\u6CA1\u6709\u6539\u8FC7\u4EFB\u4F55\u6587\u4EF6",
  "changes.group.staged": "\u5C06\u63D0\u4EA4",
  "changes.group.unstaged": "\u5DF2\u6539\u52A8\u3001\u672A\u9009\u5165\u63D0\u4EA4",
  "changes.group.untracked": "\u65B0\u6587\u4EF6",
  "changes.group.conflict": "\u51B2\u7A81",
  "changes.copyPath": "\u590D\u5236\u8DEF\u5F84",
  "changes.copied": "\u5DF2\u590D\u5236",
  "changes.back": "\u8FD4\u56DE\u6539\u52A8\u5217\u8868",
  "changes.noPatch": "\u6CA1\u6709\u53EF\u663E\u793A\u7684\u6587\u672C\u5DEE\u5F02\uFF08\u6587\u4EF6\u53EF\u80FD\u4E3A\u4E8C\u8FDB\u5236\uFF09",
  "changes.scope": "\u53EA\u663E\u793A\u6539\u4E86\u4EC0\u4E48\u3002\u8981\u63D0\u4EA4\u3001\u4E22\u5F03\u6216\u64A4\u9500\uFF0C\u56DE\u5230\u5BF9\u8BDD\u91CC\u544A\u8BC9\u52A9\u624B\u3002",
  // Git view (repository level, display only).
  "git.head": "\u5F53\u524D\u5206\u652F",
  "git.detached": "\uFF08\u6E38\u79BB HEAD\uFF09",
  "git.unborn": "\uFF08\u8FD8\u6CA1\u6709\u4EFB\u4F55\u63D0\u4EA4\uFF09",
  "git.upstream": "\u8FDC\u7AEF\u5206\u652F",
  "git.noUpstream": "\u8FD9\u4E2A\u5206\u652F\u8FD8\u6CA1\u6709\u5BF9\u5E94\u7684\u8FDC\u7AEF\u5206\u652F\uFF08\u8FD8\u6CA1\u63A8\u9001\u8FC7\uFF09",
  "git.ahead": "\u672C\u5730\u6BD4\u8FDC\u7AEF\u591A {count} \u4E2A\u63D0\u4EA4",
  "git.behind": "\u672C\u5730\u6BD4\u8FDC\u7AEF\u5C11 {count} \u4E2A\u63D0\u4EA4",
  "git.inSync": "\u4E0E\u8FDC\u7AEF\u4E00\u81F4",
  "git.remotes": "\u8FDC\u7AEF",
  "git.noRemotes": "\u8FD9\u4E2A\u4ED3\u5E93\u6CA1\u6709\u914D\u7F6E\u8FDC\u7AEF",
  "git.commits": "\u6700\u8FD1\u7684\u63D0\u4EA4",
  "git.noCommits": "\u8FD8\u6CA1\u6709\u63D0\u4EA4",
  "git.history": "\u672C\u4F1A\u8BDD\u7684\u63D0\u4EA4 / \u63A8\u9001 / PR",
  "git.historyEmpty": "\u8FD9\u4E2A\u4F1A\u8BDD\u8FD8\u6CA1\u6709\u63D0\u4EA4\u3001\u63A8\u9001\u6216 PR \u64CD\u4F5C",
  "git.scope": "\u53EA\u663E\u793A\u4ED3\u5E93\u73B0\u72B6\u548C\u672C\u4F1A\u8BDD\u505A\u8FC7\u4EC0\u4E48\u3002\u8981\u63D0\u4EA4\u3001\u63A8\u9001\u6216\u5EFA\u5206\u652F\uFF0C\u56DE\u5230\u5BF9\u8BDD\u91CC\u544A\u8BC9\u52A9\u624B\uFF0C\u5B83\u4F1A\u5148\u95EE\u4F60\u518D\u505A\u3002",
  // Worktree view (parallel work trees, display only).
  "worktree.only": "\u5F53\u524D\u53EA\u6709\u4E3B\u5DE5\u4F5C\u533A\uFF0C\u6CA1\u6709\u5E76\u884C\u5DE5\u4F5C\u533A",
  "worktree.hint": '\u60F3\u8BA9\u53E6\u4E00\u4E2A\u52A9\u624B\u5728\u540C\u4E00\u4ED3\u5E93\u91CC\u5404\u5E72\u5404\u7684\uFF0C\u53EF\u4EE5\u5728\u5BF9\u8BDD\u91CC\u8BF4"\u5F00\u4E00\u4E2A\u5E76\u884C\u5DE5\u4F5C\u533A"\uFF0C\u5B83\u4F1A\u5728\u53E6\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F\u3002',
  "worktree.current": "\u5F53\u524D\u4F1A\u8BDD\u5728\u8FD9\u91CC",
  "worktree.branch": "\u5206\u652F",
  "worktree.changed": "{count} \u4E2A\u6587\u4EF6\u6709\u6539\u52A8",
  "worktree.clean": "\u6CA1\u6709\u6539\u52A8",
  "worktree.overlap": "\u6CE8\u610F\uFF1A{path} \u5728\u591A\u4E2A\u5DE5\u4F5C\u533A\u91CC\u90FD\u88AB\u6539\u4E86\uFF0C\u5408\u5E76\u65F6\u8BF7\u68C0\u67E5\u662F\u5426\u6709\u51B2\u7A81",
  "worktree.scope": "\u53EA\u663E\u793A\u6709\u54EA\u4E9B\u5E76\u884C\u5DE5\u4F5C\u533A\u3001\u5404\u5728\u54EA\u4E2A\u5206\u652F\u3001\u6539\u4E86\u4EC0\u4E48\u3002\u65B0\u5EFA\u3001\u5408\u5E76\u3001\u5220\u9664\u90FD\u56DE\u5230\u5BF9\u8BDD\u91CC\u544A\u8BC9\u52A9\u624B\u3002",
  // Memory view (project memory only; global memory lives in Settings).
  // D20 copy (莉莉丝 2026-09-06): what to record and what the person can do, first.
  "memory.title": "\u9879\u76EE\u8BB0\u5FC6",
  "memory.guide1": "\u8BB0\u5F55\u8FD9\u4E2A\u9879\u76EE\u7684\u80CC\u666F\u3001\u5DF2\u786E\u8BA4\u7684\u51B3\u5B9A\u548C\u9700\u8981\u5EF6\u7EED\u7684\u4FE1\u606F\uFF0C\u65B9\u4FBF\u540E\u7EED\u5BF9\u8BDD\u63A5\u7740\u5DE5\u4F5C\u3002",
  "memory.guide2": "\u53EF\u4EE5\u76F4\u63A5\u5728\u4E0B\u9762\u7F16\u8F91\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u52A9\u624B\u6574\u7406\u3002\u6BCF\u4E2A\u65B0\u4F1A\u8BDD\u5F00\u59CB\u65F6\u8BFB\u5165\u4E00\u6B21\u3002",
  "memory.empty": "\u5F53\u524D\u9879\u76EE\u8FD8\u6CA1\u6709\u8BB0\u5FC6",
  "memory.emptyHint": "\u52A9\u624B\u5728\u5BF9\u8BDD\u4E2D\u9047\u5230\u503C\u5F97\u5EF6\u7EED\u7684\u4FE1\u606F\u65F6\uFF0C\u4F1A\u5728\u9879\u76EE\u6587\u4EF6\u5939\u91CC\u521B\u5EFA {file}\u3002",
  "memory.missingHint": "\u8BF7\u6062\u590D\u8BE5\u76EE\u5F55\u540E\u70B9\u201C\u5237\u65B0\u201D\uFF0C\u6216\u5207\u6362\u5230\u5176\u4ED6\u5DE5\u4F5C\u533A\u3002",
  "memory.truncated": "\u8BB0\u5FC6\u6587\u4EF6\u5DF2\u8D85\u8FC7 {max} \u5B57\uFF0C\u8FD9\u91CC\u53EA\u663E\u793A\u524D {max} \u5B57\uFF1B\u5B8C\u6574\u5185\u5BB9\u8BF7\u6253\u5F00\u6587\u4EF6\u67E5\u770B\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u52A9\u624B\u7CBE\u7B80\u3002",
  "memory.ask": "\u8BA9\u52A9\u624B\u6574\u7406\u8BB0\u5FC6",
  "memory.askTitle": "\u8BA9\u52A9\u624B\u628A\u8FD9\u6B21\u5BF9\u8BDD\u91CC\u503C\u5F97\u5EF6\u7EED\u7684\u5185\u5BB9\u603B\u7ED3\u8FDB\u9879\u76EE\u8BB0\u5FC6\uFF0C\u5E76\u6574\u7406\u8FC7\u65F6\u6216\u91CD\u590D\u7684\u6761\u76EE\u3002",
  "memory.prompt": "\u8BF7\u6574\u7406\u672C\u9879\u76EE\u7684\u8BB0\u5FC6\u6587\u4EF6 {file}\uFF1A\u5148\u8BFB\u73B0\u6709\u5185\u5BB9\uFF08\u6CA1\u6709\u5C31\u65B0\u5EFA\uFF09\uFF1B\u628A\u8FD9\u4E2A\u7A97\u53E3\u5230\u76EE\u524D\u4E3A\u6B62\u5173\u4E8E\u672C\u9879\u76EE\u7684\u3001\u503C\u5F97\u5EF6\u7EED\u7684\u4FE1\u606F\u2014\u2014\u9879\u76EE\u80CC\u666F\u3001\u5DF2\u786E\u8BA4\u7684\u51B3\u5B9A\u3001\u7EA6\u5B9A\u3001\u8E29\u8FC7\u7684\u5751\u2014\u2014\u63D0\u70BC\u540E\u5408\u5E76\u8FDB\u53BB\uFF1B\u987A\u624B\u53BB\u6389\u8FC7\u65F6\u548C\u91CD\u590D\u7684\u6761\u76EE\u3002\u5199\u5B8C\u540E\u544A\u8BC9\u6211\u65B0\u589E\u4E86\u4EC0\u4E48\u3001\u6539\u4E86\u4EC0\u4E48\u3002",
  "memory.globalNav": "\u5E0C\u671B\u5728\u4E0D\u540C\u9879\u76EE\u4E2D\u90FD\u8BB0\u4F4F\u7684\u4FE1\u606F\uFF0C\u53EF\u524D\u5F80\u300C\u8BBE\u7F6E \u2192 \u5168\u5C40\u8BB0\u5FC6\u300D\u3002",
  "memory.aboutTitle": "\u5173\u4E8E\u9879\u76EE\u8BB0\u5FC6",
  "memory.aboutLocation": "\u6587\u4EF6\u4F4D\u7F6E\uFF1A{path}",
  "memory.aboutRoles": "\u4E0E AGENTS.md \u7684\u533A\u522B\uFF1AAGENTS.md \u662F\u4F60\u5199\u7ED9\u52A9\u624B\u7684\u9879\u76EE\u89C4\u77E9\u2014\u2014\u600E\u4E48\u505A\u4E8B\uFF1B\u9879\u76EE\u8BB0\u5FC6\u662F\u52A9\u624B\u79EF\u7D2F\u7684\u4E8B\u5B9E\u2014\u2014\u8FD9\u4E2A\u9879\u76EE\u7684\u5177\u4F53\u60C5\u51B5\u3002",
  "memory.aboutGit": "\u8BB0\u5FC6\u6587\u4EF6\u5728\u9879\u76EE\u76EE\u5F55\u5185\uFF0C\u53EF\u80FD\u968F\u9879\u76EE\u4E00\u8D77\u63D0\u4EA4\uFF1B\u8981\u4E0D\u8981\u52A0\u8FDB .gitignore \u7531\u4F60\u51B3\u5B9A\uFF0C\u751F\u6D3B\u8D28\u91CF\u5305\u4E0D\u4F1A\u66FF\u4F60\u6539\u4ED3\u5E93\u6587\u4EF6\u3002",
  "memory.createAgents": "\u4E3A\u8FD9\u4E2A\u9879\u76EE\u751F\u6210 AGENTS.md",
  "memory.createAgentsTitle": "\u628A\u4E00\u4EFD\u901A\u7528\u7684\u9879\u76EE\u534F\u4F5C\u6307\u5F15\u5199\u8FDB\u9879\u76EE\u6587\u4EF6\u5939\uFF1B\u5DF2\u6709 AGENTS.md \u65F6\u4E0D\u4F1A\u8986\u76D6\u3002",
  "memory.agentsExists": "\u9879\u76EE\u5DF2\u6709 AGENTS.md\u3002",
  "memory.openAgents": "\u6253\u5F00 AGENTS.md",
  // Chrome for the official MarkdownText primitive the Memory view renders with.
  "markdown.copy": "\u590D\u5236",
  "markdown.copied": "\u5DF2\u590D\u5236",
  "markdown.footnotes": "\u811A\u6CE8",
  // Row annotation: tool name and time.
  "row.atTime": "{tool} \xB7 {time} \xB7 seq {seq}"
};
var en4 = {
  "view.changes": "Changes",
  "view.git": "Git",
  "view.worktree": "Worktrees",
  "view.memory": "Memory",
  "common.refresh": "Refresh",
  "common.loading": "Reading\u2026",
  "common.failed": "Read failed:",
  "notRepository.title": "This workspace is not a Git repository",
  "notRepository.hint": "There are no changes or branches to show here; conversations and other features are not affected. After git init in the project folder, choose Refresh to view them.",
  "changes.branch": "Branch",
  "changes.clean": "Working tree clean; the assistant has not changed any file",
  "changes.group.staged": "Will be committed",
  "changes.group.unstaged": "Changed, not selected for commit",
  "changes.group.untracked": "New files",
  "changes.group.conflict": "Conflicts",
  "changes.copyPath": "Copy path",
  "changes.copied": "Copied",
  "changes.back": "Back to changes",
  "changes.noPatch": "No text patch available (the file may be binary)",
  "changes.scope": "Shows what changed. To commit, discard, or revert, tell the assistant in the conversation.",
  "git.head": "Current branch",
  "git.detached": "(detached HEAD)",
  "git.unborn": "(no commits yet)",
  "git.upstream": "Remote branch",
  "git.noUpstream": "This branch has no remote branch yet (never pushed)",
  "git.ahead": "Local is {count} commit(s) ahead of the remote",
  "git.behind": "Local is {count} commit(s) behind the remote",
  "git.inSync": "In sync with the remote",
  "git.remotes": "Remotes",
  "git.noRemotes": "This repository has no remote configured",
  "git.commits": "Recent commits",
  "git.noCommits": "No commits yet",
  "git.history": "Commits / pushes / PRs in this session",
  "git.historyEmpty": "No commit, push, or PR operation in this session yet",
  "git.scope": "Shows the repository state and what this session did. To commit, push, or branch, tell the assistant in the conversation; it asks before acting.",
  "worktree.only": "Only the main work tree; no parallel work trees",
  "worktree.hint": 'To let another assistant work on the same repository separately, ask in the conversation to "open a parallel work tree"; it creates a new branch in another folder.',
  "worktree.current": "This session is here",
  "worktree.branch": "Branch",
  "worktree.changed": "{count} file(s) changed",
  "worktree.clean": "No changes",
  "worktree.overlap": "Warning: {path} is changed in more than one work tree; check for conflicts when merging",
  "worktree.scope": "Shows which parallel work trees exist, their branches, and what changed. Creating, merging, and removing go through the conversation.",
  "memory.title": "Project memory",
  "memory.guide1": "Records this project's background, confirmed decisions, and anything later conversations should carry forward.",
  "memory.guide2": "Edit it right here, or ask the assistant to tidy it. Every new session reads it once at its start.",
  "memory.empty": "This project has no memory yet",
  "memory.emptyHint": "When something worth carrying forward comes up in a conversation, the assistant creates {file} in the project folder.",
  "memory.missingHint": "Restore the folder and refresh, or switch to another workspace.",
  "memory.truncated": "The memory file exceeds {max} characters; only the first {max} are shown here. Open the file for the rest, or ask the assistant to condense it.",
  "memory.ask": "Ask the assistant to tidy the memory",
  "memory.askTitle": "Ask the assistant to distill what this conversation established into the project memory and tidy stale or duplicate entries.",
  "memory.prompt": "Tidy this project's memory file {file}: read what is there (create it if missing); distill what this window has established about the project so far \u2014 background, confirmed decisions, conventions, pitfalls \u2014 and merge it in; drop stale or duplicate entries along the way. When done, tell me what was added and what changed.",
  "memory.globalNav": "Information to remember across projects goes under Settings \u2192 Global memory.",
  "memory.aboutTitle": "About project memory",
  "memory.aboutLocation": "File location: {path}",
  "memory.aboutRoles": "Difference from AGENTS.md: AGENTS.md is the project rules you write for the assistant \u2014 how to work here. Project memory holds facts the assistant accumulated \u2014 what is actually true about this project.",
  "memory.aboutGit": "The memory file lives inside the project directory and may be committed; whether to add it to .gitignore is your call \u2014 the QoL Pack never modifies your repository files.",
  "memory.createAgents": "Generate AGENTS.md for this project",
  "memory.createAgentsTitle": "Writes a generic project collaboration guide into the project folder; an existing AGENTS.md is never overwritten.",
  "memory.agentsExists": "This project already has an AGENTS.md.",
  "memory.openAgents": "Open AGENTS.md",
  "markdown.copy": "Copy",
  "markdown.copied": "Copied",
  "markdown.footnotes": "Footnotes",
  "row.atTime": "{tool} \xB7 {time} \xB7 seq {seq}"
};
var NS_INSPECTOR = "dsh.qol.inspector";

// src/client/workbench/locales-workbench.ts
var zh5 = {
  "actions.bridge.error": "\u65E0\u6CD5\u8FDE\u63A5 DeepSeekGUI \u684C\u9762\u63A7\u5236\u901A\u9053",
  "status.idle": "\u672A\u8FD0\u884C",
  "status.stopping": "\u6B63\u5728\u505C\u6B62",
  "status.starting": "\u6B63\u5728\u542F\u52A8",
  "status.switching": "\u6B63\u5728\u5207\u6362",
  "status.recovering": "\u6B63\u5728\u6062\u590D",
  "status.running": "\u8FD0\u884C\u4E2D",
  "status.recovered": "\u5DF2\u6062\u590D",
  "status.failed": "\u542F\u52A8\u5931\u8D25",
  "sessionDelete.menu": "\u5220\u9664\u4F1A\u8BDD",
  "sessionDelete.title": "\u5220\u9664\u8FD9\u4E2A\u4F1A\u8BDD\uFF1F",
  "sessionDelete.desc": "\u300C{title}\u300D\u7684\u5BF9\u8BDD\u8BB0\u5F55\u548C\u65E5\u5FD7\u4F1A\u4ECE\u78C1\u76D8\u4E0A\u5220\u9664\u3002",
  "sessionDelete.warning": "\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002",
  "sessionDelete.action": "\u5220\u9664",
  "sessionDelete.cancel": "\u53D6\u6D88",
  "sessionDelete.close": "\u5173\u95ED",
  "sessionDelete.pending": "\u6B63\u5728\u5220\u9664\u2026",
  // B8-P1 会话导出为 Markdown。
  "sessionExport.menu": "\u5BFC\u51FA\u4E3A Markdown",
  "sessionExport.title": "\u5BFC\u51FA\u4E3A Markdown",
  "sessionExport.desc": "\u5C06\u300C{title}\u300D\u5BFC\u51FA\u4E3A\u53EF\u8BFB\u7684 Markdown \u6587\u4EF6\u3002",
  "sessionExport.includeDetails": "\u5305\u542B\u5DE5\u5177\u8C03\u7528\u4E0E\u601D\u8003\u8FC7\u7A0B",
  "sessionExport.action": "\u5BFC\u51FA",
  "sessionExport.cancel": "\u53D6\u6D88",
  "sessionExport.done": "\u5B8C\u6210",
  "sessionExport.pending": "\u6B63\u5728\u751F\u6210\u2026",
  "sessionExport.savedTo": "\u5DF2\u4E0B\u8F7D\uFF1A{path}",
  // Settings → 通用 → 清理沙箱标记（住户 2026-09-29）。
  "sandboxMarks.title": "\u6E05\u7406\u6C99\u7BB1\u6807\u8BB0",
  "sandboxMarks.description": "DeepSeek \u5728\u6C99\u7BB1\u91CC\u6539\u8FC7\u7684\u6587\u4EF6\u5939\u4F1A\u5E26\u4E0A\u4E00\u7EC4\u6743\u9650\u6807\u8BB0\uFF0C\u6807\u8BB0\u8FD8\u5728\u65F6\uFF0C\u4ECE\u8FD9\u4E2A\u6587\u4EF6\u5939\u542F\u52A8\u7684\u90E8\u5206\u7A0B\u5E8F\uFF08\u5982 Electron \u5E94\u7528\uFF09\u65E0\u6CD5\u8FD0\u884C\u3002\u65B0\u7248\u5728\u547D\u4EE4\u7ED3\u675F\u540E\u81EA\u52A8\u6536\u56DE\u6807\u8BB0\uFF1B\u65E7\u7248\u672C\u7559\u4E0B\u7684\u6216\u5F02\u5E38\u9000\u51FA\u540E\u6B8B\u7559\u7684\u6807\u8BB0\uFF0C\u53EF\u4EE5\u5728\u8FD9\u91CC\u9009\u4E2D\u6587\u4EF6\u5939\u6E05\u7406\u3002",
  "sandboxMarks.action": "\u9009\u62E9\u6587\u4EF6\u5939\u2026",
  "sandboxMarks.pending": "\u6B63\u5728\u6E05\u7406\uFF0C\u6587\u4EF6\u5F88\u591A\u7684\u6587\u4EF6\u5939\u9700\u8981\u51E0\u5341\u79D2\u3002",
  "sandboxMarks.cleaned": "\u5DF2\u6E05\u7406\uFF1A",
  "sandboxMarks.cleanedInherited": "\u6807\u8BB0\u6765\u81EA\u4E0A\u5C42\u6587\u4EF6\u5939\uFF0C\u5DF2\u6E05\u7406\uFF1A",
  "sandboxMarks.clean": "\u8FD9\u4E2A\u6587\u4EF6\u5939\u6CA1\u6709\u6C99\u7BB1\u6807\u8BB0\uFF1A",
  "sandboxMarks.busy": "\u6709\u547D\u4EE4\u6B63\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u8FD0\u884C\uFF0C\u7ED3\u675F\u540E\u518D\u6E05\u7406\uFF1A",
  "sandboxMarks.unsupported": "\u5F53\u524D\u6CA1\u6709\u4F7F\u7528 Windows \u6C99\u7BB1\uFF0C\u65E0\u9700\u6E05\u7406\u3002",
  // Settings → 已归档的会话（住户 2026-09-23 要回来的设置页）。
  "archived.nav": "\u5DF2\u5F52\u6863\u7684\u4F1A\u8BDD",
  "archived.hint": "\u5F52\u6863\u7684\u4F1A\u8BDD\u4E0D\u663E\u793A\u5728\u4FA7\u680F\u5206\u7EC4\u91CC\uFF0C\u5BF9\u8BDD\u8BB0\u5F55\u548C\u6240\u5728\u5DE5\u4F5C\u533A\u90FD\u4FDD\u7559\u3002",
  "archived.empty": "\u8FD8\u6CA1\u6709\u5F52\u6863\u8FC7\u7684\u4F1A\u8BDD\u3002\u5728\u4FA7\u680F\u4F1A\u8BDD\u7684\u83DC\u5355\u91CC\u9009\u300C\u5F52\u6863\u300D\uFF0C\u5B83\u5C31\u4F1A\u6536\u5230\u8FD9\u91CC\u3002",
  "archived.restoreOpen": "\u6062\u590D\u5E76\u6253\u5F00",
  "archived.ungrouped": "\u672A\u5206\u7EC4",
  "archived.deleting": "\u6B63\u5728\u5220\u9664\uFF1B\u5982\u679C\u4F1A\u8BDD\u8FD8\u5728\u56DE\u590D\uFF0C\u4F1A\u7B49\u8FD9\u4E00\u8F6E\u56DE\u590D\u548C\u5DE5\u5177\u6267\u884C\u7ED3\u675F\u3002",
  "archived.failed": "\u64CD\u4F5C\u5931\u8D25\uFF1A"
};
var en5 = {
  "actions.bridge.error": "Cannot reach the DeepSeekGUI desktop control channel",
  "status.idle": "Not running",
  "status.stopping": "Stopping",
  "status.starting": "Starting",
  "status.switching": "Switching",
  "status.recovering": "Recovering",
  "status.running": "Running",
  "status.recovered": "Recovered",
  "status.failed": "Start failed",
  "sessionDelete.menu": "Delete session",
  "sessionDelete.title": "Delete this session?",
  "sessionDelete.desc": "The conversation and logs of \u201C{title}\u201D are erased from disk.",
  "sessionDelete.warning": "This cannot be undone.",
  "sessionDelete.action": "Delete",
  "sessionDelete.cancel": "Cancel",
  "sessionDelete.close": "Close",
  "sessionDelete.pending": "Deleting\u2026",
  "sessionExport.menu": "Export as Markdown",
  "sessionExport.title": "Export as Markdown",
  "sessionExport.desc": "Export \u201C{title}\u201D as a readable Markdown file.",
  "sessionExport.includeDetails": "Include tool calls and reasoning",
  "sessionExport.action": "Export",
  "sessionExport.cancel": "Cancel",
  "sessionExport.done": "Done",
  "sessionExport.pending": "Generating\u2026",
  "sessionExport.savedTo": "Downloaded: {path}",
  "sandboxMarks.title": "Clean sandbox marks",
  "sandboxMarks.description": "Folders DeepSeek changed inside the sandbox carry a set of permission marks; while they remain, some programs started from the folder (Electron apps, for example) cannot run. Current versions take the marks back when commands finish; marks left by older versions or after an unexpected exit can be cleaned here by choosing the folder.",
  "sandboxMarks.action": "Choose folder\u2026",
  "sandboxMarks.pending": "Cleaning; folders with many files take tens of seconds.",
  "sandboxMarks.cleaned": "Cleaned: ",
  "sandboxMarks.cleanedInherited": "The marks came from a parent folder, now cleaned: ",
  "sandboxMarks.clean": "This folder has no sandbox marks: ",
  "sandboxMarks.busy": "A command is running in this folder; clean it after the command ends: ",
  "sandboxMarks.unsupported": "The Windows sandbox is not in use; nothing to clean.",
  "archived.nav": "Archived sessions",
  "archived.hint": "Archived sessions are hidden from the sidebar groups; their conversation and workspace are kept.",
  "archived.empty": "No sessions are archived yet. Choose \u201CArchive\u201D in a session\u2019s sidebar menu to put it here.",
  "archived.restoreOpen": "Restore and open",
  "archived.ungrouped": "Ungrouped",
  "archived.deleting": "Deleting; if the session is still replying, deletion waits for its current reply and tool work to finish.",
  "archived.failed": "Action failed: "
};

// src/client/workbench/ArchivedSessionsSection.tsx
var import_react8 = require("react");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime10 = require("react/jsx-runtime");
function directoryName(cwd) {
  if (cwd === void 0 || cwd === "") return "";
  const parts = cwd.split(/[\\/]+/).filter((part) => part !== "");
  return parts.at(-1) ?? cwd;
}
function archivedRows(byId, workspaces, archivedSessionIds) {
  const workspaceOf = /* @__PURE__ */ new Map();
  for (const workspace of workspaces) {
    for (const sessionId of workspace.sessionIds) {
      if (!workspaceOf.has(sessionId)) workspaceOf.set(sessionId, workspace.title);
    }
  }
  const rows = [];
  const seen = /* @__PURE__ */ new Set();
  for (const id of archivedSessionIds) {
    if (seen.has(id)) continue;
    seen.add(id);
    const summary = byId[id];
    if (summary === void 0) continue;
    rows.push({ id, title: summary.displayTitle !== "" ? summary.displayTitle : directoryName(summary.cwd), workspace: workspaceOf.get(id) ?? "" });
  }
  return rows;
}
var listRow = { ...row, flexWrap: "nowrap" };
var titleCell = { flex: "1 1 auto", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" };
var workspaceCell = { ...caption2, flex: "0 1 auto", maxWidth: "30%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" };
function ArchivedSessionsSection(props) {
  const { t, restore, open, deleteSession } = props;
  const { useSessions, useWorkspaces } = props;
  const byId = useSessions((state) => state.byId);
  const workspaces = useWorkspaces((state) => state.items);
  const archivedSessionIds = useWorkspaces((state) => state.archivedSessionIds);
  const [armed, setArmed] = (0, import_react8.useState)(null);
  const [deleting, setDeleting] = (0, import_react8.useState)(null);
  const [failure, setFailure] = (0, import_react8.useState)(null);
  const rows = archivedRows(byId, workspaces, archivedSessionIds);
  const restoreAndOpen = (sessionId) => {
    setFailure(null);
    void restore(sessionId).then(() => {
      open(sessionId);
    }).catch((reason) => {
      setFailure(reason instanceof Error ? reason.message : String(reason));
    });
  };
  const confirmDelete = (sessionId) => {
    if (deleteSession === null || deleting !== null) return;
    setArmed(null);
    setFailure(null);
    setDeleting(sessionId);
    void deleteSession(sessionId).catch((reason) => {
      setFailure(reason instanceof Error ? reason.message : String(reason));
    }).finally(() => {
      setDeleting(null);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: column, "data-deepseekgui": "archived-sessions", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { style: intro, children: rows.length === 0 ? t("archived.empty") : t("archived.hint") }),
    deleting !== null && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: caption2, role: "status", children: t("archived.deleting") }),
    failure !== null && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: errorText, role: "alert", children: [
      t("archived.failed"),
      failure
    ] }),
    rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: card, "data-deepseekgui": "archived-row", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: listRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: titleCell, title: item.title, children: item.title }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: workspaceCell, title: item.workspace, children: item.workspace === "" ? t("archived.ungrouped") : item.workspace }),
      armed === item.id ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: { ...caption2, ...errorText, whiteSpace: "nowrap" }, children: t("sessionDelete.warning") }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", style: dangerButton, disabled: deleting !== null, onClick: () => {
          confirmDelete(item.id);
        }, children: t("sessionDelete.action") }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", style: button, onClick: () => {
          setArmed(null);
        }, children: t("sessionDelete.cancel") })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "button", style: button, disabled: deleting === item.id, onClick: () => {
          restoreAndOpen(item.id);
        }, children: t("archived.restoreOpen") }),
        deleteSession !== null && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            type: "button",
            style: { ...button, padding: "4px 8px" },
            disabled: deleting !== null,
            title: t("sessionDelete.menu"),
            "aria-label": t("sessionDelete.menu"),
            onClick: () => {
              setArmed(item.id);
              setFailure(null);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives2.IconTrashOutlineRegular, { size: 14 })
          }
        )
      ] })
    ] }) }, item.id))
  ] });
}

// src/client/workbench/UsageSection.tsx
var import_react9 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var NS_USAGE = "dsh.qol.usage";
var zh6 = {
  "nav": "\u7528\u91CF\u4E0E\u4F59\u989D",
  "intro": "\u6570\u636E\u6765\u81EA DeepSeek \u5F00\u653E\u5E73\u53F0\uFF08\u7528\u4F60\u5728\u672C\u673A\u767B\u5F55\u7684\u5B98\u65B9\u8D26\u53F7\u8BFB\u53D6\uFF09\uFF0C\u548C\u5B98\u7F51\u7528\u91CF\u9875\u662F\u540C\u4E00\u4EFD\u8D26\u5355\u3002",
  "balance": "\u4F59\u989D",
  "total-cost": "\u7D2F\u8BA1\u6D88\u8D39",
  "bonus": "\u8D60\u91D1\uFF1A",
  "period.today": "\u4ECA\u5929",
  "period.7d": "7 \u5929",
  "period.30d": "30 \u5929",
  "stat.cost": "\u6D88\u8D39\u91D1\u989D",
  "stat.requests": "\u8BF7\u6C42\u6570",
  "stat.tokens": "Token \u603B\u6570",
  "stat.cache": "\u7F13\u5B58\u547D\u4E2D\u7387",
  "heatmap.title": "\u6700\u8FD1 60 \u5929",
  "heatmap.tokens": "Token",
  "heatmap.less": "\u5C11",
  "heatmap.more": "\u591A",
  "refresh": "\u5237\u65B0",
  "refreshing": "\u5237\u65B0\u4E2D\u2026",
  "fetched-at": "\u4E0A\u6B21\u5237\u65B0\uFF1A",
  "loading": "\u6B63\u5728\u8BFB\u53D6\u8D26\u6237\u6570\u636E\u2026",
  "signed-out": "\u6CA1\u6709\u767B\u5F55\u5B98\u65B9\u8D26\u53F7\uFF0C\u6216\u767B\u5F55\u5DF2\u5931\u6548\u3002\u5728\u300C\u8D26\u53F7\u300D\u91CC\u767B\u5F55\u540E\u518D\u5237\u65B0\u3002",
  "unavailable.network": "\u6682\u65F6\u8FDE\u4E0D\u4E0A\u5F00\u653E\u5E73\u53F0\uFF0C\u7A0D\u540E\u518D\u8BD5\u3002",
  "unavailable.timeout": "\u8BFB\u53D6\u8D26\u6237\u6570\u636E\u8D85\u65F6\uFF0C\u7A0D\u540E\u518D\u8BD5\u3002",
  "unavailable.format": "\u5F00\u653E\u5E73\u53F0\u7684\u6570\u636E\u683C\u5F0F\u53D8\u4E86\uFF0C\u672C\u9875\u6682\u65F6\u8BFB\u4E0D\u51FA\u6765\uFF1B\u5B98\u7F51\u9875\u9762\u7167\u5E38\u53EF\u770B\u3002",
  "unavailable.blocked": "\u5F00\u653E\u5E73\u53F0\u6682\u65F6\u62E6\u4E0B\u4E86\u8BF7\u6C42\uFF08\u77ED\u65F6\u95F4\u5185\u8BF7\u6C42\u592A\u591A\u65F6\u4F1A\u8FD9\u6837\uFF09\uFF0C\u8FC7\u51E0\u5206\u949F\u518D\u70B9\u5237\u65B0\u3002",
  "unavailable.no-session": "\u6682\u65F6\u62FF\u4E0D\u5230\u8D26\u53F7\u767B\u5F55\u4FE1\u606F\uFF0C\u7A0D\u540E\u518D\u8BD5\u3002",
  "error": "\u8BFB\u53D6\u5931\u8D25\uFF1A",
  "more": "\u66F4\u591A\u8BE6\u60C5\u8DF3\u8F6C\u5B98\u7F51\u67E5\u770B \u2197",
  "no-data": "\u2014"
};
var en6 = {
  "nav": "Usage and balance",
  "intro": "Read from the DeepSeek open platform with the official account signed in on this machine; the same bill as the official usage page.",
  "balance": "Balance",
  "total-cost": "Total spent",
  "bonus": "Bonus: ",
  "period.today": "Today",
  "period.7d": "7 days",
  "period.30d": "30 days",
  "stat.cost": "Spent",
  "stat.requests": "Requests",
  "stat.tokens": "Total tokens",
  "stat.cache": "Cache hit rate",
  "heatmap.title": "Last 60 days",
  "heatmap.tokens": "tokens",
  "heatmap.less": "Less",
  "heatmap.more": "More",
  "refresh": "Refresh",
  "refreshing": "Refreshing\u2026",
  "fetched-at": "Last refreshed: ",
  "loading": "Reading account data\u2026",
  "signed-out": "No official account is signed in, or the sign-in expired. Sign in under Account, then refresh.",
  "unavailable.network": "The open platform is unreachable right now. Try again later.",
  "unavailable.timeout": "Reading account data timed out. Try again later.",
  "unavailable.format": "The open platform changed its data format, so this page cannot read it for now. The official page still works.",
  "unavailable.blocked": "The open platform is refusing requests for now (this happens when too many arrive at once). Refresh again in a few minutes.",
  "unavailable.no-session": "The account sign-in is not available right now. Try again later.",
  "error": "Could not read: ",
  "more": "See more details on the official site \u2197",
  "no-data": "\u2014"
};
function truncateDecimal(text, places) {
  const dot = text.indexOf(".");
  if (dot === -1) return places > 0 ? `${text}.${"0".repeat(places)}` : text;
  const fraction = text.slice(dot + 1, dot + 1 + places).padEnd(places, "0");
  return text.slice(0, dot) + (places > 0 ? `.${fraction}` : "");
}
var CURRENCY_SYMBOL = { CNY: "\xA5", USD: "$" };
function moneyList(list, empty) {
  if (list.length === 0) return empty;
  return list.map((money) => {
    const symbol = CURRENCY_SYMBOL[money.currency];
    const amount = truncateDecimal(money.amount, 2);
    return symbol === void 0 ? `${money.currency} ${amount}` : symbol + amount;
  }).join(" \xB7 ");
}
function rateText(rate, empty) {
  return rate === null ? empty : `${(Math.round(rate * 1e3) / 10).toFixed(1)}%`;
}
var HEAT_LEVELS = ["transparent", "rgba(77,107,254,0.22)", "rgba(77,107,254,0.45)", "rgba(77,107,254,0.7)", "rgba(77,107,254,1)"];
function heatLevel(tokens, max) {
  if (tokens <= 0 || max <= 0) return 0;
  return Math.max(1, Math.min(4, Math.ceil(tokens / max * 4)));
}
var bigNumber = { fontSize: 26, lineHeight: "34px", fontWeight: 600, fontVariantNumeric: "tabular-nums", overflowWrap: "anywhere" };
var statNumber = { fontSize: 18, lineHeight: "26px", fontWeight: 600, fontVariantNumeric: "tabular-nums", overflowWrap: "anywhere" };
var flexCard = { ...card, flex: "1 1 0", minWidth: 120 };
var active = { ...button, border: "1px solid var(--dsw-alias-brand-primary)" };
function UsageSection(props) {
  const { t, load } = props;
  const [usage, setUsage] = (0, import_react9.useState)(null);
  const [loading, setLoading] = (0, import_react9.useState)(false);
  const [failure, setFailure] = (0, import_react9.useState)(null);
  const [period, setPeriod] = (0, import_react9.useState)("30d");
  const refresh = (0, import_react9.useCallback)(() => {
    setLoading(true);
    setFailure(null);
    load().then(setUsage, (reason) => {
      setUsage(null);
      setFailure(reason instanceof Error ? reason.message : String(reason));
    }).finally(() => {
      setLoading(false);
    });
  }, [load]);
  (0, import_react9.useEffect)(refresh, [refresh]);
  const empty = t("no-data");
  const header = /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { ...row, justifyContent: "space-between" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: caption2, children: loading ? t("refreshing") : usage !== null ? t("fetched-at") + new Date(usage.fetchedAt).toLocaleString() : "" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", style: button, disabled: loading, onClick: refresh, children: loading ? t("refreshing") : `\u{1F504} ${t("refresh")}` })
  ] });
  const footer = /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { ...row, justifyContent: "flex-end" }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", { style: caption2, href: usage?.usagePageUrl ?? "https://platform.deepseek.com/usage", target: "_blank", rel: "noreferrer", children: t("more") }) });
  const frame = (body) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { ...column, gap: 12, opacity: loading && usage !== null ? 0.7 : 1 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { style: intro, children: t("intro") }),
    header,
    body,
    footer
  ] });
  if (failure !== null) return frame(/* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: card, children: t("error") + failure }));
  if (usage === null) return frame(/* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: caption2, children: t("loading") }));
  if (usage.status === "signed-out") return frame(/* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: card, children: t("signed-out") }));
  if (usage.status === "unavailable" || usage.data === null) {
    return frame(/* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: card, children: t(`unavailable.${usage.reason ?? "network"}`) }));
  }
  const data = usage.data;
  const slice = period === "today" ? data.today : period === "7d" ? data.days7 : data.days30;
  const max = Math.max(0, ...data.heatmap.map((day) => day.tokens));
  const stats = [
    ["stat.cost", moneyList(slice.costs, empty)],
    ["stat.requests", slice.requests.toLocaleString()],
    ["stat.tokens", slice.tokens.toLocaleString()],
    ["stat.cache", rateText(slice.cacheHitRate, empty)]
  ];
  return frame(
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { ...row, alignItems: "stretch" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: flexCard, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: caption2, children: t("balance") }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: bigNumber, children: moneyList(data.balances, empty) }),
          data.bonus.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: caption2, children: t("bonus") + moneyList(data.bonus, empty) }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: flexCard, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: caption2, children: t("total-cost") }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: bigNumber, children: moneyList(data.totalCosts, empty) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: row, children: ["today", "7d", "30d"].map((key) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", style: period === key ? active : button, onClick: () => {
        setPeriod(key);
      }, children: t(`period.${key}`) }, key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { ...row, alignItems: "stretch" }, children: stats.map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: flexCard, children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: caption2, children: t(key) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: statNumber, children: value })
      ] }, key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: column, children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: caption2, children: t("heatmap.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 5, maxWidth: 420 }, children: data.heatmap.map((day) => {
          const level = heatLevel(day.tokens, max);
          return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "div",
            {
              title: `${day.date} \xB7 ${day.tokens.toLocaleString()} ${t("heatmap.tokens")}`,
              style: { aspectRatio: "1 / 1", borderRadius: 5, border: "1px solid var(--dsw-alias-border-l1)", background: HEAT_LEVELS[level] }
            },
            day.date
          );
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { ...row, gap: 4, maxWidth: 420, justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: caption2, children: t("heatmap.less") }),
          HEAT_LEVELS.map((color) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: { width: 12, height: 12, borderRadius: 3, border: "1px solid var(--dsw-alias-border-l1)", background: color } }, color)),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { style: caption2, children: t("heatmap.more") })
        ] })
      ] })
    ] })
  );
}

// src/client/workbench/session-export.tsx
var import_react10 = require("react");
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/client/workbench/session-export-filename.ts
var SESSION_EXPORT_TITLE_MAX_CHARS = 60;
var ILLEGAL_CHARACTERS = /[<>:"/\\|?*\u0000-\u001f]/gu;
var RESERVED_NAMES = /* @__PURE__ */ new Set([
  "CON",
  "PRN",
  "AUX",
  "NUL",
  "COM1",
  "COM2",
  "COM3",
  "COM4",
  "COM5",
  "COM6",
  "COM7",
  "COM8",
  "COM9",
  "LPT1",
  "LPT2",
  "LPT3",
  "LPT4",
  "LPT5",
  "LPT6",
  "LPT7",
  "LPT8",
  "LPT9"
]);
var FALLBACK_STEM = "session";
function sessionExportFileStem(title) {
  let stem = title.replace(ILLEGAL_CHARACTERS, "");
  stem = stem.replace(/^[\s.]+/u, "").replace(/[\s.]+$/u, "");
  if (stem.length > SESSION_EXPORT_TITLE_MAX_CHARS) {
    stem = stem.slice(0, SESSION_EXPORT_TITLE_MAX_CHARS);
    const tail = stem.charCodeAt(stem.length - 1);
    if (tail >= 55296 && tail <= 56319) stem = stem.slice(0, -1);
  }
  stem = stem.replace(/[\s.]+$/u, "");
  if (RESERVED_NAMES.has(stem.toUpperCase())) stem = `${FALLBACK_STEM}-${stem}`;
  return stem === "" ? FALLBACK_STEM : stem;
}
function sessionExportFileName(title, now) {
  const pad = (value) => String(value).padStart(2, "0");
  const stamp = `${String(now.getFullYear()).padStart(4, "0")}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}`;
  return `${sessionExportFileStem(title)}-${stamp}.md`;
}

// src/client/workbench/session-export.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var pending = null;
var listeners = /* @__PURE__ */ new Set();
var pendingStore = {
  subscribe(listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  snapshot() {
    return pending;
  },
  set(next) {
    pending = next;
    for (const listener of listeners) listener();
  }
};
function createSessionExporter(inspector, language) {
  return async (sessionId, includeDetails) => {
    const result = await inspector.exportMarkdown(sessionId, includeDetails, language(), new AbortController().signal);
    if (!result.ok) throw new Error(result.error.message);
    const filename = sessionExportFileName(result.value.title, /* @__PURE__ */ new Date());
    const url = URL.createObjectURL(new Blob([result.value.markdown], { type: "text/markdown;charset=utf-8" }));
    try {
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename;
      anchor.click();
    } finally {
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 6e4);
    }
    return { canceled: false, path: filename };
  };
}
function ExportSessionMenuItem({
  sessionId,
  displayTitle,
  useMenuOpenState,
  exporter,
  t
}) {
  const [, setMenuOpen] = useMenuOpenState();
  if (exporter === null) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_dsh_client_ui_primitives3.MenuItemButton,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dsh_client_ui_primitives3.IconDownloadOutlineRegular, { size: 14 }),
      onSelect: () => {
        setMenuOpen(false);
        pendingStore.set({ sessionId, title: displayTitle });
      },
      children: t("sessionExport.menu")
    }
  );
}
function ExportSessionDialog({ exporter, t }) {
  const request = (0, import_react10.useSyncExternalStore)(pendingStore.subscribe, pendingStore.snapshot, pendingStore.snapshot);
  if (request === null || exporter === null) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ExportForm, { request, exporter, t }, request.sessionId);
}
function ExportForm({ request, exporter, t }) {
  const [includeDetails, setIncludeDetails] = (0, import_react10.useState)(false);
  const [exporting, setExporting] = (0, import_react10.useState)(false);
  const [savedPath, setSavedPath] = (0, import_react10.useState)(null);
  const [error, setError] = (0, import_react10.useState)(null);
  const close = () => {
    if (exporting) return;
    pendingStore.set(null);
  };
  const run = () => {
    setExporting(true);
    setError(null);
    exporter(request.sessionId, includeDetails).then((outcome) => {
      setExporting(false);
      if (outcome.canceled) {
        pendingStore.set(null);
        return;
      }
      setSavedPath(outcome.path);
    }).catch((reason) => {
      setExporting(false);
      setError(reason instanceof Error ? reason.message : String(reason));
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_dsh_client_ui_primitives3.Modal,
    {
      open: true,
      onClose: close,
      closeLabel: t("sessionExport.cancel"),
      title: t("sessionExport.title"),
      description: t("sessionExport.desc", { title: request.title }),
      footer: savedPath === null ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dsh_client_ui_primitives3.Button, { variant: "outline", disabled: exporting, onClick: close, children: t("sessionExport.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dsh_client_ui_primitives3.Button, { variant: "outline", disabled: exporting, onClick: run, children: t("sessionExport.action") })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dsh_client_ui_primitives3.Button, { variant: "outline", onClick: close, children: t("sessionExport.done") }),
      children: [
        savedPath === null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_dsh_client_ui_primitives3.Checkbox,
          {
            checked: includeDetails,
            onChange: setIncludeDetails,
            disabled: exporting,
            label: t("sessionExport.includeDetails")
          }
        ),
        exporting && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { role: "status", children: t("sessionExport.pending") }),
        savedPath !== null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { role: "status", style: { wordBreak: "break-all" }, children: t("sessionExport.savedTo", { path: savedPath }) }),
        error !== null && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { role: "alert", children: error })
      ]
    }
  );
}

// src/client/workbench/session-delete.tsx
var import_react11 = require("react");
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime13 = require("react/jsx-runtime");
var pending2 = null;
var listeners2 = /* @__PURE__ */ new Set();
var pendingStore2 = {
  subscribe(listener) {
    listeners2.add(listener);
    return () => {
      listeners2.delete(listener);
    };
  },
  snapshot() {
    return pending2;
  },
  set(next) {
    pending2 = next;
    for (const listener of listeners2) listener();
  }
};
function createSessionDeleter(inspector) {
  return async (sessionId) => {
    const result = await inspector.deleteSession(sessionId, "dsh-qol");
    if (!result.ok) throw new Error(result.error.message);
  };
}
function DeleteSessionMenuItem({
  sessionId,
  displayTitle,
  useMenuOpenState,
  useWorkspaces,
  deleteSession,
  t
}) {
  const [, setMenuOpen] = useMenuOpenState();
  const archived = useWorkspaces((state) => state.archivedSessionIds.includes(sessionId));
  if (deleteSession === null || !archived) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_dsh_client_ui_primitives4.MenuItemButton,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dsh_client_ui_primitives4.IconTrashOutlineRegular, { size: 14 }),
      onSelect: () => {
        setMenuOpen(false);
        pendingStore2.set({ sessionId, title: displayTitle });
      },
      children: t("sessionDelete.menu")
    }
  );
}
function DeleteSessionDialog({ deleteSession, t }) {
  const request = (0, import_react11.useSyncExternalStore)(pendingStore2.subscribe, pendingStore2.snapshot, pendingStore2.snapshot);
  if (request === null || deleteSession === null) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DeleteConfirmForm, { request, deleteSession, t }, request.sessionId);
}
function DeleteConfirmForm({ request, deleteSession, t }) {
  const [deleting, setDeleting] = (0, import_react11.useState)(false);
  const [error, setError] = (0, import_react11.useState)(null);
  const close = () => {
    if (deleting) return;
    pendingStore2.set(null);
  };
  const confirm = () => {
    setDeleting(true);
    setError(null);
    deleteSession(request.sessionId).then(() => {
      setDeleting(false);
      pendingStore2.set(null);
    }).catch((reason) => {
      setDeleting(false);
      setError(reason instanceof Error ? reason.message : String(reason));
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    import_dsh_client_ui_primitives4.Modal,
    {
      open: true,
      onClose: close,
      closeLabel: t("sessionDelete.close"),
      title: t("sessionDelete.title"),
      description: t("sessionDelete.desc", { title: request.title }),
      footer: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dsh_client_ui_primitives4.Button, { variant: "outline", disabled: deleting, onClick: close, children: t("sessionDelete.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_dsh_client_ui_primitives4.Button,
          {
            variant: "outline",
            style: { color: "var(--dsw-alias-state-error-primary)" },
            disabled: deleting,
            onClick: confirm,
            children: t("sessionDelete.action")
          }
        )
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { children: t("sessionDelete.warning") }),
        deleting && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { role: "status", children: t("sessionDelete.pending") }),
        error !== null && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { role: "alert", children: error })
      ]
    }
  );
}

// src/client/workbench/register.tsx
var GIT_PR_TOOL_KEYS = [
  "git_status",
  "git_diff",
  "git_stage",
  "git_unstage",
  "git_revert",
  "git_commit",
  "git_push_preview",
  "git_push",
  "pr_availability",
  "pr_existing",
  "pr_create"
];
var VIEWS = [
  { id: "dsh-qol-changes", order: 20, label: "view.changes", component: ChangesView },
  { id: "dsh-qol-git", order: 21, label: "view.git", component: GitView }
];
var MEMORY_VIEW_ORDER = 23;
var MEMORY_SECTION_ORDER = 46;
var USAGE_SECTION_ORDER = 44;
var ARCHIVED_SECTION_ORDER = 30;
var EXPORT_MENU_ORDER = 450;
var DELETE_MENU_ORDER = 500;
var workbenchInject = ["slots", "locale", "remote", "sessions", "conversation", "uiWorkspace"];
async function applyWorkbench(ctx) {
  const unmountInspector = await ctx.remote.$mount(typert_remote_client_default);
  ctx.effect(() => () => {
    void unmountInspector();
  }, "dsh-qol: inspector remote");
  ctx.effect(() => ctx.locale.register(NS_TOOLS, { zh: zh3, en: en3 }), "dsh-qol: tool dictionaries");
  ctx.effect(() => ctx.locale.register(NS_INSPECTOR, { zh: zh4, en: en4 }), "dsh-qol: inspector dictionaries");
  ctx.effect(() => ctx.locale.register(NS_MEMORY, { zh: zh2, en: en2 }), "dsh-qol: memory dictionaries");
  ctx.effect(() => ctx.locale.register("dsh.qol.workbench", { zh: zh5, en: en5 }), "dsh-qol: workbench dictionaries");
  ctx.effect(() => ctx.locale.register(NS_USAGE, { zh: zh6, en: en6 }), "dsh-qol: usage dictionaries");
  const t = ctx.locale.bind(NS_INSPECTOR);
  const tm = ctx.locale.bind(NS_MEMORY);
  const instructions = (sessionId) => ({ submitInstruction: instructionSender(ctx, sessionId) });
  ctx.slots.inject("tool.call.toolview", function* () {
    for (const key of GIT_PR_TOOL_KEYS) {
      yield ctx.slots.register({ name: "tool.call.toolview", key, locale: NS_TOOLS, inject: instructions }, GitPrToolRow);
    }
  });
  await ctx.inject(["slots", "remote.workbenchInspector"], (scoped) => {
    const inspector = scoped.remote.workbenchInspector;
    const desk = createWorkbenchDesk(inspector);
    scoped.slots.inject("conversation.view", function* () {
      for (const entry of VIEWS) {
        yield scoped.slots.register({
          name: "conversation.view",
          id: entry.id,
          order: entry.order,
          locale: NS_INSPECTOR,
          label: () => t(entry.label),
          inject: (sessionId) => ({ ...instructions(sessionId), inspector, desk })
        }, entry.component);
      }
      yield scoped.slots.register({
        name: "conversation.view",
        id: "dsh-qol-memory",
        order: MEMORY_VIEW_ORDER,
        locale: NS_INSPECTOR,
        label: () => t("view.memory"),
        inject: (sessionId) => ({ ...instructions(sessionId), inspector, desk, tm })
      }, MemoryView);
    });
    scoped.slots.inject("settings.section", () => scoped.slots.register({
      name: "settings.section",
      id: "dsh-qol-memory",
      order: MEMORY_SECTION_ORDER,
      locale: NS_MEMORY,
      label: () => tm("nav.memory"),
      inject: () => ({ desk })
    }, MemorySettingsSection));
    const tu = ctx.locale.bind(NS_USAGE);
    const loadUsage = async () => {
      const result = await inspector.accountUsage(/[一-鿿]/u.test(tu("nav")) ? "zh" : "en", new AbortController().signal);
      if (!result.ok) throw new Error(result.error.message);
      return result.value;
    };
    scoped.slots.inject("settings.section", () => scoped.slots.register({
      name: "settings.section",
      id: "dsh-qol-usage",
      order: USAGE_SECTION_ORDER,
      locale: NS_USAGE,
      label: () => tu("nav"),
      inject: () => ({ load: loadUsage })
    }, UsageSection));
    const deleteSession = createSessionDeleter(inspector);
    scoped.slots.inject("settings.section", () => scoped.slots.register({
      name: "settings.section",
      id: "dsh-qol-archived",
      order: ARCHIVED_SECTION_ORDER,
      locale: "dsh.qol.workbench",
      label: () => ctx.locale.bind("dsh.qol.workbench")("archived.nav"),
      inject: () => ({
        restore: (sessionId) => ctx.uiWorkspace.unarchiveSession(sessionId),
        open: (sessionId) => {
          ctx.uiWorkspace.openSession(sessionId);
        },
        deleteSession
      })
    }, ArchivedSessionsSection));
    scoped.slots.inject("sidebar.workspaces.session.menu.item", () => scoped.slots.register({
      name: "sidebar.workspaces.session.menu.item",
      id: "dsh-qol-delete",
      locale: "dsh.qol.workbench",
      order: DELETE_MENU_ORDER,
      inject: () => ({ deleteSession })
    }, DeleteSessionMenuItem));
    scoped.slots.inject("shell.overlay", () => scoped.slots.register({
      name: "shell.overlay",
      id: "dsh-qol-session-delete",
      locale: "dsh.qol.workbench",
      inject: () => ({ deleteSession })
    }, DeleteSessionDialog));
    const exporter = createSessionExporter(inspector, () => /[一-鿿]/u.test(t("view.memory")) ? "zh" : "en");
    scoped.slots.inject("sidebar.workspaces.session.menu.item", () => scoped.slots.register({
      name: "sidebar.workspaces.session.menu.item",
      id: "dsh-qol-export",
      locale: "dsh.qol.workbench",
      order: EXPORT_MENU_ORDER,
      inject: () => ({ exporter })
    }, ExportSessionMenuItem));
    scoped.slots.inject("shell.overlay", () => scoped.slots.register({
      name: "shell.overlay",
      id: "dsh-qol-session-export",
      locale: "dsh.qol.workbench",
      inject: () => ({ exporter })
    }, ExportSessionDialog));
  });
}

// src/client/notify/NotificationWatcher.tsx
var import_react12 = require("react");

// src/client/notify/notifier-model.ts
function advanceJobMemory(memory, sessionId, jobs) {
  const prefix = `${sessionId}\0`;
  const seen = /* @__PURE__ */ new Set();
  const notices = [];
  for (const job of jobs) {
    const key = `${prefix}${job.id}`;
    seen.add(key);
    const previous = memory.get(key);
    if (previous !== void 0 && previous !== job.status && (job.status === "completed" || job.status === "failed")) {
      notices.push({
        sessionId,
        jobId: job.id,
        status: job.status,
        label: job.label,
        kind: job.kind
      });
    }
    memory.set(key, job.status);
  }
  for (const key of [...memory.keys()]) {
    if (key.startsWith(prefix) && !seen.has(key)) memory.delete(key);
  }
  return notices;
}
function officialEventIdOf(pending3) {
  if (pending3.kind === "approval") {
    if (pending3.callId !== void 0 && pending3.callId !== "") return pending3.callId;
    return pending3.key;
  }
  return pending3.key;
}
function compactLine(text, max = 400) {
  const oneLine = text.replace(/\s+/gu, " ").trim();
  if (oneLine.length <= max) return oneLine;
  return `${oneLine.slice(0, max)}\u2026`;
}
function readPending(value) {
  if (typeof value !== "object" || value === null) return null;
  const record = value;
  if (typeof record.key !== "string") return null;
  if (typeof record.kind !== "string") return null;
  const read = { kind: record.kind, key: record.key };
  if (typeof record.callId === "string" && record.callId !== "") read.callId = record.callId;
  if (typeof record.toolName === "string") read.toolName = record.toolName;
  if (typeof record.reason === "string") read.reason = record.reason;
  if (Array.isArray(record.questions)) {
    const questions = [];
    for (const item of record.questions) {
      if (typeof item !== "object" || item === null) continue;
      const row4 = item;
      questions.push({
        ...typeof row4.id === "string" ? { id: row4.id } : {},
        ...typeof row4.question === "string" ? { question: row4.question } : {}
      });
    }
    read.questions = questions;
  }
  return read;
}

// src/client/notify/NotificationWatcher.tsx
function NotificationWatcher(props) {
  const { useSessionStatus, usePanelInfo, useSessions } = props;
  const statuses = useSessionStatus((snapshot) => snapshot);
  const mainAreaShowsSession = usePanelInfo((info) => info.activePanelId === null);
  const viewedSession = useSessions((state) => Object.values(state.byId).find((session) => (session.retainedBy.mainView ?? 0) > 0)?.id);
  const pending3 = (0, import_react12.useMemo)(() => new Map(
    [...statuses].flatMap(([sessionId, status]) => status.pendingInteraction === void 0 ? [] : [[sessionId, status.pendingInteraction]])
  ), [statuses]);
  const jobs = props.jobs;
  const subscribeJobs = (0, import_react12.useCallback)((listener) => jobs.subscribe(listener), [jobs]);
  const readJobs = (0, import_react12.useCallback)(() => jobs.getSnapshot(), [jobs]);
  const jobRows = (0, import_react12.useSyncExternalStore)(subscribeJobs, readJobs).rows;
  const sessionFacts = { current: mainAreaShowsSession ? viewedSession : void 0, jobs: jobRows };
  const notified = (0, import_react12.useRef)(/* @__PURE__ */ new Set());
  const jobMemory = (0, import_react12.useRef)(/* @__PURE__ */ new Map());
  const { t, openSession } = props;
  const maybeNotify = (0, import_react12.useCallback)((kind, sessionId, id, title, body, current) => {
    const key = `${sessionId}/${kind}/${id}`;
    if (notified.current.has(key)) return;
    notified.current.add(key);
    if (document.hasFocus() && current === sessionId) return;
    try {
      if (typeof Notification === "undefined" || Notification.permission === "denied") return;
      const notification = new Notification(title, { body, tag: key });
      notification.onclick = () => {
        window.focus();
        openSession(sessionId);
        notification.close();
      };
    } catch {
    }
  }, [openSession]);
  (0, import_react12.useEffect)(() => {
    const current = sessionFacts.current;
    for (const [sessionId, interaction] of pending3) {
      const read = readPending(interaction);
      if (read === null) continue;
      const kind = read.kind === "approval" ? "approval" : read.kind === "question" || read.kind === "plan-review" ? "question" : null;
      if (kind === null) continue;
      const id = kind === "approval" ? officialEventIdOf({
        kind: "approval",
        key: read.key,
        callId: read.callId,
        toolName: read.toolName,
        reason: read.reason
      }) : officialEventIdOf({
        kind: "question",
        key: read.key,
        questions: read.questions
      });
      const tool = read.toolName ?? "tool";
      const reason = (read.reason ?? "").trim();
      const body = kind === "approval" ? reason === "" ? t("body.approval.noReason", { tool }) : t("body.approval", { tool, reason: compactLine(reason) }) : (() => {
        const first = read.questions?.find((question) => (question.question ?? "") !== "")?.question ?? "";
        return first === "" ? t("body.question.empty", { count: read.questions?.length ?? 0 }) : t("body.question", { first: compactLine(first) });
      })();
      maybeNotify(
        kind,
        sessionId,
        id === "" ? read.key : id,
        t(kind === "approval" ? "kind.approval.title" : "kind.question.title"),
        body,
        current
      );
    }
  }, [pending3, sessionFacts.current, t, maybeNotify]);
  (0, import_react12.useEffect)(() => {
    const current = sessionFacts.current;
    for (const [sessionId, jobs2] of Object.entries(sessionFacts.jobs)) {
      for (const notice of advanceJobMemory(jobMemory.current, sessionId, jobs2)) {
        maybeNotify(
          "job",
          notice.sessionId,
          notice.jobId,
          t(notice.status === "completed" ? "kind.job.completed.title" : "kind.job.failed.title"),
          t("body.job", { label: compactLine(notice.label), kind: notice.kind }),
          current
        );
      }
    }
  }, [sessionFacts.jobs, sessionFacts.current, t, maybeNotify]);
  return null;
}

// src/client/notify/locales.ts
var zh7 = {
  "kind.approval.title": "\u9700\u8981\u5BA1\u6279",
  "kind.question.title": "\u52A9\u624B\u5728\u8BE2\u95EE",
  "kind.job.completed.title": "\u540E\u53F0\u5DE5\u4F5C\u5B8C\u6210",
  "kind.job.failed.title": "\u540E\u53F0\u5DE5\u4F5C\u5931\u8D25",
  // Body fragment for a pending approval: tool · reason/说明（可能为空）。
  "body.approval": "{tool} \xB7 {reason}",
  "body.approval.noReason": "{tool}\uFF08\u65E0\u8BF4\u660E\uFF09",
  // Body fragment for a pending question: 首问文本（可能为空时退化为计数）。
  "body.question": "{first}",
  "body.question.empty": "\uFF08\u5171 {count} \u4E2A\u95EE\u9898\uFF09",
  // Body fragment for a job transition: label · kind。
  "body.job": "{label} \xB7 {kind}"
};
var en7 = {
  "kind.approval.title": "Approval needed",
  "kind.question.title": "Assistant is asking",
  "kind.job.completed.title": "Background job finished",
  "kind.job.failed.title": "Background job failed",
  "body.approval": "{tool} \xB7 {reason}",
  "body.approval.noReason": "{tool} (no reason given)",
  "body.question": "{first}",
  "body.question.empty": "({count} questions)",
  "body.job": "{label} \xB7 {kind}"
};
var NS_NOTIFY = "dsh.qol.notify";

// src/client/notify/register.tsx
function applyNotify(ctx) {
  ctx.effect(() => ctx.locale.register(NS_NOTIFY, { zh: zh7, en: en7 }), "dsh-qol: notify dictionaries");
  ctx.inject(["jobs", "slots", "uiWorkspace"], (scoped) => {
    const jobs = scoped.get("jobs").state;
    scoped.slots.inject("sidebar.footer.action", () => scoped.slots.register({
      name: "sidebar.footer.action",
      id: "dsh-qol-notify",
      order: 20,
      locale: NS_NOTIFY,
      inject: () => ({ jobs, openSession: (sessionId) => {
        scoped.uiWorkspace.openSession(sessionId);
      } })
    }, NotificationWatcher));
  });
}

// src/client/skills/SkillsSection.tsx
var import_react13 = require("react");

// src/client/skills/model.ts
function draftsFrom(preview) {
  return preview.candidates.map((candidate) => ({
    key: candidate.key,
    selected: candidate.installable,
    name: candidate.name ?? candidate.proposed.name ?? "",
    description: candidate.description ?? candidate.proposed.description ?? ""
  }));
}
function draftReady(candidate, draft) {
  const blocked = candidate.issues.some((issue) => issue.fixable !== true);
  return draft.selected && !blocked && draft.name.trim() !== "" && draft.description.trim() !== "";
}
function selectionsFrom(preview, drafts) {
  const selections = [];
  for (const candidate of preview.candidates) {
    const draft = drafts.find((item) => item.key === candidate.key);
    if (draft === void 0 || !draftReady(candidate, draft)) continue;
    const name = draft.name.trim();
    const description = draft.description.trim();
    selections.push({
      key: candidate.key,
      ...name === candidate.name ? {} : { name },
      ...description === candidate.description ? {} : { description },
      replaces: candidate.replaces === null ? null : candidate.replaces.installId
    });
  }
  return selections;
}
function issueKey(code) {
  return `issue.${code}`;
}
function issueText(issue, t) {
  const label = t(issueKey(issue.code));
  return issue.path === void 0 ? label : `${label} \u2014 ${issue.path}`;
}
function formatBytes(bytes) {
  if (bytes < 1024) return `${String(bytes)} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function formatTime(iso) {
  const ms = Date.parse(iso);
  if (Number.isNaN(ms)) return iso;
  return new Date(ms).toLocaleString(void 0, { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
}

// src/client/skills/SkillsSection.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var page = { display: "flex", flexDirection: "column", gap: 12, fontSize: 14, lineHeight: "22px", color: "var(--dsw-alias-label-primary)" };
var intro2 = { fontSize: 13, lineHeight: "20px", color: "var(--dsw-alias-label-secondary)", margin: 0 };
var caption3 = { fontSize: 12, lineHeight: "18px", color: "var(--dsw-alias-label-caption)" };
var mono3 = { fontFamily: "var(--ds-font-family-code)", overflowWrap: "anywhere" };
var heading2 = { fontSize: 15, lineHeight: "22px", fontWeight: 600, margin: "6px 0 0" };
var BUTTON_CLASS2 = "dsg-btn";
var button2 = {
  font: "inherit",
  fontSize: 12,
  lineHeight: "18px",
  padding: "3px 10px",
  cursor: "pointer",
  color: "var(--dsw-alias-label-secondary)",
  background: "var(--dsg-btn-bg, transparent)",
  border: "1px solid var(--dsg-btn-border, var(--dsw-alias-border-l3))",
  borderRadius: 8,
  transition: "background-color 150ms ease, border-color 150ms ease"
};
var dangerButton2 = { ...button2, color: "var(--dsw-alias-state-error-primary)", border: "1px solid var(--dsw-alias-state-error-secondary, var(--dsw-alias-state-error-primary))" };
var primaryButton2 = { ...button2, color: "var(--dsw-alias-label-primary)", border: "1px solid var(--dsw-alias-brand-primary)" };
var input2 = {
  font: "inherit",
  fontSize: 13,
  lineHeight: "20px",
  padding: "3px 8px",
  boxSizing: "border-box",
  width: "100%",
  color: "var(--dsw-alias-label-primary)",
  background: "var(--dsw-alias-bg-layer-2)",
  border: "1px solid var(--dsw-alias-border-l2)",
  borderRadius: 8
};
var card2 = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid var(--dsw-alias-border-l1)",
  background: "var(--dsw-alias-bg-layer-2)",
  display: "flex",
  flexDirection: "column",
  gap: 4
};
var row2 = { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" };
var badge2 = { ...caption3, padding: "0 6px", borderRadius: 4, border: "1px solid var(--dsw-alias-border-l1)" };
var errorText2 = { color: "var(--dsw-alias-state-error-primary)" };
function unwrap2(result) {
  if (result.ok) return result.value;
  throw result.error;
}
function errorMessage2(error) {
  return error instanceof Error ? error.message : String(error);
}
function IssueList({ issues, t }) {
  if (issues.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { style: { margin: 0, paddingLeft: 18 }, children: issues.map((issue, index) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { style: issue.fixable === true ? caption3 : { ...caption3, ...errorText2 }, title: issue.message, children: issueText(issue, t) }, `${issue.code}-${String(index)}`)) });
}
function InstalledRow({ item, t, onUninstall, busy, references }) {
  const [confirming, setConfirming] = (0, import_react13.useState)(false);
  const [affected, setAffected] = (0, import_react13.useState)();
  const alive = (0, import_react13.useRef)(true);
  (0, import_react13.useEffect)(() => () => {
    alive.current = false;
  }, []);
  const open = async () => {
    setConfirming(true);
    setAffected("loading");
    try {
      const projects = await references(item.installId);
      if (alive.current) setAffected(projects);
    } catch {
      if (alive.current) setAffected([]);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: card2, "data-deepseekgui": "skill-installed", "data-install-id": item.installId, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: row2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { fontWeight: 600 }, children: item.name }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: badge2, children: t(`kind.${item.origin.kind}`) }),
      item.status === "invalid" && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { ...badge2, ...errorText2 }, title: item.issue?.message, children: t("installed.invalid", { message: item.issue === void 0 ? "" : issueText(item.issue, t) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { flex: 1 } }),
      confirming ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: dangerButton2, disabled: busy, onClick: () => {
          onUninstall(item.installId);
          setConfirming(false);
        }, children: t("installed.uninstallConfirm", { name: item.name }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: button2, onClick: () => {
          setConfirming(false);
        }, children: t("installed.uninstallCancel") })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: button2, disabled: busy, onClick: () => {
        void open();
      }, children: t("installed.uninstall") })
    ] }),
    confirming && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, "data-deepseekgui": "skill-uninstall-references", children: affected === "loading" ? t("installed.referencesLoading") : affected === void 0 || affected.length === 0 ? t("installed.noReferences") : t("installed.references", { paths: affected.map((project) => project.path).join("; ") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: item.description }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("installed.origin", { kind: t(`kind.${item.origin.kind}`), path: item.origin.path }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { ...caption3, ...mono3 }, children: t("installed.location", { location: item.location }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("installed.updated", { time: formatTime(item.updatedAt) }) })
  ] });
}
function ReadOnlyRow({ item, t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: card2, "data-deepseekgui": "skill-readonly", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: row2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { fontWeight: 600 }, children: item.name }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: badge2, children: t(`readOnly.source.${item.source}`) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: item.description }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { ...caption3, ...mono3 }, children: item.location })
  ] });
}
function CandidateCard({ preview, draft, t, onChange }) {
  const candidate = preview.candidates.find((item) => item.key === draft.key);
  if (candidate === void 0) return null;
  const blocked = candidate.issues.some((issue) => issue.fixable !== true);
  const nameProposed = candidate.name === null;
  const descriptionProposed = candidate.description === null;
  const replaced = candidate.replaces;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: card2, "data-deepseekgui": "skill-candidate", "data-candidate-key": candidate.key, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { style: row2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "input",
        {
          type: "checkbox",
          checked: draft.selected && !blocked,
          disabled: blocked,
          onChange: (event) => {
            onChange({ ...draft, selected: event.target.checked });
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { fontWeight: 600 }, children: draft.name === "" ? candidate.entry : draft.name }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: badge2, children: t(`kind.${candidate.kind === "markdown" ? "markdown" : "directory"}`) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: caption3, children: t("review.files", { files: candidate.files, size: formatBytes(candidate.bytes) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { ...caption3, ...mono3 }, children: t("review.entry", { entry: candidate.entry }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { style: caption3, children: [
      t("review.name"),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "input",
        {
          style: input2,
          value: draft.name,
          readOnly: !nameProposed && candidate.issues.every((issue) => issue.code !== "invalid-name"),
          onChange: (event) => {
            onChange({ ...draft, name: event.target.value });
          }
        }
      )
    ] }),
    nameProposed && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("review.proposed") }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { style: caption3, children: [
      t("review.description"),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "textarea",
        {
          style: { ...input2, minHeight: 44, resize: "vertical" },
          value: draft.description,
          onChange: (event) => {
            onChange({ ...draft, description: event.target.value });
          }
        }
      )
    ] }),
    descriptionProposed && !nameProposed && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("review.proposed") }),
    candidate.issues.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("review.issues") }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(IssueList, { issues: candidate.issues, t }),
    replaced !== null && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, "data-deepseekgui": "skill-replaces", children: t("review.replaces", { installId: replaced.installId, path: replaced.origin.path }) }),
    blocked && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { ...caption3, ...errorText2 }, children: t("review.blocked") })
  ] });
}
function SkillsSection({ t, skills, picker, onChange }) {
  const [inventory, setInventory] = (0, import_react13.useState)();
  const [loadError, setLoadError] = (0, import_react13.useState)();
  const [loading, setLoading] = (0, import_react13.useState)(true);
  const [path, setPath] = (0, import_react13.useState)("");
  const [reviewing, setReviewing] = (0, import_react13.useState)(false);
  const [preview, setPreview] = (0, import_react13.useState)();
  const [drafts, setDrafts] = (0, import_react13.useState)([]);
  const [applying, setApplying] = (0, import_react13.useState)(false);
  const [outcome, setOutcome] = (0, import_react13.useState)();
  const [actionError, setActionError] = (0, import_react13.useState)();
  const [uninstalling, setUninstalling] = (0, import_react13.useState)();
  const [affected, setAffected] = (0, import_react13.useState)([]);
  const alive = (0, import_react13.useRef)(true);
  (0, import_react13.useEffect)(() => () => {
    alive.current = false;
  }, []);
  const reload = (0, import_react13.useCallback)(async () => {
    setLoading(true);
    setLoadError(void 0);
    try {
      const value = unwrap2(await skills.inventory());
      if (!alive.current) return;
      setInventory(value);
    } catch (error) {
      if (!alive.current) return;
      setLoadError(errorMessage2(error));
    } finally {
      if (alive.current) setLoading(false);
    }
  }, [skills]);
  (0, import_react13.useEffect)(() => {
    void reload();
  }, [reload]);
  (0, import_react13.useEffect)(() => onChange?.(() => {
    void reload();
  }), [onChange, reload]);
  const references = (0, import_react13.useCallback)(async (installId) => {
    return unwrap2(await skills.installReferences(installId)).projects;
  }, [skills]);
  const review = (0, import_react13.useCallback)(async (source) => {
    const trimmed = source.trim();
    if (trimmed === "") return;
    setReviewing(true);
    setActionError(void 0);
    setOutcome(void 0);
    try {
      const value = unwrap2(await skills.previewImport(trimmed));
      if (!alive.current) return;
      setPreview(value);
      setDrafts(draftsFrom(value));
    } catch (error) {
      if (!alive.current) return;
      setActionError(errorMessage2(error));
    } finally {
      if (alive.current) setReviewing(false);
    }
  }, [skills]);
  const pick = async (kind) => {
    if (picker === null) return;
    setActionError(void 0);
    try {
      const chosen = await picker.pick(kind);
      if (!alive.current || chosen === null) return;
      setPath(chosen);
      await review(chosen);
    } catch (error) {
      if (alive.current) setActionError(errorMessage2(error));
    }
  };
  const apply2 = async () => {
    if (preview === void 0) return;
    const selections = selectionsFrom(preview, drafts);
    if (selections.length === 0) return;
    setApplying(true);
    setActionError(void 0);
    try {
      const value = unwrap2(await skills.applyImport({ path: preview.source.path, selections }));
      if (!alive.current) return;
      setOutcome(value);
      setPreview(void 0);
      setDrafts([]);
      await reload();
    } catch (error) {
      if (alive.current) setActionError(errorMessage2(error));
    } finally {
      if (alive.current) setApplying(false);
    }
  };
  const uninstall = async (installId) => {
    setUninstalling(installId);
    setActionError(void 0);
    setAffected([]);
    try {
      const value = unwrap2(await skills.uninstall(installId));
      if (!alive.current) return;
      if (!value.removed) {
        setActionError(t("installed.uninstallFailed", { message: value.issue === void 0 ? "" : issueText(value.issue, t) }));
      } else {
        setAffected(value.affected);
      }
      await reload();
    } catch (error) {
      if (alive.current) setActionError(t("installed.uninstallFailed", { message: errorMessage2(error) }));
    } finally {
      if (alive.current) setUninstalling(void 0);
    }
  };
  const readyCount = preview === void 0 ? 0 : preview.candidates.filter((candidate) => {
    const draft = drafts.find((item) => item.key === candidate.key);
    return draft !== void 0 && draftReady(candidate, draft);
  }).length;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { style: page, "aria-label": t("nav.skills"), "data-deepseekgui": "skills-section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { style: intro2, children: t("page.intro") }),
    inventory !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { ...caption3, ...mono3 }, children: t("page.library", { dir: inventory.libraryDir }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: row2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: button2, disabled: picker === null || reviewing, onClick: () => {
        void pick("directory");
      }, "data-deepseekgui": "skill-import-directory", children: t("import.directory") }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: button2, disabled: picker === null || reviewing, onClick: () => {
        void pick("file");
      }, "data-deepseekgui": "skill-import-file", children: t("import.file") }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { flex: 1 } }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: button2, disabled: loading, onClick: () => {
        void reload();
      }, children: t("page.refresh") })
    ] }),
    picker === null && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("import.noDesktop") }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { style: { ...row2, ...caption3 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: t("import.pathLabel") }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "input",
        {
          style: { ...input2, flex: 1, width: "auto" },
          value: path,
          placeholder: t("import.pathPlaceholder"),
          onChange: (event) => {
            setPath(event.target.value);
          },
          onKeyDown: (event) => {
            if (event.key === "Enter") void review(path);
          },
          "data-deepseekgui": "skill-import-path"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: button2, disabled: reviewing || path.trim() === "", onClick: () => {
        void review(path);
      }, "data-deepseekgui": "skill-import-review", children: reviewing ? t("import.reviewing") : t("import.review") })
    ] }),
    actionError !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { role: "alert", style: errorText2, children: actionError }),
    preview !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { ...card2, gap: 8 }, "data-deepseekgui": "skill-review", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: row2, children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { fontWeight: 600 }, children: t("review.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { ...caption3, ...mono3 }, children: t("review.source", { kind: t(`kind.${preview.source.kind}`), path: preview.source.path }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { style: { flex: 1 } }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: button2, disabled: applying, onClick: () => {
          setPreview(void 0);
          setDrafts([]);
        }, children: t("review.close") })
      ] }),
      preview.problems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("review.problems") }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(IssueList, { issues: preview.problems, t })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: preview.candidates.length === 0 ? t("review.none") : t("review.candidates", { count: preview.candidates.length }) }),
      drafts.map((draft) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        CandidateCard,
        {
          preview,
          draft,
          t,
          onChange: (next) => {
            setDrafts((current) => current.map((item) => item.key === next.key ? next : item));
          }
        },
        draft.key
      )),
      preview.candidates.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: row2, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: BUTTON_CLASS2, style: primaryButton2, disabled: applying || readyCount === 0, onClick: () => {
        void apply2();
      }, "data-deepseekgui": "skill-import-apply", children: applying ? t("review.applying") : t("review.apply", { count: readyCount }) }) })
    ] }),
    outcome !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: card2, role: "status", "data-deepseekgui": "skill-outcome", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: t("outcome.installed", { count: outcome.installed.length }) }),
      outcome.installed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { ...caption3, ...mono3 }, children: t("outcome.item.installed", { name: item.name, installId: item.installId }) }, item.installId)),
      outcome.failures.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: errorText2, children: t("outcome.failed", { count: outcome.failures.length }) }),
      outcome.failures.map((failure) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { ...caption3, ...errorText2 }, title: failure.issue.message, children: t("outcome.item.failed", { key: failure.key, message: issueText(failure.issue, t) }) }, failure.key))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { style: heading2, children: t("installed.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("installed.hint") }),
    loading && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { role: "status", style: caption3, children: t("page.loading") }),
    loadError !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { role: "alert", style: errorText2, children: t("page.failed", { message: loadError }) }),
    inventory !== void 0 && inventory.installed.length === 0 && !loading && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("installed.empty") }),
    affected.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { role: "status", style: { ...card2, ...caption3 }, "data-deepseekgui": "skill-uninstall-affected", children: t("outcome.affected", { count: affected.length, paths: affected.map((project) => project.path).join("; ") }) }),
    inventory?.installed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      InstalledRow,
      {
        item,
        t,
        busy: uninstalling !== void 0,
        onUninstall: (installId) => {
          void uninstall(installId);
        },
        references
      },
      item.installId
    )),
    inventory !== void 0 && inventory.orphans.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("orphans.title", { count: inventory.orphans.length, names: inventory.orphans.join(", ") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { style: heading2, children: t("readOnly.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("readOnly.intro") }),
    inventory !== void 0 && inventory.readOnly.length === 0 && !loading && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: caption3, children: t("readOnly.empty") }),
    inventory?.readOnly.map((item) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ReadOnlyRow, { item, t }, item.location))
  ] });
}

// src/client/skills/ProjectView.tsx
var import_react14 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var view2 = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  padding: "12px 0",
  boxSizing: "border-box",
  // 和 Workbench 的几个视图同一条：内容滚到底会跑到 composer 卡片后面，从
  // 半透明的卡片里透出来。留白的高度由皮肤层按 composer 的实测高度给
  // （--deepseekgui-view-bottom-inset，见 workbench-plugin 的 skin.ts）。
  paddingBottom: "var(--deepseekgui-view-bottom-inset, 12px)",
  width: "100%",
  maxWidth: "var(--dsh-chat-content-width, 920px)",
  margin: "0 auto",
  fontSize: 14,
  lineHeight: "22px",
  color: "var(--dsw-alias-label-primary)"
};
var intro3 = { fontSize: 13, lineHeight: "20px", color: "var(--dsw-alias-label-secondary)", margin: 0 };
var caption4 = { fontSize: 12, lineHeight: "18px", color: "var(--dsw-alias-label-caption)" };
var mono4 = { fontFamily: "var(--ds-font-family-code)", overflowWrap: "anywhere" };
var heading3 = { fontSize: 15, lineHeight: "22px", fontWeight: 600, margin: "6px 0 0" };
var BUTTON_CLASS3 = "dsg-btn";
var button3 = {
  font: "inherit",
  fontSize: 12,
  lineHeight: "18px",
  padding: "3px 10px",
  cursor: "pointer",
  color: "var(--dsw-alias-label-secondary)",
  background: "var(--dsg-btn-bg, transparent)",
  border: "1px solid var(--dsg-btn-border, var(--dsw-alias-border-l3))",
  borderRadius: 8,
  transition: "background-color 150ms ease, border-color 150ms ease"
};
var primaryButton3 = { ...button3, color: "var(--dsw-alias-label-primary)", border: "1px solid var(--dsw-alias-brand-primary)" };
var row3 = { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" };
var card3 = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid var(--dsw-alias-border-l1)",
  background: "var(--dsw-alias-bg-layer-2)",
  display: "flex",
  flexDirection: "column",
  gap: 4
};
var badge3 = { ...caption4, padding: "0 6px", borderRadius: 4, border: "1px solid var(--dsw-alias-border-l1)" };
var errorText3 = { color: "var(--dsw-alias-state-error-primary)" };
var warnText = { color: "var(--dsw-alias-state-warning-primary, var(--dsw-alias-label-secondary))" };
function unwrap3(result) {
  if (result.ok) return result.value;
  throw result.error;
}
function errorMessage3(error) {
  return error instanceof Error ? error.message : String(error);
}
function effectStyle(effect) {
  switch (effect) {
    case "active":
      return badge3;
    case "shadowed":
      return { ...badge3, ...warnText };
    case "invalid":
    case "missing":
      return { ...badge3, ...errorText3 };
    case "inactive":
      return badge3;
  }
}
function EntryRow({ entry, checked, onToggle, disabled, t }) {
  const gone = entry.effect === "missing";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("label", { style: { ...card3, cursor: disabled ? "default" : "pointer" }, "data-deepseekgui": "skill-project-entry", "data-install-id": entry.installId, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: row3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "input",
        {
          type: "checkbox",
          checked,
          disabled,
          onChange: (event) => {
            onToggle(entry.installId, event.target.checked);
          },
          "aria-label": entry.name
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: { fontWeight: 600 }, children: entry.name }),
      checked && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: effectStyle(entry.effect), title: entry.shadowedBy === void 0 ? void 0 : t("effect.shadowedBy", { source: entry.shadowedBy.source }), children: t(`effect.${entry.effect}`) }),
      !checked && entry.status === "invalid" && !gone && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: { ...badge3, ...errorText3 }, title: entry.issue?.message, children: t("effect.invalid") }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: { flex: 1 } }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: { ...caption4, ...mono4 }, children: entry.installId })
    ] }),
    entry.description !== "" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: entry.description }),
    gone && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: caption4, children: t("effect.missingHint") }),
    entry.status === "invalid" && !gone && entry.issue !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { ...caption4, ...errorText3 }, children: issueText(entry.issue, t) }),
    entry.effect === "shadowed" && entry.shadowedBy !== void 0 && checked && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: caption4, children: t("effect.shadowedBy", { source: entry.shadowedBy.source }) })
  ] });
}
function ProjectView({ sessionId, skills, onChange, t }) {
  const [state, setState] = (0, import_react14.useState)();
  const [loading, setLoading] = (0, import_react14.useState)(false);
  const [loadError, setLoadError] = (0, import_react14.useState)();
  const [saving, setSaving] = (0, import_react14.useState)(false);
  const [notice, setNotice] = (0, import_react14.useState)();
  const generation = (0, import_react14.useRef)(0);
  const savingFor = (0, import_react14.useRef)(void 0);
  const target = (0, import_react14.useRef)(sessionId);
  target.current = sessionId;
  const load = (0, import_react14.useCallback)(async () => {
    const forSession = sessionId;
    generation.current += 1;
    const mine = generation.current;
    if (forSession === void 0) {
      setState(void 0);
      setLoading(false);
      return;
    }
    setLoading(true);
    setLoadError(void 0);
    const controller = new AbortController();
    try {
      const page3 = unwrap3(await skills.projectView(forSession, controller.signal));
      if (mine !== generation.current || target.current !== forSession) return;
      setState({ sessionId: forSession, page: page3, ticks: new Set(page3.entries.filter((entry) => entry.enabled).map((entry) => entry.installId)) });
      setNotice(void 0);
    } catch (error) {
      if (mine !== generation.current || target.current !== forSession) return;
      setLoadError(errorMessage3(error));
    } finally {
      if (mine === generation.current && target.current === forSession) setLoading(false);
    }
  }, [sessionId, skills]);
  (0, import_react14.useEffect)(() => {
    void load();
  }, [load]);
  (0, import_react14.useEffect)(() => onChange(() => {
    if (savingFor.current !== sessionId) void load();
  }), [onChange, load, sessionId]);
  const current = state !== void 0 && state.sessionId === sessionId ? state : void 0;
  const dirty = current !== void 0 && (current.ticks.size !== current.page.entries.filter((entry) => entry.enabled).length || current.page.entries.some((entry) => entry.enabled !== current.ticks.has(entry.installId)));
  const toggle = (installId, next) => {
    setState((previous) => {
      if (previous === void 0) return previous;
      const ticks = new Set(previous.ticks);
      if (next) ticks.add(installId);
      else ticks.delete(installId);
      return { ...previous, ticks };
    });
  };
  const save = async () => {
    if (current === void 0) return;
    const forSession = current.sessionId;
    savingFor.current = forSession;
    generation.current += 1;
    const mine = generation.current;
    setSaving(true);
    setNotice(void 0);
    try {
      const outcome = unwrap3(await skills.setProjectSelection({
        sessionId: forSession,
        enabled: [...current.ticks],
        revision: current.page.revision
      }, new AbortController().signal));
      if (mine !== generation.current || target.current !== forSession) return;
      const page3 = outcome.view;
      setState({ sessionId: forSession, page: page3, ticks: new Set(page3.entries.filter((entry) => entry.enabled).map((entry) => entry.installId)) });
      if (outcome.saved) setNotice({ kind: "saved" });
      else if (outcome.issue?.code === "revision-conflict") setNotice({ kind: "conflict" });
      else setNotice({ kind: "failed", message: outcome.issue === void 0 ? "" : issueText(outcome.issue, t) });
    } catch (error) {
      if (mine !== generation.current || target.current !== forSession) return;
      setNotice({ kind: "failed", message: errorMessage3(error) });
    } finally {
      savingFor.current = void 0;
      setSaving(false);
    }
  };
  const page2 = current?.page;
  const problem = page2?.problem;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { style: view2, "aria-label": t("view.project"), "data-deepseekgui": "skill-project-view", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: row3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: heading3, children: t("project.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: { flex: 1 } }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: BUTTON_CLASS3, style: button3, disabled: loading || saving, onClick: () => {
        void load();
      }, children: t("project.refresh") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { style: intro3, children: t("project.intro") }),
    page2?.project !== null && page2?.project !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { ...caption4, ...mono4 }, "data-deepseekgui": "skill-project-folder", children: t("project.folder", { path: page2.project.path }) }),
    problem === "no-cwd" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { role: "note", style: caption4, children: t("project.noCwd") }),
    problem === "missing-folder" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { role: "alert", style: errorText3, children: t("project.missingFolder") }),
    loading && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { role: "status", style: caption4, children: t("project.loading") }),
    loadError !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { role: "alert", style: errorText3, children: t("project.failed", { message: loadError }) }),
    page2 !== void 0 && page2.project !== null && !page2.catalogComplete && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: caption4, children: t("project.catalogIncomplete") }),
    page2 !== void 0 && page2.entries.length === 0 && !loading && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: caption4, children: t("project.empty") }),
    current !== void 0 && page2 !== void 0 && page2.entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      EntryRow,
      {
        entry,
        checked: current.ticks.has(entry.installId),
        disabled: saving || page2.project === null,
        onToggle: toggle,
        t
      },
      entry.installId
    )),
    page2 !== void 0 && page2.project !== null && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: row3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { type: "button", className: BUTTON_CLASS3, style: primaryButton3, disabled: saving || !dirty, onClick: () => {
        void save();
      }, "data-deepseekgui": "skill-project-save", children: saving ? t("project.saving") : t("project.save") }),
      dirty && !saving && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { style: caption4, children: t("project.dirty") }),
      notice?.kind === "saved" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { role: "status", style: caption4, children: t("project.saved") }),
      notice?.kind === "conflict" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { role: "alert", style: warnText, children: t("project.conflict") }),
      notice?.kind === "failed" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { role: "alert", style: errorText3, children: t("project.saveFailed", { message: notice.message ?? "" }) })
    ] }),
    page2 !== void 0 && page2.project !== null && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { role: "note", style: intro3, children: t("project.effectNote") })
  ] });
}

// src/client/skills/source-picker.ts
function readSourcePicker() {
  const pickers = window;
  const directory = pickers.__DSH_DIRECTORY_PICKER__;
  const paths = pickers.__DSH_HOST_PATHS__;
  if (directory === void 0 && paths === void 0) return null;
  return {
    async pick(kind) {
      if (kind === "directory") return directory === void 0 ? null : await directory.pick();
      if (paths === void 0) return null;
      return await new Promise((resolve) => {
        const input3 = document.createElement("input");
        input3.type = "file";
        input3.accept = ".zip,.md,.markdown";
        input3.addEventListener("change", () => {
          const file = input3.files?.[0];
          const path = file === void 0 ? "" : paths.pathFor(file);
          resolve(path === "" ? null : path);
        });
        input3.addEventListener("cancel", () => {
          resolve(null);
        });
        input3.click();
      });
    }
  };
}

// src/client/skills/locales.ts
var zh8 = {
  "nav.skills": "Skill",
  "page.intro": "\u8FD9\u91CC\u7BA1\u7406\u5B89\u88C5\u5230\u672C\u673A\u6280\u80FD\u5E93\u7684\u6280\u80FD\u5305\uFF1A\u5BFC\u5165\u3001\u67E5\u770B\u3001\u5378\u8F7D\u3002\u88C5\u5230\u5E93\u91CC\u4E0D\u7B49\u4E8E\u4F1A\u8BDD\u80FD\u7528\u2014\u2014\u5728\u54EA\u4E9B\u9879\u76EE\u91CC\u53EF\u7528\uFF0C\u7531\u4F1A\u8BDD\u9876\u90E8\u7684\u300C\u9879\u76EE\u7BA1\u7406\u300D\u51B3\u5B9A\u3002",
  "page.library": "\u6280\u80FD\u5E93\u4F4D\u7F6E\uFF1A{dir}",
  "page.refresh": "\u5237\u65B0",
  "page.loading": "\u6B63\u5728\u8BFB\u53D6\u2026",
  "page.failed": "\u8BFB\u53D6\u5931\u8D25\uFF1A{message}",
  "import.directory": "\u5BFC\u5165\u6280\u80FD\u76EE\u5F55\u2026",
  "import.file": "\u5BFC\u5165 ZIP / Markdown\u2026",
  "import.pathLabel": "\u6765\u6E90\u8DEF\u5F84",
  "import.pathPlaceholder": "\u6280\u80FD\u76EE\u5F55\u3001.zip \u6216 .md \u7684\u5B8C\u6574\u8DEF\u5F84",
  "import.review": "\u5BA1\u9605",
  "import.reviewing": "\u6B63\u5728\u5BA1\u9605\u2026",
  "import.noDesktop": "\u8FD9\u91CC\u6253\u4E0D\u5F00\u7CFB\u7EDF\u9009\u62E9\u6846\uFF1B\u53EF\u4EE5\u76F4\u63A5\u8F93\u5165\u8DEF\u5F84\u3002",
  "kind.directory": "\u76EE\u5F55",
  "kind.zip": "ZIP",
  "kind.markdown": "Markdown",
  "review.title": "\u5BA1\u9605\u6765\u6E90",
  "review.source": "{kind} \xB7 {path}",
  "review.problems": "\u6765\u6E90\u95EE\u9898",
  "review.candidates": "\u627E\u5230 {count} \u4E2A\u5019\u9009",
  "review.none": "\u8FD9\u4E2A\u6765\u6E90\u91CC\u6CA1\u6709\u53EF\u5B89\u88C5\u7684\u6280\u80FD\u3002",
  "review.entry": "\u5165\u53E3\uFF1A{entry}",
  "review.files": "{files} \u4E2A\u6587\u4EF6 \xB7 {size}",
  "review.name": "\u540D\u79F0",
  "review.description": "\u8BF4\u660E",
  "review.proposed": "\u6765\u6E90\u7F3A\u5C11\u8FD9\u9879\uFF1B\u4EE5\u4E0B\u662F\u5BA1\u9605\u8865\u9F50\u7684\u5EFA\u8BAE\uFF0C\u5B89\u88C5\u65F6\u53EA\u5199\u5165\u5E93\u91CC\u7684\u526F\u672C\uFF0C\u539F\u6587\u4EF6\u4E0D\u6539\u3002",
  "review.issues": "\u95EE\u9898",
  "review.replaces": "\u540C\u540D\uFF1A\u5B89\u88C5\u5C06\u66FF\u6362\u5DF2\u5B89\u88C5\u7684 {installId}\uFF08\u6765\u6E90 {path}\uFF09\uFF0C\u4FDD\u7559\u5176\u5B89\u88C5\u6807\u8BC6\u3002",
  "review.blocked": "\u5B58\u5728\u65E0\u6CD5\u8865\u9F50\u7684\u95EE\u9898\uFF0C\u8FD9\u4E2A\u5019\u9009\u4E0D\u80FD\u5B89\u88C5\u3002",
  "review.select": "\u5B89\u88C5\u6B64\u9879",
  "review.apply": "\u5B89\u88C5\u6240\u9009\uFF08{count}\uFF09",
  "review.applying": "\u6B63\u5728\u5B89\u88C5\u2026",
  "review.close": "\u5173\u95ED\u5BA1\u9605",
  "outcome.installed": "\u5DF2\u5B89\u88C5 {count} \u4E2A",
  "outcome.failed": "{count} \u4E2A\u672A\u5B89\u88C5",
  "outcome.item.installed": "{name} \u2192 {installId}",
  "outcome.item.failed": "{key}\uFF1A{message}",
  "installed.title": "\u5DF2\u5B89\u88C5",
  "installed.empty": "\u6280\u80FD\u5E93\u8FD8\u662F\u7A7A\u7684\u3002\u5BFC\u5165\u4E00\u4E2A\u6280\u80FD\u76EE\u5F55\u3001ZIP \u6216 Markdown \u6587\u6863\u5F00\u59CB\u3002",
  "installed.hint": "\u88C5\u5230\u5E93\u91CC\u7684\u6280\u80FD\u9ED8\u8BA4\u4E0D\u5728\u4EFB\u4F55\u9879\u76EE\u542F\u7528\u3002",
  "installed.origin": "\u6765\u6E90\uFF1A{kind} \xB7 {path}",
  "installed.location": "\u4F4D\u7F6E\uFF1A{location}",
  "installed.updated": "\u66F4\u65B0\u4E8E {time}",
  "installed.invalid": "\u65E0\u6548\uFF1A{message}",
  "installed.uninstall": "\u5378\u8F7D",
  "installed.uninstallConfirm": "\u786E\u8BA4\u5378\u8F7D {name}",
  "installed.uninstallCancel": "\u53D6\u6D88",
  "installed.uninstalling": "\u6B63\u5728\u5378\u8F7D\u2026",
  "installed.uninstallFailed": "\u5378\u8F7D\u5931\u8D25\uFF1A{message}",
  "orphans.title": "\u5E93\u91CC\u6709 {count} \u4E2A\u4E0D\u662F\u672C\u7BA1\u7406\u5668\u5199\u5165\u7684\u76EE\u5F55\uFF0C\u5378\u8F7D\u4E0D\u4F1A\u78B0\u5B83\u4EEC\uFF1A{names}",
  "readOnly.title": "\u53EA\u8BFB\u6765\u6E90",
  "readOnly.intro": "\u8FD9\u4E9B\u6280\u80FD\u6765\u81EA\u5B98\u65B9\u7528\u6237\u76EE\u5F55\u6216\u968F\u5305\u76EE\u5F55\uFF0C\u8FD9\u91CC\u53EA\u5C55\u793A\uFF0C\u4E0D\u80FD\u5BFC\u5165\u6216\u5378\u8F7D\u3002",
  "readOnly.empty": "\u6CA1\u6709\u53EA\u8BFB\u6765\u6E90\u7684\u6280\u80FD\u3002",
  "readOnly.source.user-dsh": "\u7528\u6237\u76EE\u5F55 ~/.dsh/skills",
  "readOnly.source.user-agents": "\u7528\u6237\u76EE\u5F55 ~/.agents/skills",
  "readOnly.source.bundled": "\u968F\u5305",
  "issue.missing-frontmatter": "\u6587\u6863\u6CA1\u6709 YAML \u5143\u6570\u636E\u5934",
  "issue.invalid-frontmatter": "\u5143\u6570\u636E\u5934\u65E0\u6CD5\u89E3\u6790",
  "issue.missing-name": "\u7F3A\u5C11\u540D\u79F0",
  "issue.invalid-name": "\u540D\u79F0\u4E0D\u662F kebab-case\uFF08\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u4E0E\u8FDE\u5B57\u7B26\uFF09",
  "issue.missing-description": "\u7F3A\u5C11\u8BF4\u660E",
  "issue.legacy-key": "\u4F7F\u7528\u4E86\u5B98\u65B9\u5DF2\u5E9F\u5F03\u7684\u5B57\u6BB5",
  "issue.invalid-boolean": "\u5E03\u5C14\u5B57\u6BB5\u7684\u503C\u4E0D\u5408\u6CD5",
  "issue.symlink-skipped": "\u7B26\u53F7\u94FE\u63A5\u672A\u590D\u5236",
  "issue.unsafe-path": "\u8DEF\u5F84\u4E0D\u5B89\u5168\uFF0C\u5DF2\u62D2\u7EDD",
  "issue.too-many-files": "\u6587\u4EF6\u6570\u8D85\u8FC7\u4E0A\u9650",
  "issue.too-large": "\u4F53\u79EF\u8D85\u8FC7\u4E0A\u9650",
  "issue.zip-unreadable": "ZIP \u65E0\u6CD5\u8BFB\u53D6",
  "issue.zip-too-large": "ZIP \u8D85\u8FC7\u5927\u5C0F\u4E0A\u9650",
  "issue.source-missing": "\u6765\u6E90\u4E0D\u5B58\u5728\u6216\u65E0\u6CD5\u8BFB\u53D6",
  "issue.source-unsupported": "\u53EA\u652F\u6301\u6280\u80FD\u76EE\u5F55\u3001.zip \u6216 .md",
  "issue.no-skill-found": "\u6765\u6E90\u91CC\u6CA1\u6709 SKILL.md \u6216 Markdown \u6280\u80FD\u6587\u6863",
  "issue.candidate-missing": "\u5019\u9009\u5DF2\u4E0D\u5B58\u5728",
  "issue.name-conflict": "\u540C\u540D\u6280\u80FD\u5DF2\u5B89\u88C5\uFF0C\u9700\u9009\u62E9\u66FF\u6362\u6216\u6539\u540D",
  "issue.replace-target-missing": "\u8981\u66FF\u6362\u7684\u5B89\u88C5\u5DF2\u4E0D\u5B58\u5728",
  "issue.library-unwritable": "\u6280\u80FD\u5E93\u76EE\u5F55\u4E0D\u53EF\u5199",
  "issue.manifest-invalid": "\u5B89\u88C5\u6E05\u5355\u65E0\u6548",
  "issue.skill-invalid": "\u6280\u80FD\u6587\u4EF6\u65E0\u6548",
  "issue.not-managed": "\u4E0D\u662F\u672C\u7BA1\u7406\u5668\u5B89\u88C5\u7684\u76EE\u5F55",
  "issue.io-error": "\u8BFB\u5199\u5931\u8D25",
  "issue.no-project": "\u8FD9\u4E2A\u4F1A\u8BDD\u6CA1\u6709\u53EF\u7528\u7684\u9879\u76EE\u6587\u4EF6\u5939",
  "issue.unknown-install": "\u6280\u80FD\u5E93\u91CC\u6CA1\u6709\u8FD9\u4E2A\u5B89\u88C5",
  "issue.revision-conflict": "\u9009\u62E9\u5DF2\u5728\u522B\u5904\u66F4\u65B0",
  // Uninstall: affected projects (B7-P5).
  "installed.references": "\u53D7\u5F71\u54CD\u7684\u9879\u76EE\uFF1A{paths}",
  "installed.noReferences": "\u6CA1\u6709\u9879\u76EE\u9009\u7528\u8FD9\u4E2A\u6280\u80FD\u3002",
  "installed.referencesLoading": "\u6B63\u5728\u67E5\u8BE2\u53D7\u5F71\u54CD\u7684\u9879\u76EE\u2026",
  "outcome.affected": "{count} \u4E2A\u9879\u76EE\u4ECD\u5F15\u7528\u8FD9\u4E2A\u6280\u80FD\uFF0C\u4F1A\u663E\u793A\u4E3A\u300C\u5DF2\u5378\u8F7D\u300D\uFF0C\u5728\u5404\u9879\u76EE\u7684\u9879\u76EE\u7BA1\u7406\u91CC\u53D6\u6D88\u52FE\u9009\u5373\u53EF\u6E05\u9664\uFF1A{paths}",
  // Session-top project page (B7-P5).
  "view.project": "\u9879\u76EE\u7BA1\u7406",
  "project.title": "\u672C\u9879\u76EE\u53EF\u7528\u7684\u6280\u80FD",
  "project.intro": "\u52FE\u9009\u672C\u9879\u76EE\u6587\u4EF6\u5939\u53EF\u4EE5\u4F7F\u7528\u7684\u6280\u80FD\u5E93\u6280\u80FD\u3002\u9009\u62E9\u6309\u6587\u4EF6\u5939\u4FDD\u5B58\uFF1A\u540C\u4E00\u6587\u4EF6\u5939\u7684\u6240\u6709\u4F1A\u8BDD\u5171\u7528\uFF0C\u5176\u4ED6\u6587\u4EF6\u5939\u5404\u81EA\u72EC\u7ACB\u3002\u5B89\u88C5\u4E0E\u5378\u8F7D\u5728\u8BBE\u7F6E \u2192 Skill\u3002",
  "project.folder": "\u9879\u76EE\u6587\u4EF6\u5939\uFF1A{path}",
  "project.noCwd": "\u8FD9\u4E2A\u4F1A\u8BDD\u6CA1\u6709\u9879\u76EE\u6587\u4EF6\u5939\uFF0C\u65E0\u6CD5\u4FDD\u5B58\u6280\u80FD\u9009\u62E9\u3002",
  "project.missingFolder": "\u9879\u76EE\u6587\u4EF6\u5939\u4E0D\u5B58\u5728\u4E86\uFF1B\u6062\u590D\u540E\u5237\u65B0\uFF0C\u6216\u6362\u5230\u522B\u7684\u5DE5\u4F5C\u533A\u3002",
  "project.loading": "\u6B63\u5728\u8BFB\u53D6\u2026",
  "project.failed": "\u8BFB\u53D6\u5931\u8D25\uFF1A{message}",
  "project.refresh": "\u5237\u65B0",
  "project.save": "\u4FDD\u5B58\u9009\u62E9",
  "project.saving": "\u6B63\u5728\u4FDD\u5B58\u2026",
  "project.saved": "\u5DF2\u4FDD\u5B58\u3002",
  "project.dirty": "\u6709\u672A\u4FDD\u5B58\u7684\u6539\u52A8\u3002",
  "project.conflict": "\u8FD9\u4EFD\u9009\u62E9\u521A\u5728\u522B\u5904\u66F4\u65B0\u8FC7\uFF0C\u5DF2\u6362\u6210\u6700\u65B0\u5185\u5BB9\uFF1B\u8BF7\u91CD\u65B0\u52FE\u9009\u540E\u518D\u4FDD\u5B58\u3002",
  "project.saveFailed": "\u4FDD\u5B58\u5931\u8D25\uFF1A{message}",
  "project.empty": "\u6280\u80FD\u5E93\u8FD8\u662F\u7A7A\u7684\u3002\u5148\u5728\u8BBE\u7F6E \u2192 Skill\u91CC\u5BFC\u5165\u6280\u80FD\u3002",
  "project.catalogIncomplete": "\u672C\u4F1A\u8BDD\u7684\u6280\u80FD\u76EE\u5F55\u6682\u65F6\u8BFB\u4E0D\u5230\uFF0C\u4E0B\u9762\u7684\u751F\u6548\u72B6\u6001\u6309\u9009\u62E9\u63A8\u7B97\u3002",
  "project.effectNote": "\u4FDD\u5B58\u540E\uFF0C\u672C\u6587\u4EF6\u5939\u5DF2\u6253\u5F00\u7684\u4F1A\u8BDD\u4ECE\u4E0B\u4E00\u6B21\u53D1\u9001\u8D77\u4F7F\u7528\u65B0\u76EE\u5F55\uFF1B\u5DF2\u7ECF\u9001\u8FDB\u4F1A\u8BDD\u7684\u6280\u80FD\u5185\u5BB9\u4E0D\u4F1A\u4ECE\u5386\u53F2\u91CC\u6D88\u5931\uFF0C\u8981\u5B8C\u5168\u6392\u9664\u65E7\u6307\u4EE4\u8BF7\u65B0\u5EFA\u4F1A\u8BDD\u3002",
  "project.reload": "\u91CD\u65B0\u8BFB\u53D6",
  "effect.active": "\u751F\u6548",
  "effect.shadowed": "\u88AB\u5B98\u65B9\u540C\u540D\u6280\u80FD\u906E\u853D",
  "effect.shadowedBy": "\u672C\u4F1A\u8BDD\u91CC\u540C\u540D\u7684\u300C{source}\u300D\u6280\u80FD\u4F18\u5148\uFF1B\u8FD9\u4E00\u9879\u4E0D\u4F1A\u88AB\u8C03\u7528\u3002",
  "effect.inactive": "\u672A\u9009",
  "effect.invalid": "\u65E0\u6548\uFF0C\u65E0\u6CD5\u52A0\u8F7D",
  "effect.missing": "\u5DF2\u5378\u8F7D",
  "effect.missingHint": "\u8FD9\u4E2A\u6280\u80FD\u5DF2\u4ECE\u6280\u80FD\u5E93\u5378\u8F7D\uFF1B\u53D6\u6D88\u52FE\u9009\u5E76\u4FDD\u5B58\u5373\u53EF\u6E05\u9664\u5F15\u7528\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u6362\u6210\u5176\u4ED6\u540C\u540D\u6280\u80FD\u3002"
};
var en8 = {
  "nav.skills": "Skills",
  "page.intro": "Manage the skill packages installed in the local skill library: import, inspect, uninstall. Installing does not make a skill available to sessions \u2014 which projects can use it is decided under Project management at the top of a session.",
  "page.library": "Library: {dir}",
  "page.refresh": "Refresh",
  "page.loading": "Loading\u2026",
  "page.failed": "Failed to read: {message}",
  "import.directory": "Import skill directory\u2026",
  "import.file": "Import ZIP / Markdown\u2026",
  "import.pathLabel": "Source path",
  "import.pathPlaceholder": "Full path of a skill directory, .zip or .md",
  "import.review": "Review",
  "import.reviewing": "Reviewing\u2026",
  "import.noDesktop": "No system dialog is available here; type the path instead.",
  "kind.directory": "Directory",
  "kind.zip": "ZIP",
  "kind.markdown": "Markdown",
  "review.title": "Review source",
  "review.source": "{kind} \xB7 {path}",
  "review.problems": "Source problems",
  "review.candidates": "{count} candidate(s) found",
  "review.none": "No installable skill in this source.",
  "review.entry": "Entry: {entry}",
  "review.files": "{files} file(s) \xB7 {size}",
  "review.name": "Name",
  "review.description": "Description",
  "review.proposed": "The source lacks this field; the value below is the review's proposal, written only into the library copy \u2014 the original file is untouched.",
  "review.issues": "Issues",
  "review.replaces": "Same name: installing replaces the installed {installId} (from {path}) and keeps its install id.",
  "review.blocked": "An issue that cannot be repaired blocks this candidate.",
  "review.select": "Install this",
  "review.apply": "Install selected ({count})",
  "review.applying": "Installing\u2026",
  "review.close": "Close review",
  "outcome.installed": "{count} installed",
  "outcome.failed": "{count} not installed",
  "outcome.item.installed": "{name} \u2192 {installId}",
  "outcome.item.failed": "{key}: {message}",
  "installed.title": "Installed",
  "installed.empty": "The library is empty. Import a skill directory, a ZIP, or a Markdown document to begin.",
  "installed.hint": "Installed skills are enabled in no project by default.",
  "installed.origin": "Source: {kind} \xB7 {path}",
  "installed.location": "Location: {location}",
  "installed.updated": "Updated {time}",
  "installed.invalid": "Invalid: {message}",
  "installed.uninstall": "Uninstall",
  "installed.uninstallConfirm": "Confirm uninstall of {name}",
  "installed.uninstallCancel": "Cancel",
  "installed.uninstalling": "Uninstalling\u2026",
  "installed.uninstallFailed": "Uninstall failed: {message}",
  "orphans.title": "{count} director(ies) in the library were not written by this manager and are never removed by it: {names}",
  "readOnly.title": "Read-only sources",
  "readOnly.intro": "These skills come from the official user roots or the bundled root; they are listed only and cannot be imported or uninstalled here.",
  "readOnly.empty": "No read-only skills.",
  "readOnly.source.user-dsh": "User root ~/.dsh/skills",
  "readOnly.source.user-agents": "User root ~/.agents/skills",
  "readOnly.source.bundled": "Bundled",
  "issue.missing-frontmatter": "The document has no YAML frontmatter",
  "issue.invalid-frontmatter": "The frontmatter does not parse",
  "issue.missing-name": "Missing name",
  "issue.invalid-name": "The name is not kebab-case (lowercase letters, digits and hyphens)",
  "issue.missing-description": "Missing description",
  "issue.legacy-key": "Uses a field the official provider retired",
  "issue.invalid-boolean": "A boolean field has an invalid value",
  "issue.symlink-skipped": "Symbolic link not copied",
  "issue.unsafe-path": "Unsafe path refused",
  "issue.too-many-files": "Too many files",
  "issue.too-large": "Too large",
  "issue.zip-unreadable": "The ZIP cannot be read",
  "issue.zip-too-large": "The ZIP exceeds the size limit",
  "issue.source-missing": "The source does not exist or cannot be read",
  "issue.source-unsupported": "Only a skill directory, .zip or .md is supported",
  "issue.no-skill-found": "No SKILL.md or Markdown skill document in the source",
  "issue.candidate-missing": "The candidate no longer exists",
  "issue.name-conflict": "A skill with this name is installed; choose replacement or rename",
  "issue.replace-target-missing": "The install to replace no longer exists",
  "issue.library-unwritable": "The library directory is not writable",
  "issue.manifest-invalid": "The install manifest is invalid",
  "issue.skill-invalid": "The skill file is invalid",
  "issue.not-managed": "Not a directory installed by this manager",
  "issue.io-error": "Read or write failed",
  "issue.no-project": "This session has no usable project folder",
  "issue.unknown-install": "The library has no such install",
  "issue.revision-conflict": "The selection was updated elsewhere",
  // Uninstall: affected projects (B7-P5).
  "installed.references": "Affected projects: {paths}",
  "installed.noReferences": "No project selects this skill.",
  "installed.referencesLoading": "Looking up affected projects\u2026",
  "outcome.affected": '{count} project(s) still reference this skill; they show it as "uninstalled" until it is unticked under each project\u2019s Project management: {paths}',
  // Session-top project page (B7-P5).
  "view.project": "Project management",
  "project.title": "Skills available to this project",
  "project.intro": "Tick the library skills this project folder may use. The selection is saved per folder: every session of the same folder shares it, other folders are independent. Installing and uninstalling live under Settings \u2192 Skills.",
  "project.folder": "Project folder: {path}",
  "project.noCwd": "This session has no project folder, so no skill selection can be saved.",
  "project.missingFolder": "The project folder no longer exists; restore it and refresh, or switch workspace.",
  "project.loading": "Loading\u2026",
  "project.failed": "Failed to read: {message}",
  "project.refresh": "Refresh",
  "project.save": "Save selection",
  "project.saving": "Saving\u2026",
  "project.saved": "Saved.",
  "project.dirty": "Unsaved changes.",
  "project.conflict": "This selection was just updated elsewhere; the latest content is shown \u2014 tick again and save.",
  "project.saveFailed": "Save failed: {message}",
  "project.empty": "The library is empty. Import skills under Settings \u2192 Skills first.",
  "project.catalogIncomplete": "The session\u2019s skill catalog could not be read right now; the effect column is inferred from the selection.",
  "project.effectNote": "After saving, open sessions of this folder use the new catalog from their next message; skill content already sent into a session stays in its history \u2014 start a new session to fully exclude old instructions.",
  "project.reload": "Re-read",
  "effect.active": "Active",
  "effect.shadowed": "Shadowed by an official skill of the same name",
  "effect.shadowedBy": 'The same-name skill from "{source}" wins in this session; this one is not invoked.',
  "effect.inactive": "Not selected",
  "effect.invalid": "Invalid, cannot load",
  "effect.missing": "Uninstalled",
  "effect.missingHint": "This skill was uninstalled from the library; untick and save to clear the reference \u2014 nothing switches to another skill of the same name."
};
var NS_SKILLS = "dsh.qol.skills";

// src/client/skills/register.tsx
var SKILLS_SECTION_ORDER = 31;
var PROJECT_VIEW_ORDER = 22;
async function applySkills(ctx) {
  ctx.effect(() => ctx.locale.register(NS_SKILLS, { zh: zh8, en: en8 }), "dsh-qol: skills dictionaries");
  const t = ctx.locale.bind(NS_SKILLS);
  const picker = readSourcePicker();
  const listeners3 = /* @__PURE__ */ new Set();
  const onChange = (listener) => {
    listeners3.add(listener);
    return () => {
      listeners3.delete(listener);
    };
  };
  const notify = () => {
    for (const listener of [...listeners3]) listener();
  };
  await ctx.inject(["slots", "remote.skillManager"], (scoped) => {
    const remote = scoped.remote.skillManager;
    const MUTATING = /* @__PURE__ */ new Set(["applyImport", "uninstall", "setProjectSelection"]);
    const skills = new Proxy(remote, {
      get(target, key, receiver) {
        const value = Reflect.get(target, key, receiver);
        if (typeof key !== "string" || !MUTATING.has(key) || typeof value !== "function") return value;
        return async (...args) => {
          const result = await value.apply(target, args);
          if (result.ok) notify();
          return result;
        };
      }
    });
    scoped.slots.inject("settings.section", () => scoped.slots.register({
      name: "settings.section",
      id: "dsh-qol-skills",
      order: SKILLS_SECTION_ORDER,
      locale: NS_SKILLS,
      label: () => t("nav.skills"),
      inject: () => ({ skills, picker, onChange })
    }, SkillsSection));
    scoped.slots.inject("conversation.view", () => scoped.slots.register({
      name: "conversation.view",
      id: "dsh-qol-skills-project",
      order: PROJECT_VIEW_ORDER,
      locale: NS_SKILLS,
      label: () => t("view.project"),
      inject: (_sessionId) => ({ skills, onChange })
    }, ProjectView));
  });
}

// assets/skin/sea-dark.webp
var sea_dark_default = "data:image/webp;base64,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";

// assets/skin/sea-light.webp
var sea_light_default = "data:image/webp;base64,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";

// src/client/skin.ts
var OVERRIDE_SOURCE = "@see-sol-lab/dsh-qol/skin";
var STYLE_ID = "dsh-qol-skin";
var LAYER_ID = "dsh-qol-skin-sea";
var TOKENS = {
  // 页面底透明，底图才透得上来。整套的地基。
  "--dsw-alias-bg-base": { light: "transparent", dark: "transparent" },
  // 模块面板：浅底要更实，否则底图会把文字吃掉。
  "--dsw-alias-bg-module-platform": { light: "rgba(255, 255, 255, 0.42)", dark: "rgba(255, 255, 255, 0.10)" },
  "--dsw-alias-bg-multi-select": { light: "rgba(255, 255, 255, 0.55)", dark: "rgba(255, 255, 255, 0.13)" },
  // 浮层常叠在面板上，两层半透明会把下面的字透上来。
  "--dsw-alias-bg-overlay": { light: "rgba(255, 255, 255, 0.94)", dark: "rgba(28, 30, 34, 0.92)" },
  "--dsw-alias-bg-skeleton": { light: "rgba(0, 0, 0, 0.04)", dark: "rgba(255, 255, 255, 0.05)" },
  // 设置弹窗等二级表面：读字的面板要实。
  "--dsw-alias-bg-layer-2": { light: "rgba(252, 252, 252, 0.90)", dark: "rgba(24, 27, 33, 0.92)" },
  // 侧栏半透，玻璃感的正确开关（深 0.42 / 浅 0.38 实机定稿）。
  "--dsw-specific-sidebar-fill": { light: "rgba(249, 248, 248, 0.38)", dark: "rgba(16, 20, 26, 0.42)" },
  "--dsw-specific-bubble": { light: "rgba(255, 255, 255, 0.70)", dark: "rgba(44, 44, 46, 0.70)" },
  // 输入卡片：与设置弹窗同一档实度（「对话框不能这么透」）。
  "--dsw-specific-input-major": { light: "rgba(255, 255, 255, 0.86)", dark: "rgba(30, 34, 41, 0.84)" },
  "--dsw-alias-button-elevated-fill": { light: "rgba(255, 255, 255, 0.62)", dark: "rgba(255, 255, 255, 0.07)" },
  "--dsw-alias-bg-layer-1": { light: "rgba(255, 255, 255, 0.72)", dark: "rgba(255, 255, 255, 0.06)" },
  "--dsw-alias-scrollbar-bg-l1": { light: "rgba(38, 49, 72, 0.30)", dark: "rgba(255, 255, 255, 0.30)" },
  "--dsw-alias-scrollbar-bg-l2": { light: "rgba(38, 49, 72, 0.30)", dark: "rgba(255, 255, 255, 0.30)" },
  "--dsw-alias-scrollbar-hover-l1": { light: "rgba(38, 49, 72, 0.46)", dark: "rgba(255, 255, 255, 0.46)" },
  "--dsw-alias-scrollbar-hover-l2": { light: "rgba(38, 49, 72, 0.46)", dark: "rgba(255, 255, 255, 0.46)" },
  // 线条：冷灰蓝、各降一小档，退成「透出来的棱」。
  "--dsw-alias-border-l1": { light: "rgba(38, 49, 72, 0.05)", dark: "rgba(255, 255, 255, 0.05)" },
  "--dsw-alias-border-l2": { light: "rgba(38, 49, 72, 0.08)", dark: "rgba(255, 255, 255, 0.09)" },
  "--dsw-alias-border-l2-darkmode-thin": { light: "rgba(38, 49, 72, 0.08)", dark: "rgba(255, 255, 255, 0.05)" },
  "--dsw-alias-border-l3": { light: "rgba(38, 49, 72, 0.10)", dark: "rgba(255, 255, 255, 0.12)" },
  "--dsw-alias-border-l4": { light: "rgba(38, 49, 72, 0.14)", dark: "rgba(255, 255, 255, 0.16)" },
  "--dsw-alias-tooltip-bg": { light: "rgb(255, 255, 255)", dark: "rgb(40, 42, 48)" },
  "--dsw-specific-menu": { light: "rgba(255, 255, 255, 0.84)", dark: "rgba(46, 48, 52, 0.88)" }
};
var DARK = ":is(html, body)[data-ds-dark-theme]";
var SIDEBAR = '[data-slot="sidebar"]';
var COMPOSER_CARD = "[data-composer-card]";
var GLASS_BLUR = "blur(24px) saturate(140%)";
var FROST_FILTER_ID = "dsh-qol-frost-filter";
var GLASS_FROST = `url(#${FROST_FILTER_ID}-f)`;
var CSS = `
/* \u5E95\u56FE\u5C42\uFF1AGUI backdrop.html \u539F\u6837\u2014\u2014\u4E24\u5F20\u540C\u65F6\u6302\u3001\u53EA\u5207\u900F\u660E\u5EA6\uFF0C\u5207\u4E3B\u9898\u65F6\u4E0D\u7528\u73B0\u52A0\u8F7D\u3002
   \u906E\u7F69\u538B\u6697\u6DF1\u8272\uFF08\u957F\u5BF9\u8BDD\u8BFB\u4E45\u4E86\u7D2F\uFF09\uFF0C\u4E0A\u6D45\u4E0B\u6DF1\u3002 */
#${LAYER_ID}, #${LAYER_ID} > div {
  position: fixed;
  inset: 0;
  pointer-events: none;
}
#${LAYER_ID} { z-index: -1; background: #f9f8f8; }
${DARK} #${LAYER_ID} { background: #0a0a0a; }
#${LAYER_ID} > div {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 60ms linear;
}
#${LAYER_ID} > [data-sea="dark"] {
  opacity: 0;
  background-image: linear-gradient(rgba(10, 10, 10, 0.42), rgba(10, 10, 10, 0.68)), url("${sea_dark_default}");
}
#${LAYER_ID} > [data-sea="light"] {
  background-image: linear-gradient(rgba(249, 248, 248, 0.42), rgba(249, 248, 248, 0.58)), url("${sea_light_default}");
}
${DARK} #${LAYER_ID} > [data-sea="dark"] { opacity: 1; }
${DARK} #${LAYER_ID} > [data-sea="light"] { opacity: 0; }

/* Windows \u5B98\u65B9\u684C\u9762\u7AEF\u7ED9\u6700\u5916\u5C42\u6846\u548C\u6807\u9898\u680F\u62D6\u62FD\u6761\u5237\u4E86\u4E00\u5C42\u4FA7\u680F\u8272\uFF0C\u4F1A\u6574\u7247\u76D6\u4F4F\u5E95\u56FE
   \uFF08dsh-ui-appearance #31 \u540C\u6B3E\u5904\u7406\uFF09\u3002 */
[data-windows-titlebar] [class*="_frame"],
[data-windows-titlebar] [class*="_frame"]::before {
  background: transparent !important;
}

/* \u8F93\u5165\u6846\u4E0B\u9762\u7684\u7EDF\u8BA1\u884C\uFF08\u5B98\u65B9 [data-composer-dock]\uFF1A\u7EDF\u8BA1\u5C0F\u5757 + \u4E0A\u4E0B\u6587\u5706\u73AF\uFF09\u662F\u900F\u660E\u7684\uFF0C
   \u957F\u56DE\u590D\u6EDA\u5230\u5B83\u540E\u9762\u4F1A\u900F\u5B57\u3002GUI \u505A\u6CD5\uFF1A\u6574\u884C\u6536\u6210\u4E00\u4E2A\u534A\u900F\u660E\u80F6\u56CA\uFF0C\u5C45\u4E2D\u3002 */
[data-composer-dock] {
  width: fit-content;
  margin-inline: auto;
  margin-top: 4px;
  padding: 3px 14px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-overlay);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
${DARK} [data-composer-dock] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
${SIDEBAR} [role="treeitem"],
${SIDEBAR} button {
  transition: background-color 150ms ease, box-shadow 150ms ease, border-color 150ms ease;
}
${COMPOSER_CARD} {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(0, 0, 0, 0.06);
  transition: box-shadow 180ms ease;
}
${COMPOSER_CARD}:focus-within {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(77, 107, 254, 0.32), 0 0 0 3px rgba(77, 107, 254, 0.05), 0 12px 32px rgba(0, 0, 0, 0.06);
}
${DARK} ${COMPOSER_CARD} {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.10), 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 12px 32px rgba(0, 0, 0, 0.32);
}
${DARK} ${COMPOSER_CARD}:focus-within {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.10), 0 0 0 1px rgba(103, 153, 254, 0.38), 0 0 0 3px rgba(103, 153, 254, 0.06), 0 12px 32px rgba(0, 0, 0, 0.32);
}
::-webkit-scrollbar-thumb { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.38); }
${DARK} ::-webkit-scrollbar-thumb { box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.10); }
[role="tooltip"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 0.5px rgba(38, 49, 72, 0.10), 0 8px 24px rgba(38, 49, 72, 0.10);
}
${DARK} [role="tooltip"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.40);
}
/* \u83DC\u5355\u7528\u78E8\u7802\uFF08\u5B9E\u5E95+\u6A21\u7CCA\uFF09\uFF0C0.84 \u7684\u5E95\u5355\u7EAF\u6A21\u7CCA\u4F1A\u900F\u5B57\uFF1B\u5BF9\u8BDD\u6846\u666E\u901A\u6A21\u7CCA\u5C31\u591F\u3002 */
[role="menu"] {
  -webkit-backdrop-filter: ${GLASS_FROST};
  backdrop-filter: ${GLASS_FROST};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 0.5px rgba(38, 49, 72, 0.08), 0 12px 32px rgba(38, 49, 72, 0.10);
  animation: dsh-qol-pop-in 120ms ease-out;
}
${DARK} [role="menu"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 12px 32px rgba(0, 0, 0, 0.45);
}
[role="dialog"] {
  -webkit-backdrop-filter: ${GLASS_BLUR};
  backdrop-filter: ${GLASS_BLUR};
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 0 0 0.5px rgba(38, 49, 72, 0.08), 0 24px 64px rgba(38, 49, 72, 0.14);
  animation: dsh-qol-pop-in 140ms ease-out;
}
${DARK} [role="dialog"] {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 24px 64px rgba(0, 0, 0, 0.5);
}
:focus-visible { outline-color: rgba(77, 107, 254, 0.55) !important; }
${DARK} :focus-visible { outline-color: rgba(103, 153, 254, 0.60) !important; }
@keyframes dsh-qol-pop-in {
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  [role="menu"], [role="dialog"] { animation: none; }
}
/* \u78E8\u7802\u7684\u5B9E\u5E95\u8272\uFF0C\u8D34\u8FD1\u5361\u7247\u540E\u9762\u90A3\u5757\u5E95\u56FE\u7684\u8272\u8C03\u3002 */
body { --dsh-qol-frost-ground: rgb(238, 243, 250); }
${DARK} { --dsh-qol-frost-ground: rgb(20, 24, 32); }
`;
function installFrostFilter() {
  const holder = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  holder.id = FROST_FILTER_ID;
  holder.setAttribute("aria-hidden", "true");
  holder.setAttribute("width", "0");
  holder.setAttribute("height", "0");
  holder.style.position = "absolute";
  holder.innerHTML = `<filter id="${FROST_FILTER_ID}-f" filterUnits="userSpaceOnUse" x="-10000" y="-10000" width="20000" height="20000" color-interpolation-filters="sRGB"><feFlood style="flood-color: var(--dsh-qol-frost-ground)" result="ground"/><feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur"/><feColorMatrix in="blur" type="saturate" values="1.4" result="frosted"/><feMerge><feMergeNode in="ground"/><feMergeNode in="frosted"/></feMerge></filter>`;
  document.body.appendChild(holder);
  return () => {
    holder.remove();
  };
}
function installComposerFrost() {
  const frost = document.createElement("div");
  frost.setAttribute("aria-hidden", "true");
  frost.style.cssText = `position:fixed;pointer-events:none;z-index:1;display:none;-webkit-backdrop-filter:${GLASS_FROST};backdrop-filter:${GLASS_FROST}`;
  document.body.appendChild(frost);
  let last = "";
  let frame = 0;
  const tick = () => {
    frame = requestAnimationFrame(tick);
    const card4 = document.querySelector(COMPOSER_CARD);
    const docked = card4?.closest('[data-phase="active"], [data-content-phase="active"]') != null;
    const rect = docked ? card4?.getBoundingClientRect() : void 0;
    const radius = card4 === null || card4 === void 0 ? "" : getComputedStyle(card4).borderRadius;
    const key = rect === void 0 || rect.height === 0 ? "hidden" : `${rect.left},${rect.top},${rect.width},${rect.height},${radius}`;
    if (key === last) return;
    last = key;
    if (rect === void 0 || rect.height === 0) {
      frost.style.display = "none";
      return;
    }
    Object.assign(frost.style, {
      display: "block",
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      borderRadius: radius
    });
  };
  frame = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(frame);
    frost.remove();
  };
}
function installSkin(ctx) {
  document.getElementById(LAYER_ID)?.remove();
  document.getElementById(STYLE_ID)?.remove();
  const layer = document.createElement("div");
  layer.id = LAYER_ID;
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = '<div data-sea="light"></div><div data-sea="dark"></div>';
  document.body.prepend(layer);
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
  const disposeTokens = ctx.theme.overrideTokens(OVERRIDE_SOURCE, TOKENS);
  const disposeFilter = installFrostFilter();
  const disposeFrost = installComposerFrost();
  return () => {
    disposeFrost();
    disposeFilter();
    disposeTokens();
    style.remove();
    layer.remove();
  };
}

// src/client/smooth-text.tsx
var import_react15 = require("react");
var DEFAULT_SMOOTH_TEXT = {
  charsPerSecond: 60,
  lagMs: 300,
  correctionMs: 400,
  maxBacklogChars: 4e3,
  maxBlocks: 8
};
function isHighSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isLowSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
var SmoothedTextDisplay = class {
  /**
   * @param config - display budget; defaults to {@link DEFAULT_SMOOTH_TEXT}.
   * @param now - clock injection for deterministic tests; defaults to `performance.now`.
   */
  constructor(config = DEFAULT_SMOOTH_TEXT, now = () => performance.now()) {
    this.config = config;
    this.now = now;
  }
  schedules = /* @__PURE__ */ new Map();
  /** Blocks currently tracked (bounded by `config.maxBlocks`). */
  get size() {
    return this.schedules.size;
  }
  /**
   * Advance one block's schedule and return the text to display now.
   * @param input - block identity, authoritative text, and streaming state.
   * @returns the prefix of `input.text` the browser should paint this frame.
   */
  display(input3) {
    const { key, text, streaming } = input3;
    if (!streaming) {
      this.schedules.delete(key);
      return text;
    }
    const nowMs = this.now();
    let schedule = this.schedules.get(key);
    if (schedule !== void 0 && !text.startsWith(schedule.target)) {
      this.schedules.set(key, { shown: text.length, target: text, lastMs: nowMs, credit: 0, rate: 0, grewMs: void 0, grewLength: text.length });
      return text;
    }
    if (schedule === void 0) {
      schedule = { shown: 0, target: text, lastMs: nowMs, credit: 0, rate: 0, grewMs: void 0, grewLength: 0 };
      this.track(key, schedule);
    }
    schedule.target = text;
    const elapsed = Math.max(0, nowMs - schedule.lastMs);
    schedule.lastMs = nowMs;
    const backlog = text.length - schedule.shown;
    if (backlog <= 0) return text;
    const { charsPerSecond, lagMs, correctionMs, maxBacklogChars } = this.config;
    if (text.length > schedule.grewLength) {
      if (schedule.grewMs !== void 0) {
        const sample = (text.length - schedule.grewLength) / Math.max(16, nowMs - schedule.grewMs) * 1e3;
        schedule.rate = schedule.rate === 0 ? sample : schedule.rate * 0.7 + sample * 0.3;
      }
      schedule.grewMs = nowMs;
      schedule.grewLength = text.length;
    }
    const pace = Math.max(charsPerSecond, schedule.rate + (backlog - schedule.rate * lagMs / 1e3) * 1e3 / correctionMs);
    schedule.credit = Math.min(backlog, schedule.credit + pace / 1e3 * elapsed);
    const released = Math.max(1, Math.floor(schedule.credit));
    schedule.credit = Math.max(0, schedule.credit - released);
    schedule.shown = Math.min(text.length, schedule.shown + released);
    if (text.length - schedule.shown > maxBacklogChars) {
      schedule.shown = text.length - maxBacklogChars;
    }
    if (schedule.shown > 0 && schedule.shown < text.length && isHighSurrogate(text.charCodeAt(schedule.shown - 1)) && isLowSurrogate(text.charCodeAt(schedule.shown))) {
      schedule.shown += 1;
    }
    return text.slice(0, schedule.shown);
  }
  /**
   * Drop one block's schedule (component unmount, Session switch).
   * @param key - the block identity passed to {@link display}.
   */
  release(key) {
    this.schedules.delete(key);
  }
  /** Drop every schedule (plugin dispose, disconnect). */
  reset() {
    this.schedules.clear();
  }
  /** Insert with oldest-first eviction so a leak cannot grow without bound. */
  track(key, schedule) {
    this.schedules.set(key, schedule);
    while (this.schedules.size > this.config.maxBlocks) {
      const oldest = this.schedules.keys().next();
      if (oldest.done === true) return;
      this.schedules.delete(oldest.value);
    }
  }
};
var SLOT = "conversation.chat.node";
var KEY = "assistant-step";
var diag = { registered: false, error: null, renders: 0, borrowed: false };
globalThis.__dshQolSmooth = diag;
var smoother = new SmoothedTextDisplay();
function useFrameTick(active2, behind) {
  const [, bump] = (0, import_react15.useReducer)((n) => n + 1, 0);
  (0, import_react15.useEffect)(() => {
    if (!active2) return void 0;
    let frame = requestAnimationFrame(function tick() {
      if (behind.current) bump();
      frame = requestAnimationFrame(tick);
    });
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [active2, behind]);
}
function installSmoothText(ctx) {
  const host = ctx.slots;
  let self;
  const original = () => host.entriesOf(SLOT).filter((entry) => entry.options.key === KEY && entry.component !== self).sort((a, b) => (a.options.priority ?? 0) - (b.options.priority ?? 0))[0];
  const borrowChildren = (entry) => {
    const mine = host.entriesOf(SLOT).find((candidate) => candidate.component === self);
    if (mine === void 0 || mine.children !== void 0 || entry.children === void 0) return;
    try {
      mine.children = entry.children;
      diag.borrowed = true;
    } catch {
    }
  };
  function SmoothAssistantStep(props) {
    const entry = original();
    if (entry !== void 0) borrowChildren(entry);
    diag.renders += 1;
    const node = props["node"];
    const streaming = node.data.status === "running";
    const behind = (0, import_react15.useRef)(false);
    useFrameTick(streaming, behind);
    const keys = (0, import_react15.useRef)([]);
    (0, import_react15.useEffect)(() => () => {
      for (const key of keys.current) smoother.release(key);
    }, []);
    let catchingUp = false;
    const blocks = node.data.blocks.map((block, i) => {
      if (block.kind !== "text" || typeof block.text !== "string") return block;
      const key = `${node.key}:${String(i)}`;
      if (!keys.current.includes(key)) keys.current.push(key);
      const shown = smoother.display({ key, text: block.text, streaming });
      if (shown !== block.text) catchingUp = true;
      return shown === block.text ? block : { ...block, text: shown };
    });
    behind.current = catchingUp;
    if (entry === void 0) return null;
    return (0, import_react15.createElement)(entry.component, {
      ...props,
      node: { ...node, data: { ...node.data, blocks } }
    });
  }
  self = SmoothAssistantStep;
  const register = ctx.slots.register.bind(ctx.slots);
  return ctx.slots.inject(SLOT, () => {
    try {
      const dispose = register({
        name: SLOT,
        key: KEY,
        priority: -1,
        // 与官方条目相同的文案空间与 inject（hooks.presentation）；子插槽见 borrowChildren。
        locale: "chat",
        inject: (...args) => original()?.inject?.(...args) ?? {}
      }, SmoothAssistantStep);
      diag.registered = true;
      return dispose;
    } catch (error) {
      diag.error = error instanceof Error ? error.message : String(error);
      throw error;
    }
  });
}

// src/client/index.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var NS = "dsh.qol";
var ITEMS = [
  { key: "analytics", entry: "product-analytics", field: "enabled", onValue: true, isOn: (v) => v["enabled"] === true },
  { key: "sessionLog", entry: "session-log-deepseek", field: "enabled", onValue: true, isOn: (v) => v["enabled"] === true },
  // 这两项官方不可热改：界面写本包自己的 volatile 字段，由 Host 面（src/index.ts）
  // 经 configEditor 改官方条目，官方随即重载那个组件。
  { key: "inventory", entry: "dsh-qol", field: "inventory", onValue: true, isOn: (v) => v["inventory"] === true },
  { key: "feedback", entry: "dsh-qol", field: "feedback", onValue: true, isOn: (v) => v["feedback"] === true }
];
var LOW_LABEL_ITEM = {
  key: "lowLabel",
  entry: "dsh-qol",
  field: "revokeLowLabel",
  onValue: true,
  offValue: false,
  isOn: (v) => v["revokeLowLabel"] !== false
};
var WORKSPACE_ACCESS_ITEM = {
  key: "workspaceAccess",
  entry: "dsh-qol",
  field: "fixWorkspaceAccess",
  onValue: true,
  offValue: false,
  isOn: (v) => v["fixWorkspaceAccess"] !== false
};
var SKIN_ITEM = {
  key: "skin",
  entry: "dsh-qol",
  field: "skin",
  onValue: true,
  offValue: false,
  isOn: (v) => v["skin"] !== false
};
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
  return (0, import_react16.useSyncExternalStore)((listener) => form.subscribe(listener), () => form.getSnapshot());
}
function Switch(props) {
  const { checked, disabled } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: { ...S.knob, left: checked ? "18px" : "2px" } })
    }
  );
}
function ItemRow(props) {
  const { ctx, t, item } = props;
  const form = ctx.configForms.get(item.entry);
  const snap = useForm(form);
  const [busy, setBusy] = (0, import_react16.useState)(false);
  const [failed, setFailed] = (0, import_react16.useState)(false);
  const label = t(`item.${item.key}`);
  let status;
  let control = null;
  if (snap.status === "loading") status = t("state.loading");
  else if (snap.status === "unavailable") status = t("state.unavailable");
  else {
    const on = snap.value !== void 0 && item.isOn(snap.value);
    status = snap.writable ? t(on ? "state.on" : "state.off") : t("state.readonly");
    control = /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      Switch,
      {
        checked: on,
        label,
        disabled: busy || !snap.writable,
        onToggle: () => {
          setBusy(true);
          setFailed(false);
          const write = item.offValue === void 0 ? on ? form.unset(item.field) : form.set(item.field, item.onValue) : on ? form.set(item.field, item.offValue) : form.unset(item.field);
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: { ...S.row, ...props.first ? {} : S.rowDivider }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: S.text, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: S.note, children: t(`item.${item.key}.desc`) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: S.note, children: status }),
      failed ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { style: S.error, children: t("error.save") }) : null
    ] }),
    control
  ] });
}
function makeSection(ctx, t) {
  return function QolSection() {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: S.section, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.title, children: t("privacy.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.note, children: t("privacy.intro") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.card, children: ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ItemRow, { ctx, t, item, first: i === 0 }, item.key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.note, children: t("privacy.uninstall") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { ...S.title, marginTop: 12 }, children: t("skin.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.note, children: t("skin.intro") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.card, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ItemRow, { ctx, t, item: SKIN_ITEM, first: true }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { ...S.title, marginTop: 12 }, children: t("lowLabel.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.note, children: t("lowLabel.intro1") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.note, children: t("lowLabel.intro2") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { style: S.card, children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ItemRow, { ctx, t, item: LOW_LABEL_ITEM, first: true }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ItemRow, { ctx, t, item: WORKSPACE_ACCESS_ITEM, first: false })
      ] })
    ] });
  };
}
var inject = [.../* @__PURE__ */ new Set(["slots", "locale", "configForms", ...workbenchInject])];
async function apply(ctx) {
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
    console.error(`[dsh-qol] privacy section failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  try {
    ctx.inject(["slots"], (scoped) => {
      scoped.effect(() => installSmoothText(scoped), "dsh-qol: smooth text");
    });
  } catch (error) {
    console.error(`[dsh-qol] smooth text failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  try {
    applySkin(ctx);
  } catch (error) {
    console.error(`[dsh-qol] skin failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  try {
    await applyWorkbench(ctx);
  } catch (error) {
    console.error(`[dsh-qol] workbench failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  try {
    applyNotify(ctx);
  } catch (error) {
    console.error(`[dsh-qol] notify failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  try {
    await applySkills(ctx);
  } catch (error) {
    console.error(`[dsh-qol] skills failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}
function applySkin(ctx) {
  ctx.inject(["theme", "configForms"], (scoped) => {
    const form = scoped.configForms.get("dsh-qol");
    let dispose;
    const sync = () => {
      const snap = form.getSnapshot();
      const want = snap.status !== "ready" || snap.value?.["skin"] !== false;
      if (want && dispose === void 0) dispose = installSkin(scoped);
      else if (!want && dispose !== void 0) {
        dispose();
        dispose = void 0;
      }
    };
    sync();
    const unsubscribe = form.subscribe(sync);
    scoped.effect(() => () => {
      unsubscribe();
      dispose?.();
      dispose = void 0;
    }, "dsh-qol: skin");
  });
}

    Object.defineProperty(module.exports, Symbol.toStringTag, { value: 'Module' })
    return module.exports
  },
})
