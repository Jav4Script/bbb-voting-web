import { create } from 'zustand'

import { PartialResult } from '@features/results/entities/PartialResult'
import { getPartialResults } from '@features/results/services/resultService'

interface PartialResultStore {
  partialResults: PartialResult[]
  setPartialResults: (results: PartialResult[]) => void
  fetchPartialResults: () => void
}

export const usePartialResultStore = create<PartialResultStore>((set) => ({
  partialResults: [],
  setPartialResults: (results) => set({ partialResults: results }),
  fetchPartialResults: async () => {
    const results = await getPartialResults()
    set({ partialResults: results })
  },
}))
