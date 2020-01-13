import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../gatsby-theme-styleguide/components/layout"
import { BasicLink } from "../components/Elements/Buttons"

export default function pageTemplate(props) {
  const { pageContext } = props
  const { contextPage, to, layout, sections, content, links } = pageContext

  return (
    <Layout>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      <BasicLink to={`/404.html`}>404</BasicLink>
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
              <li key={`link_${index}`}>
                <BasicLink to={item.to}>{item.to}</BasicLink>
              </li>
            )
          })}
        </ul>
      </div >
    </Layout>
  )
}


