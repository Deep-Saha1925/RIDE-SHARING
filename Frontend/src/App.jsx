import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import DriverLogin from './pages/DriverLogin'
import DriverRegister from './pages/DriverRegister'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import DriverProtectWrapper from './pages/DriverProtextWrapper'
import DriverHome from './pages/DriverHome'
import DriverLogout from './pages/DriverLogout'
import Riding from './pages/Riding'

export default function App (){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/register' element={<UserRegister/>} />
        <Route path='/driver-login' element={<DriverLogin/>} />
        <Route path='/driver-register' element={<DriverRegister/>} />
        <Route path='/riding' element={<Riding/>} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        } />

        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }/>

        <Route path='/driver-home' element={
          <DriverProtectWrapper>
            <DriverHome />
          </DriverProtectWrapper>
        }/>

        <Route path='/driver/logout' element={
          <DriverProtectWrapper>
            <DriverLogout/>
          </DriverProtectWrapper>
        }/>

      </Routes>
    </div>
  )
}
