
import React from 'react';
import { ShieldCheck, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#28a745] p-2 rounded-lg">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight">
                TRUST & SURE <br /><span className="text-green-500">FINSERV</span>
              </h1>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for all types of loans. We help individuals and businesses achieve their financial goals through accessible and transparent financing solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-green-500 pl-4">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-green-500 transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-green-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact Us</a></li>
              <li><a href="#enquiry" className="hover:text-green-500 transition-colors">Loan Enquiry</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-green-500 pl-4">Our Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">Personal Loans</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Business Loans</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">MSME / SME Loans</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Home & Car Loans</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Gold Loans</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-green-500 pl-4">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">9829047900</span>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">Main Office, India</span>
              </li>
              <li className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-sm font-bold text-white mb-1 uppercase tracking-widest opacity-60">Working Hours</p>
                <p className="text-green-500 font-bold">Mon - Sat: 9 AM - 7 PM</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Trust & Sure Finserv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
