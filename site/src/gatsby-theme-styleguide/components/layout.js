import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { Layout, Header, Main, Container, Footer } from "theme-ui"
import Meta from "../../components/Meta"
import Hero from '../../components/Hero'
import CardGrid from '../../components/Cards/CardGrid'
import CtaSection from '../../components/Cta/CtaSection'

const defaultContent = {
  introProps: {
    children: "This is an intro element",
  },
  headingProps: {
    children: "This is a heading element",
  },
  taglineProps: {
    children: "This is a tagline element"
  },
  descriptionProps: {
    children: "This is a text description element",
  },
  outroProps: {
    children: "This is an outro element"
  }
}


export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <Meta />
      <Header>{data.site.siteMetadata.title || `default`}</Header>
      <Hero ctaProps={defaultContent} />
      <Main>
        <CtaSection ctaProps={defaultContent} />
        <Container>
          {children}
        </Container>
        <Container>
          <CardGrid mx={`auto`} />
        </Container>
      </Main>
      <Footer>
        © {new Date().getFullYear()} Company Name
      </Footer>
    </Layout>
  )
}
