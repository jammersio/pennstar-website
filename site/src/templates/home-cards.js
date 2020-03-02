import React from 'react'
import { Box, Text, Heading } from 'rebass'
import { FlexWrap } from '../components/Containers'
import { Card } from '../components/Layout'
import { shortid } from '../utils'

export const Cards = ({ cards: homeCards, ...props }) => {
  return (
    <FlexWrap maxWidth="5xl" mx='auto'>

      {homeCards.map(card => (
        <Card
          key={shortid()}
          as='article'
          width={['full', 1 / 3]}
          maxWidth='300px'
          mx='auto'
        >
          <Box
            bg='gray.3'
            fontSize='64px'
            py='3'
            sx={{
              borderTopWidth: '4px',
              borderTopWidth: '4px',
              borderTopLeftRadius: 'lg',
              borderTopRightRadius: 'lg'
            }}
          >
            <i className={card.icon} /><br />
            <Heading>{card.heading}</Heading>
          </Box>
          <Box p='2'
            fontSize='0.55em'
            bg='gray.1'
            sx={{
              borderBottomWidth: '4px',
              borderBottomLeftRadius: 'lg',
              borderBottomRightRadius: 'lg'
            }}>
            <Text>
              {card.body}
            </Text>
          </Box>
        </Card>
      ))}
    </FlexWrap>
  )
}
