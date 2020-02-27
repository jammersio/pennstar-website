import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text } from 'rebass'
import { Brand } from '../../Brand'

export const FooterMenu = ({ pageList, ...props }) => {
  const data = useStaticQuery(graphql`
    query  {
      sectionsJson {
        footerStatement
        contactInfo {
          cityStateZip
          email
          phone
          streetAddress
          aptSuite
        }
      }
      site {
        siteMetadata {
          socialLinks {
            twitter
            instagram
            fb
          }
        }
      }
    }
  `)

  const {
    sectionsJson: {
      footerStatement,
      contactInfo: { cityStateZip, email, phone, streetAddress, aptSuite }
    },
    site: {
      siteMetadata: { socialLinks: { fb, twitter, instagram } }
    } } = data

  return (
    <Flex
      bg='lightgray'
      width='full'
      p='4'
    >
      <Box
        maxWidth='40%'
      >
        <Brand brand brandMark />
        <Text
          fontSize='sm'
        >
          {footerStatement}
        </Text>
      </Box>
      <Box
        ml='auto'
      >
        <Text
          color='gray.6'
        >
          Contact us
        </Text>
        <Flex>
          <Flex
            fontSize='sm'
            flexDirection='column'
          >
            Phone: <br />
            Email: <br />
            Address: <br />
          </Flex>
          <Flex
            fontSize='sm'
            flexDirection='column'
            ml='3'
          >
            {phone} <br />
            {email} <br />
            {streetAddress} <br />
            {aptSuite} <br />
            {cityStateZip} <br />
          </Flex>
        </Flex>
      </Box>
      <Box
        ml='auto'
      >
        <Text
          color='gray.6'
        >
          Quick Links
        </Text>
        <Box
          fontSize='sm'
        >
          <ul
            className='no-bull'
          >
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
          </ul>
        </Box>
      </Box>
    </Flex>
  )
}
