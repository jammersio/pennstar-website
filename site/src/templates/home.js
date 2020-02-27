import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box, Text, Heading } from 'rebass'

import { Section, Container } from '../components/Containers'
import { Cards } from './home-cards.js'
import { FullHero } from '../components/Hero/FullHero'

import Layout from "../gatsby-theme-styleguide/components/Layout"
import "../styles/styles.scss"


const defaultBg = `url("https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg")`

const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.55)'
}

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
      <FullHero
        bgImg={defaultBg}
      >
        <Flex
          mt='5'
          ml='5'
        >
          <Box
            px='2'
            color='white'
            py='6'
          >
            <Heading
              fontSize='5'
              sx={{ ...textShadow }}
            >
              {hero.heading}
            </Heading>
            <Text
              mt='2'
              fontSize='2'
              color='muted'
              sx={{ ...textShadow }}
            >
              {hero.tagline}
            </Text>
            <Text
              fontSize='sm'
              mt='3'
              mb='-3'
              sx={{ ...textShadow }}
            >
              {hero.links[0].label}
              <span>
                <i className="space-left fas fa-arrow-circle-right" />
              </span>
            </Text>
            <hr
              style={{
                borderColor: 'white',
                boxShadow: '2xl'
              }}
            />
          </Box>
        </Flex>
      </FullHero>
      <Section bg='base'>
        <Container
          textAlign='center'
          px='4'
          mt='4'
          maxWidth='3xl'
          mx='auto'
        >
          <Heading>{main.heading}</Heading>
          <Text mt='3'>{main.body}</Text>
        </Container>
      </Section>
      <Section bg='base'>
        <Cards cards={cards} />
        <Container
          px='4'
          my='4'
          maxWidth='4xl'
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
