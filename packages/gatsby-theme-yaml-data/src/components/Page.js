import React from 'react'

const Page = ({ name, location, url, startDate, endDate }) => (
  <div>
    <h2>
      {/* {name} ({location}) */}
      PAGE COMPONENT
    </h2>
    <p>
      {/* <EventDate startDate={startDate} endDate={endDate} /> */}
    </p>
    <p>
      {/* Website: <a href={url}>{url}</a> */}
    </p>
  </div>
)

export default Page
