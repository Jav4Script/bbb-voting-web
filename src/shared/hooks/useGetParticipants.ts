import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { useParticipantStore } from '@shared/stores/useParticipantStore'
import { getParticipants } from '@shared/services/participantService'

export const useGetParticipants = () => {
  const setParticipants = useParticipantStore((state) => state.setParticipants)

  const query = useQuery({
    queryKey: ['participants'],
    queryFn: getParticipants,
  })

  useEffect(() => {
    if (query.data) {
      setParticipants(query.data)
    }
  }, [query.data, setParticipants])

  return query
}
