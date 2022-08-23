import { createContext, useState } from 'react'

import users from '../server/users'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)

  const login = (name, password, success, failure) => {
    const user = users.find((user) => user.login === name)
    if (user && password === user.password) {
      setAuth(true)
      success()
    } else {
      setAuth(false)
      failure()
    }
  }
  const logout = () => {
    setAuth(false)
  }

  const value = { auth, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
