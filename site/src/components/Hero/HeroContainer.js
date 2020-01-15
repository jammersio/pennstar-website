import React from 'react'
import { Image } from 'rebass'
import { Box, FlexWrap } from '../Layout/'
import { Container } from 'theme-ui'
import Cta from '../Cta'


function HeroContainer({
  ctaProps = {},
  imageContent = {},
  imageProps = {},
  ...props
}) {
  return (
    <FlexWrap {...props}>
      <Box
        width={[`full`, `full`, 1 / 2]}
      >
        <Cta
          {...ctaProps}
        />
      </Box>
      <Image src={imageContent} mt={[-5]} width={[`full`, `full`, 1 / 2]} />
    </FlexWrap>
  )
}

export default HeroContainer
