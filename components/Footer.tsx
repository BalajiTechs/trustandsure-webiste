
import React from 'react';
import { ShieldCheck, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Building } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002B5B] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#10B981] p-2 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-black tracking-tight uppercase">
                TRUST & SURE <br /><span className="text-[#10B981]">FINSERV</span>
              </h1>
            </div>
            <p className="text-blue-100/60 leading-relaxed font-medium">
              Your trusted partner for specialized personal and business financing solutions. We help you bridge the gap between goals and success with transparency.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#10B981] transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#10B981] transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#10B981] transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-6 h-1 bg-[#10B981] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-4 text-blue-100/70 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Loan Products</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#leadership" className="hover:text-white transition-colors">Founder Profile</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-6 h-1 bg-[#10B981] rounded-full"></span>
              Addresses
            </h3>
            <ul className="space-y-6 text-blue-100/70 text-sm leading-relaxed">
              <li className="flex gap-4">
                <Building className="w-5 h-5 text-[#10B981] shrink-0" />
                <span><strong>Registered:</strong> D 344, Saraswati Nagar Basni, Jodhpur 342005</span>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#10B981] shrink-0" />
                <span><strong>Branch:</strong> Nehru colony panch batti Circle, Jodhpur 342011</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-6 h-1 bg-[#10B981] rounded-full"></span>
              Contact Info
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-[#10B981]" />
                <span className="text-lg font-bold">9829047900</span>
              </li>
              <li className="bg-white/5 p-6 rounded-[2rem] border border-white/5">
                <p className="text-xs font-bold text-blue-100/40 mb-1 uppercase tracking-widest">Business Hours</p>
                <p className="text-[#10B981] font-bold">Mon - Sat: 9 AM - 7 PM</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-center text-blue-100/30 text-xs font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Trust & Sure Finserv. Built with transparency and trust.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
