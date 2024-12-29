import { create } from 'zustand'

import { castVote, getVotes } from '../services/voteService'
import { Vote } from '../entities/Vote'

interface VoteStore {
  votes: Vote[]
  addVote: (vote: Vote) => void
  getVotes: () => void
  setVotes: (votes: Vote[]) => void
}

export const useVoteStore = create<VoteStore>((set) => ({
  votes: [],
  addVote: (newVote) =>
    set((state) => ({
      votes: [...state.votes, newVote],
    })),
  getVotes: async () => {
    const votes = await getVotes()
    set({ votes })
  },
  setVotes: (votes) => set({ votes }),
}))