
import React, { useState } from 'react';
import { PERSONAL_LOANS, BUSINESS_LOANS } from '../constants';
import { LoanType } from '../types';

const ServiceCard: React.FC<{ loan: LoanType }> = ({ loan }) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group h-full flex flex-col">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#002B5B] group-hover:bg-[#10B981] group-hover:text-white transition-colors">
      {loan.icon}
    </div>
    <h3 className="text-xl font-bold text-[#002B5B] mb-3 leading-tight">{loan.title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{loan.description}</p>
    <a href="#enquiry" className="inline-flex items-center gap-2 text-[#10B981] font-bold text-sm hover:underline">
      Check Eligibility
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </a>
  </div>
);

const LoanServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002B5B] tracking-tight mb-4">Financial Products</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Choose from a wide range of loan products tailored to your financial goals and requirements.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1">
            <button 
              onClick={() => setActiveTab('personal')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'personal' ? 'bg-white text-[#002B5B] shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Personal & Salaried
            </button>
            <button 
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'business' ? 'bg-white text-[#002B5B] shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Business & MSME
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {(activeTab === 'personal' ? PERSONAL_LOANS : BUSINESS_LOANS).map((loan) => (
            <ServiceCard key={loan.id} loan={loan} />
          ))}
        </div>
        
        <div className="mt-16 bg-[#002B5B] rounded-[2.5rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Not sure which loan is right for you?</h3>
            <p className="text-blue-100/80 text-lg">Our expert advisors are just a call away to help you decide.</p>
          </div>
          <a 
            href="tel:9829047900" 
            className="relative z-10 bg-[#10B981] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl active:scale-95"
          >
            Get Free Consultation
          </a>
          {/* Subtle Background Art */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 400C100 350 200 450 400 300" stroke="white" strokeWidth="20" strokeLinecap="round" />
              <path d="M0 300C150 250 250 350 450 200" stroke="white" strokeWidth="20" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanServices;
