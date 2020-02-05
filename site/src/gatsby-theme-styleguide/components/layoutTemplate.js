// import React from "react"
// import { useStaticQuery, graphql } from 'gatsby';
// import { Layout, Header, Footer } from "theme-ui"
// import Meta from "../../components/Meta"
// import Nav from "../../components/Nav"


// export default ({ pageName, pageList, navProps, children, ...props }) => {

//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)


//   return (
//     <Layout>
//       <Meta />
//       <Header>
//         <Nav siteTitle={data.site.siteMetadata.title || `default`} pageList={pageList}
//           {...navProps}
//         />
//       </Header>
//       {children}
//       <Footer>
//         © {new Date().getFullYear()} Company Name
//       </Footer>
//     </Layout>
//   )
// }
