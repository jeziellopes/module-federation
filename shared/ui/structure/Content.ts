import { styled } from "@stitches/react"

export const ContentUI = styled('main', {
  position: 'relative',
  background: '#7950f2',
  width: '800px',
  height: '300px',
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  margin: '4px',
  borderRadius: '2px',
  variants: {
    status: {
      unauthenticated: {
        backgroundColor: '#999',
        color: 'red'
      },
    },
  },
})