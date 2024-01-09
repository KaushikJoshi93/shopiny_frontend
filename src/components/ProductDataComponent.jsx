"use client";
import ReactImageZoom from "react-image-zoom";
import { useCartStore } from "@/globalStore/cartStore";
import { useEffect, useState } from "react";

const ProductDataComponent = (props) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    let elem = document.getElementsByTagName("img")[1];
    elem.alt = "Product";
  }, []);

  return (
    <>
      {props.productData ? (
        <>
          {/* ProductImage */}
          <div className="w-full h-full pl-4 md:pl-14 pr-4 md:pr-20 pt-8 flex justify-center">
            {!isMobile ? (
              <ReactImageZoom
                img={props.productData.img}
                width={450}
                height={450}
                className="w-[450px] h-[450px]"
                zoomWidth={300}
                offset={{ vertical: "0", horizontal: "10" }}
              />
            ) : (
              <img
                src={props.productData.img}
                className="w-[450px] h-[450px]"
                alt="Product"
              />
            )}
          </div>
          {/* Product Info */}
          <div className="pt-8 flex flex-col gap-4 pl-8 pr-2 ">
            <h1 className="text-xl md:text-3xl font-bold mb-2 sm:whitespace-nowrap">
              {props.productData.title}
            </h1>
            <p className="text-gray-500 font-bold">Product Details</p>
            <p>{props.productData.desc}</p>
            {/* price section */}
            <div className="flex gap-2">
              <span className="text-2xl text-gray-400 dark:text-gray-100 font-bold line-through">
                ₹{props.productData.price + 400}
              </span>
              <span className="text-2xl text-gray-700 dark:text-gray-100 font-bold">
                ₹{props.productData.price}
              </span>
            </div>
            {/* buy and add to cart button section */}
            <div className="flex gap-4">
              <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline disabled:bg-pink-400 disabled:cursor-not-allowed">
                Buy Now
              </button>
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline disabled:bg-pink-400 disabled:cursor-not-allowed"
                onClick={() => addToCart()}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-screen h-full flex justify-center items-center flex-col m-12 md:m-24 gap-4">
          <p className="text-sm  md:text-xl">Error Loading Product Details</p>
          <button
            className="bg-[#ec4899] text-white p-2 rounded-lg text-xs md:text-sm"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      )}
    </>
  );
};

export default ProductDataComponent;
