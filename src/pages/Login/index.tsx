import { ChangeEvent, useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import * as S from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthContext'

const Login = () => {
  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setName(event.target.value)
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setPassword(event.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && password) {
      const isLogged = login(name, password)
      if (isLogged) navigate('/')
    } else setError('Usuário ou senha inválidos')
    return
  }

  return (
    <S.Wrapper>
      <S.Title>Faça Login</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <div>
          <S.FielInput
            type="text"
            value={name}
            onChange={handleNameInput}
            placeholder="Digite seu nome..."
          />
        </div>
        <div>
          <S.FielInput
            type="password"
            value={password}
            onChange={handlePasswordInput}
            placeholder="Senha..."
          />
        </div>
        <S.TextError>{error}</S.TextError>
        <div>
          <S.Button type="submit">Entrar</S.Button>
        </div>
        <S.TextLink>
          Não tem uma conta?<Link to="/register">&nbsp;Registre-se</Link>
        </S.TextLink>
      </S.Form>
    </S.Wrapper>
  )
}

export default observer(Login)
