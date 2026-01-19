
import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="bg-[#003366] p-2 rounded-lg">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#003366]">
                TRUST & SURE <span className="text-green-600">FINSERV</span>
              </h1>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-widest">
                Your Trusted Loan Partner
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-[#003366] font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-[#003366] font-medium transition-colors">Why Choose Us</a>
            <a href="#contact" className="text-gray-600 hover:text-[#003366] font-medium transition-colors">Contact</a>
            <a 
              href="tel:9829047900" 
              className="inline-flex items-center gap-2 bg-[#28a745] hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <div className="md:hidden">
             <a 
              href="tel:9829047900" 
              className="bg-[#28a745] p-2.5 rounded-full text-white shadow-md inline-block"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
