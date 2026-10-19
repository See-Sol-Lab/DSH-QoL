// src/host/workbench-inspector/types.ts
function projectMemoryFileName(cwd) {
  const trimmed = cwd.replace(/[\\/]+$/u, "");
  const folder = trimmed.slice(Math.max(trimmed.lastIndexOf("/"), trimmed.lastIndexOf("\\")) + 1);
  return `${folder === "" || /^[A-Za-z]:$/u.test(trimmed) ? "project" : folder}.memory.md`;
}
var AREA_BEGIN = "<!-- deepseekgui:archive-notes:begin -->";
var AREA_END = "<!-- deepseekgui:archive-notes:end -->";

export {
  projectMemoryFileName,
  AREA_BEGIN,
  AREA_END
};
