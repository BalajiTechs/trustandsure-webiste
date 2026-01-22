
import React from 'react';
import { ChevronRight, Star, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 urban-gradient overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[500px] h-[500px] bg-green-50 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full mb-8">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-slate-600 tracking-tight">Trusted by 10,000+ Happy Customers</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#002B5B] leading-[1.1] tracking-tight mb-8">
              Fastest Way To Get <br />
              <span className="text-[#10B981]">Loan Approval</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Your preferred financial marketplace for Personal, Business, and Home loans. Get the most competitive rates from 40+ leading banks and NBFCs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#enquiry" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#10B981] hover:bg-[#059669] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Apply Now
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#calculator" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-slate-200 text-[#002B5B] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
              >
                Calculate EMI
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-200 pt-10">
              <div className="flex flex-col items-center lg:items-start">
                <ShieldCheck className="w-6 h-6 text-[#10B981] mb-2" />
                <p className="text-sm font-bold text-slate-800 tracking-tight">100% Secure</p>
                <p className="text-xs text-slate-400 font-medium">Bank-grade safety</p>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-slate-100 px-4">
                <Zap className="w-6 h-6 text-[#10B981] mb-2" />
                <p className="text-sm font-bold text-slate-800 tracking-tight">Quick Disbursal</p>
                <p className="text-xs text-slate-400 font-medium">Within 24 Hours</p>
              </div>
              <div className="flex flex-col items-center lg:items-start col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 mb-2">
                   <div className="p-1 bg-blue-50 rounded-md">
                     <TrendingUp className="w-4 h-4 text-blue-600" />
                   </div>
                   <p className="text-sm font-bold text-slate-800 tracking-tight">Low Interest</p>
                </div>
                <p className="text-xs text-slate-400 font-medium">Best market offers</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in group">
             {/* Main Image Container - Modern Financial District Architecture */}
             <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] border-[12px] border-white bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Financial Center" 
                  className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px] transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay to ensure the UI elements on top are readable */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#002B5B]/20 via-transparent to-[#10B981]/10"></div>
             </div>

             {/* Floating Premium Interest Rate Badge */}
             <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 animate-slide-up delay-300 hidden sm:block">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Lowest Interest Rate</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-[#10B981]">8.45</span>
                    <span className="text-2xl font-black text-[#10B981]">%</span>
                  </div>
                  <p className="text-sm font-bold text-slate-500">per annum*</p>
                </div>
                <div className="mt-4 flex items-center gap-2 py-2 px-3 bg-green-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Live Offer</span>
                </div>
             </div>

             {/* Secondary Trust Badge */}
             <div className="absolute top-12 -right-6 bg-[#002B5B] text-white py-4 px-6 rounded-2xl shadow-xl border border-white/10 hidden lg:block transform rotate-3 hover:rotate-0 transition-transform">
                <p className="text-xs font-bold text-blue-200/60 uppercase tracking-widest mb-1">Associations</p>
                <p className="text-lg font-bold">40+ Banks & NBFCs</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
