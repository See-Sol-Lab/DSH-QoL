import {
  dshHome
} from "./chunks/chunk-TZ7PW3YJ.js";
import "./chunks/chunk-QDQBS6CD.js";

// src/index.ts
import z from "@deepseek-ai/schemastery";
import { AsyncResource } from "node:async_hooks";

// src/host/model-sight.ts
var MODEL_SIGHT_CONTEXT_NAME = "dsh-qol:model-sight";
var keyOf = (provider, model) => `${provider}
${model}`;
function modelSightText(sight, sighted) {
  if (sight.seesImages === void 0) return "";
  if (sight.seesImages) {
    return `Current model: ${sight.name} \u2014 it accepts images. Screenshots and image attachments are readable to you.`;
  }
  const alternatives = sighted.length === 0 ? "" : ` (in this setup: ${sighted.join(", ")})`;
  return [
    `Current model: ${sight.name} \u2014 it does NOT accept images (text only).`,
    "A browser screenshot still saves a file, but you cannot read its content; image attachments are rejected for this model.",
    `If the user asks you to look at a website, a page, a screenshot or a picture, STOP before touching the browser: say in one sentence that this model cannot see images and ask whether to switch to a model with image input${alternatives}. Only continue with text tools (browser_snapshot) if the user says text is enough.`,
    "Do not retry the screenshot."
  ].join(" ");
}
function registerModelSight(ctx, llm) {
  const known = /* @__PURE__ */ new Map();
  const sightedByProvider = /* @__PURE__ */ new Map();
  const pending = /* @__PURE__ */ new Set();
  const learnCatalog = async (provider) => {
    try {
      const models = await llm.listModels(provider);
      const sighted = [];
      for (const model of models) {
        const seesImages = model.inputModalities === void 0 ? void 0 : model.inputModalities.includes("image");
        known.set(keyOf(provider, model.id), { name: model.name, seesImages });
        if (seesImages === true) sighted.push(model.name);
      }
      sightedByProvider.set(provider, sighted);
    } catch {
    }
  };
  const learnModel = async (provider, model) => {
    const key = keyOf(provider, model);
    if (pending.has(key)) return;
    pending.add(key);
    try {
      const info = await llm.resolveModelInfo(provider, model);
      known.set(key, {
        name: info.name,
        seesImages: info.inputModalities === void 0 ? void 0 : info.inputModalities.includes("image")
      });
    } catch {
      known.set(key, null);
      setTimeout(() => {
        known.delete(key);
      }, 6e4).unref();
    } finally {
      pending.delete(key);
    }
  };
  for (const provider of llm.listProviders()) void learnCatalog(provider.id);
  return ctx.on("system-prompt/assemble", async (_assembly, _context, next) => {
    const assembled = await next();
    const { provider, model } = assembled.variables;
    if (provider === void 0 || model === void 0) return assembled;
    const key = keyOf(provider, model);
    if (!known.has(key)) {
      void learnModel(provider, model);
      return assembled;
    }
    const sight = known.get(key);
    if (sight === null || sight === void 0) return assembled;
    const text = modelSightText(sight, sightedByProvider.get(provider) ?? []);
    if (text === "") return assembled;
    return { ...assembled, contexts: [...assembled.contexts, { name: MODEL_SIGHT_CONTEXT_NAME, text }] };
  });
}

