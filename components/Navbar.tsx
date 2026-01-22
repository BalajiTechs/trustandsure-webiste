
import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a href="#" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
            <div className="bg-[#10B981] p-2 rounded-xl">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-[#002B5B]">
                TRUST & SURE
              </h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                Finserv
              </p>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-[#002B5B] font-bold text-sm transition-colors border-b-2 border-[#10B981] pb-1">Home</a>
            <a href="#services" className="text-slate-600 hover:text-[#002B5B] font-bold text-sm transition-colors">Products</a>
            <a href="#calculator" className="text-slate-600 hover:text-[#002B5B] font-bold text-sm transition-colors">EMI Calculator</a>
            <a href="#leadership" className="text-slate-600 hover:text-[#002B5B] font-bold text-sm transition-colors">Founder</a>
            <a href="#contact" className="text-slate-600 hover:text-[#002B5B] font-bold text-sm transition-colors">Support</a>
            
            <div className="h-8 w-px bg-slate-200"></div>
            
            <a 
              href="tel:9829047900" 
              className="flex items-center gap-3 bg-[#002B5B] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              9829047900
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
             <a href="tel:9829047900" className="bg-[#10B981] p-3 rounded-xl text-white shadow-md">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
