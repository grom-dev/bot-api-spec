import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  markdown: false, // Disable linting of code snippets in Markdown.
})
