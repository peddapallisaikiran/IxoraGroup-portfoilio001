import React from 'react';

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

// Define data for the news articles
const newsArticlesData = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&h=600&fit=crop',
    categories: 'Data Centre | Partnership',
    title: 'IxoraGroup India & Don Bosco ITI Partner for Data Centre Skill...',
    author: 'IxoraGroup Team',
    date: '09 Sep, 2025',
    authorImage: 'https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1618512214781-676b7ddc5b73?q=80&w=800&h=600&fit=crop',
    categories: 'Facilities Management',
    title: 'Integrated Facility Management Services for...',
    author: 'IxoraGroup Team',
    date: '07 Jul, 2025',
    authorImage: 'https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&h=600&fit=crop',
    categories: 'Environmental | ESG',
    title: 'IxoraGroup India Achieves ISO 50001 Certification',
    author: 'IxoraGroup Team',
    date: '19 Jun, 2025',
    authorImage: 'https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1587560699334-cc426240a142?q=80&w=800&h=600&fit=crop',
    categories: 'ESG | Sustainability',
    title: 'Carbon Emissions Dashboard for Retail Spaces: Turning Da...',
    author: 'IxoraGroup Team',
    date: '12 Jun, 2025',
    authorImage: 'https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40',
  },
];

// News Card component
const NewsArticleCard: React.FC<typeof newsArticlesData[0]> = ({ imageSrc, categories, title, author, date, authorImage }) => (
  <article className="group flex items-start gap-6 bg-[#FEFBF9] p-4 rounded-2xl shadow-sm border border-gray-100 h-full">
    <div className="w-1/3 flex-shrink-0">
      <div className="overflow-hidden rounded-xl shadow-md">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full aspect-square sm:aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
    <div className="w-2/3 flex flex-col h-full">
      <div>
        <p className="text-xs font-semibold text-[#D4B258] mb-2">
          {categories}
        </p>
        <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
          <a href="#" className="hover:text-[#D4B258] transition-colors">{title}</a>
        </h3>
      </div>
      <div className="mt-auto pt-4 flex items-center">
        <img 
          src={authorImage}
          alt={author}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-amber-100"
        />
        <div className="ml-3">
          <p className="font-semibold text-xs sm:text-sm text-gray-800">{author}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  </article>
);


