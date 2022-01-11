import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from "pages/Home"
import Auth from "pages/Auth"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}



