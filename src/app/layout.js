import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//     title: 'Shopiny.in - One stop destination for shopping',
//     description: 'A site where you can shop without hesitating',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shopiny.in - One stop destination for shopping</title>
        <meta name="description" content="A site where you can wear code</>" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Inter:wght@100;200;300;400;500;600;700;800&family=Josefin+Sans:wght@300;400;600&family=Montserrat:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Toaster />
        <Navbar />
        <div className='main-content'>
          {children}
        </div>
        <Footer />
        <Script src='./scripts/imp_scripts.js' defer></Script>
      </body>
    </html>
  )
}