import React from 'react'

import CaptchaForm from '../components/CaptchaForm'

const CaptchaPage: React.FC = () => {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>Captcha Verification</h1>
      <CaptchaForm />
    </div>
  )
}

export default CaptchaPage