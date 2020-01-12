import React from 'react'

export default function stringifyTemplate(props) {

  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>

      {JSON.stringify(props, null, 4)}
    </div>
  )
}
