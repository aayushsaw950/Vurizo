import HeroSection from "../components/services/HeroSection";
import ServicesGrid from "../components/services/ServicesGrid";

import SecuritySection from "../components/services/SecuritySection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Workflow from "../components/services/Workflow";

export default function ServicesPage() {
  return (
    <>
    <Navbar/>
    <main className="flex-grow grid-bg">
      <HeroSection />
      <ServicesGrid />
      <Workflow/>
      <SecuritySection />
    </main>
    <Footer/>
    </>
  );
}