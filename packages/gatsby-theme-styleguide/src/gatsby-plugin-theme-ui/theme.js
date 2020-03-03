import { tailwind } from '@theme-ui/presets';

export const theme = {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    heroHeight: `60vh`,
    headerHeight: `64px`,
    box: `100%`,
    default: `90vw`,
    max: `100vw`,
  },
  colors: {
    ...tailwind.colors,
  },
};

export default theme;
