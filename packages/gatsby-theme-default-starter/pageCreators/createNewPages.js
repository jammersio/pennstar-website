const path = require(`path`)


async function createNewPages({ graphql, actions }) {
  const { createPage } = actions

  const result = await graphql(`
    query {
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
              page
              layout
              to
              sections {
                section
              }
            }
          }
        }
      }
      allContentIndexYaml {
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


  // const contentLayout = result.data.allPagesYaml.nodes
  // const [{ pages: layoutPages }] = contentLayout
  // console.log(layoutPages)
  // const { pages } = result.data.contentYaml
  const { allConfigYaml: { edges: config }, allLayoutYaml: { edges: layout }, allContentIndexYaml: { edges: data } } = result.data

  // and array of objects -- used to decide which pages get rendered
  const pageList = config.map(({ node: { pages } }) => pages.map(page => page.page))
  // controls which elements are used to render which pages
  const layoutTemplates = layout.map(({ node: { pages } }) => pages.map(page => page))
  // actual data to render
  const contentData = data.map(({ node }) => node)


  // remove any pages not in config:
  // let layoutItems
  // let contentItems
  // const finalPages = pageList.map(page => {
  //   layoutItems = layoutTemplates.filter(layoutPage => layoutPage.page !== page)
  //   contentItems = contentData.filter(data => data.page !== page)
  //   // return layoutItems.map(template => {
  //   //   template.map(temp => {
  //   //     return ({
  //   //       ...contentItems.find(content => content.page === temp.page && content),
  //   //       ...template
  //   //     })
  //   //   })
  //   // })
  // })

  // function removePages(pagesToMatch, pagesToRemoveFrom) {
  //   pagesToMatch.map(page => {
  //     page
  //   })
  // }


  const mergeByPage = (a1, a2) =>
    a1.map(itm => ({
      // does not merge properties together
      ...a2.find((item) => (item.page === itm.page) && item),
      ...itm
    }));
  const mergedPages = mergeByPage(contentData, ...layoutTemplates)
  const finalPages = mergedPages.filter(mergedPage => pageList.map(pages => {
    pages.some(pg => {
      return pg.page === mergedPage.page
    })
  }))

  // const pageProps = pageList.map(controlPage => {
  //   // const layout = layoutTemplates.filter(layout => layout.page === controlPage && layout)
  //   const layout = layoutTemplates.find(([pages]) => console.log(`🚨layout`, pages))
  //   // const content = contentData.filter(content => content.page === controlPage && content)
  //   // const content = contentData.filter(content => console.log(`🚨content`, content.page))
  //   // console.log(layout)
  //   // console.log(content)

  //   return ({
  //     layout: layoutTemplates.find(layout => layout.page === controlPage && layout),
  //     content: contentData.find(content => content.page === controlPage && content)
  //   })
  // })


  // console.log(JSON.stringify(pageProps))


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


  // createPage({
  //   path: `/dump`,
  //   component: path.resolve(`src/templates/stringifyTemplate.js`),
  //   context: {
  //     layoutTemplates,
  //     contentData,
  //     pageList,
  //     // layoutItems,
  //     // contentItems,
  //     finalPages,
  //     // pageProps
  //   }
  // })

  // pages.forEach(page => {
  //   layoutPages.forEach(layout => {
  //     let isPage = layout.page === page.page && true
  //     createPage({
  //       path: `/${layout.page}`,
  //       component: path.resolve(`src/templates/pageTemplate.js`),
  //       context: {
  //         ...layout,
  //         content: isPage && page.content,
  //         links: isPage && page.links
  //       }
  //     })
  //   })
  // })

  return
}

exports.default = createNewPages;


/*

*/
