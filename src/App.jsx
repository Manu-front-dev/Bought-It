import React from 'react'
import './App.css'
import './assets/Styles/prime.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'
import Navbar from './Components/Navbar'
import UsersPortal from './Components/Users/UsersPortal'

const App = () => {
  return (
    <>
    <div id='cart'>
      <Routes>
        <Route element={<LandingPage/>} path='/' />
        <Route element={<AdminPortal/>} path='adminportal/*'/> //  '/*' after the path denotes path extension in other page 
        <Route element={<UsersPortal/>} path='/userportal/*'/>
      </Routes>
    </div>
    </>
  )
}

export default App
