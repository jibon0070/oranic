import Link from "next/link";
import Image from "next/image";
import LinkIcon from "@/icons/link-icon";

export default function BlurCard({
  imageLink,
  title,
  link,
}: {
  imageLink: string;
  title: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="group relative aspect-[0.85] rounded-[24px] overflow-hidden cursor-pointer block"
    >
      <Image
        src={imageLink}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover overlay with arrow */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="size-14 md:size-16 rounded-full border border-white/60 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition duration-300 backdrop-blur-[15px]">
          <LinkIcon className="w-6 h-6" />
        </div>
      </div>

      {/* Category Label */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="backdrop-blur-[25px] bg-dark/30 border border-white/20 rounded-[20px] py-4 px-7 transition-all duration-300 group-hover:bg-[#4A3728]/50">
          <span className="text-white text-[16px] md:text-[18px] font-sans tracking-[0.12em] font-medium block">
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}
