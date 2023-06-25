import Image from "next/image";
import React from "react";
import { client } from "../../../lib/sanityClient";

import { urlFoImage } from "../../../../sanity/lib/image";
import ProductCard from "@/Components/ProductCard";

interface Iproduct {
  _id: string;
  title: string;
  price: number;
  Slug: string;
  image: string;
  description: string;
  subject: {
    Subject: string;
  };
  classes: {
    name: string;
  };
}
const getProductData = async (product: string) => {
  const res = await client.fetch(
    '*[_type=="product" && Slug.current==  $product]{title,price, Slug, _id, description, image, price, subject ->{Subject}, classes ->{name}}',
    { product }
  );
  // console.log(product);

  return res;
};

export default async function product({
  params,
}: {
  params: { product: string };
}) {
  const data: Iproduct[] = await getProductData(params.product);
  // console.log(data);

  return (
    <div className="bg-white">
      {data.map((product) => (
        <div key={product._id}>
          <div className="md: grid grid-col-2 md:flex  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
           <ProductCard product= {product} />
          </div>
        </div>
      ))}
    </div>
  );
}
