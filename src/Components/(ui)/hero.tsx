"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import book from "../../../public/book.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

function MainHero() {
  const VARIANTS = {
    hidden: { opacity: 0, x: "-30vw" },
    visible: { opacity: 1, x: 0 },
    left: { opacity: 0, x: "30vw" },
  };

  return (
    <section className=" bg-cyan-700 2xl:bg-white">
      <div className="px-4 mx-auto overflow-hidden bg-purple-200  max-w-7xl sm:px-6 lg:px-8 rounded-3xl">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
            <div>
              <motion.h2
                className="text-4xl font-bold leading-tight text-cyan-700 sm:text-4xl lg:text-6xl lg:leading-tight"
                initial="hidden"
                animate="visible"
                variants={VARIANTS}
                transition={{ duration: 0.8 }}
              >
                Welcome to Our SS-Bookshop
              </motion.h2>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={VARIANTS}
                transition={{ duration: 1.0 }}
                className="mt-4 text-lg text-cyan-700"
              >
                Unlock Knowledge, Empower Minds: Your One-Stop School Bookshop!
              </motion.p>

              <div className="flex flex-row items-center mt-12 space-x-4 lg:mt-12"></div>
              <div>
                <motion.button
                  initial="hidden"
                  animate="visible"
                  variants={VARIANTS}
                  transition={{ duration: 0.9 }}
                  className="bg-white text-cyan-700 hover:bg-blue-800 hover:text-white px-6 py-3 rounded-full shadow-lg font-medium transition-colors"
                >
                  <Link href="/products">
                    <AiOutlineShoppingCart className="text-3xl inline-block mr-2 " />
                    Start Books Shopping
                  </Link>
                </motion.button>
              </div>
            </div>

            <div className=" hidden md:block">
              <Image
                className="relative w-full max-w-xs mx-auto -mb-20 lg:-mb-28 hover:scale-125 delay-105 duration-500 ease-linear"
                src={book}
                alt="books"
                width={500}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
