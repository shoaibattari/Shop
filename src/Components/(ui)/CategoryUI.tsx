import React from "react";
import Image from "next/image";
import { FC } from "react";

import { urlFoImage } from "../../../sanity/lib/image";

interface ICategory {
  Classes: string;
  _id: string;
  Slug: { current: string };
  image: string;
}

const CategoryUI: FC<{ category: ICategory }> = ({ category }) => {
  return (
    <>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 sm:group-hover:scale-125 delay-105 duration-500 ease-linear ">
        <Image
          src={urlFoImage(category.image).url()}
          alt={category.Classes}
          width={950}
          height={450}
          className="h-full w-full lg:h-full lg:w-full"
        />
      </div>
    </>
  );
};

export default CategoryUI;
