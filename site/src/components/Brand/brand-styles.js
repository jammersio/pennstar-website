const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
}

export const brandStyles = {
  alignItems: 'center',
  fontFamily: 'brand',
  fontWeight: 'bold',
  fontSize: [2, null, 3, 4],
  '& img': {
    maxWidth: ['36px', '48px', null, null, '54px'],
    mr: '0.5em'
  },
  '& h1': {
    fontSize: [3, null, null, null, 5],
    whiteSpace: 'nowrap',
    textShadow: 'default',
    ...textShadow
  }
}
