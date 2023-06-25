import React from "react";
import { client } from "../../lib/sanityClient";
import Link from "next/link";
import MultiProducts from "@/Components/(ui)/MultiProducts";

const getProductData = async () => {
  const res = await client.fetch(
    '*[_type=="product"]{title,price, Slug, _id, description, image, price, subject ->{name}, classes ->{Classes}}'
  );
  // console.log(res);
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

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link
              key={product.Slug.current}
              href={`/products/${product.Slug.current}`}
            >
              <MultiProducts product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
