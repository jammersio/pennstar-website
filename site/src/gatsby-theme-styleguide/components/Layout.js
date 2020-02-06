import React from 'react'
import { Layout as ThemedLayout } from 'gatsby-theme-styleguide/src/components/Layout'
import { Header } from '../../components/Header'

export default function Layout({ logo, title, pageList, children }) {
  return (
    <ThemedLayout title={title}>
      <Header logo={logo} pageList={pageList} />
      {children}
    </ThemedLayout>
  )
}
