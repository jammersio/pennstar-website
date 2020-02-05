const path = require('path')

module.exports = {
  // ...
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(`src/mdpages`),
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          // hidden: process.env.NODE_ENV === "production"
        },
        plugins: [
          "gatsby-tinacms-git",
          "gatsby-tinacms-remark",
        ],
      },
    }
  ],
}
