import React from 'react'
import { Section } from '../Layout'
import Cta from "./Cta"

export default function CtaSection({ ctaProps, ...props }) {
  return (
    <Section bg={`primary`} minHeight={`container`} {...props}>
      <Cta
        {...ctaProps}
      />
    </Section>
  )
}
