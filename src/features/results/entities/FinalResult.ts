export interface FinalResult {
    participantId: string
    participantName: string
    participantAge: number
    participantGender: string
    votes: number
    totalVotes: number
    votesByHour: Record<string, number>
  }