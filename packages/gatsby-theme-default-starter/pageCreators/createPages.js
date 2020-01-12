const path = require(`path`)


async function createPages({ graphql, actions }) {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentYaml {
        edges {
          node {
            page
            content {
              item
            }
            links {
              to
            }
          }
        }
      }
    }
  `)
  result.data.allContentYaml.edges.forEach(({ node }) => {
    // console.log(node)
    createPage({
      path: `/${node.page}`,
      component: path.resolve(`src/templates/pageTemplate.js`),
      context: {
        content: node.content, links: node.links
      }
    })
  })
  // console.log(JSON.stringify(result))
}

exports.default = createPages;
