import React from 'react'
import { Box } from 'rebass'

export const FooterMenuLayout = ({ column1, column2, column3, ...props }) => {
  return (
    <Box sx={{
      bg: 'muted',
      width: 'full',
      py: 5,
    }}>
      <Box
        display={['block', null, null, null, 'flex']}
        maxWidth={['full', null, null, '2400px']}
        mx='auto'
        px={[0, 0, 0, 6]}
      >
        <Box
          width={['full', null, null, null, '50%']}
          p='4'
          mr='5'
        >
          {column1}
        </Box>
        <Box
          display={['block', 'flex']}
          textAlign={['right', 'left']}
          justifyContent='space-between'
          width={['full', null, null, null, '50%']}
        >
          <Box
            height={'full'}
            width={['full', '55%']}
            p='4'
          >
            {column2}
          </Box>
          <Box
            height={'full'}
            width={['full', '45%']}
            p='4'
          >
            {column3}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
