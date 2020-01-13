import React from 'react'
import Section from './Section'
import { HeroContainer } from "./Container"
import heroImg from "../../assets/images/scrum-board.svg"

export default ({ children, ...props }) => {
  return (
    <Section
      bg="blue"
      width={`full`}
      minHeight={`60vh`}
    // ${background ? background : ''}
    >
      <HeroContainer
        width={`full`}
        content={'Hi Guys'}
        vector={heroImg}
        {...props}
      >
      </HeroContainer>
      {children}
    </Section>
  )
}
