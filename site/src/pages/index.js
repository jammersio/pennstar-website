import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../gatsby-theme-styleguide/components/Layout"

export const query = graphql`
  query{
    site {
      siteMetadata {
        title
        navLinks
        logo
        description
      }
    }
    file(relativePath: {eq: "default-img.jpeg"}){
      childImageSharp {
        fluid(maxWidth: 600) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function ({ data, children }) {

  const { site: { siteMetadata }, file: { childImageSharp: { fluid } } } = data


  return (
    <Layout title={siteMetadata.title}>
      <Img fluid={fluid} />
    </Layout>
  )
}
