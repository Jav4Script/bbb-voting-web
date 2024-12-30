import { useQuery } from 'react-query'

import { useResultStore } from '@features/results/stores/useResultStore'
import { getFinalResults } from '@features/results/services/resultService'

export const useGetFinalResults = () => {
  const setFinalResults = useResultStore((state) => state.setFinalResults)

  return useQuery('finalResults', getFinalResults, {
    onSuccess: (data) => {
      setFinalResults(data)
    },
  })
}
