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
  // const pageContent = result.data.allContentYaml.edges.map(({ node }) => node)
  // // const sitePages = result.data.allWebsiteYaml.nodes.map((node) => node.pages.map(page => page))
  // if (sitePages.length > 0) {
  //   const [index, about, services, contact] = sitePages
  //   createPage({
  //     path: `/page-test`,
  //     component: path.resolve(`src/templates/stringifyTemplate.js`),
  //     context: {
  //       sitePages: index
  //     }
  //   })
  //   console.log('isArrayPages:', Array.isArray(sitePages))
  //   // console.log(pageContent)
  //   createPage({
  //     path: `/${node.page}-test`,
  //     component: path.resolve(`src/templates/stringifyTemplate.js`),
  //     context: {
  //       content: node.content, links: node.links,
  //       sitePages: sitepages
  //     }
  //   })
  // }
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
