import React, { useState, useRef } from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';


const DotPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`absolute w-48 h-48 opacity-50 ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, #FEE2E2 1.5px, transparent 1.5px)', // A light pink/orange color
      backgroundSize: '1.25rem 1.25rem',
      maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
    }}
    aria-hidden="true"
  />
);

const commitmentData = [
  {
    id: 'diversity',
    title: 'Diversity',
    description: 'Acknowledging differences, understanding, respecting, and valuing the variety of characteristics that each individual in our vast team possesses, including differences in ethnicity, gender, age, origin, sexual orientation, education, religion, experience and perspective.',
    imageSrc: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop',
    alt: 'A diverse and smiling professional person.'
  },
  {
    id: 'equity',
    title: 'Equity',
    description: "We create opportunities and pathways for all employees to access the same advantages. We ensure fairness in treatment, access, opportunity, and advancement for all people while striving to identify and eliminate any barriers or obstacles that might hinder an individual's progress.",
    imageSrc: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
    alt: 'Hands of different people supporting each other, symbolizing equity.'
  },
  {
    id: 'inclusion',
    title: 'Inclusion',
    description: "Fostering a work environment where all individuals are treated fairly and respectfully, have equal access to opportunities and resources, and can contribute fully to the organisation's success. Creating a workplace that reflects the communities we serve and where everyone feels empowered to be their full, authentic selves.",
    imageSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    alt: 'A diverse group of colleagues collaborating and smiling.'
  }
];

const esgCardsData = [
    {
      imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&fit=crop",
      title: "Environmental",
      description: "We are committed to environmental stewardship, focusing on sustainable practic...",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&fit=crop",
      title: "Social",
      description: "Fostering a socially responsible environment, prioritising community engagement,...",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1542372882-68393f6c3216?q=80&w=800&fit=crop",
      title: "Governance",
      description: "Upholds robust go ensuring transpare accountability, and...",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&fit=crop",
      title: "Community",
      description: "Engaging with local communities to create positive social impact and lasting change.",
    }
  ];
  
const EsgSliderCard: React.FC<typeof esgCardsData[0]> = ({ imageSrc, title, description }) => (
    <div className="bg-white rounded-2xl overflow-hidden group shadow-sm flex flex-col h-full">
        <div className="overflow-hidden h-48">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">
                    {title}
                </h3>
                <a href="#" className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] hover:bg-[#C3A24B] transition-colors">
                    <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                    <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                </a>
            </div>
            <p className="mt-2 text-gray-600 text-sm flex-grow pr-12">
                {description}
            </p>
        </div>
    </div>
);


const DiversityPage: React.FC = () => {
  const [activeCommitment, setActiveCommitment] = useState(commitmentData[0].id);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
      if (sliderContainerRef.current) {
          const card = sliderContainerRef.current.querySelector('div');
          if (card) {
              const scrollAmount = card.clientWidth * (direction === 'left' ? -1 : 1);
              sliderContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
      }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      <section 
        className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100"
      >
        <DotPattern className="bottom-0 left-0 -translate-x-1/4 -translate-y-1/4" />
        <DotPattern className="top-0 right-0 translate-x-1/4 -translate-y-1/4" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
            Diversity, Equity and Inclusion
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our 130,000 colleagues represent every corner of the globe, speaking multiple languages and proudly representing many beliefs and cultures – this diversity fuels our organisation.
          </p>
        </div>
      </section>

      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Our DE&I starting point is that everybody counts
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                Diversity, equity, and inclusion (DE&I) intertwine with our <a href="#" className="font-semibold text-[#D4B258] underline decoration-[#D4B258]/30 underline-offset-2 hover:decoration-[#D4B258]/70 transition-all">TRUE Values</a>, ethos and approach. We’re a global facilities services business that employs over 130,000 individuals speaking multiple languages and representing many cultures, religions and beliefs. The importance of an inclusive, non-discriminatory approach cannot be overstated. It’s a minimum expectation for a global enterprise striving to become the best in its field.
              </p>
              <p>
                We have a unique opportunity and responsibility to acknowledge, respect, and leverage the richness of human differences and perspectives of our extensive team, operating across different countries and cultures. We're taking a thorough but straightforward approach to DE&I, rooted in our commitment to respecting and including everyone as we continue to listen, learn, and lead in creating an inclusive and respectful work environment for all.
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop"
              alt="A smiling female hospitality worker in a kitchen environment."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* DE&I Commitments Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              DE&I Commitments
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our global teams are responsible for creating culturally aligned initiatives and programmes that support our DE&I commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
              {commitmentData.map((item) => (
                <img
                  key={item.id}
                  src={item.imageSrc}
                  alt={item.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activeCommitment === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Text Column */}
            <div className="relative">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-amber-200 hidden sm:block" aria-hidden="true"></div>
              <div className="space-y-10">
                {commitmentData.map((item) => {
                  const isActive = activeCommitment === item.id;
                  return (
                    <div
                      key={item.id}
                      className="pl-8 relative cursor-pointer"
                      onMouseEnter={() => setActiveCommitment(item.id)}
                    >
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ease-in-out"
                        style={{ backgroundColor: isActive ? '#D4B258' : 'transparent' }}
                        aria-hidden="true"
                      ></div>
                      <h3 className={`text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                        {item.title}
                      </h3>
                      <p className={`mt-2 transition-colors duration-300 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Making change and prioritising our people Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Making change and prioritising our people
            </h2>
            <p className="mt-6 text-gray-700">
              We proudly partner and align with a number of third-party organisations to help empower our DE&I teams, enabling them to implement the right programmes and initiatives, fulfil our commitment and work towards our vision and mission.
            </p>
            <ul className="mt-8 space-y-5 text-gray-700">
              <li className="flex items-center">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#D4B258] text-white mr-4">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span>Certified Disability Confident Employer (level 2, working towards level 3)</span>
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#D4B258] text-white mr-4">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span>Part of the Mental Health at Work Commitment</span>
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#D4B258] text-white mr-4">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span>We are a Menopause Friendly Employer</span>
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#D4B258] text-white mr-4">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span>Mental health first aid triage phone line</span>
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#D4B258] text-white mr-4">
                  <CheckIcon className="w-4 h-4" />
                </span>
                <span>UK corporate member of LGBT+ in FM</span>
              </li>
            </ul>
            <div className="mt-10">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Accreditations and Certifications
              </a>
            </div>
          </div>
          {/* Image Column */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format&fit=crop"
              alt="A smiling professional in a security control room, representing our people."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Helping deliver change with ESG Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:pr-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Helping deliver change with ESG
                </h2>
                <p className="mt-6 text-gray-700">
                    Find out more and connect with our team on environment, social and governance initiatives and programmes.
                </p>
                <div className="mt-8 flex items-center gap-4">
                    <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                        Connect with ICS
                    </a>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => scrollSlider('left')} 
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                            aria-label="Scroll left"
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={() => scrollSlider('right')} 
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                            aria-label="Scroll right"
                        >
                            <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Column - Slider */}
            <div className="w-full relative">
                <div 
                    ref={sliderContainerRef} 
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-2 py-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {esgCardsData.map((card, index) => (
                        <div key={index} className="snap-start flex-shrink-0 w-full sm:w-3/4 md:w-[48%] lg:w-[45%] px-2">
                            <EsgSliderCard {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default DiversityPage;