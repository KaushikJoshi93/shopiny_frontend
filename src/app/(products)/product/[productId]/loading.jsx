import React from "react";

const loading = () => {
  return (
    <div className="w-full flex-1 flex flex-col md:flex-row">
      {/* ProductImage */}
      <div className="w-full h-full pl-4 md:pl-14 pr-4 md:pr-20 pt-8 flex justify-center">
        {/* Skeleton Loading for Image */}
        <div className="animate-pulse bg-gray-300 w-[450px] h-[450px]"></div>
      </div>
      {/* Product Info */}
      <div className="pt-8 flex flex-col gap-4 pl-8 pr-2 w-[450px] h-[450px]">
        {/* Skeleton Loading for Title */}
        <div className="animate-pulse bg-gray-300 h-7 w-3/4"></div>
        {/* Skeleton Loading for Product Details */}
        <div className="animate-pulse bg-gray-300 h-7 w-full"></div>
        {/* Skeleton Loading for Price Section */}
        <div className="animate-pulse bg-gray-300 h-7 w-3/4"></div>
        {/* Skeleton Loading for Buttons */}
        <div className="animate-pulse bg-gray-300 h-7 w-1/2"></div>
      </div>
    </div>
  );
};

export default loading;
