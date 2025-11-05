import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const CommercialPage: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756546863/download_27_q5mrns.avif";
  
  const [openService, setOpenService] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceData = [
    {
      question: 'Facilities Management for Commercial',
      answer: 'Our integrated facilities management ensures your commercial spaces are efficient, safe, and welcoming, allowing you to focus on your core business operations while we handle the rest.'
    },
    {
      question: 'Cleaning for Commercial',
      answer: 'We provide top-tier cleaning services tailored to commercial environments, ensuring a pristine and hygienic space that enhances productivity and leaves a lasting impression on clients and employees.'
    },
    {
      question: 'Hard Services for Commercial',
      answer: 'Our expert team manages all essential hard services, including HVAC, electrical, and plumbing systems, to ensure your facilities are running smoothly and reliably around the clock.'
    },
    {
      question: 'Pest Control for Commercial',
      answer: 'We offer discreet and effective pest control solutions to protect your commercial property, ensuring a safe and healthy environment for everyone.'
    },
  ];

  const faqData = [
    {
      question: 'What role does facilities management play in enhancing the professional image and client experience?',
      answer: 'Effective facilities management is pivotal in creating a professional and welcoming environment. It ensures that all aspects of your premises, from cleanliness to operational efficiency, contribute positively to the client and employee experience, thereby enhancing your brand image.'
    },
    {
      question: 'Can you share case studies showcasing successful projects in the commercial sector?',
      answer: 'Yes, we have a comprehensive portfolio of case studies from various commercial clients, demonstrating our ability to deliver cost-effective and high-quality facilities management solutions. These are available upon request.'
    },
    {
      question: 'What are the key facilities management services essential for commercial buildings?',
      answer: 'Key services include integrated facilities management, cleaning, hard services (MEP), pest control, and security. These ensure a safe, clean, and efficient working environment.'
    },
    {
      question: 'How do you maintain a clean and hygienic environment within commercial spaces?',
      answer: 'We employ a combination of scheduled cleaning, advanced technologies like robotic cleaners, and adherence to the highest hygiene standards to ensure your commercial spaces are always pristine.'
    },
    {
      question: 'Can you tailor your services to suit the unique needs of different commercial establishments?',
      answer: 'Absolutely. We pride ourselves on creating bespoke service plans that are tailored to the specific needs, size, and operational requirements of each commercial client.'
    },
    {
      question: 'What measures do you take to minimise disruptions during maintenance and repairs in commercial buildings?',
      answer: 'All maintenance and repair activities are planned in close coordination with our clients and are typically scheduled during off-peak hours or weekends to minimize any disruption to your business operations.'
    },
    {
      question: 'Can you handle urgent situations such as power outages or plumbing issues promptly in commercial spaces?',
      answer: 'Yes, we have rapid response teams on standby 24/7 to address any urgent issues like power outages or plumbing emergencies, ensuring quick resolution and minimal downtime.'
    },
    {
      question: 'How do you contribute to environmental sustainability?',
      answer: 'We are committed to sustainability and help our clients achieve their ESG goals through energy-efficient solutions, waste management programs, and the use of eco-friendly products.'
    },
    {
      question: 'Can you help design and maintain workspaces that accommodate evolving needs and collaboration?',
      answer: 'Yes, we offer workspace optimization services that help you design and maintain flexible and collaborative environments that can adapt to the evolving needs of your workforce.'
    },
    {
      question: 'What measures are taken to maintain confidentiality, privacy, and compliance within the commercial sector?',
      answer: 'We adhere to strict confidentiality and privacy protocols. Our staff is thoroughly vetted and trained, and we ensure full compliance with all relevant industry regulations and standards.'
    }
  ];

  const customerStories = [
    {
      imageSrc: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
      category: "Catering",
      title: "NHS food transformation that's having a positive environmental impact in the community",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop",
      category: "Sustainability",
      title: "Driving sustainability goals to enhance London's natural heritage with The Royal Parks",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1444492417206-81825a6e4e52?q=80&w=2070&auto=format&fit=crop",
      category: "Sustainability",
      title: "Improving sustainability at Greenham Business Park by focusing on CO2 reduction",
    }
  ];

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const accreditationLogos = [
    { src: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756694732/Screenshot_2025-09-01_080828_zmn2yn.png', alt: 'Accreditation logo 1' },
    { src: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695411/Screenshot_2025-09-01_080959_lf0af8.png', alt: 'Accreditation logo 2' },
    { src: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695412/Screenshot_2025-09-01_080949_xnlhji.png', alt: 'Accreditation logo 3' },
    { src: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695422/Screenshot_2025-09-01_081015_lzgp24.png', alt: 'Accreditation logo 4' },
    { src: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756695422/Screenshot_2025-09-01_081022_woezag.png', alt: 'Accreditation logo 5' },
    { src: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756705834/Screenshot_2025-09-01_112016_u16iiu.png', alt: 'Accreditation logo 6' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="commercial-hero-heading"
        style={{ 
          backgroundImage: `url('${backgroundImageUrl}')`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
          <div className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl text-white shadow-xl border border-white/10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <a href="#" style={{ backgroundColor: '#D4B258' }} className="text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C3A24B] transition-colors">
                We're hiring
              </a>
              <a href="#" className="font-medium text-sm flex items-center group">
                IxoraGroup Careers
                <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <h1 id="commercial-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
              Commercial
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
              Working with you and facing the modern-day challenges and creating efficient environments that are remarkable and help attract, retain and motivate your teams.
            </p>
          </div>
        </div>
      </div>

      {/* Driving Productivity Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Driving the best productivity and outcomes for commerce
            </h2>
            <p className="mt-6 text-gray-600">
              As businesses navigate the complexities of bringing teams back to the office, facilities services play a critical role in the current commercial landscape.
            </p>
            <p className="mt-4 text-gray-600">
              Our services, from regular cleaning to specialised technical support, are designed to meet commercial spaces' diverse needs, allowing businesses to concentrate on their primary operations and ensure that their office environments are well-maintained and welcoming for returning teams.
            </p>
            <p className="mt-6 font-semibold text-gray-700">
              View Facilities Management (FM) or Single-Service solutions below.
            </p>
            <div className="mt-8">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Contact Our Commercial Team
              </a>
            </div>
          </div>
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756547290/Screenshot_2025-08-30_151752_ipkpaj.png"
              alt="A smiling professional at a reception desk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Accordion Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Accordion */}
          <div className="lg:col-span-2">
            {serviceData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleService(index)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4"
                  aria-expanded={openService === index}
                >
                  <span className="font-semibold text-lg text-gray-800">{item.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#D4B258] text-white">
                    {openService === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openService === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="text-gray-600 pr-12 pt-2 pb-6">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-[#FEFBF9] p-8 rounded-2xl border border-gray-100 h-full flex flex-col justify-center sticky top-28">
            <h2 className="text-3xl font-bold text-gray-800 !leading-tight">
              Services for commercial facilities spaces to operate at their best
            </h2>
            <p className="mt-6 text-gray-600">
              IxoraGroup exists to help make people and places the best they can be through market-leading facilities services for best outcomes.
            </p>
            <div className="mt-10">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Keeping your commercial premises looking the part Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Industry Accreditations: Quality Control and Compliance
            </h2>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                When you're running a business, it's imperative that everything runs like clockwork. The environment needs to bring the best out of our employees, while visitors and customers should be instantly impressed.
              </p>
              <p>
                Our integrated facilities management services for commercial customers help you deliver uninterrupted and hassle-free services while we keep everything in perfect working order behind the scenes.
              </p>
            </div>
          </div>
          {/* Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {accreditationLogos.map((logo, index) => (
              <div key={index} className="bg-white border border-amber-100 rounded-2xl p-4 flex items-center justify-center h-28 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={logo.src} alt={logo.alt} className="max-h-16 object-contain" />
              </div>
            ))}
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
            Our approach to service aligns with our customer's ESG goals and commitments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Environmental Card */}
          <div className="bg-[#FEFBF9] border border-gray-100 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
                alt="Lush green forest from above"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-800">
                      Environmental
                  </h3>
                  <a href="#" className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] hover:bg-[#C3A24B] transition-colors">
                      <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                      <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                  </a>
              </div>
              <p className="mt-2 text-gray-600 flex-grow pr-12 text-sm">
                We are committed to environmental stewardship, focusing on sustainable practices and reducing our ecological...
              </p>
            </div>
          </div>
          {/* Social Card */}
          <div className="bg-[#FEFBF9] border border-gray-100 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img
                src="https://res.cloudinary.com/dehglnwgz/image/upload/v1762236029/Screenshot_2025-11-04_112941_iwbiib.png"
                alt="A smiling professional woman"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-800">
                      Social
                  </h3>
                  <a href="#" className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] hover:bg-[#C3A24B] transition-colors">
                      <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                      <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                  </a>
              </div>
              <p className="mt-2 text-gray-600 flex-grow pr-12 text-sm">
                Fostering a socially responsible environment, prioritising community engagement, employee well-being, and...
              </p>
            </div>
          </div>
          {/* Governance Card */}
          <div className="bg-[#FEFBF9] border border-gray-100 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img
                src="https://res.cloudinary.com/dehglnwgz/image/upload/v1762235961/Unknown-Facts-About-Telangana-New-Secretariat_dd8hqi.webp"
                alt="Modern skyscrapers reflecting the sun"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-800">
                      Governance
                  </h3>
                  <a href="#" className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] hover:bg-[#C3A24B] transition-colors">
                      <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                      <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                  </a>
              </div>
              <p className="mt-2 text-gray-600 flex-grow pr-12 text-sm">
                Upholds robust governance, ensuring transparency, accountability, and ethical integrity across all global business...
              </p>
            </div>
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

      {/* Customer Stories Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Customer stories
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we're helping our customers be the best they can be.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b-2 border-[#D4B258] hover:opacity-80 transition">
                    Read their story
                  </a>
                </div>
              </div>
            ))}
          </div>
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
                      Contact Our Commercial Team
                  </button>
              </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CommercialPage;