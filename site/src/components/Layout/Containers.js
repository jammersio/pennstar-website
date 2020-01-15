import React from 'react'
import { Box as Boxbass, Flex } from 'rebass'
import { Container as Contained } from 'theme-ui'

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
      fontSize={[1, 2, 3]}
      textAlign={`center`}
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

export function Container({ outerProps, ...props }) {
  return (
    <Contained
      sx={{ backgroundColor: `yellow` }}
      {...outerProps}
    >
      <Boxbass
        mx={`auto`}
        px={3}
        {...props}
      >
      </Boxbass>
    </Contained>
  )
}

export function Section({ fullWidth, outerProps, ...props }) {
  const fWStyles = fullWidth ? {
    width: `100vw`,
    ml: `-33%`
  } : ''

  return (
    <Boxbass  {...outerProps} {...fWStyles} >
      <Boxbass p={[4, 5]}{...props} sx={{ position: `relative` }} />
    </Boxbass>
  );
};

export function FlexWrap(props) {
  return (
    <Flex flexWrap='wrap' {...props} />
  )
}

export const Containers = {
  Box,
  Card,
  Container,
  FlexWrap,
  Section,
}

export default Containers
