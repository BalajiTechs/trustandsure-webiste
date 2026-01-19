
import React from 'react';
import { ChevronRight, Star, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 urban-gradient overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full mb-8">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-slate-600 tracking-tight">Trusted by 50,000+ Customers</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#002B5B] leading-[1.05] tracking-tight mb-8">
              Fastest Way To Get <br />
              <span className="text-[#10B981]">Loan Approval</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              India's preferred financial marketplace for Personal, Business, and Home loans. Get best rates from 40+ leading banks.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#enquiry" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Apply Now
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#calculator" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-slate-200 text-[#002B5B] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
              >
                Calculate EMI
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-200 pt-10">
              <div className="flex flex-col items-center lg:items-start">
                <ShieldCheck className="w-6 h-6 text-[#10B981] mb-2" />
                <p className="text-sm font-bold text-slate-800">100% Secure</p>
                <p className="text-xs text-slate-500">Bank-grade safety</p>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-slate-100 px-4">
                <Zap className="w-6 h-6 text-[#10B981] mb-2" />
                <p className="text-sm font-bold text-slate-800">Quick Disbursal</p>
                <p className="text-xs text-slate-500">Within 24 Hours</p>
              </div>
              <div className="flex flex-col items-center lg:items-start col-span-2 sm:col-span-1">
                <div className="flex -space-x-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white"></div>
                </div>
                <p className="text-sm font-bold text-slate-800">Expert Guidance</p>
                <p className="text-xs text-slate-500">Dedicated Advisor</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in">
             <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1000" 
                  alt="Customer Support" 
                  className="w-full h-auto object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#002B5B]/40 to-transparent"></div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Interest Rates</p>
                <p className="text-3xl font-black text-[#10B981]">8.45% <span className="text-sm font-medium text-slate-500">p.a*</span></p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
