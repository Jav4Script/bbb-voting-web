import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import HomePage from './HomePage'

vi.mock('@shared/hooks/useGetParticipants', () => ({
  useGetParticipants: () => ({ data: [] }),
}))

test('renders the voting home page', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  )

  expect(screen.getByRole('heading', { name: 'Bem-vindo' })).toBeInTheDocument()
  expect(
    screen.getByText('Bem-vindo ao aplicativo de votação do BBB!')
  ).toBeInTheDocument()
  expect(screen.getByText('Gerenciar Participantes')).toBeInTheDocument()
  expect(screen.getByText('Iniciar Votação')).toBeInTheDocument()
})
