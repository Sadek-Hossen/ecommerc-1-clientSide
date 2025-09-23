"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CardContent() {
  const searchparams = useSearchParams();
  const name = searchparams.get("name");
  const price = searchparams.get("price");
  const image = searchparams.get("image");
  const category = searchparams.get("category");
  const description = searchparams.get("description");

  console.log(name, price, image, category, description);

  return (
    <div className="flex flex-col w-[80%] mx-auto bg-green-300 p-4 mt-5 mb-5 rounded-lg shadow-lg">
      <h1 className="text-center font-bold text-4xl py-4">
        Product Name : {name}
      </h1>
      <h1 className="text-center font-bold text-2xl py-2">
        Category: {category}
      </h1>
      <h1 className="text-center font-bold text-2xl">Price: {price} TK</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-10 mb-10 ">
        <img src={image} alt={name} className="rounded-2xl max-w-[70%]" />
        <p>{description}</p>
      </div>
      <Link
        href={`/payment?name=${name}&price=${price}&image=${image}`}
        className="flex mx-auto"
      >
        <div>
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-300 transition-all text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}

export default function CardPage() {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <CardContent />
    </Suspense>
  );
}
