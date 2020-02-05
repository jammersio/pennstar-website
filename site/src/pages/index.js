import React from 'react'
import { graphql } from 'gatsby'

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
  }
`

export default function ({ data, children }) {

  const { site: { siteMetadata } } = data
  console.log(siteMetadata.title)

  return (
    <Layout title={siteMetadata.title}>
      {/* About Test1 */}
    </Layout>
  )
}
