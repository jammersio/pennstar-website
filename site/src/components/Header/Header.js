import React from 'react';
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'
import { HeaderMenu } from './HeaderMenu'
import { Brand } from '../Brand'
import { Nav } from './Nav'
// import { MenuIcon } from './SideBar'
import { Sidebar } from './Sidebar2'

import { useScrollMenu } from '../../hooks/useScrollMenu'

import { headerStyles, flexContainerStyles, headerMenuStyles } from './header-styles'

const propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  pageList: PropTypes.array.isRequired,
  active: PropTypes.string,
};

export function Header({ logo, title = '', pageList = [], active = '', ...props }) {

  const { passedScrollThreshold } = useScrollMenu(50)

  return (
    <>
      <Box as='header' sx={{ ...headerStyles }}>
        <Box
          sx={{
            ...flexContainerStyles,
            backgroundColor: passedScrollThreshold ? 'white' : 'transparent',
          }}
        >
          <Box width='50%'>
            {<Brand brand brandMark /> || title}
          </Box>
          <Flex
            className='navBar'
            sx={{
              ...headerMenuStyles
            }}
            {...props}
          >
            <HeaderMenu
              pageList={pageList}
              active={active}
            />
          </Flex>
          {/* <MenuIcon pageList={pageList} /> */}
        </Box>
        <Box sx={{
          display: ['inline-block', null, null, 'none'],
          width: '50%'
        }}>
          <Sidebar>
            <Nav
              className='side-nav'
              display='flex'
              flexDirection='column'
              alignItems='flex-start'
              color='white'
              pageList={pageList}
            />
          </Sidebar>
        </Box>
      </Box>
    </>
  );
};

Header.propTypes = propTypes

export default Header
