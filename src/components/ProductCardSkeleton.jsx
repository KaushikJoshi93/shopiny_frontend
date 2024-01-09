import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="flex-col mt-4 shadow-2xl rounded-lg w-full border-[1px] border-gray-200 animate-pulse ">
      <div className="w-full h-72 rounded-t-lg bg-gray-300"></div>
      <div className="flex flex-col gap-2 items-start pl-2 p-4">
        <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="p-2">
        <div className="w-full h-8 bg-[#ec489ada] rounded-sm animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
