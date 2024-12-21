import { Blog,
        ContactUs,
        Features,
        Footer,
        Hero,
        NavBar,
        Pricing,
        ServicesSection,
        Testiomnials
      } from "sections";


export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ServicesSection />
      <Features />
      <Pricing />
      <Testiomnials />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}
