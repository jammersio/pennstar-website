import React from 'react'
import { FullLayout as ThemedLayout } from 'gatsby-theme-styleguide/src/components/Layout'

export default function Layout({ title, children }) {
  return (
    <ThemedLayout title={title}>
      {children}
    </ThemedLayout>
  )
}
