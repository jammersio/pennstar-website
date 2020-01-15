const path = require(`path`)


async function createNewPages({ graphql, actions }) {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allConfigYaml {
        edges {
          node {
            name
            tagline
            pages {
              page
            }
          }
        }
      }
    }
  `)


  const { allConfigYaml: { edges: config } } = result.data
  const [siteConfig] = config
  // and array of objects -- used to decide which pages get rendered
  const pageList = config.map(({ node: { pages } }) => pages.map(page => page.page))

  pageList.forEach((pages) => pages.forEach(page => {
    createPage({
      //🚧 add "to" route to config file instead of doing conditional logic here...
      path: `${page !== "index" ? `/${page}` : "/"}`,
      component: path.resolve(`src/templates/pageTemplate.js`),
      context: {
        pageName: page,
        siteTitle: siteConfig.node.name
      }
    })
    return
  }))

  // createPage({
  //   path: `/dump`,
  //   component: path.resolve(`src/templates/stringifyTemplate.js`),
  //   context: {
  //     finalPages
  //   }
  // })
  return
}

exports.default = createNewPages;
