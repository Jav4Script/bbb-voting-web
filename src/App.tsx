import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CaptchaPage from './features/captcha/pages/CaptchaPage'
import ParticipantsPage from './features/participants/pages/ParticipantsPage'
import VotesPage from './features/votes/pages/VotesPage'
import PartialResultsPage from './features/results/pages/PartialResultsPage'
import FinalResultsPage from './features/results/pages/FinalResultsPage'
import Footer from './shared/components/layout/Footer'
import Header from './shared/components/layout/Header'
import ProtectedRoute from './shared/components/ProtectedRoute'
import { Toaster } from './shared/components/ui/toaster'

const App: React.FC = () => {
  return (
    <>
      <Header />

      <div className='pb-16'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/captcha' element={<CaptchaPage />} />
            <Route path='/participants' element={<ParticipantsPage />} />
            <Route path='/votes' element={<ProtectedRoute />}>
              <Route path='' element={<VotesPage />} />
            </Route>
            <Route path='/results/partial' element={<PartialResultsPage />} />
            <Route path='/results/final' element={<FinalResultsPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
      <Toaster />
    </>
  )
}

export default App
