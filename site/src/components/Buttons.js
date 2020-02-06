import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Flex, Button, Text, Link as ReLink, Box, Image } from 'rebass'
import { ConditionalWrapper } from '../utils'


export function IconButton({ icon = `fa fa-circle-o`, to, href, children, ...props }) {
  const IconWrapper = ({ icon, children }) => (
    <Flex alignItems='inherit' justifyContent='inherit' flexDirection='inherit' color='inherit'>
      <i className={icon} />
      <Text pr='1'>{children}</Text>
    </Flex>
  )
  return (
    <ConditionalWrapper
      condition={to && !href}
      test={() => (
        <Button as={Link} to={to} {...props}>
          <IconWrapper icon={icon} children={children} />
        </Button>
      )}
      control={() => (
        <Button as={ReLink} href={href} target='_blank' {...props}>
          <IconWrapper icon={icon} children={children} />
        </Button>
      )}
    />
  )
}


export function ButtonLink({ to, href, children, ...props }) {

  return (
    <ConditionalWrapper
      condition={to && !href}
      test={() => (
        <Button as={Link} to={to} {...props}>{children}</Button>
      )}
      control={() => (
        <Button as={ReLink} href={href} target='_blank' {...props}>{children}</Button>
      )}
      {...props}
    />
  )
}

export function NavLink({ to = '#0,', children, color, ...props }) {
  console.log(to)
  return (
    <ReLink
      as={Link}
      to={to}
      activeClassName='active'
      className='nav-link'
      color='primary'
      sx={{
        color: props.active ? 'primary' : 'secondary',
      }}
      {...props}
    >
      <Text color={color || 'inherit'} ml='2'>{children}</Text>
    </ReLink>
  )
}

export function ProfileButton({
  user = { profileImg: 'https://fakeimg.pl/48x48/' },
  children,
  isOpen = false,
  toggleIsOpen = (e) => console.log(e.target),
  ...props
}) {
  return (
    <Box as={Button} onClick={toggleIsOpen} id='profile-menu'>
      <Image
        src={user.profileImg}
        mr='-5'
        sx={{ borderRadius: '100%' }}
        {...props}
      />
      {isOpen && children}
    </Box>
  )
}
