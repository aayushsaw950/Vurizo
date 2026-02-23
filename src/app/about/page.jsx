"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function AboutPage() {
  return (
    <>
    
   <Navbar/>

    <main className="px-6 lg:px-20 py-24 max-w-5xl mx-auto  grid-bg">
      {/* Heading */}
      <motion.h1 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         variants={{
           hidden: { opacity: 0, scale: 0.95 },
           visible: { opacity: 1, scale: 1 }
         }}
        className="text-4xl lg:text-5xl font-bold text-center mb-12"
      >
        About Vurizo
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Your Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="shrink-0 w-48 h-48 rounded-full overflow-hidden border-2 border-primary mx-auto lg:mx-0"
        >
          <Image
            src="/Aayush_Profile_Photo2.jpg"
            alt="Aayush Kumar"
            width={500}
            height={500}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Intro & Story */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-slate-300"
        >
          <p>
            Hi, I’m <strong>Aayush Kumar</strong>, founder of <strong>Vurizo</strong>. 
            I started Vurizo to help businesses automate repetitive tasks, manage leads efficiently, and scale operations using intelligent AI systems.
          </p>

          <p>
            With expertise in <strong>Full stack development</strong> and now specializing in <strong>LLMs, RAG, and multi-agent workflows</strong>, 
            I design solutions that reduce manual work and increase efficiency. Vurizo empowers businesses to save time, generate more revenue, and
             streamline operations with AI-driven automation.
          </p>

          <p>
            Our goal is simple: transform manual bottlenecks into autonomous systems, helping businesses grow smarter, faster, and more efficiently.
          </p>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-primary text-black px-8 py-3 rounded font-bold hover:scale-105 transition-transform"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </main>
     <Footer/>
    </>
  );
}