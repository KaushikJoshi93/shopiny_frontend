"use client";
import React from "react";
// import ProductImage from "../../public/images/watch.png";
import { BsFillCartFill } from "react-icons/bs";
import CustomRatingBar from "./CustomRatingBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Product = (props) => {
  const router = useRouter();
  return (
    <div className="flex-col mt-4 shadow-2xl rounded-lg w-full border-[1px] border-gray-200">
      <div
        className="w-full h-72 flex justify-center cursor-pointer overflow-hidden"
        onClick={() => router.push(`/product/${props.product._id}`)}
      >
        <Image
          src={props.product.img}
          width={100}
          height={100}
          // placeholder="blur"
          // blurDataURL="https://image.dummyjson.com/100x100"
          loading="lazy"
          quality={100}
          className="w-full h-full rounded-t-lg transition-transform duration-500 hover:scale-110"
          alt="Products"
        />
      </div>
      <div className="flex flex-col gap-2 items-start pl-2  p-4">
        <p className="font-bold">{props.product.title}</p>
        <div className="flex w-full justify-between items-center">
          <p className="text-gray-700 text-xs">
            {" "}
            <span className="line-through mr-1 text-gray-400">
              ₹{props.product.price + 400}
            </span>
            ₹{props.product.price}
          </p>
          <CustomRatingBar
            rating={2}
            numberOfStars={5}
            starRatedColor="#bdbd09"
            starDimension="22px"
            starSpacing="2px"
            starHoverColor="yellow"
          />
        </div>
      </div>
      <div className="p-2">
        <button className="w-full rounded-sm p-2 text-white flex gap-2 justify-center items-center bg-[#ec489ada] hover:bg-[#ec489a]">
          <BsFillCartFill />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
