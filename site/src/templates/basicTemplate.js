import React from "react"
import Layout from "../gatsby-theme-styleguide/components/layout"
import { BasicLink } from "../components/Elements/Buttons"

const basicTemplate = props => {
  const { pageContext } = props
  const { pageContent, links } = pageContext

  return (
    <Layout>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <ul>
          {pageContent.map((data, index) => {
            return <li key={`content_item_${index}`}>{data.item}</li>
          })}
        </ul>
        <ul>
          {links.map((item, index) => {
            return (
              <li key={`link_${index}`}>
                <BasicLink to={item.to}>{item.to}</BasicLink>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
export default basicTemplate
