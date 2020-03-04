import React from 'react'
import { Link } from 'gatsby'
import { Box } from 'rebass'

const defaultPages = [{
  page: 'Home', to: '#0'
}, { page: 'Services', to: '#0' }, { page: 'CaseStudies', to: '#0' }, {
  page: 'Process', to: '#0'
}]

export function NavLink({ to = '#0,', linkShadow = { linkShadow }, children, ...props }) {
  return (
    <Link
      as={Link}
      to={to}
      activeClassName={'active'}
      className='navlink'
      sx={{ ...linkShadow }}
      {...props}
    >
      {children}
      <span sx={{ display: 'none' }}></span>
    </Link>
  )
}

export function Nav({ pageList = defaultPages, active = '', linkShadow, children, ...props }) {
  return (
    <>
      <Box
        as='nav'
        sx={{ flexShrink: 0 }}

        {...props}
      >
        {pageList.map((page, i) => <NavLink key={i} linkShadow={linkShadow} to={page.path}>{page.page}</NavLink>)}
        {children}
      </Box>
    </>
  )
}

export default Nav
