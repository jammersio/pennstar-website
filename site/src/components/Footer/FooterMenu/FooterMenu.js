import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text } from 'rebass'
import { Brand } from '../../Brand'


const highlightStyles = {
  textTransform: 'uppercase',
  borderBottomWidth: '2px',
  borderBottomColor: 'blue.6',
  borderBottomStyle: 'solid',
  mb: 2
}

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
      siteMetadata: { socialLinks: {
        // fb, twitter, instagram
      } }
    } } = data

  return (
    <Flex
      bg='gray.2'
      width='full'
      p='4'
    >
      <Box
        maxWidth='40%'
      >
        <Brand brand brandMark />
        <Text
          fontSize='md'
          mt='3'
        >
          {footerStatement}
        </Text>
      </Box>
      <Box
        ml='auto'
      >
        <Text
          color='gray.6'
          sx={{
            ...highlightStyles
          }}
        >
          Contact us
        </Text>
        <Flex>
          <Flex
            fontSize='md'
            flexDirection='column'
            color='gray.5'
          >
            Phone: <br />
            Email: <br />
            Address: <br />
          </Flex>
          <Flex
            fontSize='md'
            flexDirection='column'
            ml='3'
          >
            <a href={phone}>{phone}</a>
            <a href={email}>{email}</a>
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
          mr='5'
          sx={{
            ...highlightStyles
          }}
        >
          Quick Links
        </Text>
        <Box
          fontSize='md'
          pr='2'
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
