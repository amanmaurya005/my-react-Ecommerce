import React from 'react'
import { Link } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";



export default function Header() {
  return (
    <>
      <header className='flex h-16 items-center justify-between px-4 text-2xl  bg-emerald-500'>
        <div className="logo">Logo</div>
        <div className="rightSide flex items-center justify-between w-2/5">
          <div className="menus w-2/3 ">
            <ul className='flex items-center justify-between w-full'>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
            </ul>
          </div>
          <div className="w-1/5 add flex items-center justify-around">
            <RiShoppingCartFill />
            <BiLogInCircle />
          </div>
        </div>
      </header>
    </>
  )
}
