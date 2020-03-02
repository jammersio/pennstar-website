import React from 'react'
import { Link } from 'gatsby'
import { Box } from 'rebass'

const defaultPages = [{
  page: 'Home', to: '#0'
}, { page: 'Services', to: '#0' }, { page: 'CaseStudies', to: '#0' }, {
  page: 'Process', to: '#0'
}]

export function NavLink({ to = '#0,', children, ...props }) {
  return (
    <Link
      as={Link}
      to={to}
      activeStyle={{ color: 'highlight' }}
      className='navlink'
      {...props}
    >
      {children}
    </Link>
  )
}

export function Nav({ pageList = defaultPages, active = '', children, ...props }) {
  return (
    <>
      <Box
        as='nav'
        sx={{ flexShrink: 0 }}
        {...props}
      >
        {pageList.map((page, i) => <NavLink key={i} to={page.path}>{page.page}</NavLink>)}
        {children}
      </Box>
    </>
  )
}

export default Nav
