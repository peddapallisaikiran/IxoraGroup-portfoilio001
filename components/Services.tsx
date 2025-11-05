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
        <a 
          href="#" 
          onClick={onClick ? (e) => { e.preventDefault(); e.stopPropagation(); onClick(); } : (e) => e.preventDefault()}
          className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-colors duration-300 bg-[#D4B258] hover:bg-[#C3A24B]" 
          aria-label={`Learn more about ${title}`}
        >
          <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
          <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
        </a>
      </div>
      <p className="text-gray-600 mt-2 flex-grow">{description}</p>
    </div>
  </div>
);

const servicesData = [
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1761635700/long-hallway-with-row-servers-center_wp0cha.jpg',
    title: 'Data Centres',
    description: 'Maintaining business continuity and the avoidance of interruption.',
    page: 'data-center',
  },
  {
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755598832/Company%20assests/download_8_uysjdv.avif',
    title: 'Aviation',
    description: 'Aviation sector-specialist services including Passengers with Reduced Mobility (PRM).',
    page: 'aviation',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    title: 'Education',
    description: 'Inspiring the environments where learning and development thrive.',
    page: 'education',
  },
  {
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755598832/Company%20assests/download_9_mk9t7j.avif',
    title: 'Manufacturing',
    description: 'Maintaining efficient plants and product lines for the manufacturing industry.',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    title: 'Commercial',
    description: 'Enhanced workplace experiences for increased productivity and retention.',
    page: 'commercial',
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1761805092/Screenshot_2025-10-30_114751_vcadq1.png',
    title: 'Retail',
    description: 'Presenting your retail environment as your customers and consumers expect to find it.',
  },
];

const Services: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
  return (
    <section className="p-6 sm:p-8 md:p-12" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Sector specific services – where your mission becomes our mission
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto md:mx-0">
            Find out more about our people, technology and ESG initiatives for your sector.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
              onClick={(service as { page?: string }).page ? () => navigate((service as { page?: string }).page!) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;