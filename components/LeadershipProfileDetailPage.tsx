import React from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { LeadershipProfile, leadershipData } from './LeadershipTeamPage';

interface LeadershipProfileDetailPageProps {
  profile: LeadershipProfile;
  navigate: (page: string, data?: any) => void;
}

const LeadershipProfileDetailPage: React.FC<LeadershipProfileDetailPageProps> = ({ profile, navigate }) => {
  const restOfTheTeam = leadershipData.filter(member => member.name !== profile.name);

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Image and Connect */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 sticky top-28 overflow-hidden">
              <div className="aspect-square">
                <img 
                  src={profile.imageUrl} 
                  alt={`Portrait of ${profile.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <p className="font-semibold text-gray-700">Connect with {profile.name}</p>
                <a 
                  href={profile.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                  aria-label={`Connect with ${profile.name} on LinkedIn`}
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-800">{profile.name}</h1>
            <p className="mt-2 text-xl font-semibold text-[#D4B258]">{profile.title}</p>
            <div className="mt-8 prose lg:prose-lg max-w-none text-gray-600 space-y-5">
              {profile.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Meet the rest of the team */}
        {restOfTheTeam.length > 0 && (
          <section className="mt-16 md:mt-24 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Meet the rest of our team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {restOfTheTeam.map((member, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={member.imageUrl} 
                      alt={`Portrait of ${member.name}`}
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-md font-semibold text-gray-500 mt-2">{member.title}</p>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">{member.description}</p>
                    <button 
                      onClick={() => navigate('leadership-profile-detail', member)}
                      className="mt-4 inline-block font-semibold text-[#D4B258] border-b-2 border-[#D4B258] pb-1 hover:opacity-80 transition-opacity"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
        
      {/* People & Purpose Section */}
      <section className="mt-16 md:mt-24 pt-16">
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

export default LeadershipProfileDetailPage;