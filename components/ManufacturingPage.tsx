import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

interface ManufacturingPageProps {
  navigate: (page: string) => void;
}

const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1762171346/Screenshot_2025-11-03_173203_nxh85y.png";
  const gold = '#D4B258';
  const darkGold = '#C3A24B';
  
  const [openFmAccordion, setOpenFmAccordion] = useState<number | null>(0);
  const [openServicesAccordion, setOpenServicesAccordion] = useState<number | null>(0);

  const fmAccordionData = [
    { title: 'Best Experiences for Manufacturing', content: 'We create environments that are not just functional but also foster a positive experience for everyone on site. This includes maintaining clean, safe, and comfortable facilities that contribute to higher morale and productivity.' },
    { title: 'Best Productivity for Manufacturing', content: 'Our services are designed to minimize downtime and optimize operational flow. From predictive maintenance of critical machinery to efficient logistics and waste management, we ensure your production lines run smoothly and without interruption.' },
    { title: 'Best Practices for Manufacturing', content: 'We implement industry-leading best practices, including GMP (Good Manufacturing Practice) cleaning and adherence to all regulatory standards. Our teams are trained to maintain audit-ready facilities at all times.' },
    { title: 'Best Resilience for Manufacturing', content: 'We build resilience into your operations with robust contingency planning and rapid response protocols. Our proactive approach helps mitigate risks and ensures business continuity, even in the face of unforeseen challenges.' },
    { title: 'Best Outcomes for Manufacturing', content: 'Our ultimate goal is to deliver the best outcomes for your business. This means improved efficiency, reduced operational costs, enhanced safety, and a stronger bottom line, allowing you to focus on your core manufacturing activities.' },
  ];

  const servicesAccordionData = [
      { title: 'Cleaning for Manufacturing', content: 'Specialized cleaning services designed for manufacturing environments, including GMP and cleanroom cleaning, to ensure compliance and safety.' },
      { title: 'Facilities Management for Manufacturing', content: 'Integrated FM services to manage all aspects of your facility, from maintenance to security, allowing you to focus on production.' },
      { title: 'Catering for Manufacturing', content: 'Nutritious and convenient catering options for your workforce, helping to boost morale and productivity on site.' },
      { title: 'Hard Services for Manufacturing', content: 'Maintenance of all mechanical, electrical, and plumbing systems to ensure your facility runs efficiently and without interruption.' },
      { title: 'Security for Manufacturing', content: 'Comprehensive security solutions to protect your assets, intellectual property, and personnel, including access control and surveillance.' },
      { title: 'Pest Control for Manufacturing', content: 'Proactive pest control programs to maintain a hygienic environment and prevent contamination, crucial for manufacturing standards.' },
  ];

  const toggleFmAccordion = (index: number) => setOpenFmAccordion(openFmAccordion === index ? null : index);
  const toggleServicesAccordion = (index: number) => setOpenServicesAccordion(openServicesAccordion === index ? null : index);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px] lg:min-h-[80vh]"
        role="banner"
        aria-labelledby="manufacturing-hero-heading"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-xl text-white shadow-xl border border-white/10">
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
                <button
                    style={{ backgroundColor: gold }}
                    className="text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C3A24B] transition-colors"
                >
                    Connect with Our Team
                </button>
                <a href="#" className="font-medium text-sm flex items-center group">
                    Contact
                    <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            <h1 id="manufacturing-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
                Manufacturing
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
                In manufacturing, every line has to keep running. We know your equipment has to perform, safety processes have to hold, and facilities have to be audit-ready at all times. ICS manages these demands on site every day, so production stays steady, and targets stay on track.
            </p>

            </div>
        </div>
      </div>
      
      {/* Manufacturing FM Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
                Manufacturing FM
              </h2>
              <p className="mt-6 text-gray-600">
                Our mission’s BEST strategy and ethos addresses five areas of concern highlighted by industry leaders in reference to facilities management: Experiences, Productivity, Practices, Resilience and Outcomes.
              </p>
            </div>
            <div className="mt-8">
              <button style={{backgroundColor: gold}} className="text-white font-semibold px-6 py-3 rounded-md hover:bg-[#C3A24B] transition-colors">
                Our Mission & Best Strategy
              </button>
            </div>
          </div>
          <div>
            {fmAccordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFmAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4"
                  aria-expanded={openFmAccordion === index}
                >
                  <span className="font-semibold text-lg text-gray-800">{item.title}</span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-[#D4B258]">
                    {openFmAccordion === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFmAccordion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="text-gray-600 pr-12 pt-2 pb-6">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            {servicesAccordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleServicesAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4"
                  aria-expanded={openServicesAccordion === index}
                >
                  <span className="font-semibold text-lg text-gray-800">{item.title}</span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-[#D4B258]">
                    {openServicesAccordion === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openServicesAccordion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="text-gray-600 pr-12 pt-2 pb-6">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full flex flex-col justify-between sticky top-28">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
                Services to overcome manufacturing challenges
              </h2>
              <p className="mt-6 text-gray-600">
                ICS exists to help make people and places the best they can be through facilities services that deliver best outcomes.
              </p>
            </div>
            <div className="mt-8">
              <button style={{backgroundColor: gold}} className="text-white font-semibold px-6 py-3 rounded-md hover:bg-[#C3A24B] transition-colors">
                Contact Our Manufacturing Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Working with you towards your Net Zero and ESG goals
            </h2>
            <p className="mt-6 text-gray-600">
              Our Sustainability Management System ensures that your operations run in line with your long-term objectives and carbon reduction policy. We help you contribute to the circular economy by reducing waste going to landfill, and work with you to help achieve all of your environmental goals.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you want to decarbonise your building, install solar panels or a biomass boiler, we support you to achieve your sustainability goals. From the big things like decarbonising your heating to the tiny details like installing LED lighting and motion-controlled sensors, we align every detail to a greener strategy.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Implementing eco-friendly practices including waste reduction and recycling in manufacturing facilities to minimises environmental impact.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Optimising energy consumption through intelligent building management and energy-efficient technologies to help reduce carbon footprints and meet energy conservation targets.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Enhancing workforce well-being and local community engagement, focusing on diversity, inclusion, and supporting community initiatives, fulfilling social ESG objectives.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
              alt="Sunlight filtering through green leaves"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Responsibility and opportunity for change Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Responsibility and opportunity for change
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            ICS is in a position to make a tangible difference to people and the planet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden group shadow-lg flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" alt="Environmental" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-gray-800">Environmental</h3>
                <button className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] group-hover:bg-[#C3A24B] transition-colors">
                  <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                  <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </button>
              </div>
              <p className="mt-2 text-gray-600 flex-grow">We are committed to environmental stewardship, focusing on sustainable practices and reducing our ecological...</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden group shadow-lg flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Social" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-gray-800">Social</h3>
                <button className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] group-hover:bg-[#C3A24B] transition-colors">
                  <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                  <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </button>
              </div>
              <p className="mt-2 text-gray-600 flex-grow">Fostering a socially responsible environment, prioritising community engagement, employee well-being, and...</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden group shadow-lg flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542372882-68393f6c3216?q=80&w=1974&auto=format&fit=crop" alt="Governance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-gray-800">Governance</h3>
                <button className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] group-hover:bg-[#C3A24B] transition-colors">
                  <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                  <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                </button>
              </div>
              <p className="mt-2 text-gray-600 flex-grow">Upholds robust governance, ensuring transparency, accountability, and ethical integrity across all global business...</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManufacturingPage;