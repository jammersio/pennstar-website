import React from 'react'
import { Section } from '../Layout/Containers'
import HeroContainer from './HeroContainer'
import heroImg from '../../assets/images/scrum-board.svg'

export default ({ children, layoutProps, ctaProps, ...props }) => {
  return (
    <Section
      bg={`blue`}
      width={`full`}
      {...layoutProps}
    >
      <HeroContainer
        width={`full`}
        content="Hi Guys"
        imageContent={heroImg}
        ctaProps={ctaProps}
        {...props}
      >
      </HeroContainer>
      {children}
    </Section>
  )
}
