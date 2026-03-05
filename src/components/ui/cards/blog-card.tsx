import Image from "next/image";
import Link from "next/link";
import ChevronRight from "@/icons/chevron-right";

interface BlogCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
}

export default function BlogCard({
  title,
  category,
  image,
  link,
}: BlogCardProps) {
  return (
    <div className="flex flex-col gap-6 group">
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-dark" />
          <span className="text-caption text-muted-foreground font-medium">
            {category}
          </span>
        </div>
        <h3 className="text-title-3 md:text-title-2 font-sans text-dark leading-tight line-clamp-2 min-h-[2.4em]">
          {title}
        </h3>
        <Link
          href={link}
          className="flex items-center gap-2 text-primary font-semibold text-body-3 hover:gap-3 transition-all duration-300 w-fit"
        >
          <span>Read more</span>
          <ChevronRight className="w-2 h-2" />
        </Link>
      </div>
    </div>
  );
}
