import React, { createContext, useEffect, useState } from 'react'

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('id')) setIsLogin(true)
  }, [])

  const logoned = () => {
    setIsLogin(true)
  }

  const logout = () => {
    setIsLogin(false)
  }

  return (
    <LoginContext.Provider value={{ isLogin, logoned, logout }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
