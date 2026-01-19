
import React from 'react';
import { PARTNERS } from '../constants';

const BankingPartners: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003366]">Our Banking Partners</h2>
          <p className="text-gray-500 mt-2">Collaborating with India's leading banks to bring you the best offers</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {PARTNERS.map((partner, idx) => (
            <div 
              key={idx} 
              className="h-24 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 grayscale hover:grayscale-0 transition-all hover:bg-white hover:shadow-md"
            >
              <span className="text-[#003366] font-black text-lg opacity-70 tracking-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm font-medium text-gray-400">
          Loans from all Nationalised Banks and NBFCs
        </div>
      </div>
    </section>
  );
};

export default BankingPartners;
