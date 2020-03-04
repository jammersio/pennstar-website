import React from 'react';
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'
import { HeaderMenu } from './HeaderMenu'
import { Brand } from '../Brand'
import { Nav } from './Nav'
import { Sidebar } from './SideBar'

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
            boxShadow: passedScrollThreshold ? 'lg' : 'none',
          }}
        >
          <Box width='50%' ml={[0, 4, null, 0]}>
            {<Brand brand brandMark color='primary' /> || title}
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
        </Box>
        <Box sx={{
          display: ['inline-block', null, null, 'none'],
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
