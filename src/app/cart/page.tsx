"use client";
import { useState } from "react";
import Image from "next/image";
import countdown1 from "../../Components/(ui)/images/slides/countdown1.webp";
import PSlider from "../../Components/(ui)/ProductSlider";
import { AiOutlineDelete } from "react-icons/ai";
import { cookies } from "next/dist/client/components/headers";

// async function getData() {
//   const userID = cookies().get("user_id")?.value;
//   const res = await fetch(`/api/cart?user_id=${userID}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function Home() {
  // const cartData = await getData();

  const [cartItems, setCartItems] = useState([
    {
      img: countdown1,
      title: "New Countdown Book 1 (3rd Edition)",
      link: "/products/new-countdown-book-1-3rd-edition",
      price: 795,
      subject: "Mathematics",
    },
  ]);

  //   const [subtotal, setSubtotal] = useState(0);
  return (
    <>
      <div>
        <section className="px-4 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8 grid md:grid-cols-3 ">
          <div className=" col-span-2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Shopping Cart
            </h1>
            <div className="p-4 grid grid-cols-5  md:grid-cols-5 ">
              {cartItems.map((p) => (
                <>
                  <div>
                    <Image
                      src={p.img}
                      width={250}
                      height={100}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className=" col-span-3 p-2">
                    <p className=" text-sm md:text-2xl font-semibold m-2">
                      {p.title}
                    </p>
                    <p className="text-sm  md:text-1xl m-2">{p.subject}</p>
                    <p className=" text-md md:text-2xl font-bold m-2">
                      {p.price}
                    </p>
                  </div>
                  <div className="p-5">
                    <p>
                      <AiOutlineDelete className="text-2xl font-semibold hover:cursor-pointer" />
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl p-3 sm:w-[595px] md:w-auto m-10 ">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 p-5 ">
              Order Summary
            </h2>

            <div className="grid grid-cols-2 border-b-2 border-gray-300 p-4">
              <p className="text-md lg:text-2xl ">Quantity:</p>
              <p className="text-md lg:text-2xl text-right ">
                {cartItems.length} product
              </p>
            </div>
            <div className="grid grid-cols-2 border-b-2 border-gray-300 p-4">
              <p className="text-md lg:text-2xl ">Subtotal: </p>
              <p className="text-md lg:text-2xl text-right ">
                {cartItems[0].price}
              </p>
            </div>
            <button className="mt-12 bg-blue-200 w-full rounded-full  text-cyan-900 hover:bg-blue-800 hover:text-white p-3  shadow-lg font-medium transition-colors">
              Proceed to checkout
            </button>
          </div>
        </section>
      </div>
      <div>
        <PSlider />
      </div>
    </>
  );
}
