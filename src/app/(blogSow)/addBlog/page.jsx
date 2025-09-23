import ShowBlog from '@/app/compunents/showBlog/showBlog'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div className=''>
      
        <div className='px-6 py-3 grid grid-cols-3 justify-around items-center '>
          <h1></h1>
            <h1 className='text-center font-semibold md:text-4xl text-xl py-4 font-sans'>Here My All Blogs </h1>
          <Link href={"/blogPage"} className='text-right text-blue-600 font-semibold hover:underline'>Create New Blog</Link>
            </div>
        <ShowBlog />
    </div>
  )
}

export default Page