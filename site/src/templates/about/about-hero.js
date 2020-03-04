import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box, Text, Heading } from 'rebass'
import { FullHero } from '../../components/Hero/FullHero'

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
      textShadow: 'textShadowDark',
    },
    '& .tagline': {
      color: 'white',
      mt: 2,
      textShadow: 'textShadowDark',
    },
  }
}

const heroLinkStyles = {
  fontSize: 'md',
  mt: '3',
  mb: '-3',
  textShadow: 'textShadowDark',
  '& a': {
    color: 'white',
    textShadow: 'textShadowDark',
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
