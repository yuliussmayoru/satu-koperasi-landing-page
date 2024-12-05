import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import ServicesSection from "@/components/services";


export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ServicesSection />
    </div>
  );
}
