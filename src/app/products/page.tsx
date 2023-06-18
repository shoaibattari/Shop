import Image from "next/image";
import React from "react";
import { client } from "../../lib/sanityClient";

import { urlFoImage } from "../../../sanity/lib/image";
import Link from "next/link";

const getProductData = async () => {
  const res = await client.fetch(
    '*[_type=="product"]{title,price, Slug, _id, description, image, price, subject ->{name}, classes ->{Classes}}'
  );

  return res;
};

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

export default async function Home() {
  const data: Iproduct[] = await getProductData();
  // console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center underline">
          ALL PRODUCTS
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link
              key={product.Slug.current}
              href={`/products/${product.Slug.current}`}
            >
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 ">
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

                    <p className="text-2xl  text-gray-900 mt-5  font-extrabold ">
                      {product.price} Rupees
                    </p>
                  </div>
                </div>
                {/* <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full">
                Add To Cart
              </button> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
