import { Header } from "@/components/Layout/Header";
import { Hero } from "@/components/Layout/Hero";
import { Features } from "@/components/Sections/Features";
import { Categories } from "@/components/Sections/Categories";
import { FeaturedProducts } from "@/components/Sections/FeaturedProducts";
import { Footer } from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
