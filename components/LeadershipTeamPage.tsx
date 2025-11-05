import React from 'react';
import { LinkedInIcon } from './icons/LinkedInIcon';

export interface LeadershipProfile {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string[];
  linkedinUrl: string;
}

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

export const leadershipData: LeadershipProfile[] = [
  {
    name: 'Abhishek Nath',
    title: 'Group Chief Executive Officer',
    description: 'Abhishek has been pivotal in the facilities management sector. His strategic leadership was critical...',
    imageUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758359257/667ebb7c246436e4d9aa1916_7_rpenql.png',
    fullDescription: [
      "Abhishek has been pivotal in the facilities management sector since establishing Servest in 1997. His strategic leadership was critical in the 2018 sale of Servest to Atalian Global Services. Following this, he served on the leadership team at Atalian Global Services for five years, guiding the company through significant developments.",
      "In a notable industry shift, the UK, Ireland, and Asian businesses of Atalian were acquired by Clayton, Dubilier & Rice, which had previously purchased ICS Group in 2022. Abhishek's expertise was instrumental in this transition, as he led the integration of these entities under the ICS brand. This merger positioned ICS as a significant player in the international facilities services market, with a workforce exceeding 120,000 colleagues globally.",
      "Abhishek is driven by a clear vision: establishing ICS as the premier facilities services company worldwide. His strategy focuses on expanding the company's presence, particularly in the UK, Europe, Middle East, and APAC regions. His vast experience in mergers and acquisitions is a crucial asset in achieving this growth.",
      "Beyond his professional life, Abhishek is an avid sports enthusiast. He supports Arsenal Football Club and actively participates in various sports, including golf, tennis, and squash. This blend of professional insight and personal interests contributes to his dynamic leadership style."
    ],
    linkedinUrl: 'https://www.linkedin.com/in/abhiisheknath/'
  },
  {
    name: 'Krishna Chaithnya',
    title: 'Director of IxoraGroup',
    description: 'Krishna Chaithnya is 2023 bringing a wealth of experience in building world class finance teams and delivering organic and...',
    imageUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758355988/667ebb7ceb38a6f84e8404a3_8_azzctg.png',
    fullDescription: [
      "Krishna Chaithnya brings a strong & specialised expertise in Facility Management and Team Building. His career began with a passion for excellence, inspired by winning the “Best Employee Award” in the Facility management industry in multiple roles & regions.",
      "He has held key leadership roles as Facility/Administration at Uninor across multiple cities, followed by various positions at Dell, Shell and Verizon. His professional journey further expanded through significant experience with global companies like JLL and CBRE.",
      "With a proven track record in managing large-scale operations, he now serves as the Total Facility Management Vertical Director at Ixora Group, driving innovation, team building and operational excellence."
    ],
    linkedinUrl: 'https://www.linkedin.com/in/krishna-chaitanya-676638136/'
  },
  {
    name: 'Chakkaravarthi Rajamani',
    title: 'Director of LooCafe',
    description: 'Daniel started his career in a leading M&A consultancy firm, before moving into facilities management in 2012. He quickly excelled...',
    imageUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758359264/667ec0b26d475aff07a8e371_chakksPFP_lybztd.png',
    fullDescription: [
      "Chakkaravarthi's full bio is coming soon. He is a key leader in our organization, driving innovation and strategic growth within the LooCafe division. His expertise has been instrumental in expanding our reach and impact."
    ],
    linkedinUrl: 'https://www.linkedin.com/in/chakkaravarthi-rajamani-1886b5142/'
  },
  {
    name: 'Athma Jayaram',
    title: 'Chief Executive Director',
    description: 'Roland has a strong track record in business growth, transformation and change management. He has led various organisations around the...',
    imageUrl: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1758359257/667ebb7c295352e3e758daee_10_fk2hay.png',
    fullDescription: [
      "Athma's full bio is coming soon. As Chief Executive Director, she oversees critical aspects of our operations, ensuring excellence and strategic alignment across all departments. Her leadership is vital to our continued success."
    ],
    linkedinUrl: 'https://www.linkedin.com/in/athma-jayaram-m-26533622/'
  },
];


const LeadershipTeamPage: React.FC<{ navigate: (page: string, data?: any) => void; }> = ({ navigate }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      <section 
        className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100"
      >
        <DotPattern className="bottom-0 left-0 -translate-x-1/4 -translate-y-1/4" />
        <DotPattern className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-gray-800 !leading-tight tracking-tight">
            ICS Leadership Teams
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our leadership teams are intent on making people and places the best they can be, providing colleagues, customers and communities with the best conditions and opportunities to thrive.
          </p>
        </div>
      </section>

      {/* Leadership Profiles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="py-12 text-center">
          <button className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200 shadow-lg">
            Group Leadership Team
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
          {leadershipData.map((member, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={member.imageUrl} 
                  alt={`Portrait of ${member.name}`}
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-3xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-md font-semibold text-gray-500 mt-2">{member.title}</p>
                <a 
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-gray-500 hover:text-[#D4B258] transition-colors"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <LinkedInIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default LeadershipTeamPage;