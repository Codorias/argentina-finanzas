import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import WhyInvest from "./components/WhyInvest";
import ClientSegments from "./components/ClientSegments";
import Services from "./components/Services";
import Costos from "./components/Costos";
import TrustSafety from "./components/TrustSafety";
import Process from "./components/Process";
import RetirementCalculator from "./components/RetirementCalculator";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
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
        <WhyInvest />
        <ClientSegments />
        <TrustSafety />
        <Services />
        <Costos />
        <Process />
        <RetirementCalculator />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyBottomBar />
    </>
  );
}
