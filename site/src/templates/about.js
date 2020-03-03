import React from 'react'
import { Link, graphql } from 'gatsby'

import { Flex, Box, Text, Heading, Image } from 'rebass'
import { Section, Container } from '../components/Containers'
import { ShapedCard } from '../components/Cards'
import { FullHero } from '../components/Hero/FullHero'
import { Cards } from '../templates/about-cards'

import Layout from "../gatsby-theme-styleguide/components/Layout"

const defaultBg = `url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`


const textShadow = {
  textShadow: '1px 1px 1px rgba(255, 255, 255, 0.55)'
}

const heroStyles = {
  justifyContent: 'flex-end',
  mt: 5,
  mr: 5,
  px: 2,
  py: 6,
  textAlign: 'right',
  color: 'secondary',
  '& .hero-box': {
    '& > h2': {
      color: 'primary',
      fontSize: 6,
      ...textShadow
    },
    '& .tagline': {
      color: 'white',
      mt: 2,
      ...textShadow
    },
  }
}

const heroLinkStyles = {
  fontSize: 'md',
  mt: '3',
  mb: '-3',
  ...textShadow,
  '& a': {
    color: 'white',
    ...textShadow,
    '&:hover': {
      color: 'primaryHover',
      textDecoration: 'none'
    }
  }
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
      {...siteMetadata}
    >
      <FullHero bgImg={defaultBg}>
        <Flex sx={{ ...heroStyles }}>
          <Box className='hero-box'>
            <Heading as='h2' className='heading'>
              {hero.heading}
            </Heading>
            <Text as='p' className='tagline'>
              {hero.tagline}
            </Text>
            <hr
              style={{ borderColor: 'white' }}
            />
            <Text
              sx={{ ...heroLinkStyles }}
            >
              <Link to={hero.links[0].link}>
                {hero.links[0].label}
                <span>
                  <i className="space-left fas fa-arrow-circle-right" />
                </span>
              </Link>
            </Text>
          </Box>
          <Box />
        </Flex>
      </FullHero>

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

          {/* <Box sx={{ ...singleCardContainerStyles }}>
          <ShapedCard
            image={card1.image}
            heading={card1.heading}
            details={card1.details}
          />
        </Box> */}

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
