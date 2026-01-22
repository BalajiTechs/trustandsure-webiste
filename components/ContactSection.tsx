
import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, MapPin, Building } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: '',
    amount: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Our representative will contact you soon.`);
    setFormData({ name: '', phone: '', loanType: '', amount: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#002B5B] rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Form Side */}
          <div id="enquiry" className="lg:w-1/2 p-8 md:p-16 bg-white">
            <h2 className="text-3xl font-black text-[#002B5B] mb-2 tracking-tight">Quick Enquiry</h2>
            <p className="text-slate-500 mb-10 font-medium">Get a call back from our experts within 15 minutes.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Enter phone"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Loan Amount</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. 5,00,000"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Loan Type</label>
                <select 
                  required
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-all appearance-none"
                  value={formData.loanType}
                  onChange={(e) => setFormData({...formData, loanType: e.target.value})}
                >
                  <option value="">Select loan type</option>
                  <option value="personal">Personal Loan</option>
                  <option value="home">Home Loan</option>
                  <option value="car">Car Loan</option>
                  <option value="business">Business Loan</option>
                  <option value="gold">Gold Loan</option>
                </select>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#10B981] hover:bg-green-600 text-white font-bold py-6 rounded-2xl text-lg shadow-xl hover:shadow-green-200 transition-all active:scale-95"
              >
                <Send className="w-5 h-5" />
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:w-1/2 p-8 md:p-16 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-12 tracking-tight">Our Offices in Jodhpur</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-[#10B981] transition-colors">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[#10B981] font-bold uppercase tracking-wider text-xs mb-1">Registered Office</p>
                  <p className="text-lg font-medium opacity-90 leading-relaxed">
                    H no D 344, Saraswati Nagar Basni <br />
                    Jodhpur 342005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-[#10B981] transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[#10B981] font-bold uppercase tracking-wider text-xs mb-1">Branch Office</p>
                  <p className="text-lg font-medium opacity-90 leading-relaxed">
                    Defence laboratory road near panch batti Circle <br />
                    Jodhpur 302011
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#10B981]" />
                  <span className="text-lg font-bold">9829047900</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#10B981]" />
                  <span className="text-md font-medium">trustandsurefinserv@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
