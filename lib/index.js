import "./chunks/chunk-QDQBS6CD.js";

// src/index.ts
import z from "@deepseek-ai/schemastery";
import { AsyncResource } from "node:async_hooks";
import { defaultDshHome } from "@deepseek-ai/dsh-home-paths";

// src/low-label.ts
import { execFile, execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { EOL, tmpdir } from "node:os";
import { join, sep } from "node:path";

// assets/revoke-low-label.ps1
var revoke_low_label_default = `# DSH \u751F\u6D3B\u8D28\u91CF\u5305\uFF1A\u64A4\u6389\u5B98\u65B9\u6C99\u7BB1\u7559\u5728\u4E00\u4E2A\u5DE5\u4F5C\u533A\u6839\u76EE\u5F55\u4E0A\u7684\u4E09\u6837\u4E1C\u897F\u3002
#   1) \u6C99\u7BB1\u80FD\u529B\u8EAB\u4EFD S-1-4-<n>-<n> \u7684\u5199\u5165\u6388\u6743\uFF08\u5B98\u65B9\u7684\u5DE5\u4F5C\u533A SID \u5F62\u72B6\uFF09
#   2) Everyone \u7684\u62D2\u7EDD\u6761\u76EE\uFF08\u5B98\u65B9\u52A0\u7684\u300C\u7981\u6B62\u5220\u9664\u5B50\u9879\u300D\uFF09
#   3) Low \u5B8C\u6574\u6027\u6807\u7B7E \u2192 \u6539\u56DE Medium\uFF08\u666E\u901A\u7A0B\u5E8F\u7684\u9ED8\u8BA4\u7EA7\u522B\uFF09
# \u5176\u4ED6\u6743\u9650\u539F\u6837\u4FDD\u7559\u3002\u53EA\u5904\u7406\u6839\u76EE\u5F55\u4E0A\u300C\u663E\u5F0F\u300D\u7684\u8FD9\u51E0\u6837\uFF1B\u5B50\u9879\u90FD\u662F\u7EE7\u627F\u6765\u7684\uFF0C\u6839\u6539\u4E86\u5C31\u8DDF\u7740\u53D8\u3002
# \u6CA1\u6709\u6807\u8BB0\u5C31\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF08\u4E0D\u91CD\u7B97\u6574\u68F5\u76EE\u5F55\u6811\uFF09\u3002\u52A8\u624B\u524D\u5148 icacls /save \u5907\u4EFD\u6839\u76EE\u5F55\u6743\u9650\uFF0C
# \u53EF\u7528 \`icacls <\u6839\u76EE\u5F55\u7684\u4E0A\u4E00\u7EA7> /restore <\u5907\u4EFD\u6587\u4EF6>\` \u8FD8\u539F\u3002
# \u65B9\u6CD5\u6765\u81EA 2026-09 \u6E05\u7406 E:\\Priest \u7684\u5B9E\u6D4B\u811A\u672C\uFF1BWindows PowerShell 5.1 \u4E0E 7 \u90FD\u80FD\u8DD1\u3002
# \u8F93\u51FA\u4E00\u884C JSON \u7ED3\u679C\u3002
param(
  [Parameter(Mandatory = $true)][string]$Root,
  [Parameter(Mandatory = $true)][string]$Backup
)
$ErrorActionPreference = 'Stop'
$result = [ordered]@{ root = $Root; marked = $false; removedSids = @(); denyRemoved = 0; labelReset = $false; backup = $null; error = $null }
try {
  if (-not (Test-Path -LiteralPath $Root -PathType Container)) { throw "not a directory: $Root" }
  $dir = Get-Item -LiteralPath $Root
  $sections = [System.Security.AccessControl.AccessControlSections]::Access
  $hasMethod = $null -ne ($dir | Get-Member -Name GetAccessControl -MemberType Method)
  if ($hasMethod) { $acl = $dir.GetAccessControl('Access') }
  else { $acl = [System.IO.FileSystemAclExtensions]::GetAccessControl($dir, $sections) }

  $everyone = New-Object System.Security.Principal.SecurityIdentifier 'S-1-1-0'
  $explicit = @($acl.GetAccessRules($true, $false, [System.Security.Principal.SecurityIdentifier]))
  $sandboxSids = @($explicit | Where-Object { $_.AccessControlType -eq 'Allow' -and $_.IdentityReference.Value -match '^S-1-4-\\d+-\\d+$' } | ForEach-Object { $_.IdentityReference.Value } | Sort-Object -Unique)
  $denies = @($explicit | Where-Object { $_.AccessControlType -eq 'Deny' -and $_.IdentityReference -eq $everyone })
  # \u6839\u76EE\u5F55\u4E0A\u663E\u5F0F\u7684 Low \u6807\u7B7E\uFF08\u7EE7\u627F\u6765\u7684\u4F1A\u5E26 (I)\uFF0C\u90A3\u662F\u4E0A\u7EA7\u76EE\u5F55\u7684\u4E8B\uFF0C\u4E0D\u5728\u8FD9\u91CC\u6539\uFF09\u3002
  $lowLines = @(& icacls $Root | Where-Object { $_ -match 'Mandatory Label\\\\Low Mandatory Level' })
  $label = @($lowLines | Where-Object { $_ -notmatch '\\(I\\)' }).Count -gt 0

  if ($sandboxSids.Count -eq 0 -and $denies.Count -eq 0 -and -not $label) {
    $result.marked = $false
  } else {
    $result.marked = $true
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Backup) | Out-Null
    & icacls $Root /save $Backup /C | Out-Null
    $result.backup = $Backup
    if ($sandboxSids.Count -gt 0 -or $denies.Count -gt 0) {
      foreach ($sid in $sandboxSids) { $acl.PurgeAccessRules((New-Object System.Security.Principal.SecurityIdentifier $sid)) }
      foreach ($rule in $denies) { [void]$acl.RemoveAccessRuleSpecific($rule) }
      if ($hasMethod) { $dir.SetAccessControl($acl) }
      else { [System.IO.FileSystemAclExtensions]::SetAccessControl($dir, $acl) }
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
function scriptPath() {
  const path = join(tmpdir(), "dsh-qol-revoke-low-label.ps1");
  writeFileSync(path, revoke_low_label_default, "utf8");
  return path;
}
function argsFor(script, root, backupDir) {
  const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/gu, "-");
  const name2 = root.replace(/[\\/:]+/gu, "_").replace(/^_+|_+$/gu, "");
  return [
    "-NoProfile",
    "-NonInteractive",
    "-ExecutionPolicy",
    "Bypass",
    "-File",
    script,
    "-Root",
    root,
    "-Backup",
    join(backupDir, `${name2}-${stamp}.txt`)
  ];
}
function parse(root, stdout, failure) {
  const line = stdout.trim().split(/\r?\n/u).at(-1) ?? "";
  try {
    return JSON.parse(line);
  } catch {
    const error = failure instanceof Error ? failure.message : line === "" ? "no output" : line;
    return { root, marked: false, removedSids: [], denyRemoved: 0, labelReset: false, backup: null, error };
  }
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
  const script = scriptPath();
  const backupDir = join(home, "deepseekgui", "acl-backups");
  const results = [];
  for (const root of roots) {
    results.push(await new Promise((resolve) => {
      execFile(POWERSHELL, argsFor(script, root, backupDir), { timeout: 10 * 6e4, windowsHide: true }, (error, stdout) => {
        resolve(parse(root, String(stdout), error ?? void 0));
      });
    }));
  }
  record(home, "startup", results);
  return results;
}
function revokeLowLabelsSync(roots, home) {
  const script = scriptPath();
  const backupDir = join(home, "deepseekgui", "acl-backups");
  const results = roots.map((root) => {
    try {
      return parse(root, execFileSync(POWERSHELL, argsFor(script, root, backupDir), { timeout: 2 * 6e4, windowsHide: true, encoding: "utf8" }));
    } catch (error) {
      return parse(root, "", error);
    }
  });
  record(home, "exit", results);
  return results;
}

// src/index.ts
var name = "dsh-qol";
var inject = ["configEditor"];
var Config = z.object({
  inventory: z.boolean().default(false).volatile(),
  feedback: z.boolean().default(false).volatile(),
  revokeLowLabel: z.boolean().default(true).volatile()
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
  if (process.platform === "win32") applyLowLabelRevoke(ctx, config);
}
var EXIT_STATE = Symbol.for("dsh-qol.low-label.exit");
function dshHome() {
  const home = process.env.DSH_HOME;
  return home === void 0 || home === "" ? defaultDshHome() : home;
}
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
