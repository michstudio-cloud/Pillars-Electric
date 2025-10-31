import React from 'react';
import { Link } from 'react-router-dom';
import { Industry } from '../types';

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  return (
    <Link
      to={`/industries/${industry.id}`}
      className="block bg-neutral-800 p-10 rounded-4xl shadow-xl hover:shadow-2xl group transform hover:-translate-y-1 transition-all duration-300 ease-in-out" // Adjusted background, padding, rounded
    >
      <div className="flex items-center justify-center w-20 h-20 bg-gold-accent rounded-full mb-8 mx-auto group-hover:bg-light-gold-accent transition-colors duration-300"> {/* Adjusted size and margin-bottom */}
        {/* Placeholder Icon */}
        <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20"> {/* Adjusted icon size */}
          <path d="M10 2a2 2 0 00-2 2v2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H10zM8 4h4v2H8V4z"></path>
        </svg>
      </div>
      <h3 className="text-3xl font-bold text-gold-accent mb-4 text-center group-hover:text-light-gold-accent transition-colors duration-300 leading-tight"> {/* Increased font size and margin-bottom */}
        {industry.title}
      </h3>
      <p className="text-white text-center text-xl leading-relaxed"> {/* Increased font size */}
        {industry.shortDescription}
      </p>
    </Link>
  );
};

export default IndustryCard;