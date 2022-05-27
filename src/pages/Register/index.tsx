import { ChangeEvent, useContext, useState } from 'react'
import * as S from './styles'

import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthContext'

const Register = () => {
  const navigate = useNavigate()
  const { register } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmed, setPasswordConfirmed] = useState('')
  const [error, setError] = useState('')

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setName(event.target.value)
  }

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setPassword(event.target.value)
  }

  const handlePasswordConfirmedInput = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setError('')
    setPasswordConfirmed(event.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !password || !passwordConfirmed) {
      setError('Preencha todos os campos')
      return
    } else if (password !== passwordConfirmed) {
      setError('As senhas não são iguais')
      setPasswordConfirmed(passwordConfirmed)
      return
    }

    const res = register(name, password)

    if (res) {
      setError('')
      return
    }
    navigate('/')
  }

  return (
    <S.Wrapper>
      <S.Title>Faça seu Cadastro</S.Title>
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
        <div>
          <S.FielInput
            type="password"
            value={passwordConfirmed}
            onChange={handlePasswordConfirmedInput}
            placeholder="Repetir senha..."
          />
        </div>
        <S.TextError>{error}</S.TextError>
        <div>
          <S.Button type="submit">inscreva-se</S.Button>
        </div>
        <S.TextLink>
          Tem uma conta?<Link to="/login">&nbsp;Entrar</Link>
        </S.TextLink>
      </S.Form>
    </S.Wrapper>
  )
}

export default Register
