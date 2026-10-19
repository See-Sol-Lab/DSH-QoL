// src/host/workbench-inspector/types.ts
function projectMemoryFileName(cwd) {
  const trimmed = cwd.replace(/[\\/]+$/u, "");
  const folder = trimmed.slice(Math.max(trimmed.lastIndexOf("/"), trimmed.lastIndexOf("\\")) + 1);
  return `${folder === "" || /^[A-Za-z]:$/u.test(trimmed) ? "project" : folder}.memory.md`;
}
var AREA_BEGIN = "<!-- deepseekgui:archive-notes:begin -->";
var AREA_END = "<!-- deepseekgui:archive-notes:end -->";
var ARCHIVE_MEMORY_STATUSES = [
  "running",
  "written",
  "none",
  "needs-consent",
  "too-short",
  "nothing-new",
  "empty",
  "no-project",
  "protected",
  "no-model",
  "invalid",
  "full",
  "malformed",
  "conflict",
  "failed",
  "cancelled",
  "interrupted",
  "gone"
];

export {
  projectMemoryFileName,
  AREA_BEGIN,
  AREA_END,
  ARCHIVE_MEMORY_STATUSES
};
