import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Flex, Box, Image, Heading } from 'rebass'

export function Brand({ brand = false, brandMark = false, children, ...props }) {

  const { site: { siteMetadata: { title } }, file: { publicURL } } = useStaticQuery(graphql`
  query BrandQuery {
    site {
     siteMetadata {
      title
      }
    }
    file(relativePath: {eq: "logo.svg"}) {
      publicURL
    }
  }
`)

  // TODO: update query to fetch, fluid logo and implement gatsby's <Img /> component

  return (
    <Flex>
      {brandMark && <Image src={publicURL} {...props} sx={{ maxWidth: '36px', marginRight: '0.5em' }} />}
      {brand && <Heading as='h1' fontSize='inherit' color='primary'  {...props} sx={{ whiteSpace: 'nowrap', textShadow: 'default' }}>
        {title}
      </Heading>}
    </Flex>
  )
}
