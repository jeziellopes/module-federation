import { useAuth } from "shared/store"

export const Auth = () => {
  const context = useAuth()

  const handleLogin = () => {
    console.log('context', context)
    if (context) context?.login()
  }

  const handleLogout = () => {
    console.log('context', context)
    if (context) context?.logout()
  }

  return <div
    style={{
      position: 'relative',
      background: '#7950f2',
      width: '200px',
      height: '300px',
      color: '#333',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '12px',
      margin: '4px',
      borderRadius: '2px'
    }}
  >
    <p style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      margin: 0
    }} >{`Authenticated: ${context?.authenticated}`}</p>
    {
        context?.authenticated
          ? <button onClick={handleLogout}>logout</button>
          : <button onClick={handleLogin}>login</button>
      }
  </div>
}