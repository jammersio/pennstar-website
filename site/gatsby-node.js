// exports.createPages = ({ actions }) => {
//   const { createPage } = actions
//   let routes = []
//   async function createPagesFromContent(sourceFile) {
//     const ymlDoc = await yaml.safeLoad(fs.readFileSync(sourceFile, "utf-8"))
//     // console.log(ymlDoc)
//     ymlDoc.forEach(element => {
//       if (element.page) {
//         createPage({
//           path: `/${element.page}`,
//           component: require.resolve("./src/templates/basicTemplate.js"),
//           context: {
//             pageContent: element.content,
//             links: element.links,
//           },
//         })
//       }
//     })
//     return
//   }
//   async function getSiteConfig(sourceFile) {
//     const ymlDoc = await yaml.safeLoad(fs.readFileSync(sourceFile, "utf-8"))
//     // console.log(ymlDoc)
//     ymlDoc.forEach(element => {
//       console.log(element.routes)
//       // if (element.page) {
//       //   createPage({
//       //     path: `/${element.page}`,
//       //     component: require.resolve("./src/templates/basicTemplate.js"),
//       //     context: {
//       //       pageContent: element.content,
//       //       links: element.links,
//       //     },
//       //   })
//       // }
//     })
//   }
//   getSiteConfig('./data/website/config.yaml')
//   createPagesFromContent('./data/website/content.yaml')
//   // createRoutes('./data/website/content.yaml')
// }
