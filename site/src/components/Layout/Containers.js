import React from 'react'
import { Box as Boxbass, Flex } from 'rebass'

export function Box(props) {
  return (
    <Boxbass
      width={`full`}
      mx={`auto`}
      py={[2, 4]}
      fontSize={[1, 2, 3]}
      {...props}
    />
  )
}


export function Container({ outerProps, ...props }) {
  return (
    <Flex
      mx='auto'
      width={[2 / 3]}
      {...outerProps}
    >
      <Boxbass
        mx={`auto`}
        px={3}
        {...props}
      >
      </Boxbass>
    </Flex>
  )
}

export function Section({ fullWidth, outerProps, ...props }) {
  return (
    <Boxbass  {...outerProps} >
      <Boxbass
        p={[4, 5]}
        {...props}
        sx={{ position: `relative` }}
      />
    </Boxbass>
  );
};

export function FlexWrap(props) {
  return (
    <Flex
      flexWrap="wrap"
      mx={-2}
      {...props}
    />
  )
}

export const Containers = {
  Box,
  Container,
  FlexWrap,
  Section,
}

export default Containers
