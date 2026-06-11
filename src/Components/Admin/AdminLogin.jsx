import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {

  let [err, seterr] = useState("")

  let [formdata, setformdata] = useState({
    email: "",
    password: ""
  })

  let navigate = useNavigate()

  let handleinput = (e) => {
    let key = e.target.name
    let val = e.target.value

    setformdata({
      ...formdata,
      [key]: val
    })
  }

  let errdesign = {
    color: 'red',
    textAlign: 'right'
  }

  let handlesubmit = (e) => {
    e.preventDefault()

    let { email, password } = formdata

    // Email must contain @ and password should not be empty
    if (email.includes("@") && password.trim() !== "") {
      seterr("")
      navigate("adminportal")
      toast.success("Login Success")
    } else if (!email.includes("@")) {
      seterr(<h4 style={errdesign}>Email must contain @</h4>)
      toast.error("Invalid Email")
    } else {
      seterr(<h4 style={errdesign}>Password is required</h4>)
      toast.error("Password is required")
    }
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