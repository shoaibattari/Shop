import Link from "next/link";
import React from "react";

const category = [
  { name: "All Products", href: "/products" },
  { name: "Classes", href: "/classes" },
  { name: "Subjects", href: "/subjects" },
];
const classes = [
  { name: "Class-1", href: "/classes/e1cb5466-1456-4ba0-901f-25080696224f" },
  { name: "Class-2", href: "/classes/1f55e976-dcca-4ab7-95d2-1d6ccb16d7b3" },
  { name: "Class-3", href: "/classes/2b047a0f-9a81-49a6-a890-9b1c02d2168b" },
  { name: "Class-4", href: "/classes/12b43dbd-1cce-4aa9-9bac-4a2aee960c3f" },
];
const subjects = [
  { name: "English", href: "/subjects/7420341f-9b8c-4dd7-8fb8-eb4620e77e81" },
  { name: "Urdu", href: "/subjects/e0f7f9e7-9770-4f19-93b6-9caf19299887" },
  {
    name: "Mathematics",
    href: "/subjects/1bcac3fe-55c9-4cf8-a65f-d2134a98e665",
  },
  { name: "Islamiat", href: "/subjects/f3b2aa3f-0bb3-4a5a-94cf-600fc808e2d2" },
];

export default function Footer() {
  return (
    <footer className=" bg-gray-100 text-gray-600 body-font">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className=" font-extrabold text-xl">SS-BOOKS</span>
            </a>
            <p className="mt-2 text-lg text-gray-500">
            Unlock Knowledge, Empower Minds: Your One-Stop School Bookshop!
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" title-font font-bold text-gray-900 tracking-widest text-sm mb-3 underline underline-offset-4">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                {category.map((ele) => (
                  
                  <li>
                    <Link
                    key={ele.name}
                      className="text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-2"
                      href={ele.href}
                    >
                      {ele.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 underline underline-offset-4">
                SUBJECTS
              </h2>
              <nav className="list-none mb-10">
                {subjects.map((ele) => (
                  <li>
                    <Link
                    key={ele.name}
                      className="text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-2"
                      href={ele.href}
                    >
                      {ele.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 underline underline-offset-4">
                CLASSES
              </h2>
              <nav className="list-none mb-10">
                {classes.map((ele) => (
                  <li>
                    <Link
                    key={ele.name}
                      className="text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-2"
                      href={ele.href}
                    >
                      {ele.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div >
          <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              <Link
                href="https://github.com/shoaibattari"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                © 2023 Shoaib Memon —
              </Link>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
