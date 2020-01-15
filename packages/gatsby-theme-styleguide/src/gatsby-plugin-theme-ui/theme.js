import { tailwind } from '@theme-ui/presets';

export const theme = {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    default: `90vw`,
    max: `100vw`,
  },
  borderWidths: {
    ...tailwind.spaces,
  },
  borderStyles: {
    solid: `solid`,
  },
  borders: {
    ...tailwind.borders,
    'test': `1px solid red`,
    'default': `1px solid purple`
  },
  styles: {
    // sets defaults for components provided by theme-ui
    Layout: {
      color: `sans`,
      fontFamily: `sans`,
      fontSize: 1,
      lineHeight: `body`,
      display: `flex`,
      minHeight: `screenHeight`,
    },
    Header: {
      backgroundColor: `primary`,
      color: `white`,
      fontWeight: `bold`,
      margin: `0 auto`,
      width: `screenWidth`,
      padding: 3,
      flexShrink: 0,
      a: {
        color: `inherit`
      }
    },
    Main: {
      margin: `0 auto`,
      maxWidth: `full`,
      minHeight: `6em`,
      width: `full`,
      flex: `1 1 auto`
    },
    Footer: {
      width: `screenWidth`,
      padding: `1rem`,
      backgroundColor: `primary`,
      color: `white`,
    },
    Box: {

      // margin: `0 auto`,
      // padding: `0 1em 0 1em`,
      // background: `gray.700`
    }
  },
};

export default theme;
