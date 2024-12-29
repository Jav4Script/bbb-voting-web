import { create } from 'zustand'

import { getFinalResults, getPartialResults } from '../services/resultService'
import { FinalResult } from '../entities/FinalResult'
import { PartialResult } from '../entities/PartialResult'

interface ResultStore {
  finalResults: FinalResult[]
  partialResults: PartialResult[]
  setFinalResults: (results: FinalResult[]) => void
  setPartialResults: (results: PartialResult[]) => void
  fetchFinalResults: () => void
  fetchPartialResults: () => void
}

export const useResultStore = create<ResultStore>((set) => ({
  finalResults: [],
  partialResults: [],
  setFinalResults: (results) => set({ finalResults: results }),
  setPartialResults: (results) => set({ partialResults: results }),
  fetchFinalResults: async () => {
    const results = await getFinalResults()
    set({ finalResults: results })
  },
  fetchPartialResults: async () => {
    const results = await getPartialResults()
    set({ partialResults: results })
  },
}))