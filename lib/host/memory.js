import {
  AREA_BEGIN,
  AREA_END,
  projectMemoryFileName
} from "../chunks/chunk-O7M7O2T2.js";
import "../chunks/chunk-QDQBS6CD.js";

// src/host/memory/session-memory.ts
import { closeSync, mkdirSync, openSync, readFileSync, readSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { defaultDshHome } from "@deepseek-ai/dsh-home-paths";

// assets/qol-guide.md
var qol_guide_default = '# DSH QoL Pack\nThe DSH QoL Pack plugin is installed in this DeepSeek Harness desktop app. It adds structured Git and pull-request tools and the project/global memory described below.\nBeside the official "Chat / Trajectory" tabs it adds three read-only views:\n- Changes: what changed in the workspace, grouped as "will be committed / changed / new files / conflicts", with each file\'s patch.\n- Git: the parallel work trees registered for this repository (their branches and what changed in each) above the current branch, remote sync state, recent commits, and the commits/pushes/PRs made in this session.\n- Memory: the project memory (facts about this project); the global memory (facts about the user) is on the Settings page.\nWhen the user wants to commit, push, branch, or open a worktree, they say so in the conversation and you do it; after a change you may point the user to the matching view.\n\n# Tools\n- Git goes through the dedicated tools: git_status / git_diff / git_stage / git_unstage / git_revert / git_commit / git_push_preview / git_push; pull requests through pr_availability / pr_existing / pr_create. Do not run git through a shell instead of these tools. Write operations (stage, unstage, revert, commit, push, pr_create) raise the official approval prompt to the user with the exact content (commit carries the staged tree SHA, push carries the source commit and remote address). Say what you are about to do, then call the tool.\n- Run git_push_preview before pushing. When the remote address is a placeholder or unreachable, tell the user plainly; do not retry in a loop.\n- For every change request, state the plan before editing; when a task touches several files, end with one line listing what changed.\n\n# Paths\nWhen you mention a file, write its path relative to the workspace in code format, for example `src/app.ts`. Do not write a bare file name and do not write it as a URL.\n\n# Language\nReply in the language the user writes in.\n';

// assets/qol-memory-files.md
var qol_memory_files_default = "# Memory\nMemory (from the DSH QoL Pack) is two flat files. Their current contents are already injected below, so do not read them again just to see them; read a file only right before you edit it, and update it only when a fact is worth keeping.\n- The project memory file: `<project folder name>.memory.md` in the session workspace (the exact path is given with the memory section). Facts about THIS project: decisions, conventions, user corrections, gotchas. Write it with the ordinary write/edit tools; it is inside the workspace, so normal workspace-write rules apply. Create it the first time you have something worth keeping; never ask for full access to save a note.\n- `<DSH home>/memory.md`: the global memory, facts about the user across projects. You NEVER write this file; the user edits it.\nWhen to write: the user stated a durable preference or corrected you; a project fact will keep recurring; you just learned something the user will expect you to remember. Do not write: facts already in code or AGENTS.md, one-off task state, or anything only this turn needs. Read the current file first; update in place instead of duplicating. Keep entries short, factual, and current; remove what no longer holds. Keep the project memory under 20,000 characters: when it approaches that size, condense older entries instead of appending \u2014 the injected copy is capped.\nAGENTS.md is the human-written manual (how to work here): a global one under the DSH home and optional per-project ones. memory.md files accumulate facts (what is actually true about this project and this user). Never merge the two roles.\n";

// src/host/memory/session-memory.ts
import { createHash } from "node:crypto";
var MEMORY_SECTION_NAME = "deepseekgui:memory";
var GUIDE_SECTION_NAME = "deepseekgui:guide";
var MEMORY_SECTION_ORDER = 1e6;
var GUIDE_SECTION_ORDER = MEMORY_SECTION_ORDER - 1;
var MEMORY_FILE_CAP = 64 * 1024;
function memoryFilesOf(home, cwd) {
  return {
    globalPath: join(home, "memory.md"),
    projectPath: join(cwd, projectMemoryFileName(cwd))
  };
}
var PROJECT_READ_LIMIT = 1024 * 1024;
function headBytes(text, bytes) {
  const buffer = Buffer.from(text, "utf8");
  if (buffer.length <= bytes) return text;
  return new TextDecoder().decode(buffer.subarray(0, Math.max(0, bytes)), { stream: true });
}
function readProjectMemoryFile(path, cap = MEMORY_FILE_CAP) {
  const whole = readMemoryFile(path, PROJECT_READ_LIMIT);
  if (whole.status === "absent" || whole.status === "empty" || whole.status === "unreadable") return whole;
  const begin = whole.text.indexOf(AREA_BEGIN);
  const end = whole.text.indexOf(AREA_END);
  const area = begin >= 0 && end > begin ? whole.text.slice(begin, end + AREA_END.length) : "";
  if (Buffer.byteLength(whole.text, "utf8") <= cap && whole.status === "present") {
    return { ...whole, autoArea: area === "" ? "absent" : "included" };
  }
  if (area === "") return { path, status: "truncated", text: headBytes(whole.text, cap), autoArea: "absent" };
  const human = whole.text.slice(0, begin) + whole.text.slice(end + AREA_END.length);
  const marker = "\n\u2026\uFF08\u4EE5\u4E0A\u4E3A\u8282\u9009 / excerpt above\uFF09\u2026\n";
  const room = cap - Buffer.byteLength(area, "utf8") - Buffer.byteLength(marker, "utf8");
  return { path, status: "truncated", text: `${headBytes(human, room)}${marker}${area}`, autoArea: "included" };
}
function readMemoryFile(path, cap = MEMORY_FILE_CAP) {
  let text = "";
  let truncated = false;
  try {
    const fd = openSync(path, "r");
    try {
      const buffer = Buffer.alloc(cap + 1);
      let size = 0;
      while (size < buffer.length) {
        const read = readSync(fd, buffer, size, buffer.length - size, null);
        if (read === 0) break;
        size += read;
      }
      truncated = size > cap;
      text = new TextDecoder().decode(buffer.subarray(0, Math.min(size, cap)), { stream: truncated });
    } finally {
      closeSync(fd);
    }
  } catch (error) {
    return { path, status: error.code === "ENOENT" ? "absent" : "unreadable", text: "" };
  }
  if (text.trim() === "") return { path, status: "empty", text: "" };
  if (truncated) {
    return { path, status: "truncated", text };
  }
  return { path, status: "present", text };
}
function productGuide() {
  return qol_guide_default.trimEnd();
}
function memoryContract() {
  return qol_memory_files_default.trimEnd();
}
function factOf(view) {
  let chars = 0;
  for (const _ of view.text) chars++;
  return {
    path: view.path,
    status: view.status,
    bytes: Buffer.byteLength(view.text, "utf8"),
    chars,
    sha256: createHash("sha256").update(view.text, "utf8").digest("hex"),
    ...view.autoArea === void 0 ? {} : { autoArea: view.autoArea }
  };
}
var INJECTION_HISTORY = 20;
function captureMemorySection(files) {
  const globalView = readMemoryFile(files.globalPath);
  const projectView = readProjectMemoryFile(files.projectPath);
  return { text: sectionTextOf(files, globalView, projectView), global: factOf(globalView), project: factOf(projectView) };
}
function recordMemoryInjection(home, sessionId, captured) {
  if (!/^[A-Za-z0-9_-]{1,128}$/u.test(sessionId)) return;
  try {
    const dir = join(home, "deepseekgui", "memory-injections");
    mkdirSync(dir, { recursive: true });
    const path = join(dir, `${sessionId}.json`);
    let entries = [];
    try {
      const previous = JSON.parse(readFileSync(path, "utf8"));
      if (typeof previous === "object" && previous !== null && "entries" in previous && Array.isArray(previous.entries)) entries = previous.entries;
    } catch {
      entries = [];
    }
    entries.push({ at: (/* @__PURE__ */ new Date()).toISOString(), capBytes: MEMORY_FILE_CAP, global: captured.global, project: captured.project });
    const temp = `${path}.${String(Date.now())}-${Math.random().toString(36).slice(2)}.tmp`;
    writeFileSync(temp, `${JSON.stringify({ sessionId, entries: entries.slice(-INJECTION_HISTORY) }, null, 2)}
`, "utf8");
    renameSync(temp, path);
  } catch {
  }
}
function sectionTextOf(files, globalView, projectView) {
  const statusText = (view) => {
    if (view.status === "absent") return "(file does not exist yet)";
    if (view.status === "empty") return "(file is empty)";
    if (view.status === "unreadable") return "(file could not be read; do not overwrite it)";
    if (view.status === "truncated") {
      return view.autoArea === "included" ? "(file exceeded the injection cap; the handwritten part was shortened, the archive-notes area is complete)" : "(file exceeded the injection cap; truncated)";
    }
    return "";
  };
  const globalBody = globalView.text === "" ? statusText(globalView) : `\`\`\`memory
${globalView.text}
\`\`\``;
  const projectBody = projectView.text === "" ? statusText(projectView) : `\`\`\`memory
${projectView.text}
\`\`\``;
  return [
    memoryContract(),
    "## DeepSeekGUI memory (injected once per session window)",
    `Global memory (user-edited, model read-only): ${files.globalPath}`,
    globalView.status === "truncated" ? `${statusText(globalView)}
${globalBody}` : globalBody,
    `Project memory (model-maintained via fs tools): ${files.projectPath}`,
    projectView.status === "truncated" ? `${statusText(projectView)}
${projectBody}` : projectBody
  ].join("\n\n");
}
function dshHomeOf(env = process.env) {
  const home = env.DSH_HOME;
  return home === void 0 || home === "" ? defaultDshHome() : home;
}
function registerMemoryContext(ctx) {
  const systemPrompt = ctx.systemPrompt;
  const captured = /* @__PURE__ */ new WeakMap();
  const guide = {
    name: GUIDE_SECTION_NAME,
    order: GUIDE_SECTION_ORDER,
    text: productGuide()
  };
  const provider = {
    name: MEMORY_SECTION_NAME,
    order: MEMORY_SECTION_ORDER,
    text: "{{deepseekgui_memory}}"
  };
  ctx.effect(() => {
    const disposeVariable = systemPrompt.variable("deepseekgui_memory", (context) => {
      const home = dshHomeOf();
      const session = context.agent?.session;
      const cwd = session?.header?.cwd;
      if (home === void 0 || cwd === void 0 || session === void 0) return "";
      let text = captured.get(session);
      if (text === void 0) {
        const capture = captureMemorySection(memoryFilesOf(home, cwd));
        text = capture.text;
        captured.set(session, text);
        const id = session.header?.id;
        if (id !== void 0) recordMemoryInjection(home, id, capture);
      }
      return text;
    });
    const disposeGuide = systemPrompt.context(guide);
    const dispose = systemPrompt.context(provider);
    return () => {
      dispose();
      disposeGuide();
      disposeVariable();
    };
  }, "deepseekgui: guide and memory contexts");
}

// src/host/memory/index.ts
var name = "qol-memory";
var inject = ["systemPrompt"];
function apply(ctx) {
  registerMemoryContext(ctx);
}
export {
  apply,
  inject,
  name
};
