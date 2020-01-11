import { theme as baseTheme } from 'gatsby-theme-styleguide/src/gatsby-plugin-theme-ui'

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#333",
    background: "#fff",
    primary: "tomato",
  },
  fonts: {
    body: "Georgia, serif",
    heading: "system-ui, sans-serif",
  },
}
