import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ClientSegments from "./components/ClientSegments";
import Services from "./components/Services";
import Process from "./components/Process";
import RetirementCalculator from "./components/RetirementCalculator";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Insights from "./components/Insights";
import LeadMagnet from "./components/LeadMagnet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyBottomBar from "./components/StickyBottomBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ClientSegments />
        <Services />
        <Process />
        <RetirementCalculator />
        <About />
        <Testimonials />
        <FAQ />
        <Insights />
        <LeadMagnet />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyBottomBar />
    </>
  );
}
