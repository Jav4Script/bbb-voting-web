import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { FinalResults } from '@/features/results/entities/FinalResults'

const FinalResultItem: React.FC<{
  result: FinalResults['participant_results'][0]
}> = ({ result }) => {
  return (
    <Card className='shadow-lg mb-4'>
      <CardHeader>
        <CardTitle>{result.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Age: {result.age}</p>
        <p>Gender: {result.gender}</p>
        <p>Votes: {result.votes}</p>
      </CardContent>
    </Card>
  )
}

export default FinalResultItem
