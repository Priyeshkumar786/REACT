import React from 'react'
import './Tailwind.css'
import { FaHome } from "react-icons/fa";


const App = () => {
  return (
    <>

    <div className='text-emerald-700 border border-b-emerald-950 flex justify-between items-center rounded-4xl  px-3'>

   
    <ul className='hidden sm:block md:flex items-center justify-center gap-5 '>
      
      <li> <FaHome />home</li>
      <li>about</li>
      <li>contact</li>
    </ul>
    <button type='submit' className='border ' >sign in</button>
  
   </div>

        </>
    // <>
    // <div className='text-red-500 border'>
    //   Hey i am Priyesh
    // </div>
    // </>
  )
}

export default App
