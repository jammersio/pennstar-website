import React from "react"
import { Layout as ThemeLayout, Header } from "theme-ui"
import "../../styles/styles.scss"

const Layout = ({ title, children }) => (
  <ThemeLayout>
    <Header>{title}</Header>
    {children}
  </ThemeLayout>
)

export default Layout
