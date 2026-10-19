// src/host/coding-tools/index.ts
import { existsSync } from "node:fs";
import { relative, isAbsolute, resolve, sep } from "node:path";
import { canonicalPath, writableRoots } from "@deepseek-ai/dsh-sandbox";

// src/host/coding-tools/git-tools.ts
import { defineTool } from "@deepseek-ai/dsh-tools";
function statusMeta(value) {
  const v = value;
  const counts = { staged: 0, unstaged: 0, untracked: 0, conflict: 0 };
  const entries = v.entries.map((e) => {
    counts[e.kind] += 1;
    return { state: e.kind, path: e.path, origPath: e.origPath ?? null };
  });
  return {
    kind: "git-status",
    clean: v.clean,
    head: `${v.head.kind === "branch" ? "on " : `${v.head.kind} `}${v.head.name}`,
    upstream: v.upstream === void 0 ? null : { ref: v.upstream.ref, ahead: v.upstream.ahead, behind: v.upstream.behind },
    counts: { ...counts, total: entries.length },
    entries
  };
}
function diffMeta(value) {
  const v = value;
  return {
    kind: "git-diff",
    files: v.files.map((f) => ({
      path: f.path,
      origPath: f.origPath ?? null,
      binary: f.binary,
      added: f.addedLines ?? 0,
      deleted: f.deletedLines ?? 0
    }))
  };
}
function statusText(value) {
  const v = value;
  const head = v.head.kind === "branch" ? `on ${v.head.name}` : `${v.head.kind} ${v.head.name}`;
  const upstream = v.upstream === void 0 ? "" : ` (upstream ${v.upstream.ref}, ahead ${v.upstream.ahead}, behind ${v.upstream.behind})`;
  if (v.clean) return `clean ${head}${upstream}`;
  return `${v.entries.length} changed path(s), ${head}${upstream}:
${v.entries.map((e) => `- ${e.kind} ${e.path}${e.origPath === void 0 ? "" : ` (from ${e.origPath})`}`).join("\n")}`;
}
function diffText(value) {
  const v = value;
  const lines = v.files.map((f) => `- ${f.path}${f.origPath === void 0 ? "" : ` (from ${f.origPath})`}` + (f.binary ? " (binary)" : ` +${f.addedLines ?? 0} -${f.deletedLines ?? 0}`)).join("\n");
  const patch = v.patch === void 0 ? "" : `
\`\`\`diff
${v.patch.replace(/```/gu, "```")}
\`\`\``;
  return `${lines}${patch}`;
}
function commitText(value) {
  const v = value;
  return v.treeMatchesExpected ? `committed ${v.sha}` : `committed ${v.sha} (warning: committed tree differs from the reviewed snapshot \u2014 re-verify the repository state)`;
}
function pushPreviewText(value) {
  const v = value;
  return [
    `remote ${v.remote.name}: ${v.remote.pushUrl ?? v.remote.fetchUrl}`,
    `local ${v.localBranch} (${v.sourceOid}) -> ${v.remoteBranch}`,
    `${v.aheadCommits.length} candidate commit(s)`,
    v.remoteRefExists === true ? "remote ref exists" : v.remoteRefExists === false ? "remote ref does NOT exist (push would create it)" : "remote could not be queried (facts are local only)",
    v.credentialHelper === void 0 ? "no credential helper configured" : `credential helper: ${v.credentialHelper}`
  ].join("\n");
}
function pushText(value) {
  const v = value;
  return `pushed ${v.remote}/${v.remoteBranch} -> ${v.pushedSha}`;
}
function registerGitTools(ctx) {
  const git = ctx.git;
  ctx.tools.register(defineTool({
    name: "git_status",
    description: "Read the complete work-tree state of the repository containing `cwd` (defaults to the session working directory): clean flag,HEAD, upstream, and every changed path (staged / unstaged / untracked / conflict). Read-only.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(statusText(value)),
      presentationMeta: (_args, value) => statusMeta(value)
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("git_status", args.cwd) };
    },
    async execute(args, exec) {
      return json(await git.status(cwdOf(args.cwd, exec)));
    }
  }));
  ctx.tools.register(defineTool({
    name: "git_diff",
    description: "Read the diff of one scope in the repository containing `cwd`: `unstaged` (work tree against index) or `staged` (index againstHEAD). Optionally limit to one path and request the unified patch (bounded; ask for it after reviewing the summary). Read-only.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      scope: { type: "string", enum: ["staged", "unstaged"], required: true, description: "Which side of the index to diff" },
      path: { type: "string", description: "Optional path relative to the repo root, limiting the diff to one path" },
      wantPatch: { type: "boolean", description: "When true, return the unified patch for the requested scope/path" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(diffText(value)),
      presentationMeta: (_args, value) => diffMeta(value)
    },
    presentCall(args) {
      const detail = [args.scope ?? "unstaged", args.path ?? ""].filter(Boolean).join(" ");
      return { card: "generic", title: cardTitle("git_diff", args.cwd, detail) };
    },
    async execute(args, exec) {
      const cwd = cwdOf(args.cwd, exec);
      return json(await git.diff(
        cwd,
        args.scope,
        args.path,
        args.wantPatch === true,
        args.wantPatch === true ? 512 * 1024 : void 0
      ));
    }
  }));
  ctx.tools.register(defineTool({
    name: "git_stage",
    description: "Stage one whole path into the index of the repository containing `cwd` (`git add` semantics: tracked modifications, renames, anduntracked files alike). Returns the fresh authoritative status after the write. Refused in a read-only session.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      path: { type: "string", required: true, description: "Path relative to the repo root" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(`staged; ${statusText(value)}`),
      presentationMeta: (_args, value) => statusMeta(value)
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("git_stage", args.cwd, String(args.path ?? "")) };
    },
    async execute(args, exec) {
      const cwd = await writableCwd(ctx, exec, args.cwd, "git_stage");
      if (gitReadOnlyByDefault(ctx, exec)) {
        await requireApproval(ctx, exec, "git_stage", `Stage ${args.path} in ${cwd}? This changes the repository index (.git).`, cwd);
      }
      await git.stageFile(cwd, args.path);
      return json(await git.status(cwd));
    }
  }));
  ctx.tools.register(defineTool({
    name: "git_unstage",
    description: "Unstage one whole path: the index moves back toward HEAD and the work tree is untouched. A path with no staged changes is ano-op. Returns the fresh authoritative status. Refused in a read-only session.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      path: { type: "string", required: true, description: "Path relative to the repo root" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(`unstaged; ${statusText(value)}`),
      presentationMeta: (_args, value) => statusMeta(value)
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("git_unstage", args.cwd, String(args.path ?? "")) };
    },
    async execute(args, exec) {
      const cwd = await writableCwd(ctx, exec, args.cwd, "git_unstage");
      if (gitReadOnlyByDefault(ctx, exec)) {
        await requireApproval(ctx, exec, "git_unstage", `Unstage ${args.path} in ${cwd}? This changes the repository index (.git).`, cwd);
      }
      await git.unstageFile(cwd, args.path);
      return json(await git.status(cwd));
    }
  }));
  ctx.tools.register(defineTool({
    name: "git_revert",
    description: "Discard the unstaged modifications of one TRACKED path (restore from the index). Destructive: the work-tree changes are lost.Refused for untracked and conflict paths, in read-only sessions, and without explicit user approval. Returns the fresh statusafter the write.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      path: { type: "string", required: true, description: "Path relative to the repo root" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(`reverted; ${statusText(value)}`),
      presentationMeta: (_args, value) => statusMeta(value)
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("git_revert", args.cwd, String(args.path ?? "")) };
    },
    async execute(args, exec) {
      const cwd = await writableCwd(ctx, exec, args.cwd, "git_revert");
      const expectedPatch = (await git.diff(cwd, "unstaged", args.path, true, 8 * 1024 * 1024)).patch;
      if (expectedPatch === void 0) throw new Error("Cannot inspect the file changes before requesting revert approval");
      await requireApproval(ctx, exec, "git_revert", `Revert ${args.path} in ${cwd}? Unstaged changes to this tracked file will be discarded.`, cwd);
      await git.revertFile(cwd, args.path, expectedPatch);
      return json(await git.status(cwd));
    }
  }));
  ctx.tools.register(defineTool({
    name: "git_commit",
    description: "Commit the staged tree of the repository containing `cwd` with the given message (delivered through stdin; any characters aresafe). Refused without explicit user approval, and by git itself when conflicts are unresolved, the index is empty, or no authoridentity is configured. Returns the new commit SHA and whether its tree matches the pre-commit snapshot.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      message: { type: "string", required: true, description: "The commit message (the user approves this exact text)" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(commitText(value))
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("git_commit", args.cwd) };
    },
    async execute(args, exec) {
      const cwd = await writableCwd(ctx, exec, args.cwd, "git_commit");
      const expectedTree = await git.stagedTree(cwd);
      await requireApproval(ctx, exec, "git_commit", `Commit staged tree ${expectedTree} in ${cwd} with message: ${args.message}`, cwd);
      return json(await git.commit(cwd, args.message, expectedTree));
    }
  }));
  ctx.tools.register(defineTool({
    name: "git_push_preview",
    description: "Preview a push from the repository containing `cwd` without writing anything: remote URL, local branch, target remote ref, aheadcommits, whether the remote ref exists, the default branch, and the credential helper. Read-only.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      remote: { type: "string", required: true, description: "The remote that would receive the push (e.g. origin)" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(pushPreviewText(value)),
      presentationMeta: (_args, value) => {
        const preview = value;
        return { remote: preview.remote.name, localBranch: preview.localBranch, remoteBranch: preview.remoteBranch };
      }
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("git_push_preview", args.cwd, String(args.remote ?? "")) };
    },
    async execute(args, exec) {
      const { destinationToken: _destinationToken, ...preview } = await git.pushPreview(cwdOf(args.cwd, exec), args.remote);
      return json(preview);
    }
  }));
  ctx.tools.register(defineTool({
    name: "git_push",
    description: "Push one local branch to one remote branch (`git push <remote> <local>:<remoteBranch>`). Explicit external write: refusedwithout explicit user approval, in read-only sessions, and for refused pushes (classified by git, nothing retried). Neverconfigures upstream. Returns the remote ref's new SHA.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      remote: { type: "string", required: true, description: "The remote to push to (e.g. origin)" },
      localBranch: { type: "string", required: true, description: "The local branch to push" },
      remoteBranch: { type: "string", required: true, description: "The remote branch ref to update" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(pushText(value))
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("git_push", args.cwd, `${String(args.localBranch ?? "")} -> ${String(args.remoteBranch ?? "")}@${String(args.remote ?? "")}`) };
    },
    async execute(args, exec) {
      const cwd = await writableCwd(ctx, exec, args.cwd, "git_push");
      const preview = await git.pushPreview(cwd, args.remote, args.localBranch, args.remoteBranch);
      const ahead = preview.aheadCommits.length;
      const pushUrl = preview.remote.pushUrl ?? preview.remote.fetchUrl;
      await requireApproval(ctx, exec, "git_push", `Push ${args.localBranch} (${preview.sourceOid}) to ${args.remote}/${args.remoteBranch} (${ahead} candidate commit(s), remote ${pushUrl})?`, cwd);
      return json(await git.push(
        cwd,
        args.remote,
        args.localBranch,
        args.remoteBranch,
        { sourceOid: preview.sourceOid, destinationToken: preview.destinationToken }
      ));
    }
  }));
}

