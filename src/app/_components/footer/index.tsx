import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";

export default function Footer() {
  const products = [
    { label: "Shop all", href: "#" },
    { label: "Skin care", href: "#" },
    { label: "Face care", href: "#" },
    { label: "Body care", href: "#" },
    { label: "Hair care", href: "#" },
  ];

  const information = [
    { label: "About us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const more = [
    { label: "Privacy policy", href: "#" },
    { label: "Terms of service", href: "#" },
    { label: "Shipping & returns", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <Image
          src="/images/icons/Facebook.png"
          alt="Facebook"
          width={24}
          height={24}
        />
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <Image
          src="/images/icons/Instagram.png"
          alt="Instagram"
          width={24}
          height={24}
        />
      ),
      href: "#",
    },
    {
      name: "WhatsApp",
      icon: (
        <Image
          src="/images/icons/Whatsapp.png"
          alt="WhatsApp"
          width={24}
          height={24}
        />
      ),
      href: "#",
    },
    {
      name: "YouTube",
      icon: (
        <Image
          src="/images/icons/Youtube.png"
          alt="YouTube"
          width={24}
          height={24}
        />
      ),
      href: "#",
    },
  ];

  return (
    <footer className="bg-primary text-white pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-12 lg:gap-8 mb-16">
          {/* Products Column */}
          <div className="lg:col-span-2">
            <h3 className="text-body-1 font-sans mb-6 font-medium">Products</h3>
            <ul className="space-y-4">
              {products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-3 text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          <div className="lg:col-span-2">
            <h3 className="text-body-1 font-sans mb-6 font-medium">Information</h3>
            <ul className="space-y-4">
              {information.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-3 text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div className="lg:col-span-2">
            <h3 className="text-body-1 font-sans mb-6 font-medium">More</h3>
            <ul className="space-y-4">
              {more.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-3 text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-title-3 font-sans mb-6 font-medium">
              Subscribe to our newsletter
            </h3>
            <div className="relative mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white text-dark rounded-full py-5 pl-6 pr-40 outline-none text-body-3 placeholder:text-muted-foreground"
              />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 pb-10 text-center">
          <p className="text-caption text-white/80">
            Copyright &copy; 2026 Oranic. All Right Reserved
          </p>
        </div>
      </div>

      {/* Large Footer Text */}
      <div className="container mx-auto px-4 md:px-10 pb-10 md:pb-20">
        <div className="relative w-full flex justify-center">
          <h1
            className={cn(
              "text-[18vw] lg:text-[22vw] leading-[0.8] font-sans font-bold text-white/20 select-none",
              "bg-gradient-to-t from-white/0 via-white/20 to-white/40 bg-clip-text text-transparent"
            )}
            style={{ marginBottom: "-0.05em" }}
          >
            ORANIC
          </h1>
        </div>
      </div>
    </footer>
  );
}
