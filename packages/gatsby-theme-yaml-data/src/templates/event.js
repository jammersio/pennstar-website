import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Event from "../components/Event"

// queries data for individual events

// using a PageQuery here -- which gives us access to
// -- the id field we passed into context as a query argument/variable
export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM DD YYYY")
      endDate(formatString: "MMMM DD YYYY")
      location
      slug
    }
  }
`

const EventTemplate = ({ data: { event } }) => (
  <Layout>
    <Event {...event} />
  </Layout>
)

export default EventTemplate
