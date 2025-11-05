import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const servicesData = [
  {
    id: 'strategy',
    title: 'Integrated Facility Management',
    subtitle: 'Excellence in Every Facility. Innovation in Every Step.',
    description: 'We are India’s largest and most innovative integrated facility management company, delivering end-to-end solutions tailored to your needs. From security and soft services to managing studios and large-scale infrastructures, we handle it all with precision and efficiency.',
    link: '#'
  },
  {
    id: 'protection',
    title: 'Security & Soft Services',
    subtitle: 'Seamless operations. Smarter facilities.',
    description: 'Our integrated facility management solutions cover everything from security and soft services to managing large infrastructures and studios. With advanced technology and expert teams, we ensure smooth operations, enhanced safety, and optimal resource management—delivering efficiency and excellence at every step.',
    link: '#'
  },
  {
    id: 'vigilance',
    title: 'Technology-Driven Operations',
    subtitle: 'Smarter facilities through innovation.',
    description: 'With technology-driven operations, we integrate cutting-edge digital tools, IoT solutions, and data analytics into facility management. From automated monitoring to predictive maintenance, our tech-enabled approach ensures seamless processes, cost efficiency, and improved decision-making—delivering future-ready facilities that evolve with your business needs.',
    link: '#'
  }
];

const WhatWeDo: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  return (
    <section className="bg-white rounded-3xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div style={{ backgroundColor: '#D4B258' }} className="p-6 sm:p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-10 text-white">What we do</h2>
          <div className="space-y-4">
            {servicesData.map(service => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`w-full text-left text-xl font-semibold p-4 rounded-xl transition-all duration-300 ${
                  activeServiceId === service.id
                    ? 'bg-white text-[#D4B258]'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 sm:p-8 md:p-12 flex flex-col justify-center relative min-h-[350px]">
          {servicesData.map(service => (
            <div
              key={service.id}
              className={`transition-opacity duration-500 ease-in-out ${activeServiceId === service.id ? 'opacity-100' : 'opacity-0 absolute'}`}
              aria-hidden={activeServiceId !== service.id}
            >
                <h3 className="text-2xl font-bold text-gray-800">{service.subtitle}</h3>
                <p className="mt-4 text-gray-600">
                    {service.description}
                </p>
                <a 
                    href={service.link}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-gray-800 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors group"
                >
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;