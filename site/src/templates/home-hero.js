import React from 'react'
import { Link } from 'gatsby'
import { FullHero } from '../components/Hero/FullHero'
import { Flex, Box, Text, Heading } from 'rebass'

const defaultBg = 'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg'

const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.55)'
}

export const HomeHero = ({ hero }) => {
  return (
    <FullHero
      bgImg={defaultBg}
    >
      <Flex
        ml='5'
        width='full'
        className='homeHero-Fcontainer'
      >
        <Box
          px='2'
          color='white'
          py='6'
        >
          <Heading
            fontSize='6'
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
