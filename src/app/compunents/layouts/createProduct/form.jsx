"use client" ; // Next.js client component 
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


import { set, useForm } from "react-hook-form"

const FormDataFile = ()=>{
  const [uploading,setUploading] = useState(false)

  const  {register, handleSubmit, formState : {errors},  } = useForm();

  const router = useRouter()

  // for image
  const onSubmitData = async (data) =>{
    setUploading (true)

    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);

 
    try {
      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=5881ab1f885c0b148bf3c1063be90938", // from imagebb tool
      formData)

      const imageUrl = res?.data?.data?.url;
      const productData = {
       name:data?.name,
       price:parseFloat(data.price),
      image:imageUrl,
      category:data.category,
      description:data.description,
      };
        console.log(productData);

    await axios.post(`${BACKEND_URL}/api/product/product-create",productData`)
    alert("Product added successfully")
    router.push("/")

    }

 

  catch (error) {
  console.error("Error uploading image:", error);
  
    }finally{
      setUploading(false)
    }
  }
  return (
    <div className='max-w-2xl mx-auto py-10 shadow-xl  bg-white rounded-2xl mt-4 px-7 '>
    
        <h1 className='text-2xl font-semibold mb-6 text-center mbt2'>Add a new Product</h1>
         <form onSubmit={handleSubmit(onSubmitData)} >
       <div>
        <label className=' font-medium '> Name :        </label>
          <input type="text" 
          className='w-full border p-2 rounded-2xl'
          {...register("name", {required:true})}
           />
           {errors.name && <p>Name is must be write</p>}
         
       </div>
       <div>
        <label className=' font-medium '> price :        </label>
          <input type="text" 
          step="0.01"
          className='w-full border p-2 rounded-2xl'
          {...register("price", {required:true})}
           />
           {errors.price && <p>price is must be write</p>}
         
       </div>
       <div>
        <label className=' font-medium '> Image :        </label>
          <input type="file" 
          accept='image/*'
          className='w-full border p-2 rounded-2xl'
          {...register("image", {required:true})}
           />
           {errors.image && <p>Name is must be write</p>}
         
       </div>
       <div>
        <label className=' font-medium '> category :        </label>
          <input type="text" 
          className='w-full border p-2 rounded-2xl'
          {...register("category", {required:true})}
           />
           {errors.category && <p>Name is must be write</p>}
         
       </div>
       <div>
        <label className=' font-medium '> description :        </label>
          <input type="text" 
          className='w-full border p-2 rounded-2xl'
          {...register("description", {required:true})}
           />
           {errors.description && <p>Name is must be write</p>}
         
       </div>
     <div className='flex mx-auto justify-center py-4'>
        <button type='submit' className='bg-blue-800 text-white p-3 px-6 rounded-2xl '>
        {uploading? "Uploading" : "Add card"}
       </button>
     </div>
         </form>
    </div>
  )
}

export default FormDataFile