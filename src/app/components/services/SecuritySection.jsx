import { CheckCircle2 } from "lucide-react";

export default function SecuritySection() {
  const points = [
    "Encrypted data-flow between systems",
    "Secure execution environments",
    "Human approval for critical actions",
  ];

  return (
    <section className="px-6 lg:px-20 py-20 ">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">Safe & Secure Architecture</h2>

        <ul className="space-y-4 text-center max-w-xl mx-auto">
          {points.map((text, index) => (
            <li
            key={index}
            className="inline-flex items-center justify-center gap-3 w-full"
          >
            <CheckCircle2 className="text-primary w-5 h-5" />
            <p className="text-slate-300">{text}</p>
          </li>
          ))}
        </ul>
      </div>
    </section>
  );
}