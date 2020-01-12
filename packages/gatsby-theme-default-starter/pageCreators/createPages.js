const path = require(`path`)


async function createPages({ graphql, actions }) {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWebsiteYaml {
        nodes {
          pages {
            page
            links {
              to
            }
            content {
              item
            }
          }
        }
      }
    }
  `)


  // Get Site content:
  const siteContent = result.data.allWebsiteYaml.nodes
  const [sitePages, contentPages] = siteContent

  const pagesToRender = sitePages.pages.map(sitePage => {
    console.log(sitePage.page)

    return contentPages.pages.forEach(page => {
      console.log(page.page)
      page.page === sitePage.page && (
        createPage({
          path: `/${page.page}`,
          component: path.resolve(`src/templates/pageTemplate.js`),
          context: {
            ...page
          }
        })
      )
    })
  })


  return

}

exports.default = createPages;
