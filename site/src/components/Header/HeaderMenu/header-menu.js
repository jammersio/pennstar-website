import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'rebass'
import { Nav } from '../Nav'
import { CONTACT_ROUTE } from '../../../routes'
import { buttonStyles } from '../header-styles'
export function HeaderMenu({ pageList = [], active = '', ...props }) {
  return (
    <>
      <Nav
        active={active}
        pageList={pageList}
      />
      <Button
        as={Link}
        to={CONTACT_ROUTE}
        sx={{ ...buttonStyles }}>
        Get Started Today!
      </Button>

    </>
  )
}


