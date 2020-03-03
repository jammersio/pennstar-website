import React from 'react'
import { Image } from 'rebass'
import { Box, FlexWrap } from '../Containers'
import Cta from '../_Cta'


export function HeroContainer({
  ctaProps = {},
  imageContent = {},
  imageProps = {},
  children,
  ...props
}) {
  return (
    <FlexWrap {...props}>
      <Box
        width={[`full`, `full`, 1 / 2]}
      >
        {ctaProps &&
          <Cta
            {...ctaProps}
          />
        }
        {children}
      </Box>
      <Image
        src={imageContent}
        mt={[-5]}
        width={[`full`, `full`, 1 / 2]}
      />
    </FlexWrap>
  )
}

