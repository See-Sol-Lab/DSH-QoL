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
