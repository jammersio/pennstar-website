import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Link as ReLink } from 'rebass'
import { Brand } from '../Brand'
import { footerStyles } from './footerStyles'
import { FooterMenu } from './FooterMenu'

const defaultFooterLinks = [
  { id: 1, title: 'Privacy', link: '/' }, { id: 2, title: 'Terms', link: '/' }
]

export function Footer(props) {

  return (
    <>
      <FooterMenu />
      <Box sx={{
        width: 'full', bg: 'primary'
      }} {...props}>
        <Box sx={{ ...footerStyles }}>
          <Flex alignItems={'center'}>
            <Brand
              as='h3'
              color='white'
              brand
            />
            <Box as='span'>
              &nbsp;&nbsp;&nbsp;&copy;&nbsp;
            {new Date().getFullYear()}
              &nbsp;All&nbsp;rights&nbsp;reserved.
          </Box>
          </Flex>
          <Box fontSize='sm' ml='auto'>
            {defaultFooterLinks.map(link => (
              <ReLink key={link.id} href={link.link} mr='2'>{link.title}</ReLink>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}
