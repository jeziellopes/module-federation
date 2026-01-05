import { styled } from "@stitches/react"

export const TextInput = styled('input', {
  background: '#fff',
  width: '200px',
  height: '24px',
  color: '#000',
  fontSize: '12px',
  textIndent: '8px',
  margin: '0 0 16px',
  borderRadius: '4px',
  borderStyle: 'none',
  outline: 'none',
  '&:active': {
    borderStyle: 'none',
  }
})