// src/host/coding-tools/pr-tools.ts
import { defineTool as defineTool2 } from "@deepseek-ai/dsh-tools";
function availabilityText(value) {
  const v = value;
  return v.available === true ? `pull requests available: ${String(v.auth?.account ?? "")} @ ${String(v.auth?.host ?? "")}` : `pull requests unavailable: ${String(v.reason ?? "unknown")}`;
}
function existingText(value) {
  const v = value;
  if (v.found !== true) return "no existing pull request for this head";
  return `existing pull request #${String(v.number ?? "")}: ${v.url ?? ""}`;
}
function createdText(value) {
  const v = value;
  return `pull request created: #${String(v.number ?? "")} ${v.url ?? ""}`;
}
function registerPrTools(ctx) {
  const pullRequest = ctx.pullRequest;
  ctx.tools.register(defineTool2({
    name: "pr_availability",
    description: "Report whether pull requests can be created from the repository containing `cwd`: the provider login facts (host and account \u2014never a token) or the reason creation is unavailable. Read-only.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(availabilityText(value))
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("pr_availability", args.cwd) };
    },
    async execute(args, exec) {
      return json(await pullRequest.availability(cwdOf(args.cwd, exec)));
    }
  }));
  ctx.tools.register(defineTool2({
    name: "pr_existing",
    description: "Find an existing pull request whose head is the given branch in the repository containing `cwd` (duplicate-creation guard).Read-only; resolves to nothing when no PR exists.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      head: { type: "string", required: true, description: "The head branch to look up" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(existingText(value))
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("pr_existing", args.cwd, String(args.head ?? "")) };
    },
    async execute(args, exec) {
      const existing = await pullRequest.existing(cwdOf(args.cwd, exec), args.head);
      return existing === void 0 ? { found: false } : json({ found: true, url: existing.url, number: existing.number });
    }
  }));
  ctx.tools.register(defineTool2({
    name: "pr_create",
    description: "Create a pull request from the repository containing `cwd` through the logged-in provider. Explicit external write: refusedwithout explicit user approval, in read-only sessions, when the provider is unavailable, or when the head branch already has aPR. Never sends a token.",
    parameters: {
      cwd: { type: "string", description: "Working directory inside the repository; defaults to the session working directory" },
      title: { type: "string", required: true, description: "Pull request title (the user approves this exact text)" },
      body: { type: "string", required: true, description: "Pull request body" },
      base: { type: "string", required: true, description: "Base branch (the target of the pull request)" },
      head: { type: "string", required: true, description: "Head branch (your changes)" },
      draft: { type: "boolean", description: "Create as a draft pull request" }
    },
    output: {
      schema: { type: "object", additionalProperties: true },
      render: (_args, value) => text(createdText(value))
    },
    presentCall(args) {
      return { card: "generic", title: cardTitle("pr_create", args.cwd, String(args.title ?? "")) };
    },
    async execute(args, exec) {
      const cwd = await writableCwd(ctx, exec, args.cwd, "pr_create");
      await requireApproval(ctx, exec, "pr_create", `Create pull request "${args.title}" (${args.base} <- ${args.head}) in ${cwd}?

${args.body}`, cwd);
      return json(await pullRequest.create(cwd, {
        title: args.title,
        body: args.body,
        base: args.base,
        head: args.head,
        draft: args.draft === true
      }));
    }
  }));
}

