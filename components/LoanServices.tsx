
import React from 'react';
import { PERSONAL_LOANS, BUSINESS_LOANS } from '../constants';
import { LoanType } from '../types';

const ServiceCard: React.FC<{ loan: LoanType }> = ({ loan }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-[#003366] group-hover:bg-[#28a745] group-hover:text-white transition-colors">
      {loan.icon}
    </div>
    <h3 className="text-xl font-bold text-[#003366] mb-2">{loan.title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{loan.description}</p>
    <div className="mt-6 flex items-center text-[#28a745] font-semibold text-sm cursor-pointer hover:underline">
      Learn More →
    </div>
  </div>
);

const LoanServices: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003366] mb-4">Our Loan Services</h2>
          <div className="h-1.5 w-20 bg-[#28a745] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            From funding your business to buying your dream home, we provide personalized financial solutions to meet every requirement.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Personal Solutions</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PERSONAL_LOANS.map((loan) => (
              <ServiceCard key={loan.id} loan={loan} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest">Business Solutions</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_LOANS.map((loan) => (
              <ServiceCard key={loan.id} loan={loan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanServices;
