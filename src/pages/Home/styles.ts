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
`
export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 1.5rem;
`
export const FielLabel = styled.label`
  display: block;
  font-size: ${theme.font.sizes.small};
`
export const Button = styled.button`
  padding: 1rem 2rem;
  max-width: 30rem;
  width: 100%;
  margin: 1rem 0;

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