// src/low-label.ts
import { execFile, execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { EOL, tmpdir } from "node:os";
import { join, sep } from "node:path";

// assets/revoke-low-label.ps1
var revoke_low_label_default = `# DSH \u751F\u6D3B\u8D28\u91CF\u5305\uFF1A\u64A4\u6389\u5B98\u65B9\u6C99\u7BB1\u7559\u5728\u5DE5\u4F5C\u533A\u6839\u76EE\u5F55\u4E0A\u7684\u4E09\u6837\u4E1C\u897F\u3002
#   1) \u6C99\u7BB1\u80FD\u529B\u8EAB\u4EFD S-1-4-<n>-<n> \u7684\u5199\u5165\u6388\u6743\uFF08\u5B98\u65B9\u7684\u5DE5\u4F5C\u533A SID \u5F62\u72B6\uFF09
#   2) Everyone \u7684\u300C\u7981\u6B62\u5220\u9664\u5B50\u9879\u300D\u62D2\u7EDD\u6761\u76EE\uFF08\u53EA\u8BA4\u5B98\u65B9\u8FD9\u4E00\u6761\uFF0C\u7528\u6237\u81EA\u5DF1\u8BBE\u7684\u5176\u4ED6\u62D2\u7EDD\u4E0D\u52A8\uFF09
#   3) Low \u5B8C\u6574\u6027\u6807\u7B7E \u2192 \u6539\u56DE Medium\uFF08\u666E\u901A\u7A0B\u5E8F\u7684\u9ED8\u8BA4\u7EA7\u522B\uFF09
# \u5176\u4ED6\u6743\u9650\u539F\u6837\u4FDD\u7559\u3002\u53EA\u5904\u7406\u6839\u76EE\u5F55\u4E0A\u300C\u663E\u5F0F\u300D\u7684\u8FD9\u51E0\u6837\uFF1B\u5B50\u9879\u90FD\u662F\u7EE7\u627F\u6765\u7684\uFF0C\u6839\u6539\u4E86\u5C31\u8DDF\u7740\u53D8\u3002
# \u6CA1\u6709\u6807\u8BB0\u5C31\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF08\u4E0D\u91CD\u7B97\u6574\u68F5\u76EE\u5F55\u6811\uFF09\u3002\u52A8\u624B\u524D\u5148 icacls /save \u5907\u4EFD\u6839\u76EE\u5F55\u6743\u9650\uFF0C
# \u53EF\u7528 \`icacls <\u6839\u76EE\u5F55\u7684\u4E0A\u4E00\u7EA7> /restore <\u5907\u4EFD\u6587\u4EF6>\` \u8FD8\u539F\u3002
# \u65B9\u6CD5\u6765\u81EA 2026-09 \u6E05\u7406 E:\\Priest \u7684\u5B9E\u6D4B\u811A\u672C\uFF1B\u7531\u7CFB\u7EDF\u81EA\u5E26\u7684 Windows PowerShell 5.1 \u8FD0\u884C\u3002
# \u4E00\u6B21\u8FDB\u7A0B\u5904\u7406\u5168\u90E8\u5DE5\u4F5C\u533A\uFF08Host \u9000\u51FA\u65F6\u5C11\u7B49\u51E0\u6B21 PowerShell \u542F\u52A8\uFF09\uFF0C\u6BCF\u4E2A\u5DE5\u4F5C\u533A\u8F93\u51FA\u4E00\u884C JSON\u3002
param(
  [Parameter(Mandatory = $true)][string]$BackupDir,
  [Parameter(Mandatory = $true, ValueFromRemainingArguments = $true)][string[]]$Roots
)
$ErrorActionPreference = 'Stop'
# \u8F93\u51FA\u7ED9 Node \u6309 UTF-8 \u8BFB\uFF1B\u4E0D\u8BBE\u7684\u8BDD Windows PowerShell 5.1 \u7528\u7CFB\u7EDF\u4EE3\u7801\u9875\uFF08\u4E2D\u6587\u7CFB\u7EDF\u662F GBK\uFF09\uFF0C\u4E2D\u6587\u8DEF\u5F84\u4F1A\u4E71\u7801\u3002
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$stamp = (Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH-mm-ss-fffZ')

function Revoke([string]$Root) {
  $result = [ordered]@{ root = $Root; marked = $false; removedSids = @(); denyRemoved = 0; labelReset = $false; backup = $null; error = $null }
  try {
    if (-not (Test-Path -LiteralPath $Root -PathType Container)) { throw "not a directory: $Root" }
    $dir = Get-Item -LiteralPath $Root
    $acl = $dir.GetAccessControl('Access')

    $everyone = New-Object System.Security.Principal.SecurityIdentifier 'S-1-1-0'
    $explicit = @($acl.GetAccessRules($true, $false, [System.Security.Principal.SecurityIdentifier]))
    $sandboxSids = @($explicit | Where-Object { $_.AccessControlType -eq 'Allow' -and $_.IdentityReference.Value -match '^S-1-4-\\d+-\\d+$' } | ForEach-Object { $_.IdentityReference.Value } | Sort-Object -Unique)
    $deleteChild = [System.Security.AccessControl.FileSystemRights]::DeleteSubdirectoriesAndFiles
    $denies = @($explicit | Where-Object { $_.AccessControlType -eq 'Deny' -and $_.IdentityReference -eq $everyone -and $_.FileSystemRights -eq $deleteChild })
    # \u6839\u76EE\u5F55\u4E0A\u663E\u5F0F\u7684 Low \u6807\u7B7E\uFF08\u7EE7\u627F\u6765\u7684\u4F1A\u5E26 (I)\uFF0C\u90A3\u662F\u4E0A\u7EA7\u76EE\u5F55\u7684\u4E8B\uFF0C\u4E0D\u5728\u8FD9\u91CC\u6539\uFF09\u3002
    $lowLines = @(& icacls $Root | Where-Object { $_ -match 'Mandatory Label\\\\Low Mandatory Level' })
    $label = @($lowLines | Where-Object { $_ -notmatch '\\(I\\)' }).Count -gt 0

    if ($sandboxSids.Count -gt 0 -or $denies.Count -gt 0 -or $label) {
      $result.marked = $true
      $name = ($Root -replace '[\\\\/:]+', '_') -replace '^_+|_+$', ''
      $backup = Join-Path $BackupDir "$name-$stamp.txt"
      New-Item -ItemType Directory -Force -Path $BackupDir | Out-Null
      & icacls $Root /save $backup /C | Out-Null
      $result.backup = $backup
      if ($sandboxSids.Count -gt 0 -or $denies.Count -gt 0) {
        foreach ($sid in $sandboxSids) { $acl.PurgeAccessRules((New-Object System.Security.Principal.SecurityIdentifier $sid)) }
        foreach ($rule in $denies) { [void]$acl.RemoveAccessRuleSpecific($rule) }
        $dir.SetAccessControl($acl)
        $result.removedSids = $sandboxSids
        $result.denyRemoved = $denies.Count
      }
      if ($label) {
        & icacls $Root /setintegritylevel '(OI)(CI)M' /C /Q | Out-Null
        if ($LASTEXITCODE -ne 0) { throw "icacls setintegritylevel exited $LASTEXITCODE" }
        $result.labelReset = $true
      }
    }
  } catch {
    $result.error = $_.Exception.Message
  }
  $result | ConvertTo-Json -Compress
}

foreach ($root in $Roots) { Revoke $root }
`;

// src/low-label.ts
function trimSeparators(path) {
  let end = path.length;
  while (end > 0 && (path[end - 1] === "/" || path[end - 1] === sep)) end -= 1;
  return path.slice(0, end);
}
function findCwd(value) {
  if (value === null || typeof value !== "object") return void 0;
  const record2 = value;
  if (typeof record2["cwd"] === "string") return record2["cwd"];
  for (const child of Object.values(record2)) {
    const found = findCwd(child);
    if (found !== void 0) return found;
  }
  return void 0;
}
function collectRoots(home, registered) {
  const seen = /* @__PURE__ */ new Map();
  const add = (path) => {
    if (typeof path !== "string" || path === "") return;
    const trimmed = trimSeparators(path);
    const key = trimmed.toLowerCase();
    if (!seen.has(key)) seen.set(key, trimmed);
  };
  for (const path of registered) add(path);
  const cacheDir = join(home, "storages", "session_projcache", "sessions");
  try {
    for (const name2 of readdirSync(cacheDir)) {
      if (!name2.endsWith(".json")) continue;
      try {
        add(findCwd(JSON.parse(readFileSync(join(cacheDir, name2), "utf8"))));
      } catch {
      }
    }
  } catch {
  }
  const memory = join(home, "deepseekgui", "low-label-roots.json");
  try {
    const remembered = JSON.parse(readFileSync(memory, "utf8"));
    if (Array.isArray(remembered)) for (const path of remembered) add(path);
  } catch {
  }
  const all = [...seen.values()];
  try {
    mkdirSync(join(home, "deepseekgui"), { recursive: true });
    writeFileSync(memory, `${JSON.stringify(all, null, 2)}${EOL}`, "utf8");
  } catch {
  }
  return all.filter((path) => existsSync(path));
}
var POWERSHELL = join(process.env.SystemRoot ?? "C:\\Windows", "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
function psArgs(name2, text, args) {
  const script = join(tmpdir(), name2);
  writeFileSync(script, text, "utf8");
  return ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File", script, ...args];
}
function lastJsonLine(stdout, failure) {
  const line = stdout.trim().split(/\r?\n/u).at(-1) ?? "";
  try {
    return { value: JSON.parse(line) };
  } catch {
    return { error: failure instanceof Error ? failure.message : line === "" ? "no output" : line };
  }
}
function argsFor(roots, home) {
  return psArgs("dsh-qol-revoke-low-label.ps1", revoke_low_label_default, ["-BackupDir", join(home, "deepseekgui", "acl-backups"), ...roots]);
}
function parseAll(roots, stdout, failure) {
  const lines = [];
  for (const line of stdout.split(/\r?\n/u)) {
    try {
      const result = JSON.parse(line);
      if (typeof result?.root === "string") lines.push(result);
    } catch {
    }
  }
  const error = failure instanceof Error ? failure.message : "no output";
  return roots.map((root, index) => {
    const result = lines[index];
    return result === void 0 ? { root, marked: false, removedSids: [], denyRemoved: 0, labelReset: false, backup: null, error } : { ...result, root };
  });
}
function record(home, reason, results) {
  try {
    const dir = join(home, "deepseekgui");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "low-label-cleanup.json"), JSON.stringify({ at: (/* @__PURE__ */ new Date()).toISOString(), reason, results }, null, 2) + "\n", "utf8");
  } catch {
  }
}
async function revokeLowLabels(roots, home) {
  const results = roots.length === 0 ? [] : await new Promise((resolve2) => {
    execFile(POWERSHELL, argsFor(roots, home), { timeout: roots.length * 10 * 6e4, windowsHide: true }, (error, stdout) => {
      resolve2(parseAll(roots, String(stdout), error ?? void 0));
    });
  });
  record(home, "startup", results);
  return results;
}
function revokeLowLabelsSync(roots, home) {
  let results = [];
  if (roots.length > 0) {
    try {
      results = parseAll(roots, execFileSync(POWERSHELL, argsFor(roots, home), { timeout: roots.length * 2 * 6e4, windowsHide: true, encoding: "utf8" }));
    } catch (error) {
      results = parseAll(roots, String(error.stdout ?? ""), error);
    }
  }
  record(home, "exit", results);
  return results;
}

