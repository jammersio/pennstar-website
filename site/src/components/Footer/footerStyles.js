export const footerStyles = {
  width: 'full',
  color: 'white',
  px: [2, 4],
  fontSize: [2],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'headerHeight',
  maxWidth: ['full', null, null, '2400px'],
  mx: 'auto',
  '& h3': {
    display: ['none', null, null, 'block'],
    color: 'white',
    fontSize: [2],
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
