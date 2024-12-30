import { useMutation, useQueryClient } from 'react-query'

import { useParticipantStore } from '@shared/stores/useParticipantStore'
import { deleteParticipant } from '@shared/services/participantService'

export const useDeleteParticipant = () => {
  const queryClient = useQueryClient()
  const removeParticipant = useParticipantStore(
    (state) => state.removeParticipant
  )

  return useMutation(deleteParticipant, {
    onSuccess: (participantId) => {
      removeParticipant(participantId)
      queryClient.invalidateQueries('participants')
    },
  })
}
