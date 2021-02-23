import { screen, render } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('pl', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
