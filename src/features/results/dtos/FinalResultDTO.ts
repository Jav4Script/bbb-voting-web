import { ParticipantResultDTO } from './ParticipantResultDTO'

export interface FinalResultDTO {
  participant_results: ParticipantResultDTO[]
  total_votes: number
  votes_by_hour: Record<string, number>
}
