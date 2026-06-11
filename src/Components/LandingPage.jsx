import React, { useState } from 'react'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'

const LandingPage = () => {

  let [bool,setbool] =useState(true)

  // let handlebool =()=>{
  //   setbool(!bool)
  // }
  return (
    <>
    <div className="prime-basket">
    <div className="landing-page">
      <h1>Welcome to Bought-It</h1>
      <div className="container">
        <div className="btnbox">
          <button onClick={()=>setbool(!bool)} className={bool ? 'lft' : 'ryt'}>{bool ? 'Admin Login' : 'User Login'}</button>
        </div>
        <div className="formbox">
          {bool ? <AdminLogin/> : <UsersLogin/>}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default LandingPage
