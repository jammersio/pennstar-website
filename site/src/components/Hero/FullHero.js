import React from 'react'
import { Section } from '../Containers'

const defaultBg = `url("https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg")`


export const FullHero = ({ bgImg = defaultBg, children, ...props }) => {
  return (
    <Section
      as='section'
      width={['screenWidth']}
      height='heroHeight'
      minHeight='heroHeight'
      outerProps={{
        sx: {
          background: 'linear-gradient(180deg, #606060 0%, rgba(255, 255, 255, 0) 100%)',
          backgroundImage: bgImg,
          backgroundSize: 'cover',
        }
      }}
      {...props}
    >
      {children}
    </Section>
  )
}
