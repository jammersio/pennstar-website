const path = require(`path`)


async function createNewPages({ graphql, actions }) {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allConfigYaml {
        edges {
          node {
            name
            pages {
              page
              to
            }
            tagline
          }
        }
      }
    }
  `)


  const { allConfigYaml: { edges: config } } = result.data
  const [siteConfig] = config
  // and array of objects -- used to decide which pages get rendered
  const pageList = config.map(({ node: { pages } }) => pages.map(page => page))

  pageList.forEach((pages) => pages.forEach(page => {
    const newPageList = pages
    createPage({
      //🚧 add "to" route to config file instead of doing conditional logic here...
      path: `${page.to}`,
      component: path.resolve(`src/templates/pageTemplate.js`),
      context: {
        pageName: page.page,
        pageList: newPageList,
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
