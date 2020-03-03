import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text } from 'rebass'
import { FooterMenuLayout } from './FooterMenuLayout'
import { Brand } from '../../Brand'

const highlightStyles = {
  textTransform: 'uppercase',
  borderBottomWidth: '2px',
  borderBottomColor: 'blue.6',
  borderBottomStyle: 'solid',
  mb: 2
}

const Column1 = ({ body }) => (
  <Box>
    <Brand as='h3' brand brandMark />
    <Text
      fontSize='md'
      mt='3'
    >
      {body}
    </Text>
  </Box>
)

const Column2 = ({ title, info }) => (
  <>
    <Text
      color='gray.6'
      sx={{
        ...highlightStyles
      }}
    >
      {title}
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
      {info}
    </Flex>
  </>
)

const Col2Info = ({ phone, email, streetAddress, aptSuite, cityStateZip }) => (
  <Flex
    fontSize='md'
    flexDirection='column'
    ml={['5', null, null, '3']}
  >
    <a href={phone}>{phone}</a>
    <a href={email}>{email}</a>
    {streetAddress} <br />
    {aptSuite} <br />
    {cityStateZip} <br />
  </Flex>
)

const Column3 = ({ title }) => (
  <>
    <Text
      color='gray.6'
      mr='5'
      sx={{
        ...highlightStyles
      }}
    >
      {title}
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

  </>
)

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

    <FooterMenuLayout
      column1={
        <Column1 body={footerStatement} />
      }

      column2={
        <Column2 title='Contact Us' info={
          <Col2Info
            phone={phone}
            email={email}
            streetAddress={streetAddress}
            aptSuite={aptSuite}
            cityStateZip={cityStateZip}
          />
        } />
      }

      column3={
        <Column3 title={"Links"} />
      }
    >

    </FooterMenuLayout>

  )
}
