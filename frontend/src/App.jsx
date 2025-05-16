import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/start'
import UserLogin from './pages/userLogin'
import UserSignup from './pages/userSignup'
import CaptainLogin from './pages/captainLogin'
import CaptainSignup from './pages/captainSignup'
import Home from './pages/home'
import UserProtectedWrapper from './pages/userProtectedWrapper'
import UserLogout from './pages/userLogout'
import CaptainHome from './pages/captainHome'
import CaptainProtectedWrapper from './pages/captainProtectedWrapper'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path="/users/logout" element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>} />
        <Route path="/captain-home" element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App