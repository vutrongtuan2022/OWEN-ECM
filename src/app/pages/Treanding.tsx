"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import img from "../../../constants/images/img";
import { Card } from "@/components/ui/card";
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
        <Tabs defaultValue="account" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/80 backdrop-blur-sm">
              <TabsTrigger
                value="all"
                className="!rounded-button whitespace-nowrap"
              >
                All Prodducts
              </TabsTrigger>{" "}
              <TabsTrigger
                value="electronics"
                className="!rounded-button whitespace-nowrap"
              >
                Electronics
              </TabsTrigger>{" "}
              <TabsTrigger
                value="fashion"
                className="!rounded-button whitespace-nowrap"
              >
                Fashion
              </TabsTrigger>{" "}
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
                <Card key={index} className="overflow-hidden"></Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Treanding;
