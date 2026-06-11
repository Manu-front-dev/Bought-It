import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {

  let [err, seterr] = useState("")

  let [formdata, setformdata] = useState({
    email: "",
    password: ""
  })

  let handleinput = (e) => {
    // collecting input values
    let key = e.target.name
    let val = e.target.value

    // updating state
    setformdata({
      ...formdata,
      [key]: val
    })
  }

  let navigate = useNavigate()   //usenavigate is a hook present in react router dom used to navigate to next component and it return navigatefunction

  let handlesubmit = (e) => {
    e.preventDefault()

    // destructuring formdata
    let { email, password } = formdata

    // credentials object
    let credentials = {
      admin_mail: "admin@gmail.com",
      admin_pswd: "Admin@123"
    }

    // destructuring credentials
    let { admin_mail, admin_pswd } = credentials



    // checking login
    if (email === admin_mail) {
      if (password === admin_pswd) {
        seterr('')
        navigate("adminportal")
        toast.success(`login success`)
      } else {
        seterr(<h4 style={errdesign}> Password is invalid</h4>)
        toast.error(`Email is invalid`)
      }
    } else {
      seterr(<h4 style={errdesign}> Email is invalid</h4>)
      toast.error(`Password is Invalid`)
    }
  }

  let errdesign = {
    color: 'red',
    textAlign: 'right'
  }



  return (
    <>
      <div className="admin-login">

        <form onSubmit={handlesubmit}>

          <h2 style={{ color: 'blue' }}>
            Admin Login Page
          </h2>

          <input
            type="email"
            placeholder='Enter Email Address'
            name='email'
            onChange={handleinput}
            value={formdata.email}
          />
          <input
            type="password"
            placeholder='Enter Your Password'
            name='password'
            onChange={handleinput}
            value={formdata.password}
          />
          <button>Admin Login</button>
        </form>


        <h2>{err}</h2>



      </div>
    </>
  )
}

export default AdminLogin