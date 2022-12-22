import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <div className='flex-col mt-4 shadow-2xl rounded-lg w-full border-2 border-gray-300 '>
        <div className='w-full '>
            <Image src="/images/watch.png" width="100" height="100" className="w-full h-full rounded-t-lg"/>
        </div>
        <div className='flex flex-col items-center'>
            <p>Rolex</p>
            <p className='text-gray-400 text-sm'>₹9000</p>
        </div>
    </div>
  )
}

export default Product