import React from "react";
import Image from "next/image";
import {FC} from "react"

import { urlFoImage } from "../../../sanity/lib/image";


interface Iproduct {
    _id: string;
    title: string;
    price: number;
    Slug: { current: string };
    image: string;
    description: string;
    subject: {
      name: string;
    };
    classes: {
      Classes: string;
    };
  }

  const MultiProducts:FC<{product:Iproduct}> = ({ product }) => {
  return (
    <>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 sm:group-hover:scale-125 delay-105 duration-700 ease-linear	 ">
          <Image
            src={urlFoImage(product.image).url()}
            alt={product.title}
            width={950}
            height={450}
            className="h-full w-full lg:h-full lg:w-full"
          />
        </div>

        <div className="mt-4 flex justify-between md:min-h-[80px]">
          <div>
            <h3 className="text-md text-gray-700">
              <span
                aria-hidden="true"
                className="absolute inset-0 md:min-h-[20px]"
              />
              {product.title}
            </h3>

            <p className="text-1xl md:text-2xl  text-gray-900 mt-5  font-extrabold ">
              {product.price} Rupees
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiProducts;
