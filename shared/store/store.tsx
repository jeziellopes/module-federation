import React from "react"
import { createContext, useContext, useMemo, useState } from "react"

export type AuthContextData = {
  authenticated: boolean
  login: () => void
  logout: () => void
}

const initialValues: AuthContextData = {
  authenticated: false,
  login: () => undefined,
  logout: () => undefined
}

export const AuthContext = createContext<AuthContextData>(initialValues)

type Props = {
  children?: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({
  children,
}: Props) => {
  const [authenticated, setAuthenticated] = useState(false)

  const login = () => setAuthenticated(true)

  const logout = () => setAuthenticated(false)

  const value = useMemo(() => ({
    authenticated,
    login,
    logout
  }), [authenticated, login, logout])
  
  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  
  console.log('useAuth:', context)

  if (!context) {
    throw Error('useAuth need to be used inside AuthContext')
  }

  return context
}

export default AuthProvider