import React from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
// import { fakeAuthProvider } from "utils/auth"
import cookies from "js-cookie"
import "./styles.css"

const Auth = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
    },
    onSubmit: values => {
      cookies.set("user", JSON.stringify(values))
      navigate("/home")
    },
  })



  return (
    <div className="auth__container">
      <form onSubmit={formik.handleSubmit} className="auth__form">
        <div className="auth__form-input">
          <label htmlFor="firstName">Login</label>
          <input
            id="firstName"
            name="login"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.login}
          />
        </div>
        <div className="auth__form-input">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default Auth
