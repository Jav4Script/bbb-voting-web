import React from 'react'

import { Vote } from '../entities/Vote'

const VoteItem: React.FC<{ vote: Vote }> = ({ vote }) => {
  return (
    <li>
      <p>Device: {vote.device}</p>
      <p>IP Address: {vote.ipAddress}</p>
      <p>Participant ID: {vote.participantId}</p>
      <p>Region: {vote.region}</p>
      <p>User Agent: {vote.userAgent}</p>
      <p>Voter ID: {vote.voterId}</p>
    </li>
  )
}

export default VoteItem