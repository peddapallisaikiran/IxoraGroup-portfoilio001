
import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { InfoIcon } from './icons/InfoIcon';
import { AlertTriangleIcon } from './icons/AlertTriangleIcon';

interface ContactPageProps {
  navigate: (page: string) => void;
}

const enquiryOptions = [
  { value: 'leasing', text: "I'm interested in ICS's leasing services" },
  { value: 'strategy', text: "I'm interested in ICS's strategy and design services" },
  { value: 'operations', text: "I'm interested in ICS's operations and management services" },
  { value: 'sustainability', text: "I'm interested in ICS's sustainability services" },
  { value: 'capital_markets', text: "I'd like to speak to an ICS expert about capital markets services" },
  { value: 'media', text: "I'd like to contact the ICS media relations team" },
];

const ContactPage: React.FC<ContactPageProps> = ({ navigate }) => {
  const [enquiry, setEnquiry] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (enquiry) {
      const selectedOption = enquiryOptions.find(opt => opt.value === enquiry);
      const subject = selectedOption ? selectedOption.text : 'Website Enquiry';
      const mailtoLink = `mailto:saikiran@ixoragroup.com?subject=${encodeURIComponent(subject)}`;
      window.location.href = mailtoLink;
    }
  };

  const isError = submitted && !enquiry;

  return (
    <div className="bg-[#FEFBF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">How can we help you?</h1>
        
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <InfoIcon className="w-5 h-5 mr-2 text-gray-500" />
          <span>Required fields are marked with an asterisk</span>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <label htmlFor="enquiry" className="block text-gray-700 font-semibold mb-2">
              How can we direct your enquiry? <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="enquiry"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                className={`w-full appearance-none bg-white border ${isError ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400`}
                aria-invalid={isError}
                aria-describedby={isError ? "enquiry-error" : undefined}
              >
                <option value="" disabled>Select option...</option>
                {enquiryOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.text}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            {isError && (
              <p id="enquiry-error" className="flex items-center text-red-600 text-sm mt-2">
                <AlertTriangleIcon className="w-4 h-4 mr-1" />
                This field is required
              </p>
            )}
          </div>
          
          <hr className="my-10 border-gray-200" />

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Send message
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-16 text-gray-600 text-sm">
          <h2 className="font-bold text-gray-800 mb-4">PRIVACY NOTICE</h2>
          <p className="mb-4">
            IxoraGroup, together with its subsidiaries and affiliates, is a leading provider of facilities and investment management services. We take our responsibility to protect the personal information provided to us seriously.
          </p>
          <p className="mb-4">
            Generally the personal information we collect from you are for the purposes of dealing with your enquiry.
          </p>
          <p>
            We endeavor to keep your personal information secure with appropriate level of security and keep for as long as we need it for legitimate business or legal reasons. We will then delete it safely and securely. For more information about how IxoraGroup processes your personal data, please view our <a href="#" onClick={(e) => { e.preventDefault(); navigate('privacy-notice'); }} className="text-[#D4B258] underline">Privacy Statement</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;