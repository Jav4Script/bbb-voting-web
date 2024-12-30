import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { PartialResult } from '@/features/results/entities/PartialResult'

const PartialResultItem: React.FC<{ result: PartialResult }> = ({ result }) => {
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

export default PartialResultItem
