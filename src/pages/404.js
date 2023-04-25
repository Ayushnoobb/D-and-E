import React from 'react'
import Link from 'next/link'


function PageNotFound() {
  // let currentPage = useRouter().asPath
  // console.log(router)
  return (
    <>
      <div className='not-found container w-full flex items-center justify-center bg-yellow-gradient flex-col'>
        <h3 className='text-red-500 mb-8 text-5xl font-extrabold'>OOPS !</h3>
        <p className='text-2xl font-semibold mb-6'>Page , you are looking for is not availabe at moment</p>
        <Link className="button" href={"/"}><span>Go to Home</span></Link>
      </div>
    </>
  )
}

export default PageNotFound