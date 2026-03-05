import Image from "next/image";
import Button from "@/components/ui/button";
import LinkIcon from "@/icons/link-icon";
import Link from "next/link";

const features = [
  {
    icon: "🌿",
    title: "Clean Ingredients",
    description: "No parabens, sulfates, or harsh chemicals",
  },
  {
    icon: "🔬",
    title: "Science-Backed",
    description: "Clinically tested & dermatologist approved",
  },
  {
    icon: "♻️",
    title: "Sustainable",
    description: "Eco-conscious packaging & sourcing",
  },
  {
    icon: "🐰",
    title: "Cruelty-Free",
    description: "Never tested on animals",
  },
];

export default function Features() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-16 md:py-24 lg:pr-16 xl:pr-24 flex flex-col justify-center relative z-10">
            <h2 className="text-h3 md:text-h2 font-medium leading-tight mb-12">
              Rooted in science.
              <br />
              Inspired by nature.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4">
                  <div className="size-12 rounded-lg bg-[#F2F4E8] flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-title-3 font-semibold text-dark">
                      {feature.title}
                    </h3>
                    <p className="text-body-3 text-muted-foreground leading-relaxed max-w-[240px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <Button className="px-10">Learn more</Button>
              <Link href="#" className="flex items-center">
                <div className="flex -space-x-4">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="size-14 rounded-full overflow-hidden relative shadow-sm"
                      >
                        <Image
                          src={`/images/features/learn/${i + 1}.png`}
                          alt="User avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                </div>
                <Button
                  size="icon"
                  className="rounded-full transition-colors z-10 -ml-4"
                >
                  <LinkIcon />
                </Button>
              </Link>
            </div>
          </div>
          {/* Spacer for grid */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Bleeding Image for Desktop */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2">
        <Image
          src="/images/features/features.png"
          alt="Features"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden relative h-[500px] w-full mt-8">
        <Image
          src="/images/features/features.png"
          alt="Features"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
