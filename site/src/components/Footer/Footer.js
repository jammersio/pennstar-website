import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Link as ReLink } from 'rebass'
import { Brand } from '../Brand'
import { INDEX_ROUTE } from '../../routes'
import { footerStyles } from './footerStyles'
import { FooterMenu } from './FooterMenu'

const defaultFooterLinks = [
  { id: 1, title: 'Privacy', link: '/' }, { id: 2, title: 'Terms', link: '/' }
]

export function Footer(props) {

  return (
    <>
      <FooterMenu />
      <Flex
        px='4'
        width='full'
        color='white'
        alignItems='center'
        fontSize='1'
        height='headerHeight'
        flexDirection={['column', 'row']}
        justifyContent={['flex-start']}
        sx={{ ...footerStyles }}
        {...props}
      >
        <Flex fontSize='sm'>
          <Link to={INDEX_ROUTE}>
            <Brand
              fontSize='1'
              color='white'
              // display='inline'
              fontFamily={'sans'}
              brand
            />
          </Link>
          <span className='space-top'>&nbsp;&nbsp;&nbsp;&copy;&nbsp;{new Date().getFullYear()}&nbsp;All&nbsp;rights&nbsp;reserved.</span>
        </Flex>
        <Box fontSize='sm' ml='auto'>
          {defaultFooterLinks.map(link => (
            <ReLink key={link.id} href={link.link} mr='2'>{link.title}</ReLink>
          ))}
        </Box>
      </Flex>
    </>
  )
}

