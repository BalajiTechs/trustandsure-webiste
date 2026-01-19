
import React from 'react';
import { FEATURES } from '../constants.tsx';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Value Proposition</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] mt-4 mb-4">Why Trust Us?</h2>
          <div className="h-1.5 w-24 bg-[#28a745] mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We bridge the gap between your financial needs and the right lending solutions through technology and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className="relative bg-gray-50 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-white shadow-md rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#28a745] group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {feature.description}
              </p>
              {/* Decorative background element */}
              <div className="absolute top-4 right-4 text-gray-200 font-black text-7xl opacity-10 select-none group-hover:opacity-20 transition-opacity">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
