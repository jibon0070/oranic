import Hero from "./_components/hero";
import Merquee from "./_components/merquee";
import Features from "./_components/features";
import Categories from "./_components/categories";
import Products from "./_components/products";
import Hero2 from "./_components/hero2";
import Reviews from "./_components/reviews";
import BeforeAndAfter from "./_components/before-and-after";

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
    </main>
  );
}
