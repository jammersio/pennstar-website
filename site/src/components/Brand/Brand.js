import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Flex, Image, Heading } from 'rebass'
import { brandStyles } from './brand-styles'
import { INDEX_ROUTE } from '../../routes'

export function Brand({ brand = false, brandMark = false, children, ...props }) {

  const {
    site: { siteMetadata: { title } },
    file: { publicURL }
  } = useStaticQuery(graphql`

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

  return (
    <Link to={INDEX_ROUTE}>
      <Flex sx={{ ...brandStyles }} {...props}>
        {brandMark &&
          <Image src={publicURL} />}
        {brand &&
          <Heading as='h1'>
            {title}
          </Heading>}
      </Flex>
    </Link >
  )
}
