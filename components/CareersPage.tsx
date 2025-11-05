import React from 'react';

const DotPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`absolute w-48 h-48 opacity-50 ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, #FDBA74 1.5px, transparent 1.5px)', // amber-300
      backgroundSize: '1.25rem 1.25rem',
      maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
      WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
    }}
    aria-hidden="true"
  />
);

const CareersPage: React.FC<{ navigate: (page: string, data?: any) => void; }> = ({ navigate }) => {
  const principles = [
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756973306/Untitled_design_4_jjin3g.png",
      alt: "Secure icon",
      highlight: "Secure",
      text: "our customers",
      colors: "bg-red-100 text-red-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046248/Untitled_design_5_cssqqx.png",
      alt: "Honor icon",
      highlight: "Honor",
      text: "our differences",
      colors: "bg-amber-100 text-amber-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046246/Untitled_design_6_wpi8xd.png",
      alt: "Innovate icon",
      highlight: "Innovate",
      text: "for the future",
      colors: "bg-yellow-100 text-yellow-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046245/Untitled_design_7_ndu10o.png",
      alt: "Execute icon",
      highlight: "Execute",
      text: "with quality & velocity",
      colors: "bg-blue-100 text-blue-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046241/Untitled_design_8_eifcm2.png",
      alt: "Lead icon",
      highlight: "Lead",
      text: "with courage & accountability",
      colors: "bg-purple-100 text-purple-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046240/Untitled_design_10_ogkb66.png",
      alt: "Debate icon",
      highlight: "Debate,",
      text: "decide & do",
      colors: "bg-amber-100 text-amber-800"
    }
  ];
  
  const lifeAtICSImages = [
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757471182/WhatsApp_Image_2025-09-10_at_07.55.44_5f8dee46_d5slid.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757471179/WhatsApp_Image_2025-09-10_at_07.54.12_34244327_chypov.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470710/679c98877d5849cea38e1f5e_WhatsApp_Image_2025-01-31_at_14.49.22_8904bd82_eves3l.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470710/679c962144f46e55f7662306_WhatsApp_Image_2025-01-31_at_14.49.22_0cc15c36_hgurm6.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756962910/WhatsApp_Image_2025-09-03_at_18.01.51_fe97c3ea_po4wen.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470718/66ed21480620ecbfa6f7b007_WhatsApp_Image_2024-09-20_at_12.44.22_mxvcjh.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470710/679c97f13ef116e948cdaf24_WhatsApp_Image_2025-01-31_at_14.49.23_c3cc3fa7_rundp5.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/6682a28a68090495e03c457f_goa2_vhcglu.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/6682a288a26c70cfe59bffbe_program1_lquoz4.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/65984127cf1dfd1717e7a919_Charminar1_tch3ln.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/6682a2885f438e4a6e8aa102_program2_zqgy7e.jpg"
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      <section 
        className="relative p-8 sm:p-12 md:p-16 text-center overflow-hidden"
      >
        <DotPattern className="bottom-0 left-0 -translate-x-1/4 -translate-y-1/4" />
        <DotPattern className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
            Careers at IxoraGroup
          </h1>
          <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to join our 1800 team members and support our mission to make people and places the best they can be? Be the difference today, connect with our careers team to learn more.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate('office-locations')}
              className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                Find Your Career Location
            </button>
          </div>
        </div>
      </section>

      <section className="p-6 sm:p-8 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                    src="https://res.cloudinary.com/dehglnwgz/image/upload/v1762243619/20251011_112316_ktorzf.jpg"
                    alt="A dedicated IxoraGroup colleague"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text Content */}
            <div className="text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                    We're looking for the best people to join our team
                </h2>
                <p className="mt-6 text-base text-gray-600">
                    Our mission is to make people and places the best they can be – delivering the best experiences, best practices, best productivity, resilience and outcomes for colleagues, customers and communities.
                </p>
                <p className="mt-4 text-base text-gray-600">
                    We're searching for the best people to join our team to give ourselves the best opportunity to achieve our vision and mission. We are searching for individuals whose values reflect the Trust, Respect, Empowerment and Unity (TRUE) values of IxoraGroup and who want to be part of a team helping others to thrive.
                </p>
                <div className="mt-8">
                    <button
                      onClick={() => navigate('office-locations')}
                      className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Find Your Career Location
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="max-w-5xl mx-auto py-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">Our Vision</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our vision is ambitious: a safe, efficient, and sustainable world powered by IxoraGroup and our partners.
        </p>
        <div className="mt-12 mx-auto aspect-video max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dehglnwgz/video/upload/v1762338544/ixora_office_1_xdscoi.mp4"
            autoPlay
            loop
            muted
            playsInline
            title="IxoraGroup company vision video"
          ></video>
        </div>
      </section>

      {/* Our principles at work Section */}
      <section className="max-w-7xl mx-auto py-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">Our principles at work</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our principles are ingrained in everything we do and every decision we make.
        </p>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={principle.icon} alt={principle.alt} className="h-28 w-28 object-contain mb-4" />
              <p className="font-semibold text-gray-700 leading-snug">
                <span className={`${principle.colors} px-2 py-1 rounded-md`}>{principle.highlight}</span> {principle.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ownership of your success Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold leading-snug" style={{ color: '#D4B258' }}>Ownership of your success</h3>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">Grow</h3>
            <p className="mt-4 text-gray-600">With programs and ongoing support, we help our people build a fulfilling career.</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">Thrive</h3>
            <p className="mt-4 text-gray-600">Enjoy a collaborative culture and benefits to support mental, physical and financial health.</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">Belong</h3>
            <p className="mt-4 text-gray-600">We believe in a culture where differences are valued and authenticity thrives.</p>
          </div>
          <div className="md:col-span-2 lg:col-start-2 lg:col-span-3">
            <p className="text-gray-600 text-lg">
              At IxoraGroup, we believe in collectively shaping a brighter way – for our clients, ourselves and our fellow employees. And we believe the key to achieving this is in building a team where everyone is empowered to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Be part of #LifeAtIxoraGroup Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Be part of #LifeAtIxoraGroup
          </h2>
        </div>
        <div className="mt-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {lifeAtICSImages.map((src, index) => (
              <div key={index} className="overflow-hidden group">
                <img 
                  src={src} 
                  alt={`Life at IxoraGroup ${index + 1}`} 
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;