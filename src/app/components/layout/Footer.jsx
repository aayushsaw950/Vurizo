import Link from "next/link";

export default function Footer ()  {
    return(
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <Link href="/" className="flex flex-col items-start group no-underline">
          <div className="font-(family-name:--leagueSpartan) text-3xl font-extrabold text-white flex items-center tracking-[2px]">
            <span className="text-primary 
              drop-shadow-[0_0_15px_rgba(204,255,0,0.8)] 
              transition-all duration-500 
              group-hover:drop-shadow-[0_0_25px_rgba(204,255,0,1)]">
              V
            </span>
            <span>urizo</span>
            <span className="text-primary ml-px drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]">.</span>
          </div>
        </Link>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
          {[
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Terms of Service", path: "/terms" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Vurizo AI Automation & Custom SaaS.&nbsp; All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
};