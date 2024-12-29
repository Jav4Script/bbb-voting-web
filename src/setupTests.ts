import '@testing-library/jest-dom'

import { server } from './shared/mocks/tasks'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
