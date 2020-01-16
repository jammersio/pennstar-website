import { merge } from 'lodash'
import { theme as baseTheme } from 'gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/'
import components from "./components"

export default merge({}, baseTheme, {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,

  },
  sizes: {
    ...baseTheme.sizes,

  },
  styles: {
    ...baseTheme.styles,
  },
  shadows: {
    ...baseTheme.shadows,
    new: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)'
  },
  borders: {
    ...baseTheme.borders,
    'test': '1px solid yellow',
    'default': '1px solid purple'
  },
  variants: {
    // ...components,
    card: {
      fontSize: [1, 2, 3],
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 0,
      padding: [1, 3],
    },
    cardInner: {
      borderRadius: 'lg',
      boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)'
    },
    fullWidth: {
      width: 'screenWidth',
      right: '30%',
    },
    heroHeight: {
      height: '60vh'
    },
  }

})

// use this file to overwrite any theme styles
