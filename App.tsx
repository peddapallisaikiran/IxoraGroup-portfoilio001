


import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TechnologyPage from './components/TechnologyPage';
import NewsAndMediaPage, { Article } from './components/NewsAndMediaPage';
import ArticleDetailPage from './components/ArticleDetailPage';
import DataCenterPage from './components/DataCenterPage';
import AviationPage from './components/AviationPage';
import CareersPage from './components/CareersPage';
import EducationPage from './components/EducationPage';
import CommercialPage from './components/CommercialPage';
import AccreditationsPage from './components/AccreditationsPage';
import SearchPage from './components/SearchPage';
import FacilitiesManagementPage from './components/FacilitiesManagementPage';
import FacilitiesManagementServicePage from './components/FacilitiesManagementServicePage';
import VisionAndMissionPage from './components/VisionAndMissionPage';
import ChatBot from './components/ChatBot';
import DiversityPage from './components/DiversityPage';
import OurColleaguesPage from './components/OurColleaguesPage';
import ProfileDetailPage, { Profile } from './components/ProfileDetailPage';
import LeadershipTeamPage, { LeadershipProfile } from './components/LeadershipTeamPage';
import LeadershipProfileDetailPage from './components/LeadershipProfileDetailPage';
import HardServicesPage from './components/HardServicesPage';
import TrueValuesPage from './components/TrueValuesPage';
import OurServicesPage from './components/OurServicesPage';
import CleaningPage from './components/CleaningPage';
import SecurityPage from './components/SecurityPage';
import PestControlPage from './components/PestControlPage';
import PayrollPage from './components/PayrollPage';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import PrivacyNoticePage from './components/PrivacyNoticePage';
import AwardsPage from './components/AwardsPage';
import ManufacturingPage from './components/ManufacturingPage';
import RetailPage from './components/RetailPage';
import UnderDevelopmentPage from './components/UnderDevelopmentPage';
import IxoraFoundationPage from './components/IxoraFoundationPage';
import OfficeLocationsPage from './components/OfficeLocationsPage';
import OurBrandsPage from './components/OurBrandsPage';
import ContactPage from './components/ContactPage';
import OnePageOverviewPage from './components/OnePageOverviewPage';

