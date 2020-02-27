import React from 'react'
import { graphql } from 'gatsby'

import { Flex, Box, Text, Heading, Image } from 'rebass'
import { Section, Container } from '../components/Containers'
import { ShapedCard } from '../components/Layout/Containers'
import { FullHero } from '../components/Hero/FullHero'
import { Cards } from '../templates/about-cards'

import Layout from "../gatsby-theme-styleguide/components/Layout"

const defaultBg = `url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`

const textShadow = {
  textShadow: '1px 1px 1px rgba(255, 255, 255, 0.55)'
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
      <FullHero
        bgImg={defaultBg}
      >
        <Flex
          mt='5'
          mr='5'
          justifyContent='flex-end'
        >
          <Box
            px='2'
            py='6'
            textAlign='right'
            color='secondary'
          >
            <Heading
              color='primary'
              fontSize='5'
              sx={{ ...textShadow }}
            >
              {hero.heading}
            </Heading>
            <Text
              mt='2'
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
              <i className=" fas fa-arrow-circle-right" />
              <span className='space-left'>
                {hero.links[0].label}
              </span>
            </Text>
            <hr
              style={{ borderColor: 'white' }}
            />
          </Box>
          <Box />
        </Flex>
      </FullHero>
      <Section
        bg='base'
        textAlign='center'
      >
        <Container
          px='4'
          mt='4'
          maxWidth='5xl'
          mx='auto'
        >
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
        <Text
          as='small'
          fontWeight='600'
          fontSize='2'
          color='textMuted'
          textAlign='center'
        >
          {team.sectionTitle}
        </Text>
        <Flex
          textAlign='center'
          my='5'
        >
          <ShapedCard
            mx='auto'
            innerProps={{
              display: 'flex',
              maxWidth: 'sm',
              mx: 'auto'
            }}>
            <Box>
              <Image
                src='https://i.pravatar.cc/90'
                sx={{
                  borderRadius: 'full'
                }} />
            </Box>
            <Box
              ml='2em'
              my='auto'
              textAlign='left'
            >
              <Heading>
                {card1.heading}
              </Heading>
              <Text>
                {card1.details}
              </Text>
            </Box>
          </ShapedCard>
        </Flex>
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
