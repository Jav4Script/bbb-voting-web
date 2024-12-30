import React from 'react'

import { FinalResult } from '../entities/FinalResult'
import { PartialResult } from '../entities/PartialResult'

const ResultItem: React.FC<{ result: FinalResult | PartialResult }> = ({
  result,
}) => {
  return (
    <li>
      <p>Name: {result.participantName}</p>
      <p>Age: {result.participantAge}</p>
      <p>Gender: {result.participantGender}</p>
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
