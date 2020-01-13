import React from 'react'
import { Box } from 'rebass'

export default (props) => {
  return (
    <Box
      p={[6]}
      fontSize={`lg`}
      color='primary'
      mx={`auto`}
      // className="text-center"
      {...props}
    />
  )
}
