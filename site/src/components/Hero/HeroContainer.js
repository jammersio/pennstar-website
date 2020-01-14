import React from 'react'
import { Box, FlexWrap } from '../Layout/Containers'
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
      <Box
        width={[`full`, `full`, 1 / 2]}
        sx={{
          backgroundImage: `url(${imageContent})`,
          backgroundSize: `100% 100%`,
          backgroundRepeat: `no-repeat`
        }}
        {...imageProps}
      >
      </Box>
    </FlexWrap>
  )
}

export default HeroContainer
