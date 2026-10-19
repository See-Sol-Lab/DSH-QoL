// 构建产物，勿手改：源码在 src/client，由 scripts/build.mjs 生成。
window.__ModuleLoader__.load({
  id: "@see-sol-lab/dsh-qol",
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
"use strict";
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
var import_react8 = require("react");

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
          invoke(remote, input2, signal) {
            const named = input2;
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
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_result$schema$value ??= import_zod.z.object({
  "settings": import_zod.z.object({
    "auto": import_zod.z.boolean().readonly().describe("\u5F52\u6863\u65F6\u81EA\u52A8\u6574\u7406\uFF08\u4F1A\u8C03\u7528\u4E00\u6B21\u5F53\u524D\u6A21\u578B\u670D\u52A1\uFF0C\u53EF\u80FD\u8BA1\u8D39\uFF09\u3002\u53EA\u6709 noticeSeen \u4E4B\u540E\u624D\u771F\u7684\u81EA\u52A8\u8DD1\u3002"),
    "noticeSeen": import_zod.z.boolean().readonly().describe("\u9996\u6B21\u8BF4\u660E\u662F\u5426\u5DF2\u7ECF\u770B\u8FC7\uFF1A\u6CA1\u770B\u8FC7\u4E4B\u524D\uFF0C\u5F52\u6863\u53EA\u8BB0 needs-consent\uFF0C\u4E0D\u8C03\u7528\u6A21\u578B\u3002")
  }).readonly(),
  "record": import_zod.z.union([import_zod.z.literal(null), import_zod.z.object({
    "schemaVersion": import_zod.z.literal(1).readonly(),
    "sessionId": import_zod.z.string().readonly(),
    "status": import_zod.z.union([import_zod.z.literal("cancelled"), import_zod.z.literal("failed"), import_zod.z.literal("running"), import_zod.z.literal("invalid"), import_zod.z.literal("no-project"), import_zod.z.literal("written"), import_zod.z.literal("none"), import_zod.z.literal("needs-consent"), import_zod.z.literal("too-short"), import_zod.z.literal("nothing-new"), import_zod.z.literal("empty"), import_zod.z.literal("protected"), import_zod.z.literal("no-model"), import_zod.z.literal("full"), import_zod.z.literal("malformed"), import_zod.z.literal("conflict"), import_zod.z.literal("interrupted"), import_zod.z.literal("gone")]).readonly(),
    "manual": import_zod.z.boolean().readonly().describe("\u7528\u6237\u624B\u52A8\u53D1\u8D77\uFF08\u4E0D\u770B\u957F\u5EA6\u95E8\u69DB\uFF09\u3002"),
    "processedThroughSeq": import_zod.z.number().readonly().describe("\u5DF2\u7ECF\u5904\u7406\u8FC7\u7684\u6765\u6E90\u8FB9\u754C\uFF1A\u8FD9\u4E00 seq \u53CA\u4E4B\u524D\u7684\u8F6E\u6B21\u4E0D\u4F1A\u518D\u88AB\u6574\u7406\u3002\u53EA\u5728 written / none \u65F6\u524D\u8FDB\u3002"),
    "startedAt": import_zod.z.string().readonly(),
    "finishedAt": import_zod.z.string().readonly().optional(),
    "input": import_zod.z.object({
      "userTurns": import_zod.z.number().readonly(),
      "chars": import_zod.z.number().readonly(),
      "throughSeq": import_zod.z.number().readonly(),
      "wholeUserTurns": import_zod.z.number().readonly(),
      "wholeChars": import_zod.z.number().readonly()
    }).readonly().optional().describe("\u672C\u6B21\u65B0\u589E\u6750\u6599\u4E0E\u6574\u6BB5\u4F1A\u8BDD\u7684\u89C4\u6A21\uFF08\u53EA\u6570\u4EBA\u8BF4\u7684\u8BDD\u4E0E\u52A9\u624B\u6B63\u6587\uFF09\u3002"),
    "coverage": import_zod.z.object({
      "fromSeq": import_zod.z.union([import_zod.z.literal(null), import_zod.z.number()]).readonly(),
      "throughSeq": import_zod.z.number().readonly(),
      "complete": import_zod.z.boolean().readonly(),
      "chars": import_zod.z.number().readonly()
    }).readonly().optional().describe("\u5B9E\u9645\u4EA4\u7ED9\u6A21\u578B\u7684\u5BF9\u8BDD\u8303\u56F4\uFF1A\u592A\u957F\u65F6\u53EA\u7ED9\u6700\u8FD1\u7684\u90E8\u5206\uFF08complete = false\uFF09\u3002"),
    "memoryInput": import_zod.z.object({
      "sha256": import_zod.z.string().readonly(),
      "chars": import_zod.z.number().readonly(),
      "complete": import_zod.z.boolean().readonly(),
      "text": import_zod.z.string().readonly()
    }).readonly().optional().describe("\u5F53\u65F6\u4EA4\u7ED9\u6A21\u578B\u7684\u9879\u76EE\u8BB0\u5FC6\uFF08Sol P2-08\uFF1A\u6574\u7406\u53EF\u8FFD\u6EAF\uFF09\uFF1A\u8BFB\u5230\u7684\u5168\u6587\u6458\u8981\u4E0E\u5B57\u6570\uFF0C\u4EE5\u53CA\u5B9E\u9645\u7ED9\u6A21\u578B\u7684\u90A3\u6BB5\u6587\u672C \uFF08\u6709\u754C\uFF1B\u8D85\u957F\u65F6\u53EA\u542B\u5F00\u5934\u4E0E\u6574\u4E2A\u81EA\u52A8\u6574\u7406\u533A\uFF09\u3002"),
    "budgetChars": import_zod.z.number().readonly().optional().describe("\u672C\u6B21\u8BF7\u6C42\u7684\u5B57\u7B26\u9884\u7B97\uFF08\u6309\u914D\u7F6E\u4E0E\u6A21\u578B\u4E0A\u4E0B\u6587\u6536\u7D27\u540E\u7684\u503C\uFF09\u3002"),
    "cwd": import_zod.z.string().readonly().optional(),
    "projectPath": import_zod.z.string().readonly().optional(),
    "route": import_zod.z.object({
      "provider": import_zod.z.string().readonly(),
      "model": import_zod.z.string().readonly()
    }).readonly().optional(),
    "finish": import_zod.z.string().readonly().optional().describe("\u6A21\u578B\u7684\u7ED3\u675F\u539F\u56E0\uFF08stop / tool-calls / max-tokens \u2026\uFF09\u3002"),
    "output": import_zod.z.string().readonly().optional().describe("\u6A21\u578B\u539F\u6837\u8F93\u51FA\uFF08\u4FBF\u4E8E\u590D\u9A8C\uFF09\u3002"),
    "added": import_zod.z.array(import_zod.z.string()).readonly().optional().describe("\u5199\u8FDB\u9879\u76EE\u8BB0\u5FC6\u7684\u6761\u76EE\u3002"),
    "superseded": import_zod.z.array(import_zod.z.string()).readonly().optional().describe("\u88AB\u672C\u6B21\u6761\u76EE\u53D6\u4EE3\u3001\u6539\u6210\u5220\u9664\u7EBF\u7684\u65E7\u81EA\u52A8\u6761\u76EE\u3002"),
    "pending": import_zod.z.array(import_zod.z.string()).readonly().optional().describe("\u6CA1\u5199\u6210\uFF08\u6EE1\u4E86\u3001\u51B2\u7A81\u3001\u6807\u8BB0\u6B8B\u7F3A\u3001\u53D7\u4FDD\u62A4\u3001\u5199\u5931\u8D25\uFF09\u65F6\u8FD9\u6B21\u672C\u6765\u8981\u5199\u7684\u6761\u76EE\u3002"),
    "suggestions": import_zod.z.array(import_zod.z.string()).readonly().optional().describe("\u7ED9\u5168\u5C40\u8BB0\u5FC6\u7684\u5EFA\u8BAE\uFF08\u53E6\u5B58\uFF0C\u7B49\u7528\u6237\u786E\u8BA4\uFF09\u3002"),
    "suggestionsDropped": import_zod.z.number().readonly().optional().describe("\u5EFA\u8BAE\u5217\u8868\u5DF2\u6EE1\u3001\u6CA1\u80FD\u653E\u8FDB\u53BB\u7684\u6761\u6570\uFF08\u4E0D\u6084\u6084\u5F53\u6210\u5904\u7406\u5B8C\uFF09\u3002"),
    "rejected": import_zod.z.number().readonly().optional().describe("\u4E0D\u5408\u683C\u5F0F\u3001\u8D85\u9650\u6216\u50CF\u51ED\u636E\u800C\u88AB\u4E22\u6389\u7684\u884C\u6570\u3002"),
    "error": import_zod.z.string().readonly().optional()
  })]).readonly(),
  "running": import_zod.z.boolean().readonly()
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
      "status": import_zod.z.union([import_zod.z.literal("absent"), import_zod.z.literal("empty"), import_zod.z.literal("present"), import_zod.z.literal("truncated"), import_zod.z.literal("unreadable")]).readonly(),
      "bytes": import_zod.z.number().readonly().describe("\u5B9E\u9645\u5E26\u5165\u7684 UTF-8 \u5B57\u8282\u6570\u4E0E\u5B57\u7B26\u6570\uFF08code points\uFF09\u3002"),
      "chars": import_zod.z.number().readonly(),
      "sha256": import_zod.z.string().readonly().describe("\u5B9E\u9645\u5E26\u5165\u6587\u672C\u7684 SHA-256\uFF1A\u540C\u6837\u957F\u5EA6\u3001\u4E0D\u540C\u5185\u5BB9\u4E5F\u5206\u5F97\u5F00\u3002"),
      "autoArea": import_zod.z.union([import_zod.z.literal("absent"), import_zod.z.literal("included")]).readonly().optional().describe("\u81EA\u52A8\u6574\u7406\u533A\u662F\u5426\u6574\u6BB5\u5E26\u5165\uFF08\u9879\u76EE\u8BB0\u5FC6\u8D85\u51FA\u4E0A\u9650\u65F6\uFF0C\u5B83\u4F18\u5148\u4E8E\u4EBA\u5199\u5185\u5BB9\u7684\u5C3E\u90E8\uFF09\u3002")
    }).readonly(),
    "project": import_zod.z.object({
      "path": import_zod.z.string().readonly(),
      "status": import_zod.z.union([import_zod.z.literal("absent"), import_zod.z.literal("empty"), import_zod.z.literal("present"), import_zod.z.literal("truncated"), import_zod.z.literal("unreadable")]).readonly(),
      "bytes": import_zod.z.number().readonly().describe("\u5B9E\u9645\u5E26\u5165\u7684 UTF-8 \u5B57\u8282\u6570\u4E0E\u5B57\u7B26\u6570\uFF08code points\uFF09\u3002"),
      "chars": import_zod.z.number().readonly(),
      "sha256": import_zod.z.string().readonly().describe("\u5B9E\u9645\u5E26\u5165\u6587\u672C\u7684 SHA-256\uFF1A\u540C\u6837\u957F\u5EA6\u3001\u4E0D\u540C\u5185\u5BB9\u4E5F\u5206\u5F97\u5F00\u3002"),
      "autoArea": import_zod.z.union([import_zod.z.literal("absent"), import_zod.z.literal("included")]).readonly().optional().describe("\u81EA\u52A8\u6574\u7406\u533A\u662F\u5426\u6574\u6BB5\u5E26\u5165\uFF08\u9879\u76EE\u8BB0\u5FC6\u8D85\u51FA\u4E0A\u9650\u65F6\uFF0C\u5B83\u4F18\u5148\u4E8E\u4EBA\u5199\u5185\u5BB9\u7684\u5C3E\u90E8\uFF09\u3002")
    }).readonly()
  })).readonly()
})]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memorySuggestions_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memorySuggestions_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memorySuggestions_result$schema$value ??= import_zod.z.array(import_zod.z.object({
  "id": import_zod.z.string().readonly(),
  "text": import_zod.z.string().readonly(),
  "sessionId": import_zod.z.string().readonly(),
  "at": import_zod.z.string().readonly()
}));
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
      "kind": import_zod.z.union([import_zod.z.literal("conflict"), import_zod.z.literal("staged"), import_zod.z.literal("unstaged"), import_zod.z.literal("untracked")]).describe("Which surface reports the change: `conflict` for unmerged records (`u`), `untracked` for `?` records, `staged` when the index column differs from `.`, `unstaged` when only the work-tree column differs."),
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
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_result$schema$value ??= import_zod.z.boolean();
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
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_0$schema$value ??= import_zod.z.union([import_zod.z.literal(null), import_zod.z.literal(false), import_zod.z.literal(true)]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_1$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_1$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_1$schema$value ??= import_zod.z.union([import_zod.z.literal(null), import_zod.z.literal(false), import_zod.z.literal(true)]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_result$schema$value ??= import_zod.z.object({
  "auto": import_zod.z.boolean().readonly().describe("\u5F52\u6863\u65F6\u81EA\u52A8\u6574\u7406\uFF08\u4F1A\u8C03\u7528\u4E00\u6B21\u5F53\u524D\u6A21\u578B\u670D\u52A1\uFF0C\u53EF\u80FD\u8BA1\u8D39\uFF09\u3002\u53EA\u6709 noticeSeen \u4E4B\u540E\u624D\u771F\u7684\u81EA\u52A8\u8DD1\u3002"),
  "noticeSeen": import_zod.z.boolean().readonly().describe("\u9996\u6B21\u8BF4\u660E\u662F\u5426\u5DF2\u7ECF\u770B\u8FC7\uFF1A\u6CA1\u770B\u8FC7\u4E4B\u524D\uFF0C\u5F52\u6863\u53EA\u8BB0 needs-consent\uFF0C\u4E0D\u8C03\u7528\u6A21\u578B\u3002")
});
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
      "kind": import_zod.z.union([import_zod.z.literal("conflict"), import_zod.z.literal("staged"), import_zod.z.literal("unstaged"), import_zod.z.literal("untracked")]).describe("Which surface reports the change: `conflict` for unmerged records (`u`), `untracked` for `?` records, `staged` when the index column differs from `.`, `unstaged` when only the work-tree column differs."),
      "path": import_zod.z.string().describe("Path relative to the repo root."),
      "origPath": import_zod.z.string().optional().describe("Original path for a rename/copy (the `2` record's second path)."),
      "x": import_zod.z.union([import_zod.z.literal("."), import_zod.z.literal("A"), import_zod.z.literal("M"), import_zod.z.literal("D"), import_zod.z.literal("R"), import_zod.z.literal("C"), import_zod.z.literal("U"), import_zod.z.literal("T"), import_zod.z.literal("?"), import_zod.z.literal("AM"), import_zod.z.literal("AD"), import_zod.z.literal("AU"), import_zod.z.literal("AA"), import_zod.z.literal("DD"), import_zod.z.literal("DU"), import_zod.z.literal("UA"), import_zod.z.literal("UD"), import_zod.z.literal("UU")]).describe("Index status column (`X` of `XY`)."),
      "y": import_zod.z.union([import_zod.z.literal("."), import_zod.z.literal("A"), import_zod.z.literal("M"), import_zod.z.literal("D"), import_zod.z.literal("R"), import_zod.z.literal("C"), import_zod.z.literal("U"), import_zod.z.literal("T"), import_zod.z.literal("?"), import_zod.z.literal("AM"), import_zod.z.literal("AD"), import_zod.z.literal("AU"), import_zod.z.literal("AA"), import_zod.z.literal("DD"), import_zod.z.literal("DU"), import_zod.z.literal("UA"), import_zod.z.literal("UD"), import_zod.z.literal("UU")]).describe("Work-tree status column (`Y` of `XY`)."),
      "score": import_zod.z.string().optional().describe("Rename/copy similarity score (`R100` / `C75`), when present.")
    })).describe("Every changed path, in porcelain v2 record order.")
  })
});
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_parameter_0$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_parameter_0$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_parameter_0$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_result$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_result$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_result$schema$value ??= import_zod.z.object({
  "schemaVersion": import_zod.z.literal(1).readonly(),
  "sessionId": import_zod.z.string().readonly(),
  "status": import_zod.z.union([import_zod.z.literal("cancelled"), import_zod.z.literal("failed"), import_zod.z.literal("running"), import_zod.z.literal("invalid"), import_zod.z.literal("no-project"), import_zod.z.literal("written"), import_zod.z.literal("none"), import_zod.z.literal("needs-consent"), import_zod.z.literal("too-short"), import_zod.z.literal("nothing-new"), import_zod.z.literal("empty"), import_zod.z.literal("protected"), import_zod.z.literal("no-model"), import_zod.z.literal("full"), import_zod.z.literal("malformed"), import_zod.z.literal("conflict"), import_zod.z.literal("interrupted"), import_zod.z.literal("gone")]).readonly(),
  "manual": import_zod.z.boolean().readonly().describe("\u7528\u6237\u624B\u52A8\u53D1\u8D77\uFF08\u4E0D\u770B\u957F\u5EA6\u95E8\u69DB\uFF09\u3002"),
  "processedThroughSeq": import_zod.z.number().readonly().describe("\u5DF2\u7ECF\u5904\u7406\u8FC7\u7684\u6765\u6E90\u8FB9\u754C\uFF1A\u8FD9\u4E00 seq \u53CA\u4E4B\u524D\u7684\u8F6E\u6B21\u4E0D\u4F1A\u518D\u88AB\u6574\u7406\u3002\u53EA\u5728 written / none \u65F6\u524D\u8FDB\u3002"),
  "startedAt": import_zod.z.string().readonly(),
  "finishedAt": import_zod.z.string().readonly().optional(),
  "input": import_zod.z.object({
    "userTurns": import_zod.z.number().readonly(),
    "chars": import_zod.z.number().readonly(),
    "throughSeq": import_zod.z.number().readonly(),
    "wholeUserTurns": import_zod.z.number().readonly(),
    "wholeChars": import_zod.z.number().readonly()
  }).readonly().optional().describe("\u672C\u6B21\u65B0\u589E\u6750\u6599\u4E0E\u6574\u6BB5\u4F1A\u8BDD\u7684\u89C4\u6A21\uFF08\u53EA\u6570\u4EBA\u8BF4\u7684\u8BDD\u4E0E\u52A9\u624B\u6B63\u6587\uFF09\u3002"),
  "coverage": import_zod.z.object({
    "fromSeq": import_zod.z.union([import_zod.z.literal(null), import_zod.z.number()]).readonly(),
    "throughSeq": import_zod.z.number().readonly(),
    "complete": import_zod.z.boolean().readonly(),
    "chars": import_zod.z.number().readonly()
  }).readonly().optional().describe("\u5B9E\u9645\u4EA4\u7ED9\u6A21\u578B\u7684\u5BF9\u8BDD\u8303\u56F4\uFF1A\u592A\u957F\u65F6\u53EA\u7ED9\u6700\u8FD1\u7684\u90E8\u5206\uFF08complete = false\uFF09\u3002"),
  "memoryInput": import_zod.z.object({
    "sha256": import_zod.z.string().readonly(),
    "chars": import_zod.z.number().readonly(),
    "complete": import_zod.z.boolean().readonly(),
    "text": import_zod.z.string().readonly()
  }).readonly().optional().describe("\u5F53\u65F6\u4EA4\u7ED9\u6A21\u578B\u7684\u9879\u76EE\u8BB0\u5FC6\uFF08Sol P2-08\uFF1A\u6574\u7406\u53EF\u8FFD\u6EAF\uFF09\uFF1A\u8BFB\u5230\u7684\u5168\u6587\u6458\u8981\u4E0E\u5B57\u6570\uFF0C\u4EE5\u53CA\u5B9E\u9645\u7ED9\u6A21\u578B\u7684\u90A3\u6BB5\u6587\u672C \uFF08\u6709\u754C\uFF1B\u8D85\u957F\u65F6\u53EA\u542B\u5F00\u5934\u4E0E\u6574\u4E2A\u81EA\u52A8\u6574\u7406\u533A\uFF09\u3002"),
  "budgetChars": import_zod.z.number().readonly().optional().describe("\u672C\u6B21\u8BF7\u6C42\u7684\u5B57\u7B26\u9884\u7B97\uFF08\u6309\u914D\u7F6E\u4E0E\u6A21\u578B\u4E0A\u4E0B\u6587\u6536\u7D27\u540E\u7684\u503C\uFF09\u3002"),
  "cwd": import_zod.z.string().readonly().optional(),
  "projectPath": import_zod.z.string().readonly().optional(),
  "route": import_zod.z.object({
    "provider": import_zod.z.string().readonly(),
    "model": import_zod.z.string().readonly()
  }).readonly().optional(),
  "finish": import_zod.z.string().readonly().optional().describe("\u6A21\u578B\u7684\u7ED3\u675F\u539F\u56E0\uFF08stop / tool-calls / max-tokens \u2026\uFF09\u3002"),
  "output": import_zod.z.string().readonly().optional().describe("\u6A21\u578B\u539F\u6837\u8F93\u51FA\uFF08\u4FBF\u4E8E\u590D\u9A8C\uFF09\u3002"),
  "added": import_zod.z.array(import_zod.z.string()).readonly().optional().describe("\u5199\u8FDB\u9879\u76EE\u8BB0\u5FC6\u7684\u6761\u76EE\u3002"),
  "superseded": import_zod.z.array(import_zod.z.string()).readonly().optional().describe("\u88AB\u672C\u6B21\u6761\u76EE\u53D6\u4EE3\u3001\u6539\u6210\u5220\u9664\u7EBF\u7684\u65E7\u81EA\u52A8\u6761\u76EE\u3002"),
  "pending": import_zod.z.array(import_zod.z.string()).readonly().optional().describe("\u6CA1\u5199\u6210\uFF08\u6EE1\u4E86\u3001\u51B2\u7A81\u3001\u6807\u8BB0\u6B8B\u7F3A\u3001\u53D7\u4FDD\u62A4\u3001\u5199\u5931\u8D25\uFF09\u65F6\u8FD9\u6B21\u672C\u6765\u8981\u5199\u7684\u6761\u76EE\u3002"),
  "suggestions": import_zod.z.array(import_zod.z.string()).readonly().optional().describe("\u7ED9\u5168\u5C40\u8BB0\u5FC6\u7684\u5EFA\u8BAE\uFF08\u53E6\u5B58\uFF0C\u7B49\u7528\u6237\u786E\u8BA4\uFF09\u3002"),
  "suggestionsDropped": import_zod.z.number().readonly().optional().describe("\u5EFA\u8BAE\u5217\u8868\u5DF2\u6EE1\u3001\u6CA1\u80FD\u653E\u8FDB\u53BB\u7684\u6761\u6570\uFF08\u4E0D\u6084\u6084\u5F53\u6210\u5904\u7406\u5B8C\uFF09\u3002"),
  "rejected": import_zod.z.number().readonly().optional().describe("\u4E0D\u5408\u683C\u5F0F\u3001\u8D85\u9650\u6216\u50CF\u51ED\u636E\u800C\u88AB\u4E22\u6389\u7684\u884C\u6570\u3002"),
  "error": import_zod.z.string().readonly().optional()
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
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_parameter_0_strict$schema$value ??= import_zod.z.string();
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
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_parameter_0_strict$schema$value ??= import_zod.z.string();
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
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_0_strict$schema$value ??= import_zod.z.union([import_zod.z.literal(null), import_zod.z.literal(false), import_zod.z.literal(true)]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_1_strict$schema$value ??= import_zod.z.union([import_zod.z.literal(null), import_zod.z.literal(false), import_zod.z.literal(true)]);
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_status_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_0_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_1_strict$schema$value ??= import_zod.z.string();
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2_strict$schema$value;
var _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2_strict$schema = () => _deepseek_ai_dsh_workbench_inspector_workbenchInspector_text_parameter_2_strict$schema$value ??= import_zod.z.boolean();
var TYPERT_REMOTE = createTypertRemoteInfo({
  package: "@see-sol-lab/dsh-qol",
  methods: {
    "workbenchInspector/archiveMemoryState": {
      service: "workbenchInspector",
      description: "\u8BB0\u5FC6\u89C6\u56FE\u8BFB\u7684\u5F52\u6863\u6574\u7406\u4E8B\u5B9E\uFF1A\u5F00\u5173\u3001\u8FD9\u6BB5\u4F1A\u8BDD\u7684\u6574\u7406\u8BB0\u5F55\u3001\u662F\u5426\u6B63\u5728\u6574\u7406\u3002",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "\u4F1A\u8BDD\u3002",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#WorkbenchArchiveMemory",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_archiveMemoryState_result$schema,
        description: "\u5F52\u6863\u6574\u7406\u4E8B\u5B9E\u3002",
        jsonSchema: { "type": "object", "properties": { "settings": { "type": "object", "properties": { "auto": { "type": "boolean", "description": "\u5F52\u6863\u65F6\u81EA\u52A8\u6574\u7406\uFF08\u4F1A\u8C03\u7528\u4E00\u6B21\u5F53\u524D\u6A21\u578B\u670D\u52A1\uFF0C\u53EF\u80FD\u8BA1\u8D39\uFF09\u3002\u53EA\u6709 noticeSeen \u4E4B\u540E\u624D\u771F\u7684\u81EA\u52A8\u8DD1\u3002" }, "noticeSeen": { "type": "boolean", "description": "\u9996\u6B21\u8BF4\u660E\u662F\u5426\u5DF2\u7ECF\u770B\u8FC7\uFF1A\u6CA1\u770B\u8FC7\u4E4B\u524D\uFF0C\u5F52\u6863\u53EA\u8BB0 needs-consent\uFF0C\u4E0D\u8C03\u7528\u6A21\u578B\u3002" } }, "required": ["auto", "noticeSeen"], "additionalProperties": true }, "record": { "oneOf": [{ "type": "null", "const": null }, { "type": "object", "properties": { "schemaVersion": { "type": "number", "const": 1 }, "sessionId": { "type": "string" }, "status": { "type": "string", "enum": ["cancelled", "failed", "running", "invalid", "no-project", "written", "none", "needs-consent", "too-short", "nothing-new", "empty", "protected", "no-model", "full", "malformed", "conflict", "interrupted", "gone"] }, "manual": { "type": "boolean", "description": "\u7528\u6237\u624B\u52A8\u53D1\u8D77\uFF08\u4E0D\u770B\u957F\u5EA6\u95E8\u69DB\uFF09\u3002" }, "processedThroughSeq": { "type": "number", "description": "\u5DF2\u7ECF\u5904\u7406\u8FC7\u7684\u6765\u6E90\u8FB9\u754C\uFF1A\u8FD9\u4E00 seq \u53CA\u4E4B\u524D\u7684\u8F6E\u6B21\u4E0D\u4F1A\u518D\u88AB\u6574\u7406\u3002\u53EA\u5728 written / none \u65F6\u524D\u8FDB\u3002" }, "startedAt": { "type": "string" }, "finishedAt": { "type": "string" }, "input": { "type": "object", "properties": { "userTurns": { "type": "number" }, "chars": { "type": "number" }, "throughSeq": { "type": "number" }, "wholeUserTurns": { "type": "number" }, "wholeChars": { "type": "number" } }, "required": ["userTurns", "chars", "throughSeq", "wholeUserTurns", "wholeChars"], "additionalProperties": true, "description": "\u672C\u6B21\u65B0\u589E\u6750\u6599\u4E0E\u6574\u6BB5\u4F1A\u8BDD\u7684\u89C4\u6A21\uFF08\u53EA\u6570\u4EBA\u8BF4\u7684\u8BDD\u4E0E\u52A9\u624B\u6B63\u6587\uFF09\u3002" }, "coverage": { "type": "object", "properties": { "fromSeq": { "oneOf": [{ "type": "null", "const": null }, { "type": "number" }] }, "throughSeq": { "type": "number" }, "complete": { "type": "boolean" }, "chars": { "type": "number" } }, "required": ["fromSeq", "throughSeq", "complete", "chars"], "additionalProperties": true, "description": "\u5B9E\u9645\u4EA4\u7ED9\u6A21\u578B\u7684\u5BF9\u8BDD\u8303\u56F4\uFF1A\u592A\u957F\u65F6\u53EA\u7ED9\u6700\u8FD1\u7684\u90E8\u5206\uFF08complete = false\uFF09\u3002" }, "memoryInput": { "type": "object", "properties": { "sha256": { "type": "string" }, "chars": { "type": "number" }, "complete": { "type": "boolean" }, "text": { "type": "string" } }, "required": ["sha256", "chars", "complete", "text"], "additionalProperties": true, "description": "\u5F53\u65F6\u4EA4\u7ED9\u6A21\u578B\u7684\u9879\u76EE\u8BB0\u5FC6\uFF08Sol P2-08\uFF1A\u6574\u7406\u53EF\u8FFD\u6EAF\uFF09\uFF1A\u8BFB\u5230\u7684\u5168\u6587\u6458\u8981\u4E0E\u5B57\u6570\uFF0C\u4EE5\u53CA\u5B9E\u9645\u7ED9\u6A21\u578B\u7684\u90A3\u6BB5\u6587\u672C \uFF08\u6709\u754C\uFF1B\u8D85\u957F\u65F6\u53EA\u542B\u5F00\u5934\u4E0E\u6574\u4E2A\u81EA\u52A8\u6574\u7406\u533A\uFF09\u3002" }, "budgetChars": { "type": "number", "description": "\u672C\u6B21\u8BF7\u6C42\u7684\u5B57\u7B26\u9884\u7B97\uFF08\u6309\u914D\u7F6E\u4E0E\u6A21\u578B\u4E0A\u4E0B\u6587\u6536\u7D27\u540E\u7684\u503C\uFF09\u3002" }, "cwd": { "type": "string" }, "projectPath": { "type": "string" }, "route": { "type": "object", "properties": { "provider": { "type": "string" }, "model": { "type": "string" } }, "required": ["provider", "model"], "additionalProperties": true }, "finish": { "type": "string", "description": "\u6A21\u578B\u7684\u7ED3\u675F\u539F\u56E0\uFF08stop / tool-calls / max-tokens \u2026\uFF09\u3002" }, "output": { "type": "string", "description": "\u6A21\u578B\u539F\u6837\u8F93\u51FA\uFF08\u4FBF\u4E8E\u590D\u9A8C\uFF09\u3002" }, "added": { "type": "array", "items": { "type": "string" }, "description": "\u5199\u8FDB\u9879\u76EE\u8BB0\u5FC6\u7684\u6761\u76EE\u3002" }, "superseded": { "type": "array", "items": { "type": "string" }, "description": "\u88AB\u672C\u6B21\u6761\u76EE\u53D6\u4EE3\u3001\u6539\u6210\u5220\u9664\u7EBF\u7684\u65E7\u81EA\u52A8\u6761\u76EE\u3002" }, "pending": { "type": "array", "items": { "type": "string" }, "description": "\u6CA1\u5199\u6210\uFF08\u6EE1\u4E86\u3001\u51B2\u7A81\u3001\u6807\u8BB0\u6B8B\u7F3A\u3001\u53D7\u4FDD\u62A4\u3001\u5199\u5931\u8D25\uFF09\u65F6\u8FD9\u6B21\u672C\u6765\u8981\u5199\u7684\u6761\u76EE\u3002" }, "suggestions": { "type": "array", "items": { "type": "string" }, "description": "\u7ED9\u5168\u5C40\u8BB0\u5FC6\u7684\u5EFA\u8BAE\uFF08\u53E6\u5B58\uFF0C\u7B49\u7528\u6237\u786E\u8BA4\uFF09\u3002" }, "suggestionsDropped": { "type": "number", "description": "\u5EFA\u8BAE\u5217\u8868\u5DF2\u6EE1\u3001\u6CA1\u80FD\u653E\u8FDB\u53BB\u7684\u6761\u6570\uFF08\u4E0D\u6084\u6084\u5F53\u6210\u5904\u7406\u5B8C\uFF09\u3002" }, "rejected": { "type": "number", "description": "\u4E0D\u5408\u683C\u5F0F\u3001\u8D85\u9650\u6216\u50CF\u51ED\u636E\u800C\u88AB\u4E22\u6389\u7684\u884C\u6570\u3002" }, "error": { "type": "string" } }, "required": ["schemaVersion", "sessionId", "status", "manual", "processedThroughSeq", "startedAt"], "additionalProperties": true }] }, "running": { "type": "boolean" } }, "required": ["settings", "record", "running"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 151, "column": 3 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 261, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 421, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 542, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 458, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 507, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 371, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 477, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 352, "column": 9 }
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
        jsonSchema: { "oneOf": [{ "type": "null", "const": null }, { "type": "object", "properties": { "sessionId": { "type": "string" }, "entries": { "type": "array", "items": { "type": "object", "properties": { "at": { "type": "string" }, "capBytes": { "type": "number", "description": "\u6BCF\u4E2A\u6587\u4EF6\u7684\u8BFB\u53D6\u4E0A\u9650\uFF08\u5B57\u8282\uFF09\u3002" }, "global": { "type": "object", "properties": { "path": { "type": "string" }, "status": { "type": "string", "enum": ["absent", "empty", "present", "truncated", "unreadable"] }, "bytes": { "type": "number", "description": "\u5B9E\u9645\u5E26\u5165\u7684 UTF-8 \u5B57\u8282\u6570\u4E0E\u5B57\u7B26\u6570\uFF08code points\uFF09\u3002" }, "chars": { "type": "number" }, "sha256": { "type": "string", "description": "\u5B9E\u9645\u5E26\u5165\u6587\u672C\u7684 SHA-256\uFF1A\u540C\u6837\u957F\u5EA6\u3001\u4E0D\u540C\u5185\u5BB9\u4E5F\u5206\u5F97\u5F00\u3002" }, "autoArea": { "type": "string", "enum": ["absent", "included"], "description": "\u81EA\u52A8\u6574\u7406\u533A\u662F\u5426\u6574\u6BB5\u5E26\u5165\uFF08\u9879\u76EE\u8BB0\u5FC6\u8D85\u51FA\u4E0A\u9650\u65F6\uFF0C\u5B83\u4F18\u5148\u4E8E\u4EBA\u5199\u5185\u5BB9\u7684\u5C3E\u90E8\uFF09\u3002" } }, "required": ["path", "status", "bytes", "chars", "sha256"], "additionalProperties": true }, "project": { "type": "object", "properties": { "path": { "type": "string" }, "status": { "type": "string", "enum": ["absent", "empty", "present", "truncated", "unreadable"] }, "bytes": { "type": "number", "description": "\u5B9E\u9645\u5E26\u5165\u7684 UTF-8 \u5B57\u8282\u6570\u4E0E\u5B57\u7B26\u6570\uFF08code points\uFF09\u3002" }, "chars": { "type": "number" }, "sha256": { "type": "string", "description": "\u5B9E\u9645\u5E26\u5165\u6587\u672C\u7684 SHA-256\uFF1A\u540C\u6837\u957F\u5EA6\u3001\u4E0D\u540C\u5185\u5BB9\u4E5F\u5206\u5F97\u5F00\u3002" }, "autoArea": { "type": "string", "enum": ["absent", "included"], "description": "\u81EA\u52A8\u6574\u7406\u533A\u662F\u5426\u6574\u6BB5\u5E26\u5165\uFF08\u9879\u76EE\u8BB0\u5FC6\u8D85\u51FA\u4E0A\u9650\u65F6\uFF0C\u5B83\u4F18\u5148\u4E8E\u4EBA\u5199\u5185\u5BB9\u7684\u5C3E\u90E8\uFF09\u3002" } }, "required": ["path", "status", "bytes", "chars", "sha256"], "additionalProperties": true } }, "required": ["at", "capBytes", "global", "project"], "additionalProperties": true } } }, "required": ["sessionId", "entries"], "additionalProperties": true }] }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 225, "column": 3 }
    },
    "workbenchInspector/memorySuggestions": {
      service: "workbenchInspector",
      description: "\u7B49\u7528\u6237\u786E\u8BA4\u7684\u5168\u5C40\u8BB0\u5FC6\u5EFA\u8BAE\uFF08\u6765\u81EA\u5F52\u6863\u6574\u7406\uFF09\u3002",
      invocation: { kind: "direct" },
      parameters: [],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/memorySuggestions:result",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_memorySuggestions_result$schema,
        description: "\u5EFA\u8BAE\u5217\u8868\u3002",
        jsonSchema: { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "string" }, "text": { "type": "string" }, "sessionId": { "type": "string" }, "at": { "type": "string" } }, "required": ["id", "text", "sessionId", "at"], "additionalProperties": true } }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 197, "column": 3 }
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
        jsonSchema: { "type": "object", "properties": { "root": { "type": "string" }, "status": { "type": "object", "properties": { "clean": { "type": "boolean", "description": "True when the work tree matches HEAD and the index (no entries at all)." }, "head": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["branch", "detached", "unborn"] }, "name": { "type": "string" }, "oid": { "type": "string" } }, "required": ["kind", "name"], "additionalProperties": true, "description": "HEAD fact from the `# branch.*` headers." }, "upstream": { "type": "object", "properties": { "ref": { "type": "string" }, "ahead": { "type": "number" }, "behind": { "type": "number" } }, "required": ["ref", "ahead", "behind"], "additionalProperties": true, "description": "Upstream ref plus ahead/behind from `# branch.upstream` / `# branch.ab`." }, "entries": { "type": "array", "items": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["conflict", "staged", "unstaged", "untracked"], "description": "Which surface reports the change: `conflict` for unmerged records (`u`), `untracked` for `?` records, `staged` when the index column differs from `.`, `unstaged` when only the work-tree column differs." }, "path": { "type": "string", "description": "Path relative to the repo root." }, "origPath": { "type": "string", "description": "Original path for a rename/copy (the `2` record's second path)." }, "x": { "type": "string", "enum": [".", "A", "M", "D", "R", "C", "U", "T", "?", "AM", "AD", "AU", "AA", "DD", "DU", "UA", "UD", "UU"], "description": "Index status column (`X` of `XY`)." }, "y": { "type": "string", "enum": [".", "A", "M", "D", "R", "C", "U", "T", "?", "AM", "AD", "AU", "AA", "DD", "DU", "UA", "UD", "UU"], "description": "Work-tree status column (`Y` of `XY`)." }, "score": { "type": "string", "description": "Rename/copy similarity score (`R100` / `C75`), when present." } }, "required": ["kind", "path", "x", "y"], "additionalProperties": true }, "description": "Every changed path, in porcelain v2 record order." } }, "required": ["clean", "head", "entries"], "additionalProperties": true }, "remotes": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "Remote name as configured (`origin`)." }, "fetchUrl": { "type": "string", "description": "The URL git fetches from." }, "pushUrl": { "type": "string", "description": "The URL git pushes to, when it differs from the fetch URL." } }, "required": ["name", "fetchUrl"], "additionalProperties": true } }, "commits": { "type": "array", "items": { "type": "object", "properties": { "sha": { "type": "string", "description": "Full commit SHA." }, "subject": { "type": "string", "description": "First line of the commit message." }, "author": { "type": "string", "description": "Author name as recorded." }, "time": { "type": "number", "description": "Committer timestamp in Unix milliseconds." } }, "required": ["sha", "subject", "author", "time"], "additionalProperties": true } }, "worktrees": { "type": "array", "items": { "type": "object", "properties": { "statusError": { "type": "string", "description": "A failed status read is unknown, not a clean work tree." }, "current": { "type": "boolean", "description": "True when the Session's repository root is this work tree." }, "changedPaths": { "type": "array", "items": { "type": "string" }, "description": "Repository-relative paths changed in that work tree (staged, unstaged, untracked, conflict); empty when clean, unreadable, or bare." }, "path": { "type": "string", "description": "Absolute work-tree path." }, "head": { "type": "string", "description": "HEAD oid of that work tree." }, "branch": { "type": "string", "description": "Branch checked out there, when not detached." }, "detached": { "type": "boolean", "description": "True when the work tree is detached or unborn." }, "bare": { "type": "boolean", "description": "True for the bare repository itself." } }, "required": ["current", "changedPaths", "path", "head", "detached", "bare"], "additionalProperties": true } } }, "required": ["root", "status", "remotes", "commits", "worktrees"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 559, "column": 9 }
    },
    "workbenchInspector/resolveMemorySuggestion": {
      service: "workbenchInspector",
      description: "\u4ECE\u5217\u8868\u91CC\u62FF\u6389\u4E00\u6761\u5EFA\u8BAE\uFF1A\u7528\u6237\u5DF2\u7ECF\u628A\u5B83\u52A0\u8FDB\u5168\u5C40\u8BB0\u5FC6\uFF08\u7531\u684C\u9762\u7684\u5168\u5C40\u8BB0\u5FC6\u4FDD\u5B58\u547D\u4EE4\u5199\u5165\uFF09\uFF0C\u6216\u8005\u5FFD\u7565\u4E86\u5B83\u3002 \u5EFA\u8BAE\u6587\u4EF6\u53EA\u7531\u672C\u8FDB\u7A0B\u8BFB\u5199\u3002",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "id",
          description: "\u5EFA\u8BAE id\u3002",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/resolveMemorySuggestion:id",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/resolveMemorySuggestion:id",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/resolveMemorySuggestion:result",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_resolveMemorySuggestion_result$schema,
        description: "\u662F\u5426\u627E\u5230\u5E76\u62FF\u6389\u4E86\u3002",
        jsonSchema: { "type": "boolean" }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 212, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 385, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 404, "column": 9 }
    },
    "workbenchInspector/setArchiveMemorySettings": {
      service: "workbenchInspector",
      description: "\u6539\u5F52\u6863\u6574\u7406\u7684\u5F00\u5173\u6216\u6807\u8BB0\u9996\u6B21\u8BF4\u660E\u5DF2\u8BFB\u3002",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "auto",
          description: "\u5F52\u6863\u65F6\u81EA\u52A8\u6574\u7406\uFF1Bnull = \u4E0D\u6539\u3002",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/setArchiveMemorySettings:auto",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_0$schema,
            jsonSchema: { "oneOf": [{ "type": "null", "const": null }, { "type": "boolean", "enum": [false, true] }] }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/setArchiveMemorySettings:auto",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_0_strict$schema,
            jsonSchema: { "oneOf": [{ "type": "null", "const": null }, { "type": "boolean", "enum": [false, true] }] }
          }
        },
        {
          name: "noticeSeen",
          description: "\u9996\u6B21\u8BF4\u660E\u5DF2\u8BFB\uFF1Bnull = \u4E0D\u6539\u3002",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/setArchiveMemorySettings:noticeSeen",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_1$schema,
            jsonSchema: { "oneOf": [{ "type": "null", "const": null }, { "type": "boolean", "enum": [false, true] }] }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/setArchiveMemorySettings:noticeSeen",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_parameter_1_strict$schema,
            jsonSchema: { "oneOf": [{ "type": "null", "const": null }, { "type": "boolean", "enum": [false, true] }] }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol#workbenchInspector/setArchiveMemorySettings:result",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_setArchiveMemorySettings_result$schema,
        description: "\u6539\u540E\u7684\u8BBE\u7F6E\u3002",
        jsonSchema: { "type": "object", "properties": { "auto": { "type": "boolean", "description": "\u5F52\u6863\u65F6\u81EA\u52A8\u6574\u7406\uFF08\u4F1A\u8C03\u7528\u4E00\u6B21\u5F53\u524D\u6A21\u578B\u670D\u52A1\uFF0C\u53EF\u80FD\u8BA1\u8D39\uFF09\u3002\u53EA\u6709 noticeSeen \u4E4B\u540E\u624D\u771F\u7684\u81EA\u52A8\u8DD1\u3002" }, "noticeSeen": { "type": "boolean", "description": "\u9996\u6B21\u8BF4\u660E\u662F\u5426\u5DF2\u7ECF\u770B\u8FC7\uFF1A\u6CA1\u770B\u8FC7\u4E4B\u524D\uFF0C\u5F52\u6863\u53EA\u8BB0 needs-consent\uFF0C\u4E0D\u8C03\u7528\u6A21\u578B\u3002" } }, "required": ["auto", "noticeSeen"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 184, "column": 3 }
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
        jsonSchema: { "type": "object", "properties": { "root": { "type": "string" }, "status": { "type": "object", "properties": { "clean": { "type": "boolean", "description": "True when the work tree matches HEAD and the index (no entries at all)." }, "head": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["branch", "detached", "unborn"] }, "name": { "type": "string" }, "oid": { "type": "string" } }, "required": ["kind", "name"], "additionalProperties": true, "description": "HEAD fact from the `# branch.*` headers." }, "upstream": { "type": "object", "properties": { "ref": { "type": "string" }, "ahead": { "type": "number" }, "behind": { "type": "number" } }, "required": ["ref", "ahead", "behind"], "additionalProperties": true, "description": "Upstream ref plus ahead/behind from `# branch.upstream` / `# branch.ab`." }, "entries": { "type": "array", "items": { "type": "object", "properties": { "kind": { "type": "string", "enum": ["conflict", "staged", "unstaged", "untracked"], "description": "Which surface reports the change: `conflict` for unmerged records (`u`), `untracked` for `?` records, `staged` when the index column differs from `.`, `unstaged` when only the work-tree column differs." }, "path": { "type": "string", "description": "Path relative to the repo root." }, "origPath": { "type": "string", "description": "Original path for a rename/copy (the `2` record's second path)." }, "x": { "type": "string", "enum": [".", "A", "M", "D", "R", "C", "U", "T", "?", "AM", "AD", "AU", "AA", "DD", "DU", "UA", "UD", "UU"], "description": "Index status column (`X` of `XY`)." }, "y": { "type": "string", "enum": [".", "A", "M", "D", "R", "C", "U", "T", "?", "AM", "AD", "AU", "AA", "DD", "DU", "UA", "UD", "UU"], "description": "Work-tree status column (`Y` of `XY`)." }, "score": { "type": "string", "description": "Rename/copy similarity score (`R100` / `C75`), when present." } }, "required": ["kind", "path", "x", "y"], "additionalProperties": true }, "description": "Every changed path, in porcelain v2 record order." } }, "required": ["clean", "head", "entries"], "additionalProperties": true } }, "required": ["root", "status"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 441, "column": 9 }
    },
    "workbenchInspector/summarizeSession": {
      service: "workbenchInspector",
      description: "\u624B\u52A8\u6574\u7406\u4E00\u6BB5\u4F1A\u8BDD\uFF08\u4E0D\u770B\u957F\u5EA6\u95E8\u69DB\uFF09\uFF1A\u77ED\u4F1A\u8BDD\u3001\u4E0A\u6B21\u5931\u8D25\u3001\u6574\u7406\u533A\u6E05\u7406\u4E4B\u540E\u90FD\u4ECE\u8FD9\u91CC\u518D\u6765\u4E00\u6B21\u3002 \u5BF9\u4ECD\u5728\u4F7F\u7528\u7684\u4F1A\u8BDD\u4E5F\u53EF\u4EE5\uFF1A\u53EA\u8BFB\u3001\u4E0D\u5E26\u5DE5\u5177\uFF0C\u4E0D\u6539\u4F1A\u8BDD\u672C\u8EAB\u3002\u8BF7\u6C42\u88AB\u53D6\u6D88\uFF08\u9875\u9762\u5173\u95ED\uFF09\u5C31\u505C\u6389\u8FD9\u4E00\u6B21\u3002",
      invocation: { kind: "direct" },
      parameters: [
        {
          name: "sessionId",
          description: "\u4F1A\u8BDD\u3002",
          source: "json",
          codec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_parameter_0$schema,
            jsonSchema: { "type": "string" }
          },
          strictCodec: {
            mode: "strict",
            typeSymbol: "@deepseek-ai/dsh-session/types#SessionId",
            create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_parameter_0_strict$schema,
            jsonSchema: { "type": "string" }
          }
        }
      ],
      cancellation: { parameter: "signal" },
      result: {
        mode: "strict",
        typeSymbol: "@see-sol-lab/dsh-qol/types#ArchiveMemoryRecord",
        create: _deepseek_ai_dsh_workbench_inspector_workbenchInspector_summarizeSession_result$schema,
        description: "\u672C\u6B21\u7684\u8BB0\u5F55\u3002",
        jsonSchema: { "type": "object", "properties": { "schemaVersion": { "type": "number", "const": 1 }, "sessionId": { "type": "string" }, "status": { "type": "string", "enum": ["cancelled", "failed", "running", "invalid", "no-project", "written", "none", "needs-consent", "too-short", "nothing-new", "empty", "protected", "no-model", "full", "malformed", "conflict", "interrupted", "gone"] }, "manual": { "type": "boolean", "description": "\u7528\u6237\u624B\u52A8\u53D1\u8D77\uFF08\u4E0D\u770B\u957F\u5EA6\u95E8\u69DB\uFF09\u3002" }, "processedThroughSeq": { "type": "number", "description": "\u5DF2\u7ECF\u5904\u7406\u8FC7\u7684\u6765\u6E90\u8FB9\u754C\uFF1A\u8FD9\u4E00 seq \u53CA\u4E4B\u524D\u7684\u8F6E\u6B21\u4E0D\u4F1A\u518D\u88AB\u6574\u7406\u3002\u53EA\u5728 written / none \u65F6\u524D\u8FDB\u3002" }, "startedAt": { "type": "string" }, "finishedAt": { "type": "string" }, "input": { "type": "object", "properties": { "userTurns": { "type": "number" }, "chars": { "type": "number" }, "throughSeq": { "type": "number" }, "wholeUserTurns": { "type": "number" }, "wholeChars": { "type": "number" } }, "required": ["userTurns", "chars", "throughSeq", "wholeUserTurns", "wholeChars"], "additionalProperties": true, "description": "\u672C\u6B21\u65B0\u589E\u6750\u6599\u4E0E\u6574\u6BB5\u4F1A\u8BDD\u7684\u89C4\u6A21\uFF08\u53EA\u6570\u4EBA\u8BF4\u7684\u8BDD\u4E0E\u52A9\u624B\u6B63\u6587\uFF09\u3002" }, "coverage": { "type": "object", "properties": { "fromSeq": { "oneOf": [{ "type": "null", "const": null }, { "type": "number" }] }, "throughSeq": { "type": "number" }, "complete": { "type": "boolean" }, "chars": { "type": "number" } }, "required": ["fromSeq", "throughSeq", "complete", "chars"], "additionalProperties": true, "description": "\u5B9E\u9645\u4EA4\u7ED9\u6A21\u578B\u7684\u5BF9\u8BDD\u8303\u56F4\uFF1A\u592A\u957F\u65F6\u53EA\u7ED9\u6700\u8FD1\u7684\u90E8\u5206\uFF08complete = false\uFF09\u3002" }, "memoryInput": { "type": "object", "properties": { "sha256": { "type": "string" }, "chars": { "type": "number" }, "complete": { "type": "boolean" }, "text": { "type": "string" } }, "required": ["sha256", "chars", "complete", "text"], "additionalProperties": true, "description": "\u5F53\u65F6\u4EA4\u7ED9\u6A21\u578B\u7684\u9879\u76EE\u8BB0\u5FC6\uFF08Sol P2-08\uFF1A\u6574\u7406\u53EF\u8FFD\u6EAF\uFF09\uFF1A\u8BFB\u5230\u7684\u5168\u6587\u6458\u8981\u4E0E\u5B57\u6570\uFF0C\u4EE5\u53CA\u5B9E\u9645\u7ED9\u6A21\u578B\u7684\u90A3\u6BB5\u6587\u672C \uFF08\u6709\u754C\uFF1B\u8D85\u957F\u65F6\u53EA\u542B\u5F00\u5934\u4E0E\u6574\u4E2A\u81EA\u52A8\u6574\u7406\u533A\uFF09\u3002" }, "budgetChars": { "type": "number", "description": "\u672C\u6B21\u8BF7\u6C42\u7684\u5B57\u7B26\u9884\u7B97\uFF08\u6309\u914D\u7F6E\u4E0E\u6A21\u578B\u4E0A\u4E0B\u6587\u6536\u7D27\u540E\u7684\u503C\uFF09\u3002" }, "cwd": { "type": "string" }, "projectPath": { "type": "string" }, "route": { "type": "object", "properties": { "provider": { "type": "string" }, "model": { "type": "string" } }, "required": ["provider", "model"], "additionalProperties": true }, "finish": { "type": "string", "description": "\u6A21\u578B\u7684\u7ED3\u675F\u539F\u56E0\uFF08stop / tool-calls / max-tokens \u2026\uFF09\u3002" }, "output": { "type": "string", "description": "\u6A21\u578B\u539F\u6837\u8F93\u51FA\uFF08\u4FBF\u4E8E\u590D\u9A8C\uFF09\u3002" }, "added": { "type": "array", "items": { "type": "string" }, "description": "\u5199\u8FDB\u9879\u76EE\u8BB0\u5FC6\u7684\u6761\u76EE\u3002" }, "superseded": { "type": "array", "items": { "type": "string" }, "description": "\u88AB\u672C\u6B21\u6761\u76EE\u53D6\u4EE3\u3001\u6539\u6210\u5220\u9664\u7EBF\u7684\u65E7\u81EA\u52A8\u6761\u76EE\u3002" }, "pending": { "type": "array", "items": { "type": "string" }, "description": "\u6CA1\u5199\u6210\uFF08\u6EE1\u4E86\u3001\u51B2\u7A81\u3001\u6807\u8BB0\u6B8B\u7F3A\u3001\u53D7\u4FDD\u62A4\u3001\u5199\u5931\u8D25\uFF09\u65F6\u8FD9\u6B21\u672C\u6765\u8981\u5199\u7684\u6761\u76EE\u3002" }, "suggestions": { "type": "array", "items": { "type": "string" }, "description": "\u7ED9\u5168\u5C40\u8BB0\u5FC6\u7684\u5EFA\u8BAE\uFF08\u53E6\u5B58\uFF0C\u7B49\u7528\u6237\u786E\u8BA4\uFF09\u3002" }, "suggestionsDropped": { "type": "number", "description": "\u5EFA\u8BAE\u5217\u8868\u5DF2\u6EE1\u3001\u6CA1\u80FD\u653E\u8FDB\u53BB\u7684\u6761\u6570\uFF08\u4E0D\u6084\u6084\u5F53\u6210\u5904\u7406\u5B8C\uFF09\u3002" }, "rejected": { "type": "number", "description": "\u4E0D\u5408\u683C\u5F0F\u3001\u8D85\u9650\u6216\u50CF\u51ED\u636E\u800C\u88AB\u4E22\u6389\u7684\u884C\u6570\u3002" }, "error": { "type": "string" } }, "required": ["schemaVersion", "sessionId", "status", "manual", "processedThroughSeq", "startedAt"], "additionalProperties": true }
      },
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 171, "column": 9 }
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
      sourceLocation: { "file": "packages/api/workbench-inspector/src/index.ts", "line": 326, "column": 9 }
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
    rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: caption, children: t("git.historyEmpty") }) : rows.map((row2) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { ...caption, ...mono, lineHeight: "14px" }, children: t("row.atTime", { tool: row2.toolName, time: clock(row2.time), seq: row2.seq }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: {
        fontSize: 13,
        lineHeight: "18px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        color: row2.error ? "var(--dsw-alias-state-error-primary)" : "var(--dsw-alias-label-primary)"
      }, children: row2.summary })
    ] }, `${row2.toolName}:${row2.seq}`)),
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

