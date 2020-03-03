import { merge } from 'lodash'
import { theme as baseTheme } from 'gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/'

export default merge({}, baseTheme, {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#2b6cb0',
    highlight: '#2b6cb0',
    secondary: '#718096',
    base: '#fbf9fa',
  },
  sizes: {
    ...baseTheme.sizes,

  },
  fonts: {
    ...baseTheme.fonts,
    brand: `"Alegreya", Serif`,
    secondary: `"Questrial", Sans-Serif`,
    default: `"Permanent Marker", Cursive`
  },
  fontSizes: {
    ...baseTheme.fontSizes,
    sm: '0.65em',
    md: '0.85em'
  },
  shadows: {
    ...baseTheme.shadows,
    new: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)',
    neu: `26px 26px 52px #cfdfe9,
    - 26px - 26px 52px #e1f1fd`,
    insetLight: 'inset 0 0 0 1000px rgba(255,255,255,.2)',
    insetDark: 'inset 0 0 0 1000px rgba(0,0,0,.2)'
  },
  borders: {
    ...baseTheme.borders,
    test: '1px solid yellow',
    default: '1px solid purple',
  },
  styles: {
    ...baseTheme.styles,
    Layout: {
      color: 'text',
      fontFamily: 'sans',
      fontSize: 1,
      lineHeight: 'body',
      display: 'flex',
      maxWidth: 'screenWidth',
      width: 'screeWidth',
      minHeight: 'screenHeight',
    },
    Main: {
      mx: 'auto',
      width: 'full',
      minHeight: '6em',
      flex: '1 1 auto',
    },
    a: {
      borderBottom: 'none',
      "&.hover": {
        textDecoration: 'none'
      },
    },
  },
})
