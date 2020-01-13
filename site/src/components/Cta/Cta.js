import React from 'react'
import { Heading, Text } from "../Elements"
import { Box } from "../Layout"

export default function Cta({ sx, ...props }) {
  return (
    <Box>
      <Text as={`small`}
        sx={sx && sx.intro || {}}
      >
        {props.content.intro}
      </Text>
      <Heading
        as={`h1`}
        color={`secondary`}
        sx={sx && sx.heading || {}}
      >
        {props.content.heading || "Testing"}
      </Heading>
      <Heading
        as={`h4`}
        fontSize={5}
        color={`white`}
        sx={sx && sx.tagline || {}}
      >
        {props.content.tagline}
      </Heading>
      <Text as={`p`} sx={sx && sx.description || {}}>{props.content.description}</Text>
      <Text as={`small`}
        sx={sx && sx.outro || {}}
      >
        {props.content.outro}
      </Text>
    </Box>
  )
}
