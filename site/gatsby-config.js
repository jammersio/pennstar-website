module.exports = {
  siteMetadata: {
    title: `Gatsby Themes Consumer`,
    description: `Testing consumption of multiple gatsby themes`,
    author: `@gs`,
  },
  plugins: [
    `gatsby-theme-default-starter`,
    `gatsby-theme-boostrap-sass`,
    `gatsby-theme-styleguide`,
    {
      resolve: `gatsby-theme-yaml-data`,
      options: {
        contentPath: `src/events` || `data`, // defaults to root data folder
        basePath: `/events` // path to prepend file with in url
      }
    }

  ]
}
