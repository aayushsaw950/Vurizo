"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-20 pb-10 lg:pt-16 overflow-hidden">
    <div className="z-10 mx-auto max-w-5xl text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
        </span>
        Automate Your Leads & Workflows
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl"
      >
        AI-Powered Automation & Custom SaaS for   <span className="text-primary">Growing Businesses.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl"
      >
       We build smart business systems that combine custom software, automation, and AI to help businesses operate faster and grow revenue.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href="/contact"
        className="flex min-w-[180px] items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-black transition-all hover:brightness-110 glow-primary">
        Book a Free Consultation
        </a>
        {/* <button className="flex min-w-[180px] items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur hover:bg-white/10 transition-all">
        View Our Work
        </button> */}
      </motion.div>
    </div>
  </section>
  );
}