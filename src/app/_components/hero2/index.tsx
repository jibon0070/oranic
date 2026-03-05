"use client";

import ItemCard from "@/components/ui/cards/item-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const sliderProducts = [
  {
    title: "Cucumber Extract",
    price: 32,
    discount: 25,
    image: "/images/card/image-1.png",
    link: "#",
  },
  {
    title: "Aloe Vera Gel",
    price: 28,
    discount: 15,
    image: "/images/products/1.png",
    link: "#",
  },
  {
    title: "Rose Water Mist",
    price: 45,
    discount: 20,
    image: "/images/products/2.png",
    link: "#",
  },
  {
    title: "Vitamin C Serum",
    price: 55,
    discount: 30,
    image: "/images/products/3.png",
    link: "#",
  },
];

export default function Hero2() {
  return (
    <section className="flex items-end h-[110vh] md:h-[95vh] bg-[url('/images/features/features.png')] bg-no-repeat bg-size-[130%] bg-position-[left_40%]">
      <div className="w-full bg-linear-to-t from-primary/10 to-transparent">
        <div className="container mx-auto py-8 md:py-16 flex flex-col md:flex-row gap-4 md:gap-8 justify-center md:justify-between items-center md:items-end px-4 md:px-8">
          {/* Swiper Slider */}
          <div className="w-full max-w-[400px] animate-in fade-in slide-in-from-bottom-10 duration-1000 flex flex-col gap-8">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination",
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
                renderBullet: (_, className) => {
                  return `<span class="${className}"></span>`;
                },
              }}
              className="w-full"
            >
              {sliderProducts.map((product, index) => (
                <SwiperSlide key={index} className="self-end">
                  <ItemCard {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-swiper-pagination flex gap-[5px] justify-center" />
          </div>

          {/* Heading */}
          <div className="max-w-[420px] mb-8 md:mb-0 text-center md:text-right animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <h1 className="text-white text-h3 md:text-h2 font-sans leading-tight">
              Natural Makeup <br /> For Radiant Skin
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
