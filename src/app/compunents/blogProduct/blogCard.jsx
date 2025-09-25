"use client" ; // Next.js client component 
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


import {  useForm } from "react-hook-form"

const FormDataBlog = ()=>{
  const [uploading,setUploading] = useState(false)

  const  {register, handleSubmit, formState : {errors},  } = useForm();

  const router = useRouter()
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  // for image
  const onSubmitData = async (data) =>{
    setUploading (true)

    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

 
    try {
      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=9bdca7d5c371cfe7d01ef1333f8d64fc", // from imagebb tool
      formData)

      const imageUrl = res?.data?.data?.url;
      const productData = {
       title:data?.title,
      image:imageUrl,
      description:data.description,
      };
        console.log(productData);

    await axios.post(`${BACKEND_URL}/api/blog/blog-create",productData`)
    alert("blog added successfully")
    router.push("/addBlog")

    }

 

  catch (error) {
  console.error("Error uploading image:", error);
  
    }finally{
      setUploading(false)
    }
  }
  return (
    <div className='max-w-2xl mx-auto py-10 shadow-xl  bg-green-300 rounded-2xl mt-4 px-7 '>
    
        <h1 className='text-2xl font-semibold mb-6 text-center mbt2'>Add a new Blog</h1>
         <form onSubmit={handleSubmit(onSubmitData)} >
       <div>
        <label className=' font-medium '> Title :        </label>
          <input type="text" 
          className='w-full border p-2 rounded-2xl'
          {...register("title", {required:true})}
           />
           {errors.title && <p>Title is must be required</p>}
         
       </div>
       <div>
        <label className=' font-medium '> Image :        </label>
          <input type="file" 
          accept='image/*'
          className='w-full border p-2 rounded-2xl'
          {...register("image", {required:true})}
           />
           {errors.image && <p>Image is must be required</p>}
         
       </div>
       <div>
        <label className=' font-medium '> description :        </label>
          <input type="text" 
          className='w-full border p-2 rounded-2xl'
          {...register("description", {required:true})}
           />
           {errors.description && <p>Description is must be required</p>}
         <br />
       </div>
     <div className='flex mx-auto justify-center py-4'>
        <button type='submit' className='bg-blue-800 text-white p-3 px-6 rounded-2xl '
        disabled={uploading}>
        {uploading? "Uploading" : "Add card"}
       </button>
     </div>
         </form>
    </div>
  )
}

export default FormDataBlog