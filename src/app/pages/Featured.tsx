"use client";
import React from "react";
import img from "../../../constants/images/img";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const data = [
  {
    title: "Electronics",
    image: img.bannerImg,
    icons: "fas fa-laptop",
  },
  {
    title: "Electronics",
    image: img.bannerImg,
    icons: "fas fa-laptop",
  },
  {
    title: "Electronics",
    image: img.bannerImg,
    icons: "fas fa-laptop",
  },
  {
    title: "Electronics",
    image: img.bannerImg,
    icons: "fas fa-laptop",
  },
];
function Featured() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of products across various categories. Find
            everything you need, from electronics to fashion, all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-all duration-300 z-10"></div>
              <Image
                src={category.image}
                alt={category.title}
                className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center"></div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-white/80 mb-4 hidden group-hover:block transition-all duration-300">
                  Explore our collection of premium{" "}
                  {category.title.toLowerCase()} products
                </p>
                <Button className="!rounded-button whitespace-nowrap bg-white text-indigo-600 hover:bg-gray-100 cursor-pointer">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
