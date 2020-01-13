import React from 'react'
import Layout from "../gatsby-theme-styleguide/components/layout"

export default function stringifyTemplate(props) {

  return (
    <Layout>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>

        {JSON.stringify(props, null, 4)}
      </div>
    </Layout>
  )
}
