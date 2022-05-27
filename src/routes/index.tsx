import { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth/AuthContext'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const RoutesApp = () => {
  const Private = ({ children }: { children: JSX.Element }) => {
    const { authenticated, loading } = useContext(AuthContext)

    if (loading) return <div>Carregando...</div>

    if (!authenticated) {
      return <Navigate to="/login" />
    }

    return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
