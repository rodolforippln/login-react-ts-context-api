import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.main`
  background-color: ${theme.colors.mainBg};
  color: ${theme.colors.darkGray};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 1.5rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${theme.colors.lightGray};
  width: 100%;
  max-width: 350px;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: ${theme.border.radius};
`
export const FielInput = styled.input`
  padding: 1rem;
  width: 100%;
  margin-top: 0.5rem;
  border-radius: ${theme.border.radius};
  border: 0.2rem solid ${theme.colors.secondary};
  outline: none;
  &::placeholder {
    color: ${theme.colors.gray};
  }
  &:focus {
    border: 0.2rem solid ${theme.colors.primary};
  }
`
export const FielLabel = styled.label`
  display: block;
  font-size: ${theme.font.sizes.small};
`
export const Button = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  background-color: ${theme.colors.primary};
  font-size: ${theme.font.sizes.large};
  color: ${theme.colors.white};
  border-radius: ${theme.border.radius};
`
export const TextError = styled.span`
  color: red;
  font-size: ${theme.font.sizes.xsmall};
`
export const TextLink = styled.strong`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.xsmall};
  text-align: center;
  a {
    text-decoration: none;
    color: ${theme.colors.black};

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`
