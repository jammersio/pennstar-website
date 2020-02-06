const path = require(`path`)

// Quick-and-dirty helper to convert strings into URL-friendly slugs.
const slugify = str => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
};




exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              slug
              type

            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }



  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.type === 'page') {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug
        }, // additional data can be passed via context
      })
    }
  })
}
