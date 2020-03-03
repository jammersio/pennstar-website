import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Text, Link as Linkbass, Flex } from 'rebass'


const linkStyles = {
  color: 'inherit',
  background: 'primary',
  padding: 'spaces.3',
  '&.active': {
    color: 'primary',
  }
}

export const Linked = ({
  to,
  children,
  int = false,
  linkStyles,
  ...props
}) => (
    <>
      {!int && (
        <Linkbass
          href={to}
          {...linkStyles}
          {...props}
        >
          {children}
        </Linkbass>
      )}
      {int && (
        <Link
          activeClassName='active'
          children={children}
          to={to}
          className={`linkInt-tracker`}
        >
          <Text
            sx={{ ...linkStyles }}
            {...props}
          >
            {children}

          </Text>
        </Link>
      )}
    </>
  )


export const NavLink = ({ children, ...props }) => {
  return (
    <Linked
      int
      classname="nav-link"
      mx="3"
      sx={{
        color: props.active ? 'primary' : 'inherit',
        color: props.hovered ? 'muted' : 'inherit'
      }}
      {...props}
    >
      {children}
    </Linked>
  )
}

export default { Linked, NavLink }
