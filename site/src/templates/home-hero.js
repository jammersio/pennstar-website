import React from 'react'
import { Link } from 'gatsby'
import { FullHero } from '../components/Hero/FullHero'
import { Flex, Box, Text, Heading } from 'rebass'

const defaultBg = 'https://images.pexels.com/photos/3228692/pexels-photo-3228692.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.55)'
}

export const HomeHero = ({ hero }) => {
  return (
    <FullHero
      bgImg={defaultBg}
      backgroundSize='cover'
      backgroundPosition={['bottom left', null, null, 'center left']}
      outerProps={{ boxShadow: 'insetDark' }}
    >
      <Flex
        ml={[0, 5]}
        width='full'
      >
        <Box
          color='white'
          py='7'
          width={['70%', null, null, '35%']}
          mr={[0, null, null, 'auto']}
        >
          <Heading
            fontSize={[3, 5, 6]}
            sx={{ ...textShadow }}
          >
            {hero.heading}
          </Heading>
          <Text
            mt='2'
            fontSize='2'
            color='muted'
            sx={{ ...textShadow }}
          >
            {hero.tagline}
          </Text>
          <hr
            style={{
              borderColor: 'white',
              boxShadow: '2xl'
            }}
          />
          <Text
            fontSize='md'
            mt='3'
            mb='-3'
            sx={{
              '& a': {
                color: 'white',
                ...textShadow,
                '&:hover': {
                  color: 'primaryHover',
                  textDecoration: 'none'
                }
              }
            }}
          >
            <Link to={hero.links[0].link}>
              {hero.links[0].label}
              <span>
                <i className="space-left fas fa-arrow-circle-right" />
              </span>
            </Link>

          </Text>

        </Box>
      </Flex>
    </FullHero>
  )
}
