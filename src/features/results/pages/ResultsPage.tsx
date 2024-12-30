import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/components/ui/button'

import PartialResultList from '@features/results/components/PartialResultList'
import FinalResultList from '@features/results/components/FinalResultList'

const ResultsPage: React.FC = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className='container mx-auto p-4 space-y-8'>
      <h1 className='text-2xl font-bold mb-4'>Partial Results</h1>
      <PartialResultList />

      <h1 className='text-2xl font-bold mb-4'>Final Results</h1>
      <FinalResultList />

      <Button
        onClick={handleBack}
        className='w-full bg-secondary text-secondary-foreground'
      >
        Back to Home
      </Button>
    </div>
  )
}

export default ResultsPage
