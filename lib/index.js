import "./chunks/chunk-QDQBS6CD.js";

// src/index.ts
import z from "@deepseek-ai/schemastery";
import { AsyncResource } from "node:async_hooks";
var name = "dsh-qol";
var inject = ["configEditor"];
var Config = z.object({
  inventory: z.boolean().default(false).volatile(),
  feedback: z.boolean().default(false).volatile()
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
}
export {
  Config,
  apply,
  inject,
  name
};
