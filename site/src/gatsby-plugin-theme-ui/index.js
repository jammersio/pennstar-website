import { merge } from 'lodash'
import { theme as baseTheme } from 'gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/'


export default merge({}, baseTheme, {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    // transparent: 'transparent',
    // textAlt: ``
  },
  sizes: {
    ...baseTheme.sizes,

  },
  styles: {
    ...baseTheme.styles,
  },
  shadows: {
    ...baseTheme.shadows,
  },
  borders: {
    ...baseTheme.borders,
    'test': `1px solid yellow`,
    'default': `1px solid purple`
  }


  // fonts: {
  // ...baseTheme.fonts,
  //   body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
  // },
  // fontSizes: [28, 32, 45, 56, 64, 79],
  // lineHeights: {
  //   body: 1.45,
  //   heading: 1.1
  // },
})

// use this file to overwrite any theme styles
