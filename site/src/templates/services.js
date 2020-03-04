import React from 'react'
import { graphql } from 'gatsby'
import { Box, Text, Heading } from 'rebass'
import { Section } from '../components/Containers'
import { ServiceCards } from './services/service-cards'
import { ServiceHero } from './services/service-hero'
import Layout from "../gatsby-theme-styleguide/components/Layout"

export default function (props) {

  const {
    site: { siteMetadata },
    servicesJson: { hero, main, cards }
  } = props.data

  return (
    <Layout
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
