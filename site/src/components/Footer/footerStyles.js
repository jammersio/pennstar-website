export const footerStyles = {
  bg: 'primary',
  width: 'full',
  color: 'white',
  px: [2, 4],
  fontSize: [2],
  justifyContent: 'center',
  alignItems: 'center',
  height: 'headerHeight',
  '& h3': {
    display: ['none', null, null, 'block'],
    color: 'white',
    fontSize: [3],
    // mt: '-0.3px',
    '&:hover': {
      color: 'primaryHover',
    },
  },
  '& span': {
    pt: 1,
    fontSize: 'sm',
  },
  '& a': {
    // styles privacy links
    color: 'inherit',
  },
}
