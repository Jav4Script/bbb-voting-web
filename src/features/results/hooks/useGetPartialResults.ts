import { useQuery } from 'react-query'

import { getPartialResults } from '@features/results/services/resultService'
import { useResultStore } from '@features/results/stores/useResultStore'

export const useGetPartialResults = () => {
  const setPartialResults = useResultStore((state) => state.setPartialResults)

  return useQuery('partialResults', getPartialResults, {
    onSuccess: (data) => {
      setPartialResults(data)
    },
  })
}
