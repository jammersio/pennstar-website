import React from 'react'
import { Link } from 'gatsby'
import { Box } from 'rebass'
import { Nav } from '../Nav'
import { CONTACT_ROUTE } from '../../../routes'
import { buttonStyles } from '../header-styles'
export function HeaderMenu({ pageList = [], active = '', ...props }) {
  return (
    <>
      <Nav
        className='header-nav'
        active={active}
        pageList={pageList}
      />
      <Box sx={{ ...buttonStyles }}>
        <Link
          as={Link}
          to={CONTACT_ROUTE}
        >
          Get Started Today!
      </Link>
      </Box>
    </>
  )
}


