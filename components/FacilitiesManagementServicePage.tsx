import React, { useRef } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const gold = '#D4B258';
const darkGold = '#C3A24B';

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
                    <p className="mt-4 text-gray-600">Need more than just Facilities Management? Discover our core services and integrated solutions.</p>
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

const FacilitiesManagementServicePage: React.FC<{ navigate: (page: string) => void; }> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1758022023/WhatsApp_Image_2025-09-16_at_16.56.25_00b4d134_ovzvzt.jpg";

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="fm-hero-heading"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0,0,0,0.05), transparent), url('${backgroundImageUrl}')`
        }}
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl text-white shadow-xl border border-white/10">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                    <span className="bg-[#D4B258] text-white text-sm font-semibold px-4 py-2 rounded-full">
                        We're hiring
                    </span>
                    <a href="#" className="text-white font-medium text-sm flex items-center group">
                        ICS Careers
                        <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <h1 id="fm-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white !leading-tight tracking-tight">
                    Facilities Management
                </h1>

                <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
                    Integrated service solutions to optimise your industry, workplace, destination or venue for private and public sector customers.
                </p>
            </div>
        </div>
      </div>
      
      <section className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1757584380/WhatsApp_Image_2025-09-08_at_18.58.03_4f702437_gikj8e.jpg"
              alt="A professional man in a branded polo shirt"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Facilities Management for private and public sectors
            </h2>
            <p className="mt-6 text-gray-600">
              What sets our Facilities Management service apart is our emphasis on bespoke service delivery, tailored to the unique requirements of each sector we serve. This isn’t just about cleaning or security; it’s about understanding the specific dynamics of environments like hospitals, schools, courts, and arenas, and adapting our services to optimise their functionality and impact.
            </p>
            <p className="mt-4 text-gray-600">
              Our approach is grounded in learned and thorough understanding of the different challenges and needs of each setting, ensuring that our facilities management goes beyond routine tasks to truly enhance the user experience in each space.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Facilities Management and integrated solutions for the private sector.</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Facilities Management and integrated solutions for the public sector.</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">In-house self-delivered service expertise.</span>
              </li>
            </ul>
            <div className="mt-10">
              <button
                onClick={() => navigate('contact')}
                className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors"
              >
                Contact Your FM Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-8">
        <div className="bg-gray-50/50 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
                        It's our IxoraGroup colleagues that make the difference
                    </h2>
                    <div className="mt-6 space-y-4 text-gray-600">
                        <p>
                            IxoraGroup colleagues naturally embody a sense of ownership and pride in their work, reflecting our core values of Trust, Respect, Unity, and Empowerment. These principles guide them to do the right things in the right way – the IxoraGroup way.
                        </p>
                        <p>
                            Our team take personal responsibility for the quality and outcomes of their work, treating each task and environment with the care and attention it deserves. This intrinsic sense of pride and ownership, supported by appropriate training, enables them to deliver services that consistently exceed expectations.
                        </p>
                        <p>
                            Their commitment is a testament to the unique culture at IxoraGroup, where every colleague plays a vital role in our collective success and the satisfaction of those we serve.
                        </p>
                    </div>
                </div>
                {/* Image Column */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                        src="https://res.cloudinary.com/dehglnwgz/image/upload/v1761641001/20251011_123647_hoawru.jpg"
                        alt="A professional IxoraGroup colleague smiling"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
      </section>

      <FacilitiesServicesSlider navigate={navigate} />

    </div>
  );
};

export default FacilitiesManagementServicePage;