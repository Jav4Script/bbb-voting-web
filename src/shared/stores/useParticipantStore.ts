import { create } from 'zustand'

import { getParticipants } from '../services/participantService'
import { Participant } from '../entities/Participant'

interface ParticipantStore {
  participants: Participant[]
  addParticipant: (participant: Participant) => void
  getParticipants: () => void
  removeParticipant: (participantId: string) => void
  setParticipants: (participants: Participant[]) => void
  updateParticipant: (updatedParticipant: Participant) => void
}

export const useParticipantStore = create<ParticipantStore>((set) => ({
  participants: [],
  addParticipant: (newParticipant) =>
    set((state) => ({
      participants: [...state.participants, newParticipant],
    })),
  getParticipants: async () => {
    const participants = await getParticipants()
    set({ participants })
  },
  removeParticipant: (participantId) =>
    set((state) => ({
      participants: state.participants.filter(
        (participant) => participant.id !== participantId
      ),
    })),
  setParticipants: (participants) => set({ participants }),
  updateParticipant: (updatedParticipant) =>
    set((state) => ({
      participants: state.participants.map((participant) =>
        participant.id === updatedParticipant.id
          ? updatedParticipant
          : participant
      ),
    })),
}))