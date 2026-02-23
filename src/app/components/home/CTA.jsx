"use client";
import {motion} from "framer-motion"
export default function CTA  () {
    return (
    <section className="mx-auto max-w-7xl px-6 pb-24 mt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center md:px-16 lg:py-24"
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-black/5 blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-black/5 blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-black md:text-5xl">Automate Leads, Tasks, and Reports for Your Business</h2>
          <p className="mt-6 text-lg font-medium text-black/70">
             Start automating your workflows and reduce manual work today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="/contact"
            className="rounded-lg bg-black px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl">
            Book a Consultation
           </a>
           <a href="/plans"
           className="rounded-lg border-2 border-black/20 px-8 py-4 text-base font-bold text-black transition-all hover:bg-black/5">
            View Pricing
           </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
};