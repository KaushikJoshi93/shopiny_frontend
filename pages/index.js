import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shopiny.in - One stop destination for shopping</title>
        <meta name="description" content="A site where you can wear code</>" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Inter:wght@100;200;300;400;500;600;700;800&family=Josefin+Sans:wght@300;400;600&family=Montserrat:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <main className='overflow-x-hidden' >
        {/* navbar for the website */}
        <Navbar />
        {/* hero section */}
        <div className='flex h-96 mt-5'>
          <div className='flex-1 flex flex-col items-center p-12'>
              <div className='mb-5'>
                <p className='text-5xl font-kcursive text-pink-500'>Fashion Sale</p>
              </div>
              <div className='mb-5'>
                <p className='text-3xl font-semibold font-sans'>Minimal Menz Style</p>
              </div>
              <div className='mb-5 text-center flex justify-center text-start'>
                <p className='text-gray-400 font-medium w-[90%]'>Your one stop destination for shopping , where you can buy
                 various things at the most affordable price </p>
              </div>
              <div className='mb-5'>
                <button className='bg-black text-white p-2 rounded-md pr-12 pl-12'>Shop Now</button>
              </div>
          </div>
          <div className='flex-1 flex justify-center'>
                    <Image src={"/images/hero.png"} width={429} height={682} className=" w-[40%] h-full "/>
          </div>
        </div>

      </main>
    </div>
  )
}
