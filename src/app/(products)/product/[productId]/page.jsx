import ProductDataComponent from "@/components/ProductDataComponent";
import { axios } from "@/helper/axios";
import Product from "@/components/Product";
import toast from "react-hot-toast";




const fetchProductDetail = async (productId) => {
  try {
    const res = await axios.get(`/product/find/${productId}`);
    const productInfo = res.data;
    // console.log(productInfo);
    return productInfo;
  } catch (err) {
    toast.error(err?.message || "Error While Fetching Product Details")
  }
};
const fetchProducts = async () => {
  try {
    const res = await axios.get("/product");
    const all_products = res.data;
    return all_products;
  } catch (err) {
    toast.error(err?.message || "Some Error Occured")
  }
};

export default async function ({ params }) {
  const productId = params.productId;
  let productData , products;
  [productData , products] = await Promise.all([fetchProductDetail(productId) , fetchProducts()])
 
  

  return (
    <div className="w-screen h-full flex flex-col">
      <div className="w-full flex-1 flex flex-col md:flex-row">
        <ProductDataComponent productData = {productData}/>
      </div>
      <div className="flex-1">
        <p className="font-bold pl-8 md:pl-14 pt-8 text-2xl">Recommended Products</p>
        <div className="flex flex-col md:flex-row flex-wrap justify-around p-4 md:pl-14">
          {products && products.map((item, index) => (
            <div
              className="flex-1 mr-4 ml-2 flex justify-around flex-wrap"
              key={item.title + index}
            >
              <Product product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
