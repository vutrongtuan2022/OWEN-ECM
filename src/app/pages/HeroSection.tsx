"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from "../../../constants/images/img";

function HeroSection() {
  return (
    <section className="relative bg-white py-20 md:py-32 px-6 lg:px-16 overflow-hidden">
      {/* HeroSection */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-100 border-r-purple-100 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-60] w-80 h-80 bg-blue-100 rounded-full blur-3xl z-0" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Redefine your <span className="text-primary">Wardrobe</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Step into a world of minimalist luxury. Discover styles that speak
            confidence, class, and comfort - all in one pace.
          </p>
          <div className="lex flex-wrap gap-4">
            <Link href={"/"}>
              <Button size={"lg"}>Shop collection</Button>
            </Link>{" "}
            <Link href={"/"}>
              <Button variant={"outline"} size={"lg"}>
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-96 md:h-[-500px]"
        >
          <Image
            src={img.bannerImg}
            alt="banner"
            fill
            className="object-cover rounded-xl shadow-md"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
