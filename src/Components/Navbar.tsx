"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/products" },
  { name: "Subjects", href: "/subjects" },
  { name: "Classes", href: "/classes" },
];

function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="scroll-m-10 font-extrabold tracking-wide text-4xl md:text-2xl lg:text-4xl">
                SS-BOOKS
              </p>
            </Link>
          </div>
          <div>
            <div
              onClick={() => setOpen(!open)}
              className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu>
            </div>

            <ul
              className={` z-10 md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static left-0 
              w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              {navigation.map((link) => (
                <li
                  key={link.name}
                  className=" md:mr-4 mr-10 text-xl md:my-0 my-7 md:px-4 lg:px-10 "
                >
                  <Link
                    href={link.href}
                    className=" bg-white z-10  text-gray-500 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2  text-md font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <div className="bg-gray-400 rounded-full w-12 h-12 ">
                  <AiOutlineShoppingCart className=" text-4xl cursor-pointer pt-2 ml-1" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
