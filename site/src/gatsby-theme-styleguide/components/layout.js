import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { Layout, Header, Main, Container, Footer } from "theme-ui"
import Meta from "../../components/Meta"
import { Hero } from '../../components/Layout'

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
      <Hero />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        © {new Date().getFullYear()} Company Name
      </Footer>
    </Layout>
  )
}
