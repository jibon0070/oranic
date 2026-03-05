import LinkIcon from "@/icons/link-icon";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";

const numberFormatter = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ItemCard({
  title,
  price,
  discount = 0,
  image,
  link,
}: {
  title: string;
  price: number;
  discount?: number;
  image: string;
  link: string;
}) {
  return (
    <div className="bg-white p-[20px] rounded-[16px] space-y-6 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 group">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <div className="text-title-3 leading-[var(--text-title-3--line-height)]">
            {title}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-title-3 leading-[var(--text-title-3--line-height)]">
              ${numberFormatter.format(price - (discount / 100) * price)}
            </span>
            <span className="text-muted-foreground line-through text-body-2">
              {discount > 0 && `$${numberFormatter.format(price)}`}
            </span>
          </div>
        </div>
        <Link href={link}>
          <Button
            size="icon"
            variant="outline"
            className="border-gray-200 transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
          >
            <LinkIcon />
          </Button>
        </Link>
      </div>
      <div className="overflow-hidden rounded-[8px]">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="rounded-[8px] transition-transform duration-500 group-hover:scale-105 w-full h-auto"
        />
      </div>
    </div>
  );
}
