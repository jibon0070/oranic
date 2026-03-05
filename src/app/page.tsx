import Hero from "./_components/hero";
import Merquee from "./_components/merquee";
import Features from "./_components/features";
import Categories from "./_components/categories";
import Products from "./_components/products";
import Hero2 from "./_components/hero2";
import Reviews from "./_components/reviews";
import BeforeAndAfter from "./_components/before-and-after";
import FAQ from "./_components/faq";
import Blog from "./_components/blog";
import Hero3 from "./_components/hero3";
import Footer from "./_components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oranic",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Merquee />
      <Features />
      <Categories />
      <Products />
      <Hero2 />
      <Reviews />
      <BeforeAndAfter />
      <FAQ />
      <Blog />
      <Hero3 />
      <Footer />
    </main>
  );
}
