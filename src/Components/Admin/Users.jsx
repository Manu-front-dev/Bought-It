import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    let [data, setdata] = useState([])
    let fetchapi = async () => {
        let respdata = await axios.get('/jsondata/storedata.json')
        setdata(respdata.data.users);
    }
    useEffect(() => {
        fetchapi()
    }, [])
    console.log(data);

    return (
        <div className="usersdetails">
            <h1>users details</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>contact</th>
                            <th>Email</th>
                            <th>password</th>
                            <th>place</th>
                            <th>dob</th>
                        </tr>
                    </thead>
                    <tbody className='body'>
                        {
                            data.map((elem) => {
                                let { username, contact, email, password, place, dob, id } = elem
                                return (
                                    <tr key={id}>
                                        <td>{username}</td>
                                        <td>{contact}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{place}</td>
                                        <td>{dob}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users