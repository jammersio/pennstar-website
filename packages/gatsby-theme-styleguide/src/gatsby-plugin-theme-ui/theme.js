import { tailwind } from '@theme-ui/presets';

export const theme = {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    default: `90vw`,
    max: `100vw`,
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
      traslate: `transform(-100%)`,
    },
    Container: {
      padding: 3
    },
  },
};

export default theme;
