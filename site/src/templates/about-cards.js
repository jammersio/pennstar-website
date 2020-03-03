import React from 'react'
import { Box, Text, Heading, Image } from 'rebass'
import { ShapedCard } from '../components/Cards'
import { shortid } from '../utils'


export const Cards = ({ cards, ...props }) => {
  return (
    <Box
      display={['block', null, null, 'flex']}
      textAlign='left'
      width={['full', null, null, '80%']}
      px={['2', null, null, '4']}
      my='5'
      mx='auto'
    >
      {cards.map(card => (
        <ShapedCard
          key={shortid()}
          image={card.image}
          name={card.heading}
          title={card.details}
          my={['4', null, null, '0px']}
          maxWidth='md'
        />
      ))}
    </Box>
  )
}
