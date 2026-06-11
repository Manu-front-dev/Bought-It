import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'
import ViewMore from '../pages/ViewMore'
import Navbar from '../Navbar'
import CartItems from './CartItems'

const UsersPortal = () => {
  return (
      <>
      <Navbar/>
      <Routes>
              <Route element={<Home/>} path='/' />
              <Route element={<Products/>} path='/products' />
              <Route element={<About/>} path='/about' />
              <Route element={<ViewMore/>} path='/viewmore/:id' />
              {/* <Route element={<AddProducts/>} path='/addproducts'/>
              <Route element={<Filter/>} path='/filter/:category'/> 
              <Route element={<AddUsers/>} path='/addusers'/>
              <Route element={<Users/>} path='users'/> */}
              <Route element={<CartItems/>} path='cartitems'/>
      </Routes>
      </>

  )
}

export default UsersPortal