"use client";

import { useState } from "react";
import Image from "next/image";
import ChevronLeft from "@/icons/chevron-left";
import ChevronRight from "@/icons/chevron-right";

export default function BeforeAndAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="relative aspect-[21/9] w-full overflow-hidden group cursor-col-resize shadow-2xl">
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src="/images/before-and-after/after.png"
          alt="After"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Before Image (Foreground) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src="/images/before-and-after/before.png"
          alt="Before"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Slider Control Handle */}
      <div
        className="absolute inset-y-0 z-10 w-1 flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute inset-y-0 w-1 bg-white" />
        <div className="relative block aspect-square size-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          <div className="flex items-center gap-1.5 text-dark">
            <ChevronLeft className="w-3 h-3 stroke-[3]" />
            <ChevronRight className="w-3 h-3 stroke-[3]" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute inset-x-0 bottom-4 md:bottom-10 z-20 pointer-events-none">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between w-full">
          <div className="text-primary">
            <div className="bg-white/95 backdrop-blur px-4 py-1.5 md:px-8 md:py-3 rounded-lg font-serif text-sm md:text-base font-medium shadow-sm">
              Before
            </div>
          </div>
          <div className="text-primary">
            <div className="bg-white/95 backdrop-blur px-4 py-1.5 md:px-8 md:py-3 rounded-lg font-serif text-sm md:text-base font-medium shadow-sm">
              After
            </div>
          </div>
        </div>
      </div>

      {/* Invisible Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-30"
      />
    </section>
  );
}
