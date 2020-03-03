import React from 'react'
import { graphql, Link } from 'gatsby'
import { Flex, Box, Text, Heading } from 'rebass'

import { Section, Container } from '../components/Containers'
import { Cards } from './home-cards.js'
import { HomeHero } from './home-hero.js'

import Layout from "../gatsby-theme-styleguide/components/Layout"
import "../styles/styles.scss"


export default function (props) {

  const {
    site: { siteMetadata },
    homeJson: { hero, main, cards, info }
  } = props.data

  return (
    <Layout
      pageList={props.pageContext.pageList}
      {...siteMetadata}
    >
      <HomeHero hero={hero} />
      <Section bg='base'>
        <Container
          textAlign='center'
          px='4'
          mt='4'
          maxWidth='3xl'
          mx='auto'
        >
          <Heading color='primary'>
            {main.heading}
          </Heading>
          <Text mt='3'>{main.body}</Text>
        </Container>
      </Section>
      <Section bg='base'>
        <Cards cards={cards} />
        <Container
          px={[1, null, null, '4']}
          my='4'
          maxWidth={['full', null, null, '4xl']}
          mx='auto'
        >
          <Text>
            {info.body}
          </Text>
          <Text mt='4'>
            {info.body2}
          </Text>
        </Container>
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
    homeJson {
      hero {
        links {
          label
          link
        }
        tagline
        heading
      }
      main {
        body
        heading
      }
      cards {
        body
        heading
        icon
      }
      info {
        body
        body2
      }
    }
  }
`
