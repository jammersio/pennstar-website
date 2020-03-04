const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
}

const headingStyles = {
  fontFamily: 'brand',
  fontWeight: 'bold',
  color: 'inherit',
  fontSize: [3, null, null, null, 5],
  whiteSpace: 'nowrap',
  textShadow: 'default',
  ...textShadow,
  '&:hover': {
    color: 'highlight',
    textDecoration: 'none',
  },
}



export const brandStyles = {
  alignItems: 'center',
  '& img': {
    maxWidth: ['36px', '48px', null, null, '54px'],
    mr: '0.5em'
  },
  '& h1': {
    ...headingStyles
  },
  '& h3': {
    ...headingStyles
  },
}
