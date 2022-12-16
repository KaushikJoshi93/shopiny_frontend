import Image from 'next/image'
import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='flex justify-between h-20 shadow-2xl'>
      {/* below div contais the logo of the website */}
      <div className='flex items-center'>
        <Image src="/images/logo.png" height="111" width="120" className='h-14 mt-4' />
        <p className='text-2xl font-bold text-pink-500'>Shopiny</p>
      </div>
      {/* below div contains the menu and menuitems */}
      <div className='flex items-center mr-8'>
        <ul className='hidden md:flex  list-none  text-gray-800 font-sans  '>
          <li className='cursor-pointer hover:text-gray-400'>Home</li>
          <li className='cursor-pointer hover:text-gray-400'>About</li>
          <li className='cursor-pointer hover:text-gray-400'>Categories</li>
          <li className='cursor-pointer hover:text-gray-400'>Contact</li>
          <li className='cursor-pointer hover:text-gray-400 text-lg '><BsCartFill /></li>
        </ul>
        <div className='flex flex-col md:hidden lg:hidden '>
          <div className='flex flex-col ' onClick={()=>setToggleMenu(!toggleMenu)}>
            <div className='w-7 h-[3px] bg-black mb-1' />
            <div className='w-7 h-[3px] bg-black mb-1' />
            <div className='w-7 h-[3px] bg-black mb-1' />
          </div>
          {toggleMenu && <ul className=' w-[70vw] flex flex-col list-none text-gray-800 font-sans  bg-white p-9 transition animate-slide-in shadow-2xl'>
            <li className='cursor-pointer hover:text-gray-400 mt-4'>Home</li>
            <li className='cursor-pointer hover:text-gray-400 mt-4'>About</li>
            <li className='cursor-pointer hover:text-gray-400 mt-4'>Categories</li>
            <li className='cursor-pointer hover:text-gray-400 mt-4'>Contact</li>
            <li className='cursor-pointer hover:text-gray-400 text-lg mt-4 '><BsCartFill /></li>
          </ul>}
        </div>
      </div>
    </div>
  )
}

export default Navbar