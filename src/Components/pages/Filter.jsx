import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Filter = () => {

    let { category } = useParams()

    let [products, setproducts] = useState([])

    let fetchapi = async () => {
        let respdata = await axios.get('/jsondata/storedata.json')    
        console.log(respdata)
        console.log(respdata.data)
        console.log(respdata.data.products)
        setproducts(respdata.data.products)
    }
    useEffect(() => {
        fetchapi()
    }, [])
    let filtereddata = products.filter((elem) => {
        return elem.category === category
    })

    return (
        <div className="products">
            <h1>{category}</h1>
            <div className="container">
                {filtereddata.map((elem) => {
                    let { id, title, image, category } = elem
                    return (
                        <div className="card" key={id}>
                            <div className="cat">{category}</div>
                            <img src={image} alt="" />
                            <div className="title">{title}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Filter