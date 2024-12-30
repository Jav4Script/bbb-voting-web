import { useQuery } from 'react-query'

import { useParticipantStore } from '@shared/stores/useParticipantStore'
import { getParticipants } from '@shared/services/participantService'

export const useGetParticipants = () => {
  const setParticipants = useParticipantStore((state) => state.setParticipants)

  return useQuery('participants', getParticipants, {
    onSuccess: (data) => {
      setParticipants(data)
    },
  })
}
