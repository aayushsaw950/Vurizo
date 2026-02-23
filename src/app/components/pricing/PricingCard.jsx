"use client";

export default function PricingCard({ id, title, price, features, goal, activeId, setActiveId }) {
  const isActive = activeId === id;

  return (
    <div
      onClick={() => setActiveId(id)}
      className={`
        flex flex-col p-8 rounded-2xl border cursor-pointer transition-all bg-background-dark
        ${isActive ? "border-primary bg-primary/10" : "border-border-dark bg-card-dark"}
        hover:border-primary/50 hover:bg-primary/20
      `}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-3xl font-extrabold mb-6">{price}</p>

      <ul className="mb-6 space-y-3 text-slate-400">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-primary font-bold">•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <p className="text-slate-400 italic text-sm mb-6">{goal}</p>

      {/* <button
        className={`
          mt-auto px-6 py-3 rounded font-bold transition-transform
          ${isActive ? "bg-primary text-black" : "bg-black text-white"}
          hover:scale-105
        `}
      >
        Choose Plan
      </button> */}
    </div>
  );
}