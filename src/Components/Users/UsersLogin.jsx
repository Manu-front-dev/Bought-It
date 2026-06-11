import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const UsersLogin = () => {
  let navigate = useNavigate()
  let [data, setdata] = useState([])

  let fetchapi = async () => {
    let respdata = await axios.get('/jsondata/storedata.json')
    console.log(respdata.data)
    console.log(respdata.data.users)
    setdata(respdata.data.users)
  }
  useEffect(() => {
    fetchapi()
  }, [])
  // console.log(data);

  let allusersemail = data.map(elem => elem.email)
  let allUsersPassword = data.map(elem => elem.password)

  // console.log(usermail , userpswd);


  let [formdata, setformdata] = useState({
    email: "",
    password: ""
  })

  let handleinput = (e) => {
    let key = e.target.name
    let val = e.target.value
    // console.log(key,val);
    setformdata({
      ...formdata,
      [key]: val
    })
  }

  let handlesubmit = (e) => {
    e.preventDefault()
    // console.log(formdata);

    let { email, password } = formdata
    // console.log(usermail.indexof(formdata.email));
    let emailindex = allusersemail.indexOf(email)
    let pswdindex = allUsersPassword.indexOf(password)
    console.log(emailindex, pswdindex);

    if (emailindex !== -1 && pswdindex !== -1) {
      if (emailindex === pswdindex) {
        alert(`welcome`)
        navigate(`/userportal`)
        toast.success(`login success`)
      } else {
        toast.error(`invalid input`)
      }
    } else {
      toast.error(`invalid input`)
    }
  }
  return (
    <>
      <div className="users-login">
        <form onSubmit={handlesubmit}>
          <h2 style={{ color: 'blue' }}>Admin login Page</h2>
          <input
            type="email"
            placeholder='Enter Emain Address'
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
      </div>
    </>
  )
}

export default UsersLogin
