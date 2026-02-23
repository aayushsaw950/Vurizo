export default function ServiceCard({ icon, title, items }) {
    return (
      <div className="bg-card-dark border border-border-dark p-8 rounded-xl hover:border-primary/50 transition-colors">
        <div className="text-primary mb-4">{icon}</div>
  
        <h3 className="text-xl font-bold mb-4">{title}</h3>
  
        <ul className="text-slate-400 space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }