import Image from "next/image";
import React from "react";
import classes from "../(ui)/images/classes.png";
import subjects from "../(ui)/images/subject.png";
import All from "../(ui)/images/all.png";
import Link from "next/link";

function Category() {
  return (
    <div>
      <h2 className=" text-red-700 pb-2 text-3xl font-semibold tracking-wider border-b-4 mt-4 text-center">
        PRODUCTS DETAILS
      </h2>

      <div className="grid lg:grid-rows-2 mt-4 sm:grid-flow-col  items-center ">
        <div className=" row-span-2 p-5 hover:scale-105 delay-105 duration-700 ease-linear ">
          <Link href="/products">
            <Image src={All} width={400} height={200} alt="products" />
          </Link>
        </div>
        <div className="lg:row-span-1 p-1    hover:scale-105 delay-105 duration-700 ease-linear">
          <Link href="/classes">
            <Image src={classes} width={400} height={200} alt="classes" />
          </Link>
        </div>
        <div className="lg:row-span-2 p-1  hover:scale-105 delay-105 duration-700 ease-linear ">
          <Link href="/subjects">
            <Image src={subjects} width={400} height={200} alt="subjectsr" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
