import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useCaptchaTokenStore } from '@/shared/stores/useCaptchaTokenStore'

const ProtectedRoute: React.FC = () => {
  const captchaToken = useCaptchaTokenStore((state) => state.captchaToken)

  if (!captchaToken) {
    return <Navigate to='/captcha' replace />
  }

  return <Outlet />
}

export default ProtectedRoute
