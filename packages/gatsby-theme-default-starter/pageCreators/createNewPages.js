const path = require(`path`)


async function createNewPages({ graphql, actions }) {
  const { createPage } = actions

  const result = await graphql(`
  query MyQuery {
    allConfigYaml {
      edges {
        node {
          pages {
            page
          }
        }
      }
    }
    allLayoutYaml {
      edges {
        node {
          pages {
            layout
            page
            to
            sections {
              section
            }
          }
        }
      }
    }
    allContentYaml {
      edges {
        node {
          id
          page
          section {
            type
            variant
            content {
              className
              as
              children
            }
          }
        }
      }
    }
  }
`)


  const { allConfigYaml: { edges: config }, allLayoutYaml: { edges: layout }, allContentYaml: { edges: data } } = result.data

  // and array of objects -- used to decide which pages get rendered
  const pageList = config.map(({ node: { pages } }) => pages.map(page => page.page))
  // controls which elements are used to render which pages
  const layoutTemplates = layout.map(({ node: { pages } }) => pages.map(page => page))
  // actual data to render
  const contentData = data.map(({ node }) => node)

  const mergeByPage = (a1, a2) =>
    a1.map(itm => ({
      ...a2.find((item) => (item.page === itm.page) && item),
      ...itm
    }));
  const mergedPages = mergeByPage(contentData, ...layoutTemplates)
  // need to filter out any extra pages from mergedPages

  const finalPages = pageList.map(item => mergedPages.filter(pg => item.find(page => {
    return page === pg.page
  })))

  createPage({
    path: `/dump`,
    component: path.resolve(`src/templates/stringifyTemplate.js`),
    context: {
      finalPages
    }
  })

  finalPages.forEach((pages) => pages.forEach(page => {
    console.log(page)
    createPage({
      path: `/${page.page}`,
      component: path.resolve(`src/templates/pageTemplate.js`),
      context: {
        pageProps: page
      }
    })
    return
  }))
  return
}

exports.default = createNewPages;
