import React from 'react';

const DotPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`absolute w-48 h-48 opacity-40 ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, #FDBA74 1px, transparent 1px)',
      backgroundSize: '1rem 1rem',
      maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
    }}
    aria-hidden="true"
  />
);

const logos = [
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756719312/bharosa_srfcuj.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756719312/amazon_czzydg.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722692/Cyber_bpswvl.webp',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722708/HUDCO_nn19dt.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722709/IIRR_qctmml.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722728/Police_ngmcen.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722743/GHMC_c7lljx.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722753/government-of-telangana-logo-4949BC8A09-seeklogo.com_qnqpta.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722818/container-corporation-of-india-ltd-concor-logo-vector_zkktle.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722762/Ts_curruption_breuo_j2sfn0.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756883175/She-teams_yjdsgi.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756883532/Screenshot_2025-09-03_124153_rhnsv5.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756892722/Untitled_design_2_ok7eh7.png',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762332266/90Hi3zsH_400x400_v2wtvm.jpg',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762332286/Hyderabad-Metro-logo_c1uba7.png',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762332333/Screenshot_2025-11-05_141019_dxfbfx.png',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762332334/Screenshot_2025-11-05_141347_pq8tt2.png',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762332333/Screenshot_2025-11-05_140957_yipapw.png',
];

const AccreditationsPage: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      <div className="max-w-5xl mx-auto">
        <div 
          className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100"
        >
          <DotPattern className="top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
          <DotPattern className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
              Accreditations and Certification
            </h1>
            <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              As a business, striving to be the best is at the heart of everything we do. Across the world, our services are continually assessed against industry standards, ensuring we're delivering the highest quality possible to our customers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white border rounded-2xl p-4 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: 'rgba(212, 178, 88, 0.3)' }}
            >
              <img 
                src={logo} 
                alt={`Accreditation logo ${index + 1}`} 
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccreditationsPage;