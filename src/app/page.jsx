
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero"

import Stat from "./components/home/Stat";
import Expertise from "./components/home/Expertise";
import CTA from "./components/home/CTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen grid-bg">
    <Navbar />
    <div > {/* Navbar ki height ke liye jagah chhodi */}
      <Hero />
      <Expertise/>
    
    </div>
    <Stat/>
  
    {/* <Workflow/> */}
    
   
    <CTA/>
    <Footer/>
  </main>
  );
}
