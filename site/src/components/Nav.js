import React, { useState } from 'react'
import { Flex, Image } from 'rebass'
import { FlexWrap, Section, Container, Box } from '../components/Layout'
import { Linked, NavLink } from '../components/Elements'

const StyledLink = (props) => <Linked {...props} />
const logo = false



export default function Nav({ siteTitle, pageList, ...props }) {
  let [isExpanded, toggleExpansion] = useState(false);
  console.log(pageList)
  return (
    <>
      <Box py="0" order="1">{siteTitle}</Box>
      <Box py="1" mr="auto" fontSize={[1]} order="2">
        <FlexWrap flexDirection="row" justifyContent="flex-end">
          {pageList.map(page => <NavLink to={page.to}>{page.page}</NavLink>)}
        </FlexWrap>
      </Box>
    </>

  )
}
