import React from 'react';

const Card = ({ title, subtitle, content, className }) => {
  return (
    <div
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white border-opacity-30 relative ${className} transition-shadow duration-300 ease-in-out hover:shadow-glow`}
    >
      <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
      <h2 className="text-xl font-semibold text-gray-200 mb-4">{subtitle}</h2>
      <p className="text-gray-300">{content}</p>
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Card;
