"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // সব product load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product");
        setProducts(res.data.products); // backend যদি array return করে
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // product delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/product/delete-product/${id}`);
      setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed!");
    }
  };

  if (loading) return <p className="p-6 text-center">Loading products...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;
  if (products.length === 0) return <p className="p-6 text-center">No products found</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Products</h1>
      <ul className="space-y-4">
        {products.map(product => (
          <li 
            key={product._id} 
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{product.name}</p>
              <p>${product.price}</p>
            </div>
            <button 
              onClick={() => handleDelete(product._id)} 
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
