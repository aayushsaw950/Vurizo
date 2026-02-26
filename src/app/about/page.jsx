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
            I started Vurizo with one clear mission — to help growing businesses replace manual work with intelligent systems that automate operations and unlock growth.
          </p>

          <p>
            With a background in <strong>full-stack engineering</strong> and advanced AI systems, I design custom software, automation workflows, and data-driven solutions that streamline operations, improve lead management, and increase revenue efficiency.
          </p>

          <p>
            At Vurizo, we don’t just build software — we build smart business systems that transform repetitive tasks into scalable, automated processes.
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