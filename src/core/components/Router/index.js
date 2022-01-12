import {
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import PushAuth from 'pages/PushAuth'
import AltOtpAuth from 'pages/AltOtpAuth'

const Router = () => {
  return (
    <Routes>
      <Route path="/inputphonenumber" element={<Login />} />
      <Route path="/pushauth" element={<PushAuth />} />
      <Route path="/altotpauth" element={<AltOtpAuth />} />
      <Route path="" element={<Navigate to="/inputphonenumber" />} />
    </Routes>
  )
}

export default Router
