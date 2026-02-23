
export default function Stat () {
  return (
    <section className="border-y border-white/5 bg-neutral-dark/30 py-12">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {[
          { label: "Projects Built", value: "1–3" },
          { label: "Automation Features", value: "5+", highlight: true },
          { label: "Clients Engaged", value: "1 Demo Project" },
          { label: "Support Availability", value: "24/7" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className={`text-4xl font-bold ${stat.highlight ? "text-primary" : "text-white"}`}>
              {stat.value}
            </span>
            <span className="mt-2 text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
};