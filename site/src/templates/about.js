import React from 'react'
import { graphql } from 'gatsby'
import { Text, Heading } from 'rebass'
import { Section, Container } from '../components/Containers'
import { ShapedCard } from '../components/Cards'
import { AboutHero } from '../templates/about-hero'
import { Cards } from '../templates/about-cards'

import Layout from "../gatsby-theme-styleguide/components/Layout"

const defaultBg = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'

const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'
}
const textShadow2 = {
  textShadow: '-2px 0px 4px rgba(178, 178, 178, 0.25)'
}


const mainSectionStyles = {
  bg: 'base',
  textAlign: 'center',
  '& .section-container': {
    px: 4,
    mt: 4,
    maxWidth: '5xl',
    mx: 'auto',
  }
}

export default function (props) {

  const {
    site: { siteMetadata },
    aboutJson: { hero, cards, main, team }
  } = props.data

  const [card1, ...restCards] = cards

  return (
    <Layout
      pageList={props.pageContext.pageList}
      linkShadow={textShadow2}
      {...siteMetadata}
    >

      <AboutHero hero={hero} bgImg={defaultBg} />

      <Section
        as='section'
        sx={{ ...mainSectionStyles }}
      >
        <Container className='section-container'>
          <Text
            as='small'
            fontWeight='600'
            fontSize='2'
            color='textMuted'
          >
            {main.sectionTitle}
          </Text>
          <Heading
            maxWidth='3xl'
            mx='auto'
            my='3'
            color='primary'
          >
            {main.heading}
          </Heading>
          <Text
            my='5'
            color='text'
          >
            {main.body}
          </Text>
        </Container>
        <Container sx={{ position: 'relative', mx: 'auto' }}>
          <Text
            as='small'
            fontWeight='600'
            fontSize='2'
            color='textMuted'
            textAlign='center'
          >
            {team.sectionTitle}
          </Text>

          <ShapedCard
            image={card1.image}
            name={card1.heading}
            title={card1.details}
            my='4'
            textAlign='left'
            maxWidth='sm'
          />

          <Text
            maxWidth='3xl'
            textAlign='left'
            mx='auto'
          >
            {team.body}
          </Text>

          <Text
            mt='4'
            maxWidth='3xl'
            textAlign='left'
            mx='auto'
          >
            {team.body2}
          </Text>
          <Cards cards={restCards} />

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
        about
      }
      }
    aboutJson {
        hero {
        heading
        tagline
        links {
        label
          link
    }
  }
      cards {
        details
        heading
      image
    }
      main {
        body
        heading
      sectionTitle
    }
      team {
        body
        body2
      sectionTitle
    }
  }
}
`
