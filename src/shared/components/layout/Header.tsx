import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='bg-primary text-primary-foreground p-4'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold'>BBB Voting</h1>
      </div>
    </header>
  )
}

export default Header