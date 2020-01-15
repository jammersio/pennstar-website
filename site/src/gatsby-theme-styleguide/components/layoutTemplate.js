import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { Layout, Header, Footer } from "theme-ui"
import Meta from "../../components/Meta"


export default ({ siteTitle, pageTitle, children, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
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
      <Header>{siteTitle || data.site.siteMetadata.title || `default`}</Header>
      {pageTitle}
      {children}
      <Footer>
        © {new Date().getFullYear()} Company Name
      </Footer>
    </Layout>
  )
}
