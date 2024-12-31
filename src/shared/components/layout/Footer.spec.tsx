import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

test('renders Footer with copyright text', () => {
  render(<Footer />)

  expect(
    screen.getByText(/Votação BBB. Todos os direitos reservados./i)
  ).toBeInTheDocument()
})
