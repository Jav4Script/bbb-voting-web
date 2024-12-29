import api from '@/shared/services/api'

import { VoteDTO } from '../dtos/VoteDTO'
import { Vote } from '../entities/Vote'
import { VoteMapper } from '../mappers/VoteMapper'

export const castVote = async (
  vote: Vote,
  captchaToken: string
): Promise<Vote> => {
  const voteDTO = VoteMapper.toDTO(vote)
  const { data } = await api.post('/v1/votes', voteDTO, {
    headers: {
      'X-Captcha-Token': captchaToken,
    },
  })
  return VoteMapper.toEntity(data)
}

export const getVotes = async (): Promise<Vote[]> => {
  const { data } = await api.get('/v1/votes')

  return data.map(VoteMapper.toEntity)
}
