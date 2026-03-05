import SparklingStar from "@/icons/sparkling-star";

export default function Merquee() {
  const items = Array(20)
    .fill(0)
    .map((_, i) => <Single key={i} />);

  return (
    <div>
      <div className="bg-primary overflow-hidden flex">
        <div className="animate-marquee flex gap-6 md:gap-12 pr-6 md:pr-12 shrink-0">
          {items}
        </div>
        <div className="animate-marquee flex gap-6 md:gap-12 pr-6 md:pr-12 shrink-0">
          {items}
        </div>
      </div>
    </div>
  );
}

function Single() {
  return (
    <div className="py-4 md:py-6 flex items-center gap-6 md:gap-12 shrink-0">
      <SparklingStar className="fill-white w-8 h-8 md:w-[58px] md:h-[58px]" />
      <span className="text-title-1 md:text-h4 leading-none text-white whitespace-nowrap">
        Skin Care
      </span>
    </div>
  );
}
