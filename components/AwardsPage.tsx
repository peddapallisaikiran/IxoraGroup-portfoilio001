import React from 'react';

const DotPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`absolute inset-0 ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle at center, rgba(254, 235, 200, 0.5) 1px, transparent 1px)',
      backgroundSize: '1.25rem 1.25rem',
      maskImage: 'radial-gradient(ellipse 80% 100% at 50% 100%, black 0%, transparent 80%), radial-gradient(ellipse 80% 100% at 50% 0%, black 0%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 100% at 50% 100%, black 0%, transparent 80%), radial-gradient(ellipse 80% 100% at 50% 0%, black 0%, transparent 80%)',
    }}
    aria-hidden="true"
  />
);

interface Award {
  imageSrc: string;
  title: string;
  awardedBy: string;
  year: string;
  person: string;
}

const awardsData: Award[] = [
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150833/IMG_2756_errfvi.jpg',
    title: 'Clean and green India',
    awardedBy: 'Government of India',
    year: '',
    person: 'Ixora Group'
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150834/IMG_2757_tyfige.jpg',
    title: 'National Waste Alternative Conclave',
    awardedBy: 'National Waste Alternative Conclave',
    year: '',
    person: 'Ixora Group'
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150833/IMG_2758_kwrnyc.jpg',
    title: 'CII Industrial Innovation Award',
    awardedBy: 'Confederation of Indian Industry (CII)',
    year: '',
    person: 'Ixora Group'
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150833/IMG_2760_b1thtz.jpg',
    title: 'Swatchh Bharath Mission',
    awardedBy: 'Swatchh Bharath Mission',
    year: '',
    person: 'Ixora Group'
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150833/IMG_2761_y7x1y6.jpg',
    title: 'FICCI',
    awardedBy: 'Federation of Indian Chambers of Commerce & Industry (FICCI)',
    year: '',
    person: 'Ixora Group'
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150833/IMG_2762_mvpo5m.jpg',
    title: '4th B2B Business Entrepreneurship Award',
    awardedBy: 'B2B: Business to business',
    year: '',
    person: 'Ixora Group'
  },
  {
    imageSrc: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1762150832/IMG_2763_dfr61y.jpg',
    title: 'National Waste Alternative Conclave',
    awardedBy: 'National Waste Alternative Conclave',
    year: '',
    person: 'Ixora Group'
  },
];


const AwardCard: React.FC<Award> = ({ imageSrc, title, awardedBy, year }) => (
  <div className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/5] text-white">
    <img src={imageSrc} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
    <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <div>
            <h3 className="text-2xl font-bold leading-tight">{title}</h3>
            <p className="mt-1 text-sm text-white/80">{awardedBy}</p>
            {year && <p className="mt-2 text-base font-semibold text-[#D4B258]">{year}</p>}
        </div>
    </div>
  </div>
);


const AwardsPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100">
        <DotPattern />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
            Global Awards
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our aspiration is to become the best facilities services business in the world, making people and places the best they can be. The nominations and awards we receive are a testament to our frontline colleagues and operational teams' hard work in pursuing this goal.
          </p>
        </div>
      </section>

      {/* Awards Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Recent Accolades</h2>
            <p className="mt-4 text-gray-600">Celebrating our commitment to excellence and innovation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;