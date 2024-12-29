import React from 'react'

import { Skeleton } from '@/shared/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/shared/components/ui/alert'

import { useGetFinalResults, useGetPartialResults } from '../hooks/useResults'
import ResultItem from './ResultItem'
import { useResultStore } from '../stores/useResultStore'

const ResultList: React.FC<{ type: 'final' | 'partial' }> = ({ type }) => {
  const { isLoading, isError } = type === 'final' ? useGetFinalResults() : useGetPartialResults()
  const results = type === 'final' ? useResultStore((state) => state.finalResults) : useResultStore((state) => state.partialResults)

  if (isLoading)
    return (
      <Skeleton className='h-[200px] rounded-lg p-4 space-y-4 mx-4 md:mx-6 lg:mx-8' />
    )

  if (isError)
    return (
      <Alert>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load results.</AlertDescription>
      </Alert>
    )

  return (
    <ul>
      {results.map((result: any) => (
        <ResultItem key={result.participantId} result={result} />
      ))}
    </ul>
  )
}

export default ResultList