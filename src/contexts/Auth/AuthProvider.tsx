import { v4 as uuid } from 'uuid'
import { useEffect, useState } from 'react'
import { User } from '../../@types/User'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)

  const [loading, setLoading] = useState(true)

  const login = (name: string, password: string) => {
    if (name && password) {
      const saveUser = {
        id: uuid(),
        name
      }

      localStorage.setItem('user', JSON.stringify(saveUser))

      setUser(saveUser)
      setLoading(false)
      return true
    }

    return false
  }

  const register = (name: string, password: string) => {
    console.log(name, password)

    return !name || !password
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
    const loadUser = localStorage.getItem('user')

    if (loadUser) {
      setUser(JSON.parse(loadUser))
    }

    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: Boolean(user),
        login,
        logout,
        register,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
