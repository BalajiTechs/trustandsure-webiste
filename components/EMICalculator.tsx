
import React, { useState, useEffect } from 'react';

const EMICalculator: React.FC = () => {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(60); // In months
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const r = rate / 12 / 100;
    const n = tenure;
    const emiValue = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiValue));
  }, [amount, rate, tenure]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-inner border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4 text-center">Loan EMI Calculator</h2>
            <p className="text-gray-500">Plan your finances by calculating your monthly installments.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-gray-700 font-bold uppercase text-xs tracking-wider">Loan Amount (₹)</label>
                  <span className="text-[#003366] font-bold">₹ {amount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="100000" max="10000000" step="50000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#28a745]"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-gray-700 font-bold uppercase text-xs tracking-wider">Interest Rate (%)</label>
                  <span className="text-[#003366] font-bold">{rate}%</span>
                </div>
                <input 
                  type="range" min="5" max="25" step="0.1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#28a745]"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-gray-700 font-bold uppercase text-xs tracking-wider">Tenure (Months)</label>
                  <span className="text-[#003366] font-bold">{tenure} Months</span>
                </div>
                <input 
                  type="range" min="12" max="360" step="12"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#28a745]"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center">
              <p className="text-gray-500 font-medium mb-2 uppercase tracking-widest text-xs">Estimated Monthly EMI</p>
              <h3 className="text-5xl font-black text-[#28a745] mb-6">₹ {emi.toLocaleString()}</h3>
              <div className="w-full border-t border-gray-100 pt-6 mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Total Interest</span>
                  <span className="font-bold text-gray-700">₹ {(emi * tenure - amount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Payable</span>
                  <span className="font-bold text-gray-700">₹ {(emi * tenure).toLocaleString()}</span>
                </div>
              </div>
              <a href="#enquiry" className="mt-8 bg-[#003366] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
