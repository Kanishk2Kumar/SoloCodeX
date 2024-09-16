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
      <h2 className="bg-gradient-to-br from-[#FF9898] to-[#8054FF] bg-clip-text tracking-tight text-transparent text-4xl font-bold text-left font-chakrapetch mb-8">
        Prizes
      </h2>

      {/* Cards Layout */}
      <div className="mb-8 h-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Grand Prize - Slide Up */}
        <div 
          ref={grandPrizeRef} 
          className={`col-span-1 md:row-span-2 ${grandPrizeVisible ? 'animate-slideUp' : ''}`}
        >
          <Card 
            title={<h2 className="text-4xl font-bold text-white font-quicksand">First Prize</h2>} 
            subtitle="Top Award" 
            content="One month codechef premium"
            className="h-full "
          />
        </div>

        {/* Second Prize - Slide Left */}
        <div 
          ref={secondPrizeRef} 
          className={`col-span-1 ${secondPrizeVisible ? 'animate-slideLeft' : ''}`}
        >
          <Card 
            title={<h2 className="text-4xl font-bold text-white font-quicksand">Second Prize</h2>}
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
            title={<h2 className="text-4xl font-bold text-white font-quicksand">Third Prize</h2>} 
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
