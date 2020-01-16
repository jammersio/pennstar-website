import React from 'react'
import { Section } from '../Layout'
import Cta from "./Cta"

export default function CtaSection({ ctaProps, ...props }) {
  return (
    <Section bg={`grayDark`} {...props} variant={`fullWidth`}
      color="white"
    >
      <Cta
        {...ctaProps}
      />
    </Section >
  )
}
