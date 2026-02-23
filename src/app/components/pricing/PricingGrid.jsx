"use client";
import { useState } from "react";
import PricingCard from "./PricingCard";

export default function PricingGrid() {
  const [activeId, setActiveId] = useState(2); // default active: Business Growth

  const plans = [
    {
      id: 1,
      title: "Automation Starter",
      price: "₹40,000",
      features: [
        "AI chatbot (lead capture)",
        "WhatsApp/email follow-up automation",
        "Basic CRM dashboard (leads + members)",
        "Payment reminder automation",
        "Deployment",
        "1 month support",
      ],
      goal: "Increase lead conversion + stop revenue leakage."
    },
    {
      id: 2,
      title: "Business Growth System",
      price: "₹1,00,000",
      features: [
        "Website (5 pages)",
        "AI chatbot",
        "Full CRM dashboard",
        "Member management",
        "Attendance tracking",
        "Payment tracking",
        "Renewal reminders",
        "Basic analytics",
        "Deployment + 2 months support",
      ],
      goal: "Complete digital + automation setup."
    },
    {
      id: 3,
      title: "Custom SaaS Build",
      price: "₹2,50,000+",
      features: [
        "Full Stack SaaS",
        "Role-based dashboards",
        "Subscription/payment integration",
        "Advanced analytics",
        "RAG knowledge assistant",
        "Multi-branch support",
        "Scalable cloud infra",
        "3 months support",
      ],
      goal: "Full software product for chains or founders."
    },
  ];

  return (
    <main className="grid-bg">

    
    <section className="px-6 lg:px-20 py-24 ">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold"> Plans</h2>
        <p className="text-slate-400 mt-2 max-w-xl mx-auto">
          Pick a plan that fits your business size and automation goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <PricingCard
            key={plan.id}
            {...plan}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </section>
    </main>
  );
}