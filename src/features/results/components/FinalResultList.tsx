import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/shared/components/ui/alert'
import { Skeleton } from '@/shared/components/ui/skeleton'

import { useGetFinalResults } from '@features/results/hooks/useGetFinalResults'
import ResultItem from './ResultItem'

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

  return (
    <div className='space-y-6 mb-4'>
      <ul className='space-y-4'>
        {results.map((result) => (
          <ResultItem key={result.participantId} result={result} />
        ))}
      </ul>
    </div>
  )
}

export default FinalResultList
