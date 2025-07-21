"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";

const FreeShippingBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border border-red-400 rounded-xl p-4 bg-white shadow-md max-w-5xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Truck className="text-red-500 w-7 h-7" />
          <span className="font-semibold text-lg text-gray-600">
            FREE SHIPPING
          </span>
        </div>
      </div>
      <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
        Free Delivery Now On Your First Order and over $200
      </p>

      <p className="text-lg font-bold text-gray-800 text-center md:text-right">
        - Only <span className="text-red-500">$200*</span>
      </p>
    </motion.div>
  );
};

export default FreeShippingBanner;
