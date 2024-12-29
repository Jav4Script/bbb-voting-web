import { render, screen } from '@testing-library/react'

import Footer from './Footer'

test('renders Footer with copyright text', () => {
  render(<Footer />)

  expect(
    screen.getByText(/BBB Voting. All rights reserved./i)
  ).toBeInTheDocument()
})
