import Image from "next/image";
import React from "react";
import { client } from "../../../lib/sanityClient";

import { urlFoImage } from "../../../../sanity/lib/image";


const getProductData = async () => {
  const res = await client.fetch(
    '*[_type=="product" && Slug.current== "new-syllabus-primary-math-book-1"]{title,price, Slug, _id, description, image, price, subject ->{Subject}, classes ->{name}}'
  );

  return res;
};

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

export default async function product() {
  const data: Iproduct[] = await getProductData();
  // console.log(data);

  return (
    <div className="bg-white">
      {data.map((product) => (
        <div key={product._id}>
          <div className="md: grid grid-col-2 md:flex  mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 rounded-lg lg:block">
                <Image
                  src={urlFoImage(product.image).url()}
                  alt={product.title}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={200}
                />
              </div>

              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.title}
                </h1>

                <h2 className=" sr-only">Product information</h2>
                <p className=" mt-5 text-3xl tracking-tight font-extrabold text-gray-900">
                  Price:
                  {product.price}
                </p>

                <div className="space-y-6">
                  <p className="mt-5 text-base text-gray-900">
                    Description:<br />
                    {product.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="mt-5 text-lg text-gray-900">
                    Class:  
                    {product.classes.name}
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="mt-5 text-lg text-gray-900">
                    Subject:  
                    {product.subject.Subject }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
