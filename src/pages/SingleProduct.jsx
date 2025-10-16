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
<div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-6">
  {product ? (
    <div className="max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row  ">
      
      {/* Image Section */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-emerald-500 transition-colors duration-300">
          {product.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-emerald-600">
            ${product.price}
          </h1>
          <button className="px-5 py-2 bg-emerald-600 text-white rounded-xl shadow-md hover:bg-emerald-700 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-gray-500 text-xl font-medium">Loading...</p>
  )}
</div>


    </>
  )
}