const App: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['home']);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [selectedLeadershipProfile, setSelectedLeadershipProfile] = useState<LeadershipProfile | null>(null);

  const currentPage = history[history.length - 1];

  const goBack = useCallback(() => {
    if (history.length > 1) {
      window.scrollTo(0, 0);

      const oldCurrentPage = history[history.length - 1];
      const newCurrentPage = history[history.length - 2];
      
      if (oldCurrentPage === 'article-detail' && newCurrentPage === 'news') {
          setSelectedArticle(null);
      }
      if (oldCurrentPage === 'profile-detail' && newCurrentPage === 'our-colleagues') {
          setSelectedProfile(null);
      }
      if (oldCurrentPage === 'leadership-profile-detail' && newCurrentPage === 'leadership-team') {
          setSelectedLeadershipProfile(null);
      }

      setHistory(prevHistory => prevHistory.slice(0, -1));
    }
  }, [history]);

  useEffect(() => {
    let touchstartX = 0;
    const swipeThreshold = 75; // pixels
    
    const handleTouchStart = (e: TouchEvent) => {
        touchstartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        const touchendX = e.changedTouches[0].screenX;
        if (touchendX > touchstartX + swipeThreshold) {
            goBack();
        }
    };
    
    // For trackpad swipes
    let lastSwipeTime = 0;
    const handleWheel = (e: WheelEvent) => {
        const now = Date.now();
        // Cooldown to prevent multiple navigations from a single swipe gesture
        if (now - lastSwipeTime < 500) {
            return;
        }

        // Check for horizontal swipe gesture (e.g., on a trackpad)
        if (e.deltaX < -30 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) { // Swipe right
            goBack();
            lastSwipeTime = now;
        }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('wheel', handleWheel);
    };
  }, [goBack]);
  
  const navigate = (page: string, data: any = null) => {
    window.scrollTo(0, 0);

    if (page === 'article-detail') {
      setSelectedArticle(data);
    }
    if (page === 'profile-detail') {
      setSelectedProfile(data);
    }
    if (page === 'leadership-profile-detail') {
      setSelectedLeadershipProfile(data);
    }
    // Clear selected article when navigating to the main news page
    if (page === 'news' && data === null) {
      setSelectedArticle(null);
    }

    if (page !== currentPage) {
      setHistory(prevHistory => [...prevHistory, page]);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'technology':
        return <TechnologyPage />;
      case 'data-center':
        return <DataCenterPage navigate={navigate} />;
      case 'aviation':
        return <AviationPage navigate={navigate} />;
      case 'education':
// FIX: Pass navigate prop to EducationPage
        return <EducationPage navigate={navigate} />;
      case 'commercial':
// FIX: Pass navigate prop to CommercialPage
        return <CommercialPage navigate={navigate} />;
      case 'manufacturing':
        return <ManufacturingPage navigate={navigate} />;
      case 'retail':
        return <RetailPage />;
      case 'under-development':
        return <UnderDevelopmentPage />;
      case 'ixora-foundation':
        return <IxoraFoundationPage />;
      case 'cleaning':
        return <CleaningPage navigate={navigate} />;
      case 'security':
        return <SecurityPage navigate={navigate} />;
      case 'pest-control':
        return <PestControlPage navigate={navigate} />;
      case 'payroll':
        return <PayrollPage navigate={navigate} />;
      case 'careers':
        return <CareersPage navigate={navigate} />;
      case 'news':
        return <NewsAndMediaPage navigate={navigate} />;
      case 'article-detail':
        // Fallback to news list if no article is selected
        return selectedArticle ? <ArticleDetailPage article={selectedArticle} navigate={navigate} /> : <NewsAndMediaPage navigate={navigate} />;
      case 'accreditations':
        return <AccreditationsPage />;
      case 'awards':
        return <AwardsPage />;
      case 'search':
        return <SearchPage navigate={navigate} />;
      case 'facilities-management':
        return <FacilitiesManagementPage navigate={navigate} />;
      case 'facilities-management-service':
        return <FacilitiesManagementServicePage navigate={navigate} />;
      case 'hard-services':
        return <HardServicesPage navigate={navigate} />;
      case 'vision-mission':
        return <VisionAndMissionPage />;
      case 'diversity':
        return <DiversityPage />;
      case 'our-colleagues':
        return <OurColleaguesPage navigate={navigate} />;
      case 'our-services':
        return <OurServicesPage navigate={navigate} />;
      case 'leadership-team':
        return <LeadershipTeamPage navigate={navigate} />;
      case 'profile-detail':
        return selectedProfile ? <ProfileDetailPage profile={selectedProfile} navigate={navigate} /> : <OurColleaguesPage navigate={navigate} />;
      case 'leadership-profile-detail':
        return selectedLeadershipProfile ? <LeadershipProfileDetailPage profile={selectedLeadershipProfile} navigate={navigate} /> : <LeadershipTeamPage navigate={navigate} />;
      case 'true-values':
        return <TrueValuesPage navigate={navigate} />;
      case 'terms-and-conditions':
        return <TermsAndConditionsPage />;
      case 'privacy-notice':
        return <PrivacyNoticePage />;
      case 'office-locations':
        return <OfficeLocationsPage />;
      case 'our-brands':
        return <OurBrandsPage navigate={navigate} />;
      case 'contact':
        return <ContactPage navigate={navigate} />;
      case 'one-page-overview':
        return <OnePageOverviewPage navigate={navigate} />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  const pagesWithWhiteBg = ['search', 'technology', 'news', 'article-detail', 'data-center', 'aviation', 'careers', 'education', 'commercial', 'accreditations', 'facilities-management', 'facilities-management-service', 'vision-mission', 'diversity', 'our-colleagues', 'profile-detail', 'leadership-team', 'leadership-profile-detail', 'hard-services', 'true-values', 'our-services', 'cleaning', 'security', 'pest-control', 'payroll', 'terms-and-conditions', 'privacy-notice', 'awards', 'manufacturing', 'retail', 'under-development', 'ixora-foundation', 'office-locations', 'our-brands', 'contact', 'one-page-overview'];

  return (
    <div className={`${pagesWithWhiteBg.includes(currentPage) ? 'bg-white' : 'bg-gray-50'} min-h-screen font-sans text-gray-800`}>
      <Header navigate={navigate} />
      <div className="overflow-x-hidden">
        <main>
          {renderPage()}
        </main>
        <Footer navigate={navigate} />
      </div>
      <ChatBot />
    </div>
  );
};

export default App;