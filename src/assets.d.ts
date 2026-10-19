/** esbuild text loader：.md 编进产物成字符串。 */
declare module '*.md' {
  const text: string
  export default text
}