// src/workspace-access.ts
import { execFile as execFile2 } from "node:child_process";
import { existsSync as existsSync2, mkdirSync as mkdirSync2, writeFileSync as writeFileSync2 } from "node:fs";
import { join as join2, parse, resolve } from "node:path";

// assets/grant-workspace-access.ps1
var grant_workspace_access_default = "param([Parameter(Mandatory = $true)][string]$Root)\n# \u7ED9\u5F53\u524D\u7528\u6237\u8865\u4E0A\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939\u7684\u5B8C\u5168\u63A7\u5236\uFF08\u7EE7\u627F\u5230\u5B50\u9879\uFF09\uFF0C\u8BA9\u5B98\u65B9\u6C99\u7BB1\u7B2C\u4E00\u6B21\u6388\u6743\u65F6\n# \u6253\u5F97\u4E0A Low \u6807\u7B7E\u3002\u5DF2\u6709\u5B8C\u5168\u63A7\u5236\u5C31\u4EC0\u4E48\u90FD\u4E0D\u505A\u3002\u8F93\u51FA\u4E00\u884C JSON\u3002\n$ErrorActionPreference = 'Stop'\n$result = [ordered]@{ root = $Root; changed = $false; error = $null }\ntry {\n  $sid = [System.Security.Principal.WindowsIdentity]::GetCurrent().User\n  $dir = Get-Item -LiteralPath $Root -Force\n  $acl = $dir.GetAccessControl('Access')\n  $full = [System.Security.AccessControl.FileSystemRights]::FullControl\n  $inherit = [System.Security.AccessControl.InheritanceFlags]'ContainerInherit, ObjectInherit'\n  $has = $false\n  foreach ($rule in $acl.GetAccessRules($true, $true, [System.Security.Principal.SecurityIdentifier])) {\n    if ($rule.IdentityReference -eq $sid -and $rule.AccessControlType -eq 'Allow' `\n        -and ($rule.FileSystemRights -band $full) -eq $full `\n        -and ($rule.InheritanceFlags -band $inherit) -eq $inherit) { $has = $true; break }\n  }\n  if (-not $has) {\n    $acl.AddAccessRule((New-Object System.Security.AccessControl.FileSystemAccessRule($sid, $full, $inherit, 'None', 'Allow')))\n    $dir.SetAccessControl($acl)\n    $result.changed = $true\n  }\n} catch {\n  $result.error = $_.Exception.Message\n}\n$result | ConvertTo-Json -Compress\n";

