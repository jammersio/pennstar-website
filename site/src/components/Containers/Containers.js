import React from 'react'
import { Box as Boxbass } from 'rebass'
import { containerStyles } from './containerStyles'


export function Box(props) {
  return (
    <Boxbass
      width={`full`}
      mx={`auto`}
      py={[2, 4]}
      fontSize={[0, 1, 2, 3]}
      {...props}
    />
  )
}

export function Container({ innerProps = {}, children, ...props }) {

  return (
    <Boxbass
      sx={{ ...containerStyles }}
      {...props}
    >
      <Boxbass
        {...innerProps}
      >
        {children}
      </Boxbass>
    </Boxbass>
  )
}

export function Section({ outerProps = {}, ...props }) {
  return (
    <Boxbass
      {...outerProps}
    >
      <Boxbass
        p={[4, 5]}
        sx={{ position: `relative` }}
        {...props}
      />
    </Boxbass>
  );
};

export function FlexWrap({ responsive = true, ...props }) {
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      mx={-2}
      width='full'
      variant={responsive && 'boxes.responsiveFlex'}
      position='relative' {...props} />
  )
}

export const Containers = {
  Box,
  Container,
  FlexWrap,
  Section,
}

export default Containers
