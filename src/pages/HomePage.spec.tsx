import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import HomePage from './HomePage'

test('renders HomePage with heading and button', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  )

  expect(screen.getByText('Home Page')).toBeInTheDocument()
  expect(
    screen.getByText('Welcome to the BBB Voting application!')
  ).toBeInTheDocument()
  expect(
    screen.getByRole('button', { name: /Start Voting/i })
  ).toBeInTheDocument()
})
