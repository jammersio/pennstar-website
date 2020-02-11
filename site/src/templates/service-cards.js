import React from 'react'
import { Flex, Box, Text, Heading } from 'rebass'
import { Card } from '../components/Layout'


export const ServiceCards = ({ cards, ...props }) => {
  return (
    <Flex flexWrap='wrap' maxWidth='5xl' mx='auto'>
      {cards.map(card => (
        <Card
          width={['full', 'full', 1 / 2, 1 / 3]}
          // maxWidth='300px'
          mx='auto'
          innerProps={{ sx: { border: 'none', boxShadow: 'default', borderRadius: 'lg' } }}
        >
          <Flex
            bg='gray.1'
            fontSize='64px'
            textAlign='left'
            alignItems='center'
            pl='2'
          >
            <i className="fas fa-square" /><br />
            <Box as='span' ml='3'>
              <Heading fontSize='2'>{card.heading}</Heading>
              <Text fontSize='1'>{card.details}</Text>
            </Box>
          </Flex>
        </Card>
      ))}
    </Flex>
  )
}
