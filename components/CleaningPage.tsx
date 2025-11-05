import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { OrangeCheckIcon } from './icons/OrangeCheckIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const gold = '#D4B258';
const darkGold = '#C3A24B';

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
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760682338/20251011_122848_l7rznq.jpg',
            title: 'Pest Control',
            description: 'Keep unwanted visitors at bay, protecting your facilities and your reputation.',
            page: null
        },
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758783499/66ed21480620ecbfa6f7b007_WhatsApp_Image_2024-09-20_at_12.44.22_ogslvs.jpg',
            title: 'Hard Services',
            description: 'Expert maintenance of your building\'s critical systems to ensure reliability.',
            page: 'hard-services'
        },
        {
            imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760682217/20251011_111137_cudjsv.jpg',
            title: 'Security Services',
            description: 'Protecting your people, assets, and premises with comprehensive security solutions.',
            page: 'security'
        }
    ];

    const SliderCard: React.FC<typeof sliderData[0]> = ({ imageSrc, title, description, page }) => (
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
                        className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-300 bg-[#D4B258] text-white group-hover:bg-[#C3A24B] disabled:cursor-not-allowed"
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
                    <p className="mt-4 text-gray-600">Need more than cleaning services? Discover more on our core services and integrated solutions.</p>
                    <div className="mt-8 flex items-center space-x-2">
                        <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#D4B258] text-white hover:bg-[#C3A24B] transition-colors" aria-label="Previous service">
                        <ArrowLeftIcon className="w-5 h-5" />
                        </button>
                        <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#D4B258] text-white hover:bg-[#C3A24B] transition-colors" aria-label="Next service">
                        <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                {/* Right Panel (Slider) */}
                <div className="lg:col-span-2 overflow-hidden">
                    <div ref={sliderRef} className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4 scrollbar-hide">
                        {sliderData.map(service => <SliderCard key={service.title} {...service} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};


const CleaningPage: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1760601598/20251011_123513_j51vjp.jpg";

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const statsData = [
    {
      iconUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760615452/reward_nbu3v0.png',
      value: '10+Yrs',
      description: 'Cleaning history and market leadership',
    },
    {
      iconUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760615444/golden-globe_n7vtze.png',
      value: '100+',
      description: 'Site cleans completed globally every day',
    },
    {
      iconUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760615444/link_t1dmtd.png',
      value: '1800+',
      description: 'In-house colleagues in our cleaning team',
    },
    {
      iconUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760615444/recycle-bin_q8hmif.png',
      value: '200+',
      description: 'Tonnes of refuse collected for recycling',
    },
  ];
  
  const accreditationLogos = [
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756694732/Screenshot_2025-09-01_080828_zmn2yn.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695411/Screenshot_2025-09-01_080959_lf0af8.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695412/Screenshot_2025-09-01_080949_xnlhji.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695422/Screenshot_2025-09-01_081015_lzgp24.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695422/Screenshot_2025-09-01_081022_woezag.png',
    'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756705834/Screenshot_2025-09-01_112016_u16iiu.png',
  ];

  const StatCard: React.FC<{ iconUrl: string; value: string; description: string }> = ({ iconUrl, value, description }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const target = parseInt(value.replace(/[,+Yrsyrs]/g, ''), 10);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                
                let startTime: number | null = null;
                const duration = 2000;

                const animate = (currentTime: number) => {
                    if (startTime === null) {
                        startTime = currentTime;
                    }

                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    
                    const easedProgress = 1 - Math.pow(1 - progress, 3); 

                    const currentCount = Math.floor(easedProgress * target);
                    setCount(currentCount);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        setCount(target);
                    }
                };
                requestAnimationFrame(animate);
            }
        },
        {
            threshold: 0.5,
        }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [target]);
  
    const formatValue = (currentCount: number) => {
        if (value.includes(',')) {
            return currentCount.toLocaleString();
        }
        return currentCount;
    };

    return (
        <div ref={ref} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100/50">
                <PngMaskIcon src={iconUrl} alt={description} />
            </div>
            <p className="text-4xl font-bold text-[#D4B258]">
            {formatValue(count)}
            {value.includes('+') && count === target && '+'}
            {(value.includes('Yrs') || value.includes('yrs')) && 'Yrs'}
            </p>
            <p className="mt-2 text-gray-700">{description}</p>
        </div>
    );
  };

  const faqData = [
    {
      question: 'What types of commercial properties do you service?',
      answer: 'We provide cleaning services for a wide range of commercial properties, including office buildings, retail spaces, educational institutions, healthcare facilities, data centres, and aviation hubs. Our services are tailored to meet the specific needs of each environment.'
    },
    {
      question: 'How do you ensure the quality and consistency of your cleaning services?',
      answer: 'We use a combination of highly trained staff, best-in-class equipment, and a robust quality assurance program. Regular inspections, client feedback channels, and performance analytics help us maintain the highest standards of cleanliness and service delivery.'
    },
    {
      question: 'Do you use eco-friendly cleaning products?',
      answer: 'Yes, sustainability is a core part of our service. We prioritize the use of environmentally friendly, non-toxic cleaning products and sustainable practices to minimize our ecological footprint while ensuring a safe and healthy environment for your occupants.'
    },
    {
      question: 'Can you provide cleaning services outside of regular business hours?',
      answer: 'Absolutely. We offer flexible scheduling, including after-hours, weekends, and holidays, to ensure our cleaning operations cause minimal disruption to your business.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="cleaning-hero-heading"
        style={{ 
          backgroundImage: `url('${backgroundImageUrl}')`,
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
          <div className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl text-white shadow-xl border border-white/10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <button onClick={() => navigate('careers')} className="bg-[#D4B258] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C3A24B] transition-colors">
                We're hiring
              </button>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('careers'); }} className="font-medium text-sm flex items-center group">
                Careers
                <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <h1 id="cleaning-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
              Commercial Cleaning Services
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
              Our detailed, data-driven commercial cleaning plans work around your business leaving you safe in the knowledge your facility is fit-for-purpose and best prepared to deliver the best outcomes.
            </p>
          </div>
        </div>
      </div>
      
      {/* ICS Cleaning operation in numbers Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                ICS Cleaning operation in numbers
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                At ICS, we are committed to creating cleaner, safer, and healthier environments. We recognize the critical importance of cleaning, hygiene, and infection control in safeguarding the well-being of people and enhancing the spaces they occupy.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {statsData.map((stat) => (
                    <StatCard key={stat.value} {...stat} />
                ))}
            </div>
        </div>
      </section>
      
      {/* Our cleaning services Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760609802/20251011_123540_qwn1hz.jpg"
                    alt="A friendly cleaning professional wiping a glass surface"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Our cleaning services
                </h2>
                <p className="mt-6 text-gray-600">
                    Our global cleaning teams are dedicated to creating cleaner, safer, and more inspiring spaces across thousands of locations — multiple times a day, every day of the year. With over 8 years of experience in cleaning innovation, we continue to redefine service excellence and operational efficiency. We look forward to connecting with you to explore how we can add value to your environment.
                </p>
                <p className="mt-4 text-gray-600">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="font-semibold text-[#D4B258] border-b-2 border-[#D4B258] hover:opacity-80 transition pb-1">Contact our team</a> to find out more detail on any of the service areas below.
                </p>
                <ul className="mt-8 space-y-3 text-gray-600">
                    {[
                        'Infection Prevention and Hygiene',
                        'Good Manufacturing Practice (GMP) Cleaning',
                        'Hazard Analysis and Critical Control Point (HACCP)',
                        'Commercial and Industrial Cleaning',
                        'Specialist, Window and High-Level Cleaning',
                        'Housekeeping Services',
                        'Washroom Services',
                        'Periodical Cleaning',
                        'Consumables',
                    ].map(item => (
                        <li key={item} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-300 mr-3 flex-shrink-0"></span>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-10">
                    <button onClick={() => navigate('contact')} className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                        Contact our Cleaning Team
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Sector-specialist cleaning and hygiene services Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Specialised Cleaning and Hygiene Solutions for Every Sector
                </h2>
                <p className="mt-6 text-gray-600">
                    Our commitment is to create environments that are clean, fresh, sanitised, and fully prepared for the day ahead. With expertise across diverse industries — including healthcare, education, manufacturing, retail, logistics, transport, and corporate sectors — our teams deliver precision-driven cleaning tailored to each environment’s unique needs. We understand that a safe, hygienic, and infection-free space isn’t just a necessity — it’s often the key factor that supports efficiency, wellbeing, and lasting success.
                </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760611811/WhatsApp_Image_2025-10-16_at_4.14.06_PM_d6epfc.jpg"
                    alt="Team of cleaning specialists"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </section>

      {/* Cleaning + ESG Section */}
      <section className="bg-[#F9FAF7] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Committed to a Cleaner, Greener Future
                </h2>
                <p className="mt-6 text-gray-600">
                   We are dedicated to reducing our environmental impact while helping our clients achieve their sustainability goals. Our approach focuses on innovation, responsibility, and inclusion in every aspect of our operations.
                </p>
                <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                        <OrangeCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" />
                        <span className="text-gray-700">We prioritise the use of microbial and bio-based (green) cleaning products, avoiding phosphates and aerosols entirely. Every product we use is chosen for its proven eco-credentials, effectiveness, and value.</span>
                    </li>
                    <li className="flex items-start">
                        <OrangeCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" />
                        <span className="text-gray-700">We are proud to hire and train a diverse workforce, creating opportunities for individuals from disadvantaged backgrounds and fostering inclusive growth.</span>
                    </li>
                    <li className="flex items-start">
                        <OrangeCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" />
                        <span className="text-gray-700">Our teams implement eco-friendly cleaning methods that minimise chemical usage, promote sustainable waste management, and encourage responsible consumption.</span>
                    </li>
                </ul>
                <div className="mt-10">
                    <button onClick={() => navigate('contact')} className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                        Connect with our ESG team to learn more
                    </button>
                </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760613713/florist-woman-wiping-flowers-leaves-kitchen-table-morning_sesqng.jpg"
                    alt="A person engaging in eco-friendly activities, representing ESG commitment."
                    className="w-full h-full object-cover aspect-[4/3]"
                />
            </div>
        </div>
      </section>

      {/* Cleaning + Technology Section */}
      <section className="bg-[#F9FAF7] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img 
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760614490/20251011_124538_d5znqf.jpg"
                    alt="A professional woman using a tablet in a modern office at night, representing technology in cleaning services."
                    className="w-full h-full object-cover aspect-[4/3]"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Technology-Driven Cleaning
                </h2>
                <p className="mt-6 text-gray-600">
                    The ICS Advance (Technology) team leverages cutting-edge technologies—including AI, AR, Robotics, Drones, and Smart Building solutions—to deliver tangible benefits to our customers. By proactively embracing innovation, we provide personalized, efficient, and immersive experiences, optimize operational workflows, and foster sustainable, energy-efficient environments.
                </p>
                <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                        <OrangeCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" />
                        <span className="text-gray-700">We are committed to hiring and training a diverse workforce, creating opportunities for individuals from underrepresented and disadvantaged backgrounds.</span>
                    </li>
                    <li className="flex items-start">
                        <OrangeCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" />
                        <span className="text-gray-700">Our robust platforms facilitate seamless audit management, ensuring compliance with industry standards and highlighting opportunities for continuous improvement.</span>
                    </li>
                    <li className="flex items-start">
                        <OrangeCheckIcon className="w-8 h-8 mr-3 mt-0 flex-shrink-0" />
                        <span className="text-gray-700">Additionally, our integrated communication tools enable facility managers, colleagues, and customers to respond promptly to requests, incidents, and feedback, ensuring a high level of service excellence.</span>
                    </li>
                </ul>
                <div className="mt-10">
                    <button onClick={() => navigate('contact')} className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                        Connect with our ICS Advance team to learn more
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Accreditations & Certifications Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Accreditations & Certifications
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Industry-specific accreditations and certification enabling our teams to deliver consistency, compliance and best practice.
          </p>
          <div className="mt-12">
            <div className="flex justify-center flex-wrap gap-6">
              {accreditationLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="bg-white border rounded-2xl p-4 flex items-center justify-center h-36 w-48 shadow-sm hover:shadow-md transition-shadow duration-300"
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
      </section>

      <FacilitiesServicesSlider navigate={navigate} />

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
      
      {/* Connect Section */}
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
                  Connect with our Cleaning Experts
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                  We're ready to create a cleaner, healthier, and more productive environment for you. Let's discuss your cleaning needs today.
              </p>
              <div className="mt-8">
                  <button onClick={() => navigate('contact')} className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200">
                      Contact our Cleaning Team
                  </button>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningPage;