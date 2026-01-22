
import React from 'react';
import { Building2, Landmark, ShieldCheck } from 'lucide-react';

const BankingPartners: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-[#002B5B] mb-8 leading-tight">Our Lending Ecosystem</h2>
          <p className="text-xl text-slate-500 mb-16 leading-relaxed">
            We are associated with leading banks and NBFCs, offering a wide range of loan solutions and attractive interest rates tailored for your specific financial profile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Landmark className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#002B5B] mb-2">40+ Institutions</h4>
              <p className="text-slate-500 text-sm">Associated with major Nationalised & Private Banks</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#002B5B] mb-2">Prime NBFCs</h4>
              <p className="text-slate-500 text-sm">Fast approval through top Non-Banking Financial Companies</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#002B5B] mb-2">Direct Channel</h4>
              <p className="text-slate-500 text-sm">Official DST partner for seamless file processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingPartners;
