import React from "react"
import Layout from "../components/Layout"
import PageList from "../components/PageList"

import { graphql, useStaticQuery } from "gatsby"
const PagesTemplate = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allEvent(sort: { fields: startDate, order: ASC }) {
  //       nodes {
  //         id
  //         name
  //         startDate
  //         endDate
  //         location
  //         url
  //         slug
  //       }
  //     }
  //   }
  // `)
  const events = data.allEvent.nodes
  return (
    <Layout>
      <PageList pages={pages} />
    </Layout>
  )
}
export default PagesTemplate
