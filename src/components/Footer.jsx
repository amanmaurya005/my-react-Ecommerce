import React from 'react'
import { FaHeart } from "react-icons/fa";


function Footer() {
  return (
   <>
   <footer>
     <footer className=' p-4 bg-emerald-600 text-xl text-center shadow-md text-white'>
        <p>&copy; 2025 | All Right Reserved</p>
        <p>Made with {<FaHeart className='inline-block' />} by <a href="https://github.com/amanmaurya005">Aman maurya</a></p>
    </footer>
   </footer>
   </>
  )
}

export default Footer