import React from 'react'
import { Box } from 'rebass'

export const FooterMenuLayout = ({ column1, column2, column3, ...props }) => {
  return (
    <Box
      display={['block', null, null, 'flex']}
      bg='muted'
      width='full'
    >
      <Box
        width={['full', null, null, '50%']}
        p='4'
      >
        {column1}
      </Box>
      <Box
        display={'flex'}
        justifyContent='space-between'
        width={['full', null, null, '50%']}
      >
        <Box
          height={'full'}
          width={['55%']}
          p='4'
        >
          {column2}
        </Box>
        <Box
          height={'full'}
          width={['45%']}
          p='4'
        >
          {column3}
        </Box>
      </Box>
    </Box>
  )
}
