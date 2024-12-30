import { useQuery } from 'react-query'

import { getPartialResults } from '@features/results/services/resultService'
import { usePartialResultStore } from '@features/results/stores/usePartialResultStore'

export const useGetPartialResults = () => {
  const setPartialResults = usePartialResultStore(
    (state) => state.setPartialResults
  )

  return useQuery('partialResults', getPartialResults, {
    onSuccess: (data) => {
      setPartialResults(data)
    },
  })
}
