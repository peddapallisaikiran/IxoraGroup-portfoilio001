import React, { useState } from 'react';
import { allArticles, Article } from './NewsAndMediaPage';

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

const commitmentsData = [
  {
    title: 'Safety first',
    subtitle: 'We always prioritise safety.',
    imageSrc: 'https://images.unsplash.com/photo-1560249781-79754505d985?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Respect',
    subtitle: 'For people, planet and purpose.',
    imageSrc: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Honesty',
    subtitle: 'In all our interactions.',
    imageSrc: 'https://images.unsplash.com/photo-1542372882-68393f6c3216?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Openness',
    subtitle: 'Transparent in our communication.',
    imageSrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Promise',
    subtitle: 'We do the right things.',
    imageSrc: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop'
  }
];

const TrueValuesPage: React.FC<{ navigate: (page: string, data?: any) => void; }> = ({ navigate }) => {
  const guidingPrinciplesImageUrl = "https://plus.unsplash.com/premium_photo-1663013666978-92a5a73a3c9f?q=80&w=1974&auto=format&fit=crop";
  
  const [activeValueId, setActiveValueId] = useState('trust');
  const [activeIndex, setActiveIndex] = useState(0);

  const valuesData = [
    {
      id: 'trust',
      title: 'Trust',
      tagline: 'Honesty, consistency and excellence.',
      description: 'Built and maintained through transparency and communication.',
      imageSrc: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'respect',
      title: 'Respect',
      tagline: 'People, planet and purpose.',
      description: 'The starting point and ongoing position for all our interaction and impact.',
      imageSrc: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'unity',
      title: 'Unity',
      tagline: 'Inclusive, diverse and together.',
      description: 'One team working for the betterment of each other and the environment.',
      imageSrc: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'empowerment',
      title: 'Empowerment',
      tagline: 'Dynamic, driven and agile.',
      description: 'Providing the tools and skills to do more and achieve great things.',
      imageSrc: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const recentArticles = allArticles.slice(0, 4);

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      <section 
        className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100"
      >
        <DotPattern className="bottom-0 left-0 -translate-x-1/4 -translate-y-1/4" />
        <DotPattern className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
            ICS TRUE Values
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our values are Trust, Respect, Unity and Empowerment – they're TRUE. Guided by these values and principles, we're on a mission to make people and places the best they can be.
          </p>
        </div>
      </section>

      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Our guiding principles
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                Having easily understandable and universally applicable values is crucial because they are a foundational guide for decision-making – providing a clear framework for all colleagues, ensuring consistency and alignment with the company's goals across diverse teams and geographies.
              </p>
              <p>
                Our TRUE Values are a vital navigational tool for ICS, steering our actions and strategies as we work towards our vision and mission. They help create a unified culture, fostering a sense of purpose and direction among colleagues and ensuring that every decision aligns with our core principles.
              </p>
              <p>
                Inspired by our TRUE Values, we've developed a set of commitments we all sign up for when joining ICS. Alongside those values, this alignment is essential for maintaining our brand's integrity and achieving our long-term objectives.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div>
            <img 
              src={guidingPrinciplesImageUrl} 
              alt="A dedicated ICS colleague working in a professional kitchen environment" 
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our TRUE values guide our actions and define our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
              {valuesData.map((item) => (
                <img
                  key={item.id}
                  src={item.imageSrc}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activeValueId === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Text Column */}
            <div className="relative">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-amber-200 hidden sm:block" aria-hidden="true"></div>
              <div className="space-y-10">
                {valuesData.map((item) => {
                  const isActive = activeValueId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="pl-8 relative cursor-pointer"
                      onMouseEnter={() => setActiveValueId(item.id)}
                    >
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ease-in-out"
                        style={{ backgroundColor: isActive ? '#D4B258' : 'transparent' }}
                        aria-hidden="true"
                      ></div>

                      <h3 className={`text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                        {item.title}
                      </h3>
                      <p className={`mt-2 text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-[#D4B258]' : 'text-gray-400'}`}>
                        {item.tagline}
                      </p>
                      <p className={`mt-3 transition-colors duration-300 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FEFBF9] py-12 md:py-16 rounded-3xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Discover our ICS commitments
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Starting with safety, respect, honesty and openness – capturing our commitment to leave things better than we found them and our universal promise that we’ll do the right things in the right way – the ICS way.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4 h-[450px]">
            {commitmentsData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={`
                    h-[420px] relative rounded-2xl overflow-hidden group shadow-lg 
                    transition-all duration-700 ease-in-out cursor-pointer
                    ${isActive ? 'flex-[4_1_0%]' : 'flex-[1_1_0%]'}
                  `}
                  style={{ willChange: 'flex-basis' }}
                >
                  <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover" />
                  <div 
                    className={`
                      absolute inset-0 transition-all duration-700 ease-in-out
                      ${isActive ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent' : 'bg-white/80'}
                    `}
                  ></div>
                  <div 
                    className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-sm transition-colors duration-300" 
                    style={{ backgroundColor: isActive ? '#D4B258' : '#d1d5db' }}
                  >
                    0{index + 1}
                  </div>
                  <div 
                    className={`
                      absolute bottom-0 left-0 right-0 p-6 
                      transition-opacity duration-300
                      ${isActive ? 'opacity-100' : 'opacity-0'}
                    `}
                  >
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/90 mt-1">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative rounded-3xl overflow-hidden shadow-sm p-8 md:p-12 lg:p-16 flex items-center bg-cover bg-center min-h-[450px]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gray-900/10"></div>
        <div className="relative z-10 bg-white/95 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl max-w-lg shadow-xl">
          <blockquote className="text-xl lg:text-2xl font-medium text-gray-700">
            <p>"Our values are in place to give our colleagues and customers an understanding of who we are and what we expect by way of behaviour and approach. They can help us in our decision making and will help towards us becoming the best operator in the business."</p>
          </blockquote>
          <div className="mt-8 flex items-center">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1755930073/Company%20assests/Screenshot_2025-08-23_114546_ybqhnz.png"
              alt="Abhishek Nath, Group CEO, IxoraGroup"
              className="w-16 h-16 rounded-full object-cover shadow-md"
            />
            <div className="ml-4">
              <p className="font-bold text-gray-800">Abhishek Nath</p>
              <p className="text-gray-600">Group CEO, IxoraGroup</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Values: Customer alignment
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Find out how we've aligned with our customers' values
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col border border-gray-100">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590674899474-6345de14d780?q=80&w=800&auto=format&fit=crop" alt="Corporate Technology" className="w-full h-56 object-cover"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Corporate • Technology</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Safeguarding our customers site and technology with guarding and cyber security.
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b-2 border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
            {/* Card 2 - Coming soon */}
            <div className="bg-amber-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center group shadow-sm border border-amber-100">
                <div className="relative mb-6">
                    <svg className="w-24 h-24 text-amber-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.9,4H2.1C1.5,4,1,4.5,1,5.1V18.9C1,19.5,1.5,20,2.1,20h19.8c0.6,0,1.1-0.5,1.1-1.1V5.1C23,4.5,22.5,4,21.9,4z M21,18 H3V6h18V18z"></path>
                        <circle cx="8.5" cy="10.5" r="1.5"></circle>
                        <path d="M11 16.5l3.5-4.5 2.5 3H6l3-4L11 16.5z"></path>
                    </svg>
                    <svg className="absolute -top-2 -right-2 w-10 h-10 text-[#D4B258]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-700">Coming soon</h3>
                <div className="flex-grow"></div>
                <a href="#" className="mt-8 font-semibold text-[#D4B258] self-center border-b-2 border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
            </div>
            {/* Card 3 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col border border-gray-100">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573495612895-4304c8924c3a?q=80&w=800&auto=format&fit=crop" alt="Security" className="w-full h-56 object-cover"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Security</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Women in security and tackling gender disparity in a rapidly-evolving world.
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b-2 border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col border border-gray-100">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop" alt="The Royal Parks" className="w-full h-56 object-cover"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Sustainability</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Driving sustainability goals to enhance London's natural heritage with The Royal Parks
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b-2 border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col border border-gray-100">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" alt="Catering" className="w-full h-56 object-cover"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Catering</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  NHS food transformation that's having a positive environmental impact in the community
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b-2 border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col border border-gray-100">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1444492417206-81825a6e4e52?q=80&w=800&auto=format&fit=crop" alt="Sustainability" className="w-full h-56 object-cover"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Sustainability</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Improving sustainability at Greenham Business Park by focusing on CO2 reduction
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b-2 border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              ICS insights, news and updates
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              The latest insights and updates from the team at ICS.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentArticles.map((article, index) => (
              <article 
                key={index} 
                className="group flex items-center gap-6 bg-[#FEFBF9] p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate('article-detail', article)}
              >
                <div className="w-1/3 flex-shrink-0">
                  <div className="overflow-hidden rounded-xl shadow-md">
                    <img 
                      src={article.imageSrc} 
                      alt={article.title}
                      className="w-full aspect-[1/1] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="w-2/3 flex flex-col h-full justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#D4B258] mb-2">
                      {article.categories.join(' | ')}
                    </p>
                    <h3 className="text-base font-bold text-gray-800 leading-tight group-hover:text-[#D4B258] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 hidden sm:block">
                      {article.description.substring(0, 60)}...
                    </p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <img 
                      src={article.authorImage}
                      alt={article.author}
                      className="w-8 h-8 rounded-full object-cover border-2 border-amber-100"
                    />
                    <div className="ml-3">
                      <p className="font-semibold text-xs text-gray-800">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrueValuesPage;