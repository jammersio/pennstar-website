import React from 'react'
import { Box, Flex, Link as ReLink } from 'rebass'
import { Section } from '../../components/Containers'
import { Card as DefCard } from '../../components/Cards'

export const Card = ({ card, ...props }) => {
  return (
    <Section
      sx={{
        position: ['absolute'],
        top: ['5%', '15%'],
        right: ['', '10%']
      }}
    >
      <DefCard
        minWidth={['md', null, null, 'md']}
        innerProps={{
          sx: {
            border: 'none',
            boxShadow: 'xl'
          }
        }}
      >
        <Box
          px='4'
          py='2'
          bg='blue.4'
          color='white'
          fontWeight='600'
          sx={{
            border: 'none',
            borderTopLeftRadius: 'lg',
            borderTopRightRadius: 'lg'
          }}
        >
          {card.heading}
        </Box>
        <Box
          display={['flex']}
          py='2'
          bg='white'
          sx={{
            border: 'none',
            borderBottomLeftRadius: 'lg',
            borderBottomRightRadius: 'lg'
          }}
        >
          <Flex p='2' fontSize={['md']}
            sx={{
              borderRightStyle: 'solid',
              borderRightWidth: 'px',
              borderRightColor: 'gray.3',
            }}>
            <Box
              as='span'
              className="fa-stack"
              style={{ verticalAlign: 'top' }}
              color='blue.4'
            >
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-map-marker-alt fa-stack-1x fa-inverse"></i>
            </Box>
            <Box textAlign='left'>
              {card.streetAddress}<br />
              {card.aptSuite} <br />
              {card.cityStateZip}
            </Box>
          </Flex>
          <Flex
            p='2'
            flexDirection='column'
            fontSize={['md']}
            textAlign='left'
          >
            <Box>
              <Box
                as='span'
                className='fa-stack'
                style={{ verticalAlign: 'top' }}
                color='blue.4'
              >
                <i className='fas fa-circle fa-stack-2x'></i>
                <i className='fas fa-phone-alt fa-stack-1x fa-inverse'></i>
              </Box>
              <ReLink href={`tel:${card.phone}`}>
                {card.phone}
              </ReLink>
            </Box>
            <Box mt='3'>
              <Box
                as='span'
                className="fa-stack"
                style={{ verticalAlign: 'top' }}
                color='blue.4'
              >
                <i className='fas fa-circle fa-stack-2x'></i>
                <i className='far fa-envelope fa-stack-1x fa-inverse'></i>
              </Box>
              <ReLink href={`mailto:${card.email}`}>
                {card.email}
              </ReLink>
            </Box>
          </Flex>
        </Box>
      </DefCard>
    </Section>
  )
}
