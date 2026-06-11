import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = () => {

  let [products, setproducts] = useState([])
  let navigate = useNavigate()
  let location = useLocation()
  let pathbool = location.pathname.startsWith(`/adminportal`)

  let fetchapi = async () => {
    let respdata = await axios.get('/jsondata/storedata.json')
    setproducts(respdata.data.products)
  }


  useEffect(() => {
    fetchapi()
  }, [])
  console.log(products);

  let handleviewmore = (productId) => {
    pathbool
      ? navigate(`/adminportal/viewmore/${productId}`)
      : navigate(`/userportal/viewmore/${productId}`)
  }



  return (
    <>
      <div className="products">
        <h1>All Products</h1>
        <div className="catagory">
          <button onClick={() => navigate(`/adminportal/filter/men's clothing `)}>MEN</button>
          <button onClick={() => navigate(`/adminportal/filter/women's clothing`)}>WOMENS</button>
          <button onClick={() => navigate(`/adminportal/filter/jewelery`)}>JEWELERY</button>
          <button onClick={() => navigate(`/adminportal/filter/electronics`)}>ELECTRONICS</button>
        </div>
        {/* {
          pathbool
            ?
            <div className="addbtn">
              <button onClick={() => navigate(`/adminportal/addproducts`)}>Add Products</button>
            </div>
            :
            <></>
        } */}
        {pathbool && <div className="addbtn">
          <button onClick={() => navigate(`/adminportal/addproducts`)}>Add Products</button>
        </div>
        }
        <div className="container">
          {products.map((elem, index) => {
            let { id, title, image, category } = elem
            return (
              <div className="card" key={index}>
                <div className="cat">{category}</div>
                <img src={image} alt="No Image" />
                <div className="title">{title}</div>
                <div className="btnbox">
                  <button onClick={() => handleviewmore(id)} className='des'><DescriptionIcon />more --&gt;&gt;&gt;&gt;</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products
