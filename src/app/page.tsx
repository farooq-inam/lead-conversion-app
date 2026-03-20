import Navbar        from "@/components/Navbar";
import Hero          from "@/sections/Hero";
import Clients       from "@/sections/Clients";
import Brands        from "@/sections/Brands";
import Services      from "@/sections/Services";
import CTABanner     from "@/sections/CTABanner";
import Credibility   from "@/sections/Credibility";
import CubeStore     from "@/sections/CubeStore";
import Testimonials  from "@/sections/Testimonials";
import QuoteSection  from "@/sections/QuoteSection";
import Footer        from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyCTA     from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Brands />
        <CubeStore />
        <Services />
        <CTABanner />
        <Credibility />
        <Testimonials />
        <QuoteSection />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppFloat />
    </>
  );
}