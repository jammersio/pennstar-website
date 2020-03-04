import React from 'react'
import { Box, Button, Input, Label, Textarea } from 'rebass'

const inputStyles = {
  mb: 2,
  px: 2,
  py: 1,
  boxShadow: 'neuLight',
  border: 'none',
  borderRadius: '.25rem',
  backgroundColor: 'base',
  '&:focus': {
    outline: 'none',
    backgroundColor: 'white',
  },
  '&::placeholder': {
    color: 'gray.5',
  },
  '&:focus::placeholder': {
    color: 'gray.3',
  },
  '&::after': {
    content: '""',
    pb: '2px',
    border: '1px solid green'
  }
}


export const ContactForm = ({ form, ...props }) => {
  return (
    <Box
      width={['full', null, null, '50%']}
      as='form'
      p='4'
      sx={{
        '& input': {
          lineHeight:'2',
          ...inputStyles
        },
        '& textarea': {
          ...inputStyles
        }
      }}
    >
      <label>{form.fields[0]}</label>
      <input
        placeholder="Your Name"
        style={{ width: '100%' }}
        type="text"

      />
      <label>{form.fields[1]}</label>
      <input
        placeholder="you@youremail.com"
        style={{ width: '100%' }}
        type="email"
        pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
      />
      <label>{form.fields[2]}</label>
      <input
        placeholder="000 - 000 - 0000"
        type="tel"
        style={{ width: '100%' }}
        pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
"      />
      <label>{form.fields[3]}</label>
      <textarea style={{ width: '100%' }} />
      <Button mt='2' sx={{
        float: 'right', bg: 'blue.4'
      }}>
        Send
      </Button>
    </Box>
  )
}
