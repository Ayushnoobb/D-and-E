import React from 'react'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/Footer'

import { Noto_Sans } from 'next/font/google';
const noto = Noto_Sans({ subsets: ["latin"] , weight:["700"] });


export default function Layout({children}) {
  return (
    <>
      <Navbar />
        <main className={noto.className} id="#">{children}</main>
      <Footer />
    </>
  )
}
