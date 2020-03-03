// /** @jsx jsx */
// import { jsx } from 'theme-ui'
// import { Link } from 'gatsby'
// import { Flex, Button, Text, Link as ReLink, } from 'rebass'
// import { ConditionalWrapper } from '../utils'

// export function IconButton({ icon = `fa fa-circle-o`, to, href, children, ...props }) {
//   const IconWrapper = ({ icon, children }) => (
//     <Flex
//       alignItems='inherit'
//       justifyContent='inherit'
//       flexDirection='inherit'
//       color='inherit'
//     >
//       <i className={icon} />
//       <Text pr='1'>{children}</Text>
//     </Flex>
//   )
//   return (
//     <ConditionalWrapper
//       condition={to && !href}
//       test={() => (
//         <Button as={Link} to={to} {...props}>
//           <IconWrapper icon={icon} children={children} />
//         </Button>
//       )}
//       control={() => (
//         <Button as={ReLink} href={href} target='_blank' {...props}>
//           <IconWrapper icon={icon} children={children} />
//         </Button>
//       )}
//     />
//   )
// }


// export function ButtonLink({ to, href, children, ...props }) {

//   return (
//     <ConditionalWrapper
//       condition={to && !href}
//       test={() => (
//         <Button as={Link} to={to} {...props}>{children}</Button>
//       )}
//       control={() => (
//         <Button as={ReLink} href={href} target='_blank' {...props}>{children}</Button>
//       )}
//       {...props}
//     />
//   )
// }


