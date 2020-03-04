import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Box, Flex, Text, Heading } from 'rebass'
import { Section } from '../components/Containers'
import { Card } from './contact/contact-card'
import { ContactForm } from './contact/contact-form'
import Layout from "../gatsby-theme-styleguide/components/Layout"

export default function (props) {

  const {
    site: { siteMetadata },
    contactJson: { hero: { map, card }, form }
  } = props.data

  return (
    <Layout
      pageList={props.pageContext.pageList}
      {...siteMetadata}
    >

      <Section
        as='section'
        width='full'
        className='contact-section'
        bg='gray.2'
        p='0'
      >
        <Card
          card={card}
        />
        <Box >
          <iframe
            title='map'
            src={map}
            frameBorder='0'
            sx={{ border: 'none', width: 'full', height: '45vh', mt: 5, zIndex: -1 }}
            allowFullScreen={false}
          />
        </Box>
      </Section>
      <Section
        bg='base'
        width='full'
        className='contact-form'
      >
        <Flex
          mt={'2', null, null, '4'}
          bg='gray.2'
          width={['90%', null, null, '70%']}
          maxWidth='750px'
          mx='auto'
          flexDirection={['column', null, null, 'row']}
          sx={{ borderRadius: 'default', boxShadow: 'neuDark' }}
        >
          <Box
            width={['full', null, null, '50%']}
            my={['2', null, null, '4']}
            p='4'
            color='gray.6'
            textAlign={['center', null, null, 'left']}
            sx={{
              borderRightStyle: ['none', null, null, 'solid'],
              borderRightWidth: '1px',
              borderRightColor: 'gray.3',
            }}>
            <Heading
              mt={[0, null, null, 5]}
              fontSize='5'
            >
              {form.heading}
            </Heading>
            <Text>{form.tagline}</Text>
          </Box>
          <ContactForm form={form} />
        </Flex>
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
        contact
      }
    }
    contactJson {
      hero {
        map
        card {
          aptSuite
          cityStateZip
          email
          heading
          phone
          streetAddress
        }
      }
      form {
        fields
        heading
        tagline
      }
    }
  }
`
