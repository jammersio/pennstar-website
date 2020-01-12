import { tailwind } from '@theme-ui/presets';

export const theme = {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    default: '90vw',
    max: '100vw'
  },
  styles: {
    // sets defaults for components provided by theme-ui
    Layout: {
      color: 'primary',
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'body',
    },
    Header: {
      backgroundColor: 'primary',
      color: 'background',
      fontWeight: 'bold',
      margin: '0 auto',
      width: 'max',
      padding: 3,
      a: {
        color: 'inherit'
      }
    },
    Main: {
      margin: '0 auto',
      maxWidth: 'screen',
      width: 'default'
    },
    Container: {
      padding: 3
    },
    h1: {
      color: 'gray.3',
      fontSize: 5,
      fontWeight: 'bold',
      lineHeight: 'heading',
      margin: '1rem 0 0'
    },
    ul: {
      borderTop: '1px solid',
      borderColor: 'gray.0',
      listStyle: 'none',
      padding: 0
    },
    li: {
      borderBottom: '1px solid',
      borderColor: 'gray.1',
      padding: 2,
      '&:focus-within,&:hover': {
        backgroundColor: 'gray.0'
      }
    }
  },
};

export default theme;
