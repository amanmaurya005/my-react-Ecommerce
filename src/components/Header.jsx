import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import MainSection from '../pages/MainSection';
import Contact from '../pages/Contact';
import About from '../pages/About';
import { CartContext } from '../pages/CartContext';



export default function Header() {

  const {cart}=useContext(CartContext)

  console.log(cart);
  
  function added() {
   return cart.length
  
  }

  return (
    <>
      <header className='flex h-16 items-center justify-between px-4 text-2xl  bg-emerald-500'>
        <div className="logo">Logo</div>
        <div className="rightSide flex items-center justify-between w-2/5">
          <div className="menus w-2/3 ">
            <ul className='flex items-center justify-between w-full'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="w-1/5 add flex items-center justify-around">
            <Link to="/Cart" ><RiShoppingCartFill />
            <span className='absolute top-2 right-20  bg-red-600 text-white text-xs rounded-full w-4 h-4 text-center'>{added()}</span>
            </Link>
            <Link to="/Login"><BiLogInCircle /></Link>
          </div>
        </div>
      </header>
    </>
  )
}
