import { useAuth } from 'shared/store'
import { AuthStatus, Main, Button, Label } from './styles'

const Content = () => {
  const context = useAuth()

  const handleLogin = () => {
    console.log('context', context)
    if (context) context?.login()
  }

  const handleLogout = () => {
    console.log('context', context)
    if (context) context?.logout()
  }

  return (
    <Main>
      <AuthStatus>{`Authenticated: ${context?.authenticated}`}</AuthStatus>
      <Label>REMOTE CONTENT</Label>
      {
        context?.authenticated
          ? <Button onClick={handleLogout}>logout</Button>
          : <Button onClick={handleLogin}>login</Button>
      }
    </Main>
  )
}

export default Content
