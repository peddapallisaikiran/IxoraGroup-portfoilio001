import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import Stats from './Stats';
import CoreServices from './CoreServices';
import ESG from './ESG';
import Connect from './Connect';
import Insights from './Insights';


interface OnePageOverviewPageProps {
  navigate: (page: string, data?: any) => void;
}

const OnePageOverviewPage: React.FC<OnePageOverviewPageProps> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1762160965/Changing_face_in_FACILITY_MANAGEMENT_2_jiulpb.png";

  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
      <div className="p-4 sm:p-6 lg:p-8">
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px] lg:min-h-[80vh]"
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="relative bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-lg text-white shadow-xl border border-white/10">
              <div className="relative">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
                  <button
                    style={{ backgroundColor: '#D4B258' }}
                    className="text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C3A24B] transition-colors"
                    onClick={() => navigate('office-locations')}
                  >
                    Find Your Country
                  </button>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); navigate('office-locations'); }}
                    className="font-medium text-sm flex items-center group text-white hover:text-white/80"
                  >
                    Locations
                    <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold !leading-tight tracking-tight">
                  Welcome to IxoraGroup
                </h1>

                <p className="mt-6 text-base md:text-lg text-white/90">
                  We're a leading integrated facility management company with over 1,800 Team Members and 100+ customers across India, and with a growing presence in India Region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stats />
      <div className="px-4 sm:px-6 lg:px-8">
        <CoreServices navigate={navigate} />
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <ESG />
      </div>
      <Insights navigate={navigate} />
      <div className="px-4 sm:px-6 lg:px-8">
       <Connect navigate={navigate} />
      </div>
    </div>
  );
};

export default OnePageOverviewPage;