const VisionAndMissionPage: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      {/* Vision & Mission Card */}
      <section 
        className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100"
      >
        <DotPattern className="bottom-0 left-0 -translate-x-1/4 -translate-y-1/4" />
        <DotPattern className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
            Vision & Mission
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our vision and mission is to become the best provider of facilities services for colleagues, customers and communities by making people and places the best they can be.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Column */}
          <div>
            <img
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1755930073/Company%20assests/Screenshot_2025-08-23_114546_ybqhnz.png"
              alt="Abhishek Nath, Group CEO of IxoraGroup"
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Vision: Becoming the best for colleagues, customers and communities
            </h2>
            <p className="mt-6 text-gray-700">
              Welcome to <strong className="font-semibold">IxoraGroup</strong>, where our vision is to become the world's best facilities services company. Our strategy will help us deliver the best outcomes for our colleagues, customers, and the communities we engage with. At the heart of this vision are our people, advanced technology, and a commitment to Environmental, Social, and Governance (ESG) principles. We invite you to explore our website and learn more about our ethos and approach.
            </p>
            <div className="mt-8">
              <p className="font-bold text-gray-800">Abhishek Nath, Group CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Mission: Make people and places the best they can be
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                As a global business with over 130,000 colleagues and a community that's the size of a city, we have a responsibility and opportunity to positively impact the lives of those we're connected to and society as a whole.
              </p>
              <p>
                That's why we're on a mission to make people and places the best they can be because we believe every person deserves the best conditions and opportunities to thrive. Whatever that thrive is.
              </p>
              <p>
                We aim to achieve our mission by delivering exceptional facilities and services that consistently address the details and overcome the biggest challenges, creating the best experiences, productivity, practices, resilience, and outcomes for colleagues, customers and communities.
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1969&auto=format&fit=crop"
              alt="A smiling IxoraGroup colleague in a professional setting"
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Best Strategy Mission Fuel Section */}
      <section>
        <div className="relative rounded-3xl overflow-hidden shadow-lg min-h-[450px] flex items-center justify-center p-8">
          {/* Background Image */}
          <img 
            src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758003555/download_28_dhu3cv.avif" 
            alt="Wind turbines and solar panels at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Dotted Pattern Overlay */}
          <div 
            className="absolute top-0 left-0 bottom-0 w-1/2 bg-repeat"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '1.25rem 1.25rem',
              maskImage: 'radial-gradient(ellipse 80% 100% at 0% 50%, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 100% at 0% 50%, black 50%, transparent 100%)',
            }}
          ></div>

          {/* Text Content */}
          <div className="relative z-10 text-center text-white max-w-4xl">
            <h2 className="text-4xl sm:text-5xl font-bold !leading-tight tracking-tight">
              Best Strategy Mission Fuel
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/90">
              Our mission’s BEST strategy and ethos addresses five critical areas of concern that industry leaders highlight in reference to facilities management and services: Experience, Productivity, Practices, Resilience, and Outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Best Experiences Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Column */}
          <div>
            <img
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758012307/1_qGOL9FvIrvMKvbtNGYtHNA_s0vlos.jpg"
              alt="A person enjoying a healthy meal, representing a positive experience."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Best Experiences
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <strong className="font-semibold text-gray-800">Best Experiences</strong> come from consistently delivered details to enable a positive and memorable lasting impression.
              </p>
              <p>
                Focusing on the details that make a place more than just a physical location, we aim to foster a sense of belonging and satisfaction, ensuring that each interaction within these environments is as rewarding and positive as possible.
              </p>
              <p>
                It's about creating a positive and welcoming environment for everyone interacting within those spaces – from visitors to colleagues. We aim to deliver the best experience every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Productivity Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Best Productivity
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <strong className="font-semibold text-gray-800">Best Productivity</strong> maintains output through diligent service, advanced technology, and a maintained plan for continuity.
              </p>
              <p>
                Advanced productivity benefits colleagues, customers and communities, never more so than through harnessed technology. The <a href="#" className="font-semibold text-[#D4B258] underline decoration-[#D4B258]/30 underline-offset-2 hover:decoration-[#D4B258]/70 transition-all">IxoraGroup Advance</a> suite of apps and tools ensures effective and streamlined task and project completion, enhanced operations, reporting and customer communication.
              </p>
              <p>
                Investment in innovation demonstrates our steadfast commitment to achieving high-level productivity across all contracts, consistently meeting and exceeding customer expectations across the diverse facilities services we provide.
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div>
            <img
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758020317/960x0_acqtff.webp"
              alt="A young engineer working on a robotics project, representing productivity and technology."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Column */}
          <div>
            <img
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758020832/best-service-windows-cleaning_gfbuho.jpg"
              alt="A window cleaner working on a high-rise building, representing best practices and safety."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Best Practices
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <strong className="font-semibold text-gray-800">Best Practices</strong> are built on a foundation of good governance and over a century of experience, training, and innovation.
              </p>
              <p>
                Best Practices are rooted in a 'safety-first' approach, adhering to our Code of Conduct and Global Quality, Health, Safety, and Environment (QHSE) policies. This commitment ensures compliance and excellence in practice standards and prioritises colleague and customer wellbeing.
              </p>
              <p>
                By embedding these values in all projects, focusing on safety, quality, and ethics, we able to provide consistent and continued services that benefit our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Resilience Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Best Resilience
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <strong className="font-semibold text-gray-800">Best Resilience</strong> happens with foresight, experience, preparation, and proactivity to ensure continuity for your operation.
              </p>
              <p>
                Our teams stand with you, side by side, through every challenge, prioritising operational continuity for your colleagues, customers, visitors and guests.
              </p>
              <p>
                Resilience in your daily operations means ensuring continuity, whether facing challenges as significant as a pandemic or managing smaller issues that can cumulatively disrupt services.
              </p>
              <p>
                Our ICS team are prepared, planning preventative measures to maintain robust and responsive operations, reflecting our commitment and understanding that unforeseen events can happen.
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div>
            <img
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758021099/Resilience-Speakers_da178y.jpg"
              alt="A person wearing a face mask in a city, representing resilience during unforeseen events."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Best Outcomes Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Column */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="A group of children and a teacher giving a high-five, representing positive outcomes and teamwork."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Best Outcomes
            </h2>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <strong className="font-semibold text-gray-800">Best Outcomes</strong> is our collective goal, where every colleague, customer and community thrive and is enabled to be their best.
              </p>
              <p>
                Supporting the day-to-day achievement and purpose of others for lasting impact and positive outcomes for everyone.
              </p>
              <p>
                Through the delivery of exceptional facilities services, we help our customers achieve outcomes that matter to their people and their organisations.
              </p>
              <p>
                We help build resilience, optimise productivity and implement best practices that have been evolved and refined over more than 125 years – working with you to produce meaningful, measurable outcomes that deliver on KPIs and positively impact your people, places and communities.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Read More on Group CEO's Best Approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="relative rounded-2xl overflow-hidden flex items-center min-h-[450px]">
          {/* Background Image */}
          <img 
            src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758022023/WhatsApp_Image_2025-09-16_at_16.56.25_00b4d134_ovzvzt.jpg"
            alt="IxoraGroup team working collaboratively in an office environment."
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Light overlay for contrast */}
          <div className="absolute inset-0 bg-white/10"></div>
          
          {/* Quote Card */}
          <div 
            className="relative z-10 bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-2xl max-w-lg ml-8 sm:ml-12 lg:ml-16 shadow-xl"
            style={{
              backgroundImage: 'repeating-linear-gradient(135deg, rgba(230, 230, 230, 0.2), rgba(230, 230, 230, 0.2) 1px, transparent 1px, transparent 10px)'
            }}
          >
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-800">
              <p>"We're in the business of outcomes, and the services we provide help deliver the best outcomes for people. That's our purpose. We make people and places the best they can be, and we do it because we want the people in those places to thrive."</p>
            </blockquote>
            <div className="mt-8 flex items-center">
              <img 
                src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1755930073/Company%20assests/Screenshot_2025-08-23_114546_ybqhnz.png"
                alt="Abhishek Nath, Group CEO"
                className="w-14 h-14 rounded-full object-cover shadow-md"
              />
              <div className="ml-4">
                <p className="font-bold text-gray-900">Abhishek Nath</p>
                <p className="text-gray-600">Group CEO, IxoraGroup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, mission and purpose Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Vision, mission and purpose
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about our work towards the mission.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579154341569-487383e7834e?q=80&w=2070&auto=format&fit=crop"
                  alt="Scientists working in a biopharmaceutical lab"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Biopharmaceutical • Healthcare</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Best practices and resilience – Adherence to ISO 10,000 Grade 8 for Biopharma customer
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590674899474-6345de14d780?q=80&w=2070&auto=format&fit=crop"
                  alt="An empty modern parking garage"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Corporate • Technology</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Safeguarding our customers site and technology with guarding and cyber security.
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573495612895-4304c8924c3a?q=80&w=2070&auto=format&fit=crop"
                  alt="A woman working in a security control room with multiple monitors"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Security</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Women in security and tackling gender disparity in a rapidly-evolving world.
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 4 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092921462-63f1bd79397c?q=80&w=2070&auto=format&fit=crop"
                  alt="A male worker in a hard hat in an industrial setting"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Government • Public Sector FM</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Facilities Management teams rapid response to protect our customers' premises
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
            {/* Card 5 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1444492417206-81825a6e4e52?q=80&w=2070&auto=format&fit=crop"
                  alt="Green leaves against a blue sky, looking up from below"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Sustainability</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  Improving sustainability at Greenham Business Park by focusing on CO2 reduction
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
            {/* Card 6 */}
            <div className="bg-[#FEFBF9] rounded-2xl overflow-hidden group shadow-sm flex flex-col">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
                  alt="A person eating a bowl of food, possibly in a healthcare setting"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-600">Catering</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                  NHS food transformation that's having a positive environmental impact in the community
                </h3>
                <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b border-[#D4B258] pb-px hover:opacity-80 transition">
                  Read their story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IxoraGroup insights, news and updates Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              IxoraGroup insights, news and updates
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              The latest insights and updates from the team at IxoraGroup.
            </p>
            <div className="mt-8">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                See All News & Media
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticlesData.map((article, index) => (
              <NewsArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default VisionAndMissionPage;