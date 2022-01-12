import {
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
import Login from 'pages/Login'
import PushAuth from 'pages/PushAuth'
import AltOtpAuth from 'pages/AltOtpAuth'
import OtpAccessDenied from 'pages/OtpAccessDenied'
import PushAccessDenied from 'pages/PushAccessDenied'
import AccessSuccessful from 'pages/AccessSuccessful'

const Router = () => {
  return (
    <Routes>
      <Route path="/inputphonenumber" element={<Login />} />
      <Route path="/pushauth" element={<PushAuth />} />
      <Route path="/altotpauth" element={<AltOtpAuth />} />
      <Route path="/otpaccessdenied" element={<OtpAccessDenied />} />
      <Route path="/pushaccessdenied" element={<PushAccessDenied />} />
      <Route path="/accesssuccessful" element={<AccessSuccessful />} />
      <Route path="" element={<Navigate to="/inputphonenumber" />} />
    </Routes>
  )
}

export default Router
