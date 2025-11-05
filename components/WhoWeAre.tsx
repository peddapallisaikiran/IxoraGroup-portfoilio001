import React from 'react';

const WhoWeAre: React.FC<{ navigate: (page: string) => void; }> = ({ navigate }) => {
  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760609802/20251011_123540_qwn1hz.jpg"
            alt="An IxoraGroup professional providing cleaning services in a modern facility."
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Who we are and what we do?
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-lg">
            We are India’s largest and most innovative integrated facility management company, delivering end-to-end solutions tailored to your needs. From security and soft services to managing studios and large-scale infrastructures, we handle it all with precision and efficiency. Leveraging cutting-edge technology and industry expertise, we ensure seamless operations, enhanced safety, and optimal resource management—empowering businesses with world-class facility solutions.
          </p>
          <div className="mt-8">
            <button 
              onClick={() => navigate('facilities-management')}
              className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200"
            >
              Get to know us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;