import React from 'react';

export interface Profile {
  name: string;
  title: string;
  imageUrl: string;
  professionalExperience: string[];
  linkedinUrl?: string;
}

interface ProfileDetailPageProps {
  profile: Profile;
  navigate: (page: string, data?: any) => void;
}

const ProfileDetailPage: React.FC<ProfileDetailPageProps> = ({ profile }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <section className="flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-xl">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img 
              src={profile.imageUrl} 
              alt={`Portrait of ${profile.name}`}
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          {/* Info */}
          <div className="w-full md:w-1/2 bg-[#192A51] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative min-h-[400px]">
             <div className="absolute top-0 left-0 h-full w-1.5 bg-[#D4B258]"></div>
             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold">{profile.name}</h1>
             <p className="mt-4 text-lg text-gray-300">{profile.title}</p>
          </div>
        </section>
        
        {/* Professional Experience Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-sans font-bold text-gray-800 mb-8 border-b pb-4">Professional Experience</h2>
            <div className="prose lg:prose-lg text-gray-700 space-y-6">
              {profile.professionalExperience && profile.professionalExperience.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProfileDetailPage;