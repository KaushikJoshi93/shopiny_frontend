'use client'
import { axios } from '@/helper/axios'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';

const page = () => {

  const getCartSize = async()=>{
    let res = await axios.get("/cart/find/cartsize");
    let data =  res.data;
    toast.success("CartSize is : "+data.cartSize)
  }

  useEffect(()=>{
    getCartSize();
  },[])
  return (
    <div>
        Cart Page
    </div>
  )
}

export default page