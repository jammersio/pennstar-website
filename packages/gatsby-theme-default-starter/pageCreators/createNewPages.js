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
    }
  `)


  // Get Site content:
  const siteContent = result.data.allPagesYaml.nodes
  const [{ pages }] = siteContent

  pages.forEach(page => {

    createPage({
      path: `/${page.page}`,
      component: path.resolve(`src/templates/pageTemplate.js`),
      context: {
        ...page
      }
    })

  })


  return

}

exports.default = createNewPages;
