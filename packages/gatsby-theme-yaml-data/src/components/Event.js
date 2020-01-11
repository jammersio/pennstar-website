import React from "react"

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  // sets defaults in destructured options for each date value to true,
  // --- otherwise passes in an empty object as well

  date.toLocaleDateString("en-US", { // sets language option
    // adds the type of each value
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined,
  })

const EventDate = ({ startDate, endDate }) => {
  // renders the event dates and handles proper formatting of date ranges

  // sets start and end dates using js date api
  const start = new Date(startDate)
  const end = new Date(endDate)
  console.log("isoneday", start.toDateString() === end.toDateString())
  const isOneDay = start.toDateString() === end.toDateString()
  // check see if event is a single day event
  return (
    <>
      <time dateTime={start.toISOString()}>
        {/* only display year on single-day events. */}
        {getDate(start, { year: isOneDay })}
      </time>

      {/* if event is longer than a single day... */}
      {!isOneDay && (
        <>
          – {/* adds a "-" between dates */}
          <time dateTime={end.toISOString()}>
            {/*
              display the month for the endDate ONLY if the event lapses to the next month:
              // i.e. june 29 - jul 2, 2019
            */}
            {getDate(end, { month: start.getMonth() !== end.getMonth() })}
          </time>
        </>
      )
      }
    </>
  )
}

const Event = ({ name, location, url, startDate, endDate }) => (
  <div>
    <h2>
      {name} ({location})
    </h2>
    <p>
      <EventDate startDate={startDate} endDate={endDate} />
    </p>
    <p>
      Website: <a href={url}>{url}</a>
    </p>
  </div>
)

export default Event
