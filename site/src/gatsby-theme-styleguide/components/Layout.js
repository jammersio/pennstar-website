import React from 'react'
import { Box } from 'rebass'
import { Layout as ThemedLayout } from 'gatsby-theme-styleguide/src/components/Layout'
// import { Section, Container } from '../../components/Containers'
import { Header } from '../../components/Header'

export default function Layout({ logo, title, pageList, children }) {
  return (
    <ThemedLayout title={title}>
      <Header logo={logo} pageList={pageList} />
      <Box textAlign='center'>
        {children}
      </Box>
    </ThemedLayout>
  )
}
