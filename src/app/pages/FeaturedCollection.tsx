"use client";
import React from "react";
import img from "../../../constants/images/img";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const FeaturedCollection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center ml-4">
          <div>
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4 ">
              Featured Collection
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Summer Essentials
            </h2>
            <p className="text-gray-600 mb-8">
              Discover our exclusive summer collection, designed to keep you
              cool and stylish all season long.
            </p>
            <ul className="space-y-3">
              {[
                "Lightweight Fabrics",
                "Vibrant Colors",
                "Breathable Styles",
                "30-Day Returns",
              ].map((item, index) => (
                <li key={index} className="items-center">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              className="!rounded-button whitespace-nowrap bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 px-8 py-6 text-lg mt-6
          "
            >
              Shop Colections
            </Button>
          </div>
          <div className="relative">
            <Image
              src={img.phuKientrangPhuc}
              alt="Summer collection"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-100 rounded-full p-2"></div>
                <h4 className="font-bold">Free Shopping</h4>
              </div>
              <p className="text-gray-600 text-sm">
                On all orders over $50. International shipping available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
