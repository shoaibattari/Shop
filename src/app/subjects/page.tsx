import Image from "next/image";
import React from "react";
import { client } from "../../lib/sanityClient";

import { urlFoImage } from "../../../sanity/lib/image";
import Link from "next/link";

const getProductData = async () => {
  const res = await client.fetch(
    '*[_type=="subject"]{Subject,_id, image,Slug}'
  );

  return res;
};

interface Iclasses {
  Subject: string;
  _id: string;
  Slug: { current: string };
  image: string;
}

export default async function subject() {
  const data: Iclasses[] = await getProductData();
  // console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center underline">
          Subjects
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((subject) => (
            <div key={subject._id} className="group relative">
              <Link
                key={subject.Slug.current}
                href={`/subjects/${subject._id}`}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 sm:group-hover:scale-125 delay-105 duration-700 ease-linear ">
                  <Image
                    src={urlFoImage(subject.image).url()}
                    alt={subject.Subject}
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
