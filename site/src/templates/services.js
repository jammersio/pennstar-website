import React from 'react'
import { graphql } from 'gatsby'
import { Box, Text, Heading } from 'rebass'
import { Section } from '../components/Containers'
import { ServiceCards } from './service-cards'
import { ServiceHero } from './service-hero'

import Layout from "../gatsby-theme-styleguide/components/Layout"

const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'
}
const textShadow2 = {
  textShadow: '-2px 0px 4px rgba(178, 178, 178, 0.25)'
}



export default function (props) {

  const {
    site: { siteMetadata },
    servicesJson: { hero, main, cards }
  } = props.data

  return (
    <Layout
      linkShadow={textShadow}
      pageList={props.pageContext.pageList}
      {...siteMetadata}
    >

      <ServiceHero hero={hero} />
      <Section
        textAlign='center'
        mx='auto'
      >
        <Heading color='primary'>{main.heading}</Heading>
        <Text my='4'>{main.outro}</Text>
        <ServiceCards cards={cards} />
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
        services
      }
    }
    servicesJson {
        main {
        outro
        heading
      }
      cards {
        icon
        heading
        details
      }
      hero {
        featuredCards {
          linkLabel
          linkIcon
          link
          heading
          details
          icon
        }
        taglineA
        taglineB
        image
        heading
      }
    }
  }
`
