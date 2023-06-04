import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import Link from 'next/link'



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(()=>{
    if(toggleMenu){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "auto";
    }
  },[toggleMenu])
  return (
    <div className='flex flex-col '>
      <div className='flex justify-between h-20 shadow-2xl relative '>
        {/* below div contais the logo of the website */}
        <div className='flex items-center'>
          <Image src="/images/logo.png" height="111" width="120" className='w-20 h-20 mt-8' />
          <p className='text-[22px] md:text-2xl font-bold text-pink-500 font-sans'>SHOPINY</p>
        </div>
        {/* below div contains the menu and menuitems */}
        <div className='flex items-center mr-8 '>
          <ul className={!toggleMenu ? `invisible absolute flex flex-col h-screen w-screen items-center justify-center top-[100%] left-[50%] translate-x-[100%] md:visible md:translate-x-0 md:flex-row md:static md:h-auto md:w-auto md:flex  list-none  text-gray-800 font-sans gap-8 transition-all ease-in-out duration-1000 ` : `absolute top-[100%] left-[50%] translate-x-[-50%]  flex flex-col gap-12 bg-white h-screen w-screen items-center justify-center transition-all ease-in-out duration-1000 font-sans`} >
            <li className='cursor-pointer hover:text-gray-400'>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className='cursor-pointer hover:text-gray-400'>
              <Link href="/about">
                About
              </Link></li>
            <li className='cursor-pointer hover:text-gray-400'>Categories</li>
            <li className='cursor-pointer hover:text-gray-400'>Contact</li>
            <li className='cursor-pointer hover:text-gray-400 text-lg '><BsCartFill /></li>
          </ul>
          <div className='flex flex-col md:hidden lg:hidden '>
            <div className='flex flex-col ' onClick={() => setToggleMenu(!toggleMenu)}>
              <div className={`w-7 h-[3px] bg-black mb-1  transition-all  duration-500 ${toggleMenu && 'rotate-[125deg]'}  ${toggleMenu && 'translate-y-[6px]'} `} />
              <div className={`w-7 h-[3px] bg-black mb-1  transition-all duration-500 ${toggleMenu && 'rotate-[-122deg]'} `} />
              <div className={`w-7 h-[3px] bg-black mb-1  ${toggleMenu && 'opacity-0'}`} />
            </div>

          </div>
        </div>
      </div>
      {/* {toggleMenu && <ul className=' w-[100vw] h-screen flex flex-col list-none text-gray-800 font-sans  bg-white p-9   shadow-2xl  items-center   '>
        <li className='cursor-pointer hover:text-gray-400 text-2xl font-light mt-8 '>Home</li>
        <li className='cursor-pointer hover:text-gray-400 text-2xl font-light mt-8 '>About</li>
        <li className='cursor-pointer hover:text-gray-400 text-2xl font-light mt-8 '>Categories</li>
        <li className='cursor-pointer hover:text-gray-400 text-2xl font-light mt-8 '>Contact</li>
        <li className='cursor-pointer hover:text-gray-400 text-4xl mt-8 '><BsCartFill /></li>
      </ul>} */}

    </div>
  )
}

export default Navbar