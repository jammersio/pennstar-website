/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const BasicLink = props =>
  <Link
    {...props}
    activeClassName='active'
    sx={{
      color: 'inherit',
      background: 'primary',
      padding: 'spaces.3',
      '&.active': {
        color: 'primary',
      }
    }}
  />
