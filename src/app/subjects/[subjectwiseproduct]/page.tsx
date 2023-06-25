import Image from "next/image";
import React from "react";
import { client } from "../../../lib/sanityClient";

import { urlFoImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import MultiProducts from "@/Components/MultiProducts";
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

const getProductData = async (subjectwiseproduct: string) => {
  const res = await client.fetch(
    '*[_type=="product" && subject._ref== $subjectwiseproduct ]{title,price, Slug, _id, description, image, price, subject ->{Subject}, classes ->{Classes}}',
    { subjectwiseproduct }
  );
  // console.log(subjectwiseproduct);
  return res;
};

export default async function subjectwiseproduct({
  params,
}: {
  params: { subjectwiseproduct: string };
}) {
  const data: Iproduct[] = await getProductData(params.subjectwiseproduct);
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
              <MultiProducts product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