// src/workspace-access.ts
function skipped(root) {
  if (!existsSync2(root)) return true;
  const full = resolve(root).toLowerCase();
  if (full === parse(full).root) return true;
  const system = [process.env.SystemRoot, process.env.ProgramFiles, process.env["ProgramFiles(x86)"], process.env.ProgramData];
  return system.some((dir) => dir !== void 0 && dir !== "" && (full + "\\").startsWith(resolve(dir).toLowerCase() + "\\"));
}
function runOne(root) {
  return new Promise((done) => {
    execFile2(
      POWERSHELL,
      psArgs("dsh-qol-grant-workspace-access.ps1", grant_workspace_access_default, ["-Root", root]),
      { timeout: 10 * 6e4, windowsHide: true },
      (error, stdout) => {
        const parsed = lastJsonLine(String(stdout), error ?? void 0);
        done("value" in parsed ? parsed.value : { root, changed: false, error: parsed.error });
      }
    );
  });
}
async function fixWorkspaceAccess(roots, home) {
  const results = [];
  for (const root of roots) if (!skipped(root)) results.push(await runOne(root));
  if (results.length === 0) return results;
  try {
    const dir = join2(home, "deepseekgui");
    mkdirSync2(dir, { recursive: true });
    writeFileSync2(join2(dir, "workspace-access.json"), JSON.stringify({ at: (/* @__PURE__ */ new Date()).toISOString(), results }, null, 2) + "\n", "utf8");
  } catch {
  }
  return results;
}

