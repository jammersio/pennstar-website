import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../gatsby-theme-styleguide/components/layout"
import { Linked } from "../components/Elements/Buttons"

export default function pageTemplate(props) {

  const { pageContext } = props
  console.log('pageProps', pageContext)

  return (
    <Layout>




      <pre>pageProps{JSON.stringify(props.pageContext.pageProps, null, 4)}</pre>


      {/* <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      <Linked to={`/404.html`} int>404</Linked>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        {contextPage && contextPage}
        <ul>
          {content && content.map((data, index) => {
            return <li key={`content_item_${index}`}>{data.item}</li>
          })}
        </ul>
        <ul>
          {links && links.map((item, index) => {
            return (
              <li key={`link_${index}`} int>
                <Linked to={item.to}>{item.to}</Linked>
              </li>
            )
          })}
        </ul>
      </div > */}
    </Layout>
  )
}


