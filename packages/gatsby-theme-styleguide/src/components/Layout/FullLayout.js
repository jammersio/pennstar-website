import React from 'react'
import { Header, Main, Container, Footer } from "theme-ui"
function FullLayout({ title, children }) {
  return (
    <>
      <Header>{title || `StyleGuide Defaults`}</Header>
      <Main>
        <Container>{children || `content-coming-soon`}</Container>
        Tedddd
    </Main>
      <Footer>
        © {new Date().getFullYear()} Company Name
    </Footer>
    </>
  )
}

export default FullLayout
