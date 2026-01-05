import { styled } from "@stitches/react"
import { Label } from '../structure/Label'

export const AuthStatus = styled(Label, {
  position: 'absolute',
  top: '10px',
  right: '10px',
  margin: 0,
  variants: {
    color: {
      warn: {
        color: 'red',
      },
      success: {
        color: 'green',
      },
    },
  },
})