// src/index.ts
import { EOL as EOL2 } from "node:os";

// assets/qol-sandbox-revoke.md
var qol_sandbox_revoke_default = `# Sandbox permissions (DSH QoL Pack)
The user enabled "Automatically remove the sandbox Low label" in the DSH QoL Pack. Each time DSH starts and exits, the plugin removes what the official Windows sandbox left on workspace folders: the sandbox capability-SID write grant, the Everyone deny-delete-children entry, and the Low integrity label (reset to Medium). The official sandbox adds them again the next time it runs a command in that folder. This is the user's own setting, not a fault.
`;

// assets/qol-sandbox-rules.md
var qol_sandbox_rules_default = 'If a command fails with a sandbox permission error (for example SetNamedSecurityInfoW failed, Win32 5, grantWrite, access denied while preparing the sandbox, or EPERM on the workspace), do NOT change folder permissions yourself and do NOT run a permission diagnosis or repair skill on your own. Stop, show the user the exact error, explain the likely cause in one or two sentences, and let the user decide. Only run the official diagnosis or repair after the user agrees.\n\nSpecial case: "temp grant materialization failed" means the sandbox could not prepare its private temp folder, not the workspace. Each DSH start creates a new random `dsh-*` folder under the system temp directory (the TEMP environment variable) and puts a Low integrity label on it, which needs the user to have Full control (including change owner) on the temp directory. Windows\' default temp directory under the user profile already allows this; a temp directory moved to another drive (for example E:\\Temp) usually does not. The diagnosis or repair skill cannot fix this, because the folder is new every start. Tell the user the cause and give them this command to run themselves in PowerShell, with their temp directory in place of the path: `icacls \'E:\\Temp\' /grant "$(whoami):(OI)(CI)F"`. The alternative is moving TEMP back to the default location. Do not run the command yourself.\n';

