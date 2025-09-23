"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; 
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/prouduct" },
    { name: "Create Product", path: "/createProduct" },
    // { name: "Blog Create", path: "/blogPage" },
    { name: "Blogs", path: "/addBlog" },


  ];

  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800 mx-auto shadow">
      <div className="container flex items-center justify-between h-16 mx-auto">
        {/* Logo */}
        <div className="font-bold text-blue-600 text-2xl">
          <Link href={"/"}>Smart Shop</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`flex items-center px-4 border-b-2 
                  ${
                    pathname === link.path
                      ? "border-violet-600 text-violet-600 font-semibold" // Active link styling
                      : "border-transparent hover:border-violet-600"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="items-center flex-shrink-0 hidden lg:flex gap-2">
          <button className="px-6 py-2 rounded border border-gray-400">
            <Link href="/login"> Login </Link>
          </button>
          <button className="px-6 py-2 font-semibold rounded bg-violet-600 text-white">
            <Link href="/signIn"> Sign In</Link>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="p-2 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-4 py-2 ${
                pathname === link.path ? "bg-violet-100 text-violet-700 font-semibold" : "hover:bg-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-2 px-4 py-2">
            <button className="px-4 py-2 rounded border border-gray-400">
              <Link href="/login">Login</Link>
            </button>
            <button className="px-4 py-2 font-semibold rounded bg-violet-600 text-white">
              <Link href="/signIn">Sign In</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
