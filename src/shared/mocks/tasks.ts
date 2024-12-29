import { HttpStatusCode } from 'axios'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

export const API_URL = '/api/tasks'

export const mock_tasks = [
  { id: '1', title: 'Task 1', description: 'Description 1' },
  { id: '2', title: 'Task 2', description: 'Description 2' },
]

const handlers = [
  http.get(API_URL, (): HttpResponse => {
    return HttpResponse.json(mock_tasks, { status: HttpStatusCode.Ok })
  }),

  http.get(`${API_URL}/:id`, (): HttpResponse => {
    return HttpResponse.json(mock_tasks[0], { status: HttpStatusCode.Ok })
  }),

  http.post(API_URL, (): HttpResponse => {
    return HttpResponse.json(mock_tasks[0], { status: HttpStatusCode.Created })
  }),

  http.put(`${API_URL}/:id`, (): HttpResponse => {
    return HttpResponse.json(
      { id: mock_tasks[0].id, ...mock_tasks[0] },
      { status: HttpStatusCode.Ok }
    )
  }),

  http.delete(`${API_URL}/:id`, (): HttpResponse => {
    return HttpResponse.json(undefined, { status: HttpStatusCode.NoContent })
  }),
]

export const server = setupServer(...handlers)
