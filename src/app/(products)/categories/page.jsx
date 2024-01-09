"use client";
import { FcClearFilters } from "react-icons/fc";
import { FaFilter } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import { axios } from "@/helper/axios";
import { toast } from "react-hot-toast";
import Product from "@/components/Product";
import CircularProgressBar from "@/components/CircularProgressBar";

const page = () => {
  const [filter, setFilter] = useState({
    category: null,
    price: null,
    size: null,
  });
  const [cats, setCats] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilterBox, setShowFilterBox] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let url_string = `/product/category?category=${
        filter.category ?? ""
      }&price=${filter.price ?? ""}&size=${filter.size ?? ""}`;
      let res = await axios.get(url_string);
      let data = res.data.products;
      setProducts(data);
    } catch (err) {
      toast.error("Error Loading Products!! Try Again later");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name !== "size") {
      setFilter({ ...filter, [e.target.name]: e.target.value });
    } else {
      let val = e.target.nextElementSibling.innerText;
      if (e.target.checked) {
        setFilter((prev) => {
          if (prev.size && !prev.size.split(",").includes(val)) {
            return {
              ...filter,
              [e.target.name]: prev.size ? `${prev.size},${val}` : val,
            };
          } else if (!prev.size) {
            return { ...filter, [e.target.name]: val };
          } else {
            return { ...filter };
          }
        });
      } else {
        if (filter.size.split(",").includes(val)) {
          setFilter((prev) => {
            let filteredLst = prev.size
              .split(",")
              .filter((item) => item !== val);
            return {
              ...filter,
              [e.target.name]: filteredLst.join(","),
            };
          });
        }
      }
    }
  };

  const getAllCats = async () => {
    try {
      let res = await axios.get("/product/getAllAvailableCategories");
      let all_cats = res.data.all_categories;
      setCats(all_cats);
    } catch (err) {
      toast.error("Error loading Categories!! Please Refresh Page");
    }
  };
  useEffect(() => {
    const slider = document.getElementById("price_range");
    const tooltip = document.getElementById("tooltip");
    tooltip.innerText = slider.value;
    getAllCats();
    fetchProducts();
    const inputFunc = () => {
      tooltip.innerText = slider.value;
      tooltip.style.opacity = "1";
    };
    const mouseMoveRangeFunc = () => {
      tooltip.style.opacity = "1";
    };
    const mouseLeaveRangeFunc = () => {
      tooltip.style.opacity = "0";
    };
    slider.addEventListener("input", inputFunc);

    // Show tooltip on sliding
    slider.addEventListener("mousemove", mouseLeaveRangeFunc);

    // Hide tooltip when not sliding
    slider.addEventListener("mouseleave", mouseLeaveRangeFunc);

    return () => {
      slider.removeEventListener("input", inputFunc);
      slider.removeEventListener("mousemove", mouseMoveRangeFunc);
      slider.removeEventListener("mouseleave", mouseLeaveRangeFunc);
    };
  }, []);

  return (
    <div className="flex  gap-4 relative overflow-x-hidden">
      <div
        className={`flex-1  p-4 overflow-y-scroll h-screen hidden md:block ${
          showFilterBox ? "mobileFilterBox" : ""
        }`}
      >
        {/* filter heading */}
        <div className="flex justify-between items-center">
          <p className="text-center text-3xl font-extrabold">Filters</p>
          <FcClearFilters
            className="text-4xl cursor-pointer"
            title="Remove filter"
            onClick={() => {
              setFilter({ category: null, price: null, size: null });
              fetchProducts();
            }}
          />
        </div>
        <hr className="mt-4 text-gray-700 h-[1px]" />
        {/* Filter box */}
        <div className="flex flex-col mt-4">
          {/* Categories filter */}
          <div className="flex flex-col gap-4 items-start">
            {/* Filter heading */}
            <p className="text-xl ml-8 font-semibold">Categories</p>
            <select
              name="category"
              className="cursor-pointer p-2 border-2 border-gray-700 ml-8 md:ml-16 w-[250px]"
              onChange={handleChange}
              defaultValue={"Categories"}
            >
              <option  disabled defaultValue={"Categories"} value={"Categories"}>
                Choose Categories
              </option>
              {cats ? (
                cats.map((item, index) => (
                  <option value={item.category} key={index + item.category}>
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </option>
                ))
              ) : (
                <option value={"Loading"} disabled>
                  Loading...
                </option>
              )}
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          {/* Size filter */}
          <div className="flex flex-col gap-4 items-start">
            {/* Filter heading */}
            <p className="text-xl ml-8 font-semibold">Size</p>
            <div className="checkboxDiv flex gap-2 ml-16">
              <input
                type="checkbox"
                className="w-4"
                name="size"
                onChange={handleChange}
              />
              <p className="">S</p>
            </div>
            <div className="checkboxDiv flex gap-2 ml-16">
              <input
                type="checkbox"
                className="w-4"
                name="size"
                onChange={handleChange}
              />
              <p className="">M</p>
            </div>
            <div className="checkboxDiv flex gap-2 ml-16">
              <input
                type="checkbox"
                className="w-4"
                name="size"
                onChange={handleChange}
              />
              <p className="">L</p>
            </div>
            <div className="checkboxDiv flex gap-2 ml-16">
              <input
                type="checkbox"
                className="w-4"
                name="size"
                onChange={handleChange}
              />
              <p className="">XL</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          {/* Price filter */}
          <div className="flex flex-col gap-4 items-start">
            {/* Filter heading */}
            <p className="text-xl ml-8 font-semibold">Price</p>
            <div className="relative w-full">
              <input
                type="range"
                min={100}
                max={10000}
                defaultValue={1000}
                className="ml-16 w-[70%] relative before:absolute before:content-['0'] before:top-4 after:absolute after:content-['10000'] after:right-0 after:top-4"
                id="price_range"
                title="Price range"
                name="price"
                onChange={handleChange}
              />
              <div
                className="absolute top-[-22px] left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-1 transition-opacity duration-200"
                id="tooltip"
              >
                50
              </div>
            </div>
          </div>
        </div>

        {/* Apply filter button */}
        <div className="mt-8 ml-16">
          <button
            className="p-2 rounded-3xl bg-[#ec4899] text-white flex justify-center"
            onClick={fetchProducts}
          >
            {loading ? (
              <CircularProgressBar className="w-8 h-7" />
            ) : (
              "Apply Filter"
            )}
          </button>
        </div>
      </div>
      {/* only visible in mobile */}
      <div className="text-4xl cursor-pointer fixed bottom-10 right-4 bg-[#ec4899] p-4 rounded-full z-30 block md:hidden">
        {showFilterBox ? (
          <ImCross
            className="text-white text-lg"
            onClick={() => setShowFilterBox(!showFilterBox)}
          />
        ) : (
          <FaFilter
            className="text-white text-lg"
            onClick={() => setShowFilterBox(!showFilterBox)}
          />
        )}
      </div>

      <div className="flex-[3] h-screen overflow-y-scroll py-8">
        <p className="text-center text-lg md:text-4xl font-bold">
          Explore the collection of Products
        </p>
        {/* products div */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 p-4 gap-4 ">
          {products.length ? (
            products.map((item, index) => (
              <Product product={item} key={index + item.title} />
            ))
          ) : (
            <div className="w-screen h-screen translate-x-[-20%] translate-y-[-20%] flex justify-center items-center ">
              {loading ? (
                <CircularProgressBar className="w-16 h-14" />
              ) : (
                <p className="text-2xl">No Products</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
