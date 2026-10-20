/** esbuild text loader：.md 编进产物成字符串。 */
declare module '*.md' {
  const text: string
  export default text
}

/** esbuild text loader：.ps1 编进产物成字符串。 */
declare module '*.ps1' {
  const text: string
  export default text
}

/** esbuild dataurl loader（只在浏览器侧）：皮肤底图编进产物成 data URL。 */
declare module '*.webp' {
  const url: string
  export default url
}
