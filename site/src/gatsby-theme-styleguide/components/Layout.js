import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { Main } from 'theme-ui'
import { Layout as ThemedLayout } from 'gatsby-theme-styleguide/src/components/Layout'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'


export default function Layout({ logo, title, pageList, children, ...props }) {
  const [themed, setThemed] = useState({
    default: {
      bg: 'bg',
      text: 'text'
    },
    dark: {
      bg: 'grayDark',
      text: 'gray.6'
    }
  })

  return (
    <ThemedLayout {...themed.default} {...props}>
      <Header logo={logo || ""} pageList={pageList || []} />
      <Main as='article' textAlign='center' className='layout'>
        {children}
      </Main>
      <Footer />
    </ThemedLayout>
  )
}
