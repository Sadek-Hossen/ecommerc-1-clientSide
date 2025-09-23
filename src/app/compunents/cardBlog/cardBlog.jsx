"use client";
import React from "react";
import Image from "next/image";


function CardBlog({showBlog}) {
  const {title,image,description} = showBlog ;
  return (
    <div className=" mt-7 mb-4  bg-blue-300 hover:bg-blue-400  hover:scale-105 md:pl-10 transition-transform duration-300 overflow-hidden py-19 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2 md:flex gap-4 w-[90%] mx-auto">
        <h1 className="text-xl font-bold  uppercase ">
          {title}
        </h1>
        
      
      </div>

    <div className="md:flex gap-4 w-[90%] mx-auto ">
        <Image
        className="object-cover w-full h-48 mt-2 rounded-xl hover:scale-105 transition-transform duration-300 md:w-1/3 " 
        src={image}
        alt={title}
        width={320}
        height={192}
      />

        <p className="mt-1 text-sm    ">
          {description}
        </p>
    </div>

    
    </div>
  );
}

export default CardBlog;
