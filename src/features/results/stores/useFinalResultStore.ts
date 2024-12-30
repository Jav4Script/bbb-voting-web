import { create } from 'zustand'

import { FinalResults } from '@features/results/entities/FinalResults'
import { getFinalResults } from '@features/results/services/resultService'

interface FinalResultStore {
  finalResults: FinalResults
  setFinalResults: (results: FinalResults) => void
  fetchFinalResults: () => void
}

export const useFinalResultStore = create<FinalResultStore>((set) => ({
  finalResults: {
    participant_results: [],
    totalVotes: 0,
    votesByHour: {},
  },
  setFinalResults: (results) => set({ finalResults: results }),
  fetchFinalResults: async () => {
    const results = await getFinalResults()
    set({ finalResults: results })
  },
}))
