const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'
}

export const sidebarMenuStyles = {
  position: 'fixed',
  top: 0,
  height: 'full',
  minWidth: '33%',
  px: [1, 2, null, 5],
  pt: 5,
  boxShadow: 'default',
  backgroundColor: 'base',
  transition: 'transform .3s cubic-bezier(0, .52, 0, 1)',
  zIndex: 0,
  '& .side-nav': {
    ...textShadow,
    a: {
      fontSize: ['.5rem', 0, 1, 2],
      textTransform: 'uppercase',
      py: [3, 4],
      fontWeight: 'bold',
      letterSpacing: '0.5rem',
      color: 'gray.4',
      textDecoration: 'none',
      transition: 'color 0.3s linear',
      textAlign: [null, null, 'center'],
      "&:hover": {
        color: 'primaryHover'
      },
      "&:focus": {
        outline: 'none',
        border: 'none',
      }
    }
  }
}

export const burgerStyles = {
  // https://github.com/maximakymenko/react-burger-menu-article-app/
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: [8],
  height: [8],
  backgroundColor: 'transparent',
  borderRadius: 'default',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: 1,
  '&:focus': {
    outline: 'none',
    border: 'none'
  }
}

export const burgerBarStyles = {
  height: [2],
  // background: set via component -- requires props
  display: 'flex',
  borderRadius: 'default',
  transition: 'all 0.3s linear',
  position: 'relative',
  transformOrigin: '1px',
}
