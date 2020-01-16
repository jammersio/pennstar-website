// const path = require('path');
module.exports = {
  siteMetadata: {
    title: `PennStar Land Transfer`,
    description: `Testing consumption of multiple gatsby themes`,
    author: `@jammers`,
  },
  plugins: [

    `gatsby-theme-boostrap-sass`,
    `gatsby-theme-styleguide`,
    {
      resolve: `gatsby-theme-default-starter`,
      options: {
        sources: [
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: 'data'
            }
          }
        ]
      }
    }
  ]
}
