"use client";

import Image from "next/image";
import ProductCard from "@/components/ui/cards/product-card";
import ArrowLeft from "@/icons/arrow-left";
import ArrowRight from "@/icons/arrow-right";
import StarIcon from "@/icons/star-icon";
import Button from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const REVIEWS = [
  {
    id: 1,
    text: "“I've been using this cream for three weeks now, and the results are simply amazing. My skin has become more moisturized, supple, and radiant. The texture is light, absorbs quickly, and doesn't leave a greasy shine.”",
    name: "Ashley",
    rating: 5.0,
    avatar: "/images/features/learn/1.png",
    mainImage: "/images/card/image-1.png",
    product: {
      title: "Cucumber Extract",
      price: 32.0,
      discount: 25,
      image: "/images/products/4.png",
    },
  },
  {
    id: 2,
    text: "“This hair care routine transformed my dry ends into silky smooth strands. I love the natural scent and how it doesn't weigh my hair down. Definitely my new favorite brand for organic care!”",
    name: "Michael",
    rating: 4.9,
    avatar: "/images/features/learn/2.png",
    mainImage: "/images/categories/hair-care.png",
    product: {
      title: "Hair Serum",
      price: 45.0,
      discount: 10,
      image: "/images/products/6.png",
    },
  },
  {
    id: 3,
    text: "“The face wash is incredibly gentle yet effective. It removes all impurities without stripping my skin of its natural oils. My complexion has never looked clearer or more balanced.”",
    name: "Sarah",
    rating: 5.0,
    avatar: "/images/features/learn/3.png",
    mainImage: "/images/categories/face-care.png",
    product: {
      title: "Gentle Cleanser",
      price: 28.0,
      discount: 15,
      image: "/images/products/2.png",
    },
  },
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".review-prev",
            nextEl: ".review-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className="w-full"
        >
          {REVIEWS.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Review Content */}
                <div className="self-stretch flex flex-col">
                  <div className="space-y-10 flex-1">
                    <h2 className="text-h2 font-sans font-medium text-dark italic leading-tight">
                      Customer Reviews!
                    </h2>

                    <div className="space-y-6">
                      <blockquote className="text-body-1 text-dark/80 leading-relaxed font-sans max-w-lg">
                        {review.text}
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-0.5">
                          <div className="font-sans font-bold text-title-4 text-dark">
                            {review.name}
                          </div>
                          <div className="flex items-center gap-1.5 text-primary">
                            <StarIcon className="w-4 h-4" />
                            <span className="text-title-4 font-bold">
                              {review.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons inside the slide's layout context, but outside for logic */}
                  <div className="flex items-center gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="icon-sm"
                      className="review-prev size-[48px] rounded-full border-dark/10 hover:border-primary hover:bg-primary/5 text-dark/40 hover:text-primary transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft className="size-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon-sm"
                      className="review-next size-[48px] rounded-full border-dark/10 hover:border-primary hover:bg-primary/5 text-dark/40 hover:text-primary transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowRight className="size-5" />
                    </Button>
                  </div>
                </div>

                {/* Right Column: Visual Elements */}
                <div className="flex justify-end">
                  <div className="relative w-full max-w-[540px] aspect-[4/5]">
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                      <Image
                        src={review.mainImage}
                        alt={`Review from ${review.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Overlaid Product Card */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[280px] hidden md:block z-20">
                      <div className="shadow-2xl shadow-black/10">
                        <ProductCard
                          title={review.product.title}
                          price={review.product.price}
                          discount={review.product.discount}
                          image={review.product.image}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

