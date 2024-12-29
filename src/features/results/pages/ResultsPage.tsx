import React from 'react'

import ResultList from '../components/ResultList'

const ResultsPage: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1>Final Results</h1>
      <ResultList type='final' />
      <h1>Partial Results</h1>
      <ResultList type='partial' />
    </div>
  )
}

export default ResultsPage