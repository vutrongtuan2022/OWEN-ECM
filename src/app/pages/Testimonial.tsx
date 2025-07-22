"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent } from "@/components/ui/card";
import { start } from "repl";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const Testimonial = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers who love our products and service.
          </p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          navigation
          className="pb-12"
        >
          {[
            {
              name: "John Doe",
              role: "Fashion Enthusiast",
              quote: "This product changed my life! Highly recommend.",
              avatar: "E",
            },
            {
              name: "Michael Chen",
              role: "Tech Reviewer",
              quote: "This product changed my life! Highly recommend.",
              avatar: "s",
            },
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-indigo-100 text-indigo-600">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-700">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
