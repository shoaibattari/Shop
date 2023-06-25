import React from "react";
import Hero from "@/Components/(ui)/hero";
import MainHero from "@/Components/(ui)/MainHero";

function page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <Hero />
      </div>
    </div>
  );
}

export default page;
