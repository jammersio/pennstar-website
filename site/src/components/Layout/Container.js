import React from 'react'
import Box from './Box'
import { Flex, Image } from 'rebass'
import Cta from "../Cta"

export function HeroContainer({ sx, ...props }) {
  return (
    <Flex mx={[2]}>
      <Box
        pr={[2, 5]}
        width={[1, 1, 1 / 2]}
        {...props}
      >
        <Cta
          {...sx}
          content={{
            intro: "This is an intro element",
            heading: "This is a heading element",
            tagline: "This is a secondary heading element",
            description: "This is a text description element",
            outro: "This is an outro element"
          }}
        />
      </Box>
      <Box
        src={props.vector}
        px={4}
        py={6}
        sx={{
          backgroundImage: `url(${props.vector})`,
          backgroundSize: `cover`,
        }}
        width={[1, 1, 1 / 2]}
      >
      </Box>
    </Flex>
  )
}
