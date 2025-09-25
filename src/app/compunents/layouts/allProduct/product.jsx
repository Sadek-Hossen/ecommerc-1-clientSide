"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import Card from "../product-card/card";

function Product() {
  const [products, setProducts] = React.useState([]);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  console.log("Backend URL:", BACKEND_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respos = await axios.get(`${BACKEND_URL}/api/product`);
        console.log("Products:", respos.data.products);
        setProducts(respos.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Something went wrong while fetching products.");
      }
    };
    fetchData();
  }, [BACKEND_URL]);

  return (
    <div>
      <h1 className="text-center py-6 text-2xl font-bold">
        Here our All products
      </h1>

      <Link href={"/manage"}>
        <button className="bg-red-500 ml-10 mb-6 cursor-pointer text-white px-4 py-2 rounded">
          delete product
        </button>
      </Link>

      <div className="container mx-auto grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((p) => (
          <Card product={p} key={p._id} />
        ))}
      </div>
    </div>
  );
}

export default Product;
