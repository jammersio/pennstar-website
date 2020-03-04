import React from 'react'
import { Box } from 'rebass'
import { ShapedCard } from '../../components/Cards'
import { shortid } from '../../utils'


export const Cards = ({ cards, ...props }) => {
  return (
    <Box
      display={['block', null, null, 'flex']}
      textAlign='left'
      width={['70%', null, null, 'full']}
      maxWidth={'1200px'}
      my={['1', null, null, '5']}
      mx='auto'
    >
      {cards.map(card => (
        <ShapedCard
          key={shortid()}
          image={card.image}
          name={card.heading}
          title={card.details}
          my={['4', null, null, '0px']}
        />
      ))}
    </Box>
  )
}
