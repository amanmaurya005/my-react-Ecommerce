import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import axios from 'axios';

function Cart() {

  let len=20;

  const {cart}=useContext(CartContext);
  const [cartProduct,setCartProduct]=useState([])
  // console.log(cart)

  useEffect(()=>{
    cartFetch()
  },[cart])

  
  async function cartFetch() {
    const response=await axios.get("https://fakestoreapi.com/products");
    // console.log(response.data);
    const allProduct=response.data;
    const filtered=allProduct.filter((item)=> cart.includes(item.id))
    setCartProduct(...cartProduct,filtered)

  }
    console.log(cartProduct)

 
  return (
  <div className="flex flex-wrap items-center justify-center bg-gray-50 p-10 gap-8">
      {cartProduct.length > 0 ? (
        cartProduct.map((data) => {
          const dataTitle =
            data.title.length > len ? data.title.slice(0, len) + "..." : data.title;
            const description=data.description.length > 50 ? data.description.slice(0,50)+"...":data.description;

          return (
            <div
              key={data.id}
              className="w-full  rounded-2xl shadow-md bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-20 h-20 p-2 pl-4">
                <img src={data.image} alt={data.title} className="w-full h-full" />
              </div>
              <p className="h-6  pl-4 text-start font-semibold ">
                {dataTitle}
              </p>
              <p className=' pl-4 text-emerald-600 text-start font-semibold '>
                ${data.price}
              </p>
              <p className='pl-4 text-start font-semibold'>{description}</p>
              <button className='bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-2xl hover:text-white'>Remove</button>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 text-xl font-medium">No products in cart.</p>
      )}
    </div>

  )
}

export default Cart