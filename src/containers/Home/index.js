import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from 'layout/DashboardLayout'
import cookies from 'js-cookie'
import './styles.css'

const HomeContainer = () => {
  const navigate = useNavigate()

  const logout = () => {
    cookies.remove('user')
    navigate('/login')
  }


  return (
    <DashboardLayout>
      <p className="home__container">
	this is home page
      </p>
      <button onClick={logout}>logout</button>
    </DashboardLayout>
  )
}

export default HomeContainer
