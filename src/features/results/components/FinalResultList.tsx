import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/shared/components/ui/alert'
import { Skeleton } from '@/shared/components/ui/skeleton'

import { useGetFinalResults } from '@features/results/hooks/useGetFinalResults'
import FinalResultItem from './FinalResultItem'

const FinalResultList: React.FC = () => {
  const { isLoading, isError, data: results } = useGetFinalResults()

  if (isLoading) {
    return (
      <div className='space-y-4 mx-4 md:mx-6 lg:mx-8'>
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-6 w-full' />
      </div>
    )
  }

  if (isError) {
    return (
      <Alert>
        <ExclamationTriangleIcon className='h-5 w-5 text-red-500' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load final results.</AlertDescription>
      </Alert>
    )
  }

  if (!results || !results.participant_results) {
    return (
      <Alert>
        <ExclamationTriangleIcon className='h-5 w-5 text-red-500' />
        <AlertTitle>No Results</AlertTitle>
        <AlertDescription>No final results available.</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className='mx-4 md:mx-6 lg:mx-8'>
      <div className='mb-6'>
        <h2 className='text-xl font-bold'>Total Votes: {results.totalVotes}</h2>
        {results.votesByHour && (
          <div>
            <h3 className='text-lg font-semibold'>Votes by Hour:</h3>
            <ul>
              {Object.entries(results.votesByHour).map(([hour, votes]) => (
                <li key={hour}>
                  {format(new Date(hour), 'dd/MM/yyyy HH:mm')}: {votes}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {results.participant_results.map((result) => (
        <FinalResultItem key={result.id} result={result} />
      ))}
    </div>
  )
}

export default FinalResultList
