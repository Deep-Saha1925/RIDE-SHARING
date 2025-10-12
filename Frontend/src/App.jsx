import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import DriverLogin from './pages/DriverLogin'
import DriverRegister from './pages/DriverRegister'

export default function App (){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/register' element={<UserRegister/>} />
        <Route path='/driver-login' element={<DriverLogin/>} />
        <Route path='/driver-register' element={<DriverRegister/>} />
      </Routes>
    </div>
  )
}
