
import React from 'react';
import { Quote } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-20 relative border border-slate-100 shadow-sm text-center max-w-5xl mx-auto">
          <Quote className="w-16 h-16 text-[#10B981] opacity-20 mx-auto mb-8" />
          
          <div className="space-y-2 mb-10">
            <h2 className="text-green-600 font-bold uppercase tracking-[0.25em] text-sm">Vision & Leadership</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-[#002B5B] tracking-tight">Meet Our Founder</h3>
          </div>
          
          <div className="space-y-8">
            <p className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight max-w-4xl mx-auto">
              Mr. Ajeet Singh Inda, Founder of Trust and Sure Finserv, brings valuable experience in financial services and loan consulting.
            </p>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
              His customer-focused approach and strong banking associations help clients secure the best financial solutions with transparency and confidence. Under his leadership, we have simplified the lending landscape for thousands of individuals and small businesses across Jodhpur.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200 inline-block px-12">
            <h4 className="text-2xl font-black text-[#002B5B]">Mr. Ajeet Singh Inda</h4>
            <p className="text-[#10B981] font-bold uppercase tracking-widest text-xs mt-1">Founder & Managing Director</p>
          </div>

          {/* Decorative background element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
