import "../chunks/chunk-QDQBS6CD.js";

// src/host/git-local/index.ts
import { createHmac, randomBytes } from "node:crypto";
import { relative, resolve, sep } from "node:path";

// src/host/git/index.ts
import { Service } from "@deepseek-ai/cordis";
function redactGitText(text) {
  return text.replace(/([a-z][a-z0-9+.-]*:\/\/)[^/@\s]+@/giu, "$1<redacted>@").replace(/([?&](?:token|access_token|private_token|password)=)[^\s&#]*/giu, "$1<redacted>").replace(/github_pat_[A-Za-z0-9_]{16,}/gu, "github_pat_<redacted>").replace(/gh[pousr]_[A-Za-z0-9]{16,}/gu, "gh*_<redacted>");
}
var GitUnavailableError = class extends Error {
  /**
   * @param detail - Resolution or spawn failure detail.
   */
  constructor(detail) {
    super(`git is unavailable: ${redactGitText(detail)}`);
    this.name = "GitUnavailableError";
  }
};
var GitNotARepositoryError = class extends Error {
  /**
   * @param cwd - The directory that failed the repository probe.
   */
  constructor(cwd) {
    super(`'${cwd}' is not inside a Git repository`);
    this.cwd = cwd;
    this.name = "GitNotARepositoryError";
  }
};
var GitUnsupportedVersionError = class extends Error {
  /**
   * @param version - The version git reported.
   * @param minimum - The lowest supported version.
   */
  constructor(version, minimum) {
    super(`git ${version} is too old; the read model needs git >= ${minimum}`);
    this.version = version;
    this.minimum = minimum;
    this.name = "GitUnsupportedVersionError";
  }
};
var GitCommandFailedError = class extends Error {
  /**
   * @param command - The argv that failed.
   * @param cwd - The working directory the command ran in.
   * @param exitCode - The process exit code.
   * @param stderr - Captured stderr, redacted before presentation.
   * @param timedOut - Whether the command exceeded its deadline.
   */
  constructor(command, cwd, exitCode, stderr, timedOut = false) {
    super(
      redactGitText(`git ${command.slice(1).join(" ")} ${timedOut ? "timed out" : `failed (exit ${String(exitCode)})`}: ${stderr.trim()}`)
    );
    this.command = command;
    this.cwd = cwd;
    this.exitCode = exitCode;
    this.stderr = stderr;
    this.timedOut = timedOut;
    this.command = command.map(redactGitText);
    this.stderr = redactGitText(stderr);
    this.name = "GitCommandFailedError";
  }
};
var GitDiffTooLargeError = class extends Error {
  /**
   * @param path - The path whose patch exceeded the bound.
   * @param maxBytes - The bound that was exceeded.
   */
  constructor(path, maxBytes) {
    super(`diff of '${path}' exceeds the ${String(maxBytes)}-byte patch bound`);
    this.path = path;
    this.maxBytes = maxBytes;
    this.name = "GitDiffTooLargeError";
  }
};
var GitRevertRefusedError = class extends Error {
  /**
   * @param path - The refused path.
   * @param reason - Which precondition failed.
   */
  constructor(path, reason) {
    super(`cannot revert '${path}': the path is ${reason === "untracked" ? "untracked" : "an unmerged conflict entry"}`);
    this.path = path;
    this.reason = reason;
    this.name = "GitRevertRefusedError";
  }
};
var GitCommitRefusedError = class extends Error {
  /**
   * @param reason - Which precondition failed.
   */
  constructor(reason) {
    super(reason === "conflict" ? "cannot commit: the work tree has unresolved conflicts" : reason === "empty-index" ? "cannot commit: nothing is staged" : "cannot commit: no author identity is configured (user.name/user.email)");
    this.reason = reason;
    this.name = "GitCommitRefusedError";
  }
};
var GitStagedTreeDriftError = class extends Error {
  /**
   * @param expected - The tree oid the caller confirmed.
   * @param actual - The tree oid the index holds now.
   */
  constructor(expected, actual) {
    super(`staged tree changed since review (${expected} \u2192 ${actual}); re-review the staged diff before committing`);
    this.expected = expected;
    this.actual = actual;
    this.name = "GitStagedTreeDriftError";
  }
};
var GitPushRefusedError = class extends Error {
  /**
   * @param reason - The classified refusal.
   * @param stderr - The raw git stderr, verbatim.
   */
  constructor(reason, stderr) {
    super(`git push refused (${reason}): ${stderr}`);
    this.reason = reason;
    this.stderr = stderr;
    this.name = "GitPushRefusedError";
  }
};
var GitNoSuchRemoteError = class extends Error {
  /**
   * @param remote - The remote name that is not configured.
   */
  constructor(remote) {
    super(`no remote '${remote}' is configured in this repository`);
    this.remote = remote;
    this.name = "GitNoSuchRemoteError";
  }
};
var GitCapability = class extends Service {
  constructor(ctx) {
    super(ctx, "git");
  }
};

// src/host/git-local/parse.ts
function parseGitVersion(output) {
  const raw = output.trim();
  const match = /git version (\d+)\.(\d+)/u.exec(raw);
  if (match == null) {
    throw new Error(`cannot parse git version from '${raw}'`);
  }
  return { major: Number(match[1]), minor: Number(match[2]), raw };
}
function parsePorcelainV2(output) {
  const headers = {};
  let records = output;
  while (records.startsWith("# ")) {
    const nul = records.indexOf("\0");
    const line = nul === -1 ? records : records.slice(0, nul);
    const rest = nul === -1 ? "" : records.slice(nul + 1);
    const space = line.indexOf(" ", 2);
    if (space !== -1) headers[line.slice(2, space)] = line.slice(space + 1);
    records = rest;
  }
  const head = { kind: "branch", name: headers["branch.head"] ?? "" };
  const oid = headers["branch.oid"];
  if (oid !== void 0 && oid !== "" && oid !== "(initial)") head.oid = oid;
  if (oid === "(initial)") head.kind = "unborn";
  else if (head.name === "(detached)") {
    head.kind = "detached";
    head.name = head.oid ?? "";
  } else if (head.name === "") head.kind = head.oid === void 0 ? "unborn" : "detached";
  let upstream;
  if (headers["branch.upstream"] !== void 0) {
    const ab = headers["branch.ab"] ?? "+0 -0";
    const ahead = Number(/\+(\d+)/u.exec(ab)?.[1] ?? 0);
    const behind = Number(/-(\d+)/u.exec(ab)?.[1] ?? 0);
    upstream = { ref: headers["branch.upstream"], ahead, behind };
  }
  const entries = [];
  const fields = records.split("\0");
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (field === "") continue;
    if (field.startsWith("? ")) {
      entries.push({
        kind: "untracked",
        path: field.slice(2),
        x: "?",
        y: "?"
      });
      continue;
    }
    if (field.startsWith("u ")) {
      const parts = field.split(" ");
      entries.push({
        kind: "conflict",
        path: parts.slice(10).join(" "),
        x: code(parts[1]?.[0]),
        y: code(parts[1]?.[1])
      });
      continue;
    }
    if (field.startsWith("1 ") || field.startsWith("2 ")) {
      const parts = field.split(" ");
      const xy = parts[1] ?? "..";
      const x = code(xy[0]);
      const y = code(xy[1]);
      let path = parts.slice(8).join(" ");
      let origPath;
      let score;
      if (field.startsWith("2 ")) {
        score = (parts[8] ?? "").slice(1);
        path = parts.slice(9).join(" ");
        const next = fields[i + 1];
        if (next !== void 0 && next !== "") {
          origPath = next;
          i++;
        }
      }
      entries.push({
        kind: x !== "." ? "staged" : "unstaged",
        path,
        ...origPath === void 0 ? {} : { origPath },
        x,
        y,
        ...score === void 0 ? {} : { score }
      });
    }
  }
  return {
    clean: entries.length === 0,
    head,
    ...upstream === void 0 ? {} : { upstream },
    entries
  };
}
var code = (letter) => letter === void 0 || letter === "" ? "." : letter;
function parseWorktreePorcelain(output) {
  const worktrees = [];
  for (const block of output.split("\n\n")) {
    const lines = block.split("\n").filter((line) => line !== "");
    if (lines.length === 0) continue;
    const fields = {};
    let detached = false;
    let bare = false;
    for (const line of lines) {
      const space = line.indexOf(" ");
      if (space === -1) {
        if (line === "detached") detached = true;
        if (line === "bare") bare = true;
        continue;
      }
      fields[line.slice(0, space)] = line.slice(space + 1);
    }
    if (fields["worktree"] === void 0) continue;
    worktrees.push({
      path: fields["worktree"],
      head: fields["HEAD"] ?? "",
      ...fields["branch"] === void 0 ? {} : { branch: fields["branch"].replace(/^refs\/heads\//u, "") },
      detached,
      bare
    });
  }
  return worktrees;
}
var LOG_FORMAT = "%H%x1f%s%x1f%an%x1f%ct";
function parseLogRecords(output) {
  const commits = [];
  for (const line of output.split("\n")) {
    if (line === "") continue;
    const [sha, subject, author, seconds] = line.split("");
    if (sha === void 0 || subject === void 0 || author === void 0 || seconds === void 0) continue;
    const time = Number(seconds) * 1e3;
    if (!Number.isFinite(time)) continue;
    commits.push({ sha, subject, author, time });
  }
  return commits;
}
function parseNameStatusZ(output) {
  const records = [];
  const fields = output.split("\0");
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (field === "") continue;
    const status = field[0];
    const scoreText = field.slice(1);
    const first = fields[i + 1];
    if (first === void 0 || first === "") continue;
    i++;
    let path = first;
    let origPath;
    if (status === "R" || status === "C") {
      const second = fields[i + 1];
      if (second !== void 0 && second !== "") {
        origPath = first;
        path = second;
        i++;
      }
    }
    records.push({
      status: statusOf(status),
      path,
      ...origPath === void 0 ? {} : { origPath },
      ...scoreText === "" ? {} : { score: Number(scoreText) }
    });
  }
  return records;
}
var statusOf = (letter) => {
  switch (letter) {
    case "A":
      return "added";
    case "M":
      return "modified";
    case "D":
      return "deleted";
    case "R":
      return "renamed";
    case "C":
      return "copied";
    case "T":
      return "typechange";
    default:
      return "modified";
  }
};
function parseNumstatZ(output) {
  const records = [];
  const fields = output.split("\0");
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (field === "") continue;
    const tab1 = field.indexOf("	");
    const tab2 = tab1 === -1 ? -1 : field.indexOf("	", tab1 + 1);
    if (tab1 === -1 || tab2 === -1) continue;
    const added = field.slice(0, tab1);
    const deleted = field.slice(tab1 + 1, tab2);
    let path = field.slice(tab2 + 1);
    const binary = added === "-" || deleted === "-";
    let origPath;
    if (path === "") {
      const pre = fields[i + 1];
      const post = fields[i + 2];
      if (pre === void 0 || pre === "" || post === void 0 || post === "") continue;
      origPath = pre;
      path = post;
      i += 2;
    }
    records.push({
      path,
      ...origPath === void 0 ? {} : { origPath },
      binary,
      ...binary ? {} : { addedLines: Number(added), deletedLines: Number(deleted) }
    });
  }
  return records;
}
function mergeDiffSummaries(names, numstats) {
  const byPath = /* @__PURE__ */ new Map();
  for (const numstat of numstats) byPath.set(numstat.path, numstat);
  return names.map((name) => {
    const numstat = byPath.get(name.path);
    return {
      path: name.path,
      ...name.origPath === void 0 ? {} : { origPath: name.origPath },
      status: name.status,
      binary: numstat?.binary ?? false,
      ...numstat?.binary === true || numstat === void 0 ? {} : { addedLines: numstat.addedLines, deletedLines: numstat.deletedLines },
      ...name.score === void 0 ? {} : { score: name.score }
    };
  });
}

// src/host/git-local/index.ts
var READ_MODEL_MAX_BYTES = 4 * 1024 * 1024;
var DEFAULT_PATCH_MAX_BYTES = 512 * 1024;
function classifyPushFailure(stderr) {
  if (/non-fast-forward|fetch first|stale info|update rejected/u.test(stderr)) return "non-fast-forward";
  if (/protected branch hook declined|pre-receive hook declined/u.test(stderr)) return "protected";
  if (/Authentication failed|could not read Username|terminal prompts disabled|Bad credentials/u.test(stderr) || /authentication required|HTTP 401|HTTP 403/u.test(stderr)) {
    return "auth";
  }
  if (/repository.*?not found|does not appear to be a git repository/u.test(stderr)) return "not-found";
  if (/Could not resolve host|Connection refused|unable to access|Failed to connect|Timed out|Could not read from remote/u.test(stderr)) {
    return "network";
  }
  return "rejected";
}
var STAGED_PATCH_MAX_BYTES = 8 * 1024 * 1024;
var NOT_A_REPOSITORY = /^fatal: not a git repository\b/m;
var GIT_QUERY_TIMEOUT_MS = 3e4;
var GIT_PUSH_TIMEOUT_MS = 10 * 6e4;
var GIT_REMOTE_QUERY_TIMEOUT_MS = 6e4;
var GIT_QUERY_GRACE_MS = 5e3;
var MINIMUM_GIT_VERSION = "2.11.0";
var LocalGitCapability = class extends GitCapability {
  static inject = ["subprocess"];
  minimumGitVersion = MINIMUM_GIT_VERSION;
  executablePromise;
  versionChecked = false;
  destinationKey = randomBytes(32);
  destinationToken(url) {
    return createHmac("sha256", this.destinationKey).update(url).digest("hex");
  }
  async resolveGit() {
    this.executablePromise ??= this.resolveExecutable().catch((error) => {
      this.executablePromise = void 0;
      throw error;
    });
    return await this.executablePromise;
  }
  async repoIdentity(cwd) {
    await this.ensureUsable();
    const output = await this.run(cwd, [
      "rev-parse",
      "--show-toplevel",
      "--absolute-git-dir",
      "--is-bare-repository"
    ], {
      notARepository: true
    });
    const [root, gitDir, bare] = output.stdout.split("\n");
    if (root === void 0 || root === "" || gitDir === void 0 || gitDir === "") {
      throw new GitNotARepositoryError(cwd);
    }
    return { root: root.trim(), gitDir: gitDir.trim(), bare: bare?.trim() === "true" };
  }
  async head(cwd) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const branch = (await this.run(cwd, ["branch", "--show-current"])).stdout.trim();
    let oid;
    try {
      oid = (await this.run(cwd, ["rev-parse", "HEAD"])).stdout.trim();
    } catch (error) {
      if (error instanceof GitCommandFailedError && branch !== "") {
        return { kind: "unborn", branch };
      }
      throw error;
    }
    if (oid === "") throw new GitNotARepositoryError(cwd);
    if (branch === "") return { kind: "detached", oid };
    return { kind: "branch", branch, oid };
  }
  async upstream(cwd) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    let ref;
    try {
      ref = (await this.run(cwd, ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"])).stdout.trim();
    } catch (error) {
      if (error instanceof GitCommandFailedError && error.exitCode === 128) return void 0;
      throw error;
    }
    if (ref === "") return void 0;
    const counts = (await this.run(cwd, ["rev-list", "--left-right", "--count", "@{u}...HEAD"])).stdout.trim();
    const [behindText, aheadText] = counts.split(/\s+/u);
    const ahead = Number(aheadText);
    const behind = Number(behindText);
    return {
      ref,
      ahead: Number.isFinite(ahead) ? ahead : 0,
      behind: Number.isFinite(behind) ? behind : 0
    };
  }
  async worktrees(cwd) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const output = await this.run(cwd, ["-c", "core.quotePath=false", "worktree", "list", "--porcelain"]);
    return parseWorktreePorcelain(output.stdout);
  }
  async worktreeAdd(cwd, path, branch) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    await this.run(cwd, ["worktree", "add", "-q", "-b", branch, path]);
  }
  async worktreeRemove(cwd, path) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    await this.run(cwd, ["worktree", "remove", path]);
  }
  async status(cwd) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const output = await this.run(cwd, ["-c", "core.fsmonitor=false", "status", "--porcelain=v2", "--branch", "-z"]);
    return parsePorcelainV2(output.stdout);
  }
  async log(cwd, max) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const head = await this.head(cwd);
    if (head.kind === "unborn") return [];
    const count = Math.max(1, Math.floor(max));
    const output = await this.run(cwd, ["log", "-n", String(count), `--format=${LOG_FORMAT}`]);
    return parseLogRecords(output.stdout);
  }
  async diff(cwd, scope, path, wantPatch, patchMaxBytes = DEFAULT_PATCH_MAX_BYTES) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const cached = scope === "staged" ? ["--cached"] : [];
    const pathspec = path === void 0 ? [] : ["--", path];
    const command = ["--literal-pathspecs", "-c", "core.fsmonitor=false", "diff", "--no-ext-diff", "--no-textconv", ...cached];
    const names = await this.run(cwd, [...command, "--name-status", "-z", ...pathspec]);
    const numstats = await this.run(cwd, [...command, "--numstat", "-z", ...pathspec]);
    const files = mergeDiffSummaries(parseNameStatusZ(names.stdout), parseNumstatZ(numstats.stdout));
    if (wantPatch !== true) return { files };
    const patch = await this.run(cwd, [...command, "--binary", ...pathspec], { maxBytes: patchMaxBytes });
    return { files, patch: patch.stdout };
  }
  async applyIndexPatch(cwd, patch, reverse) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const args = ["apply", "--cached", ...reverse ? ["--reverse"] : [], "-"];
    await this.run(cwd, args, { stdin: patch });
  }
  async stageFile(cwd, path) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    await this.run(cwd, ["--literal-pathspecs", "add", "--", ...await this.renamePaths(cwd, path)]);
  }
  async unstageFile(cwd, path) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const paths = await this.renamePaths(cwd, path);
    const staged = await this.run(
      cwd,
      ["--literal-pathspecs", "diff", "--no-ext-diff", "--no-textconv", "--cached", "--binary", "--", ...paths],
      { maxBytes: STAGED_PATCH_MAX_BYTES }
    );
    if (staged.stdout === "") return;
    await this.run(cwd, ["apply", "--cached", "--reverse", "-"], { stdin: staged.stdout });
  }
  /**
   * Both sides of a rename entry addressed by either path, the path alone
   * otherwise. A rename spans two paths (the original deleted, the new one
   * added); a pathspec limited to one side would stage or unstage only half.
   */
  async renamePaths(cwd, path) {
    const root = (await this.repoIdentity(cwd)).root;
    const name = relative(root, resolve(cwd, path)).split(sep).join("/");
    const entry = (await this.status(cwd)).entries.find((candidate) => candidate.path === name || candidate.origPath === name);
    return entry?.origPath !== void 0 && entry.origPath !== entry.path ? [entry.origPath, entry.path].map((value) => relative(cwd, resolve(root, value))) : [path];
  }
  async revertFile(cwd, path, expectedPatch) {
    await this.ensureUsable();
    const root = (await this.repoIdentity(cwd)).root;
    const name = relative(root, resolve(cwd, path)).split(sep).join("/");
    const status = await this.status(cwd);
    const entry = status.entries.find((candidate) => candidate.path === name || candidate.origPath === name);
    if (entry === void 0) throw new Error("Revert requires one exact changed tracked path from git_status");
    if (entry.kind === "untracked") throw new GitRevertRefusedError(path, "untracked");
    if (entry.kind === "conflict") throw new GitRevertRefusedError(path, "conflict");
    if (expectedPatch !== void 0 && (await this.diff(cwd, "unstaged", path, true, STAGED_PATCH_MAX_BYTES)).patch !== expectedPatch) {
      throw new Error("The file changed after approval; request a new revert approval");
    }
    await this.run(cwd, ["--literal-pathspecs", "checkout", "--", path]);
  }
  async authorIdentity(cwd) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    let output;
    try {
      output = (await this.run(cwd, ["var", "GIT_AUTHOR_IDENT"])).stdout.trim();
    } catch (error) {
      if (error instanceof GitCommandFailedError) return void 0;
      throw error;
    }
    const open = output.lastIndexOf(" <");
    const close = open === -1 ? -1 : output.indexOf(">", open);
    if (open === -1 || close === -1) return void 0;
    const name = output.slice(0, open);
    const email = output.slice(open + 2, close);
    if (name === "" || email === "") return void 0;
    return { name, email };
  }
  async stagedTree(cwd) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const oid = (await this.run(cwd, ["write-tree"])).stdout.trim();
    if (oid === "") throw new GitCommandFailedError(["git", "write-tree"], cwd, null, "write-tree reported no tree");
    return oid;
  }
  async commit(cwd, message, expectedTree) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const status = await this.status(cwd);
    if (status.entries.some((entry) => entry.kind === "conflict")) {
      throw new GitCommitRefusedError("conflict");
    }
    const staged = await this.run(cwd, ["diff", "--cached", "--name-only", "-z"]);
    if (staged.stdout === "") {
      throw new GitCommitRefusedError("empty-index");
    }
    if (await this.authorIdentity(cwd) === void 0) {
      throw new GitCommitRefusedError("identity");
    }
    const actualTree = await this.stagedTree(cwd);
    if (actualTree !== expectedTree) {
      throw new GitStagedTreeDriftError(expectedTree, actualTree);
    }
    await this.run(cwd, ["commit", "-F", "-"], { stdin: message });
    const sha = (await this.run(cwd, ["rev-parse", "HEAD"])).stdout.trim();
    if (sha === "") throw new GitCommandFailedError(["git", "rev-parse", "HEAD"], cwd, null, "commit reported no HEAD");
    const headTree = (await this.run(cwd, ["rev-parse", "HEAD^{tree}"])).stdout.trim();
    return { sha, treeMatchesExpected: headTree === expectedTree };
  }
  async remotes(cwd) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const output = await this.run(cwd, ["remote", "-v"]);
    const entries = /* @__PURE__ */ new Map();
    for (const line of output.stdout.split("\n")) {
      const [name, rest] = line.split("	");
      if (name === void 0 || rest === void 0) continue;
      const match = /^(.*?)\s+\((fetch|push)\)$/u.exec(rest);
      if (match === null) continue;
      const existing = entries.get(name);
      const entry = existing === void 0 ? {} : { ...existing };
      const url = match[1];
      if (url !== void 0) {
        if (match[2] === "fetch") entry.fetchUrl = url;
        else entry.pushUrl = url;
      }
      entries.set(name, entry);
    }
    return [...entries].map(([name, urls]) => ({
      name,
      fetchUrl: redactGitText(urls.fetchUrl ?? ""),
      ...urls.pushUrl === void 0 || urls.pushUrl === urls.fetchUrl ? {} : { pushUrl: redactGitText(urls.pushUrl) }
    }));
  }
  /** Resolve one destination; multiple push URLs require a caller to choose explicitly. */
  async pushUrl(cwd, remote) {
    const urls = (await this.run(cwd, ["remote", "get-url", "--push", "--all", remote])).stdout.trim().split("\n");
    const url = urls[0];
    if (urls.length !== 1 || url === void 0 || url === "") throw new Error("push requires exactly one configured push URL");
    return url;
  }
  /** Validate a branch name without accepting refspec operations. */
  async branchRef(cwd, branch) {
    if (branch === "" || /^[+-]/u.test(branch)) throw new Error("push requires a branch name, not a refspec");
    const ref = `refs/heads/${branch}`;
    await this.run(cwd, ["check-ref-format", ref]);
    return ref;
  }
  async pushPreview(cwd, remote, localBranch, remoteBranch) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const all = await this.remotes(cwd);
    const info = all.find((candidate) => candidate.name === remote);
    if (info === void 0) throw new GitNoSuchRemoteError(remote);
    const head = await this.head(cwd);
    if (localBranch === void 0 && head.kind !== "branch") {
      throw new GitCommandFailedError(
        ["git", "branch", "--show-current"],
        cwd,
        null,
        "a push preview needs a checked-out branch (detached or unborn HEAD)"
      );
    }
    localBranch ??= head.kind === "branch" ? head.branch : "";
    remoteBranch ??= localBranch;
    const source = await this.branchRef(cwd, localBranch);
    const target = await this.branchRef(cwd, remoteBranch);
    const sourceOid = (await this.run(cwd, ["rev-parse", "--verify", `${source}^{commit}`])).stdout.trim();
    const pushUrl = await this.pushUrl(cwd, remote);
    const upstream = await this.upstream(cwd);
    let remoteRefExists;
    let defaultBranch;
    let remoteOid;
    try {
      const ls = await this.run(
        cwd,
        ["ls-remote", "--symref", "--", pushUrl, target, "HEAD"],
        { maxBytes: 64 * 1024, timeoutMs: GIT_REMOTE_QUERY_TIMEOUT_MS }
      );
      for (const line of ls.stdout.split("\n")) {
        const symref = /^ref:\s+refs\/heads\/(\S+)\s+HEAD$/u.exec(line);
        if (symref !== null) defaultBranch = symref[1];
      }
      remoteRefExists = ls.stdout.split("\n").some((line) => {
        if (line.startsWith("ref:")) return false;
        const ref = line.split(String.fromCharCode(9))[1];
        if (ref !== target) return false;
        remoteOid = line.split(String.fromCharCode(9))[0];
        return true;
      });
    } catch {
      remoteRefExists = void 0;
    }
    let range = sourceOid;
    if (remoteOid !== void 0) {
      try {
        await this.run(cwd, ["cat-file", "-e", `${remoteOid}^{commit}`]);
        range = `${remoteOid}..${sourceOid}`;
      } catch {
      }
    }
    const log = await this.run(cwd, ["log", "--oneline", range]);
    const aheadCommits = log.stdout.split("\n").filter((line) => line !== "");
    let credentialHelper;
    try {
      const helper = (await this.run(cwd, ["config", "--get", "credential.helper"])).stdout.trim();
      if (helper !== "") credentialHelper = /^[A-Za-z0-9._-]+$/u.test(helper) ? helper : "custom helper (details hidden)";
    } catch {
    }
    return {
      remote: { ...info, pushUrl: redactGitText(pushUrl) },
      destinationToken: this.destinationToken(pushUrl),
      sourceOid,
      localBranch,
      remoteBranch,
      ...upstream === void 0 ? {} : { upstream: upstream.ref },
      aheadCommits,
      remoteRefExists,
      ...defaultBranch === void 0 ? {} : { defaultBranch },
      ...credentialHelper === void 0 ? {} : { credentialHelper }
    };
  }
  async push(cwd, remote, localBranch, remoteBranch, expected) {
    await this.ensureUsable();
    await this.repoIdentity(cwd);
    const all = await this.remotes(cwd);
    if (!all.some((candidate) => candidate.name === remote)) throw new GitNoSuchRemoteError(remote);
    const source = await this.branchRef(cwd, localBranch);
    const target = await this.branchRef(cwd, remoteBranch);
    const sourceOid = (await this.run(cwd, ["rev-parse", "--verify", `${source}^{commit}`])).stdout.trim();
    const pushUrl = await this.pushUrl(cwd, remote);
    if (expected !== void 0 && (expected.sourceOid !== sourceOid || expected.destinationToken !== this.destinationToken(pushUrl))) {
      throw new Error("push source or destination changed after approval; request a new preview");
    }
    try {
      await this.run(cwd, ["push", "--", pushUrl, `${sourceOid}:${target}`], { timeoutMs: GIT_PUSH_TIMEOUT_MS });
    } catch (error) {
      if (error instanceof GitCommandFailedError && error.exitCode !== null && !error.timedOut) {
        throw new GitPushRefusedError(classifyPushFailure(error.stderr), error.stderr);
      }
      throw error;
    }
    const ls = await this.run(cwd, ["ls-remote", "--", pushUrl, target], { timeoutMs: GIT_REMOTE_QUERY_TIMEOUT_MS });
    const pushedSha = ls.stdout.split("\n").find((line) => line !== "")?.split("	")[0] ?? "";
    if (pushedSha === "") {
      throw new GitCommandFailedError(
        ["git", "ls-remote", remote],
        cwd,
        null,
        "push succeeded but the remote ref was not reported"
      );
    }
    try {
      await this.run(cwd, ["update-ref", `refs/remotes/${remote}/${remoteBranch}`, pushedSha]);
    } catch {
    }
    return { remote, remoteBranch, pushedSha };
  }
  async resolveExecutable() {
    try {
      return await this.ctx.subprocess.resolveExecutable("git");
    } catch (error) {
      throw new GitUnavailableError(
        `'git' is not resolvable: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /** Check the installed version once; every later query trusts the result. */
  async ensureUsable() {
    if (this.versionChecked) return;
    const git = await this.resolveGit();
    let output;
    let stderr = "";
    let exitCode;
    try {
      const handle = this.spawn(process.cwd(), git, ["--version"], void 0);
      const outcome = await handle.done;
      exitCode = outcome.exitCode;
      output = handle.collected.stdout?.readFrom(0).text ?? "";
      stderr = handle.collected.stderr?.readFrom(0).text ?? "";
    } catch (error) {
      throw new GitUnavailableError(
        `'git --version' could not run: ${error instanceof Error ? error.message : String(error)}`
      );
    }
    if (exitCode !== 0) {
      throw new GitCommandFailedError([git, "--version"], process.cwd(), exitCode, stderr);
    }
    const version = parseGitVersion(output);
    const [minimumMajor, minimumMinor] = MINIMUM_GIT_VERSION.split(".").map(Number);
    if (version.major < minimumMajor || version.major === minimumMajor && version.minor < minimumMinor) {
      throw new GitUnsupportedVersionError(version.raw, MINIMUM_GIT_VERSION);
    }
    this.versionChecked = true;
  }
  /** Run one git command with exact argv and bounded collected output. */
  async run(cwd, args, options = {}) {
    const git = await this.resolveGit();
    const timeoutMs = options.timeoutMs ?? GIT_QUERY_TIMEOUT_MS;
    const signal = AbortSignal.timeout(timeoutMs);
    let outcome;
    let stdout = "";
    let stderr = "";
    let lossy = false;
    try {
      const handle = this.spawn(cwd, git, args, options.maxBytes, options.stdin, signal, options.notARepository === true);
      outcome = await handle.done;
      const read = handle.collected.stdout?.readFrom(0);
      stdout = read?.text ?? "";
      lossy = read?.lossy === true;
      stderr = handle.collected.stderr?.readFrom(0).text ?? "";
    } catch (error) {
      throw new GitUnavailableError(
        `git ${args.join(" ")} could not run: ${error instanceof Error ? error.message : String(error)}`
      );
    }
    if (lossy) {
      throw new GitDiffTooLargeError(redactGitText(args.join(" ")), options.maxBytes ?? READ_MODEL_MAX_BYTES);
    }
    if (signal.aborted) throw new GitCommandFailedError([git, ...args], cwd, outcome.exitCode, `Git exceeded ${timeoutMs}ms; outcome must be checked before retrying. ${stderr}`, true);
    if (outcome.exitCode !== 0) {
      if (options.notARepository === true && outcome.exitCode === 128 && NOT_A_REPOSITORY.test(stderr)) {
        throw new GitNotARepositoryError(cwd);
      }
      const detail = outcome.exitCode === null ? `${stderr}${stderr === "" ? "" : "\n"}git ${args[0] ?? ""} was terminated (${outcome.signal ?? "no signal"}) after ${String(timeoutMs)}ms without exiting` : stderr;
      throw new GitCommandFailedError([git, ...args], cwd, outcome.exitCode, detail);
    }
    return { stdout, stderr, exitCode: outcome.exitCode };
  }
  spawn(cwd, git, args, maxBytes, stdin, signal = AbortSignal.timeout(GIT_QUERY_TIMEOUT_MS), untranslated = false) {
    return this.ctx.subprocess.spawn({
      argv: [git, ...args],
      cwd,
      env: untranslated ? { GIT_OPTIONAL_LOCKS: "0", LC_ALL: "C" } : { GIT_OPTIONAL_LOCKS: "0" },
      stdio: {
        stdin: stdin === void 0 ? "ignore" : { data: stdin },
        stdout: { maxBytes: maxBytes ?? READ_MODEL_MAX_BYTES },
        stderr: { maxBytes: 64 * 1024 }
      },
      graceMs: GIT_QUERY_GRACE_MS,
      signal
    });
  }
};
var git_local_default = LocalGitCapability;
export {
  DEFAULT_PATCH_MAX_BYTES,
  LocalGitCapability,
  STAGED_PATCH_MAX_BYTES,
  classifyPushFailure,
  git_local_default as default
};
