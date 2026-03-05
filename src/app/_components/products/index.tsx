"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import ProductCard from "@/components/ui/cards/product-card";

const categories = ["Face Care", "Body Care", "Hair Care", "Organic"];

const products: {
  id: string;
  title: string;
  price: number;
  discount: number;
  image: string;
  link: string;
}[] = faker.helpers.multiple(
  (_, i) => ({
    id: faker.string.ulid(),
    title: faker.commerce.productName(),
    discount:
      faker.number.int({ min: 0, max: 100 }) >= 70
        ? faker.number.int({ min: 10, max: 25 })
        : 0,
    image: `/images/products/${i + 1}.png`,
    link: "#",
    price: faker.number.int({ min: 10, max: 100 }),
  }),
  { count: 8 },
);

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Face Care");

  return (
    <section className="bg-white">
      <div className="py-20 container mx-auto px-4 md:px-8">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div className="space-y-8">
            <h2 className="text-h4 md:text-h3 font-sans text-dark tracking-tight">
              Popular Products
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  variant={category === activeCategory ? "default" : "gray"}
                  size="sm"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <Link href="/products" className="mt-2">
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              View all
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
