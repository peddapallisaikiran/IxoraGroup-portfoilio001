import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

// FIX: Add navigate prop type to fix error on line 301
interface EducationPageProps {
  navigate: (page: string) => void;
}

const EducationPage: React.FC<EducationPageProps> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1762228498/education-sector-hero_z8qxtg.png";

  const [openService, setOpenService] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceData = [
    {
      question: 'Cleaning for Education',
      answer: 'Regular cleaning, scheduled around your operations, helps keep your stores and facilities looking their best, around the clock. We make sure you have a hygienic and safe place for students and educators alike.'
    },
    {
      question: 'Facilities Management for Education',
      answer: 'Our integrated facilities management solutions ensure that educational institutions run smoothly and efficiently. We handle everything from maintenance to operational support, creating an optimal learning environment.'
    },
    {
      question: 'Hard Services for Education',
      answer: 'We provide essential hard services, including maintenance of HVAC, electrical, and plumbing systems, to ensure the safety, comfort, and functionality of all educational facilities.'
    },
    {
      question: 'Pest Control for Education',
      answer: 'Our comprehensive pest control services protect students and staff by maintaining a pest-free environment, crucial for health and safety in schools, colleges, and universities.'
    },
  ];

  const faqData = [
    {
      question: 'What facilities management services are crucial for educational institutions?',
      answer: 'Crucial services include comprehensive cleaning, hard services for MEP systems, safety and security management, and pest control to ensure a conducive and safe learning environment.'
    },
    {
      question: 'How can facilities management services be customised to suit the needs of educational institutions?',
      answer: 'We collaborate closely with each institution to develop bespoke plans that align with their specific operational needs, academic schedules, and budget, ensuring minimal disruption and maximum efficiency.'
    },
    {
      question: 'How do you ensure minimal disruption to educational activities during facilities maintenance or upgrades?',
      answer: 'All maintenance and upgrade activities are meticulously planned and scheduled during off-peak hours, weekends, or holidays to ensure that the academic calendar remains uninterrupted.'
    },
    {
      question: 'What measures are taken to ensure the safety and security of people and campus premises within educational facilities?',
      answer: 'We implement robust security protocols, including trained personnel, access control systems, and regular safety drills, to create a secure environment for students, staff, and visitors.'
    },
    {
      question: 'Can you assist educational institutions in managing sustainability initiatives within their facilities?',
      answer: 'Yes, we actively support sustainability goals by implementing energy-efficient systems, waste management programs, and green procurement policies to reduce the environmental footprint of the institution.'
    },
    {
      question: 'Can you share case studies showcasing successful facilities management projects in educational institutions?',
      answer: 'Certainly. We have a portfolio of case studies from various educational clients that highlight our expertise in improving operational efficiency, reducing costs, and enhancing the overall campus experience.'
    },
    {
      question: 'How do you ensure compliance with health and safety regulations and standards within educational facilities?',
      answer: 'Our teams are rigorously trained on all relevant health and safety regulations. We conduct regular audits and risk assessments to ensure full compliance and maintain the highest standards of safety.'
    }
  ];

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="education-hero-heading"
        style={{ 
          backgroundImage: `url('${backgroundImageUrl}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
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

            <h1 id="education-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
              Education Sector
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
              We empower secondary schools, colleges, and universities to unlock their potential through our innovative approach to creating energy-efficient environments for students and staff.
            </p>
          </div>
        </div>
      </div>

      {/* Building Environments Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Building environments that enable success
            </h2>
            <p className="mt-6 text-gray-600">
              The quality of the learning environment is incredibly important for both educators and students to succeed, and a stellar student experience is essential to not only attract students but retain them, too. From facilities being clean and tidy to everyone knowing they're safe to the infrastructure working reliably and healthy meals fuelling students and staff every day, we've got decades of experience to help your school, college or university be at its very best, every single day.
            </p>
            <p className="mt-6 font-semibold text-gray-700">
              View Facilities Management (FM) or Single-Service solutions below.
            </p>
            <div className="mt-8">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Contact Our Educational Team
              </a>
            </div>
          </div>
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756538536/download_24_fhgbu3.avif"
              alt="Teacher engaging with students in a classroom"
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
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-[#D4B258]">
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
              Services to help students and educators be their best
            </h2>
            <p className="mt-6 text-gray-600">
              IxoraGroup exists to help make people and places the best they can be through market-leading facilities services that deliver best outcomes.
            </p>
            <div className="mt-10">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Contact Our Education Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Using space optimally and effectively Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756545768/download_25_rhcdun.avif"
              alt="Students and teacher high-fiving in a classroom, representing effective use of space"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Using space optimally and effectively
            </h2>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                Making best use of the space available can be a challenge for education establishments. We use best practices from around the globe to design spaces that encourage learning and enhance the student and educator experience – while getting the most out of the available floor space.
              </p>
              <p>
                We don’t just focus on the indoors. The quality of your outdoor spaces is equally important in creating an environment designed for success. We create green, outdoor spaces that help students relax, socialise and play, while also improving the biodiversity of the local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting the Education sector sustainably Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Supporting the Education sector sustainably
            </h2>
            <p className="mt-6 text-gray-600">
              Across our services in the Education sector, we are dedicated to championing Environmental, Social, and Governance (ESG) principles. We always use a sustainable and responsible approach to improve our people and places now and for future generations.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">We integrate practices which put the environment first. From energy-efficient systems to food waste reduction menus, we actively seek sustainable solutions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">By providing clear insights into our processes and practices, we make sure our sustainability efforts align with the values and expectations of our customers.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Encouraging participation in initiatives such as 'grow gardens' we want to create a community that contributes to the well-being of both the educational ecosystem and the planet.</span>
              </li>
            </ul>
            <div className="mt-10">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                More On ESG
              </a>
            </div>
          </div>
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756546055/download_26_nwkbki.avif"
              alt="Lush green vegetable garden representing sustainability in education"
              className="w-full h-full object-cover"
            />
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
      
      {/* Responsibility and opportunity for change Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Responsibility and opportunity for change
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            IxoraGroup is in a position to make a tangible difference for colleagues, customers and communities.
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
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1542372882-68393f6c3216?q=80&w=1974&auto=format&fit=crop"
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

    </div>
  );
};

export default EducationPage;