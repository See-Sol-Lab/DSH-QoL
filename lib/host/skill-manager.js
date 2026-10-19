import {
  __callDispose,
  __decorateElement,
  __decoratorMetadata,
  __decoratorStart,
  __publicField,
  __runInitializers,
  __using
} from "../chunks/chunk-QDQBS6CD.js";

// src/host/workbench-inspector/skill-manager/index.ts
import { Service } from "@deepseek-ai/cordis";
import Schema from "@deepseek-ai/schemastery";
import { Remote, TypertRemoteService } from "@deepseek-ai/dsh-typert-protocol";

// src/host/workbench-inspector/skill-manager/library.ts
import { randomBytes } from "node:crypto";
import { copyFile, lstat, mkdir, readdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { resolveDshHome } from "@deepseek-ai/dsh-home-paths";

// src/host/workbench-inspector/skill-manager/frontmatter.ts
import { parse as parseYaml, stringify as stringifyYaml } from "yaml";
var SKILL_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u;
var PROPOSED_DESCRIPTION_MAX = 200;
var LEGACY_KEYS = [
  ["disableModelInvocation", "disable-model-invocation"],
  ["modelInvocable", "disable-model-invocation"],
  ["userInvocable", "user-invocable"]
];
var BOOLEAN_KEYS = ["disable-model-invocation", "user-invocable"];
function reviewSkillDocument(raw) {
  const split = splitFrontmatter(raw);
  if (split === void 0) {
    return {
      data: null,
      body: raw,
      name: null,
      description: null,
      issues: [{ code: "missing-frontmatter", message: "the document has no YAML frontmatter", fixable: true }]
    };
  }
  let data;
  try {
    data = parseYaml(split.yaml);
  } catch (error) {
    return {
      data: null,
      body: split.body,
      name: null,
      description: null,
      issues: [{ code: "invalid-frontmatter", message: `the YAML frontmatter does not parse: ${String(error)}` }]
    };
  }
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    return {
      data: null,
      body: split.body,
      name: null,
      description: null,
      issues: [{ code: "invalid-frontmatter", message: "the YAML frontmatter is not a mapping" }]
    };
  }
  const mapping = data;
  const issues = [];
  const rawName = stringField(mapping, "name");
  let name = null;
  if (rawName === void 0) {
    issues.push({ code: "missing-name", message: 'frontmatter requires a non-empty "name"', fixable: true });
  } else if (!SKILL_NAME.test(rawName)) {
    issues.push({ code: "invalid-name", message: `"${rawName}" is not a kebab-case skill name`, fixable: true });
  } else {
    name = rawName;
  }
  const description = stringField(mapping, "description") ?? null;
  if (description === null) {
    issues.push({ code: "missing-description", message: 'frontmatter requires a non-empty "description"', fixable: true });
  }
  for (const [legacy, canonical] of LEGACY_KEYS) {
    if (Object.hasOwn(mapping, legacy)) {
      issues.push({ code: "legacy-key", message: `frontmatter field "${legacy}" is unsupported; use "${canonical}"` });
    }
  }
  for (const key of BOOLEAN_KEYS) {
    if (Object.hasOwn(mapping, key) && !isFrontmatterBoolean(mapping[key])) {
      issues.push({ code: "invalid-boolean", message: `frontmatter field "${key}" must be a boolean` });
    }
  }
  const whenToUse = stringField(mapping, "whenToUse");
  return {
    data: mapping,
    body: split.body,
    name,
    description,
    ...whenToUse === void 0 ? {} : { whenToUse },
    issues
  };
}
function proposeMetadata(document, fallbackName) {
  const proposal = {};
  if (document.name === null) {
    const name = toSkillName(fallbackName);
    if (name !== void 0) proposal.name = name;
  }
  if (document.description === null) {
    const description = firstPlainLine(document.body);
    if (description !== void 0) proposal.description = description;
  }
  return proposal;
}
function hasBlockingIssue(document) {
  return document.issues.some((issue) => issue.fixable !== true);
}
function renderSkillDocument(document, name, description) {
  const data = { ...document.data ?? {}, name, description };
  const yaml = stringifyYaml(data, { lineWidth: 0 });
  return `---
${yaml}---
${document.body}`;
}
function toSkillName(input) {
  const stem = input.replace(/\.[^.]+$/u, "");
  const name = stem.replace(/([a-z0-9])([A-Z])/gu, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/gu, "-").replace(/^-+|-+$/gu, "");
  return SKILL_NAME.test(name) ? name : void 0;
}
function splitFrontmatter(raw) {
  const firstLineEnd = raw.indexOf("\n");
  if (firstLineEnd < 0) return void 0;
  if (raw.slice(0, firstLineEnd).replace(/\r$/u, "") !== "---") return void 0;
  const start = firstLineEnd + 1;
  let lineStart = start;
  for (; ; ) {
    const nextNewline = raw.indexOf("\n", lineStart);
    const lineEnd = nextNewline < 0 ? raw.length : nextNewline;
    if (raw.slice(lineStart, lineEnd).replace(/\r$/u, "") === "---") {
      return { yaml: raw.slice(start, lineStart), body: nextNewline < 0 ? "" : raw.slice(nextNewline + 1) };
    }
    if (nextNewline < 0) return void 0;
    lineStart = nextNewline + 1;
  }
}
function stringField(data, key) {
  const value = data[key];
  return typeof value === "string" && value.length > 0 ? value : void 0;
}
function isFrontmatterBoolean(value) {
  if (typeof value === "boolean" || value === 1 || value === "1" || value === 0 || value === "0") return true;
  return typeof value === "string" && ["true", "yes", "on", "false", "no", "off"].includes(value.toLowerCase());
}
function firstPlainLine(body) {
  let inFence = false;
  for (const rawLine of body.split("\n")) {
    const line = rawLine.replace(/\r$/u, "").trim();
    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence || line === "" || line.startsWith("#") || line.startsWith("<")) continue;
    const text = line.replace(/^[-*>]\s+/u, "").replace(/[*_`]/gu, "").trim();
    if (text === "") continue;
    return text.length > PROPOSED_DESCRIPTION_MAX ? `${text.slice(0, PROPOSED_DESCRIPTION_MAX - 1)}\u2026` : text;
  }
  return void 0;
}

// src/host/workbench-inspector/skill-manager/zip.ts
import { unzipSync } from "fflate";
var DRIVE_PREFIX = /^[A-Za-z]:/u;
var CONTROL_CHARS = new RegExp(`[${String.fromCodePoint(0)}-${String.fromCodePoint(31)}${String.fromCodePoint(127)}]`, "u");
function safeArchivePath(raw) {
  if (raw === "" || raw.endsWith("/")) return void 0;
  if (raw.includes("\\") || raw.startsWith("/") || DRIVE_PREFIX.test(raw)) return void 0;
  if (CONTROL_CHARS.test(raw)) return void 0;
  const segments = raw.split("/");
  for (const segment of segments) {
    if (segment === "" || segment === "." || segment === "..") return void 0;
    if (segment.endsWith(".") || segment.endsWith(" ") || segment.includes(":")) return void 0;
    if (/[<>"|?*]/u.test(segment)) return void 0;
  }
  return segments.join("/");
}
function readZip(bytes, limits) {
  const problems = [];
  const seen = /* @__PURE__ */ new Set();
  let total = 0;
  let count = 0;
  let full = false;
  let unzipped;
  try {
    unzipped = unzipSync(bytes, {
      filter: (file) => {
        if (full || file.name.endsWith("/")) return false;
        const path = safeArchivePath(file.name);
        if (path === void 0) {
          problems.push({ code: "unsafe-path", message: "entry path is not a safe relative path", path: file.name });
          return false;
        }
        const folded = path.toLowerCase();
        if (seen.has(folded)) {
          problems.push({ code: "unsafe-path", message: "entry path collides with another entry", path: file.name });
          return false;
        }
        seen.add(folded);
        if (file.originalSize > limits.maxFileBytes) {
          problems.push({ code: "too-large", message: `entry exceeds ${limits.maxFileBytes} bytes`, path: file.name });
          return false;
        }
        if (count >= limits.maxFiles || total + file.originalSize > limits.maxTotalBytes) {
          full = true;
          problems.push(count >= limits.maxFiles ? { code: "too-many-files", message: `the archive holds more than ${limits.maxFiles} files`, path: file.name } : { code: "too-large", message: `the archive inflates beyond ${limits.maxTotalBytes} bytes`, path: file.name });
          return false;
        }
        count += 1;
        total += file.originalSize;
        return true;
      }
    });
  } catch (error) {
    return { entries: [], problems: [{ code: "zip-unreadable", message: `the archive cannot be read: ${String(error)}` }] };
  }
  const entries = [];
  for (const [name, data] of Object.entries(unzipped)) {
    entries.push({ path: name, data });
  }
  return { entries, problems };
}

// src/host/workbench-inspector/skill-manager/types.ts
var SKILL_MANIFEST_FILE = "deepseekgui-skill.json";
var SKILL_MANIFEST_SCHEMA_VERSION = 1;

// src/host/workbench-inspector/skill-manager/library.ts
var LIBRARY_SEGMENTS = ["deepseekgui", "skills"];
var STAGING_SEGMENTS = ["deepseekgui", "skills-staging"];
var NESTED_SKILL_MAX_DEPTH = 3;
var WALK_MAX_DEPTH = 24;
var SKIPPED_DIRECTORIES = /* @__PURE__ */ new Set([".git"]);
var INSTALL_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*-[0-9a-f]{8}$/u;
function resolveLibraryPaths(options) {
  const dshHome = resolveDshHome(options.dshHome);
  const agentsHome = resolve(options.agentsHome ?? process.env.DSH_AGENTS_HOME ?? join(homedir(), ".agents"));
  const bundled = options.bundledSkillDir ?? process.env.DSH_BUNDLED_SKILL_DIR;
  return {
    dshHome,
    agentsHome,
    bundledSkillDir: bundled === void 0 ? void 0 : resolve(bundled),
    libraryDir: resolve(options.libraryDir ?? join(dshHome, ...LIBRARY_SEGMENTS)),
    stagingDir: resolve(options.stagingDir ?? join(dshHome, ...STAGING_SEGMENTS))
  };
}
async function scanInventory(options) {
  const paths = resolveLibraryPaths(options);
  const installed = [];
  const orphans = [];
  for (const entry of await readdirSafe(paths.libraryDir)) {
    if (!entry.isDirectory()) continue;
    const location = join(paths.libraryDir, entry.name);
    const record = await readManifest(location, entry.name);
    if (record === void 0) {
      orphans.push(entry.name);
      continue;
    }
    installed.push(await installedView(record, location));
  }
  installed.sort((left, right) => left.name.localeCompare(right.name) || left.installId.localeCompare(right.installId));
  orphans.sort((left, right) => left.localeCompare(right));
  const readOnly = [];
  const roots = [
    { path: join(paths.dshHome, "skills"), source: "user-dsh", skipSystem: true },
    { path: join(paths.agentsHome, "skills"), source: "user-agents", skipSystem: false }
  ];
  if (paths.bundledSkillDir !== void 0) roots.push({ path: paths.bundledSkillDir, source: "bundled", skipSystem: false });
  for (const root of roots) readOnly.push(...await scanReadOnlyRoot(root.path, root.source, root.skipSystem));
  return { libraryDir: paths.libraryDir, installed, orphans, readOnly };
}
async function validInstallName(libraryDir, installId) {
  if (!INSTALL_ID.test(installId)) return void 0;
  const location = join(libraryDir, installId);
  const record = await readManifest(location, installId);
  if (record === void 0) return void 0;
  const item = await installedView(record, location);
  return item.status === "ok" ? item.name : void 0;
}
async function previewImport(options, sourcePath) {
  const tree = await loadSource(sourcePath, options.limits);
  const inventory = await scanInventory(options);
  const candidates = await findCandidates(tree, inventory.installed);
  const problems = [...tree.problems];
  if (candidates.length === 0 && (tree.files.length > 0 || problems.length === 0)) {
    problems.push({ code: "no-skill-found", message: "no SKILL.md or Markdown skill file was found in the source" });
  }
  return { source: { kind: tree.kind, path: tree.path }, candidates: candidates.map((candidate) => candidate.view), problems };
}
async function applyImport(options, request, changed) {
  const outcome = { installed: [], failures: [] };
  const tree = await loadSource(request.path, options.limits);
  const incomplete = tree.problems.find((issue) => issue.code === "too-large" || issue.code === "too-many-files");
  if (incomplete !== void 0) {
    outcome.failures = request.selections.map((selection) => ({ key: selection.key, issue: incomplete }));
    return outcome;
  }
  for (const selection of request.selections) {
    const inventory = await scanInventory(options);
    const candidates = await findCandidates(tree, inventory.installed);
    const candidate = candidates.find((item) => item.view.key === selection.key);
    if (candidate === void 0) {
      outcome.failures.push({ key: selection.key, issue: { code: "candidate-missing", message: `no candidate "${selection.key}" in the source` } });
      continue;
    }
    const result = await installCandidate(options, tree, candidate, selection, inventory.installed);
    if ("issue" in result) {
      outcome.failures.push({ key: selection.key, issue: result.issue });
      continue;
    }
    outcome.installed.push(result.view);
    changed({ kind: selection.replaces === null ? "install" : "replace", installId: result.view.installId });
  }
  return outcome;
}
async function uninstallSkill(options, installId, changed) {
  const paths = resolveLibraryPaths(options);
  const location = join(paths.libraryDir, installId);
  if (!INSTALL_ID.test(installId)) {
    return { installId, location, removed: false, issue: { code: "not-managed", message: `"${installId}" is not a library install id` } };
  }
  const record = await readManifest(location, installId);
  if (record === void 0) {
    return {
      installId,
      location,
      removed: false,
      issue: { code: "not-managed", message: "the directory has no manifest written by this manager; nothing was removed" }
    };
  }
  try {
    await mkdir(paths.stagingDir, { recursive: true });
    const trash = join(paths.stagingDir, `${installId}.${scratchName()}.uninstall`);
    await rename(location, trash);
    await rm(trash, { recursive: true, force: true });
  } catch (error) {
    return { installId, location, removed: false, issue: { code: "io-error", message: `uninstall failed: ${String(error)}` } };
  }
  changed({ kind: "uninstall", installId });
  return { installId, location, removed: true };
}
async function installCandidate(options, tree, candidate, selection, installed) {
  const name = selection.name ?? candidate.view.name ?? candidate.view.proposed.name;
  if (name === void 0 || !SKILL_NAME.test(name)) {
    return { issue: { code: "invalid-name", message: `"${name ?? ""}" is not a kebab-case skill name` } };
  }
  const description = (selection.description ?? candidate.view.description ?? candidate.view.proposed.description ?? "").trim();
  if (description === "") {
    return { issue: { code: "missing-description", message: "a description is required" } };
  }
  const blocking = candidate.document.issues.find((issue) => issue.fixable !== true);
  if (blocking !== void 0) {
    return { issue: { code: "skill-invalid", message: blocking.message, path: candidate.view.entry } };
  }
  const replaced = selection.replaces === null ? void 0 : installed.find((item) => item.installId === selection.replaces);
  if (selection.replaces !== null && replaced === void 0) {
    return { issue: { code: "replace-target-missing", message: `install "${selection.replaces}" no longer exists` } };
  }
  const conflict = installed.find((item) => item.name === name && item.installId !== selection.replaces);
  if (conflict !== void 0) {
    return {
      issue: {
        code: "name-conflict",
        message: `"${name}" is already installed as ${conflict.installId} from ${conflict.origin.path}; choose it as the replacement target or rename`
      }
    };
  }
  const paths = resolveLibraryPaths(options);
  try {
    await mkdir(paths.libraryDir, { recursive: true });
    await mkdir(paths.stagingDir, { recursive: true });
  } catch (error) {
    return { issue: { code: "library-unwritable", message: `the library cannot be created: ${String(error)}` } };
  }
  const stage = join(paths.stagingDir, `${name}.${scratchName()}.stage`);
  try {
    const written = await stageCandidate(stage, candidate, name, description);
    const now = (options.now ?? (() => /* @__PURE__ */ new Date()))().toISOString();
    const installId = replaced?.installId ?? await freshInstallId(paths.libraryDir, name, options);
    const record = {
      schemaVersion: SKILL_MANIFEST_SCHEMA_VERSION,
      installId,
      name,
      description,
      ...candidate.document.whenToUse === void 0 ? {} : { whenToUse: candidate.document.whenToUse },
      installedAt: replaced?.installedAt ?? now,
      updatedAt: now,
      origin: { kind: tree.kind, path: tree.path, entry: candidate.view.entry },
      files: written.files,
      bytes: written.bytes
    };
    await writeFile(join(stage, SKILL_MANIFEST_FILE), `${JSON.stringify(record, null, 2)}
`, "utf8");
    await validateStaged(stage, name);
    const location = join(paths.libraryDir, installId);
    await publish(stage, location, replaced === void 0 ? void 0 : join(paths.stagingDir, `${installId}.${scratchName()}.replaced`));
    return { view: await installedView(record, location) };
  } catch (error) {
    await rm(stage, { recursive: true, force: true });
    const code = error instanceof StageError ? error.code : "io-error";
    return { issue: { code, message: error instanceof StageError ? error.message : `install failed: ${String(error)}` } };
  }
}
var StageError = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = "StageError";
  }
};
async function stageCandidate(stage, candidate, name, description) {
  await mkdir(stage, { recursive: true });
  let files = 0;
  let bytes = 0;
  const prefix = candidate.root === "" ? "" : `${candidate.root}/`;
  for (const file of candidate.files) {
    const relative = file === candidate.entry ? "SKILL.md" : file.path.slice(prefix.length);
    const destination = join(stage, ...relative.split("/"));
    await mkdir(dirname(destination), { recursive: true });
    if (file === candidate.entry && needsRewrite(candidate.document, name, description)) {
      const text = renderSkillDocument(candidate.document, name, description);
      await writeFile(destination, text, "utf8");
      bytes += Buffer.byteLength(text);
    } else {
      await file.copyTo(destination);
      bytes += file.bytes;
    }
    files += 1;
  }
  return { files, bytes };
}
function needsRewrite(document, name, description) {
  return document.issues.length > 0 || document.name !== name || document.description !== description;
}
async function validateStaged(stage, name) {
  const staged = reviewSkillDocument(await readFile(join(stage, "SKILL.md"), "utf8"));
  if (staged.issues.length > 0 || staged.name !== name) {
    const detail = staged.issues[0]?.message ?? "the staged SKILL.md does not declare the chosen name";
    throw new StageError("skill-invalid", `the staged copy fails validation: ${detail}`);
  }
}
async function publish(stage, location, trash) {
  if (trash === void 0) {
    await rename(stage, location);
    return;
  }
  await rename(location, trash);
  try {
    await rename(stage, location);
  } catch (error) {
    await rename(trash, location);
    throw error;
  }
  await rm(trash, { recursive: true, force: true });
}
async function freshInstallId(libraryDir, name, options) {
  for (; ; ) {
    const installId = `${name}-${hex(options)}`;
    if (await lstat(join(libraryDir, installId)).then(() => false, () => true)) return installId;
  }
}
function hex(options) {
  return (options.randomHex ?? (() => randomBytes(4).toString("hex")))();
}
function scratchName() {
  return `${process.pid}-${randomBytes(6).toString("hex")}`;
}
async function loadSource(sourcePath, limits) {
  const path = resolve(sourcePath);
  let info;
  try {
    info = await stat(path);
  } catch (error) {
    return { kind: "directory", path, files: [], problems: [{ code: "source-missing", message: `the source cannot be read: ${String(error)}` }] };
  }
  if (info.isDirectory()) {
    const walk = await walkDirectory(path, limits);
    return { kind: "directory", path, files: walk.files, problems: walk.problems };
  }
  const lower = path.toLowerCase();
  if (lower.endsWith(".zip")) {
    if (info.size > limits.maxZipBytes) {
      return { kind: "zip", path, files: [], problems: [{ code: "zip-too-large", message: `the archive exceeds ${limits.maxZipBytes} bytes` }] };
    }
    const contents = readZip(new Uint8Array(await readFile(path)), limits);
    const files = contents.entries.map((entry) => ({
      path: entry.path,
      bytes: entry.data.byteLength,
      copyTo: (destination) => writeFile(destination, entry.data),
      text: () => Promise.resolve(new TextDecoder().decode(entry.data))
    }));
    return { kind: "zip", path, files, problems: contents.problems };
  }
  if (lower.endsWith(".md")) {
    if (info.size > limits.maxFileBytes) {
      return { kind: "markdown", path, files: [], problems: [{ code: "too-large", message: `the file exceeds ${limits.maxFileBytes} bytes` }] };
    }
    return { kind: "markdown", path, files: [fileEntry(path, basename(path), info.size)], problems: [] };
  }
  return {
    kind: "directory",
    path,
    files: [],
    problems: [{ code: "source-unsupported", message: "only a skill directory, a .zip archive, or a .md file can be imported" }]
  };
}
function fileEntry(absolute, relative, bytes) {
  return {
    path: relative,
    bytes,
    copyTo: (destination) => copyFile(absolute, destination),
    text: () => readFile(absolute, "utf8")
  };
}
async function walkDirectory(root, limits) {
  const files = [];
  const problems = [];
  let total = 0;
  const visit = async (directory, relative, depth) => {
    const entries = await readdir(directory, { withFileTypes: true });
    entries.sort((left, right) => left.name.localeCompare(right.name));
    for (const entry of entries) {
      const childRelative = relative === "" ? entry.name : `${relative}/${entry.name}`;
      const childAbsolute = join(directory, entry.name);
      if (entry.isSymbolicLink()) {
        problems.push({ code: "symlink-skipped", message: "symbolic links are not copied", path: childRelative });
        continue;
      }
      if (entry.isDirectory()) {
        if (SKIPPED_DIRECTORIES.has(entry.name)) continue;
        if (depth >= WALK_MAX_DEPTH) {
          problems.push({ code: "unsafe-path", message: `directories deeper than ${WALK_MAX_DEPTH} levels are not copied`, path: childRelative });
          continue;
        }
        if (!await visit(childAbsolute, childRelative, depth + 1)) return false;
        continue;
      }
      if (!entry.isFile() || entry.name === SKILL_MANIFEST_FILE) continue;
      const info = await lstat(childAbsolute);
      if (info.size > limits.maxFileBytes) {
        problems.push({ code: "too-large", message: `file exceeds ${limits.maxFileBytes} bytes`, path: childRelative });
        continue;
      }
      if (files.length >= limits.maxFiles) {
        problems.push({ code: "too-many-files", message: `the source holds more than ${limits.maxFiles} files`, path: childRelative });
        return false;
      }
      total += info.size;
      if (total > limits.maxTotalBytes) {
        problems.push({ code: "too-large", message: `the source exceeds ${limits.maxTotalBytes} bytes in total`, path: childRelative });
        return false;
      }
      files.push(fileEntry(childAbsolute, childRelative, info.size));
    }
    return true;
  };
  await visit(root, "", 0);
  return { files, problems };
}
async function findCandidates(tree, installed) {
  const resolved = [];
  if (tree.kind === "markdown") {
    const entry = tree.files[0];
    if (entry !== void 0) resolved.push(await reviewCandidate(tree, installed, entry, "", [entry], "markdown", basename(tree.path)));
    return resolved;
  }
  const skillFiles = tree.files.filter((file) => basename(file.path) === "SKILL.md");
  const rootSkill = skillFiles.find((file) => file.path === "SKILL.md");
  if (rootSkill !== void 0) {
    resolved.push(await reviewCandidate(tree, installed, rootSkill, "", tree.files, "skill", basename(tree.path)));
    return resolved;
  }
  const nested = skillFiles.filter((file) => file.path.split("/").length - 1 <= NESTED_SKILL_MAX_DEPTH);
  for (const entry of nested) {
    const root = dirname(entry.path).replace(/\\/gu, "/");
    const files = tree.files.filter((file) => file.path.startsWith(`${root}/`));
    resolved.push(await reviewCandidate(tree, installed, entry, root, files, "skill", basename(root)));
  }
  if (resolved.length > 0) return resolved;
  for (const entry of tree.files.filter((file) => !file.path.includes("/") && file.path.toLowerCase().endsWith(".md"))) {
    resolved.push(await reviewCandidate(tree, installed, entry, "", [entry], "markdown", entry.path));
  }
  return resolved;
}
async function reviewCandidate(tree, installed, entry, root, files, kind, fallbackName) {
  const document = reviewSkillDocument(await entry.text());
  const proposed = proposeMetadata(document, fallbackName);
  const finalName = document.name ?? proposed.name;
  const byOrigin = installed.find((item) => item.origin.kind === tree.kind && item.origin.path === tree.path && item.origin.entry === entry.path);
  const byName = finalName === void 0 ? void 0 : installed.find((item) => item.name === finalName);
  const replaces = byOrigin ?? byName;
  const incomplete = tree.problems.find((issue) => issue.code === "too-large" || issue.code === "too-many-files");
  const metadataReady = finalName !== void 0 && (document.description ?? proposed.description) !== void 0;
  const installable = incomplete === void 0 && !hasBlockingIssue(document) && metadataReady;
  const view = {
    key: entry.path,
    entry: entry.path,
    kind,
    name: document.name,
    description: document.description,
    ...document.whenToUse === void 0 ? {} : { whenToUse: document.whenToUse },
    proposed,
    issues: incomplete === void 0 ? document.issues : [...document.issues, incomplete],
    files: files.length,
    bytes: files.reduce((sum, file) => sum + file.bytes, 0),
    replaces: replaces === void 0 ? null : { installId: replaces.installId, name: replaces.name, origin: replaces.origin, location: replaces.location },
    installable
  };
  return { view, document, root, files, entry };
}
async function installedView(record, location) {
  let issue;
  try {
    const document = reviewSkillDocument(await readFile(join(location, "SKILL.md"), "utf8"));
    issue = document.issues[0];
    if (issue === void 0 && document.name !== record.name) {
      issue = { code: "skill-invalid", message: `SKILL.md declares "${String(document.name)}" but the manifest says "${record.name}"` };
    }
  } catch (error) {
    issue = { code: "skill-invalid", message: `SKILL.md cannot be read: ${String(error)}`, path: "SKILL.md" };
  }
  return { ...record, location, status: issue === void 0 ? "ok" : "invalid", ...issue === void 0 ? {} : { issue } };
}
async function readManifest(location, installId) {
  let parsed;
  try {
    const directory = await lstat(location);
    if (!directory.isDirectory() || directory.isSymbolicLink()) return void 0;
    parsed = JSON.parse(await readFile(join(location, SKILL_MANIFEST_FILE), "utf8"));
  } catch {
    return void 0;
  }
  if (typeof parsed !== "object" || parsed === null) return void 0;
  const record = parsed;
  if (record.schemaVersion !== SKILL_MANIFEST_SCHEMA_VERSION || record.installId !== installId) return void 0;
  if (!isNonEmptyString(record.name) || !isNonEmptyString(record.description)) return void 0;
  if (!isNonEmptyString(record.installedAt) || !isNonEmptyString(record.updatedAt)) return void 0;
  if (typeof record.files !== "number" || typeof record.bytes !== "number") return void 0;
  const origin = readOrigin(record.origin);
  if (origin === void 0) return void 0;
  return {
    schemaVersion: SKILL_MANIFEST_SCHEMA_VERSION,
    installId,
    name: record.name,
    description: record.description,
    ...isNonEmptyString(record.whenToUse) ? { whenToUse: record.whenToUse } : {},
    installedAt: record.installedAt,
    updatedAt: record.updatedAt,
    origin,
    files: record.files,
    bytes: record.bytes
  };
}
function readOrigin(value) {
  if (typeof value !== "object" || value === null) return void 0;
  const origin = value;
  if (origin.kind !== "directory" && origin.kind !== "zip" && origin.kind !== "markdown") return void 0;
  if (!isNonEmptyString(origin.path) || typeof origin.entry !== "string") return void 0;
  return { kind: origin.kind, path: origin.path, entry: origin.entry };
}
function isNonEmptyString(value) {
  return typeof value === "string" && value.length > 0;
}
async function scanReadOnlyRoot(root, source, skipSystem) {
  const views = [];
  for (const entry of await readdirSafe(root)) {
    if (skipSystem && entry.name === ".system") continue;
    const location = entry.isDirectory() ? join(root, entry.name, "SKILL.md") : entry.isFile() && entry.name.endsWith(".md") ? join(root, entry.name) : void 0;
    if (location === void 0) continue;
    let text;
    try {
      text = await readFile(location, "utf8");
    } catch {
      continue;
    }
    const document = reviewSkillDocument(text);
    if (document.issues.length > 0 || document.name === null || document.description === null) continue;
    views.push({ source, name: document.name, description: document.description, location });
  }
  return views.sort((left, right) => left.name.localeCompare(right.name));
}
async function readdirSafe(directory) {
  try {
    return await readdir(directory, { withFileTypes: true });
  } catch {
    return [];
  }
}

// src/host/workbench-inspector/skill-manager/provider.ts
import { basename as basename2 } from "node:path";
import { FileSystemSkillProvider } from "@deepseek-ai/dsh-skill-filesystem";

// src/host/workbench-inspector/skill-manager/selection.ts
import { createHash } from "node:crypto";
import { z } from "zod";
import { defineDomain, domainTable } from "@deepseek-ai/dsh-storage-domain";
import { realpathNormalize } from "@deepseek-ai/dsh-workspace";
var MANAGED_PROVIDER_NAME = "deepseekgui-skills";
var projectSelectionRecord = z.object({
  /** Canonical folder path as displayed. */
  path: z.string().min(1),
  /** Install ids the project may use; order is not significant. */
  enabled: z.array(z.string()),
  /** Monotonic save counter; a save must quote the revision it was rendered from. */
  revision: z.number().int().positive(),
  updatedAt: z.string()
});
var skillSelectionDomainSpec = defineDomain({
  name: "deepseekgui_skills",
  version: 1,
  layout: "per-record",
  tables: { projects: domainTable(projectSelectionRecord) }
});
async function resolveProject(cwd) {
  if (cwd === void 0 || cwd === "") return { project: null, problem: "no-cwd" };
  let canonical;
  try {
    canonical = await realpathNormalize(cwd);
  } catch {
    return { project: null, problem: "missing-folder" };
  }
  return { project: { key: projectKeyOf(canonical), path: canonical } };
}
function projectKeyOf(canonical, platform = process.platform) {
  const folded = platform === "win32" ? canonical.toLowerCase() : canonical;
  return createHash("sha256").update(folded).digest("hex").slice(0, 32);
}
function enabledFor(table, key) {
  return table.get(key)?.enabled ?? [];
}
function referencesTo(table, installId) {
  const refs = [];
  for (const [key, record] of table.entries()) {
    if (record.enabled.includes(installId)) refs.push({ key, path: record.path });
  }
  return refs.sort((left, right) => left.path.localeCompare(right.path));
}
async function saveSelection(table, input) {
  const current = table.get(input.project.key);
  const storedRevision = current?.revision ?? 0;
  if (storedRevision !== input.expectedRevision) {
    return {
      saved: false,
      issue: {
        code: "revision-conflict",
        message: `the selection was saved elsewhere (revision ${storedRevision}, page had ${input.expectedRevision})`
      }
    };
  }
  const previous = new Set(current?.enabled ?? []);
  const enabled = [...new Set(input.enabled)].sort((left, right) => left.localeCompare(right));
  const unknown = enabled.find((installId) => !input.installed.has(installId) && !previous.has(installId));
  if (unknown !== void 0) {
    return { saved: false, issue: { code: "unknown-install", message: `"${unknown}" is not installed in the library` } };
  }
  const record = {
    path: input.project.path,
    enabled,
    revision: storedRevision + 1,
    updatedAt: input.now().toISOString()
  };
  await table.put(input.project.key, record);
  return { saved: true, record };
}
function buildProjectView(input) {
  const enabled = new Set(input.record?.enabled ?? []);
  const winners = new Map((input.catalog?.skills ?? []).map((skill) => [skill.name, skill]));
  const complete = input.catalog?.complete === true;
  const entries = input.installed.map((item) => {
    const isEnabled = enabled.has(item.installId);
    const base = {
      installId: item.installId,
      name: item.name,
      description: item.description,
      status: item.status,
      ...item.issue === void 0 ? {} : { issue: item.issue },
      enabled: isEnabled
    };
    if (!isEnabled) return { ...base, effect: "inactive" };
    if (item.status === "invalid") return { ...base, effect: "invalid" };
    const winner = winners.get(item.name);
    if (winner === void 0) return { ...base, effect: complete ? "invalid" : "active" };
    if (winner.provider === MANAGED_PROVIDER_NAME) return { ...base, effect: "active" };
    return { ...base, effect: "shadowed", shadowedBy: { source: winner.source, provider: winner.provider } };
  });
  const present = new Set(input.installed.map((item) => item.installId));
  for (const installId of enabled) {
    if (present.has(installId)) continue;
    entries.push({
      installId,
      name: nameOfInstallId(installId),
      description: "",
      status: "invalid",
      issue: { code: "unknown-install", message: "the install no longer exists in the library" },
      enabled: true,
      effect: "missing"
    });
  }
  entries.sort((left, right) => left.name.localeCompare(right.name) || left.installId.localeCompare(right.installId));
  return {
    sessionId: input.sessionId,
    project: input.resolution.project,
    ...input.resolution.problem === void 0 ? {} : { problem: input.resolution.problem },
    revision: input.record?.revision ?? 0,
    entries,
    catalogComplete: complete
  };
}
function nameOfInstallId(installId) {
  const match = /^(.+)-[0-9a-f]{8}$/u.exec(installId);
  return match?.[1] ?? installId;
}

// src/host/workbench-inspector/skill-manager/provider.ts
var MANAGED_SOURCE = "deepseekgui-managed";
var MANAGED_RANK = 550;
var ManagedSkillProvider = class {
  /**
   * @param ctx - Host context (logger and optional filesystem service for the delegate).
   * @param control - The registration's control; the delegate's watcher invalidates through it.
   * @param options - Library root, watch flag, and the selection lookup.
   */
  constructor(ctx, control, options) {
    this.options = options;
    this.delegate = options.delegate ?? new FileSystemSkillProvider(ctx, control, {
      providerName: MANAGED_PROVIDER_NAME,
      includeDefaultRoots: false,
      customSkillDirs: [options.libraryDir],
      watch: options.watch
    });
  }
  name = MANAGED_PROVIDER_NAME;
  delegate;
  /**
   * List the installs the session's project selected.
   * @param options - lookup options; `cwd` selects the project.
   * @returns the selected candidates at the managed rank; nothing without a project or a selection.
   */
  async list(options) {
    if (options.cwd === void 0) return [];
    const enabled = await this.options.enabledFor(options.cwd, options.signal);
    if (enabled === void 0 || enabled.length === 0) return [];
    const output = await this.delegate.list(options);
    const observation = "candidates" in output ? output : { candidates: output, complete: true };
    const selected = new Set(enabled);
    const candidates = observation.candidates.filter((candidate) => selected.has(basename2(candidate.locator.directory))).map((candidate) => ({ ...candidate, source: MANAGED_SOURCE, rank: MANAGED_RANK }));
    return observation.complete ? candidates : { candidates, complete: false };
  }
  /**
   * Load one selected skill through the delegate.
   * @param candidate - a candidate this provider listed.
   * @param options - lookup options.
   * @returns the definition, or undefined when the file is gone.
   */
  async get(candidate, options) {
    return await this.delegate.get(candidate, options);
  }
};

// src/host/workbench-inspector/skill-manager/index.ts
var SKILL_MANAGER_LIMITS = {
  maxZipBytes: 256 * 1024 * 1024,
  maxFileBytes: 64 * 1024 * 1024,
  maxTotalBytes: 512 * 1024 * 1024,
  maxFiles: 4e3
};
var _setProjectSelection_dec, _projectView_dec, _installReferences_dec, _uninstall_dec, _applyImport_dec, _previewImport_dec, _inventory_dec, _a, _init, _b;
var SkillManager = class extends (_b = TypertRemoteService) {
  /**
   * @param ctx - Composed host providers.
   * @param config - Validated bounds and overrides.
   */
  constructor(ctx, config) {
    super(ctx, "skillManager", { namespace: "skillManager" });
    __runInitializers(_init, 5, this);
    __publicField(this, "options");
    /** Serializes writes: installs, uninstalls and selection saves never interleave. */
    __publicField(this, "queue", Promise.resolve());
    /** The selection table; every reader awaits `ready`, after which it is set. */
    __publicField(this, "projects");
    /** Resolves when the domain is open; provider reads wait on it. */
    __publicField(this, "ready");
    __publicField(this, "markReady");
    /** Invalidates the registry catalog; the provider registration in the constructor sets it. */
    __publicField(this, "invalidateCatalog");
    this.options = {
      ...config.dshHome === void 0 ? {} : { dshHome: config.dshHome },
      ...config.agentsHome === void 0 ? {} : { agentsHome: config.agentsHome },
      ...config.bundledSkillDir === void 0 ? {} : { bundledSkillDir: config.bundledSkillDir },
      ...config.libraryDir === void 0 ? {} : { libraryDir: config.libraryDir },
      ...config.stagingDir === void 0 ? {} : { stagingDir: config.stagingDir },
      limits: {
        maxZipBytes: config.maxZipBytes,
        maxFileBytes: config.maxFileBytes,
        maxTotalBytes: config.maxTotalBytes,
        maxFiles: config.maxFiles
      }
    };
    this.ready = new Promise((resolve2) => {
      this.markReady = resolve2;
    });
    const libraryDir = this.libraryDir;
    ctx.skills.registerProvider((control) => {
      this.invalidateCatalog = control.invalidate;
      return new ManagedSkillProvider(ctx, control, {
        libraryDir,
        watch: config.watchLibrary,
        enabledFor: async (cwd) => {
          await this.ready;
          const resolution = await resolveProject(cwd);
          if (resolution.project === null) {
            ctx.logger.warn(`skill selection unavailable for cwd ${cwd}: ${resolution.problem}`);
            return void 0;
          }
          const selected = enabledFor(this.table(), resolution.project.key);
          const valid = await Promise.all(selected.map(async (id) => await validInstallName(libraryDir, id) === void 0 ? void 0 : id));
          return valid.filter((id) => id !== void 0);
        }
      });
    });
  }
  /** Open the selection domain; the provider and the Remote methods read it after this. */
  async [(_a = Service.init, _inventory_dec = [Remote], _previewImport_dec = [Remote], _applyImport_dec = [Remote], _uninstall_dec = [Remote], _installReferences_dec = [Remote], _projectView_dec = [Remote], _setProjectSelection_dec = [Remote], _a)]() {
    const domain = await this.ctx.storageDomain.open(skillSelectionDomainSpec);
    this.ctx.effect(() => () => domain.close(), "skill-manager: selection domain");
    this.projects = domain.table("projects");
    this.markReady();
  }
  /** Absolute library directory for the current environment. */
  get libraryDir() {
    return resolveLibraryPaths(this.options).libraryDir;
  }
  async inventory(signal) {
    signal.throwIfAborted();
    return await scanInventory(this.options);
  }
  async previewImport(path, signal) {
    signal.throwIfAborted();
    return await previewImport(this.options, path);
  }
  async applyImport(request, signal) {
    signal.throwIfAborted();
    return await this.serialized(() => applyImport(this.options, request, (change) => {
      this.changed(change);
    }));
  }
  async uninstall(installId, signal) {
    signal.throwIfAborted();
    await this.ready;
    return await this.serialized(async () => {
      const outcome = await uninstallSkill(this.options, installId, (change) => {
        this.changed(change);
      });
      return { ...outcome, affected: referencesTo(this.table(), installId) };
    });
  }
  async installReferences(installId, signal) {
    signal.throwIfAborted();
    await this.ready;
    return { installId, projects: referencesTo(this.table(), installId) };
  }
  async projectView(sessionId, signal) {
    var _stack = [];
    try {
      signal.throwIfAborted();
      await this.ready;
      const session = __using(_stack, await this.sessionFacts(sessionId, signal), true);
      return await this.viewFor(sessionId, session, signal);
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  }
  async setProjectSelection(request, signal) {
    var _stack = [];
    try {
      signal.throwIfAborted();
      await this.ready;
      const sessionId = request.sessionId;
      const session = __using(_stack, await this.sessionFacts(sessionId, signal), true);
      const resolution = await resolveProject(session.cwd);
      if (resolution.project === null) {
        return {
          saved: false,
          issue: { code: "no-project", message: `session has no usable project folder (${resolution.problem})` },
          view: await this.viewFor(sessionId, session, signal)
        };
      }
      const project = resolution.project;
      const result = await this.serialized(async () => {
        const inventory = await scanInventory(this.options);
        return await saveSelection(this.table(), {
          project,
          enabled: request.enabled,
          expectedRevision: request.revision,
          installed: new Set(inventory.installed.map((item) => item.installId)),
          now: () => /* @__PURE__ */ new Date()
        });
      });
      if (result.saved) {
        this.invalidateCatalog();
        this.changed({ kind: "selection", projectKey: project.key });
      }
      const view = await this.viewFor(sessionId, session, signal);
      return result.saved ? { saved: true, view } : { saved: false, issue: result.issue, view };
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  }
  changed(change) {
    if (change.kind !== "selection") this.invalidateCatalog();
    this.ctx.emit("skill-manager/change", change);
  }
  table() {
    return this.projects;
  }
  serialized(task) {
    const run = this.queue.then(task, task);
    this.queue = run.then(() => void 0, () => void 0);
    return run;
  }
  /**
   * The session's cwd and the scope its catalog resolves under (live agent, else the recorded preset's
   * standing scope). Upstream 0.1.7 replaced `standingKeyFor` with a reference-counted `acquireScope`
   * lease, so the facts are disposable: hold them for the read, then `await using` releases the revision.
   */
  async sessionFacts(sessionId, signal) {
    var _stack = [];
    try {
      const observation = __using(_stack, await this.ctx.sessionQuery.observeSession(sessionId, { signal }));
      const cwd = observation.header.cwd;
      const agentPreset = observation.projections?.values.agentPreset ?? void 0;
      const none = async () => {
      };
      const live = this.ctx.get("agents")?.get(sessionId);
      if (live !== void 0) return { cwd, scope: live, [Symbol.asyncDispose]: none };
      const presets = this.ctx.get("agentPresets");
      if (presets === void 0) return { cwd, scope: void 0, [Symbol.asyncDispose]: none };
      try {
        const lease = await presets.acquireScope(agentPreset);
        return { cwd, scope: lease.key, [Symbol.asyncDispose]: () => lease[Symbol.asyncDispose]() };
      } catch {
        return { cwd, scope: void 0, [Symbol.asyncDispose]: none };
      }
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }
  async viewFor(sessionId, session, signal) {
    const resolution = await resolveProject(session.cwd);
    const inventory = await scanInventory(this.options);
    const record = resolution.project === null ? void 0 : this.table().get(resolution.project.key);
    let catalog;
    if (resolution.project !== null) {
      try {
        catalog = await this.ctx.skills.snapshot({ cwd: session.cwd, scope: session.scope, signal });
      } catch (error) {
        this.ctx.logger.warn(`skill catalog unavailable for session ${sessionId}: ${String(error)}`);
      }
    }
    return buildProjectView({ sessionId, resolution, record, installed: inventory.installed, catalog });
  }
};
_init = __decoratorStart(_b);
__decorateElement(_init, 1, "inventory", _inventory_dec, SkillManager);
__decorateElement(_init, 1, "previewImport", _previewImport_dec, SkillManager);
__decorateElement(_init, 1, "applyImport", _applyImport_dec, SkillManager);
__decorateElement(_init, 1, "uninstall", _uninstall_dec, SkillManager);
__decorateElement(_init, 1, "installReferences", _installReferences_dec, SkillManager);
__decorateElement(_init, 1, "projectView", _projectView_dec, SkillManager);
__decorateElement(_init, 1, "setProjectSelection", _setProjectSelection_dec, SkillManager);
__decoratorMetadata(_init, SkillManager);
__publicField(SkillManager, "inject", ["typert", "storageDomain", "skills", "sessionQuery"]);
__publicField(SkillManager, "Config", Schema.object({
  dshHome: Schema.string(),
  agentsHome: Schema.string(),
  bundledSkillDir: Schema.string(),
  libraryDir: Schema.string(),
  stagingDir: Schema.string(),
  maxZipBytes: Schema.natural().min(1).default(SKILL_MANAGER_LIMITS.maxZipBytes),
  maxFileBytes: Schema.natural().min(1).default(SKILL_MANAGER_LIMITS.maxFileBytes),
  maxTotalBytes: Schema.natural().min(1).default(SKILL_MANAGER_LIMITS.maxTotalBytes),
  maxFiles: Schema.natural().min(1).default(SKILL_MANAGER_LIMITS.maxFiles),
  watchLibrary: Schema.boolean().default(true)
}));
var skill_manager_default = SkillManager;
export {
  MANAGED_PROVIDER_NAME,
  MANAGED_RANK,
  MANAGED_SOURCE,
  SKILL_MANAGER_LIMITS,
  SKILL_MANIFEST_FILE,
  SKILL_MANIFEST_SCHEMA_VERSION,
  SkillManager,
  skill_manager_default as default,
  projectKeyOf,
  resolveLibraryPaths,
  resolveProject,
  skillSelectionDomainSpec
};
