const path = require(`path`)


async function createNewPages({ graphql, actions }) {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allPagesYaml {
        nodes {
          pages {
            page
            to
            layout
            sections {
              section
            }
          }
        }
      }
      contentYaml {
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
  `)


  const contentLayout = result.data.allPagesYaml.nodes
  const [{ pages: layoutPages }] = contentLayout
  const { pages } = result.data.contentYaml

  pages.forEach(page => {
    layoutPages.forEach(layout => {
      let isPage = layout.page === page.page && true
      createPage({
        path: `/${layout.page}`,
        component: path.resolve(`src/templates/pageTemplate.js`),
        context: {
          ...layout,
          content: isPage && page.content,
          links: isPage && page.links
        }
      })
    })
  })

  return
}

exports.default = createNewPages;
