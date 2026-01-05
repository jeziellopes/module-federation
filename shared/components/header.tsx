import React from "react"
import { useAuth } from 'host/store'
import { HeaderUI, Label, Button } from "@shared/ui"

export const Header: React.FC = () => {
  const { authenticated, logout } = useAuth()
  return (
    <HeaderUI>
      {authenticated ? (
        <>
          <Label>Authenticated Remote Header</Label>
          <Button context="header" onClick={logout}>logout</Button>
        </>
      ) : (
          <Label>Unauthenticated Remote Header</Label>
      )}
    </HeaderUI>
  )
}

export default Header
