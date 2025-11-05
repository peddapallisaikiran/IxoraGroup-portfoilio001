import React from 'react';

const DotPattern: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`absolute ${className} w-32 h-32 text-amber-200/50`}
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="dot-pattern-locations"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#dot-pattern-locations)" />
  </svg>
);

const OfficeLocationsPage: React.FC = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7982002514245!2d78.40613747493556!3d17.42146948347152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cd0379ba09%3A0xbdff0cff18f58138!2sIxora%20Corporate%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1762248512378!5m2!1sen!2sin";

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto">
        <div className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100">
          <DotPattern className="bottom-0 left-0 -translate-x-1/4 translate-y-1/4" />
          <DotPattern className="top-0 right-0 translate-x-1/4 -translate-y-1/4" />
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Our India Location
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver facilities services and management throughout Hyderabad. Find our location below for country-specific information and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-left mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Ixora Corporate Services Pvt Ltd</h2>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src={mapEmbedUrl.replace('!5m2!1sen!2sin', '!5m2!1sen!2sin&z=15')}
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ixora Corporate Services Pvt Ltd Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default OfficeLocationsPage;