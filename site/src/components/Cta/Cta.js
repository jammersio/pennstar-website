import React from 'react'
import { Heading, Text } from '../Elements'
import { Box } from '../Layout/Containers'

export default function Cta({ introProps, headingProps, taglineProps, descriptionProps, outroProps, ...props }) {
  return (
    <Box {...props}>
      <Text as={`small`}
        fontSize={[2, 3, 4]}
        {...introProps}
      />
      <Heading
        as={`h1`}
        fontSize={[3, 5, 6]}
        color={`secondary`}
        {...headingProps}
      />
      <Heading
        as={`h4`}
        fontSize={[2, 4, 5]}
        color={`white`}
        {...taglineProps}
      />
      <Text as={`p`} {...descriptionProps} />
      <Text as={`small`}
        {...outroProps}
      />
    </Box>
  )
}
