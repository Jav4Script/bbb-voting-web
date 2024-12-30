import api from '@/shared/services/api'

import { Vote } from '@features/votes/entities/Vote'
import { VoteMapper } from '@features/votes/mappers/VoteMapper'

export const castVote = async (
  vote: Vote,
  captchaToken: string
): Promise<Vote> => {
  const { data } = await api.post('/v1/votes', VoteMapper.toDTO(vote), {
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
