import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { VisionIcon } from './icons/VisionIcon';

const gold = '#D4B258';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, description }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(value.replace(/[,+yrs]/g, ''), 10);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime: number | null = null;
          const duration = 2000; // 2 seconds for all animations

          const animate = (currentTime: number) => {
            if (startTime === null) {
              startTime = currentTime;
            }

            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease-out cubic function: starts fast, slows down at the end
            const easedProgress = 1 - Math.pow(1 - progress, 3); 

            const currentCount = Math.floor(easedProgress * target);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target); // Ensure it ends on the exact target
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target]);
  
  const formatValue = (currentCount: number) => {
    // Only format large numbers with commas
    if (value.includes(',')) {
      return currentCount.toLocaleString();
    }
    return currentCount;
  };

  return (
    <div ref={ref} className="bg-white/50 border border-amber-100 rounded-2xl p-6 text-center shadow-sm">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100/50">
        {icon}
      </div>
      <p className="text-3xl sm:text-4xl font-bold" style={{ color: gold }}>
        {formatValue(count)}
        {value.includes('+') && count === target && '+'}
        {value.includes('yrs') && 'yrs'}
      </p>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const PngMaskIcon: React.FC<{ src: string; alt: string; }> = ({ src, alt }) => (
    <div 
        className="w-8 h-8"
        style={{
            backgroundColor: gold,
            maskImage: `url(${src})`,
            WebkitMaskImage: `url(${src})`,
            maskSize: 'contain',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
        }}
        role="img"
        aria-label={alt}
    />
);

const statsData = [
  {
    icon: <ShieldCheckIcon className="w-8 h-8" style={{ color: gold }} />,
    value: '10+yrs',
    description: 'History and experience in facilities services',
  },
  {
    icon: <PngMaskIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760592320/colleagues_ozqmiq.png" alt="Colleagues" />,
    value: '1800+',
    description: 'Team Members in india',
  },
  {
    icon: <PngMaskIcon src="https://res.cloudinary.com/dehglnwgz/image/upload/v1760592320/rating_xugkhx.png" alt="Customers" />,
    value: '100+',
    description: 'Customers supported across multiple sectors',
  },
  {
    icon: <VisionIcon className="w-8 h-8" style={{ color: gold }} />,
    value: '1',
    description: 'Group-wide shared vision and mission',
  },
];


const Stats: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-[radial-gradient(circle,#fef3c7_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="stats-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            History, Team Members, customers and vision
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            We share a group-wide vision and mission to become the best provider of facilities services for colleagues, customers and communities by making people and places the best they can be.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <StatCard key={stat.description} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;