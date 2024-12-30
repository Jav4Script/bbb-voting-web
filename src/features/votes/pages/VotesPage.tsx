import React from 'react'

import VoteForm from '@features/votes/components/VoteForm'

const VotesPage: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Votes</h1>

      <VoteForm />
    </div>
  )
}

export default VotesPage
