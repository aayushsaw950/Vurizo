"use client";
import { useState } from "react";
import PricingCard from "./PricingCard";

export default function PricingGrid() {
  const [activeId, setActiveId] = useState(2); // default active: Business Growth

  const plans = [
    {
      id: 1,
      title: "Business Management System",
      price: "₹75,000",
      features: [
        "Custom business web application",
        "Role-based dashboards (Admin / Staff)",
        "Built-in CRM for leads & customers",
        "Member / operational management",
        "Payment tracking system",
        "Analytics & reporting dashboard",
        "Deployment + 1 month support",
      ],
      goal: "Centralize and digitize your core business operations."
    },
    {
      id: 2,
      title: "Business + Automation System",
      price: "₹1,20,000",
      features: [
        "Everything in Business Management System",
        "Website chatbot with lead capture",
        "WhatsApp & email follow-up automation",
        "Payment & renewal reminder workflows",
        "Lead-to-CRM automation",
        "Workflow automation for daily operations",
        "Deployment + 2 months support",
      ],
      goal: "Automate operations and eliminate manual follow-ups."
    },
    {
      id: 3,
      title: "Intelligent Business Platform",
      price: "₹2,50,000+",
      features: [
        "Everything in Business + Automation System",
        "AI-powered business reports",
        "Smart insights from operational data",
        "AI dashboard assistant (Ask your data)",
        "Renewal / churn prediction indicators",
        "RAG-based knowledge assistant (if required)",
        "Scalable cloud architecture",
        "3 months support",
      ],
      goal: "Build a fully automated and AI-driven business system."
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