import React from 'react'
import { Heading as DefaultHeading } from 'rebass'
import { Linked } from './Buttons'

export function Heading({ to, children, ...props }) {
  return (
    <DefaultHeading
      fontSize={[5, 6, 7]}
      color="blue"
      {...props}
    >
      {to ? <Linked to={to} int>{children}</Linked> : children}
    </DefaultHeading>
  )
}
