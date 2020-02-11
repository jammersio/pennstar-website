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

export function Card({ innerProps, children, ...props }) {
  return (
    <Boxbass
      width={[`full`, 1 / 2]}
      as='article'
      textAlign={`center`}
      alignItems='stretch'
      my={[0]}
      p={[1, 3]}
      {...props}
    >
      <Boxbass sx={{
        boxShadow: `default`,
        borderRadius: `lg`,
        border: `default`,
      }}
        {...innerProps}
      >
        {children}
      </Boxbass>
    </Boxbass>
  )
}
export function ShapedCard({ innerProps, children, ...props }) {
  return (
    <Boxbass
      width={[`full`, 1 / 2]}
      as='article'
      textAlign={`center`}
      alignItems='stretch'
      my={[0]}

      p={[1, 3]}
      {...props}
    >
      <Boxbass sx={{
        boxShadow: `default`,
        borderTopLeftRadius: `full`,
        borderBottomLeftRadius: `full`,
        borderBottomRightRadius: `full`,
      }}
        {...innerProps}
      >
        {children}
      </Boxbass>
    </Boxbass>
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
      <Boxbass p={[4, 5]}{...props} sx={{ position: `relative` }} />
    </Boxbass>
  );
};

export function FlexWrap(props) {
  return (
    <Flex flexWrap="wrap" mx={-2} {...props} />
  )
}

export const Containers = {
  Box,
  Card,
  ShapedCard,
  Container,
  FlexWrap,
  Section,
}

export default Containers
