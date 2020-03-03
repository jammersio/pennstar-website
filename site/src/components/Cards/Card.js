import React from 'react'
import { Box } from 'rebass'

export function Card({ innerProps, children, ...props }) {
  return (
    <Box
      width={[`full`, 1 / 2]}
      as='article'
      textAlign={`center`}
      alignItems='stretch'
      my={[0]}
      p={[1, 3]}
      {...props}
    >
      <Box sx={{
        boxShadow: `default`,
        borderRadius: `lg`,
        border: `default`,
      }}
        {...innerProps}
      >
        {children}
      </Box>
    </Box>
  )
}
