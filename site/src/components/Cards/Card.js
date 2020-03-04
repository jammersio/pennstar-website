import React from 'react'
import { Box } from 'rebass'

export function Card({ innerProps, boxShadow = 'neu', children, ...props }) {
  return (
    <Box
      width={[`full`, 1 / 2]}
      as='article'
      textAlign={`center`}
      my={[0]}
      p={[1, 1]}
      {...props}
    >
      <Box sx={{
        boxShadow: boxShadow,
        borderRadius: `lg`,
        ...innerProps
      }}
      >
        {children}
      </Box>
    </Box>
  )
}
