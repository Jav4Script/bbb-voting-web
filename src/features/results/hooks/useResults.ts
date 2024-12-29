import { useQuery } from 'react-query'

import { getFinalResults, getPartialResults } from '../services/resultService'
import { useResultStore } from '../stores/useResultStore'

export const useGetFinalResults = () => {
  const setFinalResults = useResultStore((state) => state.setFinalResults)

  return useQuery('finalResults', getFinalResults, {
    onSuccess: (data) => {
      setFinalResults(data)
    },
  })
}

export const useGetPartialResults = () => {
  const setPartialResults = useResultStore((state) => state.setPartialResults)

  return useQuery('partialResults', getPartialResults, {
    onSuccess: (data) => {
      setPartialResults(data)
    },
  })
}