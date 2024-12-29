import { FinalResult } from '../entities/FinalResult'
import { PartialResult } from '../entities/PartialResult'
import { FinalResultDTO } from '../dtos/FinalResultDTO'
import { PartialResultDTO } from '../dtos/PartialResultDTO'

export class ResultMapper {
  static toFinalResultDTO(result: FinalResult): FinalResultDTO {
    return {
      participant_id: result.participantId,
      participant_name: result.participantName,
      participant_age: result.participantAge,
      participant_gender: result.participantGender,
      votes: result.votes,
      total_votes: result.totalVotes,
      votes_by_hour: result.votesByHour,
    }
  }

  static toPartialResultDTO(result: PartialResult): PartialResultDTO {
    return {
      participant_id: result.participantId,
      participant_name: result.participantName,
      participant_age: result.participantAge,
      participant_gender: result.participantGender,
      votes: result.votes,
    }
  }

  static toFinalResultEntity(resultDTO: FinalResultDTO): FinalResult {
    return {
      participantId: resultDTO.participant_id,
      participantName: resultDTO.participant_name,
      participantAge: resultDTO.participant_age,
      participantGender: resultDTO.participant_gender,
      votes: resultDTO.votes,
      totalVotes: resultDTO.total_votes,
      votesByHour: resultDTO.votes_by_hour,
    }
  }

  static toPartialResultEntity(resultDTO: PartialResultDTO): PartialResult {
    return {
      participantId: resultDTO.participant_id,
      participantName: resultDTO.participant_name,
      participantAge: resultDTO.participant_age,
      participantGender: resultDTO.participant_gender,
      votes: resultDTO.votes,
    }
  }
}