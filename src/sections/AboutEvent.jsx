import React from 'react';
import Button from '../components/Button'; // Adjust path as needed

const AboutEvent = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-black flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Text content on the left */}
      <div className="w-full md:w-3/5 p-6 pl-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-palanquin">About the Event</h1>
        <p className="text-lg text-gray-300 mb-6">
          Join us for an exciting event filled with amazing activities, speakers, and prizes! It's a great opportunity to connect, learn, and have fun with like-minded individuals. We can't wait to see you there.
          Join us for an exciting event filled with amazing activities, speakers, and prizes! It's a great opportunity to connect, learn, and have fun with like-minded individuals. We can't wait to see you there.
        </p>
        <Button
          label="Learn More"
          backgroundColor="bg-gradient-custom"
          textColor="text-white"
          borderColor="border-black"
        />
      </div>

      <div className="w-full md:w-2/5 p-6">
        <img
          src="/path/to/your/image.jpg"  // Replace with your image path
          alt="Event"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutEvent;
