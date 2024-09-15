import React, { Component } from 'react'
import {ThreeDCardDemo} from '../components/ThreeDCardDemo'

const OurSponsors = () => {
  return (
<div>
<h1 class="text-4xl font-bold text-center text-white animate-fadeIn">
  Our Sponsors
</h1>
  <div class="flex justify-center space-x-4"> 
    <ThreeDCardDemo imageUrl="../src/assets/images/codechef_logo.png"/>
    <ThreeDCardDemo imageUrl="../src/assets/images/headerLogo.jpg"/>
  </div>
</div>
  );
}
export default OurSponsors;