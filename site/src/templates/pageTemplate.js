import React from 'react'
import { Link, graphql } from 'gatsby';
import Layout from "../gatsby-theme-styleguide/components/layout"

export default function pageTemplate(props) {
  const { pageContext } = props
  const { page, to, layout, sections } = pageContext

  console.log(props)
  return (
    <Layout>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
      <Link to={`/404.html`}>404</Link>
    </Layout>
    // <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    //   <ul>
    //     {content.map((data, index) => {
    //       return <li key={`content_item_${index}`}>{data.item}</li>
    //     })}
    //   </ul>
    //   <ul>
    //     {links.map((item, index) => {
    //       return (
    //         <li key={`link_${index}`}>
    //           <Link to={item.to}>{item.to}</Link>
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </div >
  )
}

//🚧 page query on this page to use 'page' from context to pull in the correct data for this page

export const getPageData = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
