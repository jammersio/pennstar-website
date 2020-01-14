import React from 'react'
import { Card as CardBass } from "rebass"
import Cta from "../Cta"

export default function Card({ ctaProps, ...props }) {
  return (
    <CardBass
      width={[`full`, 1 / 2]} textAlign={`center`} py={[5]} {...props}
      my={[2]}
      sx={{
        border: `1px solid red`,
        borderRadius: `lg`
      }}
    >
      <Cta {...ctaProps} />
    </CardBass>
  )
}
