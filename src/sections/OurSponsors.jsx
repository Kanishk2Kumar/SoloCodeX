import React from 'react';
import { ThreeDCardDemo } from '../components/ThreeDCardDemo';

const OurSponsors = () => {
  return (
    <div>
      <h1 className="text-4xl font-chakrapetch font-bold text-center bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
        Our Sponsors
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 "> 
        <ThreeDCardDemo imageUrl="../src/assets/images/codechef_logo.png" />
        <ThreeDCardDemo imageUrl="../src/assets/images/headerLogo.jpg" />
      </div>
    </div>
  );
};

export default OurSponsors;
