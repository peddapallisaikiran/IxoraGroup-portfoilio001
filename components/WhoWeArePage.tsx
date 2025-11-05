import React from 'react';

const WhoWeArePage: React.FC = () => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1757583529/out.-scaled_j4g8xx.jpg";

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="who-we-are-hero-heading"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), transparent), url('${backgroundImageUrl}')`
        }}
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="bg-[#FEFBF9]/95 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl shadow-xl bg-[radial-gradient(circle,rgba(212,178,88,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]">
                <h1 id="who-we-are-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
                    Who We Are
                </h1>

                <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl">
                    We are India’s largest and most innovative integrated facility management company, delivering end-to-end solutions tailored to your needs. From security and soft services to managing studios and large-scale infrastructures, we handle it all with precision and efficiency.
                </p>
                <div className="mt-10">
                    <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                        Explore Our Values
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeArePage;