import React from "react";
import Hero from "@/Components/(ui)/hero";
import WhatWeDo from "@/Components/(ui)/WhatWeDo";
import Category from "@/Components/(ui)/Category";
import Slider from "@/Components/(ui)/slider";
import Location from "@/Components/(ui)/Location";
import PSlider from "@/Components/(ui)/ProductSlider"
function page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <Hero />
        <Category />
        <div className="md:-mt-48">
        <Slider /></div>
        <PSlider />
        <WhatWeDo />
        <Location />
      </div>
    </div>
  );
}

export default page;
