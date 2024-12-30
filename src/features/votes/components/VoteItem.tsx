import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { Vote } from '../entities/Vote'

const VoteItem: React.FC<{ vote: Vote }> = ({ vote }) => {
  return (
    <Card className='shadow-md'>
      <CardHeader>
        <CardTitle>Voter ID: {vote.voterId}</CardTitle>
      </CardHeader>

      <CardContent className='space-y-2'>
        <p>Device: {vote.device}</p>
        <p>IP Address: {vote.ipAddress}</p>
        <p>Participant ID: {vote.participantId}</p>
        <p>Region: {vote.region}</p>
        <p>User Agent: {vote.userAgent}</p>
      </CardContent>
    </Card>
  )
}

export default VoteItem
