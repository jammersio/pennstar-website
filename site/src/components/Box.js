import React from 'react'
import { Box as Boxy } from 'rebass'

export default function Box({ children }) {
  return (
    <Boxy
      p={5}
      fontSize={4}
      width={[1, 1, 1 / 2]}
      color='white'
      bg='primary'
      children={children}
      mx={`auto`}
      className="text-center"
    />
  )
}
