import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProducts = (e) => {
    let navigate = useNavigate()
    let [formdata, setFormData] = useState({
        title: "",
        price: undefined,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: undefined,
            count: undefined
        }
    })
    let handelinput=(e)=>{
        // e.preventDefault()
        let key = e.target.name
        let val = e.target.value
        console.log(key,val);
    if(key === 'rate' || key === 'count'){
        setFormData({
            ...formdata,
            rating:{
                ...formdata.rating,
                [key] : val
            }
        })
    }else{
        setFormData({
            ...formdata,
            [key] : val,
        })
    }
    }
    let handlesubmit=(e)=>{
        e.preventDefault()
        // console.log(formdata);
        axios.post(`http://localhost:4000/products`,formdata)
        toast.success(`product is added`)
        navigate(`/adminportal/products`)
        window.location.reload()
    }
    return (
        <>
            <div className="add-product">
                <h1>Add Products</h1>
                <div className="formbox">
                    <form onSubmit={handlesubmit} >
                        <div className="input-boxes">
                            <input
                                type="text"
                                placeholder='Enter Title Name'
                                name='title'
                                value={formdata.title}
                                onChange={handelinput}
                                required

                            />
                            <input
                                type="text"
                                placeholder='Enter Price'
                                name='price'
                                value={formdata.price}
                                onChange={handelinput}
                                required

                            />
                            <input
                                type="text"
                                placeholder='Enter Descriptipon'
                                name='description'
                                value={formdata.description}
                                onChange={handelinput} 
                                required
                            />
                            <select onChange={handelinput}
                            name='category'
                            value={formdata.category}>
                                <option value="">----Select category----</option>
                                <option value="men's clothing">MENS CLOTHING</option>
                                <option value="women's clothing">WOMENS CLOTHING</option>
                                <option value="electronics">ELECTRONICS</option>
                                <option value="jewelery">JEWELARAY</option>
                            </select>
                            <input
                                type="text"
                                placeholder='Enter Image URL'
                                name='image'
                                value={formdata.image}
                                onChange={handelinput}
                                required
                            />
                            <input
                                type="text"
                                placeholder='Enter Rating'
                                name='rate'
                                value={formdata.rating.rate}
                                onChange={handelinput}
                                required
                            />
                            <input
                                type="text"
                                placeholder='Enter Count'
                                name='count'
                                value={formdata.rating.count}
                                onChange={handelinput}
                                required
                            />
                        </div>
                        <button onClick={handlesubmit}>Add Products</button>

                    </form>
                </div>
            </div>

        </>
    )
}

export default AddProducts
