import React from "react"
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui"
// imports the default layout from theme-ui as themelayout to avoid naming collision.

const Layout = ({ children }) => (
  // 🏗 refactors layout to use ThemeLayout:
  // <div>
  //   <h1>Gatsby Events Theme</h1>
  //   {children}
  // </div>
  <ThemeLayout>
    <Header>Gatsby Events Theme</Header>
    <Main>
      <Container>{children}</Container>
    </Main>
  </ThemeLayout>
)

export default Layout
