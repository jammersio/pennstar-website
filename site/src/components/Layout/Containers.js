import React from 'react'
import { Box as Boxbass, Flex, Heading, Text, Image } from 'rebass'

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
export function ShapedCard({ innerProps, image = 'https://i.pravatar.cc/90', heading, details, children, ...props }) {


  const cardStyles = {
    width: ['full', null, null, 1 / 3],
    textAlign: 'center',
    alignItems: 'stretch',
    my: [0],
    p: [1, 3]
  }

  const innerStyles = {
    display: 'flex',
    width: ['full', null, null, '1/3'],
    mx: 'auto',
    boxShadow: `default`,
    borderTopLeftRadius: `full`,
    borderBottomLeftRadius: `full`,
    borderBottomRightRadius: `full`,
  }

  return (
    <Boxbass
      as='article'
      sx={{ ...cardStyles }}
      {...props}
    >
      <Boxbass sx={{ ...innerProps, ...innerStyles }}>
        {children}
        <Boxbass sx={{ borderRadius: 'full' }}>
          <Image src={image} />
        </Boxbass>
        {heading && details && (
          <Boxbass
            ml='1em'
            my='auto'
            textAlign='left'
          >
            <Heading>{heading}</Heading>
            <Text>{details}</Text>
          </Boxbass>
        )}
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
  Card,
  ShapedCard,
  Container,
  FlexWrap,
  Section,
}

export default Containers
