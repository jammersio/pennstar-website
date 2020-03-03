import React from 'react'
import { Section } from '../Containers'

const defaultBg = 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg'


export const FullHero = ({
  bgImg = defaultBg,
  backgroundSize = '100%',
  backgroundPosition = 'top left',
  rounded = 'false',
  children,
  ...props
}) => {
  return (
    <Section
      as='section'
      width={['screenWidth']}
      minHeight='heroHeight'
      p='0'
      outerProps={{
        sx: {
          // background: 'linear-gradient(180deg, #606060 0%, rgba(255, 255, 255, 0) 100%)',
          backgroundImage: `url(${bgImg})`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition,
          backgroundRepeat: 'no-repeat',
        }
      }}
      {...props}
    >
      {children}
    </Section>
  )
}
