import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link
      to={`/services/${service.id}`}
      className="block bg-neutral-800 p-10 rounded-4xl shadow-xl hover:shadow-2xl group transform hover:-translate-y-1 transition-all duration-300 ease-in-out" // Adjusted background, padding, rounded
    >
      <div className="flex items-center justify-center w-20 h-20 bg-gold-accent rounded-full mb-8 mx-auto group-hover:bg-light-gold-accent transition-colors duration-300"> {/* Adjusted size and margin-bottom */}
        {/* Placeholder Icon */}
        <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 20 20"> {/* Adjusted icon size */}
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3z"></path>
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3 5a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
      </div>
      <h3 className="text-3xl font-bold text-gold-accent mb-4 text-center group-hover:text-light-gold-accent transition-colors duration-300 leading-tight"> {/* Increased font size and margin-bottom */}
        {service.title}
      </h3>
      <p className="text-white text-center text-xl leading-relaxed"> {/* Increased font size */}
        {service.shortDescription}
      </p>
    </Link>
  );
};

export default ServiceCard;