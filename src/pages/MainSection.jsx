import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function MainSection() {

  const [products, setProducts] = useState([]);
  let len = 40;

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const Fetchedproducts = await axios.get("https://fakestoreapi.com/products");
    console.log(Fetchedproducts.data);
    setProducts(Fetchedproducts.data);

  }
  


  console.log(products)

  return (
    <>
      <div className='flex flex-wrap items-center justify-center bg-gray-50 p-10 gap-8'>
        {products.map((data) => {
          
          const dataTitle=data.title.length > len ? data.title.slice(0,len)+"..." : data.title;

          return (
          <div key={data.id} className="data w-[20%] h-70 rounded-2xl text-center  shadow-md  bg-white-100">
            <div className="dataImage w-48 h-54 p-6 object-cover m-auto">
              <img src={data.image} alt="" className='w-full h-full' />
            </div>
            <p className='  px-6  text-start'>{dataTitle}</p>
          </div>
          )
})}
      </div>
      

    </>
  )
}