// src/client/workbench/cards/tool-rows.tsx
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
var workbenchInject = ["slots", "locale", "remote", "sessions", "conversation"];
async function applyWorkbench(ctx) {
  const unmountInspector = await ctx.remote.$mount(typert_remote_client_default);
  ctx.effect(() => () => {
    void unmountInspector();
  }, "dsh-qol: inspector remote");
  ctx.effect(() => ctx.locale.register(NS_TOOLS, { zh: zh3, en: en3 }), "dsh-qol: tool dictionaries");
  ctx.effect(() => ctx.locale.register(NS_INSPECTOR, { zh: zh4, en: en4 }), "dsh-qol: inspector dictionaries");
  ctx.effect(() => ctx.locale.register(NS_MEMORY, { zh: zh2, en: en2 }), "dsh-qol: memory dictionaries");
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
  });
}

// src/client/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  return (0, import_react8.useSyncExternalStore)((listener) => form.subscribe(listener), () => form.getSnapshot());
}
function Switch(props) {
  const { checked, disabled } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: { ...S.knob, left: checked ? "18px" : "2px" } })
    }
  );
}
function ItemRow(props) {
  const { ctx, t, item } = props;
  const form = ctx.configForms.get(item.entry);
  const snap = useForm(form);
  const [busy, setBusy] = (0, import_react8.useState)(false);
  const [failed, setFailed] = (0, import_react8.useState)(false);
  const label = t(`item.${item.key}`);
  let status;
  let control = null;
  if (snap.status === "loading") status = t("state.loading");
  else if (snap.status === "unavailable") status = t("state.unavailable");
  else {
    const on = snap.value !== void 0 && item.isOn(snap.value);
    status = snap.writable ? t(on ? "state.on" : "state.off") : t("state.readonly");
    control = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: { ...S.row, ...props.first ? {} : S.rowDivider }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: S.text, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: S.note, children: t(`item.${item.key}.desc`) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: S.note, children: status }),
      failed ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: S.error, children: t("error.save") }) : null
    ] }),
    control
  ] });
}
function makeSection(ctx, t) {
  return function QolSection() {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: S.section, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: S.title, children: t("privacy.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: S.note, children: t("privacy.intro") }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: S.card, children: ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ItemRow, { ctx, t, item, first: i === 0 }, item.key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: S.note, children: t("privacy.uninstall") })
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
}

    Object.defineProperty(module.exports, Symbol.toStringTag, { value: 'Module' })
    return module.exports
  },
})
