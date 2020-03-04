import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Box, Text, Heading } from 'rebass'
import { Card } from '../components/Cards'
import { shortid } from '../utils'


export const ServiceCards = ({ cards, ...props }) => {
  return (
    <Flex flexWrap='wrap' maxWidth='5xl' mx='auto' {...props}>
      {cards.map(card => (
        <Card
          key={shortid()}
          width={['full', '1/2', 1 / 2, 1 / 3]}
          mx='auto'
          boxShadow='neuSm'
        >
          <Flex
            bg='gray.1'
            fontSize='64px'
            textAlign={['left']}
            alignItems={['center']}
            pl='2'
          >
            <i className={card.icon} sx={{ color: 'gray.3' }} /> <br />
            <Box as='span' ml='3'>
              <Heading fontSize='2' color='primary'>{card.heading}</Heading>
              <Text fontSize='1'>{card.details}</Text>
            </Box>
          </Flex>
        </Card>
      ))}
    </Flex>
  )
}
