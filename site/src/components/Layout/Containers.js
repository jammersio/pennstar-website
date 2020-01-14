import React from 'react'
import { Box as Boxy, Flex } from 'rebass'

export function Box(props) {
  return (
    <Boxy
      width={`full`}
      minHeight={`48`}
      mx={`auto`}
      px={[1, 3]}
      bg={`gray.700`}
      {...props}
    />
  )
}

export function Container(...props) {
  return (
    <Boxy
      width={`full`}
      mx={`auto`}
      px={3}
      fontSize={[1, 2, 3]}
      {...props}
    />
  )
}

export function Section(props) {
  return (
    <Box py={[4, 5]} {...props} />
  );
};

export function FlexWrap(props) {
  return (
    <Flex flexWrap='wrap' {...props} />
  )
}

export const Containers = {
  Box,
  Container,
  Section,
  FlexWrap
}

export default Containers
