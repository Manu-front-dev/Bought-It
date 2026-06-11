import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UsersLogin = () => {

  let navigate = useNavigate()

  let [formdata, setformdata] = useState({
    email: "",
    password: ""
  })

  let [err, seterr] = useState("")

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

    if (email.includes("@") && password.trim() !== "") {
      seterr("")
      navigate("/userportal")
      toast.success("Login Success")
    }
    else if (!email.includes("@")) {
      seterr(<h4 style={errdesign}>Email must contain @</h4>)
      toast.error("Invalid Email")
    }
    else {
      seterr(<h4 style={errdesign}>Password is required</h4>)
      toast.error("Password is required")
    }
  }

  return (
    <>
      <div className="users-login">

        <form onSubmit={handlesubmit}>

          <h2 style={{ color: 'blue' }}>
            User Login Page
          </h2>

          <input
            type="email"
            placeholder='Enter Email Address'
            name='email'
            value={formdata.email}
            onChange={handleinput}
          />

          <input
            type="password"
            placeholder='Enter Your Password'
            name='password'
            value={formdata.password}
            onChange={handleinput}
          />

          <button>User Login</button>

        </form>

        <h2>{err}</h2>

      </div>
    </>
  )
}

export default UsersLogin