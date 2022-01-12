import React, { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!cookies.get('user')) {
  //     navigate('/inputphonenumber')
  //   }
  // }, [cookies.get('user')])

  const checkToken = () => {

  }

  const refreshToken = async () => {
    if (!checkToken()) {
      // await fetch('whatever')
    }
  }

  const signIn = (newUser, callback) => {
    if (newUser) {
      setUser(user)
      cookies.set('user', JSON.stringify(newUser))
      navigate('/')
      if (callback) {
        callback()
      }
    }
  }

  const signOut = callback => {
    cookies.remove('user')
    navigate('/login')
    if (callback) {
      callback()
    }
  }

  return {
    user,
    signIn,
    signOut
  }
}

export default AuthProvider
