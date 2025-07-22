"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import img from "../../../constants/images/img";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { convertCoin } from "../../../common/func/convertCoin";
import { Button } from "@/components/ui/button";
const Treanding = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what`s poular among our custumers right now.
          </p>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/80 backdrop-blur-sm">
              <TabsTrigger
                value="all"
                className="!rounded-button whitespace-nowrap"
              >
                All Prodducts
              </TabsTrigger>
              <TabsTrigger
                value="electronics"
                className="!rounded-button whitespace-nowrap"
              >
                Electronics
              </TabsTrigger>
              <TabsTrigger
                value="fashion"
                className="!rounded-button whitespace-nowrap"
              >
                Fashion
              </TabsTrigger>
              <TabsTrigger
                value="home"
                className="!rounded-button whitespace-nowrap"
              >
                Home & Garden
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Start fitness watch",
                  category: "Electronics",
                  price: 450000000,
                  image: img.bannerImg,
                },
                {
                  name: "Aromatherapy diffuser",
                  category: "Home",
                  price: 250000000,
                  image: img.phuKientrangPhuc,
                },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative pt-[100%] overflow-hidden">
                    <Image
                      src={item.image}
                      alt="Item image"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <h3 className="font-bold">{item.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <p className="text-lg font-bold text-indigo-500">
                          {convertCoin(item.price)}
                        </p>
                      </div>
                    </div>
                    <Button className="w-full whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer">
                      continue
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Treanding;
