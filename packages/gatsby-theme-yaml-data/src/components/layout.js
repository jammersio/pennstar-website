import React from "react"
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui"

// used to wrap all yaml pages

const Layout = ({ children }) => {
  return (
    <ThemeLayout>
      <Header>Gatsby Events Theme</Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  )
}
export default Layout

// 🏗 refactor in favor of theme-ui styled components
// const YamlLayout = ({ children }) => (
//   <div>
//     <h1>Gatsby Events Theme</h1>
//     {children}
//   </div>
// )
// export default YamlLayout
