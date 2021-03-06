import React from 'react'
import { ReactComponent as Logo } from 'asserts/mainLogo.svg'
import './styles.css'

const DashboardLayout = ({ children }) => {

  return (
    <div className="layout__container">
      <div className="layout__logo">
        <Logo width="400px" height="400px" />
      </div>
      {children}
    </div>
  )
}


export default DashboardLayout
