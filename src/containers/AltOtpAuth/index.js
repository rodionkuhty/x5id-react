import { useState } from 'react'
import { useAuth } from 'hooks/useAuth'
import AccessSuccessfulComponent from './components/AccessSuccessful'
import OtpAccessDeniedComponent from './components/OtpAccessDenied'
import AltOtpAuthComponent from './components/AltOtpAuth'
import './components/AltOtpAuth/styles.css'



const requestStatusObj = {
  default: 'default',
  loading: 'loading',
  denied: 'denied',
  success: 'success'
}

const AltOtpAuthContainer = () => {
  const { sendOtp } = useAuth()
  const [requestStatus, setRequestStatus] = useState(requestStatusObj.default)
  const [status, setStatus] = useState(null)

  const onFinish = e => {
    if (e.target.value.match(/^\d+$/)) {
      const send = sendOtp(e.target.value)
      setRequestStatus(send)
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  console.log(status, 'status')

  switch (requestStatus) {
    case false: {
      return <OtpAccessDeniedComponent />
    }
    case true: {
      return <AccessSuccessfulComponent/>
    }
    default: {
      return <AltOtpAuthComponent onFinish={onFinish} />
    }
  }
}

export default AltOtpAuthContainer
