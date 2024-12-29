import { useQuery, useMutation, useQueryClient } from 'react-query'

import { Vote } from '../entities/Vote'
import { castVote, getVotes } from '../services/voteService'
import { useVoteStore } from '../stores/useVoteStore'

export const useGetVotes = () => {
  const setVotes = useVoteStore((state) => state.setVotes)

  return useQuery('votes', getVotes, {
    onSuccess: (data) => {
      setVotes(data)
    },
  })
}

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