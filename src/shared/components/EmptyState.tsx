import React from 'react'

interface EmptyStateProps {
  message: string
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <p className='text-gray-500'>{message}</p>
    </div>
  )
}

export default EmptyState
