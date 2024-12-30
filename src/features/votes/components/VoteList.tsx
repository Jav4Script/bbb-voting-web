import React from 'react'

import { Skeleton } from '@/shared/components/ui/skeleton'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/shared/components/ui/alert'

import { useGetVotes } from '../hooks/useVotes'
import VoteItem from './VoteItem'
import { useVoteStore } from '../stores/useVoteStore'

const VoteList: React.FC = () => {
  const { isLoading, isError } = useGetVotes()
  const votes = useVoteStore((state) => state.votes)

  if (isLoading)
    return (
      <Skeleton className='h-[200px] rounded-lg p-4 space-y-4 mx-4 md:mx-6 lg:mx-8' />
    )

  if (isError)
    return (
      <Alert className='mt-4'>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load votes.</AlertDescription>
      </Alert>
    )

  return (
    <ul className='space-y-4'>
      {votes.map((vote: Vote) => (
        <VoteItem key={vote.voterId} vote={vote} />
      ))}
    </ul>
  )
}

export default VoteList
