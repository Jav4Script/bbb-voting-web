import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import { render, RenderOptions } from '@testing-library/react'

import { Toaster } from '../components/ui/toaster'

interface Options extends RenderOptions {
  client?: QueryClient
  initialRoutes?: string[]
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})

const AllTheProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {children}
      <Toaster />{' '}
    </BrowserRouter>
  </QueryClientProvider>
)

const customRender = (ui: React.ReactNode, options?: Options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender }
