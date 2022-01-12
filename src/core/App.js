import React from 'react'
import Router from './components/Router'
import AuthProvider from 'providers/AuthProvider'

export default function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  )
}



