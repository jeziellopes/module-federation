import React from "react"
import { useAuth } from "host/store"

import { Button, Form, TextInput, Label, SignInUI } from '@shared/ui'

export const SignIn: React.FC = () => {
  const { authenticated, login } = useAuth()

  if (authenticated) {
    return <SignInUI />
  }

  return <SignInUI>
    <Label context="signin">Local SignIn</Label>
    <Form>
      <TextInput type="text" placeholder="your user"/>
      <TextInput type="password" placeholder="your password"/>
      <Button onClick={login}>login</Button>
    </Form>
  </SignInUI>
}