

import React, { useState, useRef, useEffect } from 'react';
import { IxoraGroupLogo } from './IxoraGroupLogo';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { SearchIcon } from './icons/SearchIcon';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { FoundationIcon } from './icons/FoundationIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';
import { OurBrandsIcon } from './icons/OurBrandsIcon';


type ActiveMenu = 'sectors' | 'services' | 'about' | null;

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

const navLinks = [
    { name: 'Our Sectors', menu: 'sectors' as ActiveMenu, href: '#', page: null },
    { name: 'Our Services', menu: 'services' as ActiveMenu, href: '#', page: null },
    { name: 'Technology', menu: null, href: '#', page: 'technology' },
    { name: 'About Us', menu: 'about' as ActiveMenu, href: '#', page: null },
    { name: 'Blogs', menu: null, href: '#', page: 'news' },
];

const TopBar: React.FC = () => (
    <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center h-12 text-sm text-gray-700">
            <div className="flex items-center space-x-6">
                <a href="tel:+919059919999" className="flex items-center hover:text-[#D4B258]">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    <span>Call us on <strong>+91 90599 19999</strong></span>
                </a>
                <a href="#" className="flex items-center hover:text-[#D4B258]">
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
                    <span>Chat on <strong>WhatsApp</strong></span>
                </a>
            </div>
        </div>
    </div>
);

