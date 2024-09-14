import React from 'react';
import Card from '../components/Card'; // Adjust path as needed
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';

const Prizes = () => {
  // Use the intersection observer to track when elements come into view
  const { ref: grandPrizeRef, inView: grandPrizeVisible } = useInView({ triggerOnce: true });
  const { ref: secondPrizeRef, inView: secondPrizeVisible } = useInView({ triggerOnce: true });
  const { ref: thirdPrizeRef, inView: thirdPrizeVisible } = useInView({ triggerOnce: true });

  return (
    <Box className="max-w-4xl mx-auto p-6 bg-black">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-white text-left font-montserrat mb-8">
        Prizes
      </h2>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Grand Prize - Slide Up */}
        <div 
          ref={grandPrizeRef} 
          className={`col-span-1 md:row-span-2 ${grandPrizeVisible ? 'animate-slideUp' : ''}`}
        >
          <Card 
            title="Grand Prize" 
            subtitle="Top Award" 
            content="This is the grand prize, taking up more space to highlight its importance." 
            className="h-full"
          />
        </div>

        {/* Second Prize - Slide Left */}
        <div 
          ref={secondPrizeRef} 
          className={`col-span-1 ${secondPrizeVisible ? 'animate-slideLeft' : ''}`}
        >
          <Card 
            title="Second Prize" 
            subtitle="Runner Up" 
            content="This is a smaller card representing the second prize." 
            className="h-48"
          />
        </div>

        {/* Third Prize - Slide Right */}
        <div 
          ref={thirdPrizeRef} 
          className={`col-span-1 ${thirdPrizeVisible ? 'animate-slideRight' : ''}`}
        >
          <Card 
            title="Third Prize" 
            subtitle="Honorable Mention" 
            content="This is another smaller card representing an additional prize." 
            className="h-48"
          />
        </div>
      </div>
    </Box>
  );
};

export default Prizes;
