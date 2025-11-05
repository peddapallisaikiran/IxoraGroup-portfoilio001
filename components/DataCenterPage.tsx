
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

interface DataCenterPageProps {
  navigate: (page: string) => void;
}

const DataCenterPage: React.FC<DataCenterPageProps> = ({ navigate }) => {
  const backgroundImageUrl = "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756041174/Company%20assests/google-data-center-network-server-wallpaper-preview_epauqa.jpg";

  const [activeTab, setActiveTab] = useState('Critical Facilities Management');

  const tabs = [
    'Critical Facilities Management',
    'White Space Area Cleaning',
    'Energy Management',
    'Maintenance Management',
    'IoT Solutions',
    'Soft Services',
  ];

  const tabContent: { [key: string]: React.ReactNode } = {
    'Critical Facilities Management': (
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left h-full items-stretch">
        <div className="rounded-2xl overflow-hidden order-last lg:order-first">
          <img 
            src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756045213/Company%20assests/shutterstock_2030685776_nny0rt.avif"
            alt="Technician working on server racks in a data center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Critical Facilities Management</h3>
          <p className="text-gray-600 mb-6">
            Ensure near 100% uptime for your Data Centre with our proactive maintenance, rigorous audits, and Subject Matter Experts. Our solutions maximise asset longevity and eliminate downtime, ensuring uninterrupted, high-performance operations.
          </p>
          <div className="space-y-4 text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800">Why Choose IxoraGroup?</h4>
              <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                <li><strong>Proven Excellence:</strong> Trusted by 5+ Data Centre customers for managing critical facility environments.</li>
                <li><strong>Comprehensive IFM Model:</strong> Our Integrated Facility Management (IFM) service covers every aspect of your facility’s needs.</li>
                <li><strong>In-House Expertise:</strong> Dedicated Subject Matter Experts (SMEs) for Mechanical, Electrical, Plumbing, and Fire Fighting Systems (MEPF).</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Our Specialisation:</h4>
              <p className="mt-2 text-sm">We specialise in the Operations and Maintenance (O&M) of MEPF systems, offering:</p>
              <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                <li>Planned, Preventive, and Predictive Maintenance to ensure reliability.</li>
                <li>Expertise in Power, Cooling, Fire Safety, Pumps, Boilers, Water Treatment Plants (WTP), and Sewage Treatment Plants (STP).</li>
                <li>Advanced Solutions for BMS and Security Automation.</li>
                <li>Expertise in AMC/CAMC, Consumables, Spares, Helpdesk Support, and Post-Project Snagging.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    'White Space Area Cleaning': (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left h-full items-stretch">
          <div className="rounded-2xl overflow-hidden">
              <img 
                  src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756103214/Company%20assests/empresa-de-limpeza-terceirizada_uuuunp.jpg"
                  alt="Technician in a clean suit working in a data center white space area"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">White Space Area Cleaning</h3>
              <p className="text-gray-600 mb-6">
                  Data Centers demand contamination-free environments to safeguard sensitive equipment and ensure compliance. Even in well-filtered spaces, airborne particulates such as dust, pollen, and dirt can jeopardise operations and disrupt uptime.
              </p>
              <div className="space-y-6 text-gray-600 text-sm">
                  <div>
                      <h4 className="font-semibold text-gray-800">Why Choose IxoraGroup?</h4>
                      <p className="mt-2">We go deliver precision cleaning for White Spaces:</p>
                      <ul className="list-disc list-inside mt-2 space-y-2">
                          <li>ISO 14644-1:2015 Class 8 compliant cleaning using HEPA-filter vacuums.</li>
                          <li>Particle count verification with industry-leading TSI/Fluke equipment.</li>
                          <li>Certification for ISO Class 8 compliance—proven, measurable results.</li>
                      </ul>
                  </div>
                  <div>
                      <h4 className="font-semibold text-gray-800">Key Benefits for Your Data Center</h4>
                      <ul className="list-disc list-inside mt-2 space-y-2">
                          <li><strong>Optimized Cooling Efficiency</strong> – Minimize hotspots and energy waste.</li>
                          <li><strong>Reduced Power Consumption</strong> – Lower operational costs and carbon footprint.</li>
                          <li><strong>Extended Asset Lifecycles</strong> – Protect IT & HVAC investments for longer.</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    ),
    'Energy Management': (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left h-full items-stretch">
        <div className="rounded-2xl overflow-hidden">
          <img 
            src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756174521/Company%20assests/Data-Centre-Energy-Management-1024x696_rjxffc.jpg"
            alt="Server racks in a modern data center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Energy Management, Audits & Testing</h3>
          <p className="text-gray-600 mb-4">
            Optimising power usage for efficiency, sustainability, and reliability.
          </p>
          <p className="text-gray-600 mb-6">
            IxoraGroup's structured data center energy management strategy reduces costs while enhancing reliability and sustainability through energy audits, IoT solutions, hot & cold aisle containment, and white space technical cleaning.
          </p>
          <div>
            <h4 className="font-semibold text-gray-800">Why Choose IxoraGroup?</h4>
            <ul className="list-disc list-inside mt-2 space-y-2 text-sm text-gray-600">
              <li>Proactive energy optimisation strategies</li>
              <li>Expertise in renewable energy integrations & cooling system efficiency</li>
              <li>Smart energy-efficient infrastructure enhancements</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    'Maintenance Management': (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left h-full items-stretch">
        <div className="rounded-2xl overflow-hidden">
          <img 
            src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756175155/Company%20assests/Data-Centre-Maintenance-Management-1024x715_pbookk.jpg"
            alt="Technician performing maintenance on data center equipment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Maintenance Management</h3>
          <p className="text-gray-600 mb-6">
            Maximizing uptime through precision asset maintenance, our preventative and condition-based approach ensures that critical HVAC, electrical, and mechanical systems operate at peak efficiency.
          </p>
          <div className="space-y-4 text-gray-600 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800">Why Choose IxoraGroup?</h4>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Our proprietary CMMS tool manages assets, inventory, checklists, and tasks.</li>
                <li>24/7 monitoring & rapid response to critical failures</li>
                <li>Best-in-class maintenance strategies</li>
                <li>Experienced subject matter experts overseeing operations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Through Our CMMS Tool We Manage:</h4>
              <p className="mt-2">
                Technical Maintenance, Energy Management, Asset Management, Task Management, Housekeeping Checklist, Vendor Management, Site Audits, Inventory Management, Facility Helpdesk and Feedback, Visitor Management, Facility Dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    'IoT Solutions': (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left h-full items-stretch">
        <div className="rounded-2xl overflow-hidden">
          <img 
            src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756175143/Company%20assests/Data-Centre-IoT-Solutions-1024x680_ixfi43.jpg"
            alt="Server racks with glowing lights, representing IoT connectivity"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">IoT Solutions</h3>
          <p className="text-gray-600 mb-6">
            We provide advanced IoT solutions for data centers, including energy monitoring, chiller plant monitoring, diesel generator and fuel tracking, UPS and battery health monitoring, smart energy meter analysis, and indoor air quality monitoring. All data is seamlessly integrated into a unified dashboard for real-time insights and control.
          </p>
          <div className="space-y-4 text-gray-600 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800">Why Choose IxoraGroup?</h4>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Real-time data analytics & predictive insights</li>
                <li>Seamless integration of smart sensors & automation</li>
                <li>Customised unified dashboards for full visibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">IoT Solutions for Data Centers:</h4>
              <p className="mt-2">
                Battery Health Monitoring System (BHMS), Chiller Performance Monitoring, Diesel Generator & Fuel Tracking, Indoor Air Quality Monitoring, Unified Data Dashboards integrating multiple systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    'Soft Services': (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-left h-full items-stretch">
        <div className="rounded-2xl overflow-hidden">
          <img 
            src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756175196/Company%20assests/download_21_vhhmxj.avif"
            alt="Customer service professional at a command center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Soft Services</h3>
          <p className="text-gray-600 mb-6">
            Our comprehensive soft services focus on creating a productive and pleasant environment for employees, visitors, and customers. Combining our deep domain knowledge in soft services, we've implemented customised SOPs to maintain data centers and deliver the best experiences.
          </p>
          <div className="space-y-4 text-gray-600 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800">Why Choose IxoraGroup?</h4>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Customised Standard Operating Procedures (SOPs)</li>
                <li>End-to-end service delivery for efficiency and compliance</li>
                <li>Highly trained personnel ensuring best-in-class facility care</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Our Soft Services:</h4>
              <p className="mt-2">
                We offer housekeeping services, mechanised cleaning, waste management, specialised cleaning, gardening, landscaping, and office support services to ensure a clean and well-maintained environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="data-center-hero-heading"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), transparent), url('${backgroundImageUrl}')`
        }}
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl text-white shadow-xl border border-white/10">
                <h1 id="data-center-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
                    Data Centers
                </h1>

                <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
                    We are trusted by over 77 Data Centres. Uptime of critical facilities is the cornerstone of our solution for Data Centres. Our Critical Facility Management solutions for Data Centres drive operational efficiency, reduce power consumption, and extend asset lifecycles.
                </p>
                <div className="mt-10">
                    <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                        Connect With Our Team
                    </a>
                </div>
            </div>
        </div>
      </div>

       {/* Our Expert Data Centre Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Our Expert Data Centre Solutions
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            View Facilities Management (FM) or Single-Service solutions.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl p-4 shadow-md border border-gray-100">
             <div className="relative overflow-hidden">
                <div className="flex items-center justify-center overflow-x-auto pb-4 -mb-4 snap-x snap-mandatory">
                    <div className="flex items-center justify-center gap-1 sm:gap-2 px-4">
                        {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-2 text-sm sm:px-5 sm:py-3 font-semibold rounded-full transition-colors duration-300 flex-shrink-0 snap-center ${
                            activeTab === tab 
                                ? 'bg-[#D4B258] text-white shadow' 
                                : 'text-gray-600 hover:bg-amber-50'
                            }`}
                        >
                            {tab}
                        </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="grid">
                 {Object.entries(tabContent).map(([tabName, content]) => (
                    <div 
                        key={tabName}
                        className={`col-start-1 row-start-1 transition-opacity duration-300 ${activeTab === tabName ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        {content}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Essential Strategies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Essential Strategies for Data Center Optimisation
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            In-depth insights into data center services, including battery health monitoring, aisle containment, and site selection, to enhance efficiency, reliability, and compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigate('under-development')}>
            <div className="overflow-hidden">
              <img
                src="https://res.cloudinary.com/dehglnwgz/image/upload/v1762247869/bhms_atfyby.jpg"
                alt="Battery Health Monitoring System"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800 pr-4">Battery Health Monitoring System</h3>
                <div
                  className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-colors duration-300 bg-[#D4B258] group-hover:bg-[#C3A24B]"
                  aria-label="Learn more about Battery Health Monitoring System"
                >
                  <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                  <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              <p className="text-gray-600 text-sm pr-12">Discover how Battery Health Monitoring Systems (BHMS) enhance data center reliability.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigate('under-development')}>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                alt="Hot & Cold Aisle Containment Zone"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
             <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800 pr-4">Hot & Cold Aisle Containment Zone</h3>
                <div
                  className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-colors duration-300 bg-[#D4B258] group-hover:bg-[#C3A24B]"
                  aria-label="Learn more about Hot & Cold Aisle Containment Zone"
                >
                  <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                  <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              <p className="text-gray-600 text-sm pr-12">Learn about the implementation and benefits of hot and cold aisle containment zones in data centers.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => navigate('under-development')}>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
                alt="Data Center Site Selection"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800 pr-4">Data Center Site Selection</h3>
                <div
                  className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-colors duration-300 bg-[#D4B258] group-hover:bg-[#C3A24B]"
                  aria-label="Learn more about Data Center Site Selection"
                >
                  <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                  <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              <p className="text-gray-600 text-sm pr-12">Learn key factors for selecting an ideal data center site, including power scalability and risks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCenterPage;
