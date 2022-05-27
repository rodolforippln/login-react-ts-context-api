import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.main`
  background-color: #f9fafb;
  color: ${theme.colors.darkGray};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.img`
  width: 250px;
  height: auto;
`
export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 1.5rem;
`
export const Dscription = styled.h2`
  font-size: 1.8rem;
  font-weight: ${theme.font.normal};
`
