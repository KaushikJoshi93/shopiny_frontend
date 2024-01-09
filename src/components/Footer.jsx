import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen  flex flex-col mt-4 border-t-[1px] footer">
      <div className="w-full p-4 flex flex-col gap-8 md:gap-12 sm:items-center md:flex-row  bg-footerColor  border-t-white border-b-white">
        <div className="flex flex-1 justify-center md:justify-start">
          <Image
            src={"/images/logo.png"}
            height="91"
            width="120"
            className="w-20 h-20"
            alt="FooterLogo"
          />
          <p className="text-pink-500 font-bold mt-2 text-2xl">Shopiny</p>
        </div>
        <div className="flex flex-col items-center md:items-start flex-1">
          <p className="font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-gray-200 uppercase">
            Shop Men
          </p>
          <ul className="flex flex-col items-center md:items-start mt-1 md:mt-4">
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Clothing Fashion
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer">
              Winter
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Summer
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Formal
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Casual
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 items-center md:items-start">
          <p className="font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-gray-200 uppercase">
            Shop Women
          </p>
          <ul className="flex flex-col mt-1 md:mt-4 items-center md:items-start">
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Clothing Fashion
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Winter
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Summer
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Formal
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Casual
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 items-center md:items-start">
          <p className="font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-gray-200 uppercase">
            Baby Collection
          </p>
          <ul className="flex flex-col mt-1 md:mt-4 items-center md:items-start">
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Clothing Fashion
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Winter
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Summer
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Formal
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Casual
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 items-center md:items-start">
          <p className="font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-gray-200 uppercase">
            Quick Links
          </p>
          <ul className="flex flex-col mt-1 md:mt-4 items-center md:items-start">
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Track Your Order
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Support
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              FAQ
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Carrier
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              About
            </li>
            <li className="text-gray-600 hover:text-gray-800 dark:text-gray-400 cursor-pointer ">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-footerColor flex justify-center border-t-gray-300 border-t-[0.1px] p-0 md:pt-2 md:pb-2">
        <p className="text-gray-400 font-extralight text-center">
          Copyright ©2022 All rights reserved | Shopiny.in
        </p>
      </div>
    </div>
  );
};

export default Footer;
