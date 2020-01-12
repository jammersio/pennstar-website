import React from "react"
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui"

const Layout = ({ heading, children }) => (
  <ThemeLayout>
    <Header>{heading || `Gatsby Events Theme`}</Header>
    <Main>
      <Container>{children || `content-coming-soon`}</Container>
    </Main>
  </ThemeLayout>
)

export default Layout
