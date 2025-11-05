import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { OrangeCheckIcon } from './icons/OrangeCheckIcon';

interface HardServicesPageProps {
  navigate: (page: string) => void;
}

const hardServicesList = [
  'Technical Operations and Maintenance (Planned, Preventive, Predictive and MEPF)',
  'Power Supply Systems (Electrical, Transformers, UPS, DG etc.)',
  'Cooling Systems (HVAC, Chillers, PAC, CAC)',
  'Critical Infrastructure (Pumps, Boilers, Lighting, STP, ETP, WTP Water Features)',
  'Fire Safety Systems (Fire Alarms, Hydrants, Panels, Fire Extinguishers, PAS)',
  'Security Automation Systems (Access Control and CCTV)',
  'Building Management Systems (BMS)',
  'AMC and CAMC Management',
  'Minor Repair and Modification',
  'Engineering Consumables and Spares Management',
  'Helpdesk Management',
];

const projectManagementSolutions = [
    'Integrated Solution',
    'SME (Subject Matter Experts for Construction, QC, Safety, HVAC, Electrical, Mechanical and ESG)',
    'Coordination among multiple agencies',
    'Completion of projects within timeframe',
    'Maintain high quality and ensure safety standards',
    'Legal compliances',
];

const HardServicesPage: React.FC<HardServicesPageProps> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/dehglnwgz/image/upload/v1758783499/66ed21480620ecbfa6f7b007_WhatsApp_Image_2024-09-20_at_12.44.22_ogslvs.jpg";
  const gold = '#D4B258';
  const darkGold = '#C3A24B';
  
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div 
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px] lg:min-h-[70vh]"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0,0,0,0.05), transparent), url('${backgroundImageUrl}')`
        }}
        role="banner"
        aria-labelledby="hard-services-hero-heading"
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
          <div 
            className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-xl text-white shadow-xl border border-white/10"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <button 
                onClick={() => navigate('careers')} 
                style={{ backgroundColor: gold }}
                className="text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C3A24B] transition-colors"
              >
                We're hiring
              </button>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate('careers'); }}
                className="font-medium text-sm flex items-center group"
              >
                Careers
                <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <h1 id="hard-services-hero-heading" className="text-5xl sm:text-6xl font-bold !leading-tight tracking-tight">
              Hard Services
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
              Our self-delivered engineering and project management solutions ensure that we operate, manage and maintain your critical infrastructure; keeping you safe, compliant and operational.
            </p>
          </div>
        </div>
      </div>
      
      {/* Building and Maintaining Section */}
      <section className="bg-[#FEFBF9] rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Column */}
          <div className="rounded-2xl overflow-hidden shadow-md h-full">
            <img
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758783606/hard-facility-management_ueoopu.jpg"
              alt="Hard facility management services in action."
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Content Column */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Building and maintaining the best places
            </h2>
            <p className="mt-4 text-gray-700 font-semibold">
              Our Hard Services team provides following solutions:
            </p>
            <p className="mt-2 text-gray-600">
              Our aim is to ensure your facilities are well-maintained, fit for purpose and best prepared for the future.
            </p>
            <div className="mt-8 space-y-4">
              {hardServicesList.map((service, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                  <OrangeCheckIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Management Solutions Section */}
      <section className="bg-[#FEFBF9] rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content Column */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Project Management Solutions
            </h2>
            <p className="mt-4 text-gray-600">
              Ensuring timely delivery of project objectives thereby enhancing overall project performance in alignment with strategic objective.
            </p>
            <div className="mt-8 space-y-4">
              {projectManagementSolutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                  <OrangeCheckIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{solution}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Image Column */}
          <div className="rounded-2xl overflow-hidden shadow-md h-full">
            <img
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758790719/WhatsApp_Image_2025-07-30_at_17.13.32_26bd4fe4_vzkt0r.jpg"
              alt="Engineers working on an HVAC system on a rooftop."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Best practices, compliance and resilience deliver the best outcomes Section */}
      <section className="bg-[#FEFBF9] rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Image Column */}
          <div className="rounded-2xl overflow-hidden shadow-md h-full">
            <img
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758793152/WhatsApp_Image_2025-07-30_at_17.13.32_1c1c6bb7_qtxf6b.jpg"
              alt="An IxoraGroup engineer ensuring compliance and safety on machinery."
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text Content Column */}
          <div className="lg:col-span-2 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Best practices, compliance and resilience deliver the best outcomes
            </h2>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                Our compliance services ensure that all aspects of your facility's operations meet the required legal and regulatory standards.
              </p>
              <p>
                This service is crucial in managing risk, upholding safety, and ensuring the smooth functioning of your facility. We conduct thorough assessments and regular audits to ensure compliance with health and safety regulations, environmental laws, and industry-specific standards.
              </p>
              <p>
                Our team stays up-to-date with the latest regulations and best practices, providing expert guidance and support – everything from fire safety compliance and electrical and structural integrity checks to environmental assessments. Good compliance offers peace of mind, knowing that your facility complies with current regulations and is prepared for future legislative changes, ensuring a safe, legal, and efficient operation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HardServicesPage;