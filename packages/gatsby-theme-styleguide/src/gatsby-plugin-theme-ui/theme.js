import { tailwind } from '@theme-ui/presets';

export const theme = {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    heroHeight: `60vh`,
    box: `100%`,
    default: `90vw`,
    max: `100vw`,
  },
  borderStyles: {
    // solid: `solid`,
  },
  colors: {
    ...tailwind.colors,
    active: `blue.3`
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
      display: `flex`,
      justifyContent: `space-evenly`,
      alignItems: `center`,
      a: {
        color: `inherit`,
        "&:hover": {
          color: `primaryHover`,
          textDecoration: `none`,
        },
        "&.active": {
          color: `blue.3`
        }
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
      padding: 3,
      backgroundColor: `primary`,
      color: `text`,
    },
    a: {
      "&.hover": {
        textDecoration: `none`
      }
    }
  },
};

export default theme;
