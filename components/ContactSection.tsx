
import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, MapPin } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#003366] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Form Side */}
          <div id="enquiry" className="lg:w-1/2 p-8 md:p-12 bg-white">
            <h2 className="text-3xl font-extrabold text-[#003366] mb-2">Quick Enquiry</h2>
            <p className="text-gray-500 mb-8 font-medium">Get a call back from our experts within 15 minutes.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#28a745] transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Enter phone"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#28a745] transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Loan Amount</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. 5,00,000"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#28a745] transition-all"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Loan Type</label>
                <select 
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#28a745] transition-all appearance-none"
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
                className="w-full flex items-center justify-center gap-2 bg-[#28a745] hover:bg-green-700 text-white font-bold py-5 rounded-xl text-lg shadow-lg hover:shadow-green-200 transition-all active:scale-95"
              >
                <Send className="w-5 h-5" />
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:w-1/2 p-8 md:p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-8">Get Your Loan Approved Today</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-green-500 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-green-400 font-bold uppercase tracking-wider text-xs mb-1">Call Us Now</p>
                  <p className="text-2xl font-bold">9829047900</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-green-500 transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-green-400 font-bold uppercase tracking-wider text-xs mb-1">Working Hours</p>
                  <p className="text-xl font-medium">Monday - Saturday</p>
                  <p className="text-lg opacity-80 font-bold">9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-green-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-green-400 font-bold uppercase tracking-wider text-xs mb-1">Email Us</p>
                  <p className="text-xl font-medium">info@trustsurefinserv.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-green-500 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-green-400 font-bold uppercase tracking-wider text-xs mb-1">Our Location</p>
                  <p className="text-xl font-medium">Serving pan-India customers</p>
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
