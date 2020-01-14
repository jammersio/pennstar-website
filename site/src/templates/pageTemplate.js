import React from 'react'
import { graphql } from 'gatsby';
import { Main, Footer, Container } from "theme-ui"
import Layout from "../gatsby-theme-styleguide/components/layoutTemplate"
// import { Container } from "../components/Layout/Containers"
import Hero from "../components/Hero"
import CtaSection from "../components/Cta/CtaSection"

function getPropName(str) {
  // used to map content to props.
  return str.split(/(?=[A-Z])/)[0]
  // splits strings at capitalLetters => returns the first item in resulting array
}

// defines initial shape of Cta component's required props:
const ctaShape = { introProps: '', headingProps: '', taglineProps: '', descriptionProps: '', outroProps: '' }

export default function pageTemplate({ children, ...props }) {

  const { pageContext: { pageProps } } = props
  const { section: { content } } = pageProps

  Object.keys(ctaShape).forEach((key, i) => {
    // if keys match update object with content
    if (content[i].className === getPropName(key)) {
      return ctaShape[key] = content[i]
    }
    return
  })

  return (
    <Layout>
      <Hero ctaProps={ctaShape} sx={{ height: `60vh` }} />
      <Main>
        <Container>
          <CtaSection ctaProps={ctaShape} textAlign={`center`} />
          {children}
          <pre>pageProps{JSON.stringify(ctaShape, null, 4)}</pre>
        </Container>
      </Main>
    </Layout>
  )
}


