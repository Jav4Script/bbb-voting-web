import React from 'react'

import VoteForm from '../components/VoteForm'
import VoteList from '../components/VoteList'

const VotesPage: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Votes</h1>

      <div className='mb-8'>
        <VoteForm />
      </div>

      <VoteList />
    </div>
  )
}

export default VotesPage
