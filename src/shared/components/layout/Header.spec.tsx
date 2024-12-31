import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './Header'

test('renders Header with title', () => {
  render(<Header />)

  expect(screen.getByText('Votação BBB')).toBeInTheDocument()
})
