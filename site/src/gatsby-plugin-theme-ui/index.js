import { merge } from 'lodash'
import { theme as baseTheme } from "gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/"


export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: 'blue'
  }
}

// use this file to overwrite any theme styles
