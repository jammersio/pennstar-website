import React from 'react'
import { Heading, Text } from '../Elements'
import { Box } from '../Layout'

export default function Cta({
  intro,
  introProps = {},
  heading,
  headingProps = {},
  tagline,
  taglineProps = {},
  description,
  descriptionProps = {},
  outro,
  outroProps = {},
  children,
  ...props
}) {
  return (
    <Box {...props}>
      <Text
        as={`small`}
        fontSize={[1]}
        color={`muted`}
        children={intro}
        {...introProps}
      />
      <Heading
        as={`h1`}
        fontSize={[4, 5, 6]}
        color={`text`}
        children={heading}
        {...headingProps}
      />
      <Heading
        as={`h4`}
        fontSize={[2, 3, 4]}
        color={`muted`}
        children={tagline}
        {...taglineProps}
      />
      <Text
        as={`p`}
        fontSize={[1, 2, 3]}
        color={`text`}
        children={description}
        {...descriptionProps}
      />
      <Text
        as={`small`}
        fontSize={[1]}
        color={`muted`}
        children={outro}
        {...outroProps}
      />
      {children}
    </Box>
  )
}
