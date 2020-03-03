import React from 'react';
import { Box } from 'rebass'
import Nav from '../../Nav'
import { sidebarMenuStyles, burgerStyles, burgerBarStyles } from '../side-bar-styles'

export function SideBarMenuIcon({ open, setOpen, ...props }) {

  const isExpanded = open ? true : false;

  return (
    <Box
      open={open}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      display={['flex', null, null, 'none']}
      mt='2'
      sx={{ ...burgerStyles }}
      {...props}
    >
      <Box
        bg={open ? 'secondary' : 'primary'}
        sx={{
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          ...burgerBarStyles
        }}
      />
      <Box
        bg={open ? 'secondary' : 'primary'}
        sx={{
          opacity: open ? 0 : 1,
          transform: open ? 'translateX(20px)' : 'translateX(0)',
          ...burgerBarStyles
        }}
      />
      <Box
        bg={open ? 'secondary' : 'primary'}
        sx={{
          transform: open ? 'rotate(-45deg)' : 'rotate(0)',
          ...burgerBarStyles
        }}
      />
    </Box>
  )
}

export function SideBarMenu({ open, pageList = [], ...props }) {
  const tabIndex = open ? -1 : 0;
  return (
    <Box
      as='aside'
      className='nav-holder'
      width={['40%']} // correlates to the transform below
      open={open}
      aria-hidden={!tabIndex}
      tabIndex={tabIndex}
      sx={{
        transform: open ? 'translate3d(-40%, 0 , 0)' : 'translate3d(100%, 0 , 0)',
        display: open ? 'flex' : 'none',
        flexDirection: 'column',
        ...sidebarMenuStyles
      }}
      {...props}
    >
      <Nav
        className='side-nav'
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        color='white'
        // fontSize={[1, 2]}
        pageList={pageList}
      />
    </Box >
  )
}
