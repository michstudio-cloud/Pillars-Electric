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
      className="block bg-neutral-900 p-8 rounded-lg shadow-xl hover:shadow-2xl group transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gold-accent rounded-full mb-6 mx-auto group-hover:bg-light-gold-accent transition-colors duration-300">
        {/* Placeholder Icon */}
        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a2 2 0 00-2 2v2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H10zM8 4h4v2H8V4z"></path>
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gold-accent mb-3 text-center group-hover:text-light-gold-accent transition-colors duration-300">
        {industry.title}
      </h3>
      <p className="text-white text-center text-lg leading-relaxed">
        {industry.shortDescription}
      </p>
    </Link>
  );
};

export default IndustryCard;