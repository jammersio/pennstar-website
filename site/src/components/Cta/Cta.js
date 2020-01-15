import React from 'react'
import { Heading, Text } from '../Elements'
import { Box } from '../Layout/'

export default function Cta({
  introProps = {},
  headingProps = {},
  taglineProps = {},
  descriptionProps = {},
  outroProps = {},
  children,
  ...props
}) {
  return (
    <Box {...props}>
      <Text
        as={`small`}
        fontSize={[1]}
        {...introProps}
      />
      <Heading
        as={`h1`}
        fontSize={[3, 4, 5]}
        color={`secondary`}
        {...headingProps}
      />
      <Heading
        as={`h4`}
        fontSize={[2, 3, 4]}
        color={`white`}
        {...taglineProps}
      />
      <Text
        as={`p`}
        fontSize={[1, 2, 3]}
        {...descriptionProps}
      />
      <Text
        as={`small`}
        fontSize={[1]}
        {...outroProps}
      />
      {children}
    </Box>
  )
}
