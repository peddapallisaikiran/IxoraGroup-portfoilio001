
import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const DotPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`absolute w-48 h-48 opacity-50 ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, #FEE2E2 1.5px, transparent 1.5px)',
      backgroundSize: '1.25rem 1.25rem',
      maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
    }}
    aria-hidden="true"
  />
);

interface Brand {
    logoSrc: string;
    name: string;
    description: string;
    page: string | null;
}

const brandsData: Brand[] = [
    {
        logoSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756806978/Screenshot_2025-09-02_152100_rmpo9q.png',
        name: 'Ixora Group',
        description: 'The parent company driving innovation in integrated facility management, setting the standard for excellence, sustainability, and technology across all our brands.',
        page: 'home'
    },
    {
        logoSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762410000/ics-logo-placeholder.png',
        name: 'ICS',
        description: 'Integrated Cleaning and Security Services provides specialized solutions to ensure safe, clean, and efficient environments for a diverse range of sectors.',
        page: 'our-services'
    },
    {
        logoSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762410001/loocafe-logo-placeholder.png',
        name: 'LooCafe',
        description: 'A revolutionary concept in public sanitation, combining tech-enabled, hygienic restrooms with micro-retail and cafe services to enhance urban living.',
        page: null
    }
];

const BrandCard: React.FC<{ brand: Brand; navigate: (page: string) => void }> = ({ brand, navigate }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100">
            <div className="bg-gray-50 p-8 flex items-center justify-center h-48">
                <img src={brand.logoSrc} alt={`${brand.name} logo`} className="max-h-24 object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800">{brand.name}</h3>
                <p className="mt-4 text-gray-600 flex-grow">{brand.description}</p>
                <div className="mt-8">
                    <button 
                        onClick={() => brand.page && navigate(brand.page)}
                        disabled={!brand.page}
                        className={`inline-flex items-center gap-2 font-semibold transition-colors duration-300 group ${
                            brand.page 
                            ? 'text-[#D4B258] hover:text-[#C3A24B]' 
                            : 'text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        Learn more
                        <ArrowRightIcon className={`w-4 h-4 transition-transform ${brand.page ? 'group-hover:translate-x-1' : ''}`} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const OurBrandsPage: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
            <section 
                className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100"
            >
                <DotPattern className="bottom-0 left-0 -translate-x-1/4 -translate-y-1/4" />
                <DotPattern className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

                <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
                        Our Brands
                    </h1>
                    <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        United by a single mission, our family of brands works together to make people and places the best they can be, delivering specialized expertise across the facilities services landscape.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brandsData.map((brand, index) => (
                        <BrandCard key={index} brand={brand} navigate={navigate} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurBrandsPage;
