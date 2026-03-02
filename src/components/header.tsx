import Link from "next/link";
import ChevronDown from "@/icons/chevron-down";
import SearchIcon from "@/icons/search-icon";
import BagIcon from "@/icons/bag-icon";
import UserIcon from "@/icons/user-icon";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-border py-6">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-title-1 font-medium tracking-wider text-primary"
          >
            ORANIC
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/category"
            className="flex items-center text-body-2 text-dark hover:text-primary transition-colors"
          >
            Category
            <ChevronDown />
          </Link>
          <Link
            href="/shop"
            className="flex items-center text-body-2 text-dark hover:text-primary transition-colors"
          >
            Shop
            <ChevronDown />
          </Link>
          <Link
            href="/offer"
            className="flex items-center text-body-2 text-dark hover:text-primary transition-colors"
          >
            Offer
            <ChevronDown />
          </Link>
          <Link
            href="/pages"
            className="flex items-center text-body-2 text-dark hover:text-primary transition-colors"
          >
            Pages
            <ChevronDown />
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-dark">
          <button
            className="hover:text-primary transition-colors cursor-pointer"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <button
            className="hover:text-primary transition-colors cursor-pointer relative"
            aria-label="Shopping Bag"
          >
            <BagIcon />
          </button>
          <button
            className="hover:text-primary transition-colors cursor-pointer"
            aria-label="User Profile"
          >
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
