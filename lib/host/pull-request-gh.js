// src/host/pull-request/index.ts
import { Service } from "@deepseek-ai/cordis";
var PullRequestUnavailableError = class extends Error {
  /**
   * @param reason - Which precondition failed.
   */
  constructor(reason) {
    super(reason === "missing-gh" ? "no pull-request provider executable is available (gh)" : "the pull-request provider is not logged in");
    this.reason = reason;
    this.name = "PullRequestUnavailableError";
  }
};
var PullRequestFailedError = class extends Error {
  /**
   * @param stderr - The raw provider stderr, verbatim.
   * @param reason - The classified failure.
   * @param url - The existing PR's URL when the failure is a duplicate.
   */
  constructor(stderr, reason, url) {
    super(`pull request creation failed (${reason}): ${stderr}`);
    this.stderr = stderr;
    this.reason = reason;
    this.url = url;
    this.name = "PullRequestFailedError";
  }
};
var PullRequestCapability = class extends Service {
  constructor(ctx) {
    super(ctx, "pullRequest");
  }
};
var pull_request_default = PullRequestCapability;

// src/host/pull-request-gh/index.ts
var GH_OUTPUT_MAX_BYTES = 4 * 1024 * 1024;
var GH_GRACE_MS = 5e3;
var GH_TIMEOUT_MS = 6e4;
function classifyGhCreateFailure(stderr) {
  if (/already exists|pull request.*exists|a pull request for branch/u.test(stderr)) {
    const url = /https?:\/\/\S+\/pull\/\d+/u.exec(stderr)?.[0];
    return { reason: "already-exists", ...url === void 0 ? {} : { url } };
  }
  if (/not logged in|Authentication failed|auth failed|gh auth login|unauthorized/iu.test(stderr)) {
    return { reason: "auth" };
  }
  return { reason: "other" };
}
var GhPullRequestProvider = class extends pull_request_default {
  /** Runs every gh command through the subprocess seam. */
  static inject = ["subprocess"];
  /** Run one gh command with exact argv and bounded collected output. */
  async run(cwd, args, stdin) {
    const gh = await this.ctx.subprocess.resolveExecutable("gh");
    const signal = AbortSignal.timeout(GH_TIMEOUT_MS);
    const handle = this.ctx.subprocess.spawn({
      argv: [gh, ...args],
      cwd,
      stdio: {
        stdin: stdin === void 0 ? "ignore" : { data: stdin },
        stdout: { maxBytes: GH_OUTPUT_MAX_BYTES },
        stderr: { maxBytes: 64 * 1024 }
      },
      graceMs: GH_GRACE_MS,
      signal
    });
    const outcome = await handle.done;
    if (signal.aborted) throw new PullRequestFailedError("The GitHub command timed out; verify the remote state before retrying.", "other");
    if (handle.collected.stdout?.readFrom(0).lossy) throw new PullRequestFailedError("GitHub output was truncated; verify the remote state before retrying.", "other");
    return {
      stdout: handle.collected.stdout?.readFrom(0).text ?? "",
      stderr: handle.collected.stderr?.readFrom(0).text ?? "",
      exitCode: outcome.exitCode
    };
  }
  async availability(cwd) {
    let output;
    try {
      output = await this.run(cwd, ["auth", "status"]);
    } catch (error) {
      if (error instanceof Error && /was not found on PATH|is not an executable file/u.test(error.message)) {
        return { available: false, reason: "missing-gh" };
      }
      throw error;
    }
    if (output.exitCode !== 0) {
      return { available: false, reason: "not-authenticated" };
    }
    const match = /Logged in to (\S+) account (\S+)/u.exec(`${output.stdout}
${output.stderr}`);
    if (match === null) {
      return { available: true, auth: { host: "(unknown)", account: "(unknown)" } };
    }
    return { available: true, auth: { host: match[1] ?? "", account: match[2] ?? "" } };
  }
  async existing(cwd, head) {
    const output = await this.run(cwd, ["pr", "list", "--head", head, "--state", "open", "--json", "number,url"]);
    if (output.exitCode !== 0) {
      throw new PullRequestFailedError(output.stderr, "other");
    }
    let rows;
    try {
      rows = JSON.parse(output.stdout);
    } catch {
      throw new PullRequestFailedError(`gh pr list printed non-JSON output: ${output.stdout.slice(0, 200)}`, "other");
    }
    if (!Array.isArray(rows)) {
      throw new PullRequestFailedError(`gh pr list printed an unexpected shape: ${output.stdout.slice(0, 200)}`, "other");
    }
    const first = rows[0];
    if (first === void 0) return void 0;
    if (typeof first.number !== "number" || typeof first.url !== "string") {
      throw new PullRequestFailedError(`gh pr list row lacks number/url: ${JSON.stringify(first).slice(0, 200)}`, "other");
    }
    return { number: first.number, url: first.url };
  }
  async create(cwd, opts) {
    const args = [
      "pr",
      "create",
      "--title",
      opts.title,
      "--body-file",
      "-",
      "--base",
      opts.base,
      "--head",
      opts.head,
      ...opts.draft ? ["--draft"] : []
    ];
    let output;
    try {
      output = await this.run(cwd, args, opts.body);
    } catch (error) {
      if (error instanceof Error && /was not found on PATH|is not an executable file/u.test(error.message)) {
        throw new PullRequestUnavailableError("missing-gh");
      }
      throw error;
    }
    if (output.exitCode !== 0) {
      const classified = classifyGhCreateFailure(output.stderr);
      throw new PullRequestFailedError(output.stderr, classified.reason, classified.url);
    }
    const url = output.stdout.split("\n").find((line) => /\/pull\/\d+/u.test(line))?.trim() ?? "";
    const number = /\/pull\/(\d+)/u.exec(url)?.[1];
    if (url === "" || number === void 0) {
      throw new PullRequestFailedError(
        `gh pr create reported no PR URL: ${output.stdout}`,
        "other"
      );
    }
    return { url, number: Number(number) };
  }
};
export {
  classifyGhCreateFailure,
  GhPullRequestProvider as default
};
