import React from 'react';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col ${onClick ? 'cursor-pointer' : ''}`}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold text-gray-800 pr-4">{title}</h3>
        <button
          onClick={onClick ? (e) => { e.preventDefault(); e.stopPropagation(); onClick(); } : (e) => e.preventDefault()}
          className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-colors duration-300 bg-[#D4B258] hover:bg-[#C3A24B]" 
          aria-label={`Learn more about ${title}`}
        >
          <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
          <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
        </button>
      </div>
      <p className="text-gray-600 mt-2 flex-grow">{description}</p>
    </div>
  </div>
);

const servicesData = [
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760601598/20251011_123513_j51vjp.jpg',
    title: 'Cleaning',
    description: 'Cleaning services that deliver optimum health and hygiene for the best experiences and outcomes.',
    page: 'cleaning',
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758783499/66ed21480620ecbfa6f7b007_WhatsApp_Image_2024-09-20_at_12.44.22_ogslvs.jpg',
    title: 'Hard Services',
    description: 'Planned and preventative maintenance (PPM), minor works and capital projects.',
    page: 'hard-services',
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1761646581/20251011_122848_1_ecmddi.jpg',
    title: 'Pest Control',
    description: 'Keep unwanted visitors at bay, protecting your facilities and your reputation.',
    page: 'pest-control',
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758022023/WhatsApp_Image_2025-09-16_at_16.56.25_00b4d134_ovzvzt.jpg',
    title: 'Facilities Management',
    description: 'Facilities Management of self-delivered services for the private and public sector.',
    page: 'facilities-management-service',
  },
];

const CoreServices: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
  return (
    <section className="bg-gray-50/50 rounded-3xl p-6 sm:p-8 md:p-12" aria-labelledby="core-services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="max-w-3xl">
            <h2 id="core-services-heading" className="text-3xl sm:text-4xl font-bold text-gray-800">
              Core Services
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Services that we provide to make people and places the best they can be include cleaning, catering, hard services, pest control, security and facilities management.
            </p>
          </div>
          <button 
            onClick={() => navigate('our-services')}
            className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors flex-shrink-0"
          >
            View All Services
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
              onClick={service.page ? () => navigate(service.page!) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;