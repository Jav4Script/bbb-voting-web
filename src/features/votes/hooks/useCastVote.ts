import { useMutation, useQueryClient } from 'react-query'

import { useVoteStore } from '@features/votes/stores/useVoteStore'
import { castVote } from '@features/votes/services/voteService'
import { Vote } from '@features/votes/entities/Vote'

export const useCastVote = () => {
  const queryClient = useQueryClient()
  const addVote = useVoteStore((state) => state.addVote)

  return useMutation(
    ({ vote, captchaToken }: { vote: Vote; captchaToken: string }) =>
      castVote(vote, captchaToken),
    {
      onSuccess: (data) => {
        addVote(data)
        queryClient.invalidateQueries('votes')
      },
    }
  )
}
