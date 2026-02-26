import { Workflow, Database, Terminal } from "lucide-react";
import ServiceCard from "./ServicesCard";

export default function ServicesGrid() {
  return (
    <section className="px-6 lg:px-20 py-20  ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-slate-400 mb-12">
          Three core ways we help businesses grow efficiently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Database size={32} />}
          title="Custom Business Systems"
          items={[
            "Tailored web applications built around your operations",
            "Role-based dashboards (Admin / Staff / Users)",
            "Built-in CRM to manage leads & customers",
            "Payment, membership & operational tracking",
            "Real-time analytics & performance reporting",
          ]}
        />

        <ServiceCard
          icon={<Workflow size={32} />}
          title="Automation Systems"
          items={[
            "Website chatbot with automatic lead capture",
            "WhatsApp & email follow-up automation",
            "Payment & renewal reminder workflows",
            "Lead-to-CRM auto synchronization",
            "Workflow automation for daily operations",
          ]}
        />

        <ServiceCard
          icon={<Terminal size={32} />}
          title="AI Integration & Intelligence"
          items={[
            "AI-powered business performance reports",
            "Smart insights from operational data",
            "AI assistant inside your dashboard (Ask your data)",
            "Predictive renewal / churn indicators",
            "RAG-based knowledge assistants (if required)",
          ]}
        />
        </div>
      </div>
    </section>
  );
}