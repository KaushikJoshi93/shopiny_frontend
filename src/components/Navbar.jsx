"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import Link from "next/link";
import { useAsyncStore } from "@/hooks/useAsyncStore";
import { useCartStore } from "@/globalStore/cartStore";
import { useUserStore } from "@/globalStore/userStore";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cartValue } =
    useAsyncStore(useCartStore, (state) => ({
      cartValue: state.cartValue,
      addToCart: state.addToCart,
    })) || {};
  const {user , removeUser} = useAsyncStore(useUserStore, (state) => ({
    user: state.user,
    removeUser: state.removeUser
  })) || {};
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [toggleMenu]);
  return (
    <div className="flex flex-col navbar relative overflow-x-clip bg-[#cfcbcb34]">
      <div className="flex justify-between h-20 shadow-2xl relative ">
        {/* below div contais the logo of the website */}
        <Link href={"/"} className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              height="111"
              width="120"
              className="w-20 h-20 mt-8"
              alt="Logo"
            />
            <p className="text-[22px] md:text-2xl font-bold text-pink-500 font-sans">
              SHOPINY
            </p>
          </div>
        </Link>
        {/* below div contains the menu and menuitems */}
        <div className="flex items-center mr-8 z-40 ">
          <ul
            className={
              !toggleMenu
                ? `invisible absolute flex flex-col h-screen w-screen items-center justify-center top-[100%] left-[50%] translate-x-[100%] md:visible md:translate-x-0 md:flex-row md:static md:h-auto md:w-auto md:flex  list-none  text-gray-800 font-sans gap-8 transition-all ease-in-out duration-1000 `
                : `absolute top-[100%] left-[50%] translate-x-[-50%]  flex flex-col gap-12 bg-white h-screen w-screen items-center justify-center transition-all ease-in-out duration-1000 font-sans`
            }
          >
            <li
              className="cursor-pointer hover:text-gray-400"
              onClick={() => setToggleMenu(false)}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className="cursor-pointer hover:text-gray-400"
              onClick={() => setToggleMenu(false)}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className="cursor-pointer hover:text-gray-400"
              onClick={() => setToggleMenu(false)}
            >
              <Link href={"/categories"}>Categories</Link>
            </li>
            {user ? (
              <li
                className="cursor-pointer hover:text-gray-400 bg-[#ec48de] p-2 text-white rounded-full group relative"
                onClick={() => setToggleMenu(false)}
              >
                {user.username.toString().charAt(0).toUpperCase()+ user.username.slice(1,)}
                <ul className="absolute hidden group-hover:flex bg-white border border-gray-300 mt-2 py-2 w-40 right-2 rounded-md shadow-lg flex-col items-center">
                  <li className="p-2">Profile</li>
                  <li className="p-2" onClick={()=>{console.log(removeUser);removeUser()}}>Logout</li>
                </ul>
              </li>
            ) : (
              <>
                <li
                  className="cursor-pointer hover:bg-[#ec489a5d] bg-[#ec4899] pl-4 pr-4 p-1 rounded-2xl  text-white"
                  onClick={() => setToggleMenu(false)}
                >
                  <Link href={"/login"}>Login</Link>
                </li>
                <li
                  className="cursor-pointer hover:bg-[#ec489a5d] bg-[#ec4899] pl-2 pr-2 p-1 rounded-2xl  text-white"
                  onClick={() => setToggleMenu(false)}
                >
                  <Link href={"/signup"}>Signup</Link>
                </li>
              </>
            )}
            <li
              className="cursor-pointer hover:text-gray-400 text-lg relative"
              onClick={() => setToggleMenu(false)}
            >
              <span className="absolute top-[-14px] right-[-18px] bg-[#ec4899] pl-[5px] pr-[5px] pt-[0px] pb-[0px] rounded-full text-[10px]">
                {cartValue}
              </span>
              <BsCartFill />
            </li>
          </ul>
          <div className="flex flex-col md:hidden lg:hidden ">
            <div
              className="flex flex-col "
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <div
                className={`w-7 h-[3px] bg-black mb-1  transition-all  duration-500 ${
                  toggleMenu && "rotate-[125deg]"
                }  ${toggleMenu && "translate-y-[6px]"} `}
              />
              <div
                className={`w-7 h-[3px] bg-black mb-1  transition-all duration-500 ${
                  toggleMenu && "rotate-[-122deg]"
                } `}
              />
              <div
                className={`w-7 h-[3px] bg-black mb-1  ${
                  toggleMenu && "opacity-0"
                }`}
              />
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
  );
};

export default Navbar;
