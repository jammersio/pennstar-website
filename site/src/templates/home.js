import React from 'react'
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import { Box } from 'rebass'
import { Section, Container } from '../components/Containers'
import Slot from '../components/Slot'
import "../styles/styles.scss"

import Layout from "../gatsby-theme-styleguide/components/Layout"

export default function (props) {

  const { site: { siteMetadata } } = props.data

  console.log('homeprops', props)

  return (
    <Layout pageList={props.pageContext.pageList} {...siteMetadata}>
      <Section bg="lightgray">
        {props.pageContext.page}
      </Section>
    </Layout>
  )
}

export const qeury = graphql`
  query{
    site {
      siteMetadata {
        title
        logo
      }
    }
    templatesJson {
      templates {
        home
      }
    }
  }
`
