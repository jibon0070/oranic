import Image from "next/image";
import ChevronRight from "@/icons/chevron-right";
import LinkIcon from "@/icons/link-icon";

const avatars = [
  "/images/blogs/1.png",
  "/images/blogs/2.png",
  "/images/blogs/3.png",
  "/images/blogs/4.png",
];

const bottomImages = [
  "/images/hero3/1.png",
  "/images/hero3/2.png",
  "/images/hero3/3.png",
  "/images/hero3/4.png",
];

export default function Hero3() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          {/* Left Card */}
          <div className="bg-primary rounded-[40px] p-8 md:p-16 text-white flex flex-col justify-between min-h-[400px] lg:min-h-0">
            <div className="space-y-6">
              <p className="text-body-3 italic opacity-90 font-serif">Expert skin care</p>
              <h1 className="text-h3 md:text-h2 font-bold leading-tight max-w-lg">
                Redefine timeless beauty <br className="hidden md:block" /> with our care
              </h1>
              <button className="bg-white text-primary rounded-full px-8 py-3.5 text-body-3 font-semibold flex items-center gap-2 hover:bg-white/90 transition-all active:scale-95 w-fit group cursor-pointer">
                Shop Now
                <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  {avatars.map((src, i) => (
                    <div
                      key={i}
                      className="size-12 rounded-full border-2 border-primary overflow-hidden relative"
                    >
                      <Image
                        src={src}
                        alt={`Avatar ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="size-12 rounded-full bg-white flex items-center justify-center text-primary relative z-10 border-2 border-primary">
                    <LinkIcon className="size-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-title-3 font-bold">12k+</span>
                <span className="text-caption opacity-80 uppercase tracking-wider">
                  Customers Rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-[40px] overflow-hidden min-h-[400px] lg:min-h-[600px]">
            <Image
              src="/images/hero3/hero.png"
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-[30px] overflow-hidden"
            >
              <Image
                src={src}
                alt={`Skincare step ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
