import React from 'react'
import { useLocalRemarkForm } from 'gatsby-tinacms-remark'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Hero2 from '../components/Hero2'
import Cta from "../components/Cta"
import { Section, Container } from '../components/Containers'
import "../styles/styles.scss"

import Layout from "../gatsby-theme-styleguide/components/Layout"

export const query = graphql`
  query{
    site {
      siteMetadata {
        title
        navLinks {
          page
          to
        }
        logo
        description
      }
    }
    hero: markdownRemark(frontmatter: {parent: {eq: "home"} element:{eq: "hero"} }) {
    ...TinaRemark
      frontmatter {
        element
        heading
        tagline
        outro
        buttons
        button1Label
        button1To
        image
      }
    }
    cta1: markdownRemark(frontmatter: {parent: {eq: "home"} element:{eq: "cta"} }) {
      ...TinaRemark
      frontmatter {
        intro
        description
      }
    }
  }
`

export default function ({ data, children }) {


  // const [{ frontmatter: { heading, tagline, outro, buttons, button1Label, button1To, image } }] = useLocalRemarkForm(data.markdownRemark)


  // console.log(frontmatter)

  const { site: { siteMetadata } } = data

  const [{ frontmatter: { heading, tagline, outro, buttons, button1Label, button1To, image } }] = useLocalRemarkForm(data.hero)

  const [{ frontmatter: { intro, description } }] = useLocalRemarkForm(data.cta1)

  const heroCta = { headingProps: { children: heading, color: 'white' }, taglineProps: { children: tagline }, outroProps: { children: outro } }


  const cta1 = { introProps: { children: intro }, descriptionProps: { children: description } }
  return (
    <Layout logo={siteMetadata.logo} title={siteMetadata.title} pageList={siteMetadata.navLinks}>
      <Hero2 ctaProps={heroCta} imageContent={image} />
      <Section bg="lightgray">
        <Container textAlign='center'>
          <Cta introProps={{ children: intro }} descriptionProps={{ children: description }} />
          <Cta introProps={{ children: intro }} descriptionProps={{ children: description }} />
        </Container>
      </Section>
    </Layout>
  )
}
