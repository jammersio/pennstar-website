import React from 'react'
import { Link } from 'gatsby';

export default function pageTemplate(props) {
  const { pageContext } = props
  const { content, links } = pageContext

  console.log(props)
  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <ul>
        {content.map((data, index) => {
          return <li key={`content_item_${index}`}>{data.item}</li>
        })}
      </ul>
      <ul>
        {links.map((item, index) => {
          return (
            <li key={`link_${index}`}>
              <Link to={item.to}>{item.to}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
