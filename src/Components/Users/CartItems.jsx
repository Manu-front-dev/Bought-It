import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CartItems = () => {
  let [cartdata, setcartdata] = useState([])
  // let [price, setprice] = useState(0)
  let fetchapi = async () => {
    let respdata = await axios.get('/jsondata/storedata.json')
    setcartdata(respdata.data.cartitems || [])
  }
  useEffect(() => {
    fetchapi()
  }, [])

let grandtotal = (cartdata || []).reduce((acc, elem) => {
  return acc + Number(elem?.price || 0)
}, 0)


  return (
    <div className="cartmain">

      <div className="carttable">
      <table>
        <thead>
          <tr>
            <th>SL NO</th>
            <th>Price</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          
            {cartdata.map((elem ,index)=>{
              let {price, title , image} =elem
              return(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{price}</td>
                  <td>{title}</td>
                  <td><img src={image} alt="" /></td>
                </tr>
              )
            })}

        </tbody>
      </table>
      </div>
      <div className="price">
        <h1>Total Price</h1>
        <h1>Grand Total : ₹ {grandtotal}</h1>

      </div>
    </div>
  )
}

export default CartItems
