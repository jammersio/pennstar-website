import React from 'react'
import { Section } from '../Containers'

const defaultBg = 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg'


export const FullHero = ({
  bgImg = defaultBg,
  backgroundSize = ['contain', null, null, 'cover'],
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
      minHeight='heroHeight' outerProps={{
        sx: {
          // background: 'linear-gradient(180deg, #606060 0%, rgba(255, 255, 255, 0) 100%)',
          backgroundImage: `url(${bgImg})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
          ...outerProps
        }
      }}
      {...props}
    >
      {children}
    </Section>
  )
}
