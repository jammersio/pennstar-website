import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Text, Heading } from 'rebass'
import { FlexWrap } from '../../components/Containers'
import { Card } from '../../components/Cards'
import { shortid } from '../../utils'

export const Cards = ({ cards: homeCards, ...props }) => {
  return (
    <FlexWrap maxWidth="5xl" mx='auto'>
      {homeCards.map(card => (
        <Card
          key={shortid()}
          as='article'
          width={['full', null, null, 1 / 3]}
          maxWidth={['500px']}
          my={[3, null, null, 0]}
          px={[0, null, null, 3]}
          mx={['auto']}
          boxShadow='neu'
        >
          <Box
            bg='gray.3'
            fontSize='64px'
            py='4'
            sx={{
              borderTopWidth: '4px',
              borderTopLeftRadius: 'lg',
              borderTopRightRadius: 'lg'
            }}
          >
            <i className={card.icon} sx={{ color: 'gray.4', fontSize: 8 }} /><br />
            <Heading>{card.heading}</Heading>
          </Box>
          <Box p='2'
            bg='gray.1'
            fontSize='0.55em'
            textAlign={['left', null, null, 'inherit']}
            px={[4, null, null, 4]}
            py={[3]}
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
