import React from "react"
import { Layout as ThemeLayout, Header, Main, Container, Footer } from "theme-ui"
import "../styles/styles.scss"

const Layout = ({ heading, children }) => (
  <ThemeLayout>
    <Header>{heading || `Gatsby Events Theme`}</Header>
    <Main>
      <Container>{children || `content-coming-soon`}</Container>
    </Main>
    <Footer>
      © {new Date().getFullYear()} Company Name
    </Footer>
  </ThemeLayout>
)

export default Layout
