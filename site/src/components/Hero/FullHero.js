import React from 'react'
import { Section } from '../Containers'

const defaultBg = 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg'


export const FullHero = ({
  bgImg = defaultBg,
  backgroundSize = ['cover'],
  backgroundPosition = 'top left',
  rounded = 'false',
  outerProps = {},
  children,
  ...props
}) => {
  return (
    <Section
      as='section'
      className='hero-holder'
      outerProps={{
        sx: {
          minHeight: '60vh',
          backgroundImage: `url(${bgImg})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
          mx: 'auto',
          ...outerProps
        }
      }}
      {...props}
    >
      {children}
    </Section>
  )
}
