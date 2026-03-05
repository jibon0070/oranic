"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ArrowLeft from "@/icons/arrow-left";
import ArrowRight from "@/icons/arrow-right";
import BlogCard from "@/components/ui/cards/blog-card";

const blogs = [
  {
    id: 1,
    title: "Your Daily Skincare Routine, Simplified",
    category: "Beauty",
    image: "/images/blogs/1.png",
    link: "#",
  },
  {
    id: 2,
    title: "The Importance of Hydration for Your Skin",
    category: "Beauty",
    image: "/images/blogs/2.png",
    link: "#",
  },
  {
    id: 3,
    title: "How to Choose the Right Cleanser",
    category: "Beauty",
    image: "/images/blogs/3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Natural Ingredients for Glowing Skin",
    category: "Beauty",
    image: "/images/blogs/4.png",
    link: "#",
  },
  {
    id: 5,
    title: "The Best Way to Apply Moisturizer",
    category: "Beauty",
    image: "/images/blogs/5.png",
    link: "#",
  },
  {
    id: 6,
    title: "Morning Routine for a Fresh Face",
    category: "Beauty",
    image: "/images/blogs/6.png",
    link: "#",
  },
];

export default function Blog() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="bg-white">
      <div className="py-20 container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 md:mb-12">
          <h2 className="text-h3 md:text-h2 font-sans text-dark tracking-tight">
            Our Stories
          </h2>
          <div className="flex gap-3">
            <button
              ref={setPrevEl}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-grey-muted flex items-center justify-center hover:bg-grey transition-colors disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-4 h-4 text-dark/60 group-hover:text-dark transition-colors" />
            </button>
            <button
              ref={setNextEl}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-grey-muted flex items-center justify-center hover:bg-grey transition-colors disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-4 h-4 text-dark/60 group-hover:text-dark transition-colors" />
            </button>
          </div>
        </div>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.1}
          navigation={{
            prevEl,
            nextEl,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error navigation type mismatch
            swiper.params.navigation.prevEl = prevEl;
            // @ts-expect-error navigation type mismatch
            swiper.params.navigation.nextEl = nextEl;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard {...blog} />
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>
    </section>
  );
}
