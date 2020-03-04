import { merge } from 'lodash'
import { theme as baseTheme } from 'gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/'

export default merge({}, baseTheme, {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#63B3ED',
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
    neu: `20px 20px 60px #d5d4d5,
    -20px -20px 60px #ffffff`,
    neuDark: `10px 10px 20px #e9e8e9,
    -10px -10px 20px #ffffff`,
    neuSm: `7px 7px 14px #f1eff0,
    -7px -7px 14px #ffffff;`,
    neuGray: `7px 7px 14px #7b7c7d,
    -7px -7px 14px #858687`,
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
