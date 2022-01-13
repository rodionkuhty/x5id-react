import React, {createContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import cookies from 'js-cookie'
import {routes} from 'constants/routes'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null)
  const [requestStatus, setRequestStatus] = useState('loading')
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!cookies.get('user')) {
  //     navigate('/inputphonenumber')
  //   }
  // }, [cookies.get('user')])

  const signIn = (newUser, callback) => {
    if (newUser) {
      setUser(user)
      cookies.set('user', JSON.stringify(newUser))
      setTimeout(() => {
        navigate(routes.pushAuth)
      }, 2000)
      if (callback) {
        callback()
      }
    }
  }



  const sendOtp = () => {
    return Math.random() > .5
  }

  const signOut = callback => {
    cookies.remove('user')
    navigate(routes.inputPhoneNumber)
    if (callback) {
      callback()
    }
  }

  return {
    user,
    signIn,
    signOut,
    sendOtp
  }
}

export default AuthProvider
