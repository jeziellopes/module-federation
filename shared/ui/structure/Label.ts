import { styled } from "@stitches/react"

export const Label = styled('p', {
  textTransform: 'uppercase',
  variants: {
    color: {
      warn: {
        color: 'red'
      }
    },
    context: {
      signin: {
        position: 'absolute',
        right: 'calc((800px - 104px) / 2)',
        top: 0,
      }
    }
  }
})