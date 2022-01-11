import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import cookies from "js-cookie"
import "./styles"

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!cookies.get("user")) {
      navigate("/login")
    }
  }, [])

  return (
    <div className="layout__container">
      <p>menu</p>
      {children}
    </div>
  )
}

export default DashboardLayout
