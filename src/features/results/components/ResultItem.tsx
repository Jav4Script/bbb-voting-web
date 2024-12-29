import React from 'react'

import { FinalResult } from '../entities/FinalResult'
import { PartialResult } from '../entities/PartialResult'

const ResultItem: React.FC<{ result: FinalResult | PartialResult }> = ({ result }) => {
  return (
    <li>
      <p>Participant ID: {result.participantId}</p>
      <p>Participant Name: {result.participantName}</p>
      <p>Participant Age: {result.participantAge}</p>
      <p>Participant Gender: {result.participantGender}</p>
      <p>Votes: {result.votes}</p>
      {'totalVotes' in result && <p>Total Votes: {result.totalVotes}</p>}
      {'votesByHour' in result && (
        <div>
          <p>Votes by Hour:</p>
          <ul>
            {Object.entries(result.votesByHour).map(([hour, votes]) => (
              <li key={hour}>
                {hour}: {votes}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default ResultItem