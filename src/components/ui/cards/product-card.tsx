import Button from "../button";
import Image from "next/image";

const numberFormatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ProductCard({
  title,
  price,
  discount,
  image,
}: {
  title: string;
  price: number;
  discount: number;
  image: string;
}) {
  const discountedPrice = price - (discount / 100) * price;

  return (
    <div className="bg-white rounded-[15px] p-1 border border-border group hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[1.1] mb-4 overflow-hidden rounded-[11px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {discount > 0 && (
          <div className="absolute top-0 left-0 bg-[#4F5B1C] text-white text-[13px] font-bold px-3 py-1.5 rounded-br-[12px] z-10">
            {discount}%
          </div>
        )}
      </div>
      <div className="space-y-3 px-3 pb-4">
        <h3 className="text-body-3 font-medium text-dark">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-title-4 font-bold text-dark">
              ${numberFormatter.format(discountedPrice)}
            </span>
            {discount > 0 && (
              <span className="text-muted-foreground line-through text-[12px]">
                ${numberFormatter.format(price)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="px-4 py-2 text-[13px] leading-tight font-medium bg-[#607315] hover:bg-[#4F5B1C]"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
