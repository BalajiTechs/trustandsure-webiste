
import React from 'react';
import { ChevronRight, ArrowRightCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 md:pt-24 md:pb-32 overflow-hidden gradient-bg">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40V.5H40" stroke="#003366" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
              <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
              Fast-Track Approvals in 24 Hours
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-[#003366] leading-[1.1] mb-8">
              Your Dreams, <br />
              <span className="text-[#28a745]">Our Responsibility</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience hassle-free financial solutions tailored for you. From personal loans to large-scale business funding, we ensure transparency and speed in every step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="#enquiry" 
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#003366] hover:bg-blue-900 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
              >
                Apply for Loan
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-[#28a745] text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-md transition-all transform hover:-translate-y-1"
              >
                View Schemes
              </a>
            </div>
            
            <div className="mt-14 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <ArrowRightCircle className="w-5 h-5 text-green-500" />
                Low Interest
              </div>
              <div className="flex items-center gap-2">
                <ArrowRightCircle className="w-5 h-5 text-green-500" />
                No Hidden Charges
              </div>
              <div className="flex items-center gap-2">
                <ArrowRightCircle className="w-5 h-5 text-green-500" />
                Pan-India Service
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1573163060322-373924ad74ce?auto=format&fit=crop&q=80&w=800" 
                alt="Business success and happiness" 
                className="w-full h-auto min-h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl border border-white/30">
                  <p className="text-3xl font-black mb-1">100% Secure</p>
                  <p className="text-sm opacity-90 font-medium">Your data and financial journey are in safe hands.</p>
                </div>
              </div>
            </div>
            {/* Ambient glows */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
