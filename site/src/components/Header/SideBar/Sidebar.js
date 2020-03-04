import React from 'react'
import { Box } from 'rebass'
import { slide as Menu } from 'react-burger-menu';


export const Sidebar = ({ children }) => {
  return (
    <Menu
      right
      disableAutoFocus
    >
      <Box>
        {children}
      </Box>
    </Menu>
  )
}
