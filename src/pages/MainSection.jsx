import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';


export default function MainSection() {

  const [products, setProducts] = useState([]);
  const {cart,setCart}=useContext(CartContext) // 
  const len = 40;

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const Fetchedproducts = await axios.get("https://fakestoreapi.com/products");
    // console.log(Fetchedproducts.data);  
    setProducts(Fetchedproducts.data);

  }
  
  function handleCart(productId) {
    console.log(productId)
     const alreadyAdded = cart.some(item => item === productId);  // check product in cart if already added so don't add again
     console.log(alreadyAdded)
    
    if(alreadyAdded){
      alert("already added");
      return
    }
else{
    setCart([...cart,productId])

}    
  }
  console.log(cart)


  // console.log(products)

  return (
    <>
      <div className='flex flex-wrap items-center justify-center bg-gray-50 p-10 gap-8'>
        {products.map((data) => {
          
          const dataTitle=data.title.length > len ? data.title.slice(0,len)+"..." : data.title;

          return (
          <div key={data.id} className="data w-[20%] h-80 rounded-2xl   shadow-md  bg-white-100">
           <Link  to={`/SingleProduct/${data.id}`} > <div className="dataImage w-48 h-52 p-6 object-cover m-auto">
              <img src={data.image} alt="" className='w-full h-full' />
            </div></Link>
            <p className=' h-13  px-6    text-start'>{dataTitle}</p>
            <button  onClick={() => handleCart(data.id)}className='px-6 py-2 rounded-2xl ml-4 mt-1 text-white bg-emerald-600'>Add to cart</button>
          </div>
          )
})}
      </div>
      

    </>
  )
}
