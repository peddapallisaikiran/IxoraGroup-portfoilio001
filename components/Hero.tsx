import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const gold = '#D4B258';
const darkGold = '#C3A24B'; // A slightly darker gold for hover states

const images = [
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1761126803/20251011_104541_vuj0md.jpg',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1761641001/20251011_123647_hoawru.jpg',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1761646581/20251011_122848_1_ecmddi.jpg',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1760682217/20251011_111137_cudjsv.jpg',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150260/20251103_111406_p6ve4e.jpg',
  'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150262/20251103_111421_yomuvc.jpg',
];

interface HeroProps {
  navigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [currentImageIndex, handleNext]);

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-sm min-h-[500px] md:min-h-[600px] flex items-center p-4 sm:p-6 lg:p-8"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Professional setting related to IxoraGroup's facility services."
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl text-white shadow-xl border border-white/10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
          <span style={{ backgroundColor: gold }} className="text-white text-sm font-semibold px-4 py-2 rounded-full">
            Facilities Management
          </span>
          <a href="#" className="text-white font-medium text-sm flex items-center group">
            Find your sector here
            <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white !leading-tight tracking-tight">
          Global facilities
          <br />
          services group
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/90 max-w-md">
          We're on a mission to make people and places the best they can be because everyone should have the best conditions and opportunities to thrive.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button 
            onClick={() => navigate('one-page-overview')}
            style={{ backgroundColor: gold }} 
            className="text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200 flex-shrink-0"
          >
            IxoraGroup One Page Overview
          </button>
          <div className="flex items-center space-x-2">
            <button onClick={handlePrev} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white bg-black/20 hover:bg-black/40 transition-colors" aria-label="Previous">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white bg-black/20 hover:bg-black/40 transition-colors" aria-label="Next">
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;