import React from 'react'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import { Box } from 'rebass'
import { Section, Container } from '../components/Containers'
import Slot from '../components/Slot'
import "../styles/styles.scss"

import Layout from "../gatsby-theme-styleguide/components/Layout"

export default function ({ data, template, pageProps, children, ...props }) {

  // const { site: { siteMetadata } } = data
  // const [markdownRemark] = useLocalRemarkForm(pageContent)
  console.log('template', template, props, data)
  console.log('pageProps', pageProps)
  return (
    <Layout
    // add title and brand props back here.
    >

      <Section bg="lightgray">
        Test
      </Section>
    </Layout>
  )
}
// $parentPage $element ($parentPage: String!, $element: String!)
// export const qeury = graphql`
//   query{
//     site {
//       siteMetadata {
//         title
//         navLinks {
//           page
//           to
//         }
//         logo
//         description
//       }
//     }
//   }
// `
