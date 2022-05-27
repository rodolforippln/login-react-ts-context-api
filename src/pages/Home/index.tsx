import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import * as S from './styles'

const Home = () => {
  const users = [{ id: '1', name: 'User 1', authenticated: false }]

  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <S.Wrapper>
      <S.Title>Lista de Usuários</S.Title>
      <S.Button onClick={handleLogout}>Sair</S.Button>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            {String(!!user.authenticated)} - {user.name}
          </div>
        </div>
      ))}
    </S.Wrapper>
  )
}

export default Home
