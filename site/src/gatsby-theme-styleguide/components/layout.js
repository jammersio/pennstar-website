import React from "react"
// import { useStaticQuery, graphql } from 'gatsby';
import { Layout, Header, Main, Container } from "theme-ui"
import Meta from "../../components/Meta"

export default ({ title, children }) => {
  // const data = useStaticQuery(graphql`
  //   query TitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      <Meta />
      <Header>{title || `default`}</Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      {/* add footer here */}
    </Layout>
  )
}

