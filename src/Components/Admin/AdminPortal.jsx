import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Navbar from '../Navbar'
import About from '../pages/About'
import ViewMore from '../pages/ViewMore'
import AddProducts from './AddProducts'
import Filter from '../pages/Filter'
import AddUsers from './AddUsers'
import Users from './Users'

const AdminPortal = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Products />} path='/products' />
        <Route element={<About />} path='/about' />
        <Route element={<ViewMore />} path='/viewmore/:id' />
        <Route element={<AddProducts/>} path='/addproducts'/>
        <Route element={<Filter/>} path='/filter/:category'/> 
        <Route element={<AddUsers/>} path='/addusers'/>
        <Route element={<Users/>} path='users'/>
      </Routes>
    </>
  )
}

export default AdminPortal
