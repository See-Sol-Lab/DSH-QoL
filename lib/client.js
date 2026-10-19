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
var import_react15 = require("react");

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
  "lowLabel.title": "\u6C99\u7BB1 Low \u6807\u7B7E",
  "lowLabel.intro1": "\u5B98\u65B9\u6C99\u7BB1\u4F1A\u7ED9\u7528\u8FC7\u7684\u5DE5\u4F5C\u533A\u6253\u4E0A Low \u5B8C\u6574\u6027\u6807\u7B7E\u5E76\u4E00\u76F4\u4FDD\u7559\uFF0C\u597D\u5904\u662F\u5927\u4ED3\u5E93\u4E0B\u6B21\u4E0D\u7528\u91CD\u65B0\u6388\u6743\u3002\u4EE3\u4EF7\u662F\u8FD9\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u7A0B\u5E8F\uFF08Electron\u3001\u6253\u5305\u5DE5\u5177\u3001\u81EA\u5DF1\u7F16\u8BD1\u7684\u7A0B\u5E8F\u3001\u9879\u76EE\u91CC\u7684 Python \u865A\u62DF\u73AF\u5883\uFF09\u90FD\u4F1A\u4EE5\u4F4E\u6743\u9650\u542F\u52A8\uFF0C\u5E38\u89C1\u75C7\u72B6\u662F\u8D77\u4E0D\u6765\u3001\u6253\u4E0D\u4E86\u5305\u3001\u5220\u4E0D\u6389 dist\u3002\u8BE5\u95EE\u9898\u5DF2\u7ECF\u88AB\u7528\u6237\u591A\u6B21\u62A5\u6210 BUG\uFF0C\u5F88\u5F71\u54CD\u5F00\u53D1\u3002",
  "lowLabel.intro2": "\u672C\u63D2\u4EF6\u63D0\u4F9B\u64A4\u9500 Low \u6807\u7B7E\u7684\u9009\u9879\uFF0C\u5982\u679C\u4F60\u540C\u65F6\u7528 Codex\u3001Claude Code \u7B49\u5176\u4ED6\u5DE5\u5177\uFF0C\u6216\u8005\u7ECF\u5E38\u6253\u5305\u3001\u8FD0\u884C\u684C\u9762\u7A0B\u5E8F\uFF0C\u5EFA\u8BAE\u6253\u5F00\u8BE5\u9009\u9879\u5F00\u5173\u3002\u6253\u5F00\u540E\uFF0CDSH \u6BCF\u6B21\u542F\u52A8\u548C\u9000\u51FA\u65F6\u4F1A\u64A4\u6389\u8FD9\u4E9B\u6807\u7B7E\uFF1BDSH \u8FD0\u884C\u671F\u95F4\u6807\u7B7E\u4ECD\u5728\u3002",
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
  "lowLabel.title": "Sandbox Low label",
  "lowLabel.intro1": "The official sandbox puts a Low integrity label on every workspace it has used and keeps it, so a large repository does not need to be granted again next time. The cost: programs in that folder (Electron, packaging tools, programs you compile, a Python virtual environment inside the project) start at low integrity, and typically fail to launch, fail to package, or cannot delete dist. Users have reported this as a bug many times; it gets in the way of development.",
  "lowLabel.intro2": "This plugin can remove the Low label. If you also use Codex, Claude Code or other tools, or often package or run desktop programs, turn this on. When it is on, DSH removes these marks each time it starts and exits; while DSH is running the label is still there.",
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
  "common.noDesktop": "\u5F53\u524D\u4E0D\u5728 DeepSeekGUI \u684C\u9762\u7A97\u53E3\u5185\uFF0C\u6253\u5F00\u6587\u4EF6\u7BA1\u7406\u5668\u4E0D\u53EF\u7528\u3002",
  // Changes view (file level, this workspace).
  "changes.branch": "\u5206\u652F",
  "changes.clean": "\u5DE5\u4F5C\u533A\u5E72\u51C0\uFF0C\u52A9\u624B\u6CA1\u6709\u6539\u8FC7\u4EFB\u4F55\u6587\u4EF6",
  "changes.group.staged": "\u5C06\u63D0\u4EA4",
  "changes.group.unstaged": "\u5DF2\u6539\u52A8\u3001\u672A\u9009\u5165\u63D0\u4EA4",
  "changes.group.untracked": "\u65B0\u6587\u4EF6",
  "changes.group.conflict": "\u51B2\u7A81",
  "changes.reveal": "\u5B9A\u4F4D",
  "changes.revealTitle": "\u5728\u8D44\u6E90\u7BA1\u7406\u5668\u4E2D\u5B9A\u4F4D\u8FD9\u4E2A\u6587\u4EF6",
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
  "memory.open": "\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00",
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
  "common.noDesktop": "Not inside a DeepSeekGUI desktop window: opening the file manager is unavailable.",
  "changes.branch": "Branch",
  "changes.clean": "Working tree clean; the assistant has not changed any file",
  "changes.group.staged": "Will be committed",
  "changes.group.unstaged": "Changed, not selected for commit",
  "changes.group.untracked": "New files",
  "changes.group.conflict": "Conflicts",
  "changes.reveal": "Reveal",
  "changes.revealTitle": "Reveal this file in the file manager",
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
  "memory.open": "Open in file manager",
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
  return (0, import_react15.useSyncExternalStore)((listener) => form.subscribe(listener), () => form.getSnapshot());
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
  const [busy, setBusy] = (0, import_react15.useState)(false);
  const [failed, setFailed] = (0, import_react15.useState)(false);
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
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { ...S.title, marginTop: 12 }, children: t("lowLabel.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.note, children: t("lowLabel.intro1") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.note, children: t("lowLabel.intro2") }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: S.card, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ItemRow, { ctx, t, item: LOW_LABEL_ITEM, first: true }) })
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

    Object.defineProperty(module.exports, Symbol.toStringTag, { value: 'Module' })
    return module.exports
  },
})
