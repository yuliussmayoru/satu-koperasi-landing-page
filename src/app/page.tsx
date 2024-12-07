import Features from "@/components/features";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Pricing from "@/components/pricing";
import ServicesSection from "@/components/services";
import Testiomnials from "@/components/testimonials";


export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ServicesSection />
      <Features />
      <Pricing />
      <Testiomnials />
    </div>
  );
}
