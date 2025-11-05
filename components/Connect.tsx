import React from 'react';

const gold = '#D4B258';
const darkGold = '#C3A24B';
const darkBlue = '#192A51';

interface ConnectProps {
  navigate: (page: string) => void;
}

const Connect: React.FC<ConnectProps> = ({ navigate }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div 
        className="relative rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden" 
        style={{ backgroundColor: darkBlue }}
      >
        <div 
            className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"
            aria-hidden="true"
        ></div>
        <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold !leading-tight tracking-tight">
                Connect with your IxoraGroup team
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
            </p>
            <div className="mt-8">
                <button 
                  onClick={() => navigate('contact')}
                  style={{ backgroundColor: gold }} 
                  className="text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200"
                >
                    Contact Us
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;