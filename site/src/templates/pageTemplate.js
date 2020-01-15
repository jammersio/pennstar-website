import React from 'react'
import { graphql } from 'gatsby'
import { Main } from 'theme-ui'
import Layout from '../gatsby-theme-styleguide/components/layoutTemplate'
import { Container } from '../components/Layout/Containers'
import Hero from '../components/Hero'
import CtaSection from '../components/Cta/CtaSection'
import CardGrid from '../components/Cards/CardGrid'
import '../styles/styles.scss'

export const query = graphql`
  query {
    layout:layoutYaml(pages: {elemMatch: {page: {eq: "index"}}}) {
      pages {
        layout
        sections {
          section
        }
        to
      }
    }
    content:contentYaml(page: {eq: "index"}) {
    page
    section {
      content {
        descriptionProps {
          as
          children
          className
        }
        headingProps {
          as
          children
          className
        }
        introProps {
          as
          children
          className
        }
        outroProps {
          as
          children
          className
        }
        taglineProps {
          as
          children
          className
        }
      }
      type
      variant
    }
  }
  }
`

export default function pageTemplate({
  data,
  pageContext: { siteTitle, pageName },
  children,
  ...props
}) {
  const { layout, content: { section: { content }, page } } = data
  return (
    <Layout siteTitle={siteTitle} pageTitle={pageName || ''}>
      <Hero ctaProps={content} sx={{ height: `60vh` }} />
      <Main>
        <Container>
          <CtaSection ctaProps={content} textAlign={`center`} />
          {children}
          <pre>pageProps{JSON.stringify(content, null, 4)}</pre>
          <CardGrid />
        </Container>
      </Main>
    </Layout>
  )
}


