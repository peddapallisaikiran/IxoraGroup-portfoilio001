import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { DotWavePattern } from './icons/DotWavePattern';

const TechnologyPage: React.FC = () => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop";
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const faqData = [
    {
      question: 'How does Enhanced Restroom Experiences work?',
      answer: [
        'IoT sensors detect odours, wet floors, occupancy, and consumables in real-time, ensuring optimal restroom conditions and guest satisfaction.',
        'Benefits of Enhanced Restroom Experiences are improved hygiene, reduced downtime, enhanced user satisfaction, and efficient maintenance scheduling.'
      ]
    },
    {
      question: 'How does Proactive Environmental Monitoring work?',
      answer: [
        'Our system uses advanced sensors to continuously monitor air quality, temperature, and humidity. This real-time data helps maintain a healthy and comfortable environment while ensuring energy efficiency and regulatory compliance.'
      ]
    },
    {
      question: 'What are the Innovative Cleaning Solutions?',
      answer: [
        'Our solutions include robotic cleaners, smart dispensers, and data-driven cleaning schedules based on usage patterns. This ensures high standards of hygiene are maintained efficiently, reducing waste and optimizing resource allocation.'
      ]
    },
    {
      question: 'How does Proactive Facility Security enhance safety?',
      answer: [
        'We integrate smart surveillance, access control, and AI-powered analytics to detect anomalies and potential threats. The system provides instant alerts and automated responses, significantly enhancing the safety and security of your premises.'
      ]
    },
    {
      question: 'How does Streamlined Asset Maintenance maximise efficiency for businesses?',
      answer: [
        'Through predictive maintenance using IoT sensors, we monitor equipment health in real-time. This allows us to schedule maintenance before failures occur, minimizing downtime, extending asset lifespan, and reducing operational costs.'
      ]
    },
    {
      question: 'How do you manage waste and recycling to ensure compliance with environmental standards?',
      answer: [
        'We use smart bins that monitor fill levels to optimize collection routes, reducing fuel consumption. We also provide detailed analytics on waste streams to help businesses improve recycling rates and meet their sustainability targets.'
      ]
    },
    {
      question: 'How do you manage waste and recycling effectively in retail spaces, especially during peak times?',
      answer: [
        'Our dynamic system adjusts to real-time needs. Smart sensors in bins alert staff when they are nearing capacity, ensuring timely collection and preventing overflow, which is crucial for maintaining a clean and pleasant customer experience during busy periods.'
      ]
    },
    {
      question: 'What features are offered by Intelligent Surveillance and Access Control?',
      answer: [
        'Features include facial recognition, license plate recognition, automated gate access, and perimeter intrusion detection. Our system provides a comprehensive security overview, with customizable alerts and detailed event logs for forensic analysis.'
      ]
    },
    {
      question: 'What does Enhanced Security and Efficiency involve?',
      answer: [
        'It\'s a holistic approach that combines physical security measures with smart technology. This integration allows for centralized monitoring, faster response times, and data-driven insights to continuously improve both security protocols and operational efficiency.'
      ]
    },
    {
      question: 'What is your Energy Efficiency Revolution offer?',
      answer: [
        'We offer a complete energy management solution, from smart metering and lighting control to HVAC optimization. Our platform provides actionable insights to reduce energy consumption, lower utility bills, and shrink your carbon footprint.'
      ]
    },
    {
      question: 'How does Workspace Optimisation benefit businesses?',
      answer: [
        'By analyzing data from occupancy sensors and booking systems, we help businesses understand how their spaces are used. This enables them to optimize layouts, improve employee experience, and make informed decisions on their real estate portfolio.'
      ]
    },
    {
      question: 'How does Smart FM monitor restroom usage?',
      answer: [
        'People counters and sensors at restroom entrances track footfall in real-time. This data is used to trigger cleaning alerts after a certain number of users, ensuring that hygiene standards are consistently met based on actual demand rather than a fixed schedule.'
      ]
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-8 md:gap-12">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center"
        role="banner"
        aria-labelledby="tech-hero-heading"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(23, 37, 84, 0.8), rgba(23, 37, 84, 0.7), transparent), url('${backgroundImageUrl}')`
        }}
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="bg-gray-800/40 backdrop-blur-lg p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl text-white shadow-xl border border-white/10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                <a href="#" className="bg-[#D4B258] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C3A24B] transition-colors">
                    Join our Technology Team
                </a>
                <a href="#" className="font-medium text-sm flex items-center group">
                    IxoraGroup Careers
                    <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            <h1 id="tech-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight">
                Harness technology with IxoraGroup Advance
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-xl">
                Deliver enhanced facilities services through innovation – driving best practice, productivity, resilience, experience and outcomes for your colleagues, customers and communities.
            </p>
            </div>
        </div>
      </div>
      
      {/* IxoraGroup Advance Section */}
      <div className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Column */}
          <div>
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756821217/imagine_image_6d321328-cf3b-4fa7-bd31-e38cff0a6057_dxgarw.png"
              alt="Futuristic control room representing IxoraGroup Advance technology."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight">
              IxoraGroup Advance
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 text-base">
              <p>
                IxoraGroup Advance utilises proven technological tools to enhance customer success and improve the operational experience in facilities services operations. These tools optimise best practice, boost productivity, and help build resilience, delivering the best customer and colleague outcomes.
              </p>
              <p>
                We're working to deliver smarter and more efficient environments worldwide, from asset-level energy monitoring and advanced restroom management to proactive environmental sensing and intelligent surveillance.
              </p>
              <p>
                Practical solutions like energy monitoring, advanced restroom management, proactive environmental sensing, and intelligent surveillance help businesses excel in all areas, including guest management, facility maintenance, workspace optimisation, and security enhancements.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Contact our Technology Team
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Solutions Accordion Section */}
      <div className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight mb-10">
              IxoraGroup Advance solutions for customers
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
              {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                      <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full flex justify-between items-center py-6 text-left gap-4"
                          aria-expanded={openAccordion === index}
                      >
                          <span className="font-medium text-gray-800">{faq.question}</span>
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-amber-200 text-[#D4B258]">
                               {openAccordion === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                          </div>
                      </button>
                      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openAccordion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <div className="text-gray-600 space-y-4 pr-12 pt-2 pb-6">
                              {faq.answer.map((paragraph, pIndex) => (
                                  <p key={pIndex}>{paragraph}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* AI Facial Recognition Section */}
      <div className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
           {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight">
              AI Based Facial Recognition Attendance System
            </h2>
            <p className="mt-6 text-gray-600 text-base">
                Revolutionary facial recognition technology for seamless employee attendance tracking with real-time monitoring and analytics.
            </p>
            <ul className="mt-8 space-y-5 text-gray-600 text-base list-none pl-0">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Function:</strong> Utilises real-time face detection to accurately capture and verify employee attendance, eliminating the need for traditional time-tracking methods.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Benefits:</strong> Provides detailed attendance analytics for insightful workforce management and offers seamless mobile integration, allowing employees to clock in from anywhere.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Impact:</strong> Dramatically improves attendance accuracy, enhances security, and streamlines payroll processes, leading to significant operational efficiencies.
                </p>
              </li>
            </ul>
          </div>
           {/* Image Column */}
          <div>
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756794596/Mobile_App_Presentation_400_x_300_px_Presentation_43_2_wp79ly.webp"
              alt="AI Based Facial Recognition Attendance System in action on a mobile device."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* AI-Powered Facility Intelligence Section */}
      <div className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight">
              AI-Powered Facility Intelligence
            </h2>
             <p className="mt-6 text-gray-600 text-base">
                Intelligent analytics platform that automatically generates comprehensive facility performance reports and actionable insights.
            </p>
            <ul className="mt-8 space-y-5 text-gray-600 text-base list-none pl-0">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Function:</strong> Leverages automated reporting and performance analytics to process vast amounts of facility data.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Benefits:</strong> Delivers clear, comprehensive reports highlighting key performance indicators and trends, supported by predictive insights.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Impact:</strong> Empowers managers with actionable data for proactive maintenance, optimized resource allocation, and strategic decision-making.
                </p>
              </li>
            </ul>
          </div>
          {/* Image Column */}
          <div className="lg:order-first">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756794619/Mobile_App_Presentation_400_x_300_px_Presentation_43_1_v3cdcr.webp"
              alt="AI-powered facility intelligence dashboard shown on a mobile device."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* Real-Time Feedback & Analytics Platform Section */}
      <div className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight">
              Real-Time Feedback & Analytics Platform
            </h2>
            <p className="mt-6 text-gray-600 text-base">
                Comprehensive mobile solution for real-time feedback collection with integrated dashboard for instant analysis and response.
            </p>
            <ul className="mt-8 space-y-5 text-gray-600 text-base list-none pl-0">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Function:</strong> Features a user-friendly mobile app for immediate feedback submission and a real-time dashboard for instant data visualization.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Benefits:</strong> Enables rapid analysis of customer sentiment through powerful analytics integration, helping to identify trends and areas for improvement.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Impact:</strong> Empowers businesses to respond swiftly to feedback, enhancing customer satisfaction, fostering loyalty, and driving continuous service improvement.
                </p>
              </li>
            </ul>
          </div>
          {/* Image Column */}
          <div>
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756794596/Mobile_App_Presentation_400_x_300_px_Presentation_43_3_nvkw79.webp"
              alt="Mobile app showing a customer feedback interface."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* Geofenced and Geo Tagged Section */}
      <div className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
           {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight">
              All Sites are Geofenced and Geo Tagged
            </h2>
            <p className="mt-6 text-gray-600 text-base">
                Advanced GPS technology ensures precise location tracking and automated site management for enhanced security and efficiency.
            </p>
            <ul className="mt-8 space-y-5 text-gray-600 text-base list-none pl-0">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Function:</strong> Utilises advanced GPS tracking to define virtual perimeters (geofences) and tag exact site locations, ensuring precise monitoring.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Benefits:</strong> Establishes clear site boundaries for asset and personnel management, coupled with automated alerts for any unauthorized entry or exit.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Impact:</strong> Significantly boosts site security, improves operational oversight, and streamlines management through real-time, location-based data and alerts.
                </p>
              </li>
            </ul>
          </div>
          {/* Image Column */}
          <div className="lg:order-first">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756794597/Mobile_App_Presentation_400_x_300_px_Presentation_43_4_tl13ug.webp"
              alt="A mobile app showing geofenced locations on a map."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </div>

      {/* IxoraGPT Section */}
      <div className="bg-[#FEFBF9] p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
           {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight">
              IxoraGPT
            </h2>
            <p className="mt-6 text-gray-600 text-base">
                Our custom AI assistant powered by advanced language models to optimize facility operations and provide intelligent recommendations.
            </p>
            <ul className="mt-8 space-y-5 text-gray-600 text-base list-none pl-0">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Function:</strong> Integrates with facility management systems to analyze data and provide real-time suggestions for operational improvements.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Benefits:</strong> Reduces manual workload, improves decision-making speed, and identifies cost-saving opportunities through intelligent automation.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                <p>
                  <strong className="text-gray-800">Impact:</strong> Enhances overall operational efficiency, boosts team productivity, and drives a proactive, data-driven approach to facility management.
                </p>
              </li>
            </ul>
          </div>
          {/* Image Column */}
          <div>
            <img 
              src="https://res.cloudinary.com/dehglnwgz/image/upload/v1762247083/Screenshot_2025-11-04_143402_wflfy3.png"
              alt="AI assistant IxoraGPT showing data on a futuristic interface."
              className="rounded-2xl w-full h-full object-cover shadow-md aspect-[4/3]"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TechnologyPage;