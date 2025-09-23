"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({product}) {
  const {name,price,image,category,description} = product 
  return (
    <div className="max-w-xs h-[400px] hover:scale-105 hover:bg-fuchsia-300 transition-transform duration-300 overflow-hidden py-19 bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 ">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {name}
        </h1>

        <p className="mt-1 font-semibold text-sm text-gray-600 dark:text-gray-400">
          {category}
        </p>
        <div className="flex  items-center  justify-between rounded-2xl px-2 py-2">
        <h1 className="text-lg font-bold ">BDT : {price} TK</h1>
    
     

      <Link  href={`/payment?name=${name}&price=${price}&image=${image}`} >
        <button className="px-2 py-1 cursor-pointer hover:bg-blue-400 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded  focus:bg-gray-400 focus:outline-none">
          Add to cart
        </button>
      </Link>
      </div>
       
      </div>
      <Link   href={`/forCardPage?name=${name}&price=${price}&image=${image}&description=${description}&category=${category}`} >
        <div className="flex justify-center items-center mt-10 cursor-pointer relative">
          
      <p className=" text-green-500  bg-gray-800 font-bold p-3 rounded-xl" >see more...</p>

      </div>
        
      </Link>
    
    <Image
        className="object-cover w-[50%] rounded-2xl  mx-auto mt-2 "
        src={image}
        alt={name}
        width={250}
        height={150}
      />
      
 <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      
    </div>
  );
}

export default Card;
