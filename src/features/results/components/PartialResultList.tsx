import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/shared/components/ui/alert'
import { Skeleton } from '@/shared/components/ui/skeleton'

import { useGetPartialResults } from '@features/results/hooks/useGetPartialResults'
import PartialResultItem from './PartialResultItem'

const PartialResultList: React.FC = () => {
  const { isLoading, isError, data: results } = useGetPartialResults()

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
        <AlertDescription>Failed to load partial results.</AlertDescription>
      </Alert>
    )
  }

  if (!results || results.length === 0) {
    return (
      <Alert>
        <ExclamationTriangleIcon className='h-5 w-5 text-red-500' />
        <AlertTitle>No Results</AlertTitle>
        <AlertDescription>No partial results available.</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className='space-y-6 mb-4'>
      <ul className='space-y-4'>
        {results.map((result) => (
          <PartialResultItem key={result.id} result={result} />
        ))}
      </ul>
    </div>
  )
}

export default PartialResultList
