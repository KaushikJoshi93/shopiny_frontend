"use client";
import Image from "next/image";
import Product from "../components/Product";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { axios } from "../helper/axios";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Link from "next/link";

const page = () => {
  const [products, setProducts] = useState([]);
  const features = [
    {
      icon: <TbTruckDelivery />,
      title: "Fast and Free Delivery",
      description: "Free Delivery on all orders",
    },
    {
      icon: <RiSecurePaymentLine />,
      title: "Secure Payment",
      description: "Safe and secure payments for peace of mind",
    },
    {
      icon: <BiSupport />,
      title: "Online Support",
      description: "24/7 online support. Contact us for quick assistance",
    },
  ];

  const fetchProducts = async () => {
    const res = await axios.get("/product");
    const all_products = res.data;
    setProducts(all_products);
    console.log(all_products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const FeatureSection = () => (
    <div className="flex justify-around mt-4 flex-col md:flex-row ">
      {features.map((item, index) => (
        <div
          className="p-4 flex flex-col gap-2 rounded-lg border-[1px] border-gray-300 flex-1 m-8"
          key={item.title + index}
        >
          <div className="text-4xl flex justify-center text-[#ec4899] bg-[#ec489a44] rounded-full self-center p-2">
            {item.icon}
          </div>
          <div className="flex justify-center text-base md:text-lg">
            {item.title}
          </div>
          <div className="flex justify-center text-[12px] md:text-xs text-gray-500 text-center">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="overflow-x-hidden">
      {/* hero section */}
      <div className="flex h-96 mt-5">
        <div className="flex-1 flex flex-col items-center p-12">
          <div className="mb-5">
            <p className="text-3xl md:text-5xl font-kcursive text-pink-500">
              Fashion Sale
            </p>
          </div>
          <div className="mb-5">
            <p className="text-2xl md:text-3xl font-semibold font-sans">
              Minimal Menz Style
            </p>
          </div>
          <div className="mb-5 text-center flex justify-center ">
            <p className="text-gray-400 font-medium  text-[16px] text-center md:text-start w-[90%]">
              Your one stop destination for shopping , where you can buy various
              things at the most affordable price{" "}
            </p>
          </div>
          <div className="mb-5">
            <Link
              href={"/categories"}
              className="bg-black text-white p-2 rounded-md pr-7 pl-7 md:pr-12 md:pl-12"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden  md:flex  justify-center  ">
          <Image
            src={"/images/hero.png"}
            width={429}
            height={682}
            className=" w-[40%] h-full "
          />
        </div>
      </div>

      {/* Product Section */}
      <p className="ml-8 font-bold text-2xl tracking-wide">
        Trending This Week
      </p>
      <div className="flex flex-col md:flex-row">
        {products.length
          ? products.map((item, index) => (
            <div
              className="flex-1 mr-4 ml-2 flex justify-around flex-wrap"
              key={item.title + index}
            >
              <Product product={item} />
            </div>
          ))
          : Array.from([1, 2, 3, 4]).map((item, index) => (
            <div
              className="flex-1 mr-4 ml-2 flex justify-around flex-wrap"
              key={index}
            >
              <ProductCardSkeleton />
            </div>
          ))}
      </div>

      {/* Features Section */}
      <FeatureSection />
    </main>
  );
};

export default page;
