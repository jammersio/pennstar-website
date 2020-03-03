const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'
}

export const headerStyles = {
  position: 'fixed',
  width: 'full',
  height: '72',
  top: 0,
  left: 0,
  zIndex: 3000,
  color: 'text',
  fontWeight: 'bold',
  // using flexbox to center content in header
  display: 'flex',
  justifyContent: 'flex-end',
  ml: 'auto',
  '& .header-nav': {
    fontSize: [0, 0, 1],
    display: ['none', 'none', 'flex'],
    a: {
      color: 'base',
      "&.navlink": {
        fontSize: [null, null, 1, null, 2],
        pr: 3,
        textTransform: 'uppercase',
        color: 'gray.6',
        ...textShadow,
        "&:hover": {
          color: 'blue.4',
          textDecoration: 'none',
        },
      },
    }
  },
}

export const flexContainerStyles = {
  width: 'full',
  display: 'flex',
  justifyContent: ['space-around', null, null, 'space-between'],
  alignItems: '72px',
  px: [4, 0, 0, 6],
  py: 1,
  boxShadow: 'boxShadow',
  maxHeight: 'headerHeight',
}

export const headerMenuStyles = {
  width: '50%',
  mt: 2,
  display: ['none', 'none', 'none', 'flex'],
  justifyContent: 'flex-end',
  alignItems: 'center',
}

export const buttonStyles = {
  minWidth: '170px',
  backgroundColor: 'primary',
  color: 'white',
  px: 3,
  py: 2,
  borderRadius: 'full',
  whiteSpace: 'nowrap',
  appearance: 'none',
  fontSize: '0.75em',
  display: ['none', 'flex'],
  alignItems: 'center',
  alignSelf: 'center',
  '& a': {
    color: 'white',
    '&:hover': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  '&:hover': {
    backgroundColor: 'primaryHover'
  }
}


