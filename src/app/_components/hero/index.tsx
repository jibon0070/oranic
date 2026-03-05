import ChevronRight from "@/icons/chevron-right";
import Button from "@/components/ui/button";
import ItemCard from "@/components/ui/cards/item-card";

export default function Hero() {
  return (
    <section className="bg-[url('/images/hero.png')] min-h-[calc(100vh-6rem)] bg-cover bg-position-[center_25%] flex items-end justify-center py-10 md:py-0">
      <div className="bg-linear-to-t from-primary/25 to-transparent w-full">
        <div className="container mx-auto md:mb-10 px-4 md:px-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-10 md:gap-4">
          <div className="text-white max-w-md space-y-5 text-center md:text-left">
            <h2 className="text-title-1 md:text-h2 leading-tight md:leading-[var(--text-h2--line-height)] font-bold">
              Natural Makeup For Radiant Skin
            </h2>
            <p className="text-body-2 md:text-title-3 leading-relaxed md:leading-[var(--text-title-3--line-height)]">
              Ponds face wash for women removes all traces of pollution, dirt,
              and impurities to give you a fresh and clean complexion.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button variant="default" size="sm">
                Shop Now
                <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="w-full max-w-[340px]">
            <ItemCard
              title="Cucumber Extract"
              price={32}
              discount={25}
              image="/images/card/image-1.png"
              link="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