const MegaMenuCard: React.FC<{ title: string; description: string; imageUrl: string; onClick?: (e: React.MouseEvent) => void }> = ({ title, description, imageUrl, onClick }) => (
    <div className={`w-full lg:w-1/3 bg-gray-50 rounded-lg p-6 group ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
            <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-colors duration-300 bg-[#D4B258] group-hover:bg-[#C3A24B]">
                 <div className="relative w-5 h-5">
                    <ArrowUpRightIcon className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                    <ArrowRightIcon className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                </div>
            </div>
        </div>
    </div>
);

const MegaMenuLink: React.FC<{ icon: React.ReactNode; text: string; onClick?: (e: React.MouseEvent) => void; }> = ({ icon, text, onClick }) => (
    <a href="#" onClick={onClick} className="flex items-center space-x-3 text-gray-700 group">
        <span className="text-gray-700 transition-colors duration-200 group-hover:text-[#D4B258]">{icon}</span>
        <span className="font-medium transition-colors duration-200 group-hover:text-[#D4B258]">{text}</span>
    </a>
);

const SectorsMegaMenu: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    const leftColumnLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760511641/data-center_w6xm2c.png" sizeClass="w-6 h-6" />, text: 'Data Centres', page: 'data-center' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760513375/mortarboard_zgllve.png" sizeClass="w-6 h-6" />, text: 'Education', page: 'education' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760512805/skyline_ojqkax.png" sizeClass="w-6 h-6" />, text: 'Commercial', page: 'commercial' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760512806/flight_v4ikix.png" sizeClass="w-6 h-6" />, text: 'Aviation', page: 'aviation' },
    ];
    const rightColumnLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760512805/conveyor_ephzar.png" sizeClass="w-6 h-6" />, text: 'Manufacturing', page: 'manufacturing' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760512806/marketplace_vg7xwl.png" sizeClass="w-6 h-6" />, text: 'Retail', page: 'retail' },
    ];
    return (
        <div className="flex gap-8">
            <MegaMenuCard 
                title="Our Sectors" 
                description="Click here or on the links to find out more about our sector-specific services."
                imageUrl="https://res.cloudinary.com/dehglnwgz/image/upload/v1761632868/facility-management-word-cloud-concept-grey-background-90730394_hsdhyx.webp"
            />
            <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 content-start pt-6">
                <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-gray-800">10 Years of sector-specific experience and insight</h3>
                    <p className="text-gray-600 mt-2">We're on a mission to make your people and places the best they can be.</p>
                </div>
                <div className="space-y-4 pt-4">{leftColumnLinks.map(link => 
                    <MegaMenuLink 
                        key={link.text} 
                        {...link} 
                        onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined} 
                    />
                )}</div>
                <div className="space-y-4 pt-4">{rightColumnLinks.map(link => 
                    <MegaMenuLink 
                        key={link.text} 
                        {...link}
                        // FIX: Cast link to add optional page property to prevent TypeScript error
                        onClick={(link as { page?: string }).page ? (e) => { e.preventDefault(); navigate((link as { page?: string }).page!); } : undefined} 
                    />
                )}</div>
            </div>
        </div>
    );
};

const ServicesMegaMenu: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    const leftColumnLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518074/facility-management_fnd5zj.png" sizeClass="w-6 h-6" />, text: 'Facilities Management', page: 'facilities-management-service' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760519348/man-on-his-knees-with-hammer_fdn0v9.png" sizeClass="w-6 h-6" />, text: 'Hard Services', page: 'hard-services' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518456/security_gfvpsc.png" sizeClass="w-6 h-6" />, text: 'Security services', page: 'security' },
    ];
    const rightColumnLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518083/wipe_pit9m9.png" sizeClass="w-6 h-6" />, text: 'Cleaning', page: 'cleaning' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518074/pest-control_lzishm.png" sizeClass="w-6 h-6" />, text: 'Pest Control', page: 'pest-control' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518286/salary_jy1io7.png" sizeClass="w-6 h-6" />, text: 'Payroll', page: 'payroll' },
    ];
    return (
        <div className="flex gap-8">
            <MegaMenuCard 
                title="Our Services" 
                description="Click here or on the links to find out more about our facilities services."
                imageUrl="https://res.cloudinary.com/dehglnwgz/image/upload/v1761632878/1_wfzsWk1vf_NfId-79ykF8A_gwp2fn.webp"
                onClick={(e) => { e.preventDefault(); navigate('our-services'); }}
            />
            <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 content-start pt-6">
                 <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-gray-800">Best practice services for best customer outcomes</h3>
                    <p className="text-gray-600 mt-2">We're on a mission to make your people and places the best they can be.</p>
                </div>
                <div className="space-y-4 pt-4">{leftColumnLinks.map(link => 
                    <MegaMenuLink 
                        key={link.text} 
                        {...link} 
                        onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined} 
                    />
                )}</div>
                <div className="space-y-4 pt-4">{rightColumnLinks.map(link => 
                    <MegaMenuLink 
                        key={link.text} 
                        {...link} 
                        onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined}
                    />
                )}</div>
            </div>
        </div>
    );
};

const AboutUsMegaMenu: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    const leftColumnLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527468/team_lmpnfw.png" sizeClass="w-6 h-6" />, text: 'Our Colleagues', page: 'our-colleagues' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527477/leadership_lvwqql.png" sizeClass="w-6 h-6" />, text: 'Leadership Team', page: 'leadership-team' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527772/trophy_ziwmnl.png" sizeClass="w-6 h-6" />, text: 'Awards & Recognition', page: 'awards' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527468/mentorship_kfv65x.png" sizeClass="w-6 h-6" />, text: 'Careers', page: 'careers' },
        { icon: <LocationPinIcon className="w-6 h-6" />, text: 'IxoraGroup Locations', page: 'office-locations' },
    ];
    const rightColumnLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527477/ribbon_ak4y8z.png" sizeClass="w-6 h-6" />, text: 'Accreditations & Certification', page: 'accreditations' },
        { icon: <FoundationIcon className="w-6 h-6" />, text: 'IxoraGroup Foundation', page: 'ixora-foundation' },
    ];
    return (
        <div className="flex gap-8">
            <MegaMenuCard 
                title="About Us" 
                description="Click here or on the links opposite to find out more about our ethos and approach."
                imageUrl="https://res.cloudinary.com/dehglnwgz/image/upload/v1761634247/shutterstock_2399344103-1135x675_lkvxug.webp"
            />
            <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 content-start pt-6">
                 <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-gray-800">We're a global facilities services business</h3>
                    <p className="text-gray-600 mt-2">Join our mission to make people and places the best they can be.</p>
                </div>
                <div className="space-y-4 pt-4">{leftColumnLinks.map(link => 
                    <MegaMenuLink 
                        key={link.text} 
                        {...link}
                        // FIX: Add type assertion to link to allow checking for optional 'page' property.
                        onClick={(link as { page?: string }).page ? (e) => { e.preventDefault(); navigate((link as { page?: string }).page!); } : undefined} 
                    />
                )}</div>
                <div className="space-y-4 pt-4">{rightColumnLinks.map(link => <MegaMenuLink key={link.text} {...link} onClick={(link as { page?: string }).page ? (e) => { e.preventDefault(); navigate((link as { page?: string }).page!); } : undefined} />)}</div>
            </div>
        </div>
    );
};

const MainNav: React.FC<{ onMenuEnter: (menu: ActiveMenu) => void; activeMenu: ActiveMenu; navigate: (page: string, data?: any) => void; onMobileMenuToggle: () => void; }> = ({ onMenuEnter, activeMenu, navigate, onMobileMenuToggle }) => {
    return (
        <div className="bg-white shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} aria-label="IxoraGroup Home">
                        <IxoraGroupLogo className="h-14" />
                    </a>
                    
                    <div className="hidden lg:flex items-center space-x-8">
                        <nav className="flex items-center space-x-8">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center font-bold text-gray-700 hover:text-[#D4B258] transition-colors whitespace-nowrap"
                                    onMouseEnter={() => onMenuEnter(link.menu)}
                                    onClick={(e) => {
                                        if (link.page) {
                                            e.preventDefault();
                                            navigate(link.page, null);
                                        }
                                    }}
                                >
                                    <span>{link.name}</span>
                                    {link.menu && <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeMenu === link.menu ? 'rotate-180' : ''}`} />}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={(e) => { e.preventDefault(); navigate('search'); }}
                                className="text-gray-600 hover:text-[#D4B258]" 
                                aria-label="Search"
                            >
                                <SearchIcon className="w-6 h-6" />
                            </button>
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    {/* Fix: Added mobile menu toggle button */}
                    <div className="lg:hidden">
                        <button onClick={onMobileMenuToggle} aria-label="Open menu">
                            <MenuIcon className="w-8 h-8 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void; navigate: (page: string, data?: any) => void; }> = ({ isOpen, onClose, navigate }) => {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const toggleSubMenu = (menu: string | null) => {
        if (!menu) return;
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    const sectorLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760511641/data-center_w6xm2c.png" sizeClass="w-5 h-5" />, text: 'Data Centres', page: 'data-center' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760513375/mortarboard_zgllve.png" sizeClass="w-5 h-5" />, text: 'Education', page: 'education' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760512805/skyline_ojqkax.png" sizeClass="w-5 h-5" />, text: 'Commercial', page: 'commercial' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760512806/flight_v4ikix.png" sizeClass="w-5 h-5" />, text: 'Aviation', page: 'aviation' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760512805/conveyor_ephzar.png" sizeClass="w-5 h-5" />, text: 'Manufacturing', page: 'manufacturing' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760512806/marketplace_vg7xwl.png" sizeClass="w-5 h-5" />, text: 'Retail', page: 'retail' },
    ];

    const servicesLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518074/facility-management_fnd5zj.png" sizeClass="w-5 h-5" />, text: 'Facilities Management', page: 'facilities-management-service' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760519348/man-on-his-knees-with-hammer_fdn0v9.png" sizeClass="w-5 h-5" />, text: 'Hard Services', page: 'hard-services' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518456/security_gfvpsc.png" sizeClass="w-5 h-5" />, text: 'Security services', page: 'security' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518083/wipe_pit9m9.png" sizeClass="w-5 h-5" />, text: 'Cleaning', page: 'cleaning' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518074/pest-control_lzishm.png" sizeClass="w-5 h-5" />, text: 'Pest Control', page: 'pest-control' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760518286/salary_jy1io7.png" sizeClass="w-5 h-5" />, text: 'Payroll', page: 'payroll' },
    ];

    const aboutLinks = [
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527468/team_lmpnfw.png" sizeClass="w-5 h-5" />, text: 'Our Colleagues', page: 'our-colleagues' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527477/leadership_lvwqql.png" sizeClass="w-5 h-5" />, text: 'Leadership Team', page: 'leadership-team' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527772/trophy_ziwmnl.png" sizeClass="w-5 h-5" />, text: 'Awards & Recognition', page: 'awards' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527468/mentorship_kfv65x.png" sizeClass="w-5 h-5" />, text: 'Careers', page: 'careers' },
        { icon: <LocationPinIcon className="w-5 h-5" />, text: 'IxoraGroup Locations', page: 'office-locations' },
        { icon: <PngIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760527477/ribbon_ak4y8z.png" sizeClass="w-5 h-5" />, text: 'Accreditations & Certification', page: 'accreditations' },
        { icon: <FoundationIcon className="w-5 h-5" />, text: 'IxoraGroup Foundation', page: 'ixora-foundation' },
    ];
    
    const menuItems = [
        { name: 'Our Sectors', menu: 'sectors', links: sectorLinks },
        { name: 'Our Services', menu: 'services', links: servicesLinks },
        { name: 'Technology', page: 'technology' },
        { name: 'About Us', menu: 'about', links: aboutLinks },
        { name: 'Blogs', page: 'news' },
    ];

    const handleNavigate = (page: string) => {
        navigate(page);
        onClose();
        setOpenSubMenu(null);
    };
    
    return (
        <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} aria-label="IxoraGroup Home">
                    <IxoraGroupLogo className="h-12" />
                </a>
                <button onClick={onClose} aria-label="Close menu">
                    <CloseIcon className="w-6 h-6 text-gray-700" />
                </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100vh-10rem)]">
                <nav className="flex flex-col space-y-2">
                    {menuItems.map(item => (
                        <div key={item.name}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.page) {
                                        handleNavigate(item.page);
                                    } else {
                                        toggleSubMenu(item.menu as string);
                                    }
                                }}
                                className="flex justify-between items-center w-full text-left font-bold text-gray-700 p-3 rounded-md hover:bg-gray-100"
                            >
                                <span>{item.name}</span>
                                {item.menu && <ChevronDownIcon className={`w-5 h-5 transition-transform ${openSubMenu === item.menu ? 'rotate-180' : ''}`} />}
                            </a>
                            {item.menu && openSubMenu === item.menu && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {item.links?.map(link => (
                                        <a
                                            key={link.text}
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if ((link as { page?: string }).page) {
                                                    handleNavigate((link as { page?: string }).page!);
                                                }
                                            }}
                                            className="flex items-center space-x-3 text-gray-600 p-2 rounded-md hover:bg-gray-100"
                                        >
                                            <span className="text-gray-600">{link.icon}</span>
                                            <span>{link.text}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
                 <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }} className="bg-[#D4B258] text-white font-semibold w-full px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors flex items-center justify-center">
                    Contact Us
                </a>
            </div>
        </div>
    );
};

