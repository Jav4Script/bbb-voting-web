import React, { useState } from 'react'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { useGenerateCaptcha, useValidateCaptcha } from '../hooks/useCaptcha'
import { useCaptchaStore } from '../stores/useCaptchaStore'

const CaptchaForm: React.FC = () => {
  const [captchaSolution, setCaptchaSolution] = useState<string>('')
  const { mutate: generateCaptcha } = useGenerateCaptcha()
  const { mutate: validateCaptcha } = useValidateCaptcha()
  const captcha = useCaptchaStore((state) => state.captcha)
  const captchaToken = useCaptchaStore((state) => state.captchaToken)

  const handleGenerateCaptcha = () => {
    generateCaptcha(undefined)
  }

  const handleValidateCaptcha = () => {
    if (captcha) {
      validateCaptcha({ captchaId: captcha.captchaId, captchaSolution })
    }
  }

  return (
    <div>
      <Button onClick={handleGenerateCaptcha}>Generate Captcha</Button>
      {captcha && (
        <div>
          <img src={`/v1/captcha/${captcha.captchaId}`} alt='Captcha' />
          <Input
            type='text'
            value={captchaSolution}
            onChange={(e) => setCaptchaSolution(e.target.value)}
            placeholder='Enter Captcha'
          />
          <Button onClick={handleValidateCaptcha}>Validate Captcha</Button>
        </div>
      )}
      {captchaToken && <p>CAPTCHA Token: {captchaToken}</p>}
    </div>
  )
}

export default CaptchaForm