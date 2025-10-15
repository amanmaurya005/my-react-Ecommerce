import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { CartContext } from './CartContext'

import axios from 'axios'


export default function SingleProduct() {

const [product,setProduct]=useState(null)


  const { id } = useParams()
useEffect(() => {
  fetchSingleProducts(id);
}, [id]);

  async function fetchSingleProducts(id) {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)

    console.log(response.data);
    setProduct(response.data)
  }

  return (
    <>

     <div>
       {product ? (
        <div>
    <div className="img">
      <img src={product.image} alt={product.title} />
    </div>
    <p>{product.title}</p>
    <h1>${product.price}</h1>
    </div>



  ) : (
    <p>Loading...</p>
  )}
     </div>

    </>
  )
}