const Header: React.FC<{ navigate: (page: string, data?: any) => void; }> = ({ navigate }) => {
    const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    
    const handleMenuEnter = (menu: ActiveMenu) => {
        setActiveMenu(menu);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setActiveMenu(null);
            }
        };

        document.addEventListener('mouseover', handleClickOutside);
        return () => {
            document.removeEventListener('mouseover', handleClickOutside);
        };
    }, []);

    const MegaMenu: React.FC<{ active: boolean; children: React.ReactNode }> = ({ active, children }) => (
        <div 
            className={`absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out transform ${active ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}
            onMouseEnter={() => handleMenuEnter(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </div>
        </div>
    );

    return (
        <header className="sticky top-0 z-40" onMouseLeave={() => setActiveMenu(null)} ref={headerRef}>
            <TopBar />
            <MainNav 
                onMenuEnter={handleMenuEnter} 
                activeMenu={activeMenu} 
                navigate={navigate} 
                onMobileMenuToggle={() => setIsMobileMenuOpen(true)}
            />
            
            <MegaMenu active={activeMenu === 'sectors'}>
                <SectorsMegaMenu navigate={navigate} />
            </MegaMenu>
            <MegaMenu active={activeMenu === 'services'}>
                <ServicesMegaMenu navigate={navigate} />
            </MegaMenu>
            <MegaMenu active={activeMenu === 'about'}>
                <AboutUsMegaMenu navigate={navigate} />
            </MegaMenu>

            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navigate={navigate} />
        </header>
    );
};

export default Header;