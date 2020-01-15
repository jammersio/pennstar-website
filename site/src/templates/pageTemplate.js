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
  query($pageName: String!) {
    layout:layoutYaml(pages: {elemMatch: {page: {eq:$pageName}}}) {
      pages {
        layout
        sections {
          section
        }
        to
      }
    }
    content:contentYaml(page: {eq:$pageName}) {
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
  children,
  // pageName is only used to query each pages own content
  pageContext: { pageName, pageList, siteTitle },
  ...props
}) {
  const { layout, content: { section: { content }, page } } = data
  return (
    <Layout siteTitle={siteTitle} pageName={page || ''} pageList={pageList}>
      <Hero ctaProps={content} sx={{ height: `60vh` }} />
      <Main>
        <Container>
          <CtaSection ctaProps={content} textAlign="center" />
          {children}
          <pre>pageProps{JSON.stringify(content, null, 4)}</pre>
          <CardGrid />
        </Container>
      </Main>
    </Layout>
  )
}


