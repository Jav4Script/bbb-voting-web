import React from 'react'

import CaptchaForm from '../components/CaptchaForm'

const CaptchaPage: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1>Captcha Page</h1>
      <CaptchaForm />
    </div>
  )
}

export default CaptchaPage