// assets/qol-sandbox-access.md
var qol_sandbox_access_default = `The user also enabled "Automatically fix workspace sandbox access" in the DSH QoL Pack. When DSH starts, and within a few seconds after a workspace is added, the plugin gives the user Full control of each workspace folder (inherited by its contents), so the official sandbox's first grant succeeds on other drives such as D: or E:. If a newly added workspace still reports SetNamedSecurityInfoW / Win32 5 on grantWrite, the fix has probably not run yet: tell the user and suggest retrying the command in a few seconds, instead of changing permissions yourself.
`;

// src/index.ts
var name = "dsh-qol";
var inject = ["configEditor"];
var Config = z.object({
  inventory: z.boolean().default(false).volatile(),
  feedback: z.boolean().default(false).volatile(),
  revokeLowLabel: z.boolean().default(true).volatile(),
  skin: z.boolean().default(true).volatile(),
  fixWorkspaceAccess: z.boolean().default(true).volatile(),
  updateCheck: z.boolean().default(true).volatile()
});
var TARGETS = {
  inventory: { entry: "plugin-package-inventory-deepseek", field: "enabled", on: true, off: false },
  feedback: { entry: "session-telemetry-otel", field: "mode", on: "FEEDBACK_ONLY", off: "DISABLED" }
};
function apply(ctx, config) {
  let running = Promise.resolve();
  const outside = AsyncResource.bind((task) => {
    setTimeout(task, 0);
  });
  async function syncOne(key) {
    const target = TARGETS[key];
    const entry = ctx.configEditor.entries().find((item) => item.options.id === target.entry);
    if (entry === void 0) return;
    const want = config[key].get() === true ? target.on : target.off;
    const current = entry.options.config?.[target.field];
    if (current === want) return;
    await ctx.configEditor.edit(entry, (raw) => ({ ...raw, [target.field]: want }));
    console.info(`[dsh-qol] ${target.entry}.${target.field} -> ${JSON.stringify(want)}`);
  }
  function sync() {
    running = running.then(async () => {
      for (const key of Object.keys(TARGETS)) {
        try {
          await syncOne(key);
        } catch (error) {
          console.warn(`[dsh-qol] sync ${key} failed: ${error instanceof Error ? error.message : String(error)}`);
        }
      }
    });
  }
  ctx.on("loader/volatile-update", () => {
    outside(sync);
  });
  outside(sync);
  ctx.inject(["llm"], (scoped) => {
    registerModelSight(scoped, scoped.llm);
  });
  if (process.platform === "win32") {
    applyLowLabelRevoke(ctx, config);
    applyWorkspaceAccess(ctx, config);
    applySandboxNote(ctx, config);
  }
}
var SANDBOX_NOTE_REVOKE = qol_sandbox_revoke_default.trimEnd();
var SANDBOX_NOTE_RULES = qol_sandbox_rules_default.trimEnd();
var SANDBOX_NOTE_ACCESS = qol_sandbox_access_default.trimEnd();
function applySandboxNote(ctx, config) {
  ctx.inject(["systemPrompt"], (scoped) => {
    const systemPrompt = scoped.systemPrompt;
    scoped.effect(() => {
      const disposeVariable = systemPrompt.variable("dsh_qol_sandbox_note", () => [
        config.revokeLowLabel.get() === false ? void 0 : SANDBOX_NOTE_REVOKE,
        config.fixWorkspaceAccess.get() === false ? void 0 : SANDBOX_NOTE_ACCESS,
        SANDBOX_NOTE_RULES
      ].filter((part) => part !== void 0).join(EOL2));
      const disposeSection = systemPrompt.context({ name: "dsh-qol:sandbox", order: 999998, text: "{{dsh_qol_sandbox_note}}" });
      return () => {
        disposeSection();
        disposeVariable();
      };
    }, "dsh-qol: sandbox note");
  });
}
function applyWorkspaceAccess(ctx, config) {
  ctx.inject(["workspaceRegistry"], (scoped) => {
    const home = dshHome();
    const done = /* @__PURE__ */ new Set();
    let running = Promise.resolve();
    const check = (roots) => {
      if (config.fixWorkspaceAccess.get() === false) return;
      const fresh = roots.filter((root) => !done.has(root.toLowerCase()));
      if (fresh.length === 0) return;
      for (const root of fresh) done.add(root.toLowerCase());
      running = running.then(async () => {
        for (const result of await fixWorkspaceAccess(fresh, home)) {
          if (result.changed) console.info(`[dsh-qol] granted Full control on ${result.root} for the sandbox`);
          if (result.error !== null) console.warn(`[dsh-qol] workspace access fix failed for ${result.root}: ${result.error}`);
        }
      });
    };
    const registered = () => scoped.workspaceRegistry.list().map((workspace) => workspace.path);
    check(registered());
    const timer = setInterval(() => {
      try {
        check(registered());
      } catch {
      }
    }, 5e3);
    scoped.effect(() => () => {
      clearInterval(timer);
    }, "dsh-qol: workspace access watch");
  });
}
var EXIT_STATE = Symbol.for("dsh-qol.low-label.exit");
function applyLowLabelRevoke(ctx, config) {
  ctx.inject(["workspaceRegistry"], (scoped) => {
    const home = dshHome();
    const roots = () => collectRoots(home, scoped.workspaceRegistry.list().map((workspace) => workspace.path));
    const state = globalThis;
    const first = state[EXIT_STATE] === void 0;
    let lastRoots = roots();
    state[EXIT_STATE] = { enabled: () => config.revokeLowLabel.get() !== false, roots: () => {
      try {
        lastRoots = roots();
      } catch {
      }
      return lastRoots;
    }, home };
    if (first) {
      process.once("exit", () => {
        const current = globalThis[EXIT_STATE];
        if (current === void 0 || !current.enabled()) return;
        revokeLowLabelsSync(current.roots(), current.home);
      });
    }
    if (config.revokeLowLabel.get() === false) return;
    void revokeLowLabels(roots(), home).then((results) => {
      const changed = results.filter((result) => result.marked);
      if (changed.length > 0) console.info(`[dsh-qol] revoked sandbox Low labels on ${changed.map((result) => result.root).join(", ")}`);
      for (const result of results) if (result.error !== null) console.warn(`[dsh-qol] Low label revoke failed for ${result.root}: ${result.error}`);
    });
  });
}
export {
  Config,
  apply,
  inject,
  name
};
