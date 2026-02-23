"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-6 lg:px-20 py-20 lg:py-32 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            AI Automation & <span className="text-primary italic">Custom SaaS</span> for Growing Businesses
          </h1>

          <p className="text-slate-400 text-lg lg:text-xl max-w-xl leading-relaxed">
            We build systems that automate tasks, manage leads, and streamline operations.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/contact"
             className="bg-primary text-black px-8 py-4 rounded font-bold hover:scale-105 transition-transform flex items-center gap-2">
              Book Consultation <ArrowRight className="w-5 h-5" />
            </a>

            <a href="/plans"
             className="border border-border-dark hover:border-primary/50 text-white px-8 py-4 rounded font-bold transition-colors">
              View Pricing
            </a>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all"></div>
          <div className="relative bg-card-dark border border-border-dark rounded-xl overflow-hidden aspect-video">
            <Image
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              src="/nerual_network.png" 
              width={500}
              height={500}
              alt="Automation Illustration"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}