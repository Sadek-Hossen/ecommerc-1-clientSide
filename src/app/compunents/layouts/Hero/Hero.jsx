
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
     

      {/* Hero section with Next.js Image */}
      <div className="relative w-full h-[38rem]">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
             My smart <span className="text-blue-400">Shop</span> Project
            </h1>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;