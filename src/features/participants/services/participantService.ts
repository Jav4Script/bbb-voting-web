import api from '@/shared/services/api'

import { Participant } from '../entities/Participant'

export const getParticipants = async (): Promise<Participant[]> => {
  const { data } = await api.get('/v1/participants')

  return data
}

export const getParticipant = async (id: string): Promise<Participant> => {
  const { data } = await api.get(`/v1/participants/${id}`)

  return data
}

export const createParticipant = async (participant: Participant): Promise<Participant> => {
  const { data } = await api.post('/v1/participants', participant)

  return data
}

export const deleteParticipant = async (id: string): Promise<string> => {
  await api.delete(`/v1/participants/${id}`)

  return id
}