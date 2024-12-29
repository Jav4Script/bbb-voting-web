export interface FinalResultDTO {
    participant_id: string
    participant_name: string
    participant_age: number
    participant_gender: string
    votes: number
    total_votes: number
    votes_by_hour: Record<string, number>
  }