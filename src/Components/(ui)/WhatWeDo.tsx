import Image from "next/image";
import React from "react";
import s1 from "./images/s1.jpg";
import s2 from "./images/s2.jpg";
import s3 from "./images/s3.jpg";

const what = [
  {
    id: 1,
    image: s1,
    imageAlt: "RESEARCH",
    name: "RESEARCH",
    text: "We conduct secondary and primary research for our books and other materials to be published and develop these books and materials in line with the recommendations of the findings of the research and design it before it is sent for printing, publishing and marketing.",
  },
  {
    id: 2,
    image: s2,
    imageAlt: "PUBLICATIONS",
    name: "PUBLICATIONS",
    text: "We confine ourselves to the educational books alone and our first and foremost priority is the school textbooks.....",
  },
  {
    id: 3,
    image: s3,
    imageAlt: "TRAININGS",
    name: "TRAININGS",
    text: "The department of Professional Development administers teachers/staff training programs as its own activity or in response to the request it receives from our clients....",
  },
];

function WhatWeDo() {
  return (
    <>
      <h2 className=" text-red-700 pb-2 text-3xl font-semibold tracking-wider border-b-4  first:mt-0 text-center mt-4">
        WHAT WE DO
      </h2>

      <div className="grid-cols-1  md:grid md:grid-cols-1 lg:grid-cols-3 ">
        {what.map((ele) => (
          <div
            key={ele.id}
            className="m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Image
              className="rounded-t-lg hover:scale-105 delay-105 duration-500 ease-linear "
              src={ele.image}
              alt={ele.imageAlt}
              width={700}
              height={300}
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                {ele.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-auto md:h-48">
                {ele.text}
              </p>
              <button
                type="button"
                className="text-white bg-gray-700 hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WhatWeDo;
