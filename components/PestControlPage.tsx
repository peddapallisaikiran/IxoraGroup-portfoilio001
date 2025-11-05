import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { OrangeCheckIcon } from './icons/OrangeCheckIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const gold = '#D4B258';
const darkGold = '#C3A24B';

const FacilitiesServicesSlider: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const card = sliderRef.current.querySelector('div.snap-start');
            if (card) {
                const cardWidth = card.clientWidth;
                const scrollAmount = (cardWidth + 24) * (direction === 'left' ? -1 : 1);
                sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const sliderData = [
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760609802/20251011_123540_qwn1hz.jpg',
            title: 'Cleaning',
            description: 'Professional cleaning to ensure a hygienic and welcoming environment for all.',
            page: 'cleaning'
        },
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760682217/20251011_111137_cudjsv.jpg',
            title: 'Security Services',
            description: 'Protecting your people, assets, and premises with comprehensive security solutions.',
            page: 'security'
        },
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758783499/66ed21480620ecbfa6f7b007_WhatsApp_Image_2024-09-20_at_12.44.22_ogslvs.jpg',
            title: 'Hard Services',
            description: 'Expert maintenance of your building\'s critical systems to ensure reliability.',
            page: 'hard-services'
        },
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760613713/florist-woman-wiping-flowers-leaves-kitchen-table-morning_sesqng.jpg',
            title: 'Carbon & Energy',
            description: 'Working with you towards Net Zero and your broader ESG goals and commitments.',
            page: null
        },
    ];

    const SliderCard: React.FC<typeof sliderData[0] & { navigate: (page: string) => void }> = ({ imageSrc, title, description, page, navigate }) => (
        <div className="w-80 flex-shrink-0 snap-start bg-white rounded-2xl overflow-hidden group shadow-sm">
            <img src={imageSrc} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div className="p-6">
                 <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{description}</p>
                    </div>
                    <button 
                        onClick={() => page && navigate(page)}
                        disabled={!page}
                        className={`relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-300 text-white bg-[${gold}] group-hover:bg-[${darkGold}] disabled:cursor-not-allowed`}
                    >
                        <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                        <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-[#FEFBF9] rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Panel */}
                <div className="lg:col-span-1 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-800 !leading-tight tracking-tight">Facilities services designed for your organisation</h2>
                    <p className="mt-4 text-gray-600">Need more than just Pest Control? Discover our core services and integrated solutions.</p>
                    <div className="mt-8 flex items-center space-x-2">
                        <button onClick={() => scroll('left')} style={{ backgroundColor: gold }} className={`text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[${darkGold}] transition-colors`} aria-label="Previous service">
                        <ArrowLeftIcon className="w-5 h-5" />
                        </button>
                        <button onClick={() => scroll('right')} style={{ backgroundColor: gold }} className={`text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[${darkGold}] transition-colors`} aria-label="Next service">
                        <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                {/* Right Panel (Slider) */}
                <div className="lg:col-span-2 overflow-hidden">
                    <div ref={sliderRef} className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4 scrollbar-hide">
                        {sliderData.map(service => <SliderCard key={service.title} {...service} navigate={navigate}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
};


const PestControlPage: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1761646581/20251011_122848_1_ecmddi.jpg";

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: 'What types of pests do you handle?',
      answer: 'We manage a wide range of pests including rodents (rats, mice), insects (cockroaches, ants, flies, termites), and birds. Our services are tailored to the specific pest and environment to ensure effective and safe removal.'
    },
    {
      question: 'Is your pest control service safe for commercial environments?',
      answer: 'Absolutely. We prioritize safety by using Integrated Pest Management (IPM) techniques, which focus on environmentally sensitive solutions. All products are used in accordance with regulations and with minimal disruption to your operations.'
    },
    {
      question: 'How often should I schedule pest control services?',
      answer: 'The frequency of service depends on several factors, including the type of facility, the level of pest activity, and regulatory requirements. We offer everything from one-time services to ongoing monitoring and prevention plans. We will recommend a schedule after an initial inspection.'
    },
    {
      question: 'Do you provide emergency pest control services?',
      answer: 'Yes, we understand that some pest problems require immediate attention. We offer rapid response services to address urgent infestations and minimize potential damage or health risks.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="pest-control-hero-heading"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
          <div className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl text-white shadow-xl border border-white/10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <button onClick={() => navigate('careers')} style={{backgroundColor: gold}} className="text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors">
                We're hiring
              </button>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('careers'); }} className="font-medium text-sm flex items-center group">
                ICS Careers
                <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <h1 id="pest-control-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
              Pest Control
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
              Pest control services offer proactive solutions, ensuring your premises are safeguarded against infestations, maintaining a hygienic environment.
            </p>
          </div>
        </div>
      </div>
      
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1761647355/Screenshot_2025-10-28_155859_xefs1r.png"
                    alt="A pest control professional at work"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Protecting Your Environment
                </h2>
                <p className="mt-6 text-gray-600">
                    Our pest control services are designed to be discreet, effective, and environmentally responsible. We protect your brand and ensure the health and safety of your employees and customers.
                </p>
                <ul className="mt-8 space-y-3 text-gray-600">
                    {['Integrated Pest Management (IPM)', 'Rodent, Insect, and Bird Control', 'Regular Monitoring & Prevention', 'Compliance with Health & Safety Standards', 'Discreet and Professional Service', 'Emergency Call-Outs'].map(item => (
                        <li key={item} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300 mr-3 flex-shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-10">
                    <button onClick={() => navigate('contact')} style={{backgroundColor: gold}} className={`text-white font-semibold px-6 py-3 rounded-full hover:bg-[${darkGold}] transition-colors inline-block`}>
                        Contact our Pest Control Team
                    </button>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Solutions for Every Sector
                </h2>
                <p className="mt-6 text-gray-600">
                    We understand that different industries face unique pest challenges. Our experts are trained to provide sector-specific solutions for healthcare, food processing, hospitality, retail, and more, ensuring you meet all regulatory requirements.
                </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img 
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop"
                  alt="A clean commercial kitchen"
                  className="w-full h-full object-cover"
              />
            </div>
        </div>
      </section>

      <FacilitiesServicesSlider navigate={navigate} />

      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight mb-10 text-center">
            Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                    <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-start py-6 text-left gap-4" aria-expanded={openFaq === index}>
                        <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                        <div className="flex-shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-[#D4B258]">
                             {openFaq === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                        </div>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <div className="text-gray-600 pr-12 pt-2 pb-6"><p>{faq.answer}</p></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
      <section className="py-8">
        <div className="relative rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden" style={{ backgroundColor: '#192A51' }} >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" aria-hidden="true" ></div>
          <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold !leading-tight tracking-tight">
                  Protect Your Premises Today
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                  Don't let pests compromise your business. Contact our expert team for a comprehensive consultation and tailored pest management plan.
              </p>
              <div className="mt-8">
                  <button onClick={() => navigate('contact')} style={{backgroundColor: gold}} className={`text-white font-semibold px-8 py-3 rounded-full hover:bg-[${darkGold}] transition-colors duration-200`}>
                      Contact our Pest Control Team
                  </button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestControlPage;