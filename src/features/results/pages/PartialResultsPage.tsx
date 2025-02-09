import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/components/ui/button'
import PartialResultList from '@features/results/components/PartialResultList'

const PartialResultsPage: React.FC = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className='container mx-auto p-4 space-y-8'>
      <h1 className='text-2xl font-bold mb-4'>Resultados Parciais</h1>
      <PartialResultList />

      <Button onClick={() => navigate('/captcha')} className='w-full mt-4'>
        Votar Novamente
      </Button>

      <Button
        onClick={handleBack}
        className='w-full bg-secondary text-secondary-foreground'
      >
        Voltar para Home
      </Button>
    </div>
  )
}

export default PartialResultsPage
