import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { useFinalResultStore } from '@features/results/stores/useFinalResultStore'
import { getFinalResults } from '@features/results/services/resultService'

export const useGetFinalResults = () => {
  const setFinalResults = useFinalResultStore((state) => state.setFinalResults)

  const query = useQuery({
    queryKey: ['finalResults'],
    queryFn: getFinalResults,
  })

  useEffect(() => {
    if (query.data) {
      setFinalResults(query.data)
    }
  }, [query.data, setFinalResults])

  return query
}
