import { styled } from "@stitches/react"

export const Main = styled('main', {
  position: 'relative',
  background: '#fd7e14',
  width: '600px',
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
})

export const Label = styled('p')

export const AuthStatus = styled(Label, {
  position: 'absolute',
  top: '10px',
  right: '10px',
  margin: 0
})

export const Button = styled('button', {
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
  }
})