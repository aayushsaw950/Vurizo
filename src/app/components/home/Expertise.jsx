"use client";
import { Workflow, Database , Terminal, ArrowRight } from "lucide-react";
import {motion} from "framer-motion"
export default function Expertise () {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-16 max-w-2xl">
    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
      Core Expertise
    </h2>
    <h3 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
      AI-powered systems built to automate and scale your business.
    </h3>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {[
      {
        title: "AI Automation",
        points: [
          "Website chatbots with lead capture",
          "WhatsApp & email follow-up automation",
          "Payment & renewal reminders",
          "Workflow automation for daily operations",
        ],
        icon: <Workflow size={24} />,
      },
      {
        title: "Custom Business Software",
        points: [
          "Full-stack MERN applications",
          "Role-based dashboards (Admin / Staff / Users)",
          "Built-in CRM for managing leads & customers",
          "Payment and attendance tracking",
          "Analytics & performance reporting",
        ],
        icon: <Database size={24} />,
      },
      {
        title: "AI Integration",
        points: [
          "RAG-based knowledge assistants",
          "AI-powered business reports",
          "Smart insights from operational data",
          "Custom automation logic using LLMs",
        ],
        icon: <Terminal size={24} />,
      },
    ].map((item, i) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="group flex flex-col gap-6 rounded-xl border border-white/5 bg-neutral-dark/40 p-8 transition-all hover:border-primary/20 hover:bg-neutral-dark/60"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {item.icon}
        </div>

        <div>
          <h4 className="text-xl font-bold text-white">{item.title}</h4>

          <ul className="mt-4 space-y-2 text-slate-400">
            {item.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                {/* <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span> */}
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="mt-auto pt-4">
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100"
          >
            Learn More <ArrowRight size={14} />
          </a>
        </div> */}
      </motion.div>
    ))}
  </div>
</section>
  )
};