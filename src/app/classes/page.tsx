import React from "react";
import { client } from "../../lib/sanityClient";
import Link from "next/link";
import PSlider from "../../Components/(ui)/ProductSlider"
import CategoryUI from "@/Components/(ui)/CategoryUI";


export const metadata = {
  title: 'Class Wise Category',
  description: 'This is page is show Classes Category ',
}


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

export default async function classes() {
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
                <CategoryUI category={classes} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <PSlider/>
    </div>
  );
}
