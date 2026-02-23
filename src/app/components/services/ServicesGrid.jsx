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
            icon={<Workflow size={32} />}
            title="AI Automation"
            items={[
              "Website chatbots & lead capture",
              "WhatsApp & email follow-ups",
              "Payment & renewal reminders",
              "Workflow automation",
            ]}
          />

          <ServiceCard
            icon={<Database size={32} />}
            title="Custom Business Software"
            items={[
              "Role-based dashboards",
              "CRM systems",
              "Membership management",
              "Analytics & reporting",
            ]}
          />

          <ServiceCard
            icon={<Terminal size={32} />}
            title="AI Integration"
            items={[
              "RAG-based knowledge assistant",
              "AI-powered reporting",
              "Smart business insights",
              "Custom automation logic",
            ]}
          />
        </div>
      </div>
    </section>
  );
}