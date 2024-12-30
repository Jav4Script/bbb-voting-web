import { useMutation, useQueryClient } from 'react-query'

import { useParticipantStore } from '@shared/stores/useParticipantStore'
import { createParticipant } from '@shared/services/participantService'

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
