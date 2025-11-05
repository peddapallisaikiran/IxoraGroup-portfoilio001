import React from 'react';

const gold = '#D4B258';
const darkGold = '#C3A24B';

const logos = [
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756694732/Screenshot_2025-09-01_080828_zmn2yn.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695411/Screenshot_2025-09-01_080959_lf0af8.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695412/Screenshot_2025-09-01_080949_xnlhji.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695422/Screenshot_2025-09-01_081015_lzgp24.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695422/Screenshot_2025-09-01_081022_woezag.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756705834/Screenshot_2025-09-01_112016_u16iiu.png',
];

const Accreditations: React.FC<{ navigate: (page: string, data?: any) => void; }> = ({ navigate }) => {
  return (
    <section 
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm" 
      aria-labelledby="accreditations-heading"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 id="accreditations-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Industry Accreditations: Quality Control and Compliance
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Maintaining the highest standards through continuous improvement, best practice and good governance.
          </p>
          <div className="mt-8">
            <button 
              onClick={() => navigate('accreditations')}
              style={{ backgroundColor: gold }} 
              className="text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200"
            >
              View more
            </button>
          </div>
        </div>
        
        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white border rounded-2xl p-4 flex items-center justify-center h-36 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: 'rgba(212, 178, 88, 0.5)' }} // Light gold border
            >
              <img 
                src={logo} 
                alt={`Accreditation logo ${index + 1}`} 
                className="max-h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
