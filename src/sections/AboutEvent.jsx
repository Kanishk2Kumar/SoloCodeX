import React from 'react';
import Button from '../components/Button'; // Adjust path as needed

const AboutEvent = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-black flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Text content on the left */}
      <div className="w-full md:w-1/3">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-palanquin">
          About the Event
        </h1>
      </div>

      {/* Sections on the right */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Rules Section */}
        <aside className="bg-black text-white p-8 rounded-lg w-full max-w-2xl font-mono">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2 text-red-500">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <p className="text-lg">bash</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4">$ Rules</h2>
            <ol className="list-decimal list-inside text-white text-lg space-y-4">
              <li>Follow all instructions carefully.</li>
              <li>Do not share confidential information.</li>
              <li>Submit tasks before the deadline.</li>
              <li>Be respectful and professional at all times.</li>
              <li>Provide feedback for continuous improvement.</li>
            </ol>
            <p className="text-green-400 mt-6">$</p>
          </div>
        </aside>

        {/* Competition Structure Section */}
        <aside className="bg-black text-white p-8 rounded-lg w-full max-w-2xl font-mono">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2 text-red-500">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <p className="text-lg">bash</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4">$ Competition Structure</h2>
            <ul className="list-disc list-inside text-white text-lg space-y-4">
              <li>Round 1: Problem-solving challenge.</li>
              <li>Round 2: Coding challenge.</li>
              <li>Round 3: Reverse engineering task.</li>
              <li>Round 4: Final presentation.</li>
            </ul>
            <p className="text-green-400 mt-6">$</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutEvent;
