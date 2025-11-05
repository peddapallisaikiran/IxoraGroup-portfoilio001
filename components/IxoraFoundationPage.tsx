
import React from 'react';

const IxoraFoundationPage: React.FC = () => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-center bg-cover bg-center min-h-[500px] md:min-h-[600px] lg:min-h-[70vh]"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl shadow-xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Coming Soon!
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              We are working hard to bring you this content. Please check back later for exciting updates.
            </p>
            <div className="mt-8 text-2xl font-semibold text-[#D4B258]">
              Under Development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IxoraFoundationPage;
