"use client";
import { BrainCircuit , Database , LogIn, Wrench, LogOut } from "lucide-react"; 
export default function Workflow  () { 
    return(
    <section className="relative w-full max-w-6xl mx-auto px-6 pb-20 overflow-hidden">
      <div className="text-center text-slate-500 pt-10">How Vurizo Automates Your Business Workflows</div>
      <div className="relative flex h-full w-full items-center justify-between py-20">
        
        {/* Node 1 */}
        <div className="group relative flex flex-col items-center gap-4 z-20">
          <div className="h-16 w-16 rounded-lg border border-primary/50 bg-neutral-dark flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <LogIn size={32} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Leads & Customer Info</span>
        </div>
  
        {/* Line 1 */}
        <div className="h-px flex-1 bg-linear-to-r from-primary/50 to-primary/20 mx-4 hidden sm:block"></div>
  
        {/* Node 2 (Logic) */}
        <div className="group relative flex flex-col items-center gap-4 z-20">
          <div className="absolute -top-4 -right-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-black">01</div>
          <div className="h-20 w-20 rounded-lg border border-primary bg-primary/10 flex items-center justify-center text-primary glow-primary">
            <BrainCircuit size={40} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">Automation Engine</span>
        </div>
  
        {/* Split Lines Container */}
        <div className="relative flex-1  flex-col items-center justify-center h-full hidden sm:flex">
          <div className="w-full h-px bg-primary/20 my-8"></div>
          <div className="w-full h-px bg-primary/20 my-8"></div>
        </div>
  
        {/* Sub Nodes */}
        <div className=" flex-col gap-8 hidden lg:flex">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg border border-white/10 bg-neutral-dark flex items-center justify-center text-slate-400">
              <Database size={24} />
            </div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Data Storage</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg border border-white/10 bg-neutral-dark flex items-center justify-center text-slate-400">
              <Wrench size={24} />
            </div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Custom Rules & Integrations</span>
          </div>
        </div>
  
        {/* Line 2 */}
        <div className="h-px flex-1 bg-linear-to-l from-primary/50 to-primary/20 mx-4 hidden sm:block"></div>
  
        {/* Node 3 (Output) */}
        <div className="group relative flex flex-col items-center gap-4 z-20">
          <div className="h-16 w-16 rounded-lg border border-white/20 bg-neutral-dark flex items-center justify-center text-white">
            <LogOut size={32} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Automated Tasks & Reports</span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  )
};