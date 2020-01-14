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
            content {
              item
              type
              value
            }
            info {
              type
              variant
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

  const finalPages = [...mergedPages].filter(pg => pageList.find(item => item.map(page => {
    console.log(page === pg.page, page, pg.page)
    return page === pg.page
  })))


  // const finalPages = [...mergedPages].filter(pg => [...pageList].map(item => {
  //   return item.find(page => {
  //     console.log(page, page === pg.page, 'page, page === pg.page')
  //     return page === pg.page
  //   })
  // }))
  console.log(JSON.stringify(finalPages))

  const [pages] = pageList
  // console.log(JSON.stringify(pages))
  // const finalPages = mergedPages.filter(mergedPage => pageList.map(pages => {
  //   pages.some(pg => {
  //     return pg === mergedPage.page
  //   })
  // }))

  /// create new array of keys -- grab the index of the non-matching values,

  createPage({
    path: `/dump`,
    component: path.resolve(`src/templates/stringifyTemplate.js`),
    context: {
      finalPages
    }
  })

  finalPages.forEach(pageProps => {
    createPage({
      path: `/${pageProps.page}`,
      component: path.resolve(`src/templates/pageTemplate.js`),
      context: {
        pageProps
      }
    })
    return
  })


  return
}

exports.default = createNewPages;
