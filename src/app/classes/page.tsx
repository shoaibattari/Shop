import Image from "next/image";
import React from "react";
import { client } from "../../lib/sanityClient";
import Link from "next/link";

import { urlFoImage } from "../../../sanity/lib/image";

const getProductData = async () => {
  const res = await client.fetch('*[_type=="classes"]{name,_id, image,Slug  }');

  return res;
};

interface Iclasses {
  name: string;
  _id: string;
  Slug: { current: string };
  image: string;
}

export default async function Subjects() {
  const data: Iclasses[] = await getProductData();
  // console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center underline">
          Classes
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((classes) => (
            <div key={classes._id} className="group relative">
              <Link key={classes.name} href={`/classes/${classes._id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 sm:group-hover:scale-125 delay-105 duration-700 ease-linear ">
                  <Image
                    src={urlFoImage(classes.image).url()}
                    alt={classes.name}
                    width={950}
                    height={450}
                    className="h-full w-full lg:h-full lg:w-full"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
