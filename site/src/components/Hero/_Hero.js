import React from 'react'
import { Section } from '../Containers'
import { HeroContainer } from './_HeroContainer'
import heroImg from '../../assets/images/scrum-board.svg'

const Hero = ({ children, layoutProps, ctaProps, ...props }) => {

  return (
    <Section
      bg={`background`}
      width={[`full`]}
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

export default Hero
