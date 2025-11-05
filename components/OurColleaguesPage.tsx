import React, { useState, useEffect } from 'react';
import { Profile } from './ProfileDetailPage'; // Import Profile type
import { LinkedInIcon } from './icons/LinkedInIcon';

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

const leadershipTeam: Profile[] = []; // This remains empty as per previous request

const meetOurPeople: Profile[] = [
  {
    name: 'Saikiran Peddapalli',
    title: 'Software Development Engineer',
    imageUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1759297181/WhatsApp_Image_2025-10-01_at_11.05.09_AM_ongrrx.jpg',
    professionalExperience: ['Saikiran is a dedicated sustainability manager with a focus on green construction practices in the UK.'],
    linkedinUrl: 'https://www.linkedin.com/in/sai-kiran-peddapalli-aa4255253/',
  },
  {
    name: 'harsh Metha',
    title: 'Software Development Engineer and Mobile App Developer',
    imageUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1759297182/WhatsApp_Image_2025-10-01_at_11.05.11_AM_u2xwhn.jpg',
    professionalExperience: ['Harsh leads operations with a sharp eye on cost and commercial management across the UK and Europe.'],
    linkedinUrl: 'https://www.linkedin.com/in/harshmehta15/',
  },
  {
    name: 'Saiteja Duddela',
    title: 'Automation and Manual Testing',
    imageUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1759297188/WhatsApp_Image_2025-10-01_at_11.05.14_AM_bf6itl.jpg',
    professionalExperience: ['Saiteja provides expert business advisory and consultancy as an Operations Director in the UK.'],
    linkedinUrl: 'https://www.linkedin.com/in/saiteja-duddela-541a25284/',
  },
];


interface OurColleaguesPageProps {
  navigate: (page: string, data?: any) => void;
}

const OurColleaguesPage: React.FC<OurColleaguesPageProps> = ({ navigate }) => {
  const itemsPerPage = 4;
  const pages = meetOurPeople.length > 0 ? Math.ceil(meetOurPeople.length / itemsPerPage) : 0;
  const [currentPage, setCurrentPage] = useState(0);
  
  const handleNextPage = () => {
    if (pages === 0) return;
    setCurrentPage(prev => (prev + 1) % pages);
  };
  
  const handlePrevPage = () => {
    if (pages === 0) return;
    setCurrentPage(prev => (prev - 1 + pages) % pages);
  };
  
  const handlePageChange = (page: number) => {
      setCurrentPage(page);
  };

  useEffect(() => {
    if (pages <= 1) return; // Don't auto-slide if there's only one page or less
    
    const timer = setInterval(() => {
      handleNextPage();
    }, 5000); // Auto-scroll every 5 seconds

    return () => {
      clearInterval(timer); // Cleanup on component unmount
    };
  }, [pages]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16 bg-white font-sans">
      <section 
        className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100"
      >
        <DotPattern className="bottom-0 left-0 -translate-x-1/4 -translate-y-1/4" />
        <DotPattern className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
            ICS Frontline Colleagues
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our 130,000-strong global team are on a mission to make people and places the best they can be and they're at the heart of everything we do and all that we're able to achieve.
          </p>
        </div>
      </section>

      {/* Leadership Team Section (empty) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {leadershipTeam.map((member, index) => (
                <div key={index}>
                    {/* ... content for leadership team would go here ... */}
                </div>
            ))}
        </div>
      </section>
      
      {/* Meet Our People Section */}
      {meetOurPeople.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
            style={{ color: '#D4B258' }}
          >
              Meet our People
          </h2>
          <div className="relative">
              <div className="overflow-hidden">
                  <div
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${currentPage * 100}%)` }}
                  >
                      {Array.from({ length: pages }).map((_, pageIndex) => (
                          <div key={pageIndex} className="w-full flex-shrink-0 flex flex-wrap justify-center gap-8">
                              {meetOurPeople.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((person, personIndex) => (
                                  <div 
                                      key={personIndex} 
                                      className="border border-gray-200 p-8 text-center flex flex-col items-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full max-w-xs"
                                  >
                                      <div 
                                        className="w-full mb-6 cursor-pointer"
                                        onClick={() => navigate('profile-detail', person)}
                                      >
                                          <img
                                              src={person.imageUrl}
                                              alt={`Portrait of ${person.name}`}
                                              className="w-full h-auto aspect-[5/4] object-cover rounded-md"
                                          />
                                      </div>
                                      <div className="flex flex-col flex-grow items-center w-full">
                                        <h3 
                                            className="text-2xl font-semibold text-gray-900 cursor-pointer hover:text-[#D4B258]"
                                            onClick={() => navigate('profile-detail', person)}
                                        >
                                            {person.name}
                                        </h3>
                                        <p className="text-gray-500 mt-2 px-2">{person.title}</p>
                                        <div className="flex-grow"></div> {/* Spacer */}
                                        {person.linkedinUrl && (
                                            <a 
                                                href={person.linkedinUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="mt-4 text-gray-400 hover:text-[#D4B258] transition-colors"
                                                aria-label={`Connect with ${person.name} on LinkedIn`}
                                            >
                                                <LinkedInIcon className="w-7 h-7" />
                                            </a>
                                        )}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      ))}
                  </div>
              </div>

              {/* Navigation Arrows */}
              {pages > 1 && (
                <>
                  <button
                      onClick={handlePrevPage}
                      className="absolute top-1/2 -left-4 sm:-left-12 transform -translate-y-1/2 text-gray-400 hover:text-gray-800 transition-colors"
                      aria-label="Previous"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                  </button>
                  <button
                      onClick={handleNextPage}
                      className="absolute top-1/2 -right-4 sm:-right-12 transform -translate-y-1/2 text-gray-400 hover:text-gray-800 transition-colors"
                      aria-label="Next"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                  </button>
                </>
              )}
          </div>

          {/* Pagination Dots */}
          {pages > 1 && (
            <div className="flex justify-center mt-12 space-x-3">
                {Array.from({ length: pages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${
                            currentPage === index ? 'bg-gray-800 w-6' : 'bg-gray-300 w-3 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
          )}
        </section>
      )}

      {/* People & Purpose Section */}
      <section className="w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-lg min-h-[350px] flex items-center justify-center p-8">
          {/* Background Image */}
          <img 
            src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758614192/WhatsApp_Image_2025-09-23_at_12.13.41_PM_rfzh6l.jpg" 
            alt="A person looking thoughtfully towards the future, representing purpose"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Text Content */}
          <div className="relative z-10 text-center text-white max-w-4xl">
            <h2 className="text-4xl sm:text-5xl font-bold !leading-tight tracking-tight">
              People & Purpose
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/90">
              Learn about our vision and mission, what we mean by 'best' and why our guiding principles underpin everything that we do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurColleaguesPage;