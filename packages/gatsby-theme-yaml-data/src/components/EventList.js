import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

// ⛔️ demonstrates implementing theme-ui components in another theme

const EventList = ({ events }) => (
  <>
    {/* {JSON.stringify(events, null, 2)} */}

    {/* 🏗 refactor to add theme-ui styled components:

    <h1>Upcoming Events</h1>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <strong>
            <Link to={event.slug}>{event.name}</Link>
          </strong>
          <br />
          {new Date(event.startDate).toLocaleDateString("en-US", {
            // formats date output
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          in {event.location}
        </li>
      ))}
    </ul>
    */}
    <Styled.h1>Upcoming Events</Styled.h1>
    <Styled.ul>
      {events.map(event => (
        <Styled.li key={event.id}>
          <strong>
            <Link to={event.slug}>{event.name}</Link>
          </strong>
          <br />
          {new Date(event.startDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          in {event.location}
        </Styled.li>
      ))}
    </Styled.ul>

  </>
)

export default EventList
