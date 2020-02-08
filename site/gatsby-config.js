const path = require('path');

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Penn Star`,
    logo: `./src/assets/images/logo.svg`,
    description: `Testing consumption of multiple gatsby themes`,
    author: `@jammers`,
    navLinks: [{ page: 'Home', to: '/' }, { page: 'About Us', to: '/about' }, { page: 'Services', to: '/services' }, { page: 'Contact Us', to: '/contact' },],
    socialLinks: [
      { fb: `www.facebook.com/` }, { twitter: `www.twitter.com` }, { linkedin: `www.linkedin.com` }
    ]
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-theme-boostrap-sass`,
    `gatsby-theme-styleguide`,
    `gatsby-theme-json-data`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/assets/images`)
      }
    }
  ]
}
