import Image from "next/image";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "../lib/sanityClient";

const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

export const getProductData = async () => {
  const res = await client.fetch(
    '*[_type=="product"]{title,price, image}'
  );

  return res;
};

interface Iproduct {
  _id: string;
  title: string;
  price: number;
  image: string;
}

export default async function Home() {
  const data: Iproduct[] = await getProductData();
  // console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          ALL PRODUCTS
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 lg:h-80">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.image}
                  width={950}
                  height={450}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </h3>
                  <p className="text-2xl  text-gray-900 mt-5 font-extrabold">
                    {product.price} Rupees
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
