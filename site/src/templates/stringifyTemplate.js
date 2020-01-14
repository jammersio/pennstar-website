import React from 'react'
import Layout from "../gatsby-theme-styleguide/components/layout"

export default function stringifyTemplate(props) {

  return (
    <Layout>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>


        {/* <br />
        pageList {JSON.stringify(props.pageContext.pageList, null, 4)}
        <br />
        contentData {JSON.stringify(props.pageContext.contentData, null, 4)}
        <br />
        layoutTemplates {JSON.stringify(props.pageContext.layoutTemplates, null, 4)}
        <br /> */}
        {/* context {JSON.stringify(props.pageContext, null, 4)} */}
        pageProps {JSON.stringify(props.pageContext.finalPages, null, 4)}
        <br />
        {/* pages {JSON.stringify(props.pageContext.contentItems, null, 4)} */}
      </div>
    </Layout>
  )
}
