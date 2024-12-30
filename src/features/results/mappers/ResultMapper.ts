import { FinalResultDTO } from '@features/results/dtos/FinalResultDTO'
import { FinalResults } from '@features/results/entities/FinalResults'

export class ResultMapper {
  static toFinalResultEntity(resultDTO: FinalResultDTO): FinalResults {
    return {
      participant_results: resultDTO.participant_results,
      totalVotes: resultDTO.total_votes,
      votesByHour: resultDTO.votes_by_hour,
    }
  }
}
