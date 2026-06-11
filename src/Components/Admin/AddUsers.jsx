import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddUsers = () => {
    let navigate = useNavigate()
    let [formdata , setformdata ] = useState({
        username : "",
        contact : "",
        email : "",
        password : "",
        place : "",
        dob : "",
    })

    let handleinput=(e)=>{
        let key = e.target.name
        let val = e.target.value
        console.log(key,val);
        setformdata({
            ...formdata,
            [key] : val
        })
    }

    let handlesubmit=(e)=>{
        e.preventDefault()
        // console.log(formdata);
        axios.post(`http://localhost:4000/users`,formdata)
        toast.success(`users data added successfully`)
        window.location.reload()
    }
  return (
    <>

        <div className="add-users">
            <div className="btnbox">
                <button onClick={()=>navigate(`/adminportal/users`)}>
                    User Details
                </button>
            </div>
            <h1>Users Regestraition Form</h1>
            <div className="formbox">
                <form onSubmit={handlesubmit}>
                    <input 
                    type="text" 
                    placeholder='Enter User Name' 
                    name='username'
                    value={formdata.username}
                    onChange={handleinput}
                    required
                    
                    />
                    <input 
                    type="tel" 
                    pattern='[6-9]{1}{0-9}{9}' 
                    placeholder='Enter Contact Number' 
                    name='contact'
                    value={formdata.contact}
                    onChange={handleinput}
                    required
                    />
                    <input 
                    type="email" 
                    placeholder='Enter Email Address' 
                    name='email'
                    value={formdata.email}
                    onChange={handleinput}
                    required
                    />
                    <input 
                    type="password" 
                    placeholder='Enter Login Password' 
                    name='password'
                    value={formdata.password}
                    onChange={handleinput}
                    required
                    />
                    <input 
                    type="text" 
                    placeholder='Enter Your Place' 
                    name='place'
                    value={formdata.place}
                    onChange={handleinput}
                    required
                    />
                    <input 
                    type="date"
                    placeholder='Enter Your Date of Birth'
                    name='dob'
                    value={formdata.dob}
                    onChange={handleinput}
                    required
                    />
                    <button>Add Users</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddUsers
