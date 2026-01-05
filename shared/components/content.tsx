import React from "react"
import { useAuth } from 'host/store'
import { ContentUI, Label } from '@shared/ui'

export const Content: React.FC = () => {
  const { authenticated } = useAuth()

  if (!authenticated) {
    return <ContentUI status="unauthenticated">
      <Label color="warn">No Content / Not Authenticated</Label>
    </ContentUI>
  }

  return (
    <ContentUI>
      <Label>Authenticated Remote Content</Label>
    </ContentUI>
  )
}

export default Content
