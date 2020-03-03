import { useState } from 'react'
/** @jsx jsx */
import { css, jsx, Main } from 'theme-ui'
import { Global } from "@emotion/core"

import { Layout as ThemedLayout } from 'gatsby-theme-styleguide/src/components/Layout'
import Meta from '../../components/Meta'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'


export default function Layout({ logo, title, pageList, currentPath, children, ...props }) {
  const [themed] = useState({
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
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
            margin: 0,
            padding: 0,
            "&:before": {
              boxSizing: `inherit`,
            },
            "&:after": {
              boxSizing: `inherit`,
            },
          },
          html: {
            fontSize: `18px`,
          },
          body: {
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,

          },
          "::selection": {
            backgroundColor: `blue.2`,
            color: `inherit`,
          },
        })}
      />
      <Meta title={title} />
      <Header logo={logo || ""} pageList={pageList || []} />
      <Main as='main' textAlign='center' className='layout'>
        {children}
      </Main>
      <Footer />
    </ThemedLayout>
  )
}
