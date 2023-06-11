import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "All Product", href: "/products" },
  { name: "Subjects", href: "/subjects" },
  { name: "Classes", href: "/classes" },
];

function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl">
                SS-BOOKS
              </p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-md font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
