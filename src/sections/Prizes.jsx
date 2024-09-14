import React from 'react';
import Card from '../components/Card'; // Assuming the Card component is in the components folder

const Prizes = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-black">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-white text-left font-montserrat mb-8">
        Prizes
      </h2>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Grand Prize - spans entire left column on larger screens, full width on mobile */}
        <div className="col-span-1 md:row-span-2">
          <Card 
            title="Grand Prize" 
            subtitle="Top Award" 
            content="This is the grand prize, taking up more space to highlight its importance." 
            className="h-full"
          />
        </div>

        {/* Smaller cards - stacked on the right on larger screens, full width on mobile */}
        <div className="col-span-1">
          <Card 
            title="Second Prize" 
            subtitle="Runner Up" 
            content="This is a smaller card representing the second prize." 
            className="h-48"
          />
        </div>
        
        <div className="col-span-1">
          <Card 
            title="Third Prize" 
            subtitle="Honorable Mention" 
            content="This is another smaller card representing an additional prize." 
            className="h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
