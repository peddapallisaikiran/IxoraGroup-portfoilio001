import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const gold = '#D4B258';
const darkGold = '#C3A24B';

const SecurityCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill={gold} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 12 2 2 4-4" stroke="white" />
    </svg>
  );

const PngMaskIcon: React.FC<{ src: string; alt: string; }> = ({ src, alt }) => (
    <div 
        className="w-10 h-10"
        style={{
            backgroundColor: gold,
            maskImage: `url(${src})`,
            WebkitMaskImage: `url(${src})`,
            maskSize: 'contain',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
        }}
        role="img"
        aria-label={alt}
    />
);

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
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760613713/florist-woman-wiping-flowers-leaves-kitchen-table-morning_sesqng.jpg',
            title: 'Carbon & Energy',
            description: 'Working with you towards Net Zero and your broader ESG goals and commitments.',
            page: null
        },
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760609802/20251011_123540_qwn1hz.jpg',
            title: 'Cleaning',
            description: 'Professional cleaning to ensure a hygienic and welcoming environment for all.',
            page: 'cleaning'
        },
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758790719/WhatsApp_Image_2025-07-30_at_17.13.32_26bd4fe4_vzkt0r.jpg',
            title: 'Hard Services',
            description: 'Expert maintenance of your building\'s critical systems to ensure reliability.',
            page: 'hard-services'
        },
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760682338/20251011_122848_l7rznq.jpg',
            title: 'Pest Control',
            description: 'Keep unwanted visitors at bay, protecting your facilities and your reputation.',
            page: null
        }
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
                    <p className="mt-4 text-gray-600">Need more than security? Discover our core services and integrated solutions.</p>
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


const SecurityPage: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1761126803/20251011_104541_vuj0md.jpg";

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const accreditationLogos = [
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756694732/Screenshot_2025-09-01_080828_zmn2yn.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695411/Screenshot_2025-09-01_080959_lf0af8.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695412/Screenshot_2025-09-01_080949_xnlhji.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695422/Screenshot_2025-09-01_081015_lzgp24.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695422/Screenshot_2025-09-01_081022_woezag.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756705834/Screenshot_2025-09-01_112016_u16iiu.png',
  ];

  const faqData = [
    {
      question: 'What types of properties do you service?',
      answer: 'We provide security services for a wide range of properties, including corporate offices, retail establishments, industrial sites, data centers, educational campuses, and aviation facilities. Our solutions are always tailored to the specific risks and needs of each environment.'
    },
    {
      question: 'How do you vet and train your security personnel?',
      answer: 'All our security personnel undergo a rigorous vetting process, including background checks and interviews. They then receive comprehensive training that covers not only standard security protocols but also customer service, emergency response, and sector-specific requirements.'
    },
    {
      question: 'Do you offer 24/7 monitoring services?',
      answer: 'Yes, we provide 24/7 remote monitoring services from our state-of-the-art control centers. Using advanced surveillance technology, we can monitor your premises, detect threats in real-time, and dispatch response teams immediately.'
    },
    {
      question: 'Can you customize a security plan for my business?',
      answer: 'Absolutely. We begin every partnership with a thorough risk assessment to understand your unique vulnerabilities and requirements. Based on this, we design a bespoke security plan that integrates the right mix of personnel, technology, and procedures to provide optimal protection.'
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
        aria-labelledby="security-hero-heading"
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
                IxoraGroup Careers
                <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <h1 id="security-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
              Security Services
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
              Comprehensive security solutions to protect your people, assets, and premises. We provide peace of mind through a blend of expert personnel and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
      
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1761127177/20251011_110548_fpvimw.jpg"
                    alt="A professional security guard"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Our Security Services
                </h2>
                <p className="mt-6 text-gray-600">
                    Our global security teams are dedicated to creating safer environments across thousands of locations. With over 10 years of experience, we continue to set new standards in security excellence and operational efficiency.
                </p>
                <ul className="mt-8 space-y-3 text-gray-600">
                    {['Manned Guarding', 'Electronic Security Systems (CCTV, Access Control)', 'Mobile Patrols & Keyholding', 'Event Security', 'Risk Assessment & Consultancy', 'Cyber Security Services', 'Remote Monitoring'].map(item => (
                        <li key={item} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300 mr-3 flex-shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-10">
                    <button onClick={() => navigate('contact')} style={{backgroundColor: gold}} className={`text-white font-semibold px-6 py-3 rounded-full hover:bg-[${darkGold}] transition-colors inline-block`}>
                        Contact our Security Team
                    </button>
                </div>
            </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Sector-Specialist Security Solutions
                </h2>
                <p className="mt-6 text-gray-600">
                    Our commitment is to provide tailored security that meets the unique demands of each industry. With expertise across diverse sectors—including corporate, retail, aviation, data centers, and healthcare—our teams deliver precision-driven security designed for each environment’s specific risks.
                </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1762333774/20251011_121435_fpngbx.jpg"
                    alt="Airport security"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </section>

      <section className="bg-[#FEFBF9] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Committed to Safe and Sustainable Communities
                </h2>
                <p className="mt-6 text-gray-600">
                   Our ESG commitment is integral to our security operations. We focus on creating a positive social impact through community safety initiatives, promoting diversity within our workforce, and operating with the highest ethical standards.
                </p>
                <ul className="mt-8 space-y-4">
                    <li className="flex items-start"><SecurityCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" /><span>We ensure our operations are environmentally responsible by optimizing patrol routes and using energy-efficient technologies.</span></li>
                    <li className="flex items-start"><SecurityCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" /><span>We are proud to hire and train a diverse workforce, creating opportunities for individuals from all backgrounds.</span></li>
                    <li className="flex items-start"><SecurityCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" /><span>Our teams engage in local community programs to enhance public safety and build trust.</span></li>
                </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1762333765/20251011_121242_sxw2an.jpg"
                    alt="Community engagement"
                    className="w-full h-full object-cover aspect-[4/3]"
                />
            </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Accreditations & Certifications
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our adherence to industry standards demonstrates our commitment to delivering consistent, compliant, and best-practice security solutions.
          </p>
          <div className="mt-12">
            <div className="flex justify-center flex-wrap gap-6">
              {accreditationLogos.map((logo, index) => (
                <div key={index} className="bg-white border rounded-2xl p-4 flex items-center justify-center h-36 w-48 shadow-sm hover:shadow-md transition-shadow duration-300" style={{ borderColor: 'rgba(212, 178, 88, 0.3)' }} >
                  <img src={logo} alt={`Accreditation logo ${index + 1}`} className="max-h-24 object-contain"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FacilitiesServicesSlider navigate={navigate} />

      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight mb-10">
            Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
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
                  Connect with our Security Experts
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                  We're ready to create a safer, more secure environment for you. Let's discuss your security needs today.
              </p>
              <div className="mt-8">
                  <button onClick={() => navigate('contact')} style={{backgroundColor: gold}} className={`text-white font-semibold px-8 py-3 rounded-full hover:bg-[${darkGold}] transition-colors duration-200`}>
                      Contact our Security Team
                  </button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;