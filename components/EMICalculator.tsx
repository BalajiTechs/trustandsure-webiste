
import React, { useState, useEffect } from 'react';

const EMICalculator: React.FC = () => {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(120); // Months
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const r = rate / 12 / 100;
    const n = tenure;
    if (r === 0) {
      setEmi(Math.round(amount / n));
      return;
    }
    const emiValue = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiValue));
  }, [amount, rate, tenure]);

  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - amount;

  return (
    <section id="calculator" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-3/5 p-8 lg:p-16">
            <h2 className="text-3xl font-black text-[#002B5B] mb-2">Loan EMI Calculator</h2>
            <p className="text-slate-500 mb-12">Find out how much you need to pay monthly for your loan.</p>
            
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">Loan Amount</label>
                  <span className="text-2xl font-black text-[#002B5B]">₹ {amount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="100000" max="10000000" step="50000"
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">Interest Rate (%)</label>
                    <span className="text-xl font-black text-[#002B5B]">{rate}%</span>
                  </div>
                  <input 
                    type="range" min="5" max="24" step="0.1"
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">Tenure (Years)</label>
                    <span className="text-xl font-black text-[#002B5B]">{tenure / 12} Yrs</span>
                  </div>
                  <input 
                    type="range" min="12" max="360" step="12"
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 bg-[#002B5B] p-8 lg:p-16 text-white flex flex-col justify-center text-center">
            <p className="text-blue-200/60 font-bold uppercase tracking-[0.2em] text-xs mb-4">Monthly Installment</p>
            <h3 className="text-5xl lg:text-6xl font-black mb-12">₹ {emi.toLocaleString()}</h3>
            
            <div className="space-y-6 pt-10 border-t border-white/10">
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-200/70">Principal Amount</span>
                <span className="font-bold tracking-tight">₹ {amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-200/70">Total Interest</span>
                <span className="font-bold tracking-tight">₹ {totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <span className="text-blue-100 text-lg font-medium">Total Payable</span>
                <span className="text-2xl font-black text-[#10B981]">₹ {totalPayable.toLocaleString()}</span>
              </div>
            </div>

            <a href="#enquiry" className="mt-12 bg-[#10B981] text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all shadow-2xl active:scale-95">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
