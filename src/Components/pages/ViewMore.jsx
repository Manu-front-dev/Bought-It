import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewMore = () => {
    let location = useLocation()
    let pathbool = location.pathname.startsWith(`/adminportal`)

    let navigate = useNavigate()
    let params = useParams()
    let productsID = params.id

    let [oneproduct, setoneproduct] = useState({})

    let fetchapi = async () => {
        let respdata = await axios.get('/jsondata/storedata.json')
        let product = respdata.data.products.find((elem) => {
            return elem.id == productsID
        })
        setoneproduct(product)
    }
    console.log(oneproduct)
    console.log(oneproduct.image)
    useEffect(() => {
        fetchapi()
    }, [])
    console.log(oneproduct);
    let { id, title, price, description, category, image, rating } = oneproduct

    let handelDelet = () => {
        let bool = window.confirm("do you want to delet this product...?")
        if (bool) {
            axios.delete(`http://localhost:4000/products/${id}`)
            toast.success(`product is deleted`)
            navigate(`/adminportal/products`)
        } else {
            toast.error(`product is not deleted`)
        }
    }

    let addtocart = async () => {
        let bool = window.confirm(`Do you Want to Add Product to Cart`)
        if (bool) {
            await axios.post('http://localhost:4000/cartitems', oneproduct)
            toast.success(`Item Added To Cart Successfully`)
            navigate(`/userportal/cartitems`)
        } else {
            toast.info(`Product is not added`)
        }
    }
    return (
        <div className="viewmore">
            <div className="card">
                <div className="left">
                    <img src={image} alt="No Image" />
                </div>
                <div className="right">
                    {/* <div className="id"><span>ID : </span>{id}</div> */}
                    <div className="title"> <span>Prod Title :</span> {title}</div>
                    <div className="price"><span>Price : </span>{price}</div>
                    <div className="desc"><span>Description :</span> {description}</div>
                    <div className="cat"><span>Category : </span>{category}</div>
                    {pathbool ? <button onClick={handelDelet}>Delete</button> : <button onClick={addtocart}>add to cart</button>}
                </div>
            </div>
        </div>
    )
}

export default ViewMore
