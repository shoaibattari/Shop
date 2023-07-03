'use client'
import Image from "next/image";
import {FC} from "react"
import { urlFoImage } from "../../../sanity/lib/image";


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
      Classes: string;
    };
  }



const ProductCard: FC<{product:Iproduct}> = ({ product }) => {

const handleAddToCart = async () => {
    const res = await fetch("/api/cart",{
        method:"POST",
        body: JSON.stringify({
            product_id: product._id
        })
    })
    const result = await res.json()
    console.log(result);
}

  return (<>
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    <div className="aspect-h-4 aspect-w-3 rounded-lg lg:block">
      <Image
        src={urlFoImage(product.image).url()}
        alt={product.title}
        className="h-full w-full object-cover object-center hover:scale-105 sm:hover:scale-125 delay-105 duration-500 ease-linear"
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
      <div>
        <div>
          <p className="mt-5 text-base text-gray-600">Description:</p>
          <p className="text-gray-900 font-semibold italic">
            {product.description}
          </p>
        </div>

        <div>
          <p className="mt-5 text-lg text-gray-600">Class:</p>
          <p className="text-gray-900 font-semibold italic">
            {product.classes.Classes}
          </p>
        </div>
        <div>
          <p className="mt-5 text-lg text-gray-600">Subject:</p>
          <p className="text-gray-900 font-semibold italic">
            {product.subject.Subject}
          </p>
        </div>

        <div>
          <button onClick={handleAddToCart} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-3xl w-[50%]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}



export default ProductCard