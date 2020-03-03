import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Flex, Box, Image, Heading } from 'rebass'
import { brandStyles } from './brand-styles'
import { INDEX_ROUTE } from '../../routes'

const linkStyles = {
  color: 'gray.4',
  '&:hover': {
    textDecoration: 'none',
  },
}

export function Brand({ brand = false, as = 'h1', brandMark = false, children, ...props }) {

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
    <Box as={Link} to={INDEX_ROUTE} sx={{ ...linkStyles, }}>
      <Flex sx={{ ...brandStyles }} {...props}>
        {brandMark &&
          <Image src={publicURL} />}
        {brand &&
          <Heading as={as}>
            {title}
          </Heading>}
      </Flex>
    </Box>
  )
}
