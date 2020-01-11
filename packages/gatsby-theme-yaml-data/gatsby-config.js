// using gatsby-themes we are able to pass options to gatsby-config and gatsby-node...
// refactor the following to take options:

// module.exports = {
module.exports = ({ contentPath = `data`, basePath = `/`, }) => ({
  // any options provided by the theme are provided as arguments to this function
  // -- allowing us to dynamically pass in values to our theme's gatsby-config and/or gatsby-node:
  siteMetadata: {
    basePath
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Event",
      },
    },
  ],
})
// }

