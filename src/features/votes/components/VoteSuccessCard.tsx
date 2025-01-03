import React from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'

import { IpInfo } from '@/shared/services/ipService'

interface VoteSuccessCardProps {
  ipInfo: IpInfo
  onVoteAgain: () => void
  onViewResults: () => void
  onBackToHome: () => void
}

const VoteSuccessCard: React.FC<VoteSuccessCardProps> = ({
  ipInfo,
  onVoteAgain,
  onViewResults,
  onBackToHome,
}) => {
  return (
    <Card className='shadow-lg p-6'>
      <CardHeader>
        <CardTitle>Seu voto foi registrado com sucesso!</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <div className='space-y-2 mb-6'>
          <p>IP: {ipInfo.ip}</p>
          <p>Cidade: {ipInfo.city}</p>
          <p>Região: {ipInfo.region}</p>
          <p>País: {ipInfo.country}</p>
        </div>

        <Button onClick={onVoteAgain} className='w-full'>
          Votar Novamente
        </Button>

        <Button onClick={onViewResults} className='w-full mt-4'>
          Ver Resultados Parciais
        </Button>

        <Button
          onClick={onBackToHome}
          className='w-full bg-secondary text-secondary-foreground'
        >
          Voltar para Home
        </Button>
      </CardContent>
    </Card>
  )
}

export default VoteSuccessCard
