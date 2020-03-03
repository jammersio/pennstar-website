import React from 'react'
import { Box, Image, Heading, Text } from 'rebass'

const cardOuterContainerStyles = {
  position: 'relative',
  maxWidth: 'md',
  boxShadow: 'default',
  borderTopLeftRadius: 'full',
  borderBottomLeftRadius: 'full',
  borderBottomRightRadius: 'full',
  mx: 'auto',
}

const cardInnerContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  // my: 4,
}

const imageBoxStyles = {
  width: 'auto',
  height: '100%',
  borderRadius: 'full',
  '& img': {
    width: 'auto',
    height: 'auto',
    display: 'block',
    borderRadius: 'full'
  }
}


export const ShapedCard = ({
  image = 'https://i.pravatar.cc/',
  name = 'PERSON NAME',
  title = 'PERSON TITLE',
  ...props
}) => (
    <Box sx={{ ...cardOuterContainerStyles }}>
      <Box sx={{ ...cardInnerContainerStyles }} {...props}>
        <Box className='img-box' sx={{ ...imageBoxStyles }}>
          <Image src={image} />
        </Box>
        <Box sx={{ position: 'relative', width: '80%', px: [4, null, null, 2] }}>
          <Heading fontSize={['2', null, '3']} my='1'>{name}</Heading>
          <Text py='1'>{title}</Text>
        </Box>
      </Box>
    </Box >
  )
