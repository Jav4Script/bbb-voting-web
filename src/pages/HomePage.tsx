import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { useParticipantStore } from '@/shared/stores/useParticipantStore'
import { useGetParticipants } from '@/shared/hooks/useGetParticipants'

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const { data: participants } = useGetParticipants()
  const setParticipants = useParticipantStore((state) => state.setParticipants)

  React.useEffect(() => {
    if (participants) {
      setParticipants(participants)
    }
  }, [participants, setParticipants])

  const navigateToParticipants = () => {
    navigate('/participants')
  }

  const navigateToVoting = () => {
    navigate('/captcha')
  }

  const navigateToPartialResults = () => {
    navigate('/results/partial')
  }

  const navigateToFinalResults = () => {
    navigate('/results/final')
  }

  return (
    <div className='container mx-auto p-4 bg-background min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-6 text-center text-foreground'>
        Bem-vindo
      </h1>

      <p className='text-lg mb-4 text-center text-foreground'>
        Bem-vindo ao aplicativo de votação do BBB!
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Card
          onClick={navigateToParticipants}
          className='cursor-pointer bg-primary text-primary-foreground'
        >
          <CardHeader>
            <CardTitle>Gerenciar Participantes</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Registrar, listar e excluir participantes.</p>
          </CardContent>
        </Card>

        <Card
          onClick={
            participants && participants.length >= 2
              ? navigateToVoting
              : undefined
          }
          className={`cursor-pointer ${
            participants && participants.length >= 2
              ? 'bg-secondary text-secondary-foreground'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          }`}
        >
          <CardHeader>
            <CardTitle>Iniciar Votação</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Gerar CAPTCHA e registrar seu voto.</p>
            {participants && participants.length < 2 && (
              <p className='text-red-500 mt-2'>
                Pelo menos 2 participantes são necessários para iniciar a
                votação.
              </p>
            )}
          </CardContent>
        </Card>

        <Card
          onClick={navigateToPartialResults}
          className='cursor-pointer bg-accent text-accent-foreground'
        >
          <CardHeader>
            <CardTitle>Ver Resultados Parciais</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Verificar resultados parciais da votação.</p>
          </CardContent>
        </Card>

        <Card
          onClick={navigateToFinalResults}
          className='cursor-pointer bg-accent text-accent-foreground'
        >
          <CardHeader>
            <CardTitle>Ver Resultados Finais</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Verificar resultados finais da votação.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default HomePage
