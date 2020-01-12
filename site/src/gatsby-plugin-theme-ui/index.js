import { merge } from 'lodash'
import { theme as baseTheme } from "gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/"


export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    // gray: ['#efefef', '#ddd', '#333', '#111'],
    // background: '#fff',
    // primary: 'blue'
  },
  // fonts: {
  // ...baseTheme.fonts,
  //   body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
  // },
  // fontSizes: [28, 32, 45, 56, 64, 79],
  // lineHeights: {
  //   body: 1.45,
  //   heading: 1.1
  // },
}

// use this file to overwrite any theme styles
