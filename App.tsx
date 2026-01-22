
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoanServices from './components/LoanServices';
import EMICalculator from './components/EMICalculator';
import WhyChooseUs from './components/WhyChooseUs';
import Leadership from './components/Leadership';
import BankingPartners from './components/BankingPartners';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add smooth scroll behavior to all anchor links
    const handleScroll = (e: Event) => {
      const targetElement = e.currentTarget as HTMLAnchorElement;
      const href = targetElement.getAttribute('href');
      
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        try {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        } catch (err) {
          console.warn('Invalid selector attempted:', href);
        }
      } else if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LoanServices />
        <EMICalculator />
        <WhyChooseUs />
        <Leadership />
        <BankingPartners />
        <ContactSection />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919829047900" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with Mr. Ajeet Singh Inda
        </span>
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298L10.75 10.32c.043.085.087.185.044.271-.137.271-.206.39-.413.629-.087.099-.177.204-.076.377.101.172.446.736.956 1.192.657.587 1.21.769 1.383.855.172.086.274.072.376-.045.101-.116.433-.506.549-.679.116-.173.231-.144.39-.086.158.058 1.011.477 1.184.564.173.087.288.129.332.202.043.073.043.423-.101.827z" />
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.174l-1.434 5.24 5.344-1.402C8.75 21.847 10.312 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.477 0-2.887-.369-4.13-1.018l-.296-.155-3.071.806.82-2.992-.17-.272A7.954 7.954 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
