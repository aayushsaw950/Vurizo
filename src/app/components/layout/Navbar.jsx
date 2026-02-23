"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Services", "Plans", "About", "Contact"];

  return (
    <header className="top-0 z-50 w-full border-b border-white/5 bg-black/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col items-start group no-underline">
          <div className="text-3xl font-[family-name:var(--font-heading)] font-extrabold text-white flex items-center tracking-[2px]">
            <span className="text-primary drop-shadow-[0_0_15px_rgba(204,255,0,0.8)]">
              V
            </span>
            <span>urizo</span>
            <span className="text-primary ml-px">.</span>
          </div>
          <span className="hidden md:block text-[9px] uppercase font-bold mt-0.5 text-zinc-500 tracking-[0.3em]">
            Engineering Business Autonomy
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA + MOBILE BUTTON */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-black transition-all hover:scale-105"
          >
            Start Automating
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)} // closes after click
              className="block text-lg text-slate-300 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center rounded-lg bg-primary px-5 py-3 text-black font-bold"
          >
            Start Automating
          </Link>
        </div>
      )}
    </header>
  );
}