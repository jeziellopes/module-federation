import { styled } from "@stitches/react"

export const Button = styled('button', {
  height: '32px',
  borderRadius: '8px',
  border: '1px solid transparent',
  padding: '0.6em 1.2em',
  fontSize: '1em',
  fontWeight: 500,
  fontFamily: 'inherit',
  backgroundColor: '#fff',
  cursor: 'pointer',
  transition: 'border-color 0.25s',
  '&:hover': {
    borderColor: '#646cff',
  },
  '&:focus &:focus-visible': {
    outline: '4px auto -webkit-focus-ring-color',
  },
  variants: {
    context: {
      header: {
        position: 'absolute',
        top: 'calc((80px - 32px) / 2)',
        right: '20px',
      }
    }
  }
})