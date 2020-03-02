import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box, Text, Heading, Image } from 'rebass'
import { Cards } from './service-featuredCards'
import { ServiceCards } from './service-cards'
import { Section, Container } from '../components/Containers'

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
      <Container
        bg='gray.2'
      >
        <Flex
          justifyContent='flex-end'
          position='relative'
        >
          <Box
            position='absolute'
            height='0'
            pl="5em"
            mt='-50%'
            pt='56.25%'

          >
            <Image
              display={['none', null, null, 'block']}
              src={hero.image}
              width='70%'
              sx={{ borderRadius: 'lg' }}
            />
          </Box>
          <Box
            mt='6'
            color='secondary'
            textAlign={['center', null, null, 'right']}
            position='relative'
            width='100%'
          >
            <Heading
              fontSize='6'
              color='primary'
              mr='6'
            >
              {hero.heading}
            </Heading>
            <Text
              mt='2'
              display='inline'
              mr='6'
              mb='4'
            >
              {main.outro}&nbsp;
            </Text>
            <Cards
              cards={hero.featuredCards}
            />
          </Box>
        </Flex>
      </Container>
      <Section
        textAlign='center'
        mx='auto'
      >
        <Heading>{main.heading}</Heading>
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
