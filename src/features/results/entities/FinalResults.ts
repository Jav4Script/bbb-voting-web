import { ParticipantResult } from './ParticipantResult'

export interface FinalResults {
  participant_results: ParticipantResult[]
  totalVotes: number
  votesByHour: Record<string, number>
}
