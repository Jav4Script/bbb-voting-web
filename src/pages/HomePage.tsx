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

  const navigateToResults = () => {
    navigate('/results')
  }

  return (
    <div className='container mx-auto p-4 bg-background min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold mb-6 text-center text-foreground'>
        Welcome
      </h1>

      <p className='text-lg mb-4 text-center text-foreground'>
        Welcome to the BBB Voting application!
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Card
          onClick={navigateToParticipants}
          className='cursor-pointer bg-primary text-primary-foreground'
        >
          <CardHeader>
            <CardTitle>Manage Participants</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Register, list, and delete participants.</p>
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
            <CardTitle>Start Voting</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Generate CAPTCHA and cast your vote.</p>
            {participants && participants.length < 2 && (
              <p className='text-red-500 mt-2'>
                At least 2 participants are required to start voting.
              </p>
            )}
          </CardContent>
        </Card>

        <Card
          onClick={navigateToResults}
          className='cursor-pointer bg-accent text-accent-foreground'
        >
          <CardHeader>
            <CardTitle>View Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Check partial and final voting results.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default HomePage
