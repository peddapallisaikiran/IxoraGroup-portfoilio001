import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const AviationPage: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop";

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openServiceAccordion, setOpenServiceAccordion] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accordionData = [
    {
      question: 'Best Experiences for Aviation',
      answer: 'We deliver integrated FM services to the aviation sector to ensure that travellers and colleagues feel secure and sheltered in the airports, lounges, and terminals we serve. We assist in creating spaces that attract and retain the right personnel, enhancing the overall travel experience for your customers.'
    },
    {
      question: 'Best Productivity for Aviation',
      answer: 'Our productivity solutions for aviation include streamlined check-in processes, efficient baggage handling systems, and optimized passenger flow management. This ensures timely departures and a smooth journey for passengers.'
    },
    {
      question: 'Best Practices for Aviation',
      answer: 'We adhere to the highest international standards for aviation facility management. Our best practices include rigorous safety protocols, regular maintenance schedules, and continuous training for our staff to ensure operational excellence.'
    },
    {
      question: 'Best Resilience for Aviation',
      answer: 'We build resilience into our services by implementing robust contingency plans, utilizing predictive maintenance for critical systems, and ensuring rapid response teams are available 24/7 to handle any operational disruptions.'
    },
    {
      question: 'Best Outcome for Aviation',
      answer: 'Our goal is to deliver the best outcomes for our aviation partners, including enhanced passenger satisfaction, improved operational efficiency, reduced costs, and a reputation for safety and reliability.'
    }
  ];
  
  const serviceAccordionData = [
      {
          question: 'Facilities Management (FM) for Aviation',
          answer: 'FM services streamline operations, can reduce costs, and improve efficiency. Managing various operational aspects, we help airports and airlines focus on their core activities, enhancing overall performance and passenger satisfaction.'
      },
      {
          question: 'Hard Services for Aviation',
          answer: 'Our hard services cover all mechanical, electrical, and plumbing (MEP) systems, ensuring that the airport infrastructure is reliable and efficient. This includes HVAC, power systems, and runway lighting maintenance.'
      },
      {
          question: 'Cleaning for Aviation',
          answer: 'We provide specialized cleaning services for high-traffic areas like terminals, lounges, and restrooms, using eco-friendly products and smart technologies to maintain the highest standards of hygiene.'
      },
      {
          question: 'Pest Control for Aviation',
          answer: 'Our integrated pest management solutions are crucial for maintaining a safe and healthy environment in airports, preventing disruptions to operations and ensuring compliance with international health regulations.'
      }
  ];

  const faqData = [
    {
      question: 'Can you customise facilities management plans to meet the complexities of transport facilities?',
      answer: 'We recognise the distinctive demands of aviation and gateways facilities and collaborate closely with each entity to craft customised facilities management plans that address specific aviation regulations, safety protocols, and operational needs.'
    },
    {
      question: 'Can you handle response protocols and manage critical systems at transport facilities efficiently?',
      answer: 'Absolutely. Our teams are trained in emergency response protocols and are proficient in managing critical systems like baggage handling, HVAC, and fire safety to ensure minimal disruption and maximum safety.'
    },
    {
      question: 'Can you provide case studies showcasing successful projects undertaken for transport facilities?',
      answer: 'Yes, we have a portfolio of successful projects with major airports and transport hubs. We can provide detailed case studies upon request that demonstrate our expertise and the positive outcomes we\'ve delivered for our clients.'
    },
    {
      question: 'How do you ensure compliance for transport facilities?',
      answer: 'Compliance is at the core of our operations. We stay updated with all local and international aviation regulations, conduct regular audits, and ensure our staff is fully trained to meet all compliance requirements.'
    },
    {
      question: 'How do you ensure environmental sustainability and safety compliance for transport settings?',
      answer: 'We implement green cleaning practices, waste management programs to increase recycling, and energy-efficient solutions. Safety is paramount, with strict adherence to all safety regulations and continuous training for our teams.'
    },
    {
      question: 'What specific facilities management services do you offer for transport facilities?',
      answer: 'We offer a comprehensive suite of services including hard services (MEP), soft services (cleaning, pest control), passenger assistance (Digi Buddy), airfield marking, and project management, all tailored to the unique needs of the aviation sector.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
  const toggleServiceAccordion = (index: number) => {
    setOpenServiceAccordion(openServiceAccordion === index ? null : index);
  };
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const customerStories = [
    {
      imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1762237531/Screenshot_2025-11-04_115400_qurbcx.png",
      category: "Technology",
      title: "Safeguarding our customers site and technology with guarding and cyber security.",
      page: "under-development",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
      category: "Catering",
      title: "NHS food transformation that's having a positive environmental impact in the community.",
      page: "under-development",
    },
    {
      imageSrc: "https://res.cloudinary.com/dehglnwgz/image/upload/v1762237643/Screenshot_2025-11-04_115702_ctdoui.png",
      category: "Sustainability",
      title: "Improving sustainability at Greenham Business Park by focusing on CO2 reduction.",
      page: "under-development",
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="aviation-hero-heading"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), transparent), url('${backgroundImageUrl}')`
        }}
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl text-white shadow-xl border border-white/10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                <a href="#" className="bg-[#D4B258] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C3A24B] transition-colors">
                    We're hiring
                </a>
                <a href="#" className="font-medium text-sm flex items-center group">
                    IxoraGroup Careers
                    <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            <h1 id="aviation-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
                Aviation
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
                Trusted by over sixty airlines and airports, we're delivering aviation facilities services throughout the globe. Our responsibility is to prioritise passengers and ensure best resilience and experiences.
            </p>
            </div>
        </div>
      </div>

      {/* Aviation Sector Services Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Aviation sector services
            </h2>
            <p className="mt-6 text-gray-600">
              IxoraGroup provides facilities services for airlines and airports, including engineering services, cleaning, project management, energy management, airfield marking solutions, operations and maintenance of baggage belt systems and scanning systems and concierge support. Our services ensure a seamless, secure, and comfortable experience for passengers and colleagues, from check-in to boarding, across global aviation hubs.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Integrated Facility Management</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Digi Buddy, Passenger Services and Information Desks</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Project Management</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Energy Management</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Airfield Marking Solutions</span>
              </li>
            </ul>
          </div>
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756202534/Company%20assests/download_22_iaub6t.avif"
              alt="Sunset view from an airport terminal with a plane taking off."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Aviation Facilities Management Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Text content */}
          <div className="bg-[#FEFBF9] p-8 rounded-2xl border border-gray-100 h-full">
            <h2 className="text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Aviation Facilities Management
            </h2>
            <p className="mt-6 text-gray-600">
              Our mission’s BEST strategy and ethos addresses five areas of concern highlighted by industry leaders in reference to facilities management: Experiences, Productivity, Practices, Resilience and Outcomes.
            </p>
          </div>
          {/* Right Accordion content */}
          <div>
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4"
                  aria-expanded={openAccordion === index}
                >
                  <span className="font-semibold text-lg text-gray-800">{item.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-50 text-[#D4B258]">
                    {openAccordion === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openAccordion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="text-gray-600 pr-12 pt-2 pb-6">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Customer Stories Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Customer stories
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we're helping our customers be the best they can be.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerStories.map((story, index) => (
              <div key={index} className="rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col bg-[#FEFBF9]">
                <div className="overflow-hidden">
                  <img
                    src={story.imageSrc}
                    alt={story.category}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-semibold text-gray-600">{story.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                    {story.title}
                  </h3>
                  <a href="#" onClick={(e) => { e.preventDefault(); if(story.page) navigate(story.page) }} className="mt-4 font-semibold text-[#D4B258] self-start border-b-2 border-[#D4B258] hover:opacity-80 transition">
                    Read their story
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities services for Aviation Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Accordion content */}
          <div>
            {serviceAccordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleServiceAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4"
                  aria-expanded={openServiceAccordion === index}
                >
                  <span className="font-semibold text-lg text-gray-800">{item.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amber-50 text-[#D4B258]">
                    {openServiceAccordion === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openServiceAccordion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="text-gray-600 pr-12 pt-2 pb-6">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Text content */}
          <div className="bg-[#FEFBF9] p-8 rounded-2xl border border-gray-100 h-full sticky top-28">
            <h2 className="text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Facilities services for Aviation
            </h2>
            <p className="mt-6 text-gray-600">
              Our mission is to make people and places the best they can be, and this is reflected in our comprehensive service offerings for the aviation industry.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight mb-10">
            Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                    <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-start py-6 text-left gap-4"
                        aria-expanded={openFaq === index}
                    >
                        <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                        <div className="flex-shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-[#D4B258]">
                             {openFaq === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                        </div>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <div className="text-gray-600 pr-12 pt-2 pb-6">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
      {/* Connect with your IxoraGroup team Section */}
      <section className="py-8">
        <div 
          className="relative rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden" 
          style={{ backgroundColor: '#192A51' }}
        >
          <div 
              className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"
              aria-hidden="true"
          ></div>
          <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold !leading-tight tracking-tight">
                  Connect with your IxoraGroup team
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                  We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
              </p>
              <div className="mt-8">
                  <button onClick={() => navigate('contact')} className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200">
                      Contact Us
                  </button>
              </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AviationPage;