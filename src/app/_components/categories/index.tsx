"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import ArrowLeft from "@/icons/arrow-left";
import ArrowRight from "@/icons/arrow-right";
import Button from "@/components/ui/button";
import BlurCard from "@/components/ui/cards/blur-card";

const categories = [
  {
    title: "FACE CARE",
    image: "/images/categories/face-care.png",
  },
  {
    title: "BODY CARE",
    image: "/images/categories/body-care.png",
  },
  {
    title: "HAIR CARE",
    image: "/images/categories/hair-care.png",
  },
  {
    title: "ORGANIC",
    image: "/images/categories/oranic.png",
  },
  {
    title: "FACE CARE",
    image: "/images/categories/face-care.png",
  },
  {
    title: "BODY CARE",
    image: "/images/categories/body-care.png",
  },
  {
    title: "HAIR CARE",
    image: "/images/categories/hair-care.png",
  },
  {
    title: "ORGANIC",
    image: "/images/categories/oranic.png",
  },
];

export default function Categories() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-20 px-4 md:px-10 container mx-auto bg-background overflow-hidden">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-h4 md:text-h3 font-sans text-dark tracking-tight">
          Choose by category
        </h2>
        <div className="flex gap-4">
          <Button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="border border-gray-200 text-dark"
            size="icon-sm"
            variant="outline"
          >
            <ArrowLeft />
          </Button>
          <Button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className="border border-gray-200 text-dark"
            size="icon-sm"
            variant="outline"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="w-full !overflow-visible md:!overflow-hidden"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <BlurCard
              imageLink={category.image}
              title={category.title}
              link={"#"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
