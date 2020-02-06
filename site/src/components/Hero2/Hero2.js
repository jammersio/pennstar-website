import React from 'react'
import { Section } from '../Layout'
import Hero2Container from './Hero2Container'
import heroImg from '../../assets/images/scrum-board.svg'



const Hero2 = ({ children, layoutProps, ctaProps, ...props }) => {


  return (
    <>
      <Hero2Container
        width={'full'}
        imageContent={heroImg}
        ctaProps={ctaProps}
        textAlign='left'
        {...props}
      >
      </Hero2Container>
      {children}
    </>
  )

}

export default Hero2
