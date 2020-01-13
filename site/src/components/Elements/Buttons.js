import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Text, Link as StyleLink } from 'rebass'


const linkStyles = {
  color: 'inherit',
  background: 'primary',
  padding: 'spaces.3',
  '&.active': {
    color: 'primary',
  }
}

export const Linked = ({ to, children, int = false, ...props }) => (
  <>
    {!int && (
      <StyleLink
        sx={{ ...linkStyles }}
        {...props}
        href={to}
      >
        {children}
      </StyleLink>
    )}
    {int && (
      <Link
        activeClassName='active'
        children={children}
        to={to}
        {...props}
        className={`linkInt-tracker`}
      >
        <Text
          sx={{ ...linkStyles }}
        >
          {children}

        </Text>
      </Link>
    )}
  </>
)
