import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-primary text-primary-foreground p-4 mt-8 fixed bottom-0 w-full'>
      <div className='container mx-auto text-center'>
        <p>
          &copy; {new Date().getFullYear()} BBB Voting. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer