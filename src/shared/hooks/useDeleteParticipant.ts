import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useParticipantStore } from '@shared/stores/useParticipantStore'
import { deleteParticipant } from '@shared/services/participantService'

export const useDeleteParticipant = () => {
  const queryClient = useQueryClient()
  const removeParticipant = useParticipantStore(
    (state) => state.removeParticipant
  )

  return useMutation({
    mutationFn: deleteParticipant,
    onSuccess: (participantId) => {
      removeParticipant(participantId)
      queryClient.invalidateQueries({ queryKey: ['participants'] })
    },
  })
}
