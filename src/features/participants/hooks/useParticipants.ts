import { useQuery, useMutation, useQueryClient } from 'react-query'

import {
  getParticipants,
  getParticipant,
  createParticipant,
  deleteParticipant,
} from '@features/participants/services/participantService'
import { useParticipantStore } from '@features/participants/stores/useParticipantStore'

export const useGetParticipants = () => {
  const setParticipants = useParticipantStore((state) => state.setParticipants)

  return useQuery('participants', getParticipants, {
    onSuccess: (data) => {
      setParticipants(data)
    },
  })
}

export const useGetParticipant = (id: string) => {
  return useQuery(['participant', id], () => getParticipant(id))
}

export const useCreateParticipant = () => {
  const queryClient = useQueryClient()
  const addParticipant = useParticipantStore((state) => state.addParticipant)

  return useMutation(createParticipant, {
    onSuccess: (data) => {
      addParticipant(data)
      queryClient.invalidateQueries('participants')
    },
  })
}

export const useDeleteParticipant = () => {
  const queryClient = useQueryClient()
  const removeParticipant = useParticipantStore((state) => state.removeParticipant)

  return useMutation(deleteParticipant, {
    onSuccess: (participantId) => {
      removeParticipant(participantId)
      queryClient.invalidateQueries('participants')
    },
  })
}