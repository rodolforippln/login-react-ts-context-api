import { render, screen } from '@testing-library/react'

import Main from '..'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /Cadastro de Usuários/i })
    ).toBeInTheDocument()
  })

  it('should render color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#f9fafb' })
  })
})
