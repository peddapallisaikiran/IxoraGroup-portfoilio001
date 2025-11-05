import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PhoneIcon } from './icons/PhoneIcon';

const PngIcon: React.FC<{ src: string; sizeClass: string; }> = ({ src, sizeClass }) => (
  <div 
    className={`${sizeClass} bg-gray-700 group-hover:bg-[#D4B258] transition-colors duration-200`}
    style={{
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
      maskSize: 'contain',
      maskPosition: 'center',
      maskRepeat: 'no-repeat',
    }}
  />
);

interface Service {
    icon: string;
    title: string;
    description: string;
    page?: string;
}

const servicesData: Service[] = [
    {
        icon: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760518074/facility-management_fnd5zj.png',
        title: 'Facilities Management',
        description: 'Comprehensive management of your buildings and services to ensure a safe, efficient, and productive environment.',
        page: 'facilities-management-service'
    },
    {
        icon: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760519348/man-on-his-knees-with-hammer_fdn0v9.png',
        title: 'Hard Services',
        description: 'Expert maintenance of your building\'s mechanical, electrical, and plumbing systems to ensure reliability and compliance.',
        page: 'hard-services'
    },
    {
        icon: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760518082/cloud_ajofeu.png',
        title: 'Carbon & Energy Management',
        description: 'Innovative solutions to reduce your carbon footprint, lower energy costs, and achieve your sustainability goals.',
    },
    {
        icon: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760518074/nature_iqbflb.png',
        title: 'Landscaping',
        description: 'Creating and maintaining beautiful, sustainable outdoor spaces that enhance your property\'s appeal and biodiversity.',
    },
    {
        icon: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760518083/wipe_pit9m9.png',
        title: 'Cleaning',
        description: 'Professional and reliable cleaning services tailored to your needs, ensuring a hygienic and welcoming environment for all.',
        page: 'cleaning'
    },
    {
        icon: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760518074/pest-control_lzishm.png',
        title: 'Pest Control',
        description: 'Discreet and effective pest management solutions to protect your premises, ensuring health and safety standards are met.',
    },
    {
        icon: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760518286/salary_jy1io7.png',
        title: 'Payroll',
        description: 'Accurate and timely payroll services to streamline your administrative processes and ensure employee satisfaction.',
    },
    {
        icon: 'https://res.cloudinary.com/dehglnwgz/image/upload/v1760518456/security_gfvpsc.png',
        title: 'Security Services',
        description: 'Comprehensive security solutions, including manned guarding and electronic systems, to protect your people and assets.',
    },
];

const ServiceCard: React.FC<{ service: Service, navigate: (page: string) => void }> = ({ service, navigate }) => (
  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group flex flex-col border border-gray-100">
    <div className="flex-shrink-0 mb-4">
      <PngIcon src={service.icon} sizeClass="w-12 h-12" />
    </div>
    <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
        <p className="mt-2 text-gray-600">{service.description}</p>
    </div>
    <div className="mt-6">
        <button 
            onClick={() => service.page && navigate(service.page)}
            disabled={!service.page}
            className={`inline-flex items-center gap-2 font-semibold transition-colors duration-300 group ${
                service.page 
                ? 'text-[#D4B258] hover:text-[#C3A24B]' 
                : 'text-gray-400 cursor-not-allowed'
            }`}
        >
            Learn more
            <ArrowRightIcon className={`w-4 h-4 transition-transform ${service.page ? 'group-hover:translate-x-1' : ''}`} />
        </button>
    </div>
  </div>
);


const OurServicesPage: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <div
        className="relative bg-gray-50 flex items-center bg-cover bg-center min-h-[400px] md:min-h-[500px]"
        role="banner"
        aria-labelledby="services-hero-heading"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), transparent), url('${backgroundImageUrl}')`
        }}
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-7xl mx-auto">
            <h1 id="services-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white !leading-tight tracking-tight max-w-2xl">
                Our Services
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl">
                Delivering excellence and innovation across a comprehensive range of facilities services, tailored to make your people and places the best they can be.
            </p>
        </div>
      </div>
      
      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} navigate={navigate} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#192A51] rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to elevate your facilities?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Let's discuss how our expert services can be tailored to meet your unique needs. Connect with our team today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
            <a href="#" className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors">
              Contact Us
            </a>
            <a href="tel:+919059919999" className="flex items-center hover:text-[#D4B258]">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <span>Call <strong>+91 90599 19999</strong></span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurServicesPage;