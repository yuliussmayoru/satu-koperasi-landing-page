import {
    Blog,
    ContactUs,
    Features,
    Footer,
    Hero,
    NavBar,
    Pricing,
    ServicesSection,
    Testimonials,
} from "sections";


export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ServicesSection />
      <Features />
      <Pricing />
      <Testimonials />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}
