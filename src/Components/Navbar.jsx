import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let pathBool = location.pathname.startsWith(`/adminportal`)
  console.log(pathBool);
  return (
    <div className="navbar">
      <div className="logo">
        <img src='data:image/png;base64,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' alt="no image" />
      </div>
      <div className="links">

        <div>
          {pathBool
            ?
            <ul>
              <li><NavLink to='/adminportal/'>Home</NavLink></li>
              <li><NavLink to='/adminportal/products'>Products</NavLink></li>
              {/* <li><NavLink to='/adminportal/about'>About</NavLink></li> */}
              <li><NavLink to='/adminportal/addusers'>Add Users</NavLink></li>
              <li><NavLink to='/'>Logout</NavLink></li>
            </ul>

            :
            <ul>
              <li><NavLink to='/userportal/'>Home</NavLink></li>
              <li><NavLink to='/userportal/products'>Products</NavLink></li>
              <li><NavLink to='/userportal/cartitems'>cartitems</NavLink></li>
              <li><NavLink to='/userportal/about'>About</NavLink></li>
              <li><NavLink to='/'>Logout</NavLink></li>
            </ul>

          }
        </div>



      </div>
    </div>
  )

}
export default Navbar