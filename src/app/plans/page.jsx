import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PricingGrid from "../components/pricing/PricingGrid";

export default function PricingPage() {
  return (
    <>
    <Navbar/>
    <main className="flex-grow ">
      <PricingGrid />
    </main>
    <Footer/>
    </>
  );
}