// src/host/coding-tools/index.ts
async function writableCwd(ctx, exec, explicitCwd, toolName) {
  exec.signal.throwIfAborted();
  let policy = ctx.sandboxPolicy?.resolve(exec.agent === void 0 ? {} : { session: exec.agent.session });
  if (policy === void 0 || policy.mode === "read-only") {
    throw new Error(`${toolName} refused: this session is read-only`);
  }
  const repo = await ctx.git.repoIdentity(cwdOf(explicitCwd, exec));
  policy = ctx.sandboxPolicy?.resolve(exec.agent === void 0 ? {} : { session: exec.agent.session });
  if (policy === void 0 || policy.mode === "read-only") throw new Error(`${toolName} refused: this session is read-only`);
  const root = canonicalPath(repo.root);
  if (policy.mode === "workspace-write" && !writableRoots(policy).some((grant) => {
    const suffix = relative(grant, root);
    return suffix === "" || !isAbsolute(suffix) && suffix !== ".." && !suffix.startsWith(`..${sep}`);
  })) throw new Error(`${toolName} refused: repository ${root} is outside the writable workspace`);
  exec.signal.throwIfAborted();
  return root;
}
function gitReadOnlyByDefault(ctx, exec) {
  return ctx.sandboxPolicy?.resolve(exec.agent === void 0 ? {} : { session: exec.agent.session }).mode === "workspace-write";
}
function cwdOf(cwd, exec, exists = existsSync) {
  const sessionCwd = exec.agent?.session?.header?.cwd;
  let target;
  if (cwd !== void 0 && cwd !== "") {
    target = isAbsolute(cwd) || sessionCwd === void 0 ? cwd : resolve(sessionCwd, cwd);
  } else {
    if (sessionCwd === void 0) {
      throw new Error("no working directory: pass cwd, or run inside a session that has one");
    }
    target = sessionCwd;
  }
  if (!exists(target)) throw new Error(`working directory does not exist: ${target}`);
  return target;
}
function text(value) {
  return [{ type: "text", text: value }];
}
function json(value) {
  return value;
}
function cardTitle(tool, cwd, detail = "") {
  return `${tool} ${cwd ?? "<session-cwd>"}${detail === "" ? "" : ` ${detail}`}`;
}
async function requireApproval(ctx, exec, toolName, reason, cwd) {
  exec.signal.throwIfAborted();
  if (ctx.sandboxPolicy?.resolve(exec.agent === void 0 ? {} : { session: exec.agent.session }).mode === "danger-full-access") return;
  const approval = ctx.approval;
  if (approval === void 0 || exec.agent === void 0) {
    throw new Error(`${toolName} refused: no approval channel is available (fail closed)`);
  }
  const outcome = await approval.request({
    agent: exec.agent,
    toolName,
    callId: exec.callId,
    reason,
    signal: exec.signal
  });
  if (outcome !== "allowed-once") {
    throw new Error(`${toolName} refused: the user did not approve this action`);
  }
  exec.signal.throwIfAborted();
  if (await writableCwd(ctx, exec, cwd, toolName) !== canonicalPath(cwd)) {
    throw new Error(`${toolName} refused: the repository changed while approval was pending`);
  }
}
var inject = ["tools", "git", "pullRequest", "sandboxPolicy", "approval"];
function apply(ctx) {
  registerGitTools(ctx);
  registerPrTools(ctx);
}
export {
  apply,
  cardTitle,
  cwdOf,
  gitReadOnlyByDefault,
  inject,
  json,
  requireApproval,
  text,
  writableCwd
};
