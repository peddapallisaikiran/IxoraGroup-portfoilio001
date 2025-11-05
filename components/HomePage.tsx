import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Stats from './Stats';
import ESG from './ESG';
import Insights from './Insights';
import Connect from './Connect';
import Accreditations from './Accreditations';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';

const HomePage: React.FC<{ navigate: (page: string, data?: any) => void; }> = ({ navigate }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 md:gap-12 lg:gap-16">
      <Hero navigate={navigate} />
      <WhoWeAre navigate={navigate} />
      <WhatWeDo />
      <Services navigate={navigate} />
      <Stats />
      <ESG />
      <Insights navigate={navigate} />
      <Connect navigate={navigate} />
      <Accreditations navigate={navigate} />
    </div>
  );
};

export default HomePage;