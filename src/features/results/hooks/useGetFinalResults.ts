import { useQuery } from 'react-query'

import { useFinalResultStore } from '@features/results/stores/useFinalResultStore'
import { getFinalResults } from '@features/results/services/resultService'

export const useGetFinalResults = () => {
  const setFinalResults = useFinalResultStore((state) => state.setFinalResults)

  return useQuery('finalResults', getFinalResults, {
    onSuccess: (data) => {
      setFinalResults(data)
    },
  })
}
