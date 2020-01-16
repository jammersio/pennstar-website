const path = require(`path`)


async function createNewPages({ graphql, actions }) {
  const { createPage } = actions

  const result = await graphql(`
    query  {
      allConfigIndexYaml {
        edges {
          node {
            page
            to
          }
        }
      }
    }
  `)


  const { allConfigIndexYaml: { edges } } = result.data

  const pageList = edges.map(({ node }) => node)

  pageList.forEach((page) => {
    console.log(page.page)
    createPage({
      path: `${page.to}`,
      component: path.resolve(`src/templates/pageTemplate.js`),
      context: {
        pageList: [...pageList],
        pageName: page.page,
      }
    })
    console.log(page.to)
    return
  })

  // createPage({
  //   path: `/dump`,
  //   component: path.resolve(`src/templates/stringifyTemplate.js`),
  //   context: {
  //     config, result
  //   }
  // })
  return
}

exports.default = createNewPages;
