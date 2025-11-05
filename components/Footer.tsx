

import React from 'react';
import { IxoraGroupLogo } from './IxoraGroupLogo';
import { LinkedInIcon } from './icons/LinkedInIcon';

const FooterLink: React.FC<{ href: string; children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent) => void; }> = ({ href, children, className, onClick }) => (
  <a href={href} onClick={onClick} className={`text-gray-700 hover:text-[#D4B258] transition-colors duration-200 ${className} ${onClick ? 'cursor-pointer' : ''}`}>
    {children}
  </a>
);

const BottomBarLink: React.FC<{ text: string; onClick?: (e: React.MouseEvent) => void; }> = ({ text, onClick }) => (
  <a href="#" onClick={onClick} className="text-gray-700 hover:text-[#D4B258] transition-colors duration-200 group relative">
    <span>{text}</span>
    <div className="absolute bottom-0 left-0 w-full h-px bg-gray-400 group-hover:bg-[#D4B258] transition-colors"></div>
  </a>
);

const Footer: React.FC<{ navigate: (page: string) => void; }> = ({ navigate }) => {
  const servicesLinks = [
    { text: 'Facilities Management', page: 'facilities-management-service' },
    { text: 'Cleaning', page: 'cleaning' },
    { text: 'Hard Services', page: 'hard-services' },
    { text: 'Security services', page: 'security' },
    { text: 'Pest Control', page: 'pest-control' },
    { text: 'Payroll', page: 'payroll' },
  ];

  const sectorsLinks = [
    { text: 'Aviation', page: 'aviation' },
    { text: 'Commercial', page: 'commercial' },
    { text: 'Data Centres', page: 'data-center' },
    { text: 'Education', page: 'education' },
    { text: 'Manufacturing' },
    { text: 'Retail' },
  ];

  const companyLinks = [
    { text: 'Careers', page: 'careers' },
    { text: 'ESG' },
    { text: 'IxoraGroup Introduction', page: 'facilities-management' },
    { text: 'Leadership Team', page: 'leadership-team' },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 items-start">
          {/* Column 1: Logo and Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <IxoraGroupLogo className="h-12 mb-4" />
            <p className="text-gray-600 max-w-xs text-lg">
              Making people and places the best they can be.
            </p>
            <a href="#" className="font-semibold text-lg text-[#D4B258] border-b-2 border-[#D4B258] pb-1 inline-block hover:opacity-80">
              Contact Us
            </a>
          </div>

          {/* Column 2: Our Services */}
          <div className="text-md">
            <h4 className="font-semibold text-[#D4B258] mb-5">Our Services</h4>
            <ul className="space-y-4">
              {servicesLinks.map(link => (
                <li key={link.text}>
                  <FooterLink
                    href="#"
                    onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined}
                  >
                    {link.text}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Sectors */}
          <div className="text-md">
            <h4 className="font-semibold text-[#D4B258] mb-5">Our Sectors</h4>
            <ul className="space-y-4">
              {sectorsLinks.map(link => (
                <li key={link.text}>
                  <FooterLink
                    href="#"
                    onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined}
                  >
                    {link.text}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="text-md">
            <h4 className="font-semibold text-[#D4B258] mb-5">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map(link => (
                <li key={link.text}>
                  <FooterLink
                    href="#"
                    onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined}
                  >
                    {link.text}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-t border-[#D4B258] mt-16 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-y-6">
            <div className="order-2 md:order-1 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-4">
                <p className="text-gray-600">&copy; 2025 ICS Group Holdings Ltd. All rights reserved.</p>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('terms-and-conditions'); }} className="text-gray-700 hover:text-[#D4B258] transition-colors duration-200">Terms & Conditions</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('privacy-notice'); }} className="text-gray-700 hover:text-[#D4B258] transition-colors duration-200">Privacy Policy</a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-700 hover:text-[#D4B258] transition-colors duration-200">Cookie Preferences</a>
                </div>
            </div>

            <div className="order-1 md:order-2">
                <a href="#" className="text-white bg-[#192A51] p-1.5 rounded-md inline-block">
                <LinkedInIcon className="w-6 h-6" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;