import React from 'react'
import { Image } from 'rebass'
import { Box, FlexWrap } from '../Layout'
import Cta from '../Cta'


function Hero2Container({
  ctaProps = {},
  imageContent = {},
  ...props
}) {
  return (
    // <FlexWrap {...props}>
    <Box backgroundImage={imageContent} {...props}
      width={['full']}
      height='heroHeight'
      sx={{ backgroundImage: `url(${imageContent})`, backgroundSize: 'cover' }}
    >
      <Cta
        mt='6'
        ml='5'
        textShadow='lg'
        {...ctaProps}
      />
    </Box>
    /* <Image src={imageContent} mt={[-5]} width={[`full`, `full`, 1 / 2]} /> */
    // </FlexWrap>
  )
}

export default Hero2Container
