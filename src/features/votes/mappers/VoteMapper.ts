import { Vote } from '@features/votes/entities/Vote'
import { VoteDTO } from '@features/votes/dtos/VoteDTO'

export class VoteMapper {
  static toDTO(vote: Vote): VoteDTO {
    return {
      device: vote.device,
      ip_address: vote.ipAddress,
      participant_id: vote.participantId,
      region: vote.region,
      user_agent: vote.userAgent,
      voter_id: vote.voterId,
    }
  }

  static toEntity(voteDTO: VoteDTO): Vote {
    return {
      device: voteDTO.device,
      ipAddress: voteDTO.ip_address,
      participantId: voteDTO.participant_id,
      region: voteDTO.region,
      userAgent: voteDTO.user_agent,
      voterId: voteDTO.voter_id,
    }
  }
}
