import React from "react";
import { client } from "../../lib/sanityClient";
import PSlider from "../../Components/(ui)/ProductSlider"

import Link from "next/link";
import CategoryUI from "@/Components/(ui)/CategoryUI";


export const metadata = {
  title: 'Subjects Wise Category',
  description: 'This is page is show All Subject Category',
}

const getProductData = async () => {
  const res = await client.fetch(
    '*[_type=="subject"]{Subject,_id, image,Slug}'
  );

  return res;
};

interface Iclasses {
  Classes: string;
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
                <CategoryUI category={subject}/>
                
              </Link>
            </div>
          ))}
        </div>
      </div>
      <PSlider />
    </div>
  );
}
