import { useQuery } from 'react-query'

import { getParticipant } from '@shared/services/participantService'

export const useGetParticipant = (id: string) => {
  return useQuery(['participant', id], () => getParticipant(id))
}
