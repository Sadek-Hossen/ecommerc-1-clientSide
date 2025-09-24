"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardBlog from '../cardBlog/cardBlog';


function ShowBlog() {
    const [DataBlog,setFormDataBlog] = useState([]);
    useEffect(()=>{
        const fetchBlogs = async()=>{
            try {
                const res = await axios.get(`${BACKEND_URL}/api/blog/getAllBlogs`);
                setFormDataBlog(res.data.blogs);

              
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }


        fetchBlogs();
    },[])

  return (
    <div>
        <marquee behavior="" direction="">
              <h1 className='text-center font-semibold md:text-4xl text-xl py-4 font-sans'>Cox’s Bazar, Bangladesh, is the world’s longest sea beach, attracting global travelers with its golden sands, waves, and vibrant culture.</h1>

        </marquee>
              <div className=" w-full h-fit  mt-6 gap-7">
            {DataBlog?.map((blog) => (
                <CardBlog key={blog.id} showBlog={blog} />
            ))}
        </div>
    </div>
  )
}

export default ShowBlog