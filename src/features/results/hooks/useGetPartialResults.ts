import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { getPartialResults } from '@features/results/services/resultService'
import { usePartialResultStore } from '@features/results/stores/usePartialResultStore'

export const useGetPartialResults = () => {
  const setPartialResults = usePartialResultStore(
    (state) => state.setPartialResults
  )

  const query = useQuery({
    queryKey: ['partialResults'],
    queryFn: getPartialResults,
  })

  useEffect(() => {
    if (query.data) {
      setPartialResults(query.data)
    }
  }, [query.data, setPartialResults])

  return query
}
