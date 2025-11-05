import React from 'react';

const gold = '#D4B258';

// Using client logos from the provided accreditations page for a better visual representation.
const clientLogos = [
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756719312/bharosa_srfcuj.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756719312/amazon_czzydg.jpg',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762332266/90Hi3zsH_400x400_v2wtvm.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722708/HUDCO_nn19dt.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722709/IIRR_qctmml.jpg',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762332286/Hyderabad-Metro-logo_c1uba7.png',
];

const Clients: React.FC = () => {
  return (
    <section 
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm" 
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 id="clients-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            With over 30+ clients across the globe, we are the trusted partner for facilities management, delivering excellence and building lasting relationships.
          </p>
          <div className="mt-8">
            <a 
              href="#"
              style={{ backgroundColor: gold }} 
              className="text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200"
            >
              Our Clients
            </a>
          </div>
        </div>
        
        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white border rounded-2xl p-4 flex items-center justify-center h-36 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: 'rgba(212, 178, 88, 0.5)' }} // Light gold border
            >
              <img 
                src={logo} 
                alt={`Client logo ${index + 1}`} 
                className="max-h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;