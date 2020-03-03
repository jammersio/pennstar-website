import React from 'react'
/** @jsx jsx */
import { css, jsx } from 'theme-ui'
import { Box } from 'rebass'
import { slide as Menu } from 'react-burger-menu';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '90px',
    top: '16px',
  },
  bmBurgerBars: {
    background: '#2b6cb0'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#2b6cb0',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#2b6cb0'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(255, 255, 255, 0.3)'
  }
}

export const Sidebar = ({ children }) => {
  return (
    <Menu right disableAutoFocus styles={{ ...styles }}>
      <Box>
        {children}
      </Box>
    </Menu >
  )
}
