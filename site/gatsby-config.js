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
    logo: `https://fakeimg.pl/48x48/BADA55?text=PS&font=lobster`,
    description: `Testing consumption of multiple gatsby themes`,
    author: `@jammers`,
    navLinks: [`Home`, `About Us`, `Services`, `Contact Us`],
    socialLinks: [
      { fb: `www.facebook.com/` }, { twitter: `www.twitter.com` }, { linkedin: `www.linkedin.com` }
    ]
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-theme-boostrap-sass`,
    `gatsby-theme-styleguide`,
    `gatsby-theme-json-data`,
    `gatsby-theme-tina-turner`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/assets/images`)
      }
    }
  ]
}
