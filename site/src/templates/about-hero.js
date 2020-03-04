import React from 'react'
import { Link } from 'gatsby'
import { FullHero } from '../components/Hero/FullHero'
import { Flex, Box, Text, Heading } from 'rebass'

const textShadow = {
  textShadow: '1px 1px 1px rgba(0, 0, 0, 0.35)'
}

const heroStyles = {
  justifyContent: 'flex-end',
  mt: 4,
  mr: 5,
  px: 2,
  py: 6,
  textAlign: 'right',
  maxWidth: '2200px',
  mx: 'auto',
  color: 'secondary',
  '& .hero-box': {
    '& > h2': {
      color: 'primary',
      fontSize: 6,
      ...textShadow
    },
    '& .tagline': {
      color: 'white',
      mt: 2,
      ...textShadow
    },
  }
}

const heroLinkStyles = {
  fontSize: 'md',
  mt: '3',
  mb: '-3',
  ...textShadow,
  '& a': {
    color: 'white',
    ...textShadow,
    '&:hover': {
      color: 'primaryHover',
      textDecoration: 'none'
    }
  }
}

export const AboutHero = ({ hero, bgImg }) => {
  return (
    <FullHero
      bgImg={bgImg}
      backgroundPosition={['center left', null, null, 'center left']}
      outerProps={{ boxShadow: 'insetDark' }}
    >
      <Flex sx={{ ...heroStyles }}>
        <Box className='hero-box'>
          <Heading
            as='h2'
            fontSize={[3, 5, 6]}
            className='heading'
          >
            {hero.heading}
          </Heading>
          <Text as='p' className='tagline'>
            {hero.tagline}
          </Text>
          <hr
            style={{ borderColor: 'white' }}
          />
          <Text
            sx={{ ...heroLinkStyles }}
          >
            <Link to={hero.links[0].link}>
              {hero.links[0].label}
              <span>
                <i className="space-left fas fa-arrow-circle-right" />
              </span>
            </Link>
          </Text>
        </Box>
        <Box />
      </Flex>
    </FullHero>
  )
}
