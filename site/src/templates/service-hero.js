import React from 'react'
import { Flex, Box, Text, Heading, Image } from 'rebass'
import { Cards } from './service-featuredCards'
import { FullHero } from '../components/Hero'

const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'
}

export const ServiceHero = ({ hero }) => {
  return (
    <Flex
      justifyContent='flex-end'
      position='relative'
      width='full'
    >
      <FullHero
        bgImg={hero.image}
        backgroundSize={['0%', null, '100% 100%', '30%']}
        backgroundPosition={'center  left'}
      >
        <Box
          mt={[5, null, null, 4]}
          mr={[0, null, null, 4]}
          color='secondary'
          textAlign={['center', null, null, 'right']}
          className='serviceHero-box'
        >
          <Heading
            fontSize='6'
            color='primary'
            sx={{ ...textShadow }}
          >
            {hero.heading}
          </Heading>
          <Text
            mt='2'
            display='inline'
            textAlign='center'
            color={['white', null, null, 'inherit']}
            mb='4'
            sx={{ ...textShadow }}
          >
            {hero.taglineA}&nbsp;{hero.taglineB}
          </Text>
          <Box>
            <Cards
              ml={[0, null, null, 5]}
              cards={hero.featuredCards}
            />
          </Box>
        </Box>
      </FullHero>

    </Flex>
  )
}
