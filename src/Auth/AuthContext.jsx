import { createContext, useState } from 'react'

import users from '../server/users'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)

  const user = users.find((user) => user.login)

  const login = (name, password, success, failure) => {
    if (user.login === name && user.password === password) {
      console.log(user.login, name, user.password, password